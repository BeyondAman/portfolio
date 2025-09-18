(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    8350: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 5497));
    },
    5497: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return W;
          },
        });
      var r = n(7437),
        a = n(2265);
      let i = 'RUSTOLIDYjacpvweb3{}*></"$@&',
        o = "rgba(100, 100, 100, 0.040)",
        s = 14 / 3,
        l = () => {
          let e = (0, a.useRef)(null),
            t = (0, a.useRef)(),
            n = (0, a.useRef)([]),
            l = (0, a.useRef)({ x: 0, y: 0 }),
            c = (0, a.useRef)(null),
            d = (0, a.useRef)(!1),
            m = (0, a.useCallback)((e, t) => {
              let r = d.current
                  ? Math.ceil(t / 14) + 10
                  : Math.ceil(t / 14) + 2,
                a = Math.ceil(e / 14) + 2;
              n.current = [];
              for (let e = 0; e < r; e++)
                for (let t = 0; t < a; t++)
                  n.current.push({
                    x: 14 * t,
                    y: 14 * e,
                    originalX: 14 * t,
                    originalY: 14 * e,
                    color: o,
                    hoverColor: "rgba(100, 100, 100, 0.33)",
                    isMoving: !1,
                    opacity: 0,
                    character: i.charAt(Math.floor(Math.random() * i.length)),
                    drop: 1,
                  });
            }, []),
            u = (0, a.useCallback)(() => {
              let r = c.current,
                a = e.current;
              if (!r || !a) return;
              (r.fillStyle = "rgba(0, 0, 0, 0.1)"),
                r.fillRect(0, 0, a.width, a.height);
              let d =
                  l.current.x <= 0 ||
                  l.current.y <= 0 ||
                  l.current.x > a.width ||
                  l.current.y > a.height
                    ? 0
                    : 125,
                m = d * d,
                x = n.current,
                h = l.current.x,
                b = l.current.y;
              for (let e = 0; e < x.length; e++) {
                let t = x[e],
                  n = h - t.x,
                  a = b - t.y,
                  l = n * n + a * a;
                if (
                  (t.opacity < 1 && (t.opacity = Math.min(1, t.opacity + 0.01)),
                  l < m)
                ) {
                  let e = ((d - Math.sqrt(l)) / d) * 0.05,
                    r = t.x + n * e,
                    i = t.y + a * e,
                    o = r - t.originalX,
                    c = i - t.originalY;
                  if (o * o + c * c > s * s) {
                    let e = Math.atan2(c, o);
                    (r = t.originalX + Math.cos(e) * s),
                      (i = t.originalY + Math.sin(e) * s);
                  }
                  (t.isMoving = r !== t.x || i !== t.y),
                    (t.x = r),
                    (t.y = i),
                    (t.color = t.isMoving
                      ? t.hoverColor
                      : "rgba(100, 100, 100, 0.15)");
                } else {
                  let e = t.originalX - t.x,
                    n = t.originalY - t.y;
                  (t.x += 0.1 * e),
                    (t.y += 0.1 * n),
                    (t.isMoving = Math.abs(e) > 0.01 || Math.abs(n) > 0.01),
                    (t.color = t.isMoving ? t.hoverColor : o);
                }
                (t.isMoving || 0.02 > Math.random()) &&
                  0.2 > Math.random() &&
                  (t.character = i.charAt(
                    Math.floor(Math.random() * i.length)
                  )),
                  (r.fillStyle = t.color),
                  (r.globalAlpha = t.opacity),
                  (r.font = "".concat(13, "px monospace")),
                  (r.textAlign = "center"),
                  (r.textBaseline = "middle"),
                  r.fillText(t.character, t.x, t.y);
              }
              t.current = requestAnimationFrame(u);
            }, []);
          return (
            (0, a.useEffect)(() => {
              let n = e.current;
              if (!n) return;
              let r = n.getContext("2d");
              if (!r) return;
              (c.current = r), (d.current = window.innerWidth <= 768);
              let a = () => {
                  (n.width = window.innerWidth),
                    (n.height = window.innerHeight),
                    (d.current = window.innerWidth <= 768),
                    m(n.width, n.height);
                },
                i = (e) => {
                  d.current || (l.current = { x: e.clientX, y: e.clientY });
                };
              return (
                a(),
                u(),
                window.addEventListener("resize", a),
                window.addEventListener("mousemove", i),
                () => {
                  window.removeEventListener("resize", a),
                    window.removeEventListener("mousemove", i),
                    t.current && cancelAnimationFrame(t.current);
                }
              );
            }, [u, m]),
            (0, r.jsx)("canvas", { ref: e, className: "w-full h-full" })
          );
        };
      var c = () => {
        let [e, t] = (0, a.useState)(!1);
        return (
          (0, a.useEffect)(() => {
            t(!0);
          }, []),
          (0, r.jsx)("div", {
            className: "fixed top-0 left-0 w-full h-full -z-10",
            children: e && (0, r.jsx)(l, {}),
          })
        );
      };
      let d = [
          "hi, I'm aman, a DevOps Engineer.",
          "hi, I'm aman, a Platform Engineer.",
          "hi, I'm aman, an Infrastructure Engineer.",
          "hi, I'm aman, an SRE.",
          "hi, I'm aman, a Prompt Engineer.",
          "hi, I'm aman, a Web3 infrastructure specialist.",
          "hi, I'm aman, an AI infrastructure specialist.",
        ],
        m = [
          "B",
          "A",
          "R",
          "C",
          "D",
          "リ",
          "ス",
          "ト",
          "か",
          "ら",
          "R",
          "0",
          "1",
          "M",
          "L",
          "K",
          "J",
          "I",
          "H",
          "G",
          "F",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z",
        ],
        u = () => m[Math.floor(Math.random() * m.length)];
      function x() {
        let [e, t] = (0, a.useState)(0),
          [n, i] = (0, a.useState)(d[0]),
          [o, s] = (0, a.useState)(!1),
          l = (0, a.useCallback)(
            async (e) => {
              s(!0);
              let t = Math.max(n.length, e.length);
              for (let n = 0; n < 7; n++)
                i(
                  Array.from({ length: t }, (t, n) =>
                    n < e.length && Math.random() > 0.6 ? e[n] : u()
                  ).join("")
                ),
                  await new Promise((e) => setTimeout(e, 30));
              i(e), s(!1);
            },
            [n]
          );
        return (
          (0, a.useEffect)(() => {
            let n = setInterval(() => {
              if (!o) {
                let n = (e + 1) % d.length;
                t(n), l(d[n]);
              }
            }, 3e3);
            return () => clearInterval(n);
          }, [e, o, l]),
          (0, a.useEffect)(() => {
            l(d[0]);
          }, []),
          (0, r.jsx)("h1", {
            className:
              "font-semibold text-xl sm:text-2xl md:text-3xl transition-all duration-500 max-w-[90vw] break-words text-center select-none",
            children: n,
          })
        );
      }
      let h = [
          "B",
          "A",
          "R",
          "C",
          "D",
          "リ",
          "ス",
          "ト",
          "か",
          "ら",
          "R",
          "0",
          "1",
          "M",
          "L",
          "K",
          "J",
          "I",
          "H",
          "G",
          "F",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z",
        ],
        b = () => h[Math.floor(Math.random() * h.length)],
        p = {
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.7, staggerChildren: 0.1 },
          },
          exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
        },
        g = {
          hidden: { y: 50, opacity: 0, rotateX: -80 },
          visible: {
            y: 0,
            opacity: 1,
            rotateX: 0,
            transition: { type: "spring", stiffness: 100, damping: 12 },
          },
          hover: { scale: 1.05, rotateY: 5, transition: { duration: 0.2 } },
        };
      function f(e) {
        let {
            children: t,
            text: n,
            scrambleOnMount: i = !0,
            scrambleOnHover: o = !1,
            scrambleCount: s = 5,
            scrambleDelay: l = 50,
            className: c = "",
            as: d = "div",
            preserveSpaces: m = !0,
            forceScramble: u = !1,
          } = e,
          [x, h] = (0, a.useState)(n || ""),
          [p, g] = (0, a.useState)(!1),
          [f, v] = (0, a.useState)(!1),
          w = (0, a.useCallback)(async () => {
            if (p) return;
            g(!0);
            let e = n || ("string" == typeof t ? t : "");
            for (let t = 0; t < s; t++)
              h(
                Array.from(e)
                  .map((e) => (" " === e && m ? e : b()))
                  .join("")
              ),
                await new Promise((e) => setTimeout(e, l));
            h(e), g(!1);
          }, [n, t, p, s, l, m]);
        (0, a.useEffect)(() => {
          i && !f && (v(!0), w());
        }, [i, f, w]),
          (0, a.useEffect)(() => {
            u && !p && w();
          }, [u, p, w]);
        let y = (0, a.useCallback)(() => {
          o && !p && w();
        }, [o, p, w]);
        return (0, r.jsx)(d, {
          className: c,
          onMouseEnter: y,
          children: n ? x : t,
        });
      }
      function v(e) {
        let {
            name: t,
            url: n,
            desc: i,
            scrambleOnMount: o = !0,
            scrambleOnHover: s = !0,
            scrambleCount: l = 5,
            scrambleDelay: c = 50,
          } = e,
          [d, m] = (0, a.useState)(!1),
          u = (0, a.useCallback)(() => {
            s &&
              (m(!0),
              setTimeout(() => {
                m(!1);
              }, l * c));
          }, [s, l, c]);
        return (0, r.jsxs)("a", {
          href: n,
          className:
            "group border-2 p-4 hover:scale-105 transition-all duration-150 bg-neutral-800/30 border-neutral-800 hover:border-gray-200 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/80",
          target: "_blank",
          rel: "noopener noreferrer",
          onMouseEnter: u,
          children: [
            (0, r.jsx)(f, {
              as: "h2",
              text: t,
              scrambleOnMount: o,
              scrambleOnHover: !1,
              scrambleCount: l,
              scrambleDelay: c,
              className: "mb-3 text-2xl font-semibold",
              forceScramble: d,
            }),
            (0, r.jsx)(f, {
              as: "p",
              text: i,
              scrambleOnMount: o,
              scrambleOnHover: !1,
              scrambleCount: l,
              scrambleDelay: c,
              className: "font-mono text-sm opacity-50",
              forceScramble: d,
            }),
          ],
        });
      }
      var w = n(1513),
        y = n(4446);
      function j(e) {
        let {
          title: t,
          description: n,
          details: a,
          url: i,
          className: o = "",
          onClick: s,
        } = e;
        return (0, r.jsxs)(w.E.div, {
          variants: g,
          whileHover: "hover",
          onClick: s || (() => window.open(i, "_blank")),
          className:
            "\n        relative p-3 sm:p-4 md:p-6 backdrop-blur-sm\n        bg-gradient-to-br ".concat(
              o,
              "\n        border border-green-500/30\n        shadow-lg shadow-green-500/20\n        transition-all duration-300\n        overflow-hidden\n        cursor-pointer\n        rounded-none\n        group\n      "
            ),
          style: {
            boxShadow:
              "0 0 10px rgba(0,255,0,0.2), inset 0 0 20px rgba(0,255,0,0.1)",
          },
          children: [
            (0, r.jsx)("div", {
              className: "absolute inset-0 pointer-events-none",
              children: (0, r.jsx)(w.E.div, {
                className: "absolute inset-0 border border-green-500/0",
                initial: !1,
                animate: {
                  borderColor: [
                    "rgba(34, 197, 94, 0)",
                    "rgba(34, 197, 94, 0.3)",
                    "rgba(34, 197, 94, 0)",
                  ],
                  boxShadow: [
                    "0 0 0px rgba(34, 197, 94, 0)",
                    "0 0 20px rgba(34, 197, 94, 0.2)",
                    "0 0 0px rgba(34, 197, 94, 0)",
                  ],
                },
                transition: { duration: 2, repeat: 1 / 0, ease: "easeInOut" },
              }),
            }),
            (0, r.jsxs)("div", {
              className: "mt-1 sm:mt-2 relative z-10",
              children: [
                (0, r.jsx)("h3", {
                  className:
                    "font-mono font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2 text-green-400 group-hover:text-green-300 transition-colors duration-300",
                  children: t,
                }),
                (0, r.jsx)("p", {
                  className:
                    "font-mono text-xs sm:text-sm text-green-300 mb-2 sm:mb-3 group-hover:text-green-200 transition-colors duration-300",
                  children: n,
                }),
                (0, r.jsx)("p", {
                  className:
                    "font-mono text-xs text-green-200/70 line-clamp-2 sm:line-clamp-none group-hover:text-green-200/90 transition-colors duration-300",
                  children: a,
                }),
              ],
            }),
            (0, r.jsx)("div", {
              className:
                "absolute -bottom-2 -right-2 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 opacity-10 group-hover:opacity-20 transition-opacity duration-300",
              children: (0, r.jsx)("div", {
                className:
                  "w-full h-full bg-gradient-to-br from-green-500/20 to-transparent rotate-45",
              }),
            }),
            (0, r.jsx)(w.E.div, {
              className:
                "absolute inset-0 bg-gradient-to-br from-green-500/0 via-green-500/5 to-green-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
              initial: !1,
              animate: { backgroundPosition: ["0% 0%", "100% 100%"] },
              transition: { duration: 2, repeat: 1 / 0, ease: "linear" },
            }),
            (0, r.jsxs)("div", {
              className: "absolute inset-0 pointer-events-none",
              children: [
                (0, r.jsx)(w.E.div, {
                  className:
                    "absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-green-500/0",
                  initial: !1,
                  animate: {
                    borderColor: [
                      "rgba(34, 197, 94, 0)",
                      "rgba(34, 197, 94, 0.5)",
                      "rgba(34, 197, 94, 0)",
                    ],
                  },
                  transition: {
                    duration: 2,
                    repeat: 1 / 0,
                    ease: "easeInOut",
                    delay: 0,
                  },
                }),
                (0, r.jsx)(w.E.div, {
                  className:
                    "absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-green-500/0",
                  initial: !1,
                  animate: {
                    borderColor: [
                      "rgba(34, 197, 94, 0)",
                      "rgba(34, 197, 94, 0.5)",
                      "rgba(34, 197, 94, 0)",
                    ],
                  },
                  transition: {
                    duration: 2,
                    repeat: 1 / 0,
                    ease: "easeInOut",
                    delay: 0.5,
                  },
                }),
                (0, r.jsx)(w.E.div, {
                  className:
                    "absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-green-500/0",
                  initial: !1,
                  animate: {
                    borderColor: [
                      "rgba(34, 197, 94, 0)",
                      "rgba(34, 197, 94, 0.5)",
                      "rgba(34, 197, 94, 0)",
                    ],
                  },
                  transition: {
                    duration: 2,
                    repeat: 1 / 0,
                    ease: "easeInOut",
                    delay: 1,
                  },
                }),
                (0, r.jsx)(w.E.div, {
                  className:
                    "absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-green-500/0",
                  initial: !1,
                  animate: {
                    borderColor: [
                      "rgba(34, 197, 94, 0)",
                      "rgba(34, 197, 94, 0.5)",
                      "rgba(34, 197, 94, 0)",
                    ],
                  },
                  transition: {
                    duration: 2,
                    repeat: 1 / 0,
                    ease: "easeInOut",
                    delay: 1.5,
                  },
                }),
              ],
            }),
          ],
        });
      }
      let N = [
          {
            title: "90% Reduction in Deployment Time",
            description: "Deployment time reduced from 40 to 5 minutes.",
            className:
              "from-purple-900/20 to-purple-950/20 border-purple-900/50",
            details:
              "Achieved a 90% reduction in deployment time by migrating legacy CI/CD pipelines to ArgoCD and GitHub Actions.",
            url: "#",
          },
          {
            title: "35% Infrastructure Cost Savings",
            description: "35% monthly cost savings realized.",
            className:
              "from-emerald-900/20 to-emerald-950/20 border-emerald-900/50",
            details:
              "Realized a 35% monthly cost savings through in-depth analysis and optimization of cloud architecture.",
            url: "#",
          },
          {
            title: "99.95% System Uptime",
            description: "Maintained 99.95% system uptime.",
            className:
              "from-yellow-900/20 to-yellow-950/20 border-yellow-900/50",
            details:
              "Engineered multi-regional Kubernetes clusters to support high scalability and availability, achieving 99.95% production uptime.",
            url: "#",
          },
          {
            title: "120M Daily Transactions",
            description:
              "Managed infrastructure for a blockchain SaaS handling 120M daily transactions.",
            className: "from-blue-900/20 to-blue-950/20 border-blue-900/50",
            details:
              "Designed and orchestrated cloud infrastructure for the deployment of a highly scalable blockchain RPC-based SaaS handling 120 million daily transactions.",
            url: "#",
          },
          {
            title: "7900% Reduction in Deployment Time",
            description:
              "New blockchain instance deployment time reduced from 8 hours to 6 minutes.",
            className: "from-red-900/20 to-red-950/20 border-red-900/50",
            details:
              "Achieved a 7900% reduction in the time required for deploying a new blockchain instance.",
            url: "#",
          },
          {
            title: "Zero-Downtime Upgrades",
            description: "Led upgrades and migrations with zero downtime.",
            className:
              "from-purple-900/20 to-purple-950/20 border-purple-900/50",
            details:
              "Executed high-risk service mesh upgrades (Istio) across all production services with zero downtime and also achieved zero downtime deployments/upgrades using Canary and Blue/Green rollout strategies in Kubernetes.",
            url: "#",
          },
        ],
        E = ["0", "x"],
        k = ["r", "e", "s", "u", "m", "e"],
        S = (e) => {
          let { achievements: t } = e,
            [n, i] = (0, a.useState)(!1),
            [o, s] = (0, a.useState)([]),
            [l, c] = (0, a.useState)(!1),
            [d, m] = (0, a.useState)(!1),
            [u, x] = (0, a.useState)(""),
            [h, b] = (0, a.useState)(!0),
            [g, f] = (0, a.useState)(""),
            [v, N] = (0, a.useState)(!1),
            S = (0, a.useCallback)(() => {
              x(""), s([]);
            }, []),
            C = (0, a.useCallback)(() => {
              let e = "ACHIEVEMENT UNLOCKED!",
                t = 0,
                n = setInterval(() => {
                  t <= e.length ? (x(e.slice(0, t)), t++) : clearInterval(n);
                }, 100);
              return () => clearInterval(n);
            }, []),
            z = (0, a.useCallback)(() => {
              let e = document.createElement("a");
              (e.href =
                "https://drive.google.com/uc?export=download&id=1omhpz8Ub8alA6K36vPqz4Qm0rfwhHwqe"),
                (e.download = "Aman_Upadhyay_Resume.pdf.pdf"),
                document.body.appendChild(e),
                e.click(),
                document.body.removeChild(e),
                s([]);
            }, []);
          (0, a.useEffect)(() => {
            let e = (e) => {
              let t = [...o, e.key.toLowerCase()];
              t.length > k.length && t.shift(),
                s(t),
                t.join("") === E.join("") && (i(!0), s([])),
                t.join("") === k.join("") &&
                  (N(!0),
                  setTimeout(() => {
                    z(), N(!1);
                  }, 1500));
            };
            return (
              window.addEventListener("keydown", e),
              () => window.removeEventListener("keydown", e)
            );
          }, [o, z]),
            (0, a.useEffect)(() => {
              if (n) return C();
              S();
            }, [n, C, S]),
            (0, a.useEffect)(() => {
              let e = setTimeout(() => c(!0), 2500);
              return () => clearTimeout(e);
            }, []),
            (0, a.useEffect)(() => {
              let e = () => {
                m(window.innerWidth <= 768),
                  f(window.innerWidth <= 768 ? "?" : "type '0x'");
              };
              return (
                e(),
                window.addEventListener("resize", e),
                () => window.removeEventListener("resize", e)
              );
            }, []);
          let M = (0, a.useCallback)(() => {
            i(!1), s([]);
          }, []);
          return (0, r.jsxs)(r.Fragment, {
            children: [
              l &&
                !n &&
                !v &&
                (0, r.jsx)(
                  w.E.div,
                  {
                    initial: { scale: 1 },
                    animate: {
                      scale: 1,
                      filter: h
                        ? "drop-shadow(0 0 15px rgba(34, 197, 94, 0.6)) drop-shadow(0 0 30px rgba(34, 197, 94, 0.4))"
                        : "drop-shadow(0 0 0px rgba(34, 197, 94, 0))",
                    },
                    transition: { duration: 2, ease: "easeInOut" },
                    onAnimationComplete: () => {
                      h
                        ? (setTimeout(() => b(!0), 2e3), b(!1))
                        : (f(d ? "?" : "type '0x'"), b(!0));
                    },
                    onClick: d ? () => i(!0) : void 0,
                    className:
                      "fixed bottom-6 right-6 font-mono text-base flex flex-col items-end select-none mix-blend-screen\n            ".concat(
                        d
                          ? "cursor-pointer backdrop-blur-sm px-5 py-3 border border-green-500/30 rounded-none"
                          : "px-4 py-2"
                      ),
                    children: (0, r.jsxs)(w.E.div, {
                      className: "relative group ".concat(
                        d
                          ? ""
                          : "hover:scale-105 transition-transform duration-300"
                      ),
                      animate: {
                        textShadow: h
                          ? [
                              "0 0 15px rgba(34, 197, 94, 0.7)",
                              "0 0 25px rgba(34, 197, 94, 0.5)",
                              "0 0 15px rgba(34, 197, 94, 0.7)",
                            ]
                          : "0 0 0px rgba(34, 197, 94, 0)",
                      },
                      transition: {
                        duration: 2,
                        repeat: 1 / 0,
                        ease: "easeInOut",
                      },
                      children: [
                        (0, r.jsxs)("div", {
                          className:
                            "text-green-400 font-medium tracking-wider ".concat(
                              !d &&
                                "group-hover:text-green-300 transition-colors duration-300",
                              " relative"
                            ),
                          children: [
                            (0, r.jsxs)("span", {
                              className: "text-sm",
                              children: ["[", g, "]"],
                            }),
                            !d &&
                              (0, r.jsx)(w.E.div, {
                                className:
                                  "absolute -inset-2 bg-green-500/10 blur rounded-none -z-10",
                                animate: { opacity: h ? [0.6, 0.8, 0.6] : 0 },
                                transition: {
                                  duration: 2,
                                  repeat: 1 / 0,
                                  ease: "easeInOut",
                                },
                              }),
                          ],
                        }),
                        !d &&
                          (0, r.jsxs)(r.Fragment, {
                            children: [
                              (0, r.jsx)("div", {
                                className:
                                  "absolute inset-0 bg-green-500/10 -z-10 blur-xl rounded-full transform scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                              }),
                              (0, r.jsx)(w.E.div, {
                                className:
                                  "absolute -inset-2 bg-gradient-to-r from-green-500/0 via-green-500/20 to-green-500/0 -z-20 opacity-0 group-hover:opacity-100",
                                animate: {
                                  backgroundPosition: ["200% 0", "-200% 0"],
                                },
                                transition: {
                                  duration: 3,
                                  repeat: 1 / 0,
                                  ease: "linear",
                                },
                              }),
                            ],
                          }),
                      ],
                    }),
                  },
                  "hint"
                ),
              v &&
                (0, r.jsxs)(w.E.div, {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -20 },
                  className:
                    "fixed bottom-6 right-6 font-mono text-lg text-green-400 flex items-center gap-2 px-4 py-2",
                  children: [
                    (0, r.jsx)(w.E.div, {
                      animate: { rotate: 360 },
                      transition: {
                        duration: 1,
                        repeat: 1 / 0,
                        ease: "linear",
                      },
                      className:
                        "w-4 h-4 border-2 border-green-500 border-t-transparent rounded-full",
                    }),
                    "Downloading Resume...",
                  ],
                }),
              (0, r.jsx)(y.M, {
                children:
                  n &&
                  (0, r.jsxs)("div", {
                    className:
                      "fixed inset-0 flex items-center justify-center bg-black/90 z-50 overflow-y-auto",
                    children: [
                      (0, r.jsx)(w.E.div, {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: { opacity: 0 },
                        className: "absolute inset-0 pointer-events-none crt",
                        style: {
                          backgroundImage:
                            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,0,0.1) 2px, rgba(0,255,0,0.1) 4px)",
                        },
                      }),
                      (0, r.jsxs)(w.E.div, {
                        className:
                          "z-10 w-full max-w-5xl py-8 sm:py-12 px-2 sm:px-4 relative",
                        variants: p,
                        initial: "hidden",
                        animate: "visible",
                        exit: "exit",
                        children: [
                          (0, r.jsx)(w.E.div, {
                            initial: { opacity: 0, y: -20 },
                            animate: {
                              opacity: [0, 1, 0.5, 1],
                              textShadow: [
                                "0 0 5px #0f0",
                                "0 0 20px #0f0",
                                "0 0 5px #0f0",
                                "0 0 2px #0f0",
                              ],
                            },
                            transition: { duration: 2.7, repeat: 1 / 0 },
                            className:
                              "text-xl sm:text-2xl md:text-3xl font-mono font-bold mb-4 sm:mb-8 text-center text-green-500 min-h-[48px]",
                            children: u,
                          }),
                          (0, r.jsx)(w.E.div, {
                            className:
                              "grid gap-3 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2 sm:px-4",
                            children: t.map((e, t) =>
                              (0, r.jsx)(j, { ...e }, t)
                            ),
                          }),
                          (0, r.jsx)(w.E.button, {
                            onClick: M,
                            className:
                              "mt-4 sm:mt-6 md:mt-8 px-3 sm:px-4 py-2 font-mono text-sm sm:text-base text-green-500 border border-green-500/50 hover:bg-green-500/20 transition-colors mx-auto block rounded-none",
                            whileHover: { scale: 1.05 },
                            whileTap: { scale: 0.95 },
                            children: "[CLOSE]",
                          }),
                        ],
                      }),
                    ],
                  }),
              }),
            ],
          });
        };
      var C = () => {
        let [e, t] = (0, a.useState)(!1);
        return (
          (0, a.useEffect)(() => {
            t(!0);
          }, []),
          (0, r.jsx)("div", {
            className: "w-full max-w-5xl",
            children: e && (0, r.jsx)(S, { achievements: N }),
          })
        );
      };
      let z = [
          {
            title: "DevOps & Solution Architect",
            company: "Redacted (Freelance)",
            role: "Freelance",
            period: "Jan 2025 - Jun 2025",
            description:
              "Orchestrating and scaling cloud-native systems for Web3 infrastructure.",
            className: "from-blue-900/20 to-blue-950/20 border-blue-900/50",
            details:
              "Managed and optimized multi-cloud infrastructure across AWS and Hetzner, achieving 99.95% uptime. Spearheaded zero-downtime migrations for over 100 instances and orchestrated zero-downtime upgrades of 100+ blockchain nodes. Improved system reliability from 99% to 99.9% by redesigning the monitoring and alerting stack, cutting incident response time by 30%. Deployed and managed high-availability blockchain networks like Karak, Sui, Sei, and Ronin.",
            technologies: [
              "AWS",
              "Hetzner",
              "Terraform",
              "Grafana",
              "Prometheus",
              "Vault",
              "Karak",
              "Sui",
              "Sei",
              "Ronin",
            ],
            url: "#",
          },
          {
            title: "DevOps Engineer",
            company: "Fetch.ai",
            role: "Full-time",
            period: "Jun 2023 - Dec 2024",
            description:
              "Improving CI/CD pipelines and strengthening infrastructure for a leading AI blockchain.",
            className:
              "from-purple-900/20 to-purple-950/20 border-purple-900/50",
            details:
              "Executed a high-risk, zero-downtime service mesh upgrade from Istio 1.8 to 1.17 and upgraded Kubernetes clusters on GKE. Migrated legacy CI/CD pipelines to ArgoCD and GitHub Actions, reducing deployment time from 40 to 5 minutes. Engineered multi-regional Kubernetes clusters, achieving 99.95% production uptime. Implemented a robust observability stack using Prometheus, Grafana, and Loki. Automated the deployment of complex cloud infrastructure with Terraform.",
            technologies: [
              "GKE",
              "ArgoCD",
              "GitHub Actions",
              "Prometheus",
              "Grafana",
              "Loki",
              "Istio",
              "Kubernetes",
              "Terraform",
              "Okta",
            ],
            url: "https://fetch.ai/",
          },
          {
            title: "DevOps Engineer",
            company: "Syvora",
            role: "Full-time",
            period: "Mar 2021 - May 2023",
            description:
              "Orchestrating cloud infrastructure for a scalable blockchain RPC-based SaaS.",
            className:
              "from-emerald-900/20 to-emerald-950/20 border-emerald-900/50",
            details:
              "Designed and orchestrated cloud infrastructure for a blockchain RPC-based SaaS handling 120 million daily transactions. Realized a significant 35% monthly cost savings through in-depth analysis and optimization of the cloud architecture. Achieved zero-downtime deployments using Canary and Blue/Green rollout strategies in Kubernetes. Developed a failover mechanism to guarantee high uptime for blockchain nodes. Implemented horizontal pod auto-scaling and cluster auto-scaling for cost savings and high availability.",
            technologies: [
              "AWS",
              "Kubernetes",
              "Docker",
              "Prometheus",
              "Grafana",
              "Cosmos",
              "Terraform",
              "Ansible",
            ],
            url: "https://www.syvora.com/",
          },
          {
            title: "Full Stack Developer",
            company: "Syvora",
            role: "Full-time",
            period: "Jan 2020 - Feb 2021",
            description:
              "Developing and refactoring web applications and APIs with a focus on automation.",
            className: "from-red-900/20 to-red-950/20 border-red-900/50",
            details:
              "Refactored backend API call flow, reducing third-party service calls by 40% and lowering monthly integration costs. Built automated CI/CD pipelines using Jenkins and GitHub Actions, cutting manual deployment efforts by 60%. Containerized legacy applications with Docker, reducing deployment times by 50%. Led a zero-downtime database migration to PostgreSQL.",
            technologies: [
              "Python",
              "JavaScript",
              "Docker",
              "Jenkins",
              "GitHub Actions",
              "PostgreSQL",
              "REST APIs",
            ],
            url: "https://www.syvora.com/",
          },
        ],
        M = ["e", "x", "p"],
        L = (e) => {
          let { experiences: t } = e,
            [n, i] = (0, a.useState)(!1),
            [o, s] = (0, a.useState)([]),
            [l, c] = (0, a.useState)(!1),
            [d, m] = (0, a.useState)(!1),
            [u, x] = (0, a.useState)(""),
            [h, b] = (0, a.useState)(!0),
            [g, f] = (0, a.useState)(""),
            v = (0, a.useCallback)(() => {
              x(""), s([]);
            }, []),
            N = (0, a.useCallback)(() => {
              let e = "EXPERIENCE TIMELINE",
                t = 0,
                n = setInterval(() => {
                  t <= e.length ? (x(e.slice(0, t)), t++) : clearInterval(n);
                }, 100);
              return () => clearInterval(n);
            }, []);
          (0, a.useEffect)(() => {
            let e = (e) => {
              let t = [...o, e.key.toLowerCase()];
              t.length > M.length && t.shift(),
                s(t),
                t.join("") === M.join("") && (i(!0), s([]));
            };
            return (
              window.addEventListener("keydown", e),
              () => window.removeEventListener("keydown", e)
            );
          }, [o]),
            (0, a.useEffect)(() => {
              if (n) return N();
              v();
            }, [n, N, v]),
            (0, a.useEffect)(() => {
              let e = setTimeout(() => c(!0), 3500);
              return () => clearTimeout(e);
            }, []),
            (0, a.useEffect)(() => {
              let e = () => {
                m(window.innerWidth <= 768),
                  f(window.innerWidth <= 768 ? "?" : "type 'exp'");
              };
              return (
                e(),
                window.addEventListener("resize", e),
                () => window.removeEventListener("resize", e)
              );
            }, []);
          let E = (0, a.useCallback)(() => {
            i(!1), s([]);
          }, []);
          return (0, r.jsxs)(r.Fragment, {
            children: [
              l &&
                !n &&
                (0, r.jsx)(
                  w.E.div,
                  {
                    initial: { scale: 1 },
                    animate: {
                      scale: 1,
                      filter: h
                        ? "drop-shadow(0 0 15px rgba(59, 130, 246, 0.6)) drop-shadow(0 0 30px rgba(59, 130, 246, 0.4))"
                        : "drop-shadow(0 0 0px rgba(59, 130, 246, 0))",
                    },
                    transition: { duration: 2, ease: "easeInOut" },
                    onAnimationComplete: () => {
                      h
                        ? (setTimeout(() => b(!0), 2e3), b(!1))
                        : (f(d ? "?" : "type 'exp'"), b(!0));
                    },
                    onClick: d ? () => i(!0) : void 0,
                    className:
                      "fixed bottom-6 left-6 font-mono text-base flex flex-col items-start select-none mix-blend-screen\n            ".concat(
                        d
                          ? "cursor-pointer backdrop-blur-sm px-5 py-3 border border-blue-500/30 rounded-none"
                          : "px-4 py-2"
                      ),
                    children: (0, r.jsxs)(w.E.div, {
                      className: "relative group ".concat(
                        d
                          ? ""
                          : "hover:scale-105 transition-transform duration-300"
                      ),
                      animate: {
                        textShadow: h
                          ? [
                              "0 0 15px rgba(59, 130, 246, 0.7)",
                              "0 0 25px rgba(59, 130, 246, 0.5)",
                              "0 0 15px rgba(59, 130, 246, 0.7)",
                            ]
                          : "0 0 0px rgba(59, 130, 246, 0)",
                      },
                      transition: {
                        duration: 2,
                        repeat: 1 / 0,
                        ease: "easeInOut",
                      },
                      children: [
                        (0, r.jsxs)("div", {
                          className:
                            "text-blue-400 font-medium tracking-wider ".concat(
                              !d &&
                                "group-hover:text-blue-300 transition-colors duration-300",
                              " relative"
                            ),
                          children: [
                            (0, r.jsxs)("span", {
                              className: "text-sm",
                              children: ["[", g, "]"],
                            }),
                            !d &&
                              (0, r.jsx)(w.E.div, {
                                className:
                                  "absolute -inset-2 bg-blue-500/10 blur rounded-none -z-10",
                                animate: { opacity: h ? [0.6, 0.8, 0.6] : 0 },
                                transition: {
                                  duration: 2,
                                  repeat: 1 / 0,
                                  ease: "easeInOut",
                                },
                              }),
                          ],
                        }),
                        !d &&
                          (0, r.jsxs)(r.Fragment, {
                            children: [
                              (0, r.jsx)("div", {
                                className:
                                  "absolute inset-0 bg-blue-500/10 -z-10 blur-xl rounded-full transform scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                              }),
                              (0, r.jsx)(w.E.div, {
                                className:
                                  "absolute -inset-2 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 -z-20 opacity-0 group-hover:opacity-100",
                                animate: {
                                  backgroundPosition: ["200% 0", "-200% 0"],
                                },
                                transition: {
                                  duration: 3,
                                  repeat: 1 / 0,
                                  ease: "linear",
                                },
                              }),
                            ],
                          }),
                      ],
                    }),
                  },
                  "experience-hint"
                ),
              (0, r.jsx)(y.M, {
                children:
                  n &&
                  (0, r.jsxs)("div", {
                    className:
                      "fixed inset-0 flex items-center justify-center bg-black/90 z-50 overflow-y-auto",
                    children: [
                      (0, r.jsx)(w.E.div, {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: { opacity: 0 },
                        className: "absolute inset-0 pointer-events-none crt",
                        style: {
                          backgroundImage:
                            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(59,130,246,0.1) 2px, rgba(59,130,246,0.1) 4px)",
                        },
                      }),
                      (0, r.jsxs)(w.E.div, {
                        className:
                          "z-10 w-full max-w-5xl py-8 sm:py-12 px-2 sm:px-4 relative",
                        variants: p,
                        initial: "hidden",
                        animate: "visible",
                        exit: "exit",
                        children: [
                          (0, r.jsx)(w.E.div, {
                            initial: { opacity: 0, y: -20 },
                            animate: {
                              opacity: [0, 1, 0.5, 1],
                              textShadow: [
                                "0 0 5px #3b82f6",
                                "0 0 20px #3b82f6",
                                "0 0 5px #3b82f6",
                                "0 0 2px #3b82f6",
                              ],
                            },
                            transition: { duration: 2.7, repeat: 1 / 0 },
                            className:
                              "text-xl sm:text-2xl md:text-3xl font-mono font-bold mb-4 sm:mb-8 text-center text-blue-500 min-h-[48px]",
                            children: u,
                          }),
                          (0, r.jsx)(w.E.div, {
                            className: "space-y-6 sm:space-y-8",
                            children: t.map((e, n) =>
                              (0, r.jsxs)(
                                w.E.div,
                                {
                                  variants: I,
                                  className: "relative",
                                  children: [
                                    n < t.length - 1 &&
                                      (0, r.jsx)(w.E.div, {
                                        className:
                                          "absolute left-6 top-16 w-0.5 h-8 sm:h-12 bg-gradient-to-b from-blue-500/50 to-transparent",
                                        initial: { height: 0 },
                                        animate: { height: "2rem" },
                                        transition: {
                                          delay: 0.2 * n + 0.5,
                                          duration: 0.8,
                                        },
                                      }),
                                    (0, r.jsxs)("div", {
                                      className: "flex gap-4 sm:gap-6",
                                      children: [
                                        (0, r.jsx)(w.E.div, {
                                          className:
                                            "relative z-10 flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/50 rounded-none flex items-center justify-center",
                                          initial: { scale: 0 },
                                          animate: { scale: 1 },
                                          transition: {
                                            delay: 0.2 * n,
                                            duration: 0.5,
                                          },
                                          whileHover: { scale: 1.1 },
                                          children: (0, r.jsx)("div", {
                                            className:
                                              "w-3 h-3 sm:w-4 sm:h-4 bg-blue-400 rounded-none",
                                          }),
                                        }),
                                        (0, r.jsxs)(w.E.div, {
                                          className: "flex-1",
                                          initial: { x: -20, opacity: 0 },
                                          animate: { x: 0, opacity: 1 },
                                          transition: {
                                            delay: 0.2 * n + 0.3,
                                            duration: 0.6,
                                          },
                                          children: [
                                            (0, r.jsx)(j, {
                                              title: ""
                                                .concat(e.title, " @ ")
                                                .concat(e.company),
                                              description: ""
                                                .concat(e.role, " • ")
                                                .concat(e.period),
                                              details: e.details,
                                              url: e.url || "#",
                                              className: e.className,
                                            }),
                                            (0, r.jsx)(w.E.div, {
                                              className:
                                                "mt-3 flex flex-wrap gap-2",
                                              initial: { opacity: 0 },
                                              animate: { opacity: 1 },
                                              transition: {
                                                delay: 0.2 * n + 0.8,
                                                duration: 0.5,
                                              },
                                              children: e.technologies.map(
                                                (e, t) =>
                                                  (0, r.jsx)(
                                                    w.E.span,
                                                    {
                                                      className:
                                                        "px-2 py-1 text-xs font-mono bg-blue-500/10 border border-blue-500/30 text-blue-300",
                                                      initial: { scale: 0 },
                                                      animate: { scale: 1 },
                                                      transition: {
                                                        delay:
                                                          0.2 * n +
                                                          0.8 +
                                                          0.1 * t,
                                                        duration: 0.3,
                                                      },
                                                      whileHover: {
                                                        scale: 1.05,
                                                      },
                                                      children: e,
                                                    },
                                                    t
                                                  )
                                              ),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                n
                              )
                            ),
                          }),
                          (0, r.jsx)(w.E.button, {
                            onClick: E,
                            className:
                              "mt-6 sm:mt-8 md:mt-10 px-3 sm:px-4 py-2 font-mono text-sm sm:text-base text-blue-500 border border-blue-500/50 hover:bg-blue-500/20 transition-colors mx-auto block rounded-none",
                            whileHover: { scale: 1.05 },
                            whileTap: { scale: 0.95 },
                            children: "[CLOSE]",
                          }),
                        ],
                      }),
                    ],
                  }),
              }),
            ],
          });
        },
        I = {
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -20 },
        };
      var T = () => {
          let [e, t] = (0, a.useState)(!1);
          return (
            (0, a.useEffect)(() => {
              t(!0);
            }, []),
            (0, r.jsx)("div", {
              className: "w-full max-w-5xl",
              children: e && (0, r.jsx)(L, { experiences: z }),
            })
          );
        },
        A = () => {
          let [e, t] = (0, a.useState)(!1);
          return (0, r.jsx)("button", {
            onClick: () => {
              let e = encodeURIComponent(
                "hi aman, \n\n <your message here>.\n\n best regards, \n\n [your name]"
              );
              window.location.href = "mailto:aman.au06@gmail.com?body=".concat(
                e
              );
            },
            onMouseEnter: () => t(!0),
            onMouseLeave: () => t(!1),
            className:
              "text-zinc-400/90 hover:text-zinc-100 transition-all duration-300",
            "aria-label": "Send me an email",
            children: "[contact_me]",
          });
        };
      const ScheduleCall = () => {
        let [e, t] = (0, a.useState)(!1);
        return (0, r.jsx)("button", {
          onClick: () => {
            window.open("https://calendly.com/au06/30min", "_blank");
          },
          onMouseEnter: () => t(!0),
          onMouseLeave: () => t(!1),
          className:
            "text-zinc-400/90 hover:text-zinc-100 transition-all duration-300",
          "aria-label": "Schedule a call",
          children: "[schedule_call]",
        });
      };
      class _ {
        startListening() {
          this.isListening ||
            (window.addEventListener("keydown", this.handleKeyPress.bind(this)),
            (this.isListening = !0));
        }
        handleKeyPress(e) {
          let t = e.key.toLowerCase();
          this.listeners.forEach((e, n) => {
            let r = [...(this.sequences.get(n) || []), t];
            r.length > n.length && r.shift(),
              this.sequences.set(n, r),
              r.join("") === n && (e(), this.sequences.set(n, []));
          });
        }
        register(e, t) {
          this.listeners.set(e, t), this.sequences.set(e, []);
        }
        unregister(e) {
          this.listeners.delete(e), this.sequences.delete(e);
        }
        clear() {
          this.listeners.clear(), this.sequences.clear();
        }
        constructor() {
          (this.listeners = new Map()),
            (this.sequences = new Map()),
            (this.isListening = !1),
            this.startListening();
        }
      }
      let O = new _();
      function R(e) {
        let {
            onResumeDownload: t,
            onOxAction: n,
            onExpAction: i,
            onHelpToggle: o,
          } = e,
          [s, l] = (0, a.useState)(!1);
        return ((0, a.useEffect)(
          () => (
            O.register("resume", () => {
              console.log("Resume shortcut triggered"), null == t || t();
            }),
            O.register("0x", () => {
              console.log("0x shortcut triggered"), null == n || n();
            }),
            O.register("exp", () => {
              console.log("Exp shortcut triggered"), null == i || i();
            }),
            O.register("help", () => {
              console.log("Help shortcut triggered"),
                l((e) => !e),
                null == o || o();
            }),
            () => {
              O.clear();
            }
          ),
          [t, n, i, o]
        ),
        s)
          ? (0, r.jsx)("div", {
              className:
                "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",
              role: "dialog",
              "aria-modal": "true",
              "aria-labelledby": "ks-title",
              children: (0, r.jsxs)("div", {
                className:
                  "w-full max-w-md rounded-none border border-zinc-800/60 bg-gradient-to-b from-zinc-900/80 to-zinc-900/50 shadow-2xl ring-1 ring-white/10 p-6 md:p-8",
                children: [
                  (0, r.jsxs)("div", {
                    className: "mb-5 flex items-center justify-between",
                    children: [
                      (0, r.jsx)("h2", {
                        id: "ks-title",
                        className:
                          "text-xl font-mono tracking-tight text-zinc-100",
                        children: "Keyboard Shortcuts",
                      }),
                      (0, r.jsx)("button", {
                        onClick: () => l(!1),
                        className:
                          "rounded-none border border-white/10 bg-white/5 px-2 py-1 text-zinc-300 hover:bg-white/10 hover:text-zinc-100 transition-colors font-mono",
                        "aria-label": "Close help",
                        children: "✕",
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: "space-y-2 text-sm font-mono",
                    children: [
                      (0, r.jsxs)("div", {
                        className:
                          "flex items-center justify-between rounded-none border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/[0.07] transition-colors",
                        children: [
                          (0, r.jsx)("span", {
                            className: "text-zinc-300",
                            children: "Download Resume",
                          }),
                          (0, r.jsx)("kbd", {
                            className:
                              "inline-flex items-center gap-1 rounded-none border border-white/15 bg-zinc-900/60 px-2 py-1 text-xs font-mono text-zinc-200 shadow-[inset_0_-1px_0_0_rgba(255,255,255,0.05)]",
                            children: "resume",
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "flex items-center justify-between rounded-none border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/[0.07] transition-colors",
                        children: [
                          (0, r.jsx)("span", {
                            className: "text-zinc-300",
                            children: "Achievements",
                          }),
                          (0, r.jsx)("kbd", {
                            className:
                              "inline-flex items-center gap-1 rounded-none border border-white/15 bg-zinc-900/60 px-2 py-1 text-xs font-mono text-zinc-200 shadow-[inset_0_-1px_0_0_rgba(255,255,255,0.05)]",
                            children: "0x",
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "flex items-center justify-between rounded-none border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/[0.07] transition-colors",
                        children: [
                          (0, r.jsx)("span", {
                            className: "text-zinc-300",
                            children: "Experience",
                          }),
                          (0, r.jsx)("kbd", {
                            className:
                              "inline-flex items-center gap-1 rounded-none border border-white/15 bg-zinc-900/60 px-2 py-1 text-xs font-mono text-zinc-200 shadow-[inset_0_-1px_0_0_rgba(255,255,255,0.05)]",
                            children: "exp",
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "flex items-center justify-between rounded-none border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/[0.07] transition-colors",
                        children: [
                          (0, r.jsx)("span", {
                            className: "text-zinc-300",
                            children: "Help",
                          }),
                          (0, r.jsx)("kbd", {
                            className:
                              "inline-flex items-center gap-1 rounded-none border border-white/15 bg-zinc-900/60 px-2 py-1 text-xs font-mono text-zinc-200 shadow-[inset_0_-1px_0_0_rgba(255,255,255,0.05)]",
                            children: "help",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsx)("div", {
                    className: "mt-6 border-t border-white/10 pt-4",
                    children: (0, r.jsx)("p", {
                      className:
                        "text-xs leading-relaxed text-zinc-400 font-mono",
                      children:
                        "Type the sequence of letters to trigger shortcuts anywhere on the page.",
                    }),
                  }),
                ],
              }),
            })
          : null;
      }
      let H = [
        {
          name: "github",
          url: "https://github.com/BeyondAman/",
          desc: "the code place",
          ariaLabel: "Visit my GitHub profile",
        },
        {
          name: "linkedin",
          url: "https://www.linkedin.com/in/au06/",
          desc: "the brag place",
          ariaLabel: "Connect with me on LinkedIn",
        },
        {
          name: "medium",
          url: "https://medium.com/@aman.au06",
          desc: "the thought place",
          ariaLabel: "Follow me on X (Twitter)",
        },
      ];
      function W() {
        let e = (0, a.useCallback)(() => {
            let e = document.createElement("a");
            (e.href =
              "https://drive.google.com/uc?export=download&id=1omhpz8Ub8alA6K36vPqz4Qm0rfwhHwqe"),
              (e.download = "Aman_Upadhyay_Resume.pdf"),
              document.body.appendChild(e),
              e.click(),
              document.body.removeChild(e);
          }, []),
          t = (0, a.useCallback)(() => {
            console.log("0x action triggered - scrolling to achievements");
            let e = document.querySelector(
              '[aria-label="Achievements section"]'
            );
            e && e.scrollIntoView({ behavior: "smooth" });
          }, []),
          n = (0, a.useCallback)(() => {
            console.log("Experience action triggered");
            let e = document.querySelector('[aria-label="Experience section"]');
            e && e.scrollIntoView({ behavior: "smooth" });
          }, []);
        return (0, r.jsxs)("main", {
          className:
            "flex min-h-screen flex-col items-center justify-between p-24",
          role: "main",
          "aria-label": "Portfolio content",
          children: [
            (0, r.jsx)(R, {
              onResumeDownload: e,
              onOxAction: t,
              onExpAction: n,
            }),
            (0, r.jsx)(c, {}),
            (0, r.jsx)("header", {
              className:
                "z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex",
              role: "banner",
              children: (0, r.jsx)("div", {
                className:
                  "fixed left-0 top-0 flex w-full justify-center items-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30",
                children: (0, r.jsxs)("div", {
                  className: "flex items-center gap-4",
                  children: [
                    (0, r.jsx)("span", {
                      className: "text-zinc-200 text-md",
                      role: "heading",
                      "aria-level": 1,
                      children: "BeyondAman",
                    }),
                    (0, r.jsx)("span", {
                      className: "text-zinc-400/50",
                      children: "|",
                    }),
                    (0, r.jsx)(A, {}),
                    (0, r.jsx)(ScheduleCall, {})
                  ],
                }),
              }),
            }),
            (0, r.jsx)("section", {
              className:
                "relative z-[-1] font-mono flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:opacity-10 after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]",
              "aria-label": "Introduction",
              role: "region",
              children: (0, r.jsx)(a.Suspense, {
                fallback: (0, r.jsx)("div", {
                  "aria-label": "Loading introduction",
                  children: "Loading...",
                }),
                children: (0, r.jsx)(x, {}),
              }),
            }),
            (0, r.jsx)("section", {
              "aria-label": "Achievements section",
              role: "region",
              children: (0, r.jsx)(a.Suspense, {
                fallback: (0, r.jsx)("div", {
                  className:
                    "font-mono w-full max-w-5xl text-white/10 h-96 flex items-center justify-center",
                  "aria-label": "Loading achievements",
                  children: "Loading achievements...",
                }),
                children: (0, r.jsx)(C, {}),
              }),
            }),
            (0, r.jsx)("section", {
              "aria-label": "Experience section",
              role: "region",
              children: (0, r.jsx)(a.Suspense, {
                fallback: (0, r.jsx)("div", {
                  className:
                    "font-mono w-full max-w-5xl text-white/10 h-96 flex items-center justify-center",
                  "aria-label": "Loading experience",
                  children: "Loading experience...",
                }),
                children: (0, r.jsx)(T, {}),
              }),
            }),
            (0, r.jsx)("section", {
              className:
                "grid gap-5 text-center font-mono lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left",
              "aria-label": "Social links",
              role: "navigation",
              children: H.map((e) => (0, r.jsx)(v, { ...e }, e.name)),
            }),
            (0, r.jsx)("footer", {
              className:
                "fixed bottom-8 left-1/2 -translate-x-1/2 font-mono text-sm text-zinc-400/90 hover:text-zinc-100 transition-colors duration-100 hidden md:block",
              role: "contentinfo",
              children: (0, r.jsxs)("div", {
                className: "flex flex-col items-center gap-2",
                children: [
                  (0, r.jsx)("span", {
                    className: "select-none",
                    role: "note",
                    "aria-label": "Resume download hint",
                    children: (0, r.jsx)(f, {
                      text: "want my 'resume'? just type it...",
                      scrambleOnMount: !0,
                      scrambleOnHover: !1,
                    }),
                  }),
                  (0, r.jsx)("span", {
                    className: "text-xs text-zinc-500/70 select-none",
                    children: (0, r.jsx)(f, {
                      text: "type 'help' for shortcuts",
                      scrambleOnMount: !1,
                      scrambleOnHover: !0,
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
  },
  function (e) {
    e.O(0, [842, 971, 23, 744], function () {
      return e((e.s = 8350));
    }),
      (_N_E = e.O());
  },
]);
