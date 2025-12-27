(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9220],
    {
        7717: (e, l, a) => {
            "use strict";
            a.d(l, { GradientBox: () => u });
            var t = a(32689),
                s = a(45677),
                r = a(94005),
                n = a(16114),
                i = a(36369),
                o = a(50494),
                c = a(39268),
                d = a(19893);
            let u = (e) => {
                let { title: l, mainWord: a, image: u, description: m, cta: x, secondCTA: b, showSecondLink: h } = e,
                    v = (0, d.useRef)(null),
                    f = (0, i.I)();
                return (
                    (0, o.L)(
                        () => {
                            c.Ay.set(".movable-block", { y: "0" }),
                                c.Ay.set(".gradient-divider", { x: "-100%", opacity: 0 }),
                                c.Ay.to(".gradient-divider", {
                                    x: "0%",
                                    opacity: 1,
                                    duration: 1,
                                    ease: "power1.out",
                                    scrollTrigger: { trigger: v.current, start: "top 30%", once: !0 },
                                }),
                                c.Ay.to(".movable-block", {
                                    y: "100%",
                                    duration: 1,
                                    ease: "power1.out",
                                    stagger: 0.08,
                                    scrollTrigger: {
                                        trigger: v.current,
                                        start: "top 70%",
                                        end: "bottom 80%",
                                        scrub: !0,
                                    },
                                });
                        },
                        { scope: v }
                    ),
                    (0, t.jsxs)("div", {
                        ref: v,
                        className:
                            "relative bg-background h-[70vh] xl:h-[120vh] w-full flex select-none overflow-hidden z-20 bg-black",
                        children: [
                            (0, t.jsxs)("div", {
                                className:
                                    "absolute bottom-0 left-0 flex items-start z-30 overflow-hidden w-full -mt-3",
                                children: [
                                    (0, t.jsx)("div", {
                                        className:
                                            "movable-block w-[34vw] h-[70vh] md:h-[120vh] bg-background md:bg-white md:border-t border-t-background will-change-transform -mr-1",
                                    }),
                                    (0, t.jsx)("div", {
                                        className:
                                            "movable-block w-[34vw] h-[70vh] md:h-[120vh] bg-background md:bg-white border-x border-x-background border-t md:border-t-background will-change-transform -mr-1",
                                    }),
                                    (0, t.jsx)("div", {
                                        className:
                                            "movable-block w-[34vw] h-[70vh] md:h-[120vh] bg-background md:bg-white md:border-t border-t-background will-change-transform -mr-1",
                                    }),
                                ],
                            }),
                            (0, t.jsx)(r.$, {
                                resource: u,
                                imgClassName: "object-cover absolute opacity-90",
                                fill: !0,
                            }),
                            (0, t.jsxs)("div", {
                                className:
                                    "relative size-full flex flex-col justify-between overflow-hidden py-6 md:py-10",
                                children: [
                                    (0, t.jsxs)("div", {
                                        className: "relative w-full flex flex-col gap-4 container",
                                        children: [
                                            (0, t.jsxs)("div", {
                                                className:
                                                    "flex flex-col w-full z-20 mix-blend-plus-lighter overflow-hidden",
                                                children: [
                                                    (0, t.jsx)("p", {
                                                        className:
                                                            "font-gothic text-[15vw] md:text-[15vw] lg:text-[16vw] text-center text-slate-500 uppercase leading-none",
                                                        children: a,
                                                    }),
                                                    (0, t.jsx)("div", {
                                                        className: "w-full h-[2px] bg-slate-500 gradient-divider mt-3",
                                                    }),
                                                ],
                                            }),
                                            (0, t.jsxs)("div", {
                                                className:
                                                    "flex items-start justify-between z-40 w-full text-background md:text-white ",
                                                children: [
                                                    (0, t.jsxs)("div", {
                                                        className:
                                                            "flex items-center md:gap-16 font-gothic text-base md:text-lg justify-between md:justify-start ",
                                                        children: [
                                                            (0, t.jsx)(s.A, {
                                                                ...x,
                                                                appearance: "inline",
                                                                withBlockPrefix: !0,
                                                                withArrow: !0,
                                                            }),
                                                            h &&
                                                            (0, t.jsx)(s.A, {
                                                                ...b,
                                                                appearance: "inline",
                                                                className: "hover:opacity-80",
                                                            }),
                                                        ],
                                                    }),
                                                    !f &&
                                                    (0, t.jsx)(n.Copy, {
                                                        children: (0, t.jsx)("p", {
                                                            className:
                                                                "font-sans font-medium text-gray-50 self-end max-w-xs text-sm line-clamp-3",
                                                            children: m,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            f &&
                                            (0, t.jsx)(n.Copy, {
                                                children: (0, t.jsx)("p", {
                                                    className:
                                                        "font-sans font-medium text-gray-50 max-w-xs text-sm line-clamp-3 mt-3 ",
                                                    children: m,
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, t.jsx)("div", {
                                        className: "container flex w-full",
                                        children: (0, t.jsx)(n.Copy, {
                                            children: (0, t.jsx)("p", {
                                                className:
                                                    "font-gothic text-gray-50 text-xl sm:text-3xl md:text-5xl xl:text-[3.5rem]",
                                                children: l,
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            };
        },
        10147: (e, l, a) => {
            "use strict";
            a.d(l, { LivePreviewListener: () => i });
            var t = a(32689),
                s = a(90652),
                r = a(31180),
                n = a(84873);
            a(19893);
            let i = () => {
                let e = (0, n.useRouter)();
                return (0, t.jsx)(r.p, { refresh: e.refresh, serverURL: (0, s.y)() });
            };
        },
        14921: (e, l, a) => {
            "use strict";
            a.d(l, { MovableBlocks: () => o });
            var t = a(32689),
                s = a(71162),
                r = a(50494),
                n = a(39268),
                i = a(19893);
            let o = (e) => {
                let { initialY: l, className: a, firstBoxClassName: o, secondBoxClassName: c } = e,
                    d = (0, i.useRef)(null);
                return (
                    (0, r.L)(
                        () => {
                            if (!d.current) return;
                            let e = d.current.querySelectorAll(".movable-block");
                            n.Ay.set(e, { y: l }),
                                n.Ay.to(e, {
                                    y: "0%",
                                    duration: 0.4,
                                    ease: "power2.out",
                                    stagger: 0.1,
                                    scrollTrigger: {
                                        trigger: d.current,
                                        start: "top bottom",
                                        end: "bottom 40%",
                                        scrub: !0,
                                    },
                                });
                        },
                        { scope: d }
                    ),
                    (0, t.jsxs)("div", {
                        className: (0, s.cn)("absolute top-0 right-5 flex items-start z-10 ", a),
                        ref: d,
                        children: [
                            (0, t.jsx)("div", {
                                className: (0, s.cn)("movable-block w-52 h-24 bg-background -mr-1", o),
                            }),
                            (0, t.jsx)("div", {
                                className: (0, s.cn)("movable-block w-40 h-16 bg-background -mr-2", c),
                            }),
                        ],
                    })
                );
            };
        },
        16114: (e, l, a) => {
            "use strict";
            a.r(l), a.d(l, { Copy: () => o });
            var t = a(32689),
                s = a(50494),
                r = a(39268),
                n = a(4228),
                i = a(19893);
            let o = (e) => {
                let { children: l, animateOnScroll: a = !0, delay: o = 0, className: c } = e,
                    d = (0, i.useRef)(null),
                    u = (0, i.useRef)([]),
                    m = (0, i.useRef)([]),
                    x = (0, i.useRef)([]);
                return ((0, s.L)(
                    () => {
                        if (d.current)
                            return (
                                (async () => {
                                    if (!d.current) return;
                                    m.current.forEach((e) => {
                                        e && e.revert();
                                    }),
                                        (m.current = []),
                                        (x.current = []),
                                        (u.current = []);
                                    let e = [];
                                    (d.current.hasAttribute("data-copy-wrapper")
                                        ? Array.from(d.current.children)
                                        : [d.current]
                                    ).forEach((e) => {
                                        u.current.push(e);
                                        let l = n.A.create(e, {
                                            type: "lines",
                                            mask: "lines",
                                            linesClass: "line++",
                                            lineThreshold: 0.1,
                                        });
                                        m.current.push(l);
                                        let a = window.getComputedStyle(e).textIndent;
                                        a &&
                                            "0px" !== a &&
                                            (l.lines.length > 0 && (l.lines[0].style.paddingLeft = a),
                                                (e.style.textIndent = "0")),
                                            x.current.push(...l.lines);
                                    }),
                                        r.Ay.set(x.current, { y: "100%" });
                                    let l = { y: "0%", duration: 1, stagger: 0.1, ease: "power4.out", delay: o };
                                    a
                                        ? r.Ay.to(x.current, {
                                            ...l,
                                            scrollTrigger: { trigger: d.current, start: "top 90%", once: !0 },
                                        })
                                        : r.Ay.to(x.current, l);
                                })(),
                                () => {
                                    m.current.forEach((e) => {
                                        e && e.revert();
                                    });
                                }
                            );
                    },
                    { scope: d, dependencies: [a, o] }
                ),
                    1 === i.Children.count(l))
                    ? i.cloneElement(l, { ref: d })
                    : (0, t.jsx)("div", { ref: d, "data-copy-wrapper": "true", className: c, children: l });
            };
        },
        19220: (e, l, a) => {
            Promise.resolve().then(a.t.bind(a, 47876, 23)),
                Promise.resolve().then(a.bind(a, 53417)),
                Promise.resolve().then(a.bind(a, 23541)),
                Promise.resolve().then(a.bind(a, 40147)),
                Promise.resolve().then(a.bind(a, 35424)),
                Promise.resolve().then(a.bind(a, 26496)),
                Promise.resolve().then(a.bind(a, 50825)),
                Promise.resolve().then(a.bind(a, 97212)),
                Promise.resolve().then(a.bind(a, 7717)),
                Promise.resolve().then(a.bind(a, 84616)),
                Promise.resolve().then(a.bind(a, 59106)),
                Promise.resolve().then(a.bind(a, 65231)),
                Promise.resolve().then(a.bind(a, 28982)),
                Promise.resolve().then(a.bind(a, 36522)),
                Promise.resolve().then(a.bind(a, 87028)),
                Promise.resolve().then(a.bind(a, 83056)),
                Promise.resolve().then(a.bind(a, 34366)),
                Promise.resolve().then(a.bind(a, 10147)),
                Promise.resolve().then(a.bind(a, 85730)),
                Promise.resolve().then(a.bind(a, 49653)),
                Promise.resolve().then(a.bind(a, 14921)),
                Promise.resolve().then(a.bind(a, 75165)),
                Promise.resolve().then(a.bind(a, 16114)),
                Promise.resolve().then(a.bind(a, 98768));
        },
        23541: (e, l, a) => {
            "use strict";
            a.d(l, { AssetList: () => b });
            var t = a(32689),
                s = a(45677),
                r = a(19893),
                n = a(46597),
                i = a(71162);
            let o = r.forwardRef((e, l) => {
                let { className: a, children: s, ...r } = e;
                return (0, t.jsxs)(n.bL, {
                    ref: l,
                    className: (0, i.cn)("relative overflow-hidden", a),
                    ...r,
                    children: [
                        (0, t.jsx)(n.LM, { className: "h-full w-full rounded-[inherit]", children: s }),
                        (0, t.jsx)(c, {}),
                        (0, t.jsx)(n.OK, {}),
                    ],
                });
            });
            o.displayName = n.bL.displayName;
            let c = r.forwardRef((e, l) => {
                let { className: a, orientation: s = "vertical", ...r } = e;
                return (0, t.jsx)(n.VM, {
                    ref: l,
                    orientation: s,
                    className: (0, i.cn)(
                        "flex touch-none select-none transition-colors",
                        "vertical" === s && "h-full w-2.5 border-l border-l-transparent p-[1px]",
                        "horizontal" === s && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
                        a
                    ),
                    ...r,
                    children: (0, t.jsx)(n.lr, { className: "relative flex-1 rounded-full bg-border" }),
                });
            });
            c.displayName = n.VM.displayName;
            var d = a(83494),
                u = a(50494),
                m = a(39268),
                x = a(20545);
            let b = (e) => {
                let { assets: l, title: a } = e,
                    n = (0, r.useRef)(null),
                    [b, h] = (0, r.useState)(""),
                    { categorizedAssets: v, categories: f } = (0, r.useMemo)(() => {
                        let e = {},
                            a = new Map();
                        null == l ||
                            l.forEach((l) => {
                                var t;
                                if ("object" == typeof l.asset && (null == (t = l.asset) ? void 0 : t.categories)) {
                                    let t = l.asset.categories;
                                    "object" == typeof t &&
                                        t.title &&
                                        (a.set(t.title, { id: t.id, title: t.title, slug: t.slug }),
                                            e[t.title] || (e[t.title] = []),
                                            e[t.title].push(l));
                                }
                            });
                        let t = Array.from(a.values()).sort((l, a) => {
                            var t, s;
                            let r = (null == (t = e[l.title]) ? void 0 : t.length) || 0;
                            return ((null == (s = e[a.title]) ? void 0 : s.length) || 0) - r;
                        });
                        return { categorizedAssets: e, categories: t };
                    }, [l]);
                (0, r.useEffect)(() => {
                    f.length > 0 && !b && h(f[0].title);
                }, [f, b]);
                let g = v[b] || [];
                return (
                    (0, u.L)(
                        () => {
                            var e;
                            let l = null == (e = n.current) ? void 0 : e.querySelector(".asset-list"),
                                a = m.Ay.matchMedia();
                            if (!l) return;
                            let t = { BOTTOM: 0, MIDDLE: -85, TOP: -170 },
                                s = { x: 0, y: 0 },
                                r = null,
                                i = !1,
                                o = l.querySelectorAll(".asset-item"),
                                c = () => {
                                    if (r) {
                                        let e = r.getBoundingClientRect();
                                        if (!(s.x >= e.left && s.x <= e.right && s.y >= e.top && s.y <= e.bottom)) {
                                            let l = r.querySelector(".asset-wrapper"),
                                                a = s.y < e.top + e.height / 2;
                                            m.Ay.to(l, { y: a ? t.TOP : t.BOTTOM, duration: 1, ease: "power4.out" }),
                                                (r = null);
                                        }
                                    }
                                    o.forEach((e, l) => {
                                        if (e === r) return;
                                        let a = e.getBoundingClientRect();
                                        if (s.x >= a.left && s.x <= a.right && s.y >= a.top && s.y <= a.bottom) {
                                            let l = e.querySelector(".asset-wrapper");
                                            s.y,
                                                a.top,
                                                a.height,
                                                m.Ay.to(l, { y: t.MIDDLE, duration: 1, ease: "power4.out" }),
                                                (r = e);
                                        }
                                    }),
                                        (i = !1);
                                };
                            function d(e) {
                                (s.x = e.clientX), (s.y = e.clientY);
                            }
                            function u() {
                                i ||
                                    (requestAnimationFrame(() => {
                                        c();
                                    }),
                                        (i = !0));
                            }
                            return (
                                a.add("(min-width: 1024px)", () => {
                                    document.addEventListener("mousemove", d),
                                        document.addEventListener("scroll", u, { passive: !0 }),
                                        o.forEach((e, l) => {
                                            let a = e.querySelector(".asset-wrapper"),
                                                s = t.TOP;
                                            e.addEventListener("mouseenter", (l) => {
                                                r = e;
                                                let n = e.getBoundingClientRect();
                                                (l.clientY < n.top + n.height / 2 || s === t.BOTTOM) &&
                                                    ((s = t.MIDDLE),
                                                        m.Ay.to(a, { y: t.MIDDLE, duration: 1, ease: "power4.out" }));
                                            }),
                                                e.addEventListener("mouseleave", (l) => {
                                                    r = null;
                                                    let n = e.getBoundingClientRect();
                                                    (s = l.clientY < n.top + n.height / 2 ? t.TOP : t.BOTTOM),
                                                        m.Ay.to(a, { y: s, duration: 1, ease: "power4.out" });
                                                });
                                        });
                                }),
                                () => {
                                    document.removeEventListener("mousemove", d),
                                        document.removeEventListener("scroll", u);
                                }
                            );
                        },
                        { scope: n, dependencies: [g] }
                    ),
                    (0, t.jsx)("div", {
                        ref: n,
                        className:
                            "bg-background py-block-mobile sm:py-block w-full flex flex-col select-none overflow-hidden",
                        children: (0, t.jsxs)("div", {
                            className: "container flex flex-col size-full gap-10 lg:gap-20",
                            children: [
                                (0, t.jsx)("span", {
                                    className: "font-gothic text-3xl text-neutral-950 max-w-sm",
                                    children: a,
                                }),
                                (0, t.jsxs)("div", {
                                    className: "w-full flex flex-col lg:flex-row items-start gap-10 lg:gap-20 ",
                                    children: [
                                        (0, t.jsxs)("div", {
                                            className: "flex flex-col gap-2 flex-[0.23]",
                                            children: [
                                                (0, t.jsx)("span", {
                                                    className: "font-gothic text-neutral-950 text-sm",
                                                    children: "Categories",
                                                }),
                                                (0, t.jsxs)(o, {
                                                    className:
                                                        "h-[40px] lg:h-auto w-screen lg:w-full pt-3 border-t border-t-neutral-500 ",
                                                    children: [
                                                        (0, t.jsx)("div", {
                                                            className:
                                                                "flex lg:flex-col w-max space-x-4 lg:space-x-0 lg:space-y-4 ",
                                                            children:
                                                                null == f
                                                                    ? void 0
                                                                    : f.map((e, l) => {
                                                                        var a;
                                                                        return (0, t.jsxs)(
                                                                            "button",
                                                                            {
                                                                                onClick: () => h(e.title),
                                                                                className: (0, i.cn)(
                                                                                    "text-left font-gothic text-neutral-950 opacity-100 min-w-fit max-w-64",
                                                                                    {
                                                                                        "opacity-40 hover:opacity-100 transition-opacity duration-300":
                                                                                            b !== e.title,
                                                                                    },
                                                                                    { "pr-8": l === f.length - 1 }
                                                                                ),
                                                                                children: [
                                                                                    e.title,
                                                                                    " (",
                                                                                    (null == (a = v[e.title])
                                                                                        ? void 0
                                                                                        : a.length) || 0,
                                                                                    ")",
                                                                                ],
                                                                            },
                                                                            e.id
                                                                        );
                                                                    }),
                                                        }),
                                                        (0, t.jsx)(c, {
                                                            orientation: "horizontal",
                                                            className: " bg-transparent h-0 p-0 ",
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        (0, t.jsxs)("div", {
                                            className: "flex flex-col gap-2 w-full flex-1",
                                            children: [
                                                (0, t.jsxs)("div", {
                                                    className: "hidden lg:flex items-center gap-5",
                                                    children: [
                                                        (0, t.jsx)("span", {
                                                            className: "font-gothic text-neutral-950 text-sm w-28",
                                                            children: "Date",
                                                        }),
                                                        (0, t.jsx)("span", {
                                                            className: "font-gothic text-neutral-950 text-sm",
                                                            children: "Name",
                                                        }),
                                                    ],
                                                }),
                                                (0, t.jsxs)("div", {
                                                    className:
                                                        "flex flex-col lg:border-t lg:border-t-neutral-500 asset-list",
                                                    children: [
                                                        null == g
                                                            ? void 0
                                                            : g.map((e, l) => {
                                                                let a = e.asset;
                                                                return "object" == typeof a && a
                                                                    ? (0, t.jsx)(
                                                                        s.A,
                                                                        {
                                                                            isPlain: !0,
                                                                            ...a.cta,
                                                                            children: (0, t.jsx)("div", {
                                                                                className:
                                                                                    "asset-item lg:h-[85px] overflow-hidden border-b border-b-neutral-500",
                                                                                style: {
                                                                                    clipPath:
                                                                                        "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                                                                                },
                                                                                children: (0, t.jsxs)("div", {
                                                                                    className:
                                                                                        "asset-wrapper relative lg:h-[255px] will-change-transform lg:-translate-y-[170px]",
                                                                                    children: [
                                                                                        (0, t.jsxs)("div", {
                                                                                            className:
                                                                                                "flex items-center justify-between w-full lg:h-[85px] bg-background cursor-pointer first-asset-row py-2 lg:py-0 lg:gap-4",
                                                                                            children: [
                                                                                                (0, t.jsxs)("div", {
                                                                                                    className:
                                                                                                        "flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-5 max-w-[80%]",
                                                                                                    children: [
                                                                                                        (0, t.jsxs)(
                                                                                                            "div",
                                                                                                            {
                                                                                                                className:
                                                                                                                    "flex items-center gap-[6px] min-w-28 max-w-28",
                                                                                                                children:
                                                                                                                    [
                                                                                                                        (0,
                                                                                                                            t.jsx)(
                                                                                                                                "div",
                                                                                                                                {
                                                                                                                                    className:
                                                                                                                                        "size-2 bg-neutral-950",
                                                                                                                                }
                                                                                                                            ),
                                                                                                                        a.publishedAt &&
                                                                                                                        (0,
                                                                                                                            t.jsx)(
                                                                                                                                "span",
                                                                                                                                {
                                                                                                                                    className:
                                                                                                                                        "font-gothic text-neutral-700 text-xs",
                                                                                                                                    children:
                                                                                                                                        (0,
                                                                                                                                            d.r)(
                                                                                                                                                a.publishedAt,
                                                                                                                                                !0
                                                                                                                                            ),
                                                                                                                                }
                                                                                                                            ),
                                                                                                                    ],
                                                                                                            }
                                                                                                        ),
                                                                                                        (0, t.jsx)(
                                                                                                            "span",
                                                                                                            {
                                                                                                                className:
                                                                                                                    "font-sans font-medium lg:text-xl xl:text-2xl text-neutral-950 line-clamp-3 lg:line-clamp-2",
                                                                                                                children:
                                                                                                                    a.title,
                                                                                                            }
                                                                                                        ),
                                                                                                    ],
                                                                                                }),
                                                                                                (0, t.jsx)(x.A, {
                                                                                                    strokeWidth: 1,
                                                                                                    className:
                                                                                                        "size-8 min-w-fit lg:size-auto lg:text-2xl text-neutral-950",
                                                                                                }),
                                                                                            ],
                                                                                        }),
                                                                                        (0, t.jsxs)("div", {
                                                                                            className:
                                                                                                "hidden lg:flex items-center justify-between w-full h-[85px] bg-neutral-950 cursor-pointer middle-asset-row lg:gap-4",
                                                                                            children: [
                                                                                                (0, t.jsxs)("div", {
                                                                                                    className:
                                                                                                        "flex items-center gap-5",
                                                                                                    children: [
                                                                                                        (0, t.jsxs)(
                                                                                                            "div",
                                                                                                            {
                                                                                                                className:
                                                                                                                    "flex items-center gap-[6px] min-w-28 max-w-28",
                                                                                                                children:
                                                                                                                    [
                                                                                                                        (0,
                                                                                                                            t.jsx)(
                                                                                                                                "div",
                                                                                                                                {
                                                                                                                                    className:
                                                                                                                                        "size-2 bg-background",
                                                                                                                                }
                                                                                                                            ),
                                                                                                                        a.publishedAt &&
                                                                                                                        (0,
                                                                                                                            t.jsx)(
                                                                                                                                "span",
                                                                                                                                {
                                                                                                                                    className:
                                                                                                                                        "font-gothic text-neutral-300 text-xs",
                                                                                                                                    children:
                                                                                                                                        (0,
                                                                                                                                            d.r)(
                                                                                                                                                a.publishedAt,
                                                                                                                                                !0
                                                                                                                                            ),
                                                                                                                                }
                                                                                                                            ),
                                                                                                                    ],
                                                                                                            }
                                                                                                        ),
                                                                                                        (0, t.jsx)(
                                                                                                            "span",
                                                                                                            {
                                                                                                                className:
                                                                                                                    "font-sans font-medium text-sm text-background line-clamp-2 ",
                                                                                                                children:
                                                                                                                    a.description,
                                                                                                            }
                                                                                                        ),
                                                                                                    ],
                                                                                                }),
                                                                                                (0, t.jsx)(x.A, {
                                                                                                    strokeWidth: 1,
                                                                                                    className:
                                                                                                        " min-w-fit text-2xl text-background",
                                                                                                }),
                                                                                            ],
                                                                                        }),
                                                                                        (0, t.jsxs)("div", {
                                                                                            className:
                                                                                                "hidden lg:flex items-center justify-between w-full h-[85px] bg-background cursor-pointer  third-asset-row lg:gap-4",
                                                                                            children: [
                                                                                                (0, t.jsxs)("div", {
                                                                                                    className:
                                                                                                        "flex items-center gap-5",
                                                                                                    children: [
                                                                                                        (0, t.jsxs)(
                                                                                                            "div",
                                                                                                            {
                                                                                                                className:
                                                                                                                    "flex items-center gap-[6px] min-w-28 max-w-28",
                                                                                                                children:
                                                                                                                    [
                                                                                                                        (0,
                                                                                                                            t.jsx)(
                                                                                                                                "div",
                                                                                                                                {
                                                                                                                                    className:
                                                                                                                                        "size-2 bg-neutral-950",
                                                                                                                                }
                                                                                                                            ),
                                                                                                                        a.publishedAt &&
                                                                                                                        (0,
                                                                                                                            t.jsx)(
                                                                                                                                "span",
                                                                                                                                {
                                                                                                                                    className:
                                                                                                                                        "font-gothic text-neutral-700 text-xs",
                                                                                                                                    children:
                                                                                                                                        (0,
                                                                                                                                            d.r)(
                                                                                                                                                a.publishedAt,
                                                                                                                                                !0
                                                                                                                                            ),
                                                                                                                                }
                                                                                                                            ),
                                                                                                                    ],
                                                                                                            }
                                                                                                        ),
                                                                                                        (0, t.jsx)(
                                                                                                            "span",
                                                                                                            {
                                                                                                                className:
                                                                                                                    "font-sans font-medium lg:text-xl xl:text-2xl text-neutral-950 line-clamp-2",
                                                                                                                children:
                                                                                                                    a.title,
                                                                                                            }
                                                                                                        ),
                                                                                                    ],
                                                                                                }),
                                                                                                (0, t.jsx)(x.A, {
                                                                                                    strokeWidth: 1,
                                                                                                    className:
                                                                                                        "min-w-fit text-2xl text-neutral-950",
                                                                                                }),
                                                                                            ],
                                                                                        }),
                                                                                    ],
                                                                                }),
                                                                            }),
                                                                        },
                                                                        "".concat(a.id, "-").concat(l)
                                                                    )
                                                                    : null;
                                                            }),
                                                        (null == g ? void 0 : g.length) === 0 &&
                                                        (0, t.jsx)("div", {
                                                            className: "text-center py-12",
                                                            children: (0, t.jsx)("p", {
                                                                className: "text-neutral-500 font-sans",
                                                                children: "No assets found for this category.",
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    })
                );
            };
        },
        26496: (e, l, a) => {
            "use strict";
            a.d(l, { Code: () => c });
            var t = a(32689),
                s = a(62588),
                r = a(19893),
                n = a(75165),
                i = a(74152);
            function o(e) {
                let { code: l } = e,
                    [a, s] = (0, r.useState)("Copy");
                return (0, t.jsx)("div", {
                    className: "flex justify-end align-middle",
                    children: (0, t.jsxs)(n.Button, {
                        className: "flex gap-1",
                        variant: "secondary",
                        onClick: async () => {
                            await navigator.clipboard.writeText(l),
                                "Copy" === a &&
                                (s(() => "Copied!"),
                                    setTimeout(() => {
                                        s(() => "Copy");
                                    }, 1e3));
                        },
                        children: [(0, t.jsx)("p", { children: a }), (0, t.jsx)(i.T, {})],
                    }),
                });
            }
            let c = (e) => {
                let { code: l, language: a = "" } = e;
                return l
                    ? (0, t.jsx)(s.f4, {
                        code: l,
                        language: a,
                        theme: s.Zj.vsDark,
                        children: (e) => {
                            let { getLineProps: a, getTokenProps: s, tokens: r } = e;
                            return (0, t.jsxs)("pre", {
                                className: "bg-black p-4 border text-xs border-border rounded overflow-x-auto",
                                children: [
                                    r.map((e, l) =>
                                        (0, t.jsxs)(
                                            "div",
                                            {
                                                ...a({ className: "table-row", line: e }),
                                                children: [
                                                    (0, t.jsx)("span", {
                                                        className: "table-cell select-none text-right text-white/25",
                                                        children: l + 1,
                                                    }),
                                                    (0, t.jsx)("span", {
                                                        className: "table-cell pl-4",
                                                        children: e.map((e, l) =>
                                                            (0, t.jsx)("span", { ...s({ token: e }) }, l)
                                                        ),
                                                    }),
                                                ],
                                            },
                                            l
                                        )
                                    ),
                                    (0, t.jsx)(o, { code: l }),
                                ],
                            });
                        },
                    })
                    : null;
            };
        },
        28982: (e, l, a) => {
            "use strict";
            a.d(l, { StickyReviewsBlock: () => d });
            var t = a(32689),
                s = a(45677),
                r = a(94005),
                n = a(50494),
                i = a(39268),
                o = a(17902),
                c = a(19893);
            let d = (e) => {
                let { title: l, link: a, reviews: d } = e,
                    u = (0, c.useRef)(null);
                return (
                    (0, n.L)(
                        () => {
                            let e = i.Ay.utils.toArray(".review-item");
                            i.Ay.matchMedia().add("(min-width: 1280px)", () => {
                                e.forEach((e, l) => {
                                    0 === l ? i.Ay.set(e, { opacity: 1 }) : i.Ay.set(e, { opacity: 0.1 });
                                }),
                                    i.Ay.set(".reviews-container", { y: 0 });
                                let l = d.length;
                                o.u.create({
                                    trigger: u.current,
                                    start: "top top",
                                    end: () => "+=".concat(3 * window.innerHeight),
                                    pin: !0,
                                    anticipatePin: 1,
                                    pinSpacing: !0,
                                    scrub: 1,
                                    onUpdate: (a) => {
                                        var t, s, r;
                                        let n = a.progress,
                                            o = document.querySelector(".reviews-container"),
                                            c =
                                                null != (s = null == (t = u.current) ? void 0 : t.clientHeight)
                                                    ? s
                                                    : window.innerHeight,
                                            d = Math.max(
                                                0,
                                                (null != (r = null == o ? void 0 : o.scrollHeight) ? r : 0) - 0.6 * c
                                            );
                                        i.Ay.set(".reviews-container", { y: "".concat(0 - n * (0 - -d), "px") });
                                        let m = n * l + 1;
                                        e.forEach((e, l) => {
                                            let a = 0.1;
                                            0 === l
                                                ? (a = 1)
                                                : m > l && (a = Math.min(1, 0.1 + 0.9 * Math.min(1, (m - l) * 1.5))),
                                                i.Ay.set(e, { opacity: a });
                                        });
                                    },
                                });
                            });
                        },
                        { scope: u, dependencies: [d], revertOnUpdate: !0 }
                    ),
                    (0, t.jsx)("div", {
                        className: "w-full overflow-x-hidden",
                        children: (0, t.jsx)("div", {
                            ref: u,
                            className: "bg-background py-16 w-full xl:h-screen overflow-hidden",
                            children: (0, t.jsxs)("div", {
                                className:
                                    "container size-full grid grid-cols-1 xl:grid-cols-2 xl:place-content-between gap-10",
                                children: [
                                    (0, t.jsxs)("div", {
                                        className: "relative flex flex-col col-span-1 max-w-fit min-w-fit",
                                        children: [
                                            (0, t.jsxs)("div", {
                                                className: "relative flex w-full bg-brand-emerald pb-3 max-w-lg ",
                                                children: [
                                                    (0, t.jsx)("div", {
                                                        className: "absolute -top-1 -left-1 bg-background size-8  ",
                                                    }),
                                                    (0, t.jsx)("p", {
                                                        className:
                                                            "font-gothic text-neutral-950 text-[8vw] md:text-5xl xl:text-5xl z-20 ",
                                                        children: l,
                                                    }),
                                                ],
                                            }),
                                            (0, t.jsx)("div", {
                                                className: "max-w-fit -translate-y-2 ",
                                                children: (0, t.jsx)(s.A, {
                                                    ...a,
                                                    isAnimated: !0,
                                                    size: "lg",
                                                    withArrow: !0,
                                                    className: "md:text-xl h-12",
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, t.jsx)("div", {
                                        className: "reviews-container flex flex-col col-span-1 md:gap-20",
                                        children: d.map((e, l) =>
                                            (0, t.jsxs)(
                                                "div",
                                                {
                                                    className:
                                                        "relative flex flex-col xl:flex-row review-item gap-6 md:gap-0",
                                                    children: [
                                                        (0, t.jsxs)("div", {
                                                            className:
                                                                "flex xl:flex-col h-full items-start justify-between",
                                                            children: [
                                                                (0, t.jsxs)("span", {
                                                                    className:
                                                                        "font-sans text-neutral-950 font-semibold",
                                                                    children: [l > 9 ? l + 1 : "0".concat(l + 1), "."],
                                                                }),
                                                                (0, t.jsx)("div", {
                                                                    className:
                                                                        "relative size-24 overflow-hidden hidden xl:block",
                                                                    children: (0, t.jsx)(r.$, {
                                                                        resource: e.image,
                                                                        imgClassName: "object-cover",
                                                                        fill: !0,
                                                                    }),
                                                                }),
                                                            ],
                                                        }),
                                                        (0, t.jsx)("div", {
                                                            className:
                                                                "h-full w-px bg-neutral-900 ml-16 mr-12 xl:ml-24 xl:mr-16 opacity-40 hidden xl:block",
                                                        }),
                                                        (0, t.jsxs)("div", {
                                                            className: "flex flex-col gap-6",
                                                            children: [
                                                                (0, t.jsx)("p", {
                                                                    className:
                                                                        "font-sans leading-tight text-lg text-neutral-950",
                                                                    children: e.review,
                                                                }),
                                                                (0, t.jsxs)("div", {
                                                                    className: "flex flex-col",
                                                                    children: [
                                                                        (0, t.jsx)("span", {
                                                                            className:
                                                                                "font-sans font-semibold text-neutral-950",
                                                                            children: e.title,
                                                                        }),
                                                                        (0, t.jsx)("span", {
                                                                            className:
                                                                                "font-sans font-semibold text-neutral-950",
                                                                            children: e.position,
                                                                        }),
                                                                    ],
                                                                }),
                                                                (0, t.jsx)("div", {
                                                                    className:
                                                                        "relative size-24 overflow-hidden xl:hidden",
                                                                    children: (0, t.jsx)(r.$, {
                                                                        resource: e.image,
                                                                        imgClassName: "object-cover",
                                                                        fill: !0,
                                                                    }),
                                                                }),
                                                            ],
                                                        }),
                                                        l !== d.length - 1 &&
                                                        (0, t.jsx)("div", {
                                                            className:
                                                                "w-full h-1 bg-neutral-700 my-16 opacity-60 xl:hidden z-30",
                                                        }),
                                                    ],
                                                },
                                                e.id
                                            )
                                        ),
                                    }),
                                ],
                            }),
                        }),
                    })
                );
            };
        },
        33001: (e, l, a) => {
            "use strict";
            a.d(l, { e: () => s });
            var t = a(90652);
            let s = (e, l) => {
                if (!e) return "";
                if (e.startsWith("http://") || e.startsWith("https://")) return l ? "".concat(e, "?").concat(l) : e;
                let a = (0, t.y)();
                return l ? "".concat(a).concat(e, "?").concat(l) : "".concat(a).concat(e);
            };
        },
        34366: (e, l, a) => {
            "use strict";
            a.d(l, { VerticalImageContentBlock: () => c });
            var t = a(32689),
                s = a(94005),
                r = a(16114),
                n = a(50494),
                i = a(39268),
                o = a(19893);
            let c = (e) => {
                let { title: l, description: a, image: c } = e,
                    d = (0, o.useRef)(null);
                return (
                    (0, n.L)(
                        () => {
                            if (!d.current) return;
                            let e = d.current.querySelector(".vertical-img-wrapper"),
                                l = i.Ay.matchMedia();
                            i.Ay.set(e, { y: 0 }),
                                l.add("(min-width: 1024px)", () => {
                                    i.Ay.set(e, { y: 100 }),
                                        i.Ay.to(e, {
                                            y: 0,
                                            duration: 1,
                                            ease: "power1.out",
                                            scrollTrigger: {
                                                trigger: d.current,
                                                start: "top bottom",
                                                end: "bottom bottom",
                                                scrub: !0,
                                            },
                                        });
                                });
                        },
                        { scope: d }
                    ),
                    (0, t.jsx)("div", {
                        ref: d,
                        className: "bg-brand-emerald xl:h-screen py-12 w-full select-none z-30",
                        children: (0, t.jsxs)("div", {
                            className: "grid grid-cols-1 xl:grid-cols-2 size-full container md:gap-10",
                            children: [
                                (0, t.jsxs)("div", {
                                    className: "flex flex-col col-span-1 xl:justify-between gap-10 xl:gap-0",
                                    children: [
                                        (0, t.jsxs)("div", {
                                            className: "relative flex overflow-hidden max-w-xs sm:max-w-2xl ",
                                            children: [
                                                (0, t.jsx)("div", {
                                                    className:
                                                        "absolute size-full bg-brand-rose flex items-end justify-start ",
                                                    children: (0, t.jsx)("div", {
                                                        className: "size-8 md:size-12 bg-brand-emerald",
                                                    }),
                                                }),
                                                (0, t.jsx)(r.Copy, {
                                                    children: (0, t.jsx)("p", {
                                                        className:
                                                            "font-gothic text-2xl sm:text-4xl md:text-5xl text-neutral-950 z-20",
                                                        children: l,
                                                    }),
                                                }),
                                            ],
                                        }),
                                        a &&
                                        (0, t.jsx)(r.Copy, {
                                            delay: 0.2,
                                            children: (0, t.jsx)("p", {
                                                className:
                                                    "font-sans md:text-2xl text-neutral-950 font-medium max-w-xl",
                                                children: a,
                                            }),
                                        }),
                                    ],
                                }),
                                (0, t.jsx)("div", {
                                    className:
                                        "vertical-img-wrapper relative flex w-full h-[60vh] xl:h-full col-span-1 will-change-transform mt-10 xl:mt-0",
                                    children: (0, t.jsx)("div", {
                                        className: "absolute size-full overflow-hidden",
                                        children: (0, t.jsx)("div", {
                                            className: "relative flex w-full h-[70vh] md:h-[110vh]",
                                            children: (0, t.jsx)(s.$, {
                                                resource: c,
                                                imgClassName: "object-cover",
                                                fill: !0,
                                                isParallax: !0,
                                            }),
                                        }),
                                    }),
                                }),
                            ],
                        }),
                    })
                );
            };
        },
        35424: (e, l, a) => {
            "use strict";
            a.d(l, { ArticleCard: () => d });
            var t = a(32689),
                s = a(45677),
                r = a(94005),
                n = a(83494),
                i = a(71162);
            a(19893);
            let o = [
                () =>
                    (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)("div", {
                                className: "absolute w-[8%] h-[10%] top-0 left-0 bg-brand-emerald z-20",
                            }),
                            (0, t.jsx)("div", {
                                className:
                                    "absolute w-[8%] h-[75%] top-[10%] left-[8%] bg-brand-emerald z-20 move-to-right-block will-change-transform",
                            }),
                            (0, t.jsx)("div", {
                                className: "absolute w-[8%] h-[25%] top-[85%] left-0 bg-brand-emerald z-20",
                            }),
                            (0, t.jsx)("div", {
                                className: "absolute w-[30%] h-[25%] top-[85%] left-[16%] bg-brand-emerald z-20",
                            }),
                            (0, t.jsx)("div", {
                                className: "absolute w-[8%] h-[50%] top-0 right-0 bg-brand-emerald z-20 ",
                            }),
                            (0, t.jsx)("div", {
                                className:
                                    "absolute w-[8%] h-[50%] top-[50%] right-[8%] bg-brand-emerald z-20 move-to-left-block will-change-transform",
                            }),
                        ],
                    }),
                () =>
                    (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)("div", {
                                className: "absolute w-[84%] h-[15%] top-0 left-0 bg-zinc-950 z-20",
                            }),
                            (0, t.jsx)("div", {
                                className: "absolute w-[8%] h-[15%] top-0 right-0 bg-zinc-950 z-20",
                            }),
                            (0, t.jsx)("div", {
                                className:
                                    "absolute w-[8%] h-[60%] top-[15%] right-[8%] bg-zinc-950 z-20 move-to-left-block will-change-transform",
                            }),
                            (0, t.jsx)("div", {
                                className: "absolute w-[8%] h-[25%] top-[75%] right-0 bg-zinc-950 z-20",
                            }),
                        ],
                    }),
                () =>
                    (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)("div", { className: "absolute w-[84%] h-[15%] top-0 left-0 bg-white z-20" }),
                            (0, t.jsx)("div", { className: "absolute w-[8%] h-[15%] top-0 right-0 bg-white z-20" }),
                            (0, t.jsx)("div", {
                                className:
                                    "absolute w-[8%] h-[60%] top-[15%] right-[8%] bg-white z-20 move-to-left-block will-change-transform",
                            }),
                            (0, t.jsx)("div", {
                                className: "absolute w-[8%] h-[25%] top-[75%] right-0 bg-white z-20",
                            }),
                        ],
                    }),
                () =>
                    (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)("div", {
                                className: "absolute w-[8%] h-[10%] top-0 right-0 bg-brand-rose z-20",
                            }),
                            (0, t.jsx)("div", {
                                className:
                                    "absolute w-[8%] h-[75%] top-[10%] right-[8%] bg-brand-rose z-20 move-to-right-block will-change-transform",
                            }),
                            (0, t.jsx)("div", {
                                className: "absolute w-[8%] h-[25%] top-[85%] right-0 bg-brand-rose z-20",
                            }),
                            (0, t.jsx)("div", {
                                className: "absolute w-[30%] h-[25%] top-[85%] right-[16%] bg-brand-rose z-20 ",
                            }),
                            (0, t.jsx)("div", {
                                className: "absolute w-[8%] h-[50%] top-0 left-0 bg-brand-rose z-20 ",
                            }),
                            (0, t.jsx)("div", {
                                className:
                                    "absolute w-[8%] h-[50%] top-[50%] left-[8%] bg-brand-rose z-20 move-to-left-block will-change-transform",
                            }),
                        ],
                    }),
            ],
                c = ["#14A586", "#0A0A0A", "#FFFFFF", "#FFB8E0"],
                d = (e) => {
                    let { post: l, dataRoomAsset: a, contentType: d, index: u } = e,
                        m = "post" === d,
                        x = m ? l : a;
                    if ("object" != typeof x || !x) return null;
                    let b = m && "authors" in x && x.authors ? x.authors : null,
                        { PatternComponent: h, colorClass: v } = ((e) => {
                            let l = e % 4;
                            return { PatternComponent: o[l], colorClass: c[l], patternIndex: l };
                        })(null != u ? u : 3);
                    return (0, t.jsxs)("div", {
                        className: (0, i.cn)("relative flex flex-col bg-white overflow-hidden size-full"),
                        style: { backgroundColor: v },
                        children: [
                            (0, t.jsxs)("div", {
                                className: "relative w-full h-[40vh] md:h-[50vh] overflow-hidden",
                                children: [
                                    (0, t.jsx)(h, {}),
                                ],
                            }),
                            (0, t.jsxs)("div", {
                                style: { backgroundColor: v },
                                className: (0, i.cn)(
                                    "relative flex flex-col flex-1 text-zinc-950 justify-between -mt-1",
                                    { "text-zinc-50": !!u && u % 4 == 1 }
                                ),
                                children: [
                                    (0, t.jsxs)("div", {
                                        className: "flex flex-col p-5 w-full gap-1 overflow-hidden",
                                        children: [
                                            (0, t.jsx)("p", {
                                                className: "font-gothic text-xl md:text-3xl xl:text-4xl line-clamp-3 ",
                                                children: x.title,
                                            }),
                                            x.description &&
                                            (0, t.jsx)("p", {
                                                className: (0, i.cn)(
                                                    "font-sans text-zinc-950 text-sm md:text-base line-clamp-4 max-w-[80%] leading-tight",
                                                    { "text-neutral-200": !!u && u % 4 == 1 }
                                                ),
                                                children: x.description,
                                            }),
                                        ],
                                    }),
                                    (0, t.jsxs)("div", {
                                        className: "flex items-end justify-between w-full pr-5",
                                        children: [
                                            (0, t.jsx)(s.A, { ...x.cta, isAnimated: !0 }),
                                            (0, t.jsxs)("div", {
                                                className:
                                                    "flex flex-col font-gothic text-sm  text-end pb-2 leading-tight",
                                                children: [
                                                    x.publishedAt &&
                                                    (0, t.jsx)("span", { children: (0, n.r)(x.publishedAt, !0) }),
                                                    b &&
                                                    b.length > 0 &&
                                                    "object" == typeof b[0] &&
                                                    (0, t.jsx)("span", { children: b[0].name }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                };
        },
        36369: (e, l, a) => {
            "use strict";
            a.d(l, { I: () => s });
            var t = a(19893);
            let s = () => {
                let [e, l] = (0, t.useState)(null),
                    [a, s] = (0, t.useState)(null);
                return (
                    (0, t.useEffect)(() => {
                        let e = () => {
                            l(window.innerWidth < 768);
                        };
                        return (
                            e(),
                            window.addEventListener("resize", e),
                            () => {
                                window.removeEventListener("resize", e);
                            }
                        );
                    }, []),
                    e
                );
            };
        },
        36522: (e, l, a) => {
            "use strict";
            a.d(l, { TextMediaZoom: () => u });
            var t = a(32689),
                s = a(94005),
                r = a(36369),
                n = a(50494),
                i = a(39268),
                o = a(17902),
                c = a(19893);
            let d = () =>
                (0, t.jsxs)("div", {
                    className: "absolute size-full flex flex-col",
                    children: [
                        (0, t.jsx)("div", {
                            className: "absolute top-0 right-0 w-20 aspect-[9/16] bg-brand-blue ",
                        }),
                        (0, t.jsx)("div", {
                            className: "absolute top-20 right-[20%] size-24 bg-brand-emerald floating-block-square",
                        }),
                        (0, t.jsx)("div", {
                            className: "absolute top-20 left-[5%] size-32 bg-brand-rose floating-block-square",
                        }),
                        (0, t.jsx)("div", {
                            className:
                                "absolute top-[30%] left-[20%] w-10 aspect-[9/16] bg-brand-yellow floating-block-vertical hidden md:block",
                        }),
                        (0, t.jsx)("div", {
                            className:
                                "absolute bottom-0 left-0 w-20 aspect-[9/16] bg-brand-blue floating-block-vertical",
                        }),
                        (0, t.jsx)("div", {
                            className: "absolute bottom-20 right-[5%] size-32 bg-brand-rose floating-block-square",
                        }),
                        (0, t.jsx)("div", {
                            className:
                                "absolute bottom-20 left-[40%] size-24 bg-brand-emerald floating-block-square",
                        }),
                        (0, t.jsx)("div", {
                            className:
                                "absolute bottom-[30%] right-[20%] w-10 aspect-[9/16] bg-brand-yellow floating-block-vertical",
                        }),
                    ],
                }),
                u = (e) => {
                    let { leftText: l, rightText: a, image: u, mobileImage: m } = e,
                        x = (0, c.useRef)(null),
                        b = (0, r.I)();
                    return (
                        (0, n.L)(
                            () => {
                                let e = document.querySelector(".zoom-img-container"),
                                    l = document.querySelectorAll(".zoom-left-text"),
                                    a = document.querySelectorAll(".zoom-right-text");
                                i.Ay.set(e, { scale: 0.05 }),
                                    i.Ay.set(l, { translateX: "-".concat(2.75, "vw") }),
                                    i.Ay.set(a, { translateX: "".concat(2.75, "vw") }),
                                    o.u.create({
                                        trigger: x.current,
                                        start: "top top",
                                        id: "zoom-scroll-trigger",
                                        end: () => "+=".concat(1.4 * window.innerHeight),
                                        pinSpacing: !1,
                                        scrub: !0,
                                        onUpdate: (t) => {
                                            let s = t.progress;
                                            s > 0.05
                                                ? (i.Ay.set(e, { scale: s }),
                                                    i.Ay.set(l, { translateX: "-".concat(55 * s, "vw") }),
                                                    i.Ay.set(a, { translateX: "".concat(55 * s, "vw") }))
                                                : (i.Ay.set(e, { scale: 0.05 }),
                                                    i.Ay.set(l, { translateX: "-".concat(2.75, "vw") }),
                                                    i.Ay.set(a, { translateX: "".concat(2.75, "vw") }));
                                        },
                                    });
                            },
                            { scope: x }
                        ),
                        (0, n.L)(
                            () => {
                                let e = i.Ay.utils.toArray(".floating-block-square"),
                                    l = i.Ay.utils.toArray(".floating-block-vertical");
                                i.Ay.set(e, { y: 0 }),
                                    i.Ay.set(l, { y: 0 }),
                                    i.Ay.to(e, {
                                        y: 200,
                                        scaleX: 0.5,
                                        duration: 1,
                                        ease: "power1.out",
                                        scrollTrigger: {
                                            trigger: x.current,
                                            start: "top bottom",
                                            end: "bottom center",
                                            scrub: !0,
                                        },
                                    }),
                                    i.Ay.to(l, {
                                        y: -200,
                                        scaleX: 2,
                                        duration: 1,
                                        ease: "power1.out",
                                        scrollTrigger: {
                                            trigger: x.current,
                                            start: "top bottom",
                                            end: "bottom center",
                                            scrub: !0,
                                        },
                                    });
                            },
                            { scope: x }
                        ),
                        (0, t.jsx)("div", {
                            className: "relative h-[350lvh] -mb-[100lvh] bg-background",
                            ref: x,
                            children: (0, t.jsxs)("div", {
                                className:
                                    "sticky top-0 h-[100lvh] overflow-hidden flex items-center justify-center bg-background w-full ",
                                children: [
                                    (0, t.jsx)("h4", { className: "sr-only", children: "".concat(l, " ").concat(a) }),
                                    (0, t.jsx)(d, {}),
                                    (0, t.jsx)("div", {
                                        className:
                                            "zoom-img-container absolute size-full top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 will-change-transform overflow-hidden z-10 ",
                                        children: (0, t.jsx)("div", {
                                            className: "relative size-full",
                                            children: (0, t.jsx)(s.$, {
                                                resource: b ? m : u,
                                                imgClassName: "object-cover",
                                                fill: !0,
                                                htmlElement: null,
                                            }),
                                        }),
                                    }),
                                    (0, t.jsxs)("div", {
                                        "aria-hidden": !0,
                                        className: "text-center font-gothic text-3xl md:text-5xl text-zinc-900 flex",
                                        children: [
                                            l
                                                .split(" ")
                                                .map((e, l) =>
                                                    (0, t.jsxs)(
                                                        c.Fragment,
                                                        {
                                                            children: [
                                                                (0, t.jsx)("span", {
                                                                    className: "will-change-transform zoom-left-text",
                                                                    children: e,
                                                                }),
                                                                (0, t.jsx)("span", { children: "\xa0" }),
                                                            ],
                                                        },
                                                        l
                                                    )
                                                ),
                                            a
                                                .split(" ")
                                                .map((e, l) =>
                                                    (0, t.jsxs)(
                                                        c.Fragment,
                                                        {
                                                            children: [
                                                                (0, t.jsx)("span", {
                                                                    className: "will-change-transform zoom-right-text",
                                                                    children: e,
                                                                }),
                                                                (0, t.jsx)("span", { children: "\xa0" }),
                                                            ],
                                                        },
                                                        "".concat(l, "-right")
                                                    )
                                                ),
                                        ],
                                    }),
                                ],
                            }),
                        })
                    );
                };
        },
        40147: (e, l, a) => {
            "use strict";
            a.d(l, { BarChart: () => u });
            var t = a(32689),
                s = a(16114),
                r = a(36369),
                n = a(50494),
                i = a(39268),
                o = a(19893),
                c = a(88912);
            let d = ["#000000", "#14A586", "#01A3F8", "#FFB8E0", "#EA4C25", "#E5E5E5"],
                u = (e) => {
                    let { heading: l, data: a, source: u } = e,
                        m = (0, o.useRef)(null),
                        x = (0, r.I)();
                    (0, n.L)(
                        () => {
                            let e = i.Ay.utils.toArray(".animated-bar"),
                                l = i.Ay.utils.toArray(".bar-content");
                            i.Ay.set(e, { scaleX: 0, transformOrigin: "left center" }),
                                i.Ay.set(l, { opacity: 0, y: 10 });
                            let a = i.Ay.timeline({
                                scrollTrigger: {
                                    trigger: m.current,
                                    start: "top 75%",
                                    end: "bottom bottom",
                                    toggleActions: "play none none reverse",
                                },
                            });
                            a.to(e, {
                                scaleX: 1,
                                duration: 1.2,
                                ease: "expo.out",
                                stagger: { each: 0.08, ease: "power2.inOut" },
                            }),
                                a.to(
                                    l,
                                    {
                                        opacity: 1,
                                        y: 0,
                                        duration: 0.8,
                                        ease: "power3.out",
                                        stagger: { each: 0.08, ease: "power2.inOut" },
                                    },
                                    "-=0.6"
                                );
                        },
                        { scope: m }
                    );
                    let b = (e) => (["#000000", "#01A3F8", "#EA4C25"].includes(e) ? "#ffffff" : "#000000"),
                        h = (e, l) => (x ? 35 + ((e + 1) / l) * 65 : ((e + 1) / l) * 100);
                    return (0, t.jsxs)("div", {
                        ref: m,
                        className:
                            "relative w-full select-none overflow-hidden bg-background py-block-mobile md:py-block ",
                        children: [
                            l[0] && (0, t.jsx)(c.D, { ...l[0] }),
                            (0, t.jsxs)("div", {
                                className: "relative flex flex-col w-full overflow-hidden container",
                                children: [
                                    (0, t.jsx)("div", {
                                        className: "lg:max-w-[70%] overflow-hidden mt-6",
                                        children: a.map((e, l) => {
                                            let s = a.length,
                                                r = h(l, s),
                                                n = d[l % d.length],
                                                i = s - l,
                                                o = b(n);
                                            return (0, t.jsx)(
                                                "div",
                                                {
                                                    style: { width: "".concat(r, "%"), backgroundColor: n, zIndex: i },
                                                    className:
                                                        "relative animated-bar article-card will-change-transform h-20 md:h-24 p-3 origin-left ".concat(
                                                            l > 0 ? "-mt-3 lg:-mt-8" : ""
                                                        ),
                                                    children: (0, t.jsxs)("div", {
                                                        style: { color: o },
                                                        className:
                                                            "bar-content size-full flex flex-col justify-between ",
                                                        children: [
                                                            (0, t.jsx)("p", {
                                                                className:
                                                                    "flex self-end text-base md:text-xl font-gothic",
                                                                children: e.metric,
                                                            }),
                                                            (0, t.jsx)("p", {
                                                                className: "text-xs md:text-sm font-sans",
                                                                children: e.title,
                                                            }),
                                                        ],
                                                    }),
                                                },
                                                l
                                            );
                                        }),
                                    }),
                                    (0, t.jsx)("div", {
                                        className: "relative mt-4",
                                        children: (0, t.jsx)(s.Copy, {
                                            delay: 0.1,
                                            children: (0, t.jsx)("p", {
                                                className: "text-xs font-gothic text-neutral-950",
                                                children: u,
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    });
                };
        },
        45677: (e, l, a) => {
            "use strict";
            a.d(l, { A: () => c });
            var t = a(32689),
                s = a(75165),
                r = a(71162),
                n = a(47876),
                i = a.n(n);
            a(19893);
            var o = a(20545);
            let c = (e) => {
                let {
                    type: l,
                    appearance: a = "inline",
                    children: n,
                    className: c,
                    label: d,
                    newTab: u,
                    reference: m,
                    size: x,
                    url: b,
                    isAnimated: h,
                    withBlockPrefix: v,
                    withArrow: f,
                    onClick: g,
                    isPlain: p,
                    showArrowOnSmall: w = !0,
                } = e,
                    j =
                        "reference" === l && "object" == typeof (null == m ? void 0 : m.value) && m.value.slug
                            ? ""
                                .concat(
                                    (null == m ? void 0 : m.relationTo) !== "pages"
                                        ? "/".concat(null == m ? void 0 : m.relationTo)
                                        : "",
                                    "/"
                                )
                                .concat(m.value.slug)
                            : b;
                if (!j) return null;
                let y = "link" === a ? "clear" : x,
                    N = u ? { rel: "noopener noreferrer", target: "_blank" } : {};
                return p
                    ? (0, t.jsx)(i(), {
                        className: (0, r.cn)("", c),
                        href: j || b || "",
                        onClick: g,
                        ...N,
                        children: n && n,
                    })
                    : "inline" === a
                        ? (0, t.jsxs)(i(), {
                            className: (0, r.cn)("group overflow-hidden max-w-fit flex items-center gap-1 md:gap-2", c),
                            href: j || b || "",
                            onClick: g,
                            ...N,
                            children: [
                                v && (0, t.jsx)("div", { className: "bg-background md:bg-white h-2 w-3" }),
                                d && d,
                                f &&
                                (0, t.jsxs)(t.Fragment, {
                                    children: [
                                        (0, t.jsx)("div", {
                                            className:
                                                "hidden md:block opacity-0 group-hover:opacity-100 translate-x-[-8px] translate-y-[8px] group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out",
                                            children: (0, t.jsx)(o.A, { strokeWidth: 1 }),
                                        }),
                                        w && (0, t.jsx)(o.A, { className: "md:hidden", strokeWidth: 1 }),
                                    ],
                                }),
                                n && n,
                            ],
                        })
                        : h
                            ? (0, t.jsx)(i(), {
                                onClick: g,
                                href: j || b || "",
                                ...N,
                                className: "inline-block",
                                children: (0, t.jsxs)(s.Button, {
                                    className: c,
                                    size: y,
                                    variant: a,
                                    isAnimated: h,
                                    children: [d && d, n && n, f && (0, t.jsx)(o.A, {})],
                                }),
                            })
                            : (0, t.jsx)(s.Button, {
                                onClick: g,
                                asChild: !0,
                                className: c,
                                size: y,
                                variant: a,
                                isAnimated: h,
                                children: (0, t.jsxs)(i(), {
                                    className: (0, r.cn)(c),
                                    href: j || b || "",
                                    ...N,
                                    children: [d && d, n && n],
                                }),
                            });
            };
        },
        49653: (e, l, a) => {
            "use strict";
            a.d(l, { VideoMedia: () => i });
            var t = a(32689),
                s = a(71162),
                r = a(19893),
                n = a(33001);
            let i = (e) => {
                let { onClick: l, resource: a, videoClassName: i } = e,
                    o = (0, r.useRef)(null);
                if (
                    ((0, r.useEffect)(() => {
                        let { current: e } = o;
                        e && e.addEventListener("suspend", () => { });
                    }, []),
                        a && "object" == typeof a)
                ) {
                    let { filename: r } = a;
                    return (0, t.jsx)("video", {
                        autoPlay: !0,
                        className: (0, s.cn)(i),
                        controls: !1,
                        loop: !0,
                        muted: !0,
                        onClick: l,
                        playsInline: !0,
                        ref: o,
                        onLoadedData: e.onLoadedData,
                        onCanPlay: e.onLoadedData,
                        children: (0, t.jsx)("source", { src: (0, n.e)("/api/media/file/".concat(r)) }),
                    });
                }
                return null;
            };
        },
        50825: (e, l, a) => {
            "use strict";
            a.d(l, { FeaturedArticles: () => c });
            var t = a(32689),
                s = a(19893),
                r = a(50494),
                n = a(39268),
                i = a(17902),
                o = a(35424);
            let c = (e) => {
                let { title: l, cards: a } = e,
                    c = (0, s.useRef)(null),
                    d = (0, s.useRef)(null);
                return (
                    (0, r.L)(
                        () => {
                            n.Ay.matchMedia().add("(min-width: 768px)", () => {
                                let e = n.Ay.utils.toArray(".article-card"),
                                    l = n.Ay.timeline({});
                                e.forEach((e, l) => {
                                    n.Ay.set(e, { y: "110%", opacity: 0 });
                                }),
                                    n.Ay.set(d.current, { opacity: 0 }),
                                    l.to(d.current, { opacity: 1, duration: 0.2 }),
                                    l.to(e, { opacity: 1, duration: 0.05 }),
                                    l.to(e, { y: "0%", duration: 1, stagger: 0.03, ease: "power3.out" }),
                                    i.u.create({
                                        trigger: c.current,
                                        start: "top top",
                                        end: () => "+=".concat(3 * window.innerHeight),
                                        pin: !0,
                                        pinSpacing: !0,
                                        scrub: 1,
                                        animation: l,
                                    });
                            });
                        },
                        { scope: c }
                    ),
                    (0, t.jsxs)("div", {
                        ref: c,
                        className: "relative select-none overflow-hidden bg-background py-block-mobile md:py-0",
                        children: [
                            (0, t.jsx)("div", {
                                ref: d,
                                className:
                                    "relative md:absolute size-full text-black flex md:items-center md:justify-center font-gothic md:text-2xl pb-5 md:pb-0 container",
                                children: (0, t.jsx)("span", { children: l }),
                            }),
                            (0, t.jsx)("div", {
                                className:
                                    "relative flex flex-col md:flex-row w-full overflow-hidden container md:max-w-none md:px-0 md:mx-0 gap-5 md:gap-0",
                                children: a.map((e, l) =>
                                    (0, t.jsx)(
                                        "div",
                                        {
                                            className:
                                                "article-card w-full will-change-transform h-[80vh] md:h-[100vh]",
                                            children: (0, t.jsx)(o.ArticleCard, { ...e, index: l }),
                                        },
                                        l
                                    )
                                ),
                            }),
                        ],
                    })
                );
            };
        },
        53417: (e, l, a) => {
            "use strict";
            a.d(l, { PageClient: () => o });
            var t = a(39268),
                s = a(17902),
                r = a(27117),
                n = a(4228),
                i = a(19893);
            t.Ay.registerPlugin(s.u, r.M, n.A);
            let o = () => (
                (0, i.useEffect)(() => {
                    let e = requestAnimationFrame(() => {
                        s.u.refresh(!0);
                    }),
                        l = () => s.u.refresh(!0);
                    return (
                        window.addEventListener("load", l, { passive: !0 }),
                        () => {
                            cancelAnimationFrame(e), window.removeEventListener("load", l);
                        }
                    );
                }, []),
                null
            );
        },
        58528: () => { },
        59106: (e, l, a) => {
            "use strict";
            a.d(l, { ImpactNumbersBlock: () => o });
            var t = a(32689),
                s = a(50494),
                r = a(39268),
                n = a(19893),
                i = a(88912);
            a(73169);
            let o = (e) => {
                let { heading: l, values: a } = e,
                    o = (0, n.useRef)(null);
                return (
                    (0, s.L)(
                        () => {
                            let e = r.Ay.utils.toArray(".value-container"),
                                l = r.Ay.utils.toArray(".values-description");
                            r.Ay.set(e, { y: "100%" }),
                                r.Ay.set(l, { opacity: 0 }),
                                r.Ay.to(e, {
                                    y: "0%",
                                    duration: 1,
                                    ease: "power3.out",
                                    stagger: 0.1,
                                    scrollTrigger: { trigger: o.current, start: "top 25%", once: !0 },
                                }),
                                r.Ay.to(l, {
                                    opacity: 1,
                                    duration: 1,
                                    ease: "power3.out",
                                    delay: 0.2,
                                    stagger: 0.1,
                                    scrollTrigger: { trigger: o.current, start: "top 25%", once: !0 },
                                });
                        },
                        { scope: o }
                    ),
                    (0, t.jsxs)("div", {
                        ref: o,
                        className: "py-block-mobile sm:py-block w-full select-none overflow-hidden",
                        children: [
                            l[0] && (0, t.jsx)(i.D, { ...l[0] }),
                            (0, t.jsx)("div", {
                                className:
                                    "w-full container flex flex-col md:flex-row items-start gap-10 justify-end mt-10 md:mt-20",
                                children: a.map((e, l) =>
                                    (0, t.jsxs)(
                                        "div",
                                        {
                                            className: "flex flex-col items-start gap-3 md:gap-6",
                                            children: [
                                                (0, t.jsx)("div", {
                                                    className:
                                                        "h-fit overflow-hidden relative border-b-2 border-b-neutral-800",
                                                    children: (0, t.jsxs)("div", {
                                                        className: "value-container flex items-baseline leading-none",
                                                        children: [
                                                            (0, t.jsx)("span", {
                                                                className: "font-gothic numbers-text text-neutral-950",
                                                                children: e.value,
                                                            }),
                                                            e.suffix &&
                                                            (0, t.jsx)("span", {
                                                                className: "font-gothic text-2xl text-neutral-950",
                                                                children: e.suffix,
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                                (0, t.jsx)("p", {
                                                    className:
                                                        "values-description text-base md:text-2xl font-sans font-medium max-w-[19rem]",
                                                    children: e.description,
                                                }),
                                            ],
                                        },
                                        e.id
                                    )
                                ),
                            }),
                        ],
                    })
                );
            };
        },
        65231: (e, l, a) => {
            "use strict";
            a.d(l, { MaskTextBlock: () => o });
            var t = a(32689),
                s = a(50494),
                r = a(39268),
                n = a(4228),
                i = a(19893);
            let o = (e) => {
                let { text: l } = e,
                    a = (0, i.useRef)(null),
                    o = (0, i.useRef)(null),
                    c = (0, i.useRef)(null);
                return (
                    (0, s.L)(
                        () => {
                            if (o.current)
                                return (
                                    c.current && c.current.revert(),
                                    (c.current = new n.A(o.current, { type: "words, chars" })),
                                    r.Ay.fromTo(
                                        c.current.chars,
                                        { opacity: 0.2 },
                                        {
                                            opacity: 1,
                                            duration: 0.05,
                                            ease: "none",
                                            stagger: { each: 0.02, from: "start" },
                                            scrollTrigger: {
                                                trigger: a.current,
                                                start: "top bottom",
                                                end: "bottom center",
                                                scrub: !0,
                                                immediateRender: !1,
                                            },
                                        }
                                    ),
                                    r.Ay.fromTo(
                                        ".movable-side-block",
                                        { x: "0%" },
                                        {
                                            x: "100%",
                                            duration: 1,
                                            ease: "power2.inOut",
                                            scrollTrigger: {
                                                trigger: a.current,
                                                start: "top center",
                                                end: "center top",
                                                scrub: !0,
                                            },
                                        }
                                    ),
                                    () => {
                                        c.current && c.current.revert();
                                    }
                                );
                        },
                        { scope: a, dependencies: [l] }
                    ),
                    (0, t.jsxs)("div", {
                        ref: a,
                        className: "relative bg-background py-block-mobile sm:py-block w-full flex select-none",
                        children: [
                            (0, t.jsx)("div", {
                                className: "absolute left-0 top-0 h-[50%] w-3 md:w-5 bg-brand-yellow",
                            }),
                            (0, t.jsx)("div", {
                                className:
                                    "absolute left-0 top-1/2 h-[50%] w-3 md:w-5 bg-brand-yellow movable-side-block will-change-transform ",
                            }),
                            (0, t.jsxs)("div", {
                                className:
                                    "container flex items-center justify-center size-full text-center mask-text-container",
                                children: [
                                    (0, t.jsx)("span", { className: "sr-only", children: l }),
                                    (0, t.jsx)("p", {
                                        ref: o,
                                        "aria-hidden": !0,
                                        className:
                                            "content-text text-[9vw] xl:text-[7.5rem] font-gothic max-w-[90%] text-black leading-none",
                                        children: l,
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            };
        },
        71162: (e, l, a) => {
            "use strict";
            a.d(l, { cn: () => r });
            var t = a(1034),
                s = a(83283);
            function r() {
                for (var e = arguments.length, l = Array(e), a = 0; a < e; a++) l[a] = arguments[a];
                return (0, s.QP)((0, t.$)(l));
            }
        },
        73169: () => { },
        75165: (e, l, a) => {
            "use strict";
            a.d(l, { Button: () => u });
            var t = a(32689),
                s = a(71162),
                r = a(50494),
                n = a(86634),
                i = a(63804),
                o = a(39268),
                c = a(19893);
            let d = (0, i.F)(
                "inline-flex items-center justify-center whitespace-nowrap text-sm font-gothic ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                {
                    defaultVariants: { size: "default", variant: "default" },
                    variants: {
                        size: {
                            clear: "",
                            default: "h-10 px-4 py-2",
                            icon: "h-10 w-10",
                            lg: "h-12 py-5 px-8",
                            sm: "h-9 rounded px-3",
                            xl: "h-20 px-10 py-5",
                        },
                        variant: {
                            default: "bg-brand-yellow text-gray-950 hover:bg-brand-yellow/90",
                            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                            ghost: "hover:bg-card hover:text-accent-foreground",
                            link: "text-primary items-start justify-start underline-offset-4 hover:underline",
                            outline:
                                "border border-border bg-background hover:bg-card hover:text-accent-foreground",
                            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                        },
                    },
                }
            ),
                u = (e) => {
                    let {
                        asChild: l = !1,
                        className: a,
                        size: i,
                        variant: u,
                        isAnimated: m = !1,
                        children: x,
                        ref: b,
                        animatedClassName: h,
                        overlayClassName: v,
                        innerOverlayClassName: f,
                        withArrow: g,
                        ...p
                    } = e,
                        w = (0, c.useRef)(null);
                    (0, r.L)(
                        () => {
                            if (!m || !w.current) return;
                            let e = w.current,
                                l = () => {
                                    let l = e.querySelector(".button-overlay"),
                                        a = e.querySelector(".og-text");
                                    l &&
                                        a &&
                                        (o.Ay.to(l, { top: "0%", duration: 0.3, ease: "power2.out" }),
                                            o.Ay.to(a, { top: -40, duration: 0.3, ease: "power2.out" }));
                                },
                                a = () => {
                                    let l = e.querySelector(".button-overlay"),
                                        a = e.querySelector(".og-text");
                                    l &&
                                        a &&
                                        (o.Ay.to(l, { top: "110%", duration: 0.3, ease: "power2.out" }),
                                            o.Ay.to(a, { top: 0, duration: 0.3, ease: "power2.out" }));
                                };
                            return (
                                e.addEventListener("mouseenter", l),
                                e.addEventListener("mouseleave", a),
                                () => {
                                    e.removeEventListener("mouseenter", l), e.removeEventListener("mouseleave", a);
                                }
                            );
                        },
                        { scope: w, dependencies: [m] }
                    );
                    let j = l ? n.DX : "button";
                    return m
                        ? (0, t.jsxs)(j, {
                            className: (0, s.cn)(
                                d({ className: a, size: i, variant: u }),
                                "relative overflow-hidden"
                            ),
                            ref: w,
                            ...p,
                            children: [
                                (0, t.jsx)("div", {
                                    className: (0, s.cn)(
                                        "og-text flex size-full items-center justify-center top-0 relative will-change-transform gap-2",
                                        h
                                    ),
                                    children: x,
                                }),
                                (0, t.jsx)("div", {
                                    className: (0, s.cn)(
                                        "button-overlay absolute bg-black top-[110%] size-full left-0 z-20 will-change-transform",
                                        v
                                    ),
                                    children: (0, t.jsx)("div", {
                                        className: (0, s.cn)(
                                            "flex items-center justify-center size-full invert gap-2 ",
                                            f
                                        ),
                                        children: x,
                                    }),
                                }),
                            ],
                        })
                        : (0, t.jsx)(j, {
                            className: (0, s.cn)(d({ className: a, size: i, variant: u })),
                            ref: b || w,
                            ...p,
                            children: x,
                        });
                };
        },
        83056: (e, l, a) => {
            "use strict";
            a.d(l, { TwoLiner: () => o });
            var t = a(32689),
                s = a(45677),
                r = a(50494),
                n = a(39268),
                i = a(19893);
            let o = (e) => {
                let { firstLine: l, secondLine: a, cta: o } = e,
                    c = (0, i.useRef)(null),
                    d = (0, i.useRef)(null),
                    u = (0, i.useRef)(null);
                return (
                    (0, r.L)(
                        () => {
                            d.current &&
                                u.current &&
                                (n.Ay.set(d.current, { x: "100%" }),
                                    n.Ay.set(u.current, { x: "100%" }),
                                    n.Ay.to(d.current, {
                                        x: "0%",
                                        duration: 1.5,
                                        ease: "power3.out",
                                        stagger: 0.4,
                                        scrollTrigger: { trigger: c.current, start: "top 60%", once: !0 },
                                    }),
                                    n.Ay.to(u.current, {
                                        x: "0%",
                                        duration: 1.5,
                                        ease: "power3.out",
                                        stagger: 0.4,
                                        scrollTrigger: { trigger: c.current, start: "top 60%", once: !0 },
                                    }));
                        },
                        { scope: c }
                    ),
                    (0, t.jsx)("div", {
                        ref: c,
                        className: "bg-background py-block-mobile sm:py-block w-full overflow-hidden relative",
                        children: (0, t.jsxs)("div", {
                            className: "flex flex-col w-full relative container",
                            children: [
                                (0, t.jsxs)("div", {
                                    className: "w-fit relative h-fit overflow-hidden flex",
                                    children: [
                                        (0, t.jsx)("div", {
                                            ref: d,
                                            className:
                                                "bg-brand-blue absolute bottom-0 left-0 w-full h-[70%] full-highlight will-change-transform z-0",
                                        }),
                                        (0, t.jsx)("span", {
                                            className: "text-3xl md:text-6xl xl:text-8xl font-gothic z-20",
                                            children: l,
                                        }),
                                    ],
                                }),
                                (0, t.jsxs)("div", {
                                    className: "w-full relative text-end overflow-hidden flex justify-end",
                                    children: [
                                        (0, t.jsx)("div", {
                                            ref: u,
                                            className:
                                                "bg-brand-emerald absolute top-0 left-0 size-full full-highlight will-change-transform z-0",
                                        }),
                                        (0, t.jsx)("span", {
                                            className: "text-3xl md:text-6xl xl:text-8xl font-gothic z-20",
                                            children: a,
                                        }),
                                    ],
                                }),
                                (0, t.jsx)("div", {
                                    className: "ps-10",
                                    children: (0, t.jsx)(s.A, { ...o, isAnimated: !0, withArrow: !0 }),
                                }),
                            ],
                        }),
                    })
                );
            };
        },
        83494: (e, l, a) => {
            "use strict";
            a.d(l, { r: () => t });
            let t = (e, l) => {
                let a = new Date();
                e && (a = new Date(e));
                let t = a.getMonth(),
                    s = a.toLocaleDateString("en-US", { month: "long" }),
                    r = a.getDate(),
                    n = r < 10 ? "0".concat(r) : r,
                    i = a.getFullYear();
                return l
                    ? "".concat(s, " ").concat(n)
                    : ""
                        .concat(t + 1 < 10 ? "0".concat(t + 1) : t + 1, "/")
                        .concat(n, "/")
                        .concat(i);
            };
        },
        84616: (e, l, a) => {
            "use strict";
            a.d(l, { HomeCards: () => c });
            var t = a(32689),
                s = a(50494),
                r = a(39268),
                n = a(17902),
                i = a(19893),
                o = a(35424);
            let c = (e) => {
                let { cards: l } = e,
                    a = (0, i.useRef)(null);
                return (
                    (0, s.L)(
                        () => {
                            r.Ay.matchMedia().add("(min-width: 768px)", () => {
                                let e = r.Ay.utils.toArray(".article-card"),
                                    l = r.Ay.timeline({});
                                e.forEach((e, l) => {
                                    r.Ay.set(e, { y: l > 0 ? "110%" : "0%", x: l % 2 ? "0%" : "100%" });
                                }),
                                    e.forEach((e, t) => {
                                        let s = e.querySelectorAll(".move-to-right-block"),
                                            n = e.querySelectorAll(".move-to-left-block");
                                        r.Ay.set(s, { x: "-100%" }),
                                            r.Ay.set(n, { x: "100%" }),
                                            0 === t
                                                ? (r.Ay.to(n, {
                                                    x: "0%",
                                                    duration: 1,
                                                    ease: "expo.out",
                                                    scrollTrigger: {
                                                        trigger: a.current,
                                                        start: "top center",
                                                        end: "top top",
                                                        scrub: 1.5,
                                                    },
                                                }),
                                                    r.Ay.to(s, {
                                                        x: "0%",
                                                        duration: 1,
                                                        ease: "expo.out",
                                                        scrollTrigger: {
                                                            trigger: a.current,
                                                            start: "top center",
                                                            end: "top top",
                                                            scrub: 1.5,
                                                        },
                                                    }))
                                                : l
                                                    .to(e, { y: "0%", duration: 1.5, ease: "power4.out" })
                                                    .to(
                                                        n,
                                                        { x: "0%", duration: 1.2, ease: "expo.out", stagger: 0.05 },
                                                        "<0.3"
                                                    )
                                                    .to(
                                                        s,
                                                        { x: "0%", duration: 1.2, ease: "expo.out", stagger: 0.05 },
                                                        "<0.1"
                                                    );
                                    }),
                                    r.Ay.fromTo(
                                        ".movable-side-block",
                                        { x: 24 },
                                        {
                                            x: 0,
                                            duration: 1,
                                            ease: "power3.out",
                                            scrollTrigger: {
                                                trigger: a.current,
                                                start: "top center",
                                                end: "center top",
                                                scrub: 2,
                                            },
                                        }
                                    ),
                                    n.u.create({
                                        trigger: a.current,
                                        start: "top top",
                                        end: () => "+=".concat(4 * window.innerHeight),
                                        pin: !0,
                                        pinSpacing: !0,
                                        scrub: 2,
                                        animation: l,
                                    });
                            });
                        },
                        { scope: a }
                    ),
                    (0, t.jsx)("div", {
                        className: "w-full overflow-x-hidden",
                        children: (0, t.jsxs)("div", {
                            ref: a,
                            className:
                                "relative select-none overflow-hidden py-block-mobile md:py-0 bg-background w-full",
                            children: [
                                (0, t.jsx)("div", {
                                    className:
                                        "absolute left-3 md:left-5 top-0 h-12 md:h-[50%] w-3 md:w-5 bg-brand-yellow",
                                }),
                                (0, t.jsx)("div", {
                                    className:
                                        "absolute left-0 top-1/2 h-[50%] w-3 md:w-5 bg-brand-yellow movable-side-block will-change-transform hidden md:block",
                                }),
                                (0, t.jsx)("div", {
                                    className:
                                        "relative flex flex-col w-full md:h-[100vh] overflow-hidden gap-5 md:gap-0 container md:max-w-none md:px-0 md:mx-0",
                                    children: l.map((e, l) =>
                                        (0, t.jsx)(
                                            "div",
                                            {
                                                className:
                                                    "article-card md:absolute will-change-transform w-full md:w-1/2 h-[80vh] md:h-[100vh] top-0 overflow-hidden",
                                                children: (0, t.jsx)(o.ArticleCard, { ...e, index: l }),
                                            },
                                            l
                                        )
                                    ),
                                }),
                            ],
                        }),
                    })
                );
            };
        },
        85730: (e, l, a) => {
            "use strict";
            a.d(l, { ImageMedia: () => m });
            var t = a(32689),
                s = a(71162),
                r = a(6476),
                n = a(19893),
                i = a(33001),
                o = a(17902),
                c = a(89796);
            let { breakpoints: d } = {
                breakpoints: { "3xl": 1920, "2xl": 1536, xl: 1280, lg: 1024, md: 768, sm: 640 },
            },
                u = (e, l, a) => e + (l - e) * a,
                m = (e) => {
                    let l,
                        a,
                        m,
                        {
                            alt: x,
                            fill: b,
                            pictureClassName: h,
                            imgClassName: v,
                            priority: f,
                            resource: g,
                            size: p,
                            src: w,
                            loading: j,
                            isParallax: y,
                        } = e,
                        N = (0, n.useRef)(null),
                        A = (0, n.useRef)(null),
                        k = (0, n.useRef)(0),
                        C = (0, n.useRef)(0),
                        M = (0, n.useRef)(null),
                        z = x,
                        S = w || "";
                    if (!S && g && "object" == typeof g) {
                        let { alt: e, height: t, url: s, width: r, blurDataURL: n } = g;
                        (l = r), (a = t), (z = e || ""), (m = n);
                        let o = g.updatedAt;
                        S = (0, i.e)(s, o);
                    }
                    let T =
                        p ||
                        Object.entries(d)
                            .map((e) => {
                                let [, l] = e;
                                return "(max-width: ".concat(l, "px) ").concat(2 * l, "w");
                            })
                            .join(", ");
                    return (
                        (0, n.useEffect)(() => {
                            if (!y) return;
                            let e = () => {
                                if (N.current) {
                                    let e = N.current.getBoundingClientRect();
                                    A.current = { top: e.top + window.scrollY, bottom: e.bottom + window.scrollY };
                                }
                            };
                            e(), window.addEventListener("resize", e);
                            let l = () => {
                                N.current &&
                                    ((k.current = u(k.current, C.current, 0.1)),
                                        Math.abs(k.current - C.current) > 0.01 &&
                                        (N.current.style.transform = "translateY(".concat(
                                            k.current,
                                            "px) scale(1.25)"
                                        ))),
                                    (M.current = requestAnimationFrame(l));
                            };
                            return (
                                l(),
                                () => {
                                    M.current && cancelAnimationFrame(M.current),
                                        window.removeEventListener("resize", e);
                                }
                            );
                        }, [y]),
                        (0, c.xP)((e) => {
                            let { scroll: l } = e;
                            A.current && y && (C.current = 0.05 * (l - A.current.top));
                        }),
                        (0, t.jsx)("picture", {
                            className: (0, s.cn)(h),
                            children: (0, t.jsx)(r.default, {
                                ref: N,
                                alt: z || "",
                                className: (0, s.cn)(
                                    { isParallax: "will-change-transform translate-y-0 scale-125" },
                                    v
                                ),
                                fill: b,
                                height: b ? void 0 : a,
                                placeholder: "blur",
                                blurDataURL:
                                    null != m
                                        ? m
                                        : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABchJREFUWEdtlwtTG0kMhHtGM7N+AAdcDsjj///EBLzenbtuadbLJaZUTlHB+tRqSesETB3IABqQG1KbUFqDlQorBSmboqeEBcC1d8zrCixXYGZcgMsFmH8B+AngHdurAmXKOE8nHOoBrU6opcGswPi5KSP9CcBaQ9kACJH/ALAA1xm4zMD8AczvQCcAQeJVAZsy7nYApTSUzwCHUKACeUJi9TsFci7AHmDtuHYqQIC9AgQYKnSwNAig4NyOOwXq/xU47gDYggarjIpsRSEA3Fqw7AGkwgW4fgALAdiC2btKgNZwbgdMbEFpqFR2UyCR8xwAhf8bUHIGk1ckMyB5C1YkeWAdAPQBAeiD6wVYPoD1HUgXwFagZAGc6oSpTmilopoD5GzISQD3odcNIFca0BUQQM5YA2DpHV0AYURBDIAL0C+ugC0C4GedSsVUmwC8/4w8TPiwU6AClJ5RWL1PgQNkrABWdKB3YF3cBwRY5lsI4ApkKpCQi+FIgFJU/TDgDuAxAAwonJuKpGD1rkCXCR1ALyrAUSSEQAhwBdYZ6DPAgSUA2c1wKIZmRcHxMzMYR9DH8NlbkAwwApSAcABwBwTAbb6owAr0AFiZPILVEyCtMmK2jCkTwFDNUNj7nJETQx744gCUmgkZVGJUHyakEZE4W91jtGFA9KsD8Z3JFYDlhGYZLWcllwJMnplcPy+csFAgAAaIDOgeuAGoB96GLZg4kmtfMjnr6ig5oSoySsoy3ya/FMivXZWxwr0KIf9nACbfqcBEgmBSAtAlIT83R+70IWpyACamIjf5E1Iqb9ECVmnoI/FvAIRk8s2J0Y5IquQDgB+5wpScw5AUTC75VTmTs+72NUzoCvQIaAXv5Q8PDAZKLD+MxLv3RFE7KlsQChgBIlKiCv5ByaZv3gJZNm8AnVMhAN+EjrtTYQMICJpu6/0aiQnhClANlz+Bw0cIWa8ev0sBrtrhAyaXEnrfGfATQJiRKih5vKeOHNXXPFrgyamAADh0Q4F2/sESojomDS9o9k0b0H83xjB8qL+JNoTjN+enjpaBpingRh4e8MSugudM030A8FeqMI6PFIgNyPehkpZWGFEAARIQdH5LcAAqIACHkAJqg4OoBccHAuz76wr4BbzFOEa8iBuAZB8AtJHLP2VgMgJw/EIBowo7HxCAH3V6dAXEE/vZ5aZIA8BP8RKhm7Cp8BnAMnAQADdgQDA520AVIpScP+enHz0Gwp25h4i2dPg5FkDXrbsdJikQwXuWgaM5gEMk1AgH4DKKFjDf3bMD+FjEeIxLlRKYnBk2BbquvSDCAQ4gwZiMAAmH4gBTyRtEsYxi7gP6QSrc//39BrDNqG8rtYTmC4BV1SfMhOhaumFCT87zy4pPhQBZEK1kQVRjJBBi7AOlePgyAPYjwlvtagx9e/dnQraAyS894TIkkAIEYMKEc8k4EqJ68lZ5jjNqcQC2QteQOf7659umwBgPybNtK4dg9WvnMyFwXYGP7uEO1lwJgAnPNeMYMVXbIIYKFioI4PGFt+BWPVfmWJdjW2lTUnLGCswECAgaUy86iwA1464ajo0QhgMBFGyBoZahANsMpMfXr1JA1SN29m5lqgXj+UPV85uRA7yv/KYUO4Tk7Hc1AZwbIRzg0AyNj2UlAMwfSLSMnl7fdAbcxHuA27YaAMvaQ4GOjwX4RTUGAG8Ge14N963g1AynqUiFqRX9noasxT4b8entNRQYyamk/3tYcHsO7R3XJRRYOn4tw4iUnwBM5gDnySGOreAwAGo8F9IDHEcq8Pz2Kg/oXCpuIL6tOPD8LsDn0ABYQoGFRowlsAEUPPDrGAGowAbgKsgDMmE8mDy/vXQ9IAwI7u4wta+gAdAdgB64Ah9SgD4IgGKhwACoAjgNgFDhtxY8f33ZTMjqdTAiHMBPrn8ZWkEfzFdX4Oc1AHg3+ADbvN8PU8WdFKg4Tt6CQy2+D4YHaMT/JP4XzbAq98cPDIUAAAAASUVORK5CYII=",
                                priority: f,
                                quality: 100,
                                loading: j || (f ? void 0 : "lazy"),
                                sizes: T,
                                src: S,
                                width: b ? void 0 : l,
                                onLoad: function () {
                                    o.u.refresh();
                                },
                            }),
                        })
                    );
                };
        },
        87028: (e, l, a) => {
            "use strict";
            a.d(l, { ThreeWordCTA: () => d });
            var t = a(32689),
                s = a(45677),
                r = a(14921),
                n = a(50494),
                i = a(39268),
                o = a(20545),
                c = a(19893);
            let d = (e) => {
                let { words: l, image: a, cta: d } = e,
                    u = (0, c.useRef)(null);
                return (
                    (0, n.L)(
                        () => {
                            i.Ay.utils.toArray(".highlight").forEach((e, l) => {
                                i.Ay.set(e, { x: l % 2 == 0 ? "-100%" : "100%" });
                            }),
                                i.Ay.to(".highlight", {
                                    x: "0%",
                                    duration: 1.5,
                                    ease: "power3.out",
                                    stagger: 0.4,
                                    scrollTrigger: {
                                        trigger: u.current,
                                        start: "top 50%",
                                        once: !0,
                                        pin: !1,
                                        pinSpacing: !1,
                                    },
                                });
                        },
                        { scope: u }
                    ),
                    (0, t.jsxs)("div", {
                        ref: u,
                        className: "relative overflow-hidden bg-background z-20 w-full  ",
                        children: [
                            (0, t.jsx)("div", { className: "absolute top-0 w-full bg-brand-blue z-0 h-[80%]" }),
                            (0, t.jsx)("div", { className: "absolute bottom-0 right-0 w-20 h-[20%] bg-brand-blue" }),
                            (0, t.jsx)(r.MovableBlocks, {
                                initialY: "-100%",
                                firstBoxClassName: "w-44 h-14",
                                secondBoxClassName: "w-44 h-8",
                            }),
                            (0, t.jsxs)("div", {
                                className:
                                    "flex flex-col size-full container md:max-w-[80vw] items-center justify-center overflow-hidden pt-32 z-10",
                                children: [
                                    (0, t.jsxs)("div", {
                                        className: "w-full flex flex-col md:flex-row items-end md:justify-end",
                                        children: [
                                            (0, t.jsx)("div", {
                                                className:
                                                    "relative min-w-fit md:h-[12vw] self-start md:self-end md:justify-end flex md:items-end",
                                                children: (0, t.jsx)(s.A, {
                                                    ...d,
                                                    isAnimated: !0,
                                                    className: "items-center justify-center",
                                                    children: (0, t.jsx)(o.A, {}),
                                                }),
                                            }),
                                            (0, t.jsxs)("div", {
                                                className: "relative flex overflow-hidden min-w-fit justify-end",
                                                children: [
                                                    (0, t.jsx)("div", {
                                                        className:
                                                            "bg-background absolute top-0 left-0 h-full w-[90%] highlight will-change-transform",
                                                    }),
                                                    (0, t.jsx)("span", {
                                                        className:
                                                            "font-gothic text-[24vw] md:text-[16vw] uppercase z-10 tracking-wide leading-none",
                                                        children: l.firstWord,
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, t.jsx)("div", {
                                        className: "w-full flex items-start ",
                                        children: (0, t.jsxs)("div", {
                                            className: "relative flex overflow-hidden min-w-fit -mt-1",
                                            children: [
                                                (0, t.jsx)("div", {
                                                    className:
                                                        "bg-background absolute top-0 left-0 size-full highlight will-change-transform",
                                                }),
                                                (0, t.jsx)("span", {
                                                    className:
                                                        "font-gothic text-[24vw] md:text-[16vw] uppercase z-10 tracking-wide leading-none",
                                                    children: l.secondWord,
                                                }),
                                            ],
                                        }),
                                    }),
                                    (0, t.jsxs)("div", {
                                        className:
                                            "w-full flex flex-col md:flex-row items-end md:items-start justify-end ",
                                        children: [
                                            (0, t.jsx)("div", {
                                                className:
                                                    "hidden md:flex relative w-[16vw] h-[12vw] overflow-hidden justify-end items-end bg-transparent",
                                            }),
                                            (0, t.jsxs)("div", {
                                                className: "relative flex md:ps-4 overflow-hidden -mt-1 min-w-fit",
                                                children: [
                                                    (0, t.jsx)("div", {
                                                        className:
                                                            "bg-background absolute top-0 left-0 size-full highlight will-change-transform",
                                                    }),
                                                    (0, t.jsx)("span", {
                                                        className:
                                                            "font-gothic text-[24vw] md:text-[16vw] uppercase z-10 tracking-wide leading-none",
                                                        children: l.thirdWord,
                                                    }),
                                                ],
                                            }),
                                            (0, t.jsx)("div", {
                                                className:
                                                    "flex md:hidden relative w-full aspect-square overflow-hidden self-start bg-transparent",
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            };
        },
        88912: (e, l, a) => {
            "use strict";
            a.d(l, { D: () => n });
            var t = a(32689),
                s = a(16114),
                r = a(71162);
            let n = (e) => {
                let { title: l, description: a, additional: n, className: i } = e;
                return (0, t.jsxs)("div", {
                    className: (0, r.cn)(
                        "w-full container flex flex-col md:flex-row items-start justify-between gap-4 md:gap-10",
                        i
                    ),
                    children: [
                        (0, t.jsx)("span", {
                            className: "text-zinc-900 font-gothic uppercase text-sm sm:text-base w-full",
                            children: l,
                        }),
                        (0, t.jsx)("div", {
                            className: "flex flex-col w-full items-end max-w-xl",
                            children: (0, t.jsxs)("div", {
                                className: "w-full flex flex-col text-start gap-5",
                                children: [
                                    (0, t.jsx)(s.Copy, {
                                        children: (0, t.jsx)("p", {
                                            className:
                                                "text-gray-950 font-semibold text-2xl sm:text-2xl lg:text-3xl font-gothic",
                                            children: a,
                                        }),
                                    }),
                                    n &&
                                    (0, t.jsx)(s.Copy, {
                                        delay: 0.05,
                                        children: (0, t.jsx)("p", {
                                            className: "text-zinc-600 font-sans",
                                            children: n,
                                        }),
                                    }),
                                ],
                            }),
                        }),
                    ],
                });
            };
        },
        90652: (e, l, a) => {
            "use strict";
            a.d(l, { y: () => r });
            let t = !!window.document && !!window.document.createElement;
            var s = a(34679);
            let r = () => {
                if (t) {
                    let e = window.location.protocol,
                        l = window.location.hostname,
                        a = window.location.port;
                    return ""
                        .concat(e, "//")
                        .concat(l)
                        .concat(a ? ":".concat(a) : "");
                }
                return s.env.VERCEL_PROJECT_PRODUCTION_URL
                    ? "https://".concat(s.env.VERCEL_PROJECT_PRODUCTION_URL)
                    : "https://www.signalsfs.com";
            };
        },
        94005: (e, l, a) => {
            "use strict";
            a.d(l, { $: () => i });
            var t = a(32689),
                s = a(19893),
                r = a(85730),
                n = a(49653);
            let i = (e) => {
                var l;
                let { className: a, htmlElement: i = "div", resource: o } = e,
                    c = "object" == typeof o && (null == o || null == (l = o.mimeType) ? void 0 : l.includes("video")),
                    d = i || s.Fragment;
                return (0, t.jsx)(d, {
                    ...(null !== i ? { className: a } : {}),
                    children: c ? (0, t.jsx)(n.VideoMedia, { ...e }) : (0, t.jsx)(r.ImageMedia, { ...e }),
                });
            };
        },
        97212: (e, l, a) => {
            "use strict";
            a.d(l, { FormBlock: () => H });
            var t = a(32689),
                s = a(84873),
                r = a(19893),
                n = a(8646),
                i = a(71162),
                o = a(94005);
            let c = (e) => {
                let l,
                    {
                        captionClassName: a,
                        className: s,
                        enableGutter: r = !0,
                        imgClassName: n,
                        media: c,
                        staticImage: d,
                        disableInnerContainer: u,
                    } = e;
                return (
                    c && "object" == typeof c && (l = c.caption),
                    (0, t.jsxs)("div", {
                        className: (0, i.cn)("", { container: r }, s),
                        children: [
                            (c || d) &&
                            (0, t.jsx)(o.$, {
                                imgClassName: (0, i.cn)("border border-border rounded-[0.8rem]", n),
                                resource: c,
                                src: d,
                            }),
                            l &&
                            (0, t.jsx)("div", {
                                className: (0, i.cn)("mt-6", { container: !u }, a),
                                children: (0, t.jsx)(g, { data: l, enableGutter: !1 }),
                            }),
                        ],
                    })
                );
            };
            var d = a(89089),
                u = a(69604),
                m = a(26496);
            let x = (e) => {
                let { className: l, code: a, language: s } = e;
                return (0, t.jsx)("div", {
                    className: [l, "not-prose"].filter(Boolean).join(" "),
                    children: (0, t.jsx)(m.Code, { code: a, language: s }),
                });
            };
            var b = a(45677);
            let h = (e) => {
                let { links: l, richText: a } = e;
                return (0, t.jsx)("div", {
                    className: "container",
                    children: (0, t.jsxs)("div", {
                        className:
                            "bg-card rounded border-border border p-4 flex flex-col gap-8 md:flex-row md:justify-between md:items-center",
                        children: [
                            (0, t.jsx)("div", {
                                className: "max-w-[48rem] flex items-center",
                                children: a && (0, t.jsx)(g, { className: "mb-0", data: a, enableGutter: !1 }),
                            }),
                            (0, t.jsx)("div", {
                                className: "flex flex-col gap-8",
                                children: (l || []).map((e, l) => {
                                    let { link: a } = e;
                                    return (0, t.jsx)(b.A, { size: "lg", ...a }, l);
                                }),
                            }),
                        ],
                    }),
                });
            },
                v = (e) => {
                    let { linkNode: l } = e,
                        { value: a, relationTo: t } = l.fields.doc;
                    if ("object" != typeof a) throw Error("Expected value to be an object");
                    let s = a.slug;
                    return "posts" === t ? "/posts/".concat(s) : "/".concat(s);
                },
                f = (e) => {
                    let { defaultConverters: l } = e;
                    return {
                        ...l,
                        ...(0, d.A)({ internalDocToHref: v }),
                        blocks: {
                            mediaBlock: (e) => {
                                let { node: l } = e;
                                return (0, t.jsx)(c, {
                                    className: "col-start-1 col-span-3",
                                    imgClassName: "m-0",
                                    ...l.fields,
                                    captionClassName: "mx-auto max-w-[48rem]",
                                    enableGutter: !1,
                                    disableInnerContainer: !0,
                                });
                            },
                            code: (e) => {
                                let { node: l } = e;
                                return (0, t.jsx)(x, { className: "col-start-2", ...l.fields });
                            },
                            cta: (e) => {
                                let { node: l } = e;
                                return (0, t.jsx)(h, { ...l.fields });
                            },
                        },
                    };
                };
            function g(e) {
                let { className: l, enableProse: a = !0, enableGutter: s = !0, ...r } = e;
                return (0, t.jsx)(u.s, {
                    converters: f,
                    className: (0, i.cn)(
                        "payload-richtext",
                        { container: s, "max-w-none": !s, "mx-auto prose md:prose-md dark:prose-invert": a },
                        l
                    ),
                    ...r,
                });
            }
            var p = a(75165),
                w = a(48642),
                j = a(27857);
            let y = (e) => {
                let { className: l, ref: a, ...s } = e;
                return (0, t.jsx)(w.bL, {
                    className: (0, i.cn)(
                        "peer h-4 w-4 shrink-0 rounded border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
                        l
                    ),
                    ref: a,
                    ...s,
                    children: (0, t.jsx)(w.C1, {
                        className: (0, i.cn)("flex items-center justify-center text-current"),
                        children: (0, t.jsx)(j.A, { className: "h-4 w-4" }),
                    }),
                });
            };
            var N = a(28125);
            let A = (0, a(63804).F)(
                "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            ),
                k = (e) => {
                    let { className: l, ref: a, ...s } = e;
                    return (0, t.jsx)(N.b, { className: (0, i.cn)(A(), l), ref: a, ...s });
                },
                C = (e) => {
                    var l;
                    let { name: a } = e,
                        {
                            formState: { errors: s },
                        } = (0, n.xW)();
                    return (0, t.jsx)("div", {
                        className: "mt-2 text-red-500 text-sm",
                        children: (null == (l = s[a]) ? void 0 : l.message) || "This field is required",
                    });
                },
                M = (e) => {
                    let { children: l, className: a, width: s } = e;
                    return (0, t.jsx)("div", {
                        className: a,
                        style: { maxWidth: s ? "".concat(s, "%") : void 0 },
                        children: l,
                    });
                };
            var z = a(34363),
                S = a(58189),
                T = a(5456);
            let I = z.bL;
            z.YJ;
            let E = z.WT,
                B = (e) => {
                    let { children: l, className: a, ref: s, ...r } = e;
                    return (0, t.jsxs)(z.l9, {
                        className: (0, i.cn)(
                            "flex h-10 w-full items-center justify-between rounded border border-input bg-background px-3 py-2 text-inherit ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
                            a
                        ),
                        ref: s,
                        ...r,
                        children: [
                            l,
                            (0, t.jsx)(z.In, {
                                asChild: !0,
                                children: (0, t.jsx)(S.A, { className: "h-4 w-4 opacity-50" }),
                            }),
                        ],
                    });
                },
                P = (e) => {
                    let { className: l, ref: a, ...s } = e;
                    return (0, t.jsx)(z.PP, {
                        className: (0, i.cn)("flex cursor-default items-center justify-center py-1", l),
                        ref: a,
                        ...s,
                        children: (0, t.jsx)(T.A, { className: "h-4 w-4" }),
                    });
                },
                R = (e) => {
                    let { className: l, ref: a, ...s } = e;
                    return (0, t.jsx)(z.wn, {
                        className: (0, i.cn)("flex cursor-default items-center justify-center py-1", l),
                        ref: a,
                        ...s,
                        children: (0, t.jsx)(S.A, { className: "h-4 w-4" }),
                    });
                },
                L = (e) => {
                    let { children: l, className: a, position: s = "popper", ref: r, ...n } = e;
                    return (0, t.jsx)(z.ZL, {
                        children: (0, t.jsxs)(z.UC, {
                            className: (0, i.cn)(
                                "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded border bg-card text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                                "popper" === s &&
                                "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
                                a
                            ),
                            position: s,
                            ref: r,
                            ...n,
                            children: [
                                (0, t.jsx)(P, {}),
                                (0, t.jsx)(z.LM, {
                                    className: (0, i.cn)(
                                        "p-1",
                                        "popper" === s &&
                                        "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
                                    ),
                                    children: l,
                                }),
                                (0, t.jsx)(R, {}),
                            ],
                        }),
                    });
                },
                D = (e) => {
                    let { children: l, className: a, ref: s, ...r } = e;
                    return (0, t.jsxs)(z.q7, {
                        className: (0, i.cn)(
                            "relative flex w-full cursor-default select-none items-center rounded py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                            a
                        ),
                        ref: s,
                        ...r,
                        children: [
                            (0, t.jsx)("span", {
                                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                                children: (0, t.jsx)(z.VF, { children: (0, t.jsx)(j.A, { className: "h-4 w-4" }) }),
                            }),
                            (0, t.jsx)(z.p4, { children: l }),
                        ],
                    });
                },
                F = [
                    { label: "Afghanistan", value: "AF" },
                    { label: "\xc5land Islands", value: "AX" },
                    { label: "Albania", value: "AL" },
                    { label: "Algeria", value: "DZ" },
                    { label: "American Samoa", value: "AS" },
                    { label: "Andorra", value: "AD" },
                    { label: "Angola", value: "AO" },
                    { label: "Anguilla", value: "AI" },
                    { label: "Antarctica", value: "AQ" },
                    { label: "Antigua and Barbuda", value: "AG" },
                    { label: "Argentina", value: "AR" },
                    { label: "Armenia", value: "AM" },
                    { label: "Aruba", value: "AW" },
                    { label: "Australia", value: "AU" },
                    { label: "Austria", value: "AT" },
                    { label: "Azerbaijan", value: "AZ" },
                    { label: "Bahamas", value: "BS" },
                    { label: "Bahrain", value: "BH" },
                    { label: "Bangladesh", value: "BD" },
                    { label: "Barbados", value: "BB" },
                    { label: "Belarus", value: "BY" },
                    { label: "Belgium", value: "BE" },
                    { label: "Belize", value: "BZ" },
                    { label: "Benin", value: "BJ" },
                    { label: "Bermuda", value: "BM" },
                    { label: "Bhutan", value: "BT" },
                    { label: "Bolivia", value: "BO" },
                    { label: "Bosnia and Herzegovina", value: "BA" },
                    { label: "Botswana", value: "BW" },
                    { label: "Bouvet Island", value: "BV" },
                    { label: "Brazil", value: "BR" },
                    { label: "British Indian Ocean Territory", value: "IO" },
                    { label: "Brunei Darussalam", value: "BN" },
                    { label: "Bulgaria", value: "BG" },
                    { label: "Burkina Faso", value: "BF" },
                    { label: "Burundi", value: "BI" },
                    { label: "Cambodia", value: "KH" },
                    { label: "Cameroon", value: "CM" },
                    { label: "Canada", value: "CA" },
                    { label: "Cape Verde", value: "CV" },
                    { label: "Cayman Islands", value: "KY" },
                    { label: "Central African Republic", value: "CF" },
                    { label: "Chad", value: "TD" },
                    { label: "Chile", value: "CL" },
                    { label: "China", value: "CN" },
                    { label: "Christmas Island", value: "CX" },
                    { label: "Cocos (Keeling) Islands", value: "CC" },
                    { label: "Colombia", value: "CO" },
                    { label: "Comoros", value: "KM" },
                    { label: "Congo", value: "CG" },
                    { label: "Congo, The Democratic Republic of the", value: "CD" },
                    { label: "Cook Islands", value: "CK" },
                    { label: "Costa Rica", value: "CR" },
                    { label: "Cote D'Ivoire", value: "CI" },
                    { label: "Croatia", value: "HR" },
                    { label: "Cuba", value: "CU" },
                    { label: "Cyprus", value: "CY" },
                    { label: "Czech Republic", value: "CZ" },
                    { label: "Denmark", value: "DK" },
                    { label: "Djibouti", value: "DJ" },
                    { label: "Dominica", value: "DM" },
                    { label: "Dominican Republic", value: "DO" },
                    { label: "Ecuador", value: "EC" },
                    { label: "Egypt", value: "EG" },
                    { label: "El Salvador", value: "SV" },
                    { label: "Equatorial Guinea", value: "GQ" },
                    { label: "Eritrea", value: "ER" },
                    { label: "Estonia", value: "EE" },
                    { label: "Ethiopia", value: "ET" },
                    { label: "Falkland Islands (Malvinas)", value: "FK" },
                    { label: "Faroe Islands", value: "FO" },
                    { label: "Fiji", value: "FJ" },
                    { label: "Finland", value: "FI" },
                    { label: "France", value: "FR" },
                    { label: "French Guiana", value: "GF" },
                    { label: "French Polynesia", value: "PF" },
                    { label: "French Southern Territories", value: "TF" },
                    { label: "Gabon", value: "GA" },
                    { label: "Gambia", value: "GM" },
                    { label: "Georgia", value: "GE" },
                    { label: "Germany", value: "DE" },
                    { label: "Ghana", value: "GH" },
                    { label: "Gibraltar", value: "GI" },
                    { label: "Greece", value: "GR" },
                    { label: "Greenland", value: "GL" },
                    { label: "Grenada", value: "GD" },
                    { label: "Guadeloupe", value: "GP" },
                    { label: "Guam", value: "GU" },
                    { label: "Guatemala", value: "GT" },
                    { label: "Guernsey", value: "GG" },
                    { label: "Guinea", value: "GN" },
                    { label: "Guinea-Bissau", value: "GW" },
                    { label: "Guyana", value: "GY" },
                    { label: "Haiti", value: "HT" },
                    { label: "Heard Island and Mcdonald Islands", value: "HM" },
                    { label: "Holy See (Vatican City State)", value: "VA" },
                    { label: "Honduras", value: "HN" },
                    { label: "Hong Kong", value: "HK" },
                    { label: "Hungary", value: "HU" },
                    { label: "Iceland", value: "IS" },
                    { label: "India", value: "IN" },
                    { label: "Indonesia", value: "ID" },
                    { label: "Iran, Islamic Republic Of", value: "IR" },
                    { label: "Iraq", value: "IQ" },
                    { label: "Ireland", value: "IE" },
                    { label: "Isle of Man", value: "IM" },
                    { label: "Israel", value: "IL" },
                    { label: "Italy", value: "IT" },
                    { label: "Jamaica", value: "JM" },
                    { label: "Japan", value: "JP" },
                    { label: "Jersey", value: "JE" },
                    { label: "Jordan", value: "JO" },
                    { label: "Kazakhstan", value: "KZ" },
                    { label: "Kenya", value: "KE" },
                    { label: "Kiribati", value: "KI" },
                    { label: "Democratic People's Republic of Korea", value: "KP" },
                    { label: "Korea, Republic of", value: "KR" },
                    { label: "Kosovo", value: "XK" },
                    { label: "Kuwait", value: "KW" },
                    { label: "Kyrgyzstan", value: "KG" },
                    { label: "Lao People's Democratic Republic", value: "LA" },
                    { label: "Latvia", value: "LV" },
                    { label: "Lebanon", value: "LB" },
                    { label: "Lesotho", value: "LS" },
                    { label: "Liberia", value: "LR" },
                    { label: "Libyan Arab Jamahiriya", value: "LY" },
                    { label: "Liechtenstein", value: "LI" },
                    { label: "Lithuania", value: "LT" },
                    { label: "Luxembourg", value: "LU" },
                    { label: "Macao", value: "MO" },
                    { label: "Macedonia, The Former Yugoslav Republic of", value: "MK" },
                    { label: "Madagascar", value: "MG" },
                    { label: "Malawi", value: "MW" },
                    { label: "Malaysia", value: "MY" },
                    { label: "Maldives", value: "MV" },
                    { label: "Mali", value: "ML" },
                    { label: "Malta", value: "MT" },
                    { label: "Marshall Islands", value: "MH" },
                    { label: "Martinique", value: "MQ" },
                    { label: "Mauritania", value: "MR" },
                    { label: "Mauritius", value: "MU" },
                    { label: "Mayotte", value: "YT" },
                    { label: "Mexico", value: "MX" },
                    { label: "Micronesia, Federated States of", value: "FM" },
                    { label: "Moldova, Republic of", value: "MD" },
                    { label: "Monaco", value: "MC" },
                    { label: "Mongolia", value: "MN" },
                    { label: "Montenegro", value: "ME" },
                    { label: "Montserrat", value: "MS" },
                    { label: "Morocco", value: "MA" },
                    { label: "Mozambique", value: "MZ" },
                    { label: "Myanmar", value: "MM" },
                    { label: "Namibia", value: "NA" },
                    { label: "Nauru", value: "NR" },
                    { label: "Nepal", value: "NP" },
                    { label: "Netherlands", value: "NL" },
                    { label: "Netherlands Antilles", value: "AN" },
                    { label: "New Caledonia", value: "NC" },
                    { label: "New Zealand", value: "NZ" },
                    { label: "Nicaragua", value: "NI" },
                    { label: "Niger", value: "NE" },
                    { label: "Nigeria", value: "NG" },
                    { label: "Niue", value: "NU" },
                    { label: "Norfolk Island", value: "NF" },
                    { label: "Northern Mariana Islands", value: "MP" },
                    { label: "Norway", value: "NO" },
                    { label: "Oman", value: "OM" },
                    { label: "Pakistan", value: "PK" },
                    { label: "Palau", value: "PW" },
                    { label: "Palestinian Territory, Occupied", value: "PS" },
                    { label: "Panama", value: "PA" },
                    { label: "Papua New Guinea", value: "PG" },
                    { label: "Paraguay", value: "PY" },
                    { label: "Peru", value: "PE" },
                    { label: "Philippines", value: "PH" },
                    { label: "Pitcairn", value: "PN" },
                    { label: "Poland", value: "PL" },
                    { label: "Portugal", value: "PT" },
                    { label: "Puerto Rico", value: "PR" },
                    { label: "Qatar", value: "QA" },
                    { label: "Reunion", value: "RE" },
                    { label: "Romania", value: "RO" },
                    { label: "Russian Federation", value: "RU" },
                    { label: "Rwanda", value: "RW" },
                    { label: "Saint Helena", value: "SH" },
                    { label: "Saint Kitts and Nevis", value: "KN" },
                    { label: "Saint Lucia", value: "LC" },
                    { label: "Saint Pierre and Miquelon", value: "PM" },
                    { label: "Saint Vincent and the Grenadines", value: "VC" },
                    { label: "Samoa", value: "WS" },
                    { label: "San Marino", value: "SM" },
                    { label: "Sao Tome and Principe", value: "ST" },
                    { label: "Saudi Arabia", value: "SA" },
                    { label: "Senegal", value: "SN" },
                    { label: "Serbia", value: "RS" },
                    { label: "Seychelles", value: "SC" },
                    { label: "Sierra Leone", value: "SL" },
                    { label: "Singapore", value: "SG" },
                    { label: "Slovakia", value: "SK" },
                    { label: "Slovenia", value: "SI" },
                    { label: "Solomon Islands", value: "SB" },
                    { label: "Somalia", value: "SO" },
                    { label: "South Africa", value: "ZA" },
                    { label: "South Georgia and the South Sandwich Islands", value: "GS" },
                    { label: "Spain", value: "ES" },
                    { label: "Sri Lanka", value: "LK" },
                    { label: "Sudan", value: "SD" },
                    { label: "Suriname", value: "SR" },
                    { label: "Svalbard and Jan Mayen", value: "SJ" },
                    { label: "Swaziland", value: "SZ" },
                    { label: "Sweden", value: "SE" },
                    { label: "Switzerland", value: "CH" },
                    { label: "Syrian Arab Republic", value: "SY" },
                    { label: "Taiwan", value: "TW" },
                    { label: "Tajikistan", value: "TJ" },
                    { label: "Tanzania, United Republic of", value: "TZ" },
                    { label: "Thailand", value: "TH" },
                    { label: "Timor-Leste", value: "TL" },
                    { label: "Togo", value: "TG" },
                    { label: "Tokelau", value: "TK" },
                    { label: "Tonga", value: "TO" },
                    { label: "Trinidad and Tobago", value: "TT" },
                    { label: "Tunisia", value: "TN" },
                    { label: "Turkey", value: "TR" },
                    { label: "Turkmenistan", value: "TM" },
                    { label: "Turks and Caicos Islands", value: "TC" },
                    { label: "Tuvalu", value: "TV" },
                    { label: "Uganda", value: "UG" },
                    { label: "Ukraine", value: "UA" },
                    { label: "United Arab Emirates", value: "AE" },
                    { label: "United Kingdom", value: "GB" },
                    { label: "United States", value: "US" },
                    { label: "United States Minor Outlying Islands", value: "UM" },
                    { label: "Uruguay", value: "UY" },
                    { label: "Uzbekistan", value: "UZ" },
                    { label: "Vanuatu", value: "VU" },
                    { label: "Venezuela", value: "VE" },
                    { label: "Viet Nam", value: "VN" },
                    { label: "Virgin Islands, British", value: "VG" },
                    { label: "Virgin Islands, U.S.", value: "VI" },
                    { label: "Wallis and Futuna", value: "WF" },
                    { label: "Western Sahara", value: "EH" },
                    { label: "Yemen", value: "YE" },
                    { label: "Zambia", value: "ZM" },
                    { label: "Zimbabwe", value: "ZW" },
                ],
                G = (e) => {
                    let { type: l, className: a, ref: s, ...r } = e;
                    return (0, t.jsx)("input", {
                        className: (0, i.cn)(
                            "flex h-10 w-full rounded border border-border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                            a
                        ),
                        ref: s,
                        type: l,
                        ...r,
                    });
                },
                q = [
                    { label: "Alabama", value: "AL" },
                    { label: "Alaska", value: "AK" },
                    { label: "Arizona", value: "AZ" },
                    { label: "Arkansas", value: "AR" },
                    { label: "California", value: "CA" },
                    { label: "Colorado", value: "CO" },
                    { label: "Connecticut", value: "CT" },
                    { label: "Delaware", value: "DE" },
                    { label: "Florida", value: "FL" },
                    { label: "Georgia", value: "GA" },
                    { label: "Hawaii", value: "HI" },
                    { label: "Idaho", value: "ID" },
                    { label: "Illinois", value: "IL" },
                    { label: "Indiana", value: "IN" },
                    { label: "Iowa", value: "IA" },
                    { label: "Kansas", value: "KS" },
                    { label: "Kentucky", value: "KY" },
                    { label: "Louisiana", value: "LA" },
                    { label: "Maine", value: "ME" },
                    { label: "Maryland", value: "MD" },
                    { label: "Massachusetts", value: "MA" },
                    { label: "Michigan", value: "MI" },
                    { label: "Minnesota", value: "MN" },
                    { label: "Mississippi", value: "MS" },
                    { label: "Missouri", value: "MO" },
                    { label: "Montana", value: "MT" },
                    { label: "Nebraska", value: "NE" },
                    { label: "Nevada", value: "NV" },
                    { label: "New Hampshire", value: "NH" },
                    { label: "New Jersey", value: "NJ" },
                    { label: "New Mexico", value: "NM" },
                    { label: "New York", value: "NY" },
                    { label: "North Carolina", value: "NC" },
                    { label: "North Dakota", value: "ND" },
                    { label: "Ohio", value: "OH" },
                    { label: "Oklahoma", value: "OK" },
                    { label: "Oregon", value: "OR" },
                    { label: "Pennsylvania", value: "PA" },
                    { label: "Rhode Island", value: "RI" },
                    { label: "South Carolina", value: "SC" },
                    { label: "South Dakota", value: "SD" },
                    { label: "Tennessee", value: "TN" },
                    { label: "Texas", value: "TX" },
                    { label: "Utah", value: "UT" },
                    { label: "Vermont", value: "VT" },
                    { label: "Virginia", value: "VA" },
                    { label: "Washington", value: "WA" },
                    { label: "West Virginia", value: "WV" },
                    { label: "Wisconsin", value: "WI" },
                    { label: "Wyoming", value: "WY" },
                ],
                O = (e) => {
                    let { className: l, ref: a, ...s } = e;
                    return (0, t.jsx)("textarea", {
                        className: (0, i.cn)(
                            "flex min-h-[80px] w-full rounded border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                            l
                        ),
                        ref: a,
                        ...s,
                    });
                },
                U = {
                    checkbox: (e) => {
                        let { name: l, defaultValue: a, errors: s, label: r, register: i, required: o, width: c } = e,
                            d = i(l, { required: o }),
                            { setValue: u } = (0, n.xW)();
                        return (0, t.jsxs)(M, {
                            width: c,
                            children: [
                                (0, t.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        (0, t.jsx)(y, {
                                            defaultChecked: a,
                                            id: l,
                                            ...d,
                                            onCheckedChange: (e) => {
                                                u(d.name, e);
                                            },
                                        }),
                                        (0, t.jsxs)(k, {
                                            htmlFor: l,
                                            children: [
                                                o &&
                                                (0, t.jsxs)("span", {
                                                    className: "required",
                                                    children: [
                                                        "* ",
                                                        (0, t.jsx)("span", {
                                                            className: "sr-only",
                                                            children: "(required)",
                                                        }),
                                                    ],
                                                }),
                                                r,
                                            ],
                                        }),
                                    ],
                                }),
                                s[l] && (0, t.jsx)(C, { name: l }),
                            ],
                        });
                    },
                    country: (e) => {
                        let { name: l, control: a, errors: s, label: r, required: i, width: o } = e;
                        return (0, t.jsxs)(M, {
                            width: o,
                            children: [
                                (0, t.jsxs)(k, {
                                    className: "",
                                    htmlFor: l,
                                    children: [
                                        r,
                                        i &&
                                        (0, t.jsxs)("span", {
                                            className: "required",
                                            children: [
                                                "* ",
                                                (0, t.jsx)("span", {
                                                    className: "sr-only",
                                                    children: "(required)",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, t.jsx)(n.xI, {
                                    control: a,
                                    defaultValue: "",
                                    name: l,
                                    render: (e) => {
                                        let {
                                            field: { onChange: a, value: s },
                                        } = e,
                                            n = F.find((e) => e.value === s);
                                        return (0, t.jsxs)(I, {
                                            onValueChange: (e) => a(e),
                                            value: null == n ? void 0 : n.value,
                                            children: [
                                                (0, t.jsx)(B, {
                                                    className: "w-full",
                                                    id: l,
                                                    children: (0, t.jsx)(E, { placeholder: r }),
                                                }),
                                                (0, t.jsx)(L, {
                                                    children: F.map((e) => {
                                                        let { label: l, value: a } = e;
                                                        return (0, t.jsx)(D, { value: a, children: l }, a);
                                                    }),
                                                }),
                                            ],
                                        });
                                    },
                                    rules: { required: i },
                                }),
                                s[l] && (0, t.jsx)(C, { name: l }),
                            ],
                        });
                    },
                    email: (e) => {
                        let { name: l, defaultValue: a, errors: s, label: r, register: n, required: i, width: o } = e;
                        return (0, t.jsxs)(M, {
                            width: o,
                            children: [
                                (0, t.jsxs)(k, {
                                    htmlFor: l,
                                    children: [
                                        r,
                                        i &&
                                        (0, t.jsxs)("span", {
                                            className: "required",
                                            children: [
                                                "* ",
                                                (0, t.jsx)("span", {
                                                    className: "sr-only",
                                                    children: "(required)",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, t.jsx)(G, {
                                    defaultValue: a,
                                    id: l,
                                    type: "text",
                                    ...n(l, { pattern: /^\S[^\s@]*@\S+$/, required: i }),
                                }),
                                s[l] && (0, t.jsx)(C, { name: l }),
                            ],
                        });
                    },
                    message: (e) => {
                        let { message: l } = e;
                        return (0, t.jsx)(M, {
                            className: "my-12",
                            width: "100",
                            children: l && (0, t.jsx)(g, { data: l }),
                        });
                    },
                    number: (e) => {
                        let { name: l, defaultValue: a, errors: s, label: r, register: n, required: i, width: o } = e;
                        return (0, t.jsxs)(M, {
                            width: o,
                            children: [
                                (0, t.jsxs)(k, {
                                    htmlFor: l,
                                    children: [
                                        r,
                                        i &&
                                        (0, t.jsxs)("span", {
                                            className: "required",
                                            children: [
                                                "* ",
                                                (0, t.jsx)("span", {
                                                    className: "sr-only",
                                                    children: "(required)",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, t.jsx)(G, { defaultValue: a, id: l, type: "number", ...n(l, { required: i }) }),
                                s[l] && (0, t.jsx)(C, { name: l }),
                            ],
                        });
                    },
                    select: (e) => {
                        let {
                            name: l,
                            control: a,
                            errors: s,
                            label: r,
                            options: i,
                            required: o,
                            width: c,
                            defaultValue: d,
                        } = e;
                        return (0, t.jsxs)(M, {
                            width: c,
                            children: [
                                (0, t.jsxs)(k, {
                                    htmlFor: l,
                                    children: [
                                        r,
                                        o &&
                                        (0, t.jsxs)("span", {
                                            className: "required",
                                            children: [
                                                "* ",
                                                (0, t.jsx)("span", {
                                                    className: "sr-only",
                                                    children: "(required)",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, t.jsx)(n.xI, {
                                    control: a,
                                    defaultValue: d,
                                    name: l,
                                    render: (e) => {
                                        let {
                                            field: { onChange: a, value: s },
                                        } = e,
                                            n = i.find((e) => e.value === s);
                                        return (0, t.jsxs)(I, {
                                            onValueChange: (e) => a(e),
                                            value: null == n ? void 0 : n.value,
                                            children: [
                                                (0, t.jsx)(B, {
                                                    className: "w-full",
                                                    id: l,
                                                    children: (0, t.jsx)(E, { placeholder: r }),
                                                }),
                                                (0, t.jsx)(L, {
                                                    children: i.map((e) => {
                                                        let { label: l, value: a } = e;
                                                        return (0, t.jsx)(D, { value: a, children: l }, a);
                                                    }),
                                                }),
                                            ],
                                        });
                                    },
                                    rules: { required: o },
                                }),
                                s[l] && (0, t.jsx)(C, { name: l }),
                            ],
                        });
                    },
                    state: (e) => {
                        let { name: l, control: a, errors: s, label: r, required: i, width: o } = e;
                        return (0, t.jsxs)(M, {
                            width: o,
                            children: [
                                (0, t.jsxs)(k, {
                                    htmlFor: l,
                                    children: [
                                        r,
                                        i &&
                                        (0, t.jsxs)("span", {
                                            className: "required",
                                            children: [
                                                "* ",
                                                (0, t.jsx)("span", {
                                                    className: "sr-only",
                                                    children: "(required)",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, t.jsx)(n.xI, {
                                    control: a,
                                    defaultValue: "",
                                    name: l,
                                    render: (e) => {
                                        let {
                                            field: { onChange: a, value: s },
                                        } = e,
                                            n = q.find((e) => e.value === s);
                                        return (0, t.jsxs)(I, {
                                            onValueChange: (e) => a(e),
                                            value: null == n ? void 0 : n.value,
                                            children: [
                                                (0, t.jsx)(B, {
                                                    className: "w-full",
                                                    id: l,
                                                    children: (0, t.jsx)(E, { placeholder: r }),
                                                }),
                                                (0, t.jsx)(L, {
                                                    children: q.map((e) => {
                                                        let { label: l, value: a } = e;
                                                        return (0, t.jsx)(D, { value: a, children: l }, a);
                                                    }),
                                                }),
                                            ],
                                        });
                                    },
                                    rules: { required: i },
                                }),
                                s[l] && (0, t.jsx)(C, { name: l }),
                            ],
                        });
                    },
                    text: (e) => {
                        let { name: l, defaultValue: a, errors: s, label: r, register: n, required: i, width: o } = e;
                        return (0, t.jsxs)(M, {
                            width: o,
                            children: [
                                (0, t.jsxs)(k, {
                                    htmlFor: l,
                                    children: [
                                        r,
                                        i &&
                                        (0, t.jsxs)("span", {
                                            className: "required",
                                            children: [
                                                "* ",
                                                (0, t.jsx)("span", {
                                                    className: "sr-only",
                                                    children: "(required)",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, t.jsx)(G, { defaultValue: a, id: l, type: "text", ...n(l, { required: i }) }),
                                s[l] && (0, t.jsx)(C, { name: l }),
                            ],
                        });
                    },
                    textarea: (e) => {
                        let {
                            name: l,
                            defaultValue: a,
                            errors: s,
                            label: r,
                            register: n,
                            required: i,
                            rows: o = 3,
                            width: c,
                        } = e;
                        return (0, t.jsxs)(M, {
                            width: c,
                            children: [
                                (0, t.jsxs)(k, {
                                    htmlFor: l,
                                    children: [
                                        r,
                                        i &&
                                        (0, t.jsxs)("span", {
                                            className: "required",
                                            children: [
                                                "* ",
                                                (0, t.jsx)("span", {
                                                    className: "sr-only",
                                                    children: "(required)",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, t.jsx)(O, { defaultValue: a, id: l, rows: o, ...n(l, { required: i }) }),
                                s[l] && (0, t.jsx)(C, { name: l }),
                            ],
                        });
                    },
                };
            var K = a(90652);
            let H = (e) => {
                var l;
                let {
                    enableIntro: a,
                    form: i,
                    form: {
                        id: o,
                        confirmationMessage: c,
                        confirmationType: d,
                        redirect: u,
                        submitButtonLabel: m,
                    } = {},
                    introContent: x,
                } = e,
                    b = (0, n.mN)({ defaultValues: i.fields }),
                    {
                        control: h,
                        formState: { errors: v },
                        handleSubmit: f,
                        register: w,
                    } = b,
                    [j, y] = (0, r.useState)(!1),
                    [N, A] = (0, r.useState)(),
                    [k, C] = (0, r.useState)(),
                    M = (0, s.useRouter)(),
                    z = (0, r.useCallback)(
                        (e) => {
                            let l;
                            (async () => {
                                C(void 0);
                                let a = Object.entries(e).map((e) => {
                                    let [l, a] = e;
                                    return { field: l, value: a };
                                });
                                l = setTimeout(() => {
                                    y(!0);
                                }, 1e3);
                                try {
                                    let e = await fetch("".concat((0, K.y)(), "/api/form-submissions"), {
                                        body: JSON.stringify({ form: o, submissionData: a }),
                                        headers: { "Content-Type": "application/json" },
                                        method: "POST",
                                    }),
                                        r = await e.json();
                                    if ((clearTimeout(l), e.status >= 400)) {
                                        var t, s;
                                        y(!1),
                                            C({
                                                message:
                                                    (null == (s = r.errors) || null == (t = s[0])
                                                        ? void 0
                                                        : t.message) || "Internal Server Error",
                                                status: r.status,
                                            });
                                        return;
                                    }
                                    if ((y(!1), A(!0), "redirect" === d && u)) {
                                        let { url: e } = u;
                                        e && M.push(e);
                                    }
                                } catch (e) {
                                    console.warn(e), y(!1), C({ message: "Something went wrong." });
                                }
                            })();
                        },
                        [M, o, u, d]
                    );
                return (0, t.jsxs)("div", {
                    className: "container lg:max-w-[48rem]",
                    children: [
                        a && x && !N && (0, t.jsx)(g, { className: "mb-8 lg:mb-12", data: x, enableGutter: !1 }),
                        (0, t.jsx)("div", {
                            className: "p-4 lg:p-6 border border-border rounded-[0.8rem]",
                            children: (0, t.jsxs)(n.Op, {
                                ...b,
                                children: [
                                    !j && N && "message" === d && (0, t.jsx)(g, { data: c }),
                                    j && !N && (0, t.jsx)("p", { children: "Loading, please wait..." }),
                                    k &&
                                    (0, t.jsx)("div", {
                                        children: "".concat(k.status || "500", ": ").concat(k.message || ""),
                                    }),
                                    !N &&
                                    (0, t.jsxs)("form", {
                                        id: o,
                                        onSubmit: f(z),
                                        children: [
                                            (0, t.jsx)("div", {
                                                className: "mb-4 last:mb-0",
                                                children:
                                                    i &&
                                                    i.fields &&
                                                    (null == (l = i.fields)
                                                        ? void 0
                                                        : l.map((e, l) => {
                                                            let a = null == U ? void 0 : U[e.blockType];
                                                            return a
                                                                ? (0, t.jsx)(
                                                                    "div",
                                                                    {
                                                                        className: "mb-6 last:mb-0",
                                                                        children: (0, t.jsx)(a, {
                                                                            form: i,
                                                                            ...e,
                                                                            ...b,
                                                                            control: h,
                                                                            errors: v,
                                                                            register: w,
                                                                        }),
                                                                    },
                                                                    l
                                                                )
                                                                : null;
                                                        })),
                                            }),
                                            (0, t.jsx)(p.Button, {
                                                form: o,
                                                type: "submit",
                                                variant: "default",
                                                children: m,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    ],
                });
            };
        },
        98768: (e, l, a) => {
            "use strict";
            a.d(l, { HighImpactHero: () => x });
            var t = a(32689),
                s = a(19893),
                r = a(45677),
                n = a(94005),
                i = a(50494),
                o = a(39268),
                c = a(27117),
                d = a(17902),
                u = a(4228);
            a(58528), o.Ay.registerPlugin(i.L, c.A, d.u, u.A), c.A.create("hop", "0.9, 0, 0.1, 1");
            let m = [
                { id: 1, firstDigit: "0", secondDigit: "0" },
                { id: 3, firstDigit: "5", secondDigit: "6" },
                { id: 4, firstDigit: "7", secondDigit: "8" },
                { id: 5, firstDigit: "9", secondDigit: "9" },
            ],
                x = (e) => {
                    var l, a, c, x, b;
                    let { title: h, description: v, mediumBoxText: f, smallBoxText: g, media: p, link: w } = e,
                        j = (0, s.useRef)(null),
                        y = (0, s.useRef)(null),
                        [N, A] = (0, s.useState)(!1);
                    return (
                        (0, s.useEffect)(() => {
                            (document.body.style.overflow = "hidden"),
                                (document.body.style.position = "fixed"),
                                (document.body.style.top = "0");
                        }, []),
                        (0, i.L)(
                            () => {
                                if (!N) return;
                                let e = document.querySelectorAll(".count"),
                                    l = document.querySelector(".progress-bar"),
                                    a = document.querySelectorAll(".block"),
                                    t = document.querySelector(".overlay"),
                                    s = document.getElementById("header"),
                                    r = o.Ay.matchMedia(),
                                    n = o.Ay.timeline({ delay: 0.3, defaults: { ease: "hop" } });
                                o.Ay.set(s, { opacity: 0 });
                                let i = o.Ay.timeline({ delay: 0.3 }),
                                    c = u.A.create(".title-p1", {
                                        type: "lines",
                                        mask: "lines",
                                        linesClass: "line++",
                                        lineThreshold: 0.1,
                                        autoSplit: !0,
                                    }),
                                    m = u.A.create(".title-p2", {
                                        type: "lines",
                                        mask: "lines",
                                        linesClass: "line++",
                                        lineThreshold: 0.1,
                                        autoSplit: !0,
                                    }),
                                    x = u.A.create(".description-content", {
                                        type: "lines",
                                        mask: "lines",
                                        linesClass: "line++",
                                        lineThreshold: 0.1,
                                        autoSplit: !0,
                                    });
                                o.Ay.set(c.lines, { y: "100%" }),
                                    o.Ay.set(m.lines, { y: "100%" }),
                                    o.Ay.set(x.lines, { y: "100%" });
                                let b = { y: "0%", duration: 0.9, stagger: 0.1, ease: "power4.out" };
                                e.forEach((a, t) => {
                                    let s = a.querySelectorAll(".digit p");
                                    n.to(s, { y: "0%", duration: 1, stagger: 0.075 }, +t),
                                        t < e.length && n.to(s, { y: "-120%", duration: 1, stagger: 0.075 }, +t + 1),
                                        i.to(l, { scaleY: (t + 1) / e.length, duration: 1, ease: "hop" }, +t);
                                }),
                                    i
                                        .set(l, { transformOrigin: "top" })
                                        .to(l, { scaleY: 0, duration: 0.75, ease: "hop" }),
                                    n.to(
                                        a,
                                        {
                                            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                                            duration: 1,
                                            stagger: 0.1,
                                            delay: 0.5,
                                            onComplete: () => {
                                                o.Ay.to(t, { display: "none", zIndex: -20, y: "-100%" }),
                                                    r.add("(max-width: 768px)", () => {
                                                        (document.body.style.overflow = "auto"),
                                                            (document.body.style.position = "relative"),
                                                            (document.body.style.top = "auto"),
                                                            o.Ay.to(c.lines, b),
                                                            o.Ay.to(m.lines, { ...b, delay: 0.1 }),
                                                            o.Ay.to(x.lines, { ...b, delay: 0.2 }),
                                                            o.Ay.to(s, {
                                                                opacity: 1,
                                                                duration: 1,
                                                                delay: 0.2,
                                                                ease: "power4.out",
                                                            }),
                                                            o.Ay.to(".hero-cta-container", {
                                                                opacity: 1,
                                                                duration: 1,
                                                                delay: 0.25,
                                                                ease: "power4.out",
                                                            });
                                                    });
                                            },
                                        },
                                        "<"
                                    ),
                                    n.to(".small-box-text", { opacity: 1, duration: 1, ease: "power4.out" }),
                                    r.add("(min-width: 768px)", () => {
                                        n.to(".small-box", { scale: 0.43, duration: 1.25, ease: "power4.out" }).to(
                                            ".medium-box",
                                            {
                                                scale: 0.58,
                                                x: "5vw",
                                                duration: 1,
                                                ease: "power4.out",
                                                onComplete: () => {
                                                    (document.body.style.overflow = "auto"),
                                                        (document.body.style.position = "relative"),
                                                        (document.body.style.top = "auto"),
                                                        o.Ay.to(c.lines, b),
                                                        o.Ay.to(m.lines, { ...b, delay: 0.1 }),
                                                        o.Ay.to(x.lines, { ...b, delay: 0.2 }),
                                                        o.Ay.to(s, {
                                                            opacity: 1,
                                                            duration: 1,
                                                            delay: 0.1,
                                                            ease: "power4.out",
                                                        }),
                                                        o.Ay.to(".hero-cta-container", {
                                                            opacity: 1,
                                                            duration: 1,
                                                            delay: 0.15,
                                                            ease: "power4.out",
                                                        });
                                                },
                                            },
                                            "-=1.07"
                                        ),
                                            d.u.create({
                                                trigger: j.current,
                                                id: "hero-scroll-trigger",
                                                start: "top top",
                                                end: () => "+=".concat(1.1 * window.innerHeight),
                                                scrub: !0,
                                                pinSpacing: !1,
                                                onUpdate: (e) => {
                                                    let l = e.progress;
                                                    if (
                                                        (y.current &&
                                                            l > 0.009 &&
                                                            o.Ay.set(y.current, {
                                                                scale: 0.43 + l * (1 - 0.43),
                                                                transformOrigin: "top right",
                                                            }),
                                                            l > 0.25)
                                                    ) {
                                                        let e = Math.max(0, 1 - (l - 0.25) / 0.55);
                                                        o.Ay.set(".small-box-text", { opacity: e });
                                                    } else o.Ay.set(".small-box-text", { opacity: 1 });
                                                },
                                            });
                                    });
                            },
                            { scope: j, dependencies: [N] }
                        ),
                        (0, t.jsxs)(t.Fragment, {
                            children: [
                                (0, t.jsxs)("div", {
                                    className: "overlay fixed inset-0 z-50 antialiased",
                                    children: [
                                        (0, t.jsxs)("div", {
                                            className: "absolute size-full flex z-40",
                                            children: [
                                                (0, t.jsx)("div", {
                                                    style: { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" },
                                                    className: "block h-full w-[34vw] bg-slate-300 -mr-1",
                                                }),
                                                (0, t.jsx)("div", {
                                                    style: { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" },
                                                    className: "block h-full w-[34vw] bg-slate-300 -mr-1",
                                                }),
                                                (0, t.jsx)("div", {
                                                    style: { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" },
                                                    className: "block h-full w-[35vw] bg-slate-300 -mr-2",
                                                }),
                                            ],
                                        }),
                                        (0, t.jsxs)("div", {
                                            className: "overlay absolute top-0 left-0 size-full overflow-hidden z-50",
                                            children: [
                                                (0, t.jsx)("div", {
                                                    className:
                                                        "progress-bar fixed top-0 right-0 w-2 h-screen bg-black flex origin-bottom scale-y-0 z-50",
                                                }),
                                                (0, t.jsx)("div", {
                                                    className: "counter absolute bottom-6 left-6 z-50   ",
                                                    children: m.map((e) =>
                                                        (0, t.jsxs)(
                                                            "div",
                                                            {
                                                                className:
                                                                    "count fixed bottom-6 left-6 flex font-gothic text-9xl text-black ",
                                                                children: [
                                                                    (0, t.jsx)("div", {
                                                                        style: {
                                                                            clipPath:
                                                                                "polygon(0 0, 100% 0, 100% 100%, 0% 100%",
                                                                        },
                                                                        className: "digit flex-1 pt-4",
                                                                        children: (0, t.jsx)("p", {
                                                                            className:
                                                                                "will-change-transform relative translate-y-[120%]",
                                                                            children: e.firstDigit,
                                                                        }),
                                                                    }),
                                                                    (0, t.jsx)("div", {
                                                                        style: {
                                                                            clipPath:
                                                                                "polygon(0 0, 100% 0, 100% 100%, 0% 100%",
                                                                        },
                                                                        className: "digit flex-1 pt-4",
                                                                        children: (0, t.jsx)("p", {
                                                                            className:
                                                                                "will-change-transform relative translate-y-[120%]",
                                                                            children: e.secondDigit,
                                                                        }),
                                                                    }),
                                                                ],
                                                            },
                                                            e.id
                                                        )
                                                    ),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, t.jsx)("div", {
                                    ref: j,
                                    className: "relative h-[200vh] md:h-[350vh] w-full -mb-[100vh] ",
                                    children: (0, t.jsxs)("div", {
                                        className: "sticky top-0 h-[100vh] w-full overflow-hidden",
                                        children: [
                                            (0, t.jsxs)("div", {
                                                className:
                                                    "relative w-full h-[100svh] md:justify-end flex flex-col pb-4 md:pb-8 xl:pb-2 mix-blend-difference pt-[63svh] md:pt-0",
                                                children: [
                                                    (0, t.jsxs)("div", {
                                                        className:
                                                            "flex flex-col gap-1 container text-black select-none hero-text md:-translate-y-0 main-copy-wrapper",
                                                        children: [
                                                            (0, t.jsx)("h1", { className: "sr-only", children: h }),
                                                            (0, t.jsxs)("div", {
                                                                "aria-hidden": !0,
                                                                className: "w-full flex items-end justify-between ",
                                                                children: [
                                                                    (0, t.jsx)("span", {
                                                                        className:
                                                                            "leading-none font-gothic max-w-1/2 title-p1",
                                                                        children: h.split(" ")[0],
                                                                    }),
                                                                    v &&
                                                                    (0, t.jsxs)("div", {
                                                                        className: "hidden md:block",
                                                                        children: [
                                                                            (0, t.jsx)("p", {
                                                                                className: "sr-only",
                                                                                children: v,
                                                                            }),
                                                                            (0, t.jsx)("p", {
                                                                                className:
                                                                                    "font-sans text-sm max-w-xs description-content",
                                                                                children: v,
                                                                            }),
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                            (0, t.jsx)("div", {
                                                                "aria-hidden": !0,
                                                                className: "w-full flex items-end justify-end ",
                                                                children: (0, t.jsx)("span", {
                                                                    className: "leading-none font-gothic title-p2",
                                                                    children: null != (l = h.split(" ")[1]) ? l : "",
                                                                }),
                                                            }),
                                                            v &&
                                                            (0, t.jsxs)("div", {
                                                                className: "md:hidden",
                                                                children: [
                                                                    (0, t.jsx)("p", {
                                                                        className: "sr-only",
                                                                        children: v,
                                                                    }),
                                                                    (0, t.jsx)("p", {
                                                                        "aria-hidden": !0,
                                                                        className:
                                                                            "font-sans text-xs sm:text-sm pt-4 md:pt-10 max-w-xs justify-self-end description-content",
                                                                        children: v,
                                                                    }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                    w &&
                                                    (0, t.jsx)("div", {
                                                        className:
                                                            "absolute bottom-0 left-0 max-w-fit hero-cta-container opacity-0",
                                                        children: (0, t.jsx)(r.A, {
                                                            isAnimated: !0,
                                                            ...w,
                                                            size: "lg",
                                                            withArrow: !0,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            (0, t.jsx)("div", {
                                                ref: y,
                                                className:
                                                    "small-box absolute top-0 right-0 w-[72vw] md:w-screen h-[47svh] sm:h-[44svh] md:h-[100dvh] z-20 origin-top-right scale-[1]",
                                                children: (0, t.jsxs)("div", {
                                                    className: "flex size-full relative",
                                                    children: [
                                                        (0, t.jsxs)("div", {
                                                            className:
                                                                "flex flex-col gap-1 size-full z-30 items-end justify-end text-brand-rose p-5 md:p-20 small-box-text leading-none mix-blend-luminosity text-center md:-translate-x-[7vw]",
                                                            children: [
                                                                (0, t.jsx)("span", {
                                                                    className: "sr-only",
                                                                    children: g,
                                                                }),
                                                                (0, t.jsx)("span", {
                                                                    "aria-hidden": !0,
                                                                    className:
                                                                        "small-box-text font-gothic opacity-0 md:translate-x-[30%] will-change-transform",
                                                                    children:
                                                                        null !=
                                                                            (a = null == g ? void 0 : g.split(" ")[0])
                                                                            ? a
                                                                            : "",
                                                                }),
                                                                (0, t.jsx)("span", {
                                                                    "aria-hidden": !0,
                                                                    className:
                                                                        "small-box-text font-gothic opacity-0 will-change-transform md:translate-x-[2vw]",
                                                                    children:
                                                                        null !=
                                                                            (c = null == g ? void 0 : g.split(" ")[1])
                                                                            ? c
                                                                            : "",
                                                                }),
                                                            ],
                                                        }),
                                                        (0, t.jsx)("div", {
                                                            className: "absolute size-full overflow-hidden",
                                                            children: (0, t.jsx)(n.$, {
                                                                fill: !0,
                                                                resource: p,
                                                                priority: !0,
                                                                imgClassName: "object-cover absolute z-0",
                                                                videoClassName:
                                                                    "object-cover size-auto absolute min-w-full min-h-full",
                                                                onLoad: () => A(!0),
                                                                onLoadedData: () => A(!0),
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            }),
                                            (0, t.jsx)("div", {
                                                className:
                                                    "medium-box absolute top-0 right-0 w-[100vw] md:w-screen h-[58svh] md:h-[100dvh] bg-brand-emerald z-10 origin-top md:origin-top-right scale-[1] ",
                                                children: (0, t.jsxs)("div", {
                                                    className:
                                                        "relative flex flex-col size-full items-start justify-end md:px-4 py-2 md:py-4 container font-gothic medium-box-text text-brand-yellow gap-1 mix-blend-luminosity leading-none ",
                                                    children: [
                                                        (0, t.jsx)("span", { className: "sr-only", children: f }),
                                                        (0, t.jsx)("span", {
                                                            "aria-hidden": !0,
                                                            children:
                                                                null != (x = null == f ? void 0 : f.split(" ")[0])
                                                                    ? x
                                                                    : "",
                                                        }),
                                                        (0, t.jsx)("span", {
                                                            "aria-hidden": !0,
                                                            children:
                                                                null != (b = null == f ? void 0 : f.split(" ")[1])
                                                                    ? b
                                                                    : "",
                                                        }),
                                                    ],
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        })
                    );
                };
        },
    },
]);
