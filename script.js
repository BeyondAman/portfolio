(() => {
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isFinePointer = matchMedia("(pointer: fine)").matches;
  const root = document.documentElement;
  const body = document.body;
  document.querySelector("#year").textContent = new Date().getFullYear();

  const hasObserver = "IntersectionObserver" in window;
  if (!reduceMotion && hasObserver) body.classList.add("js-reveals-ready");
  if (hasObserver && !reduceMotion) {
    const reveal = new IntersectionObserver((entries, observer) => entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }), { threshold: 0.08, rootMargin: "0px 0px 40px 0px" });
    document.querySelectorAll("[data-reveal]").forEach((element) => reveal.observe(element));
  } else {
    document.querySelectorAll("[data-reveal]").forEach((element) => element.classList.add("visible"));
  }

  if (hasObserver) {
    const counters = new IntersectionObserver((entries, observer) => entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const element = entry.target;
      const target = Number(element.dataset.count);
      const suffix = element.dataset.suffix || "";
      if (reduceMotion) {
        element.textContent = target + suffix;
      } else {
        const startedAt = performance.now();
        const animate = (now) => {
          const progress = Math.min((now - startedAt) / 900, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          element.textContent = (target * eased).toFixed(target % 1 ? 2 : 0) + suffix;
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }
      observer.unobserve(element);
    }), { threshold: 0.65 });
    document.querySelectorAll("[data-count]").forEach((element) => counters.observe(element));
  } else {
    document.querySelectorAll("[data-count]").forEach((element) => {
      element.textContent = (element.dataset.count || "0") + (element.dataset.suffix || "");
    });
  }

  document.querySelectorAll(".node").forEach((node) => {
    node.addEventListener("click", () => {
      node.classList.toggle("active");
      node.setAttribute("aria-pressed", String(node.classList.contains("active")));
    });
  });

  const tracePath = document.querySelector("#trace-path");
  const tracePulse = document.querySelector("#trace-pulse");
  const stageLabel = document.querySelector("#stage-label");
  const stages = document.querySelectorAll("[data-stage]");
  let traceFrame;
  const renderTrace = () => {
    const scrollable = Math.max(document.documentElement.scrollHeight - innerHeight, 1);
    const progress = Math.min(scrollY / scrollable, 1);
    if (tracePath && tracePulse) {
      const point = tracePath.getPointAtLength(tracePath.getTotalLength() * progress);
      tracePulse.setAttribute("cx", point.x);
      tracePulse.setAttribute("cy", point.y);
    }
    traceFrame = undefined;
  };
  const scheduleTrace = () => {
    if (!traceFrame) traceFrame = requestAnimationFrame(renderTrace);
  };
  addEventListener("scroll", scheduleTrace, { passive: true });
  addEventListener("resize", scheduleTrace);
  scheduleTrace();
  if (hasObserver && stageLabel) {
    const stageObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) stageLabel.textContent = entry.target.dataset.stage;
    }), { rootMargin: "-38% 0px -52% 0px", threshold: 0 });
    stages.forEach((stage) => stageObserver.observe(stage));
  }

  if (isFinePointer && !reduceMotion) {
    document.querySelectorAll("[data-magnetic]").forEach((element) => {
      element.addEventListener("pointermove", (event) => {
        const bounds = element.getBoundingClientRect();
        const x = (event.clientX - bounds.left - bounds.width / 2) * 0.18;
        const y = (event.clientY - bounds.top - bounds.height / 2) * 0.18;
        element.style.transform = `translate(${x}px, ${y}px)`;
      });
      element.addEventListener("pointerleave", () => { element.style.transform = ""; });
    });

    document.querySelectorAll("[data-tilt]").forEach((card) => {
      card.addEventListener("pointermove", (event) => {
        const bounds = card.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        card.style.setProperty("--tilt-x", `${-y * 2.1}deg`);
        card.style.setProperty("--tilt-y", `${x * 2.1}deg`);
      });
      card.addEventListener("pointerleave", () => {
        card.style.setProperty("--tilt-x", "0deg");
        card.style.setProperty("--tilt-y", "0deg");
      });
    });
  }

  // Scroll-only orbital motion: down = anticlockwise, up = clockwise.
  const orbitalSystem = document.querySelector(".orbital-system");
  const orbitOne = document.querySelector(".orbit-one");
  const orbitTwo = document.querySelector(".orbit-two");
  const orbitalNodes = [
    { element: document.querySelector(".node-ai"), radius: 0.325, response: 1.12, phase: -Math.PI / 2 },
    { element: document.querySelector(".node-cloud"), radius: 0.485, response: 0.82, phase: 0.22 },
    { element: document.querySelector(".node-chain"), radius: 0.485, response: 0.82, phase: Math.PI + 0.22 }
  ];
  let angle = 0, velocity = 0, previousY = scrollY, previousAt = performance.now(), frame = 0, frameAt = 0;
  const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
  const renderOrbit = () => {
    if (!orbitalSystem) return;
    const w = orbitalSystem.clientWidth, h = orbitalSystem.clientHeight, cx = w / 2, cy = h / 2;
    const radians = angle * Math.PI / 180;
    if (orbitOne) orbitOne.style.transform = `rotate(${angle * 1.12}deg)`;
    if (orbitTwo) orbitTwo.style.transform = `rotate(${angle * 0.82}deg)`;
    orbitalNodes.forEach(({element, radius, response, phase}) => {
      if (!element) return;
      const a = phase + radians * response;
      element.style.left = `${cx + Math.cos(a) * w * radius}px`;
      element.style.top = `${cy + Math.sin(a) * h * radius}px`;
    });
  };
  const tick = (now) => {
    frame = 0;
    if (document.hidden || reduceMotion || Math.abs(velocity) < 1.5) {
      velocity = 0; frameAt = 0; body.classList.remove("scroll-reactive");
      root.style.setProperty("--scroll-energy", "0"); return;
    }
    const dt = frameAt ? Math.min(now - frameAt, 40) : 16.7;
    frameAt = now;
    angle += velocity * dt / 1000;
    velocity *= Math.exp(-dt / 420);
    renderOrbit();
    root.style.setProperty("--scroll-energy", String(clamp(Math.abs(velocity) / 180, 0, 3)));
    if (Math.abs(velocity) >= 1.5) frame = requestAnimationFrame(tick);
    else { velocity = 0; frameAt = 0; body.classList.remove("scroll-reactive"); root.style.setProperty("--scroll-energy", "0"); }
  };
  const onScroll = () => {
    const now = performance.now(), delta = scrollY - previousY, dt = Math.max(now - previousAt, 8);
    previousY = scrollY; previousAt = now;
    if (!orbitalSystem || reduceMotion || Math.abs(delta) < 0.1) return;
    // Negative angular velocity means anticlockwise for scroll-down.
    const impulse = clamp((-delta / dt) * 95, -720, 720);
    velocity = clamp(velocity * 0.32 + impulse * 0.68, -720, 720);
    body.classList.add("scroll-reactive");
    root.style.setProperty("--scroll-energy", String(clamp(Math.abs(velocity) / 180, 0, 3)));
    if (!frame) { frameAt = 0; frame = requestAnimationFrame(tick); }
  };
  if (orbitalSystem) {
    renderOrbit();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", renderOrbit, { passive: true });
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        if (frame) cancelAnimationFrame(frame);
        frame = 0; velocity = 0; frameAt = 0; body.classList.remove("scroll-reactive");
      } else { previousY = scrollY; previousAt = performance.now(); renderOrbit(); }
    });
  }

  // Static constellation background: draw on resize and pointer movement, not every frame.
  const canvas = document.querySelector("#constellation");
  const context = canvas && canvas.getContext ? canvas.getContext("2d") : null;
  let particles = [], pointer = {x:-9999,y:-9999}, cw = 0, ch = 0, dpr = 1;
  const drawConstellation = () => {
    if (!context) return;
    context.clearRect(0, 0, cw, ch);
    particles.forEach((p, i) => {
      const pd = Math.hypot(p.x-pointer.x, p.y-pointer.y);
      context.beginPath(); context.fillStyle = pd < 140 ? "rgba(212,251,98,.7)" : "rgba(197,208,201,.3)";
      context.arc(p.x,p.y,p.r,0,Math.PI*2); context.fill();
      for (let j=i+1;j<particles.length;j++) {
        const q=particles[j], d=Math.hypot(p.x-q.x,p.y-q.y);
        if (d<105) { context.beginPath(); context.strokeStyle=`rgba(160,176,170,${.12*(1-d/105)})`; context.moveTo(p.x,p.y); context.lineTo(q.x,q.y); context.stroke(); }
      }
    });
  };
  const resizeCanvas = () => {
    if (!canvas || !context) return;
    cw=innerWidth; ch=innerHeight; dpr=Math.min(devicePixelRatio||1,2);
    canvas.width=Math.round(cw*dpr); canvas.height=Math.round(ch*dpr);
    canvas.style.width=`${cw}px`; canvas.style.height=`${ch}px`;
    context.setTransform(dpr,0,0,dpr,0,0);
    const count=Math.min(reduceMotion?32:56,Math.floor(cw/(reduceMotion?28:24)));
    particles=Array.from({length:count},()=>({x:Math.random()*cw,y:Math.random()*ch,r:Math.random()*1.35+.25}));
    drawConstellation();
  };
  if (canvas && context) {
    resizeCanvas(); window.addEventListener("resize",resizeCanvas,{passive:true});
    if (!reduceMotion) window.addEventListener("pointermove",e=>{pointer={x:e.clientX,y:e.clientY};drawConstellation();},{passive:true});
  }
})();