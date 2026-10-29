(() => {
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isFinePointer = matchMedia("(pointer: fine)").matches;
  document.querySelector("#year").textContent = new Date().getFullYear();

  const reveal = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      reveal.unobserve(entry.target);
    }
  }), { threshold: 0.12 });
  document.querySelectorAll("[data-reveal]").forEach((element) => reveal.observe(element));

  const counters = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const element = entry.target;
    const target = Number(element.dataset.count);
    const suffix = element.dataset.suffix || "";
    const startedAt = performance.now();
    const animate = (now) => {
      const progress = Math.min((now - startedAt) / 1100, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      element.textContent = (target * eased).toFixed(target % 1 ? 2 : 0) + suffix;
      if (progress < 1) requestAnimationFrame(animate);
    };
    reduceMotion ? element.textContent = target + suffix : requestAnimationFrame(animate);
    counters.unobserve(element);
  }), { threshold: 0.8 });
  document.querySelectorAll("[data-count]").forEach((element) => counters.observe(element));

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
  const stageObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting && stageLabel) stageLabel.textContent = entry.target.dataset.stage;
  }), { rootMargin: "-40% 0px -52% 0px", threshold: 0 });
  stages.forEach((stage) => stageObserver.observe(stage));

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

  const canvas = document.querySelector("#constellation");
  const context = canvas.getContext("2d");
  const orbitalSystem = document.querySelector(".orbital-system");
  const orbitOne = document.querySelector(".orbit-one");
  const orbitTwo = document.querySelector(".orbit-two");
  const orbitalNodes = [
    { element: document.querySelector(".node-ai"), radius: 0.325, response: 1.12, phase: -Math.PI / 2 },
    { element: document.querySelector(".node-cloud"), radius: 0.485, response: 0.82, phase: 0.22 },
    { element: document.querySelector(".node-chain"), radius: 0.485, response: 0.82, phase: Math.PI + 0.22 }
  ];
  let particles = [];
  let pointer = { x: -999, y: -999 };
  let lastScrollPosition = scrollY;
  let lastScrollTime = performance.now();
  let targetKinetic = 0;
  let kinetic = 0;
  let orbitRotation = 0;
  const chargeOrbit = () => {
    if (reduceMotion) return;
    const now = performance.now();
    const delta = scrollY - lastScrollPosition;
    const elapsed = Math.max(now - lastScrollTime, 12);
    if (delta) {
      // Scroll up = clockwise, scroll down = counter-clockwise.
      const direction = delta < 0 ? 1 : -1;
      const impulse = Math.min(4.8, Math.max(0.16, Math.abs(delta / elapsed) * 0.095));
      targetKinetic = direction * impulse;
      document.body.classList.add("scroll-reactive");
      document.documentElement.style.setProperty("--scroll-energy", String(Math.min(Math.abs(impulse), 3)));
    }
    lastScrollPosition = scrollY;
    lastScrollTime = now;
  };
  addEventListener("scroll", chargeOrbit, { passive: true });
  document.addEventListener("scroll", chargeOrbit, { passive: true });
  const resize = () => {
    canvas.width = innerWidth * devicePixelRatio;
    canvas.height = innerHeight * devicePixelRatio;
    canvas.style.width = innerWidth + "px";
    canvas.style.height = innerHeight + "px";
    context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    particles = Array.from({ length: Math.min(70, Math.floor(innerWidth / 19)) }, () => ({
      x: Math.random() * innerWidth, y: Math.random() * innerHeight,
      radius: Math.random() * 1.5 + 0.25, vx: (Math.random() - 0.5) * 0.12, vy: (Math.random() - 0.5) * 0.12
    }));
  };
  const moveOrbitingNodes = () => {
    if (reduceMotion || !orbitalSystem) return;
    targetKinetic *= 0.965;
    kinetic += (targetKinetic - kinetic) * 0.1;
    if (Math.abs(targetKinetic) < 0.01) kinetic *= 0.992;
    orbitRotation += 0.045 + kinetic;
    const orbitRadians = orbitRotation * Math.PI / 180;
    if (orbitOne) orbitOne.style.transform = `rotate(${orbitRotation * 1.12}deg)`;
    if (orbitTwo) orbitTwo.style.transform = `rotate(${orbitRotation * 0.82}deg)`;
    const width = orbitalSystem.clientWidth;
    const height = orbitalSystem.clientHeight;
    const centreX = width / 2;
    const centreY = height / 2;
    orbitalNodes.forEach(({ element, radius, response, phase }) => {
      if (!element) return;
      const angle = phase + orbitRadians * response;
      element.style.left = `${centreX + Math.cos(angle) * width * radius}px`;
      element.style.top = `${centreY + Math.sin(angle) * height * radius}px`;
    });
  };
  const draw = () => {
    moveOrbitingNodes();
    context.clearRect(0, 0, innerWidth, innerHeight);
    particles.forEach((particle, index) => {
      particle.x += particle.vx; particle.y += particle.vy;
      if (particle.x < 0 || particle.x > innerWidth) particle.vx *= -1;
      if (particle.y < 0 || particle.y > innerHeight) particle.vy *= -1;
      const pointerDistance = Math.hypot(particle.x - pointer.x, particle.y - pointer.y);
      context.beginPath();
      context.fillStyle = pointerDistance < 140 ? "rgba(212,251,98,.7)" : "rgba(197,208,201,.3)";
      context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2); context.fill();
      for (let otherIndex = index + 1; otherIndex < particles.length; otherIndex += 1) {
        const other = particles[otherIndex];
        const distance = Math.hypot(particle.x - other.x, particle.y - other.y);
        if (distance < 105) {
          context.beginPath();
          context.strokeStyle = `rgba(160,176,170,${0.12 * (1 - distance / 105)})`;
          context.moveTo(particle.x, particle.y); context.lineTo(other.x, other.y); context.stroke();
        }
      }
    });
    if (!reduceMotion) requestAnimationFrame(draw);
  };
  resize();
  addEventListener("resize", resize);
  addEventListener("pointermove", (event) => { pointer = { x: event.clientX, y: event.clientY }; });
  draw();
})();
