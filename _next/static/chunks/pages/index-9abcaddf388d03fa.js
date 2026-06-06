(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    5557: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return n(3867);
        },
      ]);
    },
    3867: function (e, t, n) {
      "use strict";
      (n.r(t),
        n.d(t, {
          default: function () {
            return eh;
          },
        }));
      var i = n(5893),
        o = n(7294),
        a = n(4440),
        r = n(4246),
        s = n(3114),
        l = n(5943),
        c = n(102);
      let d = {
          date: "2026-07-12T16:00:00+05:30",
          dayMonthYear: { day: "12", month: "July", year: "2026" },
          time: "5:00 PM onwards",
          bride: {
            name: "Farzana",
            arabicName: "فرزانة",
          },
          groom: {
            name: "Anaz",
            arabicName: "أنس",
          },
          venue: {
            name: "Al-Noor Banquet Hall",
            address: "Down Hill, Malappuram, Kerala, India",
            mapsQuery: "Yamuna+Castle+Auditorium,+Perinjanam,+Kerala,+India",
          },
          events: [
            {
              title: "Nikah Ceremony",
              arabic: "النكاح",
              date: "Sunday, July 12, 2026",
              time: "11:00 AM",
              place: "Chuloor Juma Masjid",
              description:
                "A sacred bond witnessed in the house of Allah, with our closest family.",
            },
            {
              title: "Walima Reception",
              arabic: "الوليمة",
              date: "Sunday, July 12, 2026",
              time: "5:00 PM – 8:00 PM",
              place: "Yamuna Castle Auditorium, Perinjanam",
              description:
                "A celebration of love, family, and the journey ahead — dinner & blessings.",
            },
          ],
        },
        x = [
          c.D.gold,
          c.D.goldDeep,
          c.D.rose,
          c.D.softBrown,
          c.D.ivory,
          c.D.offWhite,
        ],
        h = ["rect", "circle", "sparkle", "petal"];
      function m(e, t) {
        return Math.random() * (t - e) + e;
      }
      function p(e) {
        let { piece: t, durationMul: n = 1 } = e,
          {
            angle: o,
            distance: r,
            delay: s,
            size: c,
            color: d,
            rotateEnd: x,
            shape: h,
            drift: p,
          } = t,
          u = (o * Math.PI) / 180,
          f = Math.cos(u) * r,
          g = Math.sin(u) * r,
          y = {
            initial: { x: 0, y: 0, opacity: 0, scale: 0.2, rotate: 0 },
            animate: {
              x: [0, 0.6 * f, f + p],
              y: [0, 0.6 * g, g + 0.55 * r],
              opacity: [0, 1, 1, 0],
              scale: [0.4, 1, 1, 0.8],
              rotate: [0, 0.6 * x, x],
            },
            transition: {
              duration: m(1.6, 2.4) * n,
              delay: s,
              ease: [0.18, 0.7, 0.25, 1],
              times: [0, 0.25, 0.7, 1],
            },
          };
        return "circle" === h
          ? (0, i.jsx)(a.Z, {
              component: l.E.span,
              ...y,
              sx: {
                position: "absolute",
                width: c,
                height: c,
                borderRadius: "50%",
                background: d,
                boxShadow: "0 0 ".concat(0.6 * c, "px ").concat(d, "66"),
              },
            })
          : "sparkle" === h
            ? (0, i.jsx)(a.Z, {
                component: l.E.span,
                ...y,
                sx: {
                  position: "absolute",
                  width: 1.2 * c,
                  height: 1.2 * c,
                  color: d,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                },
                children: (0, i.jsx)("svg", {
                  viewBox: "0 0 24 24",
                  width: "100%",
                  height: "100%",
                  fill: "currentColor",
                  children: (0, i.jsx)("path", {
                    d: "M12 0 L13.6 9.2 L24 12 L13.6 14.8 L12 24 L10.4 14.8 L0 12 L10.4 9.2 Z",
                  }),
                }),
              })
            : "petal" === h
              ? (0, i.jsx)(a.Z, {
                  component: l.E.span,
                  ...y,
                  sx: {
                    position: "absolute",
                    width: 1.4 * c,
                    height: 0.7 * c,
                    background: d,
                    borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                    opacity: 0.85,
                  },
                })
              : (0, i.jsx)(a.Z, {
                  component: l.E.span,
                  ...y,
                  sx: {
                    position: "absolute",
                    width: 1.6 * c,
                    height: 0.5 * c,
                    background: d,
                    borderRadius: 1,
                  },
                });
      }
      function u(e) {
        let { count: t = 80, active: n = !1, spread: r = 520 } = e,
          s = (0, o.useMemo)(
            () =>
              Array.from({ length: t }).map(() => ({
                angle: m(-170, -10),
                distance: m(0.45 * r, r),
                delay: m(0, 0.35),
                size: m(6, 14),
                color: x[Math.floor(Math.random() * x.length)],
                rotateEnd: m(-540, 540),
                shape: h[Math.floor(Math.random() * h.length)],
                drift: m(-60, 60),
              })),
            [t, r],
          );
        return n
          ? (0, i.jsx)(a.Z, {
              "aria-hidden": !0,
              sx: {
                position: "absolute",
                left: "50%",
                top: "50%",
                width: 0,
                height: 0,
                pointerEvents: "none",
                zIndex: 5,
              },
              children: s.map((e, t) => (0, i.jsx)(p, { piece: e }, t)),
            })
          : null;
      }
      function f(e) {
        let { revealDelay: t = 1800, onOpen: n } = e,
          [x, h] = (0, o.useState)(!0),
          [m, p] = (0, o.useState)(!1),
          [f, g] = (0, o.useState)(!1);
        return (
          (0, o.useEffect)(() => {
            let e = setTimeout(() => p(!0), t);
            return () => clearTimeout(e);
          }, [t]),
          (0, i.jsx)(s.M, {
            children:
              x &&
              (0, i.jsx)(a.Z, {
                component: l.E.div,
                initial: { opacity: 1 },
                exit: {
                  opacity: 0,
                  transition: { duration: 0.9, ease: "easeInOut" },
                },
                sx: {
                  position: "fixed",
                  inset: 0,
                  zIndex: 1500,
                  display: "grid",
                  placeItems: "center",
                  background: "radial-gradient(circle at center, "
                    .concat(c.D.ivory, " 0%, ")
                    .concat(c.D.offWhite, " 60%, ")
                    .concat(c.D.beige, " 130%)"),
                },
                children: (0, i.jsxs)(a.Z, {
                  sx: { textAlign: "center", px: 3, position: "relative" },
                  children: [
                    (0, i.jsx)(u, { active: f, count: 90, spread: 620 }),
                    (0, i.jsx)(a.Z, {
                      component: l.E.div,
                      initial: { scale: 0.85, opacity: 0 },
                      animate: { scale: 1, opacity: 1 },
                      transition: { duration: 1.1, ease: [0.2, 0.8, 0.2, 1] },
                      sx: { mb: 3 },
                      children: (0, i.jsx)("svg", {
                        width: "84",
                        height: "84",
                        viewBox: "0 0 84 84",
                        fill: "none",
                        children: (0, i.jsxs)("g", {
                          stroke: c.D.gold,
                          strokeWidth: "0.8",
                          fill: "none",
                          children: [
                            (0, i.jsx)(l.E.circle, {
                              cx: "42",
                              cy: "42",
                              r: "34",
                              initial: { pathLength: 0 },
                              animate: { pathLength: 1 },
                              transition: { duration: 1.6, ease: "easeInOut" },
                            }),
                            (0, i.jsx)(l.E.circle, {
                              cx: "42",
                              cy: "42",
                              r: "24",
                              initial: { pathLength: 0 },
                              animate: { pathLength: 1 },
                              transition: {
                                duration: 1.6,
                                delay: 0.2,
                                ease: "easeInOut",
                              },
                            }),
                            (0, i.jsx)(l.E.path, {
                              d: "M42 8 L48 30 L70 30 L52 44 L60 66 L42 52 L24 66 L32 44 L14 30 L36 30 Z",
                              initial: { pathLength: 0, opacity: 0 },
                              animate: { pathLength: 1, opacity: 0.6 },
                              transition: {
                                duration: 2,
                                delay: 0.4,
                                ease: "easeInOut",
                              },
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, i.jsx)(r.Z, {
                      variant: "h6",
                      sx: {
                        color: c.D.warmGray,
                        letterSpacing: "0.6em",
                        fontSize: 12,
                      },
                      component: l.E.div,
                      initial: { opacity: 0, y: 8 },
                      animate: { opacity: 1, y: 0 },
                      transition: { delay: 0.6, duration: 0.8 },
                      children: "In the name of Allah",
                    }),
                    (0, i.jsxs)(r.Z, {
                      variant: "h4",
                      sx: {
                        mt: 1.5,
                        color: c.D.softBrown,
                        fontStyle: "italic",
                        fontWeight: 300,
                      },
                      component: l.E.div,
                      initial: { opacity: 0, y: 12 },
                      animate: { opacity: 1, y: 0 },
                      transition: { delay: 0.85, duration: 1 },
                      children: [d.groom.name, " & ", d.bride.name],
                    }),
                    (0, i.jsx)(a.Z, {
                      component: l.E.div,
                      initial: { width: 0 },
                      animate: { width: 140 },
                      transition: {
                        delay: 1.1,
                        duration: 0.9,
                        ease: "easeInOut",
                      },
                      sx: {
                        height: "1px",
                        background: c.D.gold,
                        margin: "18px auto 0",
                        opacity: 0.7,
                      },
                    }),
                    (0, i.jsx)(s.M, {
                      children:
                        m &&
                        (0, i.jsx)(a.Z, {
                          component: l.E.button,
                          type: "button",
                          onClick: () => {
                            x &&
                              !f &&
                              (g(!0),
                              null == n || n(),
                              setTimeout(() => h(!1), 1100));
                          },
                          initial: { opacity: 0, y: 16 },
                          animate: f
                            ? {
                                opacity: 0,
                                scale: 1.15,
                                transition: { duration: 0.6, ease: "easeOut" },
                              }
                            : { opacity: 1, y: 0 },
                          transition: { duration: 0.8, ease: "easeOut" },
                          whileHover: f ? void 0 : { scale: 1.04 },
                          whileTap: f ? void 0 : { scale: 0.97 },
                          sx: {
                            display: "inline-block",
                            mt: 4,
                            px: 5,
                            py: 1.6,
                            background: "transparent",
                            border: "1px solid ".concat(c.D.gold),
                            color: c.D.softBrown,
                            fontFamily: '"Inter", sans-serif',
                            fontSize: 11,
                            letterSpacing: "0.35em",
                            textTransform: "uppercase",
                            cursor: "pointer",
                            outline: "none",
                            transition: "background 0.4s ease, color 0.4s ease",
                            "&:hover": {
                              background: "".concat(c.D.gold, "1f"),
                              color: c.D.deepBrown,
                            },
                          },
                          children: "Open Invitation",
                        }),
                    }),
                  ],
                }),
              }),
          })
        );
      }
      var g = n(2653),
        y = n(2785),
        b = n(8069),
        j = n(8163),
        v = n(3367),
        w = n(7979),
        D = n(1404);
      let Z = [
        { id: "home", label: "Home" },
        { id: "story", label: "Story" },
        { id: "events", label: "Events" },
        { id: "gallery", label: "Gallery" },
        { id: "rsvp", label: "RSVP" },
      ];
      function S(e) {
        let { audioOn: t, onToggleAudio: n } = e,
          [s, d] = (0, o.useState)(!1);
        (0, o.useEffect)(() => {
          let e = () => d(window.scrollY > 40);
          return (
            e(),
            window.addEventListener("scroll", e, { passive: !0 }),
            () => window.removeEventListener("scroll", e)
          );
        }, []);
        let x = (e) => {
          let t = document.getElementById(e);
          t && t.scrollIntoView({ behavior: "smooth", block: "start" });
        };
        return (0, i.jsx)(g.Z, {
          component: l.E.div,
          initial: { y: -40, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          transition: { duration: 0.9, delay: 0.4, ease: "easeOut" },
          position: "fixed",
          elevation: 0,
          sx: {
            background: s ? "".concat(c.D.offWhite, "EE") : "transparent",
            backdropFilter: s ? "blur(12px)" : "none",
            borderBottom: s
              ? "1px solid ".concat(c.D.beige)
              : "1px solid transparent",
            transition: "all 0.6s ease",
            color: c.D.deepBrown,
          },
          children: (0, i.jsx)(y.Z, {
            maxWidth: "lg",
            children: (0, i.jsxs)(b.Z, {
              disableGutters: !0,
              sx: { py: 1.5, justifyContent: "space-between" },
              children: [
                (0, i.jsx)(r.Z, {
                  variant: "h5",
                  sx: {
                    fontFamily: '"Cormorant Garamond", serif',
                    fontStyle: "italic",
                    letterSpacing: "0.08em",
                    color: c.D.softBrown,
                  },
                  children: "F & A",
                }),
                (0, i.jsx)(a.Z, {
                  sx: { display: { xs: "none", md: "flex" }, gap: 4 },
                  children: Z.map((e) =>
                    (0, i.jsx)(
                      j.Z,
                      {
                        onClick: () => x(e.id),
                        sx: {
                          color: c.D.deepBrown,
                          fontSize: 11,
                          letterSpacing: "0.32em",
                          px: 0,
                          minWidth: 0,
                          "&:hover": {
                            color: c.D.gold,
                            background: "transparent",
                          },
                        },
                        children: e.label,
                      },
                      e.id,
                    ),
                  ),
                }),
                (0, i.jsx)(v.Z, {
                  onClick: n,
                  sx: {
                    border: "1px solid ".concat(c.D.warmGray, "77"),
                    borderRadius: "50%",
                    width: 38,
                    height: 38,
                    color: c.D.softBrown,
                    "&:hover": { borderColor: c.D.gold, color: c.D.gold },
                  },
                  "aria-label": t
                    ? "Mute background nasheed"
                    : "Play background nasheed",
                  children: t
                    ? (0, i.jsx)(w.Z, { fontSize: "small" })
                    : (0, i.jsx)(D.Z, { fontSize: "small" }),
                }),
              ],
            }),
          }),
        });
      }
      var k = n(4466),
        z = n(9645),
        M = n(56);
      function W(e) {
        let { width: t = 220, color: n = c.D.gold, sx: o } = e;
        return (0, i.jsx)(a.Z, {
          sx: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            my: 3,
            ...o,
          },
          children: (0, i.jsxs)("svg", {
            width: t,
            height: "20",
            viewBox: "0 0 220 20",
            fill: "none",
            "aria-hidden": !0,
            children: [
              (0, i.jsx)("path", {
                d: "M0 10 L90 10",
                stroke: n,
                strokeWidth: "0.6",
                strokeOpacity: "0.7",
              }),
              (0, i.jsx)("path", {
                d: "M130 10 L220 10",
                stroke: n,
                strokeWidth: "0.6",
                strokeOpacity: "0.7",
              }),
              (0, i.jsxs)("g", {
                transform: "translate(110 10)",
                children: [
                  (0, i.jsx)("circle", {
                    r: "6",
                    fill: "none",
                    stroke: n,
                    strokeWidth: "0.8",
                  }),
                  (0, i.jsx)("circle", {
                    r: "2.2",
                    fill: n,
                    fillOpacity: "0.9",
                  }),
                  (0, i.jsx)("path", {
                    d: "M-14 0 L-9 -3 L-9 3 Z",
                    fill: n,
                    fillOpacity: "0.6",
                  }),
                  (0, i.jsx)("path", {
                    d: "M14 0 L9 -3 L9 3 Z",
                    fill: n,
                    fillOpacity: "0.6",
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function E(e) {
        let { children: t, sx: n } = e;
        return (0, i.jsx)(a.Z, {
          sx: {
            position: "relative",
            width: "100%",
            aspectRatio: "3/4",
            borderTopLeftRadius: "50% 22%",
            borderTopRightRadius: "50% 22%",
            overflow: "hidden",
            boxShadow: "0 30px 80px -30px ".concat(c.D.warmGray, "55"),
            "&::before": {
              content: '""',
              position: "absolute",
              inset: 8,
              borderTopLeftRadius: "50% 22%",
              borderTopRightRadius: "50% 22%",
              border: "1px solid ".concat(c.D.gold),
              opacity: 0.55,
              pointerEvents: "none",
              zIndex: 2,
            },
            ...n,
          },
          children: t,
        });
      }
      function L(e) {
        let { position: t = "top-left", size: n = 140, opacity: o = 0.5 } = e;
        return (0, i.jsx)(a.Z, {
          sx: {
            position: "absolute",
            ...{
              "top-left": { top: 16, left: 16 },
              "top-right": { top: 16, right: 16 },
              "bottom-left": { bottom: 16, left: 16 },
              "bottom-right": { bottom: 16, right: 16 },
            }[t],
            width: n,
            height: n,
            opacity: o,
            pointerEvents: "none",
            transform: {
              "top-left": "rotate(0deg)",
              "top-right": "scaleX(-1)",
              "bottom-left": "scaleY(-1)",
              "bottom-right": "scale(-1, -1)",
            }[t],
          },
          "aria-hidden": !0,
          children: (0, i.jsx)("svg", {
            viewBox: "0 0 140 140",
            width: "100%",
            height: "100%",
            fill: "none",
            children: (0, i.jsxs)("g", {
              stroke: c.D.gold,
              strokeWidth: "0.7",
              fill: "none",
              children: [
                (0, i.jsx)("path", { d: "M2 60 Q2 2 60 2" }),
                (0, i.jsx)("path", { d: "M14 60 Q14 14 60 14" }),
                (0, i.jsx)("path", { d: "M2 60 L14 60" }),
                (0, i.jsx)("path", { d: "M60 2 L60 14" }),
                (0, i.jsx)("circle", { cx: "34", cy: "34", r: "14" }),
                (0, i.jsx)("circle", { cx: "34", cy: "34", r: "6" }),
                (0, i.jsx)("path", {
                  d: "M34 16 L34 20 M34 48 L34 52 M16 34 L20 34 M48 34 L52 34",
                }),
                (0, i.jsx)("path", {
                  d: "M22 22 L26 26 M42 42 L46 46 M22 46 L26 42 M42 26 L46 22",
                  strokeOpacity: "0.7",
                }),
                (0, i.jsx)("path", {
                  d: "M14 80 Q40 80 40 110",
                  strokeOpacity: "0.6",
                }),
                (0, i.jsx)("path", {
                  d: "M80 14 Q80 40 110 40",
                  strokeOpacity: "0.6",
                }),
              ],
            }),
          }),
        });
      }
      function C(e) {
        let { sx: t, opacity: n = 0.06 } = e;
        return (0, i.jsx)(a.Z, {
          sx: {
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            maxWidth: 900,
            opacity: n,
            pointerEvents: "none",
            ...t,
          },
          "aria-hidden": !0,
          children: (0, i.jsxs)("svg", {
            viewBox: "0 0 900 220",
            width: "100%",
            height: "100%",
            fill: "none",
            children: [
              (0, i.jsx)("g", {
                fill: c.D.softBrown,
                children: (0, i.jsx)("path", {
                  d: "M0 220 L0 180 L90 180 L90 130 Q120 100 150 130 L150 180 L240 180 L240 90 Q300 30 360 90 L360 180 L420 180 L420 110 Q450 80 480 110 L480 180 L540 180 L540 90 Q600 30 660 90 L660 180 L750 180 L750 130 Q780 100 810 130 L810 180 L900 180 L900 220 Z",
                }),
              }),
              (0, i.jsxs)("g", {
                fill: "none",
                stroke: c.D.softBrown,
                strokeWidth: "1",
                children: [
                  (0, i.jsx)("line", {
                    x1: "135",
                    y1: "80",
                    x2: "135",
                    y2: "120",
                  }),
                  (0, i.jsx)("line", {
                    x1: "330",
                    y1: "20",
                    x2: "330",
                    y2: "80",
                  }),
                  (0, i.jsx)("line", {
                    x1: "570",
                    y1: "20",
                    x2: "570",
                    y2: "80",
                  }),
                  (0, i.jsx)("line", {
                    x1: "765",
                    y1: "80",
                    x2: "765",
                    y2: "120",
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function A(e) {
        let { sx: t, opacity: n = 0.05 } = e;
        return (0, i.jsx)(a.Z, {
          sx: {
            position: "absolute",
            inset: 0,
            opacity: n,
            pointerEvents: "none",
            backgroundImage: "\n          radial-gradient(circle at 50% 50%, "
              .concat(
                c.D.gold,
                " 0.7px, transparent 1.4px),\n          linear-gradient(45deg, transparent 48%, ",
              )
              .concat(c.D.gold, " 49%, ")
              .concat(
                c.D.gold,
                " 51%, transparent 52%),\n          linear-gradient(-45deg, transparent 48%, ",
              )
              .concat(c.D.gold, " 49%, ")
              .concat(c.D.gold, " 51%, transparent 52%)\n        "),
            backgroundSize: "36px 36px, 72px 72px, 72px 72px",
            ...t,
          },
          "aria-hidden": !0,
        });
      }
      function I(e) {
        let { name: t, role: n, arabicName: o, image: s, side: d = "left" } = e;
        return (0, i.jsxs)(a.Z, {
          component: l.E.div,
          initial: { opacity: 0, y: 60 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0, margin: "-80px" },
          transition: {
            duration: 1.1,
            ease: [0.2, 0.8, 0.2, 1],
            delay: "right" === d ? 0.15 : 0,
          },
          sx: {
            position: "relative",
            maxWidth: 360,
            width: "100%",
            mx: "auto",
          },
          children: [
            (0, i.jsxs)(E, {
              children: [
                (0, i.jsx)(a.Z, {
                  sx: {
                    position: "absolute",
                    inset: 0,
                    background: s
                      ? "url(".concat(s, ") center/cover no-repeat")
                      : "linear-gradient(160deg, "
                          .concat(c.D.beige, " 0%, ")
                          .concat(c.D.warmGray, " 100%)"),
                    filter: "saturate(0.85) brightness(0.96)",
                  },
                }),
                !s &&
                  (0, i.jsx)(a.Z, {
                    sx: {
                      position: "absolute",
                      inset: 0,
                      display: "grid",
                      placeItems: "center",
                      color: c.D.offWhite,
                      opacity: 0.5,
                      fontFamily: '"Cormorant Garamond", serif',
                      fontSize: 90,
                      fontStyle: "italic",
                    },
                    children: t.charAt(0),
                  }),
                (0, i.jsx)(a.Z, {
                  sx: {
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, transparent 50%, ".concat(
                        c.D.deepBrown,
                        "aa 100%)",
                      ),
                  },
                }),
                (0, i.jsx)(a.Z, {
                  sx: {
                    position: "absolute",
                    bottom: 18,
                    left: 0,
                    right: 0,
                    textAlign: "center",
                    zIndex: 3,
                  },
                  children: (0, i.jsx)(r.Z, {
                    sx: {
                      fontFamily: '"Amiri", serif',
                      color: c.D.offWhite,
                      fontSize: 20,
                      opacity: 0.92,
                    },
                    children: o,
                  }),
                }),
              ],
            }),
            (0, i.jsxs)(a.Z, {
              sx: { textAlign: "center", mt: 3 },
              children: [
                (0, i.jsx)(r.Z, {
                  variant: "h6",
                  sx: { color: c.D.gold, fontSize: 11, mb: 1 },
                  children: n,
                }),
                (0, i.jsx)(r.Z, {
                  variant: "h2",
                  sx: {
                    color: c.D.softBrown,
                    fontStyle: "italic",
                    fontSize: { xs: 44, md: 56 },
                  },
                  children: t,
                }),
              ],
            }),
          ],
        });
      }
      function B() {
        let e = (0, o.useRef)(null),
          { scrollYProgress: t } = (0, z.v)({
            target: e,
            offset: ["start start", "end start"],
          }),
          n = (0, M.H)(t, [0, 1], ["0%", "20%"]),
          s = (0, M.H)(t, [0, 1], ["0%", "-12%"]),
          d = (0, M.H)(t, [0, 0.6], [1, 0]);
        return (0, i.jsxs)(a.Z, {
          id: "home",
          ref: e,
          sx: {
            position: "relative",
            minHeight: "100vh",
            background: "linear-gradient(180deg, "
              .concat(c.D.offWhite, " 0%, ")
              .concat(c.D.ivory, " 100%)"),
            overflow: "hidden",
            pt: { xs: 14, md: 18 },
            pb: { xs: 8, md: 12 },
          },
          children: [
            (0, i.jsx)(A, { opacity: 0.05 }),
            (0, i.jsx)(L, { position: "top-left" }),
            (0, i.jsx)(L, { position: "top-right" }),
            (0, i.jsx)(a.Z, {
              component: l.E.div,
              style: { y: n },
              sx: {
                position: "absolute",
                top: "15%",
                left: "50%",
                transform: "translateX(-50%)",
                width: { xs: 380, md: 620 },
                height: { xs: 380, md: 620 },
                borderRadius: "50%",
                background: "radial-gradient(circle, ".concat(
                  c.D.beige,
                  "80 0%, transparent 70%)",
                ),
                filter: "blur(40px)",
                pointerEvents: "none",
              },
            }),
            (0, i.jsxs)(y.Z, {
              maxWidth: "lg",
              sx: { position: "relative", zIndex: 2 },
              children: [
                (0, i.jsxs)(a.Z, {
                  component: l.E.div,
                  style: { y: s, opacity: d },
                  sx: { textAlign: "center", mb: { xs: 6, md: 8 } },
                  children: [
                    (0, i.jsx)(l.E.div, {
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { duration: 1, delay: 0.6 },
                      children: (0, i.jsx)(r.Z, {
                        variant: "h6",
                        sx: { color: c.D.gold, fontSize: 11, mb: 2 },
                        children: "✦  Wedding Invitation  ✦",
                      }),
                    }),
                    (0, i.jsx)(l.E.div, {
                      initial: { opacity: 0, letterSpacing: "0.5em" },
                      animate: { opacity: 1, letterSpacing: "0.04em" },
                      transition: {
                        duration: 1.6,
                        delay: 0.8,
                        ease: [0.2, 0.8, 0.2, 1],
                      },
                      children: (0, i.jsx)(r.Z, {
                        variant: "h1",
                        sx: {
                          fontSize: { xs: 56, sm: 84, md: 128 },
                          lineHeight: 0.95,
                          color: c.D.softBrown,
                          fontStyle: "italic",
                        },
                        children: "Anaz",
                      }),
                    }),
                    (0, i.jsx)(l.E.div, {
                      initial: { opacity: 0, scale: 0.6 },
                      animate: { opacity: 1, scale: 1 },
                      transition: { duration: 1, delay: 1.4 },
                      children: (0, i.jsx)(r.Z, {
                        sx: {
                          fontFamily: '"Cormorant Garamond", serif',
                          fontSize: { xs: 36, md: 56 },
                          color: c.D.gold,
                          my: { xs: 1, md: 1.5 },
                          fontStyle: "italic",
                        },
                        children: "&",
                      }),
                    }),
                    (0, i.jsx)(l.E.div, {
                      initial: { opacity: 0, letterSpacing: "0.5em" },
                      animate: { opacity: 1, letterSpacing: "0.04em" },
                      transition: {
                        duration: 1.6,
                        delay: 1.6,
                        ease: [0.2, 0.8, 0.2, 1],
                      },
                      children: (0, i.jsx)(r.Z, {
                        variant: "h1",
                        sx: {
                          fontSize: { xs: 56, sm: 84, md: 128 },
                          lineHeight: 0.95,
                          color: c.D.softBrown,
                          fontStyle: "italic",
                        },
                        children: "Farzana",
                      }),
                    }),
                    (0, i.jsx)(W, { sx: { mt: 4 } }),
                    (0, i.jsxs)(l.E.div, {
                      initial: { opacity: 0, y: 10 },
                      animate: { opacity: 1, y: 0 },
                      transition: { duration: 1, delay: 2.2 },
                      children: [
                        (0, i.jsx)(r.Z, {
                          className: "arabic",
                          sx: {
                            fontSize: { xs: 18, md: 22 },
                            color: c.D.warmGray,
                            mt: 1,
                          },
                          children: "بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
                        }),
                        (0, i.jsxs)(r.Z, {
                          sx: {
                            color: c.D.warmGray,
                            mt: 2,
                            maxWidth: 520,
                            mx: "auto",
                            fontStyle: "italic",
                            fontFamily: '"Cormorant Garamond", serif',
                            fontSize: { xs: 18, md: 22 },
                          },
                          children: [
                            "Together, with the blessings of their families,",
                            (0, i.jsx)("br", {}),
                            "request the honour of your presence at their wedding celebration.",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsxs)(k.ZP, {
                  container: !0,
                  spacing: { xs: 6, md: 8 },
                  justifyContent: "center",
                  alignItems: "flex-end",
                  children: [
                    (0, i.jsx)(k.ZP, {
                      item: !0,
                      xs: 12,
                      sm: 6,
                      md: 5,
                      children: (0, i.jsx)(I, {
                        name: "Anaz",
                        arabicName: "أنز",
                        role: "The Groom",
                        side: "right",
                        image: "/images/groom.jpg",
                      }),
                    }),
                    (0, i.jsx)(k.ZP, {
                      item: !0,
                      xs: 12,
                      sm: 6,
                      md: 5,
                      children: (0, i.jsx)(I, {
                        name: "Farzana",
                        arabicName: "فرزانة",
                        role: "The Bride",
                        side: "left",
                        image: "./images/bride.png",
                      }),
                    }),
                  ],
                }),
                (0, i.jsxs)(a.Z, {
                  component: l.E.div,
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { delay: 3, duration: 1 },
                  sx: {
                    textAlign: "center",
                    mt: { xs: 8, md: 12 },
                    color: c.D.warmGray,
                  },
                  children: [
                    (0, i.jsx)(r.Z, {
                      variant: "h6",
                      sx: { fontSize: 10, mb: 1 },
                      children: "scroll to begin",
                    }),
                    (0, i.jsx)(l.E.div, {
                      animate: { y: [0, 8, 0] },
                      transition: {
                        duration: 2,
                        repeat: 1 / 0,
                        ease: "easeInOut",
                      },
                      children: (0, i.jsxs)("svg", {
                        width: "14",
                        height: "22",
                        viewBox: "0 0 14 22",
                        fill: "none",
                        style: { display: "block", margin: "0 auto" },
                        children: [
                          (0, i.jsx)("rect", {
                            x: "1",
                            y: "1",
                            width: "12",
                            height: "20",
                            rx: "6",
                            stroke: c.D.warmGray,
                            strokeWidth: "0.8",
                          }),
                          (0, i.jsx)("circle", {
                            cx: "7",
                            cy: "7",
                            r: "1.4",
                            fill: c.D.warmGray,
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var G = n(1730),
        R = n(6893);
      function T(e) {
        let {
            width: t,
            height: n,
            onComplete: d,
            children: x,
            hint: h = "✦ Scratch to reveal ✦",
          } = e,
          m = (0, o.useRef)(null),
          p = (0, o.useRef)(null),
          u = (0, o.useRef)(!1),
          f = (0, o.useRef)(null),
          g = (0, o.useRef)(!1),
          [y, b] = (0, o.useState)(!1),
          [j, v] = (0, o.useState)(!1),
          w = (0, o.useCallback)(() => {
            g.current || ((g.current = !0), b(!0), null == d || d());
          }, [d]),
          D = (0, o.useCallback)(() => {
            let e = m.current;
            if (!e) return;
            let t = e.getContext("2d"),
              { width: n, height: i } = e,
              o = t.getImageData(0, 0, n, i).data,
              a = 0,
              r = 0;
            for (let e = 0; e < i; e += 8)
              for (let t = 0; t < n; t += 8)
                (0 === o[(e * n + t) * 4 + 3] && (a += 1), (r += 1));
            r > 0 && a / r >= 0.45 && w();
          }, [w]);
        (0, o.useEffect)(() => {
          let e = m.current;
          if (!e) return;
          let i = e.getContext("2d"),
            o = Math.min(window.devicePixelRatio || 1, 2);
          ((e.width = t * o),
            (e.height = n * o),
            (e.style.width = "".concat(t, "px")),
            (e.style.height = "".concat(n, "px")),
            i.setTransform(o, 0, 0, o, 0, 0),
            (function (e, t, n) {
              let i = e.createLinearGradient(0, 0, t, n);
              (i.addColorStop(0, c.D.beige),
                i.addColorStop(0.5, c.D.gold),
                i.addColorStop(1, c.D.goldDeep),
                (e.fillStyle = i),
                e.fillRect(0, 0, t, n),
                e.save(),
                (e.globalAlpha = 0.18),
                (e.strokeStyle = c.D.deepBrown),
                (e.lineWidth = 1));
              for (let i = -n; i < 2 * n; i += 22)
                (e.beginPath(),
                  e.moveTo(0, i),
                  e.lineTo(t, i + 0.4 * t),
                  e.stroke());
              for (let i = -t; i < 2 * t; i += 22)
                (e.beginPath(),
                  e.moveTo(i, 0),
                  e.lineTo(i + 0.4 * n, n),
                  e.stroke());
              (e.restore(),
                e.save(),
                (e.globalAlpha = 0.35),
                (e.strokeStyle = c.D.offWhite),
                (e.lineWidth = 1.5),
                e.strokeRect(10, 10, t - 20, n - 20),
                (e.strokeStyle = c.D.deepBrown),
                (e.globalAlpha = 0.25),
                e.strokeRect(18, 18, t - 36, n - 36),
                e.restore());
            })(i, t, n));
        }, [t, n]);
        let Z = (e) => {
            let t = m.current.getBoundingClientRect(),
              n = e.touches ? e.touches[0].clientX : e.clientX,
              i = e.touches ? e.touches[0].clientY : e.clientY;
            return { x: n - t.left, y: i - t.top };
          },
          S = (e) => {
            let t = m.current.getContext("2d");
            ((t.globalCompositeOperation = "destination-out"),
              (t.lineWidth = 76),
              (t.lineCap = "round"),
              (t.lineJoin = "round"),
              f.current &&
                (t.beginPath(),
                t.moveTo(f.current.x, f.current.y),
                t.lineTo(e.x, e.y),
                t.stroke()),
              t.beginPath(),
              t.arc(e.x, e.y, 38, 0, 2 * Math.PI),
              t.fill(),
              (f.current = e));
          },
          k = (e) => {
            y ||
              (e.preventDefault(),
              (u.current = !0),
              v(!0),
              (f.current = null),
              S(Z(e)));
          },
          z = (e) => {
            u.current && !y && (e.preventDefault(), S(Z(e)));
          },
          M = () => {
            u.current && ((u.current = !1), (f.current = null), D());
          };
        return (0, i.jsxs)(a.Z, {
          ref: p,
          sx: {
            position: "relative",
            width: t,
            height: n,
            mx: "auto",
            userSelect: "none",
          },
          children: [
            (0, i.jsx)(a.Z, {
              sx: {
                position: "absolute",
                inset: 0,
                display: "grid",
                placeItems: "center",
              },
              children: x,
            }),
            (0, i.jsx)(s.M, {
              children:
                !y &&
                (0, i.jsxs)(a.Z, {
                  component: l.E.div,
                  initial: { opacity: 1 },
                  exit: {
                    opacity: 0,
                    scale: 1.04,
                    transition: { duration: 0.9, ease: "easeOut" },
                  },
                  sx: {
                    position: "absolute",
                    inset: 0,
                    cursor: "grab",
                    touchAction: "none",
                    "&:active": { cursor: "grabbing" },
                  },
                  children: [
                    (0, i.jsx)("canvas", {
                      ref: m,
                      onMouseDown: k,
                      onMouseMove: z,
                      onMouseUp: M,
                      onMouseLeave: M,
                      onTouchStart: k,
                      onTouchMove: z,
                      onTouchEnd: M,
                      style: {
                        display: "block",
                        borderRadius: 2,
                        touchAction: "none",
                      },
                    }),
                    !j &&
                      (0, i.jsx)(a.Z, {
                        component: l.E.div,
                        initial: { opacity: 0 },
                        animate: { opacity: [0.55, 1, 0.55] },
                        transition: {
                          duration: 2.4,
                          repeat: 1 / 0,
                          ease: "easeInOut",
                        },
                        sx: {
                          position: "absolute",
                          inset: 0,
                          display: "grid",
                          placeItems: "center",
                          pointerEvents: "none",
                          textAlign: "center",
                        },
                        children: (0, i.jsxs)(a.Z, {
                          children: [
                            (0, i.jsx)(a.Z, {
                              component: "svg",
                              viewBox: "0 0 64 64",
                              sx: {
                                width: 44,
                                height: 44,
                                color: c.D.deepBrown,
                                mb: 1,
                              },
                              children: (0, i.jsx)("path", {
                                fill: "currentColor",
                                d: "M44.6 8.7c1.3-1.3 3.4-1.3 4.6 0l6.1 6.1c1.3 1.3 1.3 3.4 0 4.6L25.6 49.1c-.4.4-.9.7-1.5.8L11 52.6c-1.4.3-2.6-1-2.3-2.3l2.7-13.1c.1-.6.4-1.1.8-1.5L44.6 8.7zm-3.1 8.3 6.5 6.5 4-4-6.5-6.5-4 4z",
                              }),
                            }),
                            (0, i.jsx)(r.Z, {
                              sx: {
                                fontFamily: '"Inter", sans-serif',
                                fontSize: 11,
                                letterSpacing: "0.4em",
                                color: c.D.deepBrown,
                                textTransform: "uppercase",
                              },
                              children: h,
                            }),
                          ],
                        }),
                      }),
                  ],
                }),
            }),
          ],
        });
      }
      let P = {
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.06, delayChildren: 0.1 },
          },
        },
        F = {
          hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
          show: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 1.1, ease: [0.2, 0.8, 0.2, 1] },
          },
        };
      function H(e) {
        let { text: t, sx: n } = e;
        return (0, i.jsx)(a.Z, {
          component: l.E.div,
          variants: P,
          sx: {
            display: "inline-flex",
            flexWrap: "wrap",
            justifyContent: "center",
            ...n,
          },
          children: t.split("").map((e, t) =>
            (0, i.jsx)(
              a.Z,
              {
                component: l.E.span,
                variants: F,
                sx: { display: "inline-block", whiteSpace: "pre" },
                children: e,
              },
              "".concat(e, "-").concat(t),
            ),
          ),
        });
      }
      function O() {
        return (0, i.jsxs)(a.Z, {
          component: l.E.div,
          variants: P,
          initial: "hidden",
          animate: "show",
          sx: { width: "100%", textAlign: "center", px: 2 },
          children: [
            (0, i.jsx)(H, {
              text: d.dayMonthYear.month.toUpperCase(),
              sx: {
                fontFamily: '"Inter", sans-serif',
                letterSpacing: "0.5em",
                fontSize: { xs: 12, md: 16 },
                color: c.D.warmGray,
              },
            }),
            (0, i.jsxs)(a.Z, {
              sx: {
                display: "flex",
                justifyContent: "center",
                alignItems: "baseline",
                gap: { xs: 1.5, md: 4 },
                my: { xs: 1.5, md: 2.5 },
              },
              children: [
                (0, i.jsx)(a.Z, {
                  component: l.E.div,
                  variants: F,
                  sx: { textAlign: "right" },
                  children: (0, i.jsx)(r.Z, {
                    sx: {
                      fontFamily: '"Cormorant Garamond", serif',
                      fontSize: { xs: 44, md: 90 },
                      color: c.D.warmGray,
                      letterSpacing: "0.04em",
                      fontWeight: 300,
                      lineHeight: 1,
                    },
                    children: "SUN",
                  }),
                }),
                (0, i.jsx)(a.Z, {
                  component: l.E.div,
                  variants: F,
                  sx: {
                    position: "relative",
                    px: { xs: 1.5, md: 3 },
                    borderLeft: "1px solid ".concat(c.D.gold, "66"),
                    borderRight: "1px solid ".concat(c.D.gold, "66"),
                  },
                  children: (0, i.jsx)(r.Z, {
                    sx: {
                      fontFamily: '"Cormorant Garamond", serif',
                      fontSize: { xs: 90, md: 180 },
                      color: c.D.softBrown,
                      fontWeight: 400,
                      lineHeight: 1,
                      fontStyle: "italic",
                    },
                    children: d.dayMonthYear.day,
                  }),
                }),
                (0, i.jsx)(a.Z, {
                  component: l.E.div,
                  variants: F,
                  sx: { textAlign: "left" },
                  children: (0, i.jsx)(r.Z, {
                    sx: {
                      fontFamily: '"Cormorant Garamond", serif',
                      fontSize: { xs: 44, md: 90 },
                      color: c.D.warmGray,
                      letterSpacing: "0.04em",
                      fontWeight: 300,
                      lineHeight: 1,
                    },
                    children: d.dayMonthYear.year.slice(2),
                  }),
                }),
              ],
            }),
            (0, i.jsx)(H, {
              text: d.time.toUpperCase(),
              sx: {
                fontFamily: '"Inter", sans-serif',
                letterSpacing: "0.5em",
                fontSize: { xs: 11, md: 13 },
                color: c.D.warmGray,
              },
            }),
          ],
        });
      }
      function N(e) {
        let { onReveal: t } = e,
          n = (0, o.useRef)(null),
          s = (0, R.Y)(n, { once: !0, margin: "-20% 0px -20% 0px" }),
          [d, x] = (0, o.useState)(!1),
          [h, m] = (0, o.useState)(!1),
          p = (0, G.Z)("(max-width:600px)"),
          f = (0, o.useCallback)(() => {
            d || (x(!0), m(!0), null == t || t());
          }, [d, t]);
        return (
          (0, o.useEffect)(() => {
            if (!h) return;
            let e = setTimeout(() => m(!1), 2400);
            return () => clearTimeout(e);
          }, [h]),
          (0, i.jsxs)(a.Z, {
            ref: n,
            sx: {
              position: "relative",
              py: { xs: 12, md: 18 },
              background: "linear-gradient(180deg, "
                .concat(c.D.ivory, " 0%, ")
                .concat(c.D.beige, " 100%)"),
              overflow: "hidden",
            },
            children: [
              (0, i.jsx)(A, { opacity: 0.06 }),
              (0, i.jsx)(L, { position: "top-left", opacity: 0.4 }),
              (0, i.jsx)(L, { position: "bottom-right", opacity: 0.4 }),
              (0, i.jsxs)(y.Z, {
                maxWidth: "md",
                sx: { position: "relative", zIndex: 2, textAlign: "center" },
                children: [
                  (0, i.jsx)(a.Z, {
                    component: l.E.div,
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: !0 },
                    transition: { duration: 0.8 },
                    children: (0, i.jsx)(r.Z, {
                      variant: "h6",
                      sx: { color: c.D.gold, mb: 2, fontSize: 11 },
                      children: "✦ Save the date ✦",
                    }),
                  }),
                  (0, i.jsxs)(a.Z, {
                    sx: {
                      position: "relative",
                      my: { xs: 3, md: 5 },
                      display: "grid",
                      placeItems: "center",
                    },
                    children: [
                      s &&
                        (0, i.jsx)(T, {
                          width: p ? 320 : 560,
                          height: p ? 230 : 320,
                          onComplete: f,
                          hint: "Scratch to reveal",
                          children: (0, i.jsx)(O, {}),
                        }),
                      (0, i.jsx)(u, { active: h, count: 70, spread: 520 }),
                    ],
                  }),
                  (0, i.jsx)(W, {}),
                  (0, i.jsxs)(l.E.div, {
                    initial: { opacity: 0, y: 10 },
                    animate: d ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 },
                    transition: { delay: 0.4, duration: 1 },
                    children: [
                      (0, i.jsx)(r.Z, {
                        className: "arabic",
                        sx: {
                          fontSize: { xs: 22, md: 30 },
                          color: c.D.softBrown,
                          mt: 3,
                          lineHeight: 1.8,
                        },
                        children: "وَجَعَلَ بَيْنَكُم مَوَدَّةً وَرَحْمَةً",
                      }),
                      (0, i.jsx)(r.Z, {
                        sx: {
                          fontFamily: '"Cormorant Garamond", serif',
                          fontStyle: "italic",
                          color: c.D.warmGray,
                          mt: 1.5,
                          fontSize: { xs: 16, md: 19 },
                        },
                        children:
                          "“And He placed between you affection and mercy.”",
                      }),
                      (0, i.jsx)(r.Z, {
                        variant: "h6",
                        sx: {
                          color: c.D.gold,
                          mt: 1,
                          fontSize: 10,
                          letterSpacing: "0.4em",
                        },
                        children: "Qur'an 30:21",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
      function Q(e) {
        let t = Math.max(0, new Date(e).getTime() - Date.now());
        return {
          days: Math.floor(t / 864e5),
          hours: Math.floor((t / 36e5) % 24),
          minutes: Math.floor((t / 6e4) % 60),
          seconds: Math.floor((t / 1e3) % 60),
        };
      }
      function V(e) {
        let { value: t, label: n } = e;
        return (0, i.jsxs)(a.Z, {
          component: l.E.div,
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0 },
          transition: { duration: 0.9, ease: [0.2, 0.8, 0.2, 1] },
          sx: {
            textAlign: "center",
            py: { xs: 3, md: 4 },
            px: { xs: 2, md: 3 },
            border: "1px solid ".concat(c.D.gold, "55"),
            position: "relative",
            background: "".concat(c.D.offWhite, "cc"),
            backdropFilter: "blur(6px)",
            transition: "transform 0.5s ease, border-color 0.5s ease",
            "&:hover": { transform: "translateY(-4px)", borderColor: c.D.gold },
            "&::before, &::after": {
              content: '""',
              position: "absolute",
              width: 10,
              height: 10,
              border: "1px solid ".concat(c.D.gold),
              opacity: 0.5,
            },
            "&::before": {
              top: -1,
              left: -1,
              borderRight: "none",
              borderBottom: "none",
            },
            "&::after": {
              bottom: -1,
              right: -1,
              borderLeft: "none",
              borderTop: "none",
            },
          },
          children: [
            (0, i.jsx)(r.Z, {
              sx: {
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: { xs: 44, md: 68 },
                fontWeight: 400,
                color: c.D.softBrown,
                lineHeight: 1,
              },
              children: String(t).padStart(2, "0"),
            }),
            (0, i.jsx)(r.Z, {
              variant: "h6",
              sx: {
                color: c.D.warmGray,
                mt: 1.5,
                fontSize: 10,
                letterSpacing: "0.4em",
              },
              children: n,
            }),
          ],
        });
      }
      function _() {
        let [e, t] = (0, o.useState)(null);
        return (
          (0, o.useEffect)(() => {
            t(Q(d.date));
            let e = setInterval(() => t(Q(d.date)), 1e3);
            return () => clearInterval(e);
          }, []),
          (0, i.jsx)(a.Z, {
            sx: {
              position: "relative",
              py: { xs: 10, md: 14 },
              background: c.D.offWhite,
            },
            children: (0, i.jsxs)(y.Z, {
              maxWidth: "md",
              children: [
                (0, i.jsxs)(a.Z, {
                  sx: { textAlign: "center", mb: 6 },
                  children: [
                    (0, i.jsx)(r.Z, {
                      variant: "h6",
                      sx: { color: c.D.gold, fontSize: 11 },
                      children: "Counting down to forever",
                    }),
                    (0, i.jsx)(r.Z, {
                      variant: "h3",
                      sx: {
                        color: c.D.softBrown,
                        fontStyle: "italic",
                        mt: 1.5,
                        fontSize: { xs: 32, md: 48 },
                      },
                      children: "Until our forever begins",
                    }),
                    (0, i.jsx)(W, {}),
                  ],
                }),
                (0, i.jsxs)(k.ZP, {
                  container: !0,
                  spacing: { xs: 2, md: 3 },
                  children: [
                    (0, i.jsx)(k.ZP, {
                      item: !0,
                      xs: 6,
                      sm: 3,
                      children: (0, i.jsx)(V, {
                        value: e ? e.days : "--",
                        label: "Days",
                      }),
                    }),
                    (0, i.jsx)(k.ZP, {
                      item: !0,
                      xs: 6,
                      sm: 3,
                      children: (0, i.jsx)(V, {
                        value: e ? e.hours : "--",
                        label: "Hours",
                      }),
                    }),
                    (0, i.jsx)(k.ZP, {
                      item: !0,
                      xs: 6,
                      sm: 3,
                      children: (0, i.jsx)(V, {
                        value: e ? e.minutes : "--",
                        label: "Minutes",
                      }),
                    }),
                    (0, i.jsx)(k.ZP, {
                      item: !0,
                      xs: 6,
                      sm: 3,
                      children: (0, i.jsx)(V, {
                        value: e ? e.seconds : "--",
                        label: "Seconds",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      }
      function q(e) {
        let { event: t, index: n } = e;
        return (0, i.jsxs)(a.Z, {
          component: l.E.div,
          initial: { opacity: 0, y: 40 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0, margin: "-80px" },
          transition: {
            duration: 1,
            delay: 0.15 * n,
            ease: [0.2, 0.8, 0.2, 1],
          },
          sx: {
            position: "relative",
            p: { xs: 4, md: 6 },
            background: c.D.offWhite,
            border: "1px solid ".concat(c.D.beige),
            textAlign: "center",
            height: "100%",
            transition: "all 0.6s ease",
            "&:hover": {
              borderColor: c.D.gold,
              transform: "translateY(-6px)",
              boxShadow: "0 30px 60px -30px ".concat(c.D.warmGray, "55"),
            },
            "&::before, &::after": {
              content: '""',
              position: "absolute",
              width: 18,
              height: 18,
              border: "1px solid ".concat(c.D.gold),
              opacity: 0.6,
            },
            "&::before": {
              top: -1,
              left: -1,
              borderRight: "none",
              borderBottom: "none",
            },
            "&::after": {
              bottom: -1,
              right: -1,
              borderLeft: "none",
              borderTop: "none",
            },
          },
          children: [
            (0, i.jsx)(r.Z, {
              className: "arabic",
              sx: { color: c.D.gold, fontSize: 28, mb: 1 },
              children: t.arabic,
            }),
            (0, i.jsx)(r.Z, {
              sx: {
                fontFamily: '"Cormorant Garamond", serif',
                fontStyle: "italic",
                color: c.D.softBrown,
                fontSize: { xs: 30, md: 38 },
              },
              children: t.title,
            }),
            (0, i.jsx)(a.Z, {
              sx: {
                width: 50,
                height: "1px",
                background: c.D.gold,
                mx: "auto",
                my: 2.5,
                opacity: 0.7,
              },
            }),
            (0, i.jsx)(r.Z, {
              variant: "h6",
              sx: { color: c.D.warmGray, fontSize: 10, mb: 1 },
              children: t.date,
            }),
            (0, i.jsx)(r.Z, {
              sx: {
                color: c.D.softBrown,
                fontSize: 18,
                fontFamily: '"Cormorant Garamond", serif',
              },
              children: t.time,
            }),
            (0, i.jsx)(r.Z, {
              variant: "h6",
              sx: { color: c.D.gold, fontSize: 10, mt: 2.5 },
              children: "Venue",
            }),
            (0, i.jsx)(r.Z, {
              sx: { color: c.D.deepBrown, mt: 0.5, fontSize: 16 },
              children: t.place,
            }),
            (0, i.jsx)(r.Z, {
              sx: {
                color: c.D.warmGray,
                mt: 3,
                fontFamily: '"Cormorant Garamond", serif',
                fontStyle: "italic",
                fontSize: 16,
                lineHeight: 1.7,
              },
              children: t.description,
            }),
          ],
        });
      }
      function Y() {
        return (0, i.jsx)(a.Z, {
          id: "events",
          sx: {
            position: "relative",
            py: { xs: 12, md: 18 },
            background: "linear-gradient(180deg, "
              .concat(c.D.ivory, " 0%, ")
              .concat(c.D.offWhite, " 100%)"),
          },
          children: (0, i.jsxs)(y.Z, {
            maxWidth: "lg",
            children: [
              (0, i.jsxs)(a.Z, {
                sx: { textAlign: "center", mb: { xs: 6, md: 10 } },
                children: [
                  (0, i.jsx)(r.Z, {
                    variant: "h6",
                    sx: { color: c.D.gold, fontSize: 11 },
                    children: "Wedding events",
                  }),
                  (0, i.jsx)(r.Z, {
                    variant: "h2",
                    sx: {
                      fontStyle: "italic",
                      color: c.D.softBrown,
                      fontSize: { xs: 44, md: 72 },
                      mt: 1.5,
                    },
                    children: "Celebrate with us",
                  }),
                  (0, i.jsx)(r.Z, {
                    sx: {
                      color: c.D.warmGray,
                      fontFamily: '"Cormorant Garamond", serif',
                      fontStyle: "italic",
                      fontSize: 18,
                      maxWidth: 540,
                      mx: "auto",
                      mt: 2,
                    },
                    children:
                      "Two days, two sacred moments — your presence is the dearest blessing we could ask for.",
                  }),
                  (0, i.jsx)(W, {}),
                ],
              }),
              (0, i.jsx)(k.ZP, {
                container: !0,
                spacing: { xs: 4, md: 5 },
                justifyContent: "center",
                children: d.events.map((e, t) =>
                  (0, i.jsx)(
                    k.ZP,
                    {
                      item: !0,
                      xs: 12,
                      md: 6,
                      children: (0, i.jsx)(q, { event: e, index: t }),
                    },
                    e.title,
                  ),
                ),
              }),
            ],
          }),
        });
      }
      let X = [
        {
          year: "2021",
          title: "A chance meeting",
          arabic: "البداية",
          text: "Two strangers crossed paths at a community gathering — a quiet salaam exchanged became the first thread of something written long before.",
        },
        {
          year: "2022",
          title: "The bond grows",
          arabic: "المودة",
          text: "Through conversations of faith, family, and dreams, friendship matured into companionship — built upon trust, prayer, and patience.",
        },
        {
          year: "2024",
          title: "A promise made",
          arabic: "الميثاق",
          text: "Surrounded by family, with sincere intention and humble hearts, a promise was made — a covenant before Allah ﷻ to walk together.",
        },
        {
          year: "2026",
          title: "A new beginning",
          arabic: "الأبد",
          text: "And now, with gratitude, we invite you to witness the start of a lifetime — two souls becoming one home, one love, one ummah.",
        },
      ];
      function U() {
        return (0, i.jsx)(a.Z, {
          id: "story",
          sx: {
            position: "relative",
            py: { xs: 12, md: 18 },
            background: "linear-gradient(180deg, "
              .concat(c.D.offWhite, " 0%, ")
              .concat(c.D.ivory, " 100%)"),
          },
          children: (0, i.jsxs)(y.Z, {
            maxWidth: "md",
            children: [
              (0, i.jsxs)(a.Z, {
                sx: { textAlign: "center", mb: { xs: 6, md: 10 } },
                children: [
                  (0, i.jsx)(r.Z, {
                    variant: "h6",
                    sx: { color: c.D.gold, fontSize: 11 },
                    children: "Our journey",
                  }),
                  (0, i.jsx)(r.Z, {
                    variant: "h2",
                    sx: {
                      fontStyle: "italic",
                      color: c.D.softBrown,
                      fontSize: { xs: 44, md: 72 },
                      mt: 1.5,
                    },
                    children: "The story of us",
                  }),
                  (0, i.jsx)(r.Z, {
                    className: "arabic",
                    sx: {
                      color: c.D.warmGray,
                      mt: 1,
                      fontSize: { xs: 18, md: 22 },
                    },
                    children: "قصة حب كتبها القدر",
                  }),
                  (0, i.jsx)(W, {}),
                ],
              }),
              (0, i.jsxs)(a.Z, {
                sx: { position: "relative" },
                children: [
                  (0, i.jsx)(a.Z, {
                    sx: {
                      position: "absolute",
                      left: { xs: 24, md: "50%" },
                      top: 0,
                      bottom: 0,
                      width: "1px",
                      background: "linear-gradient(180deg, transparent 0%, "
                        .concat(c.D.gold, "88 10%, ")
                        .concat(c.D.gold, "88 90%, transparent 100%)"),
                      transform: { md: "translateX(-0.5px)" },
                    },
                  }),
                  X.map((e, t) => {
                    let n = t % 2 == 0;
                    return (0, i.jsxs)(
                      a.Z,
                      {
                        component: l.E.div,
                        initial: { opacity: 0, y: 60 },
                        whileInView: { opacity: 1, y: 0 },
                        viewport: { once: !0, margin: "-100px" },
                        transition: { duration: 0.9, ease: [0.2, 0.8, 0.2, 1] },
                        sx: {
                          position: "relative",
                          mb: { xs: 6, md: 8 },
                          pl: { xs: 7, md: 0 },
                        },
                        children: [
                          (0, i.jsx)(a.Z, {
                            sx: {
                              position: "absolute",
                              left: { xs: 18, md: "50%" },
                              top: 12,
                              width: 14,
                              height: 14,
                              background: c.D.offWhite,
                              border: "1.5px solid ".concat(c.D.gold),
                              transform: {
                                xs: "rotate(45deg)",
                                md: "translateX(-50%) rotate(45deg)",
                              },
                              zIndex: 2,
                            },
                          }),
                          (0, i.jsxs)(k.ZP, {
                            container: !0,
                            spacing: { xs: 2, md: 6 },
                            alignItems: "center",
                            children: [
                              (0, i.jsxs)(k.ZP, {
                                item: !0,
                                xs: 12,
                                md: 6,
                                sx: {
                                  order: { xs: 1, md: n ? 1 : 2 },
                                  textAlign: {
                                    xs: "left",
                                    md: n ? "right" : "left",
                                  },
                                },
                                children: [
                                  (0, i.jsx)(r.Z, {
                                    variant: "h6",
                                    sx: {
                                      color: c.D.gold,
                                      fontSize: 10,
                                      letterSpacing: "0.5em",
                                    },
                                    children: e.year,
                                  }),
                                  (0, i.jsx)(r.Z, {
                                    sx: {
                                      fontFamily: '"Cormorant Garamond", serif',
                                      fontSize: { xs: 30, md: 40 },
                                      fontStyle: "italic",
                                      color: c.D.softBrown,
                                      mt: 0.5,
                                    },
                                    children: e.title,
                                  }),
                                  (0, i.jsx)(r.Z, {
                                    className: "arabic",
                                    sx: {
                                      color: c.D.warmGray,
                                      fontSize: 18,
                                      mt: 0.5,
                                    },
                                    children: e.arabic,
                                  }),
                                ],
                              }),
                              (0, i.jsx)(k.ZP, {
                                item: !0,
                                xs: 12,
                                md: 6,
                                sx: { order: { xs: 2, md: n ? 2 : 1 } },
                                children: (0, i.jsx)(r.Z, {
                                  sx: {
                                    color: c.D.warmGray,
                                    fontSize: { xs: 15, md: 16 },
                                    lineHeight: 1.8,
                                    maxWidth: 360,
                                    ml: { md: n ? 0 : "auto" },
                                  },
                                  children: e.text,
                                }),
                              }),
                            ],
                          }),
                        ],
                      },
                      e.year,
                    );
                  }),
                ],
              }),
            ],
          }),
        });
      }
      let J = [
        {
          gradient: "linear-gradient(135deg, "
            .concat(c.D.warmGray, " 0%, ")
            .concat(c.D.softBrown, " 100%)"),
          label: "Moments",
          image: "./images/moments.JPG",
        },
        {
          gradient: "linear-gradient(160deg, "
            .concat(c.D.beige, " 0%, ")
            .concat(c.D.rose, " 80%)"),
          label: "Quiet days",
          image: "/images/album-2.jpg",
        },
        {
          gradient: "linear-gradient(135deg, "
            .concat(c.D.softBrown, " 0%, ")
            .concat(c.D.deepBrown, " 100%)"),
          label: "Promises",
          image: "./images/album-5.jpg",
        },
        {
          gradient: "linear-gradient(160deg, "
            .concat(c.D.ivory, " 0%, ")
            .concat(c.D.beige, " 100%)"),
          label: "Together",
          image: "/images/album-4.jpg",
        },
        {
          gradient: "linear-gradient(135deg, "
            .concat(c.D.warmGray, " 0%, ")
            .concat(c.D.rose, " 100%)"),
          label: "Family",
          image: "./images/family.JPG",
        },
        {
          gradient: "linear-gradient(135deg, "
            .concat(c.D.deepBrown, " 0%, ")
            .concat(c.D.softBrown, " 80%)"),
          label: "Du’a",
          image: "./images/dua.JPG",
        },
      ];
      function K(e) {
        let { tile: t, span: n = 4, height: o = 320, delay: s = 0 } = e;
        return (0, i.jsx)(k.ZP, {
          item: !0,
          xs: 12,
          sm: 6,
          md: n,
          children: (0, i.jsxs)(a.Z, {
            component: l.E.div,
            initial: { opacity: 0, y: 50, scale: 0.96 },
            whileInView: { opacity: 1, y: 0, scale: 1 },
            viewport: { once: !0, margin: "-80px" },
            transition: { duration: 1.1, delay: s, ease: [0.2, 0.8, 0.2, 1] },
            sx: {
              position: "relative",
              width: "100%",
              height: o,
              overflow: "hidden",
              cursor: "pointer",
              border: "1px solid ".concat(c.D.beige),
              "&:hover .glow": { opacity: 1 },
              "&:hover .bg": { transform: "scale(1.08)" },
              "&:hover .label": { letterSpacing: "0.5em" },
            },
            children: [
              (0, i.jsx)(a.Z, {
                className: "bg",
                sx: {
                  position: "absolute",
                  inset: 0,
                  backgroundImage: t.image
                    ? "url(".concat(t.image, "), ").concat(t.gradient)
                    : t.gradient,
                  backgroundSize: "cover, 100% 100%",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  transition: "transform 1.4s ease",
                  filter: "saturate(0.85)",
                },
              }),
              (0, i.jsx)(a.Z, {
                sx: {
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                    "\n              radial-gradient(circle at 30% 30%, "
                      .concat(
                        c.D.offWhite,
                        "22 1px, transparent 2px),\n              radial-gradient(circle at 70% 70%, ",
                      )
                      .concat(
                        c.D.offWhite,
                        "22 1px, transparent 2px)\n            ",
                      ),
                  backgroundSize: "40px 40px, 60px 60px",
                  opacity: 0.6,
                },
              }),
              (0, i.jsx)(a.Z, {
                sx: {
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, transparent 50%, ".concat(
                      c.D.deepBrown,
                      "99 100%)",
                    ),
                },
              }),
              (0, i.jsx)(a.Z, {
                className: "glow",
                sx: {
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(135deg, ".concat(
                    c.D.gold,
                    "33, transparent 60%)",
                  ),
                  opacity: 0,
                  transition: "opacity 0.6s ease",
                },
              }),
              (0, i.jsx)(a.Z, {
                sx: {
                  position: "absolute",
                  inset: 14,
                  border: "1px solid ".concat(c.D.offWhite, "66"),
                  pointerEvents: "none",
                },
              }),
              (0, i.jsx)(r.Z, {
                className: "label",
                variant: "h6",
                sx: {
                  position: "absolute",
                  bottom: 26,
                  left: 26,
                  right: 26,
                  color: c.D.offWhite,
                  fontSize: 10,
                  letterSpacing: "0.4em",
                  transition: "letter-spacing 0.6s ease",
                },
                children: t.label,
              }),
            ],
          }),
        });
      }
      function $() {
        return (0, i.jsx)(a.Z, {
          id: "gallery",
          sx: {
            position: "relative",
            py: { xs: 12, md: 18 },
            background: c.D.offWhite,
          },
          children: (0, i.jsxs)(y.Z, {
            maxWidth: "lg",
            children: [
              (0, i.jsxs)(a.Z, {
                sx: { textAlign: "center", mb: { xs: 6, md: 10 } },
                children: [
                  (0, i.jsx)(r.Z, {
                    variant: "h6",
                    sx: { color: c.D.gold, fontSize: 11 },
                    children: "A glimpse",
                  }),
                  (0, i.jsx)(r.Z, {
                    variant: "h2",
                    sx: {
                      fontStyle: "italic",
                      color: c.D.softBrown,
                      fontSize: { xs: 44, md: 72 },
                      mt: 1.5,
                    },
                    children: "Moments & memories",
                  }),
                  (0, i.jsx)(W, {}),
                ],
              }),
              (0, i.jsxs)(k.ZP, {
                container: !0,
                spacing: { xs: 2, md: 3 },
                children: [
                  (0, i.jsx)(K, { tile: J[0], span: 6, height: 420, delay: 0 }),
                  (0, i.jsx)(K, {
                    tile: J[1],
                    span: 6,
                    height: 420,
                    delay: 0.1,
                  }),
                  (0, i.jsx)(K, {
                    tile: J[2],
                    span: 4,
                    height: 300,
                    delay: 0.2,
                  }),
                  (0, i.jsx)(K, {
                    tile: J[3],
                    span: 4,
                    height: 300,
                    delay: 0.3,
                  }),
                  (0, i.jsx)(K, {
                    tile: J[4],
                    span: 4,
                    height: 300,
                    delay: 0.4,
                  }),
                  (0, i.jsx)(K, {
                    tile: J[5],
                    span: 12,
                    height: 360,
                    delay: 0.5,
                  }),
                ],
              }),
            ],
          }),
        });
      }
      let ee = [
        {
          arabic: "وَجَعَلَ بَيْنَكُم مَوَدَّةً وَرَحْمَةً",
          english: "“And He placed between you affection and mercy.”",
          cite: "Qur’an, Surah Ar-Rum 30:21",
        },
        {
          arabic: "هُنَّ لِبَاسٌ لَكُمْ وَأَنْتُمْ لِبَاسٌ لَهُنَّ",
          english:
            "“They are a garment for you, and you are a garment for them.”",
          cite: "Qur’an, Surah Al-Baqarah 2:187",
        },
        {
          arabic:
            "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا",
          english:
            "“And among His signs is that He created for you from yourselves mates that you may find tranquility in them.”",
          cite: "Qur’an, Surah Ar-Rum 30:21",
        },
      ];
      function et() {
        return (0, i.jsxs)(a.Z, {
          sx: {
            position: "relative",
            py: { xs: 12, md: 20 },
            background: "linear-gradient(180deg, "
              .concat(c.D.beige, " 0%, ")
              .concat(c.D.ivory, " 100%)"),
            overflow: "hidden",
          },
          children: [
            (0, i.jsx)(A, { opacity: 0.04 }),
            (0, i.jsx)(C, { opacity: 0.05 }),
            (0, i.jsxs)(y.Z, {
              maxWidth: "md",
              sx: { position: "relative", zIndex: 2, display: "none" },
              children: [
                (0, i.jsxs)(a.Z, {
                  sx: { textAlign: "center", mb: { xs: 6, md: 10 } },
                  children: [
                    (0, i.jsx)(r.Z, {
                      variant: "h6",
                      sx: { color: c.D.gold, fontSize: 11 },
                      children: "✦ Words of blessing ✦",
                    }),
                    (0, i.jsx)(r.Z, {
                      variant: "h2",
                      sx: {
                        fontStyle: "italic",
                        color: c.D.softBrown,
                        fontSize: { xs: 44, md: 72 },
                        mt: 1.5,
                      },
                      children: "Quranic reflections",
                    }),
                    (0, i.jsx)(W, {}),
                  ],
                }),
                ee.map((e, t) =>
                  (0, i.jsxs)(
                    a.Z,
                    {
                      component: l.E.div,
                      initial: { opacity: 0, y: 50 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: !0, margin: "-80px" },
                      transition: { duration: 1.1, ease: [0.2, 0.8, 0.2, 1] },
                      sx: {
                        textAlign: "center",
                        py: { xs: 5, md: 7 },
                        borderTop:
                          0 === t
                            ? "1px solid ".concat(c.D.gold, "33")
                            : "none",
                        borderBottom: "1px solid ".concat(c.D.gold, "33"),
                        position: "relative",
                      },
                      children: [
                        (0, i.jsx)(r.Z, {
                          className: "arabic",
                          sx: {
                            color: c.D.softBrown,
                            fontSize: { xs: 28, md: 42 },
                            lineHeight: 1.7,
                            letterSpacing: 0,
                          },
                          children: e.arabic,
                        }),
                        (0, i.jsx)(r.Z, {
                          sx: {
                            color: c.D.warmGray,
                            mt: 2.5,
                            fontFamily: '"Cormorant Garamond", serif',
                            fontStyle: "italic",
                            fontSize: { xs: 18, md: 24 },
                            maxWidth: 620,
                            mx: "auto",
                            lineHeight: 1.5,
                          },
                          children: e.english,
                        }),
                        (0, i.jsx)(r.Z, {
                          variant: "h6",
                          sx: {
                            color: c.D.gold,
                            mt: 2,
                            fontSize: 10,
                            letterSpacing: "0.4em",
                          },
                          children: e.cite,
                        }),
                      ],
                    },
                    t,
                  ),
                ),
              ],
            }),
          ],
        });
      }
      var en = n(8167);
      function ei() {
        let e = "https://www.google.com/maps?q=".concat(
            d.venue.mapsQuery,
            "&output=embed",
          ),
          t = "https://maps.app.goo.gl/HVBdqEzs7HQ8mq11A?g_st=ic";
        return (0, i.jsx)(a.Z, {
          id: "location",
          sx: {
            position: "relative",
            py: { xs: 12, md: 18 },
            background: "linear-gradient(180deg, "
              .concat(c.D.offWhite, " 0%, ")
              .concat(c.D.ivory, " 100%)"),
          },
          children: (0, i.jsxs)(y.Z, {
            maxWidth: "lg",
            children: [
              (0, i.jsxs)(a.Z, {
                sx: { textAlign: "center", mb: { xs: 6, md: 8 } },
                children: [
                  (0, i.jsx)(r.Z, {
                    variant: "h6",
                    sx: { color: c.D.gold, fontSize: 11 },
                    children: "The venue",
                  }),
                  (0, i.jsx)(r.Z, {
                    variant: "h2",
                    sx: {
                      fontStyle: "italic",
                      color: c.D.softBrown,
                      fontSize: { xs: 44, md: 72 },
                      mt: 1.5,
                    },
                    children: "Find your way",
                  }),
                  (0, i.jsxs)(r.Z, {
                    sx: {
                      color: c.D.warmGray,
                      mt: 1.5,
                      fontFamily: '"Cormorant Garamond", serif',
                      fontStyle: "italic",
                      fontSize: 18,
                    },
                    children: [d.venue.name, " — ", d.venue.address],
                  }),
                  (0, i.jsx)(W, {}),
                ],
              }),
              (0, i.jsx)(a.Z, {
                component: l.E.div,
                initial: { opacity: 0, y: 60 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0, margin: "-80px" },
                transition: { duration: 1.1, ease: [0.2, 0.8, 0.2, 1] },
                sx: {
                  position: "relative",
                  border: "1px solid ".concat(c.D.gold, "66"),
                  p: { xs: 1, md: 1.5 },
                  background: c.D.offWhite,
                  boxShadow: "0 30px 80px -40px ".concat(c.D.warmGray, "55"),
                  "&::before, &::after": {
                    content: '""',
                    position: "absolute",
                    width: 24,
                    height: 24,
                    border: "1px solid ".concat(c.D.gold),
                  },
                  "&::before": {
                    top: -1,
                    left: -1,
                    borderRight: "none",
                    borderBottom: "none",
                  },
                  "&::after": {
                    bottom: -1,
                    right: -1,
                    borderLeft: "none",
                    borderTop: "none",
                  },
                },
                children: (0, i.jsx)(a.Z, {
                  sx: {
                    position: "relative",
                    overflow: "hidden",
                    aspectRatio: { xs: "4/5", md: "16/8" },
                    width: "100%",
                  },
                  children: (0, i.jsx)(a.Z, {
                    component: "iframe",
                    src: e,
                    title: "Wedding venue map",
                    loading: "lazy",
                    referrerPolicy: "no-referrer-when-downgrade",
                    allowFullScreen: !0,
                    sx: {
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      border: 0,
                      filter: "grayscale(0.4) sepia(0.15) contrast(0.95)",
                    },
                  }),
                }),
              }),
              (0, i.jsx)(a.Z, {
                sx: { textAlign: "center", mt: 5 },
                children: (0, i.jsx)(j.Z, {
                  href: t,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  startIcon: (0, i.jsx)(en.Z, {}),
                  variant: "outlined",
                  children: "Get directions",
                }),
              }),
            ],
          }),
        });
      }
      var eo = n(5073),
        ea = n(8878),
        er = n(6118),
        es = n(5935);
      let el = {
        "& .MuiOutlinedInput-root": {
          borderRadius: 0,
          background: c.D.offWhite,
          "& fieldset": { borderColor: "".concat(c.D.warmGray, "55") },
          "&:hover fieldset": { borderColor: c.D.gold },
          "&.Mui-focused fieldset": {
            borderColor: c.D.gold,
            borderWidth: "1px",
          },
        },
        "& .MuiInputLabel-root": {
          color: c.D.warmGray,
          letterSpacing: "0.2em",
          fontSize: 12,
          textTransform: "uppercase",
        },
        "& .MuiInputLabel-root.Mui-focused": { color: c.D.gold },
        "& .MuiOutlinedInput-input": { fontSize: 15, py: 1.8 },
      };
      function ec() {
        let [e, t] = (0, o.useState)({
            name: "",
            email: "",
            guests: "1",
            attendance: "attending",
            message: "",
          }),
          [n, s] = (0, o.useState)(!1),
          d = (e) => t((t) => ({ ...t, [e.target.name]: e.target.value }));
        return (0, i.jsxs)(a.Z, {
          id: "rsvp",
          sx: {
            display: "none",
            position: "relative",
            py: { xs: 12, md: 18 },
            background: "linear-gradient(180deg, "
              .concat(c.D.ivory, " 0%, ")
              .concat(c.D.beige, " 100%)"),
            overflow: "hidden",
          },
          children: [
            (0, i.jsx)(A, { opacity: 0.04 }),
            (0, i.jsxs)(y.Z, {
              maxWidth: "md",
              sx: { position: "relative", zIndex: 2 },
              children: [
                (0, i.jsxs)(a.Z, {
                  sx: { textAlign: "center", mb: { xs: 6, md: 8 } },
                  children: [
                    (0, i.jsx)(r.Z, {
                      variant: "h6",
                      sx: { color: c.D.gold, fontSize: 11 },
                      children: "With sincere honour",
                    }),
                    (0, i.jsx)(r.Z, {
                      variant: "h2",
                      sx: {
                        fontStyle: "italic",
                        color: c.D.softBrown,
                        fontSize: { xs: 44, md: 72 },
                        mt: 1.5,
                      },
                      children: "Kindly RSVP",
                    }),
                    (0, i.jsx)(r.Z, {
                      className: "arabic",
                      sx: {
                        color: c.D.warmGray,
                        mt: 1,
                        fontSize: { xs: 18, md: 22 },
                      },
                      children: "بارك الله لكما وبارك عليكما",
                    }),
                    (0, i.jsx)(r.Z, {
                      sx: {
                        color: c.D.warmGray,
                        mt: 2,
                        fontFamily: '"Cormorant Garamond", serif',
                        fontStyle: "italic",
                        fontSize: 18,
                        maxWidth: 520,
                        mx: "auto",
                      },
                      children:
                        "Your presence and du’as mean the world to us. Please confirm by 12 July 2026.",
                    }),
                    (0, i.jsx)(W, {}),
                  ],
                }),
                (0, i.jsx)(a.Z, {
                  component: l.E.form,
                  onSubmit: (e) => {
                    (e.preventDefault(),
                      s(!0),
                      t({
                        name: "",
                        email: "",
                        guests: "1",
                        attendance: "attending",
                        message: "",
                      }));
                  },
                  initial: { opacity: 0, y: 50 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0, margin: "-80px" },
                  transition: { duration: 1, ease: [0.2, 0.8, 0.2, 1] },
                  sx: {
                    position: "relative",
                    p: { xs: 3, md: 6 },
                    background: c.D.offWhite,
                    border: "1px solid ".concat(c.D.gold, "55"),
                    "&::before, &::after": {
                      content: '""',
                      position: "absolute",
                      width: 22,
                      height: 22,
                      border: "1px solid ".concat(c.D.gold),
                    },
                    "&::before": {
                      top: -1,
                      left: -1,
                      borderRight: "none",
                      borderBottom: "none",
                    },
                    "&::after": {
                      bottom: -1,
                      right: -1,
                      borderLeft: "none",
                      borderTop: "none",
                    },
                  },
                  children: (0, i.jsxs)(k.ZP, {
                    container: !0,
                    spacing: 3,
                    children: [
                      (0, i.jsx)(k.ZP, {
                        item: !0,
                        xs: 12,
                        sm: 6,
                        children: (0, i.jsx)(eo.Z, {
                          fullWidth: !0,
                          required: !0,
                          name: "name",
                          label: "Full name",
                          value: e.name,
                          onChange: d,
                          sx: el,
                        }),
                      }),
                      (0, i.jsx)(k.ZP, {
                        item: !0,
                        xs: 12,
                        sm: 6,
                        children: (0, i.jsx)(eo.Z, {
                          fullWidth: !0,
                          required: !0,
                          name: "email",
                          type: "email",
                          label: "Email",
                          value: e.email,
                          onChange: d,
                          sx: el,
                        }),
                      }),
                      (0, i.jsx)(k.ZP, {
                        item: !0,
                        xs: 12,
                        sm: 6,
                        children: (0, i.jsxs)(eo.Z, {
                          select: !0,
                          fullWidth: !0,
                          name: "attendance",
                          label: "Will you attend?",
                          value: e.attendance,
                          onChange: d,
                          sx: el,
                          children: [
                            (0, i.jsx)(ea.Z, {
                              value: "attending",
                              children: "Joyfully accepts",
                            }),
                            (0, i.jsx)(ea.Z, {
                              value: "not_attending",
                              children: "Regretfully declines",
                            }),
                          ],
                        }),
                      }),
                      (0, i.jsx)(k.ZP, {
                        item: !0,
                        xs: 12,
                        sm: 6,
                        children: (0, i.jsx)(eo.Z, {
                          select: !0,
                          fullWidth: !0,
                          name: "guests",
                          label: "Guests",
                          value: e.guests,
                          onChange: d,
                          sx: el,
                          children: ["1", "2", "3", "4", "5"].map((e) =>
                            (0, i.jsx)(ea.Z, { value: e, children: e }, e),
                          ),
                        }),
                      }),
                      (0, i.jsx)(k.ZP, {
                        item: !0,
                        xs: 12,
                        children: (0, i.jsx)(eo.Z, {
                          fullWidth: !0,
                          name: "message",
                          label: "A blessing or message",
                          value: e.message,
                          onChange: d,
                          multiline: !0,
                          rows: 4,
                          sx: el,
                        }),
                      }),
                      (0, i.jsx)(k.ZP, {
                        item: !0,
                        xs: 12,
                        sx: { textAlign: "center", mt: 1 },
                        children: (0, i.jsx)(j.Z, {
                          type: "submit",
                          variant: "contained",
                          size: "large",
                          startIcon: (0, i.jsx)(es.Z, {}),
                          sx: { px: 6, py: 1.8 },
                          children: "Send my RSVP",
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, i.jsx)(er.Z, {
              open: n,
              onClose: () => s(!1),
              autoHideDuration: 4500,
              anchorOrigin: { vertical: "bottom", horizontal: "center" },
              message: "JazakAllahu khairan — your RSVP has been received.",
              sx: {
                "& .MuiSnackbarContent-root": {
                  background: c.D.softBrown,
                  color: c.D.offWhite,
                  borderRadius: 0,
                  letterSpacing: "0.1em",
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: 16,
                  fontStyle: "italic",
                },
              },
            }),
          ],
        });
      }
      function ed() {
        return (0, i.jsxs)(a.Z, {
          sx: {
            position: "relative",
            py: { xs: 10, md: 14 },
            background: "linear-gradient(180deg, "
              .concat(c.D.beige, " 0%, ")
              .concat(c.D.softBrown, " 100%)"),
            color: c.D.offWhite,
            overflow: "hidden",
            textAlign: "center",
          },
          children: [
            (0, i.jsx)(C, { opacity: 0.12, sx: { bottom: -10 } }),
            (0, i.jsxs)(y.Z, {
              maxWidth: "md",
              sx: { position: "relative", zIndex: 2 },
              children: [
                (0, i.jsx)(r.Z, {
                  className: "arabic",
                  sx: {
                    color: c.D.offWhite,
                    fontSize: { xs: 26, md: 36 },
                    lineHeight: 1.6,
                    opacity: 0.95,
                  },
                  children:
                    "بَارَكَ ٱللَّٰهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
                }),
                (0, i.jsx)(r.Z, {
                  sx: {
                    color: "".concat(c.D.ivory, "cc"),
                    mt: 3,
                    fontFamily: '"Cormorant Garamond", serif',
                    fontStyle: "italic",
                    fontSize: { xs: 18, md: 22 },
                    maxWidth: 620,
                    mx: "auto",
                    lineHeight: 1.6,
                  },
                  children:
                    "“May Allah bless you, shower His blessings upon you, and unite you both in goodness.”",
                }),
                (0, i.jsx)(W, { color: "".concat(c.D.gold) }),
                (0, i.jsx)(r.Z, {
                  variant: "h2",
                  sx: {
                    fontStyle: "italic",
                    fontSize: { xs: 48, md: 80 },
                    color: c.D.offWhite,
                    mt: 2,
                  },
                  children: "Anaz & Farzana",
                }),
                (0, i.jsx)(r.Z, {
                  variant: "h6",
                  sx: {
                    color: c.D.gold,
                    mt: 1.5,
                    fontSize: 11,
                    letterSpacing: "0.5em",
                  },
                  children: "07 . 12 . 2026",
                }),
                (0, i.jsx)(r.Z, {
                  sx: {
                    mt: 6,
                    fontSize: 11,
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "".concat(c.D.ivory, "99"),
                  },
                  children:
                    "Designed with love \xb7 For an unforgettable beginning",
                }),
              ],
            }),
          ],
        });
      }
      let ex = (0, o.forwardRef)(function (e, t) {
        let { src: n = "/audio/nasheed.mp3", onStateChange: a } = e,
          r = (0, o.useRef)(null),
          s = (0, o.useRef)(null),
          l = (0, o.useRef)(null),
          [c, d] = (0, o.useState)(!1),
          x = () => {
            s.current && (cancelAnimationFrame(s.current), (s.current = null));
          },
          h = (e, t, n) => {
            let i = r.current;
            if (!i) return;
            x();
            let o = performance.now(),
              a = Math.min(
                1,
                Math.max(0, Number.isFinite(i.volume) ? i.volume : 0),
              ),
              l = (e) => Math.min(1, Math.max(0, e)),
              c = (r) => {
                let d = Math.min(1, (r - o) / t);
                ((i.volume = l(a + d * (2 - d) * (e - a))),
                  d < 1
                    ? (s.current = requestAnimationFrame(c))
                    : ((i.volume = l(e)),
                      (s.current = null),
                      null == n || n()));
              };
            s.current = requestAnimationFrame(c);
          },
          m = () => {
            var e;
            null === (e = l.current) || void 0 === e || e.call(l);
          },
          p = () => {
            if (l.current) return;
            let e = [
                "scroll",
                "wheel",
                "touchstart",
                "touchmove",
                "pointerdown",
                "keydown",
              ],
              t = 0,
              n = async () => {
                let e = r.current;
                if (!e) return;
                if (!e.paused) {
                  m();
                  return;
                }
                let n = performance.now();
                !(n - t < 400) && ((t = n), (await u()) && m());
              };
            (e.forEach((e) => window.addEventListener(e, n, { passive: !0 })),
              (l.current = () => {
                (e.forEach((e) => window.removeEventListener(e, n)),
                  (l.current = null));
              }));
          },
          u = async () => {
            let e = r.current;
            if (!e || c) return !0;
            e.volume = 0;
            try {
              await e.play();
            } catch (e) {
              return !1;
            }
            return (d(!0), null == a || a(!0), h(0.45, 2600), !0);
          },
          f = async () => {
            (await u()) || p();
          },
          g = () => {
            let e = r.current;
            e &&
              c &&
              h(0, 900, () => {
                (e.pause(), d(!1), null == a || a(!1));
              });
          },
          y = () => (c ? g() : f());
        return (
          (0, o.useImperativeHandle)(
            t,
            () => ({ play: f, pause: g, toggle: y, isPlaying: () => c }),
            [c],
          ),
          (0, o.useEffect)(
            () => () => {
              (x(), m());
            },
            [],
          ),
          (0, i.jsx)("audio", { ref: r, src: n, preload: "auto", loop: !0 })
        );
      });
      function eh() {
        let [e, t] = (0, o.useState)(!1),
          [n, r] = (0, o.useState)(!1),
          [s, l] = (0, o.useState)(!1),
          c = (0, o.useRef)(null),
          d = (0, o.useCallback)(() => {
            var e;
            (t(!0), null === (e = c.current) || void 0 === e || e.play());
          }, []),
          x = (0, o.useCallback)(() => {
            var e;
            s || (l(!0), null === (e = c.current) || void 0 === e || e.play());
          }, [s]),
          h = (0, o.useCallback)(() => {
            var e;
            null === (e = c.current) || void 0 === e || e.toggle();
          }, []);
        return (
          (0, o.useEffect)(() => {
            e
              ? (document.body.style.overflow = "")
              : (document.body.style.overflow = "hidden");
          }, [e]),
          (0, i.jsxs)(a.Z, {
            sx: { position: "relative" },
            children: [
              (0, i.jsx)(f, { onOpen: d }),
              (0, i.jsx)(S, { audioOn: n, onToggleAudio: h }),
              (0, i.jsx)(ex, { ref: c, onStateChange: r }),
              (0, i.jsx)(B, {}),
              (0, i.jsx)(N, { onReveal: x }),
              (0, i.jsx)(_, {}),
              (0, i.jsx)(Y, {}),
              (0, i.jsx)(U, {}),
              (0, i.jsx)($, {}),
              (0, i.jsx)(et, {}),
              (0, i.jsx)(ei, {}),
              (0, i.jsx)(ec, {}),
              (0, i.jsx)(ed, {}),
            ],
          })
        );
      }
    },
  },
  function (e) {
    (e.O(0, [672, 888, 774, 179], function () {
      return e((e.s = 5557));
    }),
      (_N_E = e.O()));
  },
]);
