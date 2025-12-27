(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9559],
    {
        4369: () => { },
        8275: (e, t, n) => {
            Promise.resolve().then(n.bind(n, 42194)),
                Promise.resolve().then(n.bind(n, 11388)),
                Promise.resolve().then(n.bind(n, 94555)),
                Promise.resolve().then(n.t.bind(n, 47876, 23)),
                Promise.resolve().then(n.t.bind(n, 41989, 23)),
                Promise.resolve().then(n.t.bind(n, 81697, 23)),
                Promise.resolve().then(n.t.bind(n, 69639, 23)),
                Promise.resolve().then(n.t.bind(n, 50139, 23)),
                Promise.resolve().then(n.t.bind(n, 53277, 23)),
                Promise.resolve().then(n.bind(n, 64929)),
                Promise.resolve().then(n.bind(n, 71941)),
                Promise.resolve().then(n.bind(n, 75165)),
                Promise.resolve().then(n.bind(n, 26088)),
                Promise.resolve().then(n.bind(n, 32065)),
                Promise.resolve().then(n.bind(n, 79682));
        },
        26088: (e, t, n) => {
            "use strict";
            n.d(t, { AnimatedLogo: () => a });
            var i = n(32689),
                r = n(50494),
                o = n(39268),
                s = n(17902),
                l = n(19893);
            o.Ay.registerPlugin(s.u);
            let a = () => {
                let e = (0, l.useRef)(null);
                return (
                    (0, r.L)(
                        () => {
                            if (!e.current) return;
                            let t = o.Ay.utils.toArray(".letter").reverse(),
                                n = document.getElementById("footer");
                            n &&
                                0 !== t.length &&
                                (o.Ay.set(t, { opacity: 0 }),
                                    o.Ay.to(t, {
                                        opacity: 1,
                                        stagger: 0.04,
                                        duration: 0.5,
                                        ease: "power3.inOut",
                                        scrollTrigger: {
                                            trigger: n,
                                            start: "top bottom",
                                            toggleActions: "play none none reset",
                                            once: !1,
                                        },
                                    }));
                        },
                        { scope: e }
                    ),
                    (0, i.jsx)("div", {
                        ref: e,
                        className: "wrapper relative w-full flex flex-col overflow-hidden ",
                        children: (0, i.jsxs)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            version: "1.1",
                            viewBox: "0 0 1900 320",
                            fill: "#ffffff",
                            children: [
                                (0, i.jsx)("text", {
                                    className: "letter",
                                    x: "0",
                                    y: "200",
                                    fontSize: "100",
                                    children: "F",
                                }),
                                (0, i.jsx)("text", {
                                    className: "letter",
                                    x: "173",
                                    y: "200",
                                    fontSize: "100",
                                    children: "a",
                                }),
                                (0, i.jsx)("text", {
                                    className: "letter",
                                    x: "346",
                                    y: "200",
                                    fontSize: "100",
                                    children: "l",
                                }),
                                (0, i.jsx)("text", {
                                    className: "letter",
                                    x: "519",
                                    y: "200",
                                    fontSize: "100",
                                    children: "c",
                                }),
                                (0, i.jsx)("text", {
                                    className: "letter",
                                    x: "692",
                                    y: "200",
                                    fontSize: "100",
                                    children: "o",
                                }),
                                (0, i.jsx)("text", {
                                    className: "letter",
                                    x: "865",
                                    y: "200",
                                    fontSize: "100",
                                    children: "n",
                                }),
                                (0, i.jsx)("text", {
                                    className: "letter",
                                    x: "1038",
                                    y: "200",
                                    fontSize: "100",
                                    children: "C",
                                }),
                                (0, i.jsx)("text", {
                                    className: "letter",
                                    x: "1211",
                                    y: "200",
                                    fontSize: "100",
                                    children: "o",
                                }),
                                (0, i.jsx)("text", {
                                    className: "letter",
                                    x: "1384",
                                    y: "200",
                                    fontSize: "100",
                                    children: "d",
                                }),
                                (0, i.jsx)("text", {
                                    className: "letter",
                                    x: "1557",
                                    y: "200",
                                    fontSize: "100",
                                    children: "e",
                                }),
                                (0, i.jsx)("text", {
                                    className: "letter",
                                    x: "1730",
                                    y: "200",
                                    fontSize: "100",
                                    children: "s",
                                }),
                                (0, i.jsx)("text", {
                                    className: "letter",
                                    x: "1903",
                                    y: "200",
                                    fontSize: "100",
                                    children: "",
                                }),
                                (0, i.jsx)("text", {
                                    className: "letter",
                                    x: "2076",
                                    y: "200",
                                    fontSize: "100",
                                    children: "",
                                }),
                            ],
                        }),
                    })
                );
            };
        },
        32065: (e, t, n) => {
            "use strict";
            n.d(t, { HeaderClient: () => m });
            var i = n(32689),
                r = n(47876),
                o = n.n(r),
                s = n(19893),
                l = n(45677);
            let a = (e) => {
                let { fill: t = "white" } = e;
                return (0, i.jsxs)("img", { src: "/assets/logo.svg", alt: "Falcons Logo", className: "main_logo" });
            };
            var u = n(71162),
                c = n(50494),
                d = n(39268);
            let m = (e) => {
                var t, n;
                let { data: r } = e,
                    [m, f] = (0, s.useState)(!1),
                    v = (0, s.useRef)(null);
                return (
                    (0, c.L)(
                        () => {
                            let e = document.getElementById("menu-overlay"),
                                t = document.getElementById("menu-container"),
                                n = document.getElementById("open-menu-text"),
                                i = document.getElementById("close-menu-text"),
                                r = d.Ay.utils.toArray(".menu-block"),
                                o = d.Ay.timeline(),
                                s = d.Ay.timeline();
                            m
                                ? (o.set(t, { display: "block" }),
                                    s.set(e, { display: "block" }),
                                    s.to(e, { opacity: 1, duration: 0.5, ease: "power3.out" }),
                                    d.Ay.to(i, { top: "0%", duration: 0.3, ease: "power2.out" }),
                                    d.Ay.to(n, { top: -40, duration: 0.3, ease: "power2.out" }),
                                    o.to(r, {
                                        translateX: "0%",
                                        duration: 0.5,
                                        delay: 0.2,
                                        ease: "power3.out",
                                        stagger: 0.1,
                                    }))
                                : (d.Ay.to(i, { top: "110%", duration: 0.3, ease: "power2.out" }),
                                    d.Ay.to(n, { top: 0, duration: 0.3, ease: "power2.out" }),
                                    o.to(r, { translateX: "100%", duration: 0.5, ease: "power3.out", stagger: 0.1 }),
                                    s.to(e, { opacity: 0, duration: 0.5, delay: 0.2, ease: "power3.out" }),
                                    o.set(t, { display: "none" }),
                                    s.set(e, { display: "none" }));
                        },
                        { scope: v, dependencies: [m] }
                    ),
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)("div", {
                                id: "menu-overlay",
                                className: "fixed top-0 left-0 inset-0 z-40 bg-black/30 opacity-0 hidden",
                            }),
                            (0, i.jsx)("div", {
                                ref: v,
                                id: "menu-container",
                                className: "fixed top-0 right-0 z-50 size-full select-none",
                                children: (0, i.jsxs)("div", {
                                    className: "flex flex-col gap-2 w-full items-end pt-2 md:pt-6",
                                    children: [
                                        (0, i.jsx)("div", {
                                            className:
                                                " bg-white w-[50vw] xl:w-[30vw] h-[50px] menu-block translate-x-full will-change-transform",
                                        }),
                                        (0, i.jsxs)("div", {
                                            className:
                                                " bg-white w-[75vw] xl:w-[40vw] h-[44svh] menu-block translate-x-full flex flex-col justify-between px-4 py-3 will-change-transform",
                                            children: [
                                                (0, i.jsx)("span", {
                                                    className: "text-[#8A8A8A] font-sans",
                                                    children: "Explore",
                                                }),
                                                (0, i.jsx)("div", {
                                                    className: "flex flex-col gap-3 w-full relative",
                                                    children:
                                                        null == (t = r.navItems)
                                                            ? void 0
                                                            : t.map((e, t) =>
                                                                (0, i.jsx)(
                                                                    l.A,
                                                                    {
                                                                        onClick: () => f(!1),
                                                                        ...e.link,
                                                                        appearance: "inline",
                                                                        className:
                                                                            "text-xl font-gothic text-zinc-950 max-w-fit hover:opacity-60 transition-opacity duration-300",
                                                                    },
                                                                    t
                                                                )
                                                            ),
                                                }),
                                            ],
                                        }),
                                        (0, i.jsxs)("div", {
                                            className:
                                                " bg-white w-[90vw] xl:w-[55vw] h-[39svh] menu-block translate-x-full flex flex-col justify-between px-4 py-3 will-change-transform",
                                            children: [
                                                (0, i.jsx)("span", {
                                                    className: "text-[#8A8A8A] font-sans",
                                                    children: "Engage",
                                                }),
                                                (0, i.jsx)("div", {
                                                    className: "flex flex-col gap-3 w-full relative",
                                                    children:
                                                        null == (n = r.ctas)
                                                            ? void 0
                                                            : n.map((e, t) =>
                                                                (0, i.jsx)(
                                                                    l.A,
                                                                    {
                                                                        onClick: () => f(!1),
                                                                        ...e.link,
                                                                        appearance: "inline",
                                                                        className:
                                                                            "text-xl font-gothic text-zinc-950 max-w-fit",
                                                                        withArrow: !0,
                                                                    },
                                                                    t
                                                                )
                                                            ),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                            (0, i.jsx)("header", {
                                id: "header",
                                className: (0, u.cn)("fixed w-full top-0 z-50 mix-blend-difference pt-2 md:pt-6"),
                                children: (0, i.jsxs)("div", {
                                    className: "container size-full flex items-center justify-between h-[50px] ",
                                    children: [
                                        (0, i.jsx)(o(), {
                                            href: "/",
                                            "aria-label": "Homepage",
                                            children: (0, i.jsx)(a, { className: "w-20 md:w-auto" }),
                                        }),
                                        (0, i.jsxs)("div", {
                                            className:
                                                "flex flex-row items-center gap-1 font-gothic relative text-white justify-self-end cursor-pointer h-full justify-center group",
                                            onClick: function () {
                                                f(!m);
                                            },
                                            children: [
                                                (0, i.jsxs)("div", {
                                                    className: "relative overflow-hidden px-1",
                                                    children: [
                                                        (0, i.jsx)("div", {
                                                            className:
                                                                "top-0 flex size-full items-center justify-center relative will-change-transform ",
                                                            id: "open-menu-text",
                                                            children: (0, i.jsx)("span", {
                                                                className: "",
                                                                children: "Menu",
                                                            }),
                                                        }),
                                                        (0, i.jsx)("div", {
                                                            className:
                                                                "absolute top-[110%] size-full left-0 z-20 will-change-transform",
                                                            id: "close-menu-text",
                                                            children: (0, i.jsx)("span", {
                                                                className: "",
                                                                children: "Close",
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                                (0, i.jsx)("div", {
                                                    className:
                                                        "h-2 w-3 bg-white  relative group-hover:bg-brand-emerald transition-colors duration-300 ease-out",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    })
                );
            };
        },
        45677: (e, t, n) => {
            "use strict";
            n.d(t, { A: () => u });
            var i = n(32689),
                r = n(75165),
                o = n(71162),
                s = n(47876),
                l = n.n(s);
            n(19893);
            var a = n(20545);
            let u = (e) => {
                let {
                    type: t,
                    appearance: n = "inline",
                    children: s,
                    className: u,
                    label: c,
                    newTab: d,
                    reference: m,
                    size: f,
                    url: v,
                    isAnimated: C,
                    withBlockPrefix: h,
                    withArrow: p,
                    onClick: g,
                    isPlain: x,
                    showArrowOnSmall: w = !0,
                } = e,
                    y =
                        "reference" === t && "object" == typeof (null == m ? void 0 : m.value) && m.value.slug
                            ? ""
                                .concat(
                                    (null == m ? void 0 : m.relationTo) !== "pages"
                                        ? "/".concat(null == m ? void 0 : m.relationTo)
                                        : "",
                                    "/"
                                )
                                .concat(m.value.slug)
                            : v;
                if (!y) return null;
                let b = "link" === n ? "clear" : f,
                    j = d ? { rel: "noopener noreferrer", target: "_blank" } : {};
                return x
                    ? (0, i.jsx)(l(), {
                        className: (0, o.cn)("", u),
                        href: y || v || "",
                        onClick: g,
                        ...j,
                        children: s && s,
                    })
                    : "inline" === n
                        ? (0, i.jsxs)(l(), {
                            className: (0, o.cn)("group overflow-hidden max-w-fit flex items-center gap-1 md:gap-2", u),
                            href: y || v || "",
                            onClick: g,
                            ...j,
                            children: [
                                h && (0, i.jsx)("div", { className: "bg-background md:bg-white h-2 w-3" }),
                                c && c,
                                p &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)("div", {
                                            className:
                                                "hidden md:block opacity-0 group-hover:opacity-100 translate-x-[-8px] translate-y-[8px] group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out",
                                            children: (0, i.jsx)(a.A, { strokeWidth: 1 }),
                                        }),
                                        w && (0, i.jsx)(a.A, { className: "md:hidden", strokeWidth: 1 }),
                                    ],
                                }),
                                s && s,
                            ],
                        })
                        : C
                            ? (0, i.jsx)(l(), {
                                onClick: g,
                                href: y || v || "",
                                ...j,
                                className: "inline-block",
                                children: (0, i.jsxs)(r.Button, {
                                    className: u,
                                    size: b,
                                    variant: n,
                                    isAnimated: C,
                                    children: [c && c, s && s, p && (0, i.jsx)(a.A, {})],
                                }),
                            })
                            : (0, i.jsx)(r.Button, {
                                onClick: g,
                                asChild: !0,
                                className: u,
                                size: b,
                                variant: n,
                                isAnimated: C,
                                children: (0, i.jsxs)(l(), {
                                    className: (0, o.cn)(u),
                                    href: y || v || "",
                                    ...j,
                                    children: [c && c, s && s],
                                }),
                            });
            };
        },
        53277: () => { },
        64929: (e, t, n) => {
            "use strict";
            n.d(t, { AdminBar: () => d });
            var i = n(32689),
                r = n(71162),
                o = n(88297),
                s = n(84873),
                l = n(19893);
            n(4369);
            var a = n(90652);
            let u = {
                pages: { plural: "Pages", singular: "Page" },
                posts: { plural: "Posts", singular: "Post" },
                projects: { plural: "Projects", singular: "Project" },
            },
                c = () => (0, i.jsx)("span", { children: "Dashboard" }),
                d = (e) => {
                    var t, n;
                    let { adminBarProps: d } = e || {},
                        m = (0, s.useSelectedLayoutSegments)(),
                        [f, v] = (0, l.useState)(!1),
                        C = u[null == m ? void 0 : m[1]] ? m[1] : "pages",
                        h = (0, s.useRouter)(),
                        p = l.useCallback((e) => {
                            v(!!(null == e ? void 0 : e.id));
                        }, []);
                    return (0, i.jsx)("div", {
                        className: (0, r.cn)(
                            "admin-bar",
                            "py-2 fixed top-[70px] bg-black/10 backdrop-blur-md text-white w-fit right-0 z-50",
                            { block: f, hidden: !f }
                        ),
                        children: (0, i.jsx)("div", {
                            className: "container",
                            children: (0, i.jsx)(o.J, {
                                ...d,
                                className: "py-2 text-white",
                                classNames: {
                                    controls: "font-medium text-white",
                                    logo: "text-white",
                                    user: "text-white",
                                },
                                cmsURL: (0, a.y)(),
                                collectionSlug: C,
                                collectionLabels: {
                                    plural: (null == (t = u[C]) ? void 0 : t.plural) || "Pages",
                                    singular: (null == (n = u[C]) ? void 0 : n.singular) || "Page",
                                },
                                logo: (0, i.jsx)(c, {}),
                                onAuthChange: p,
                                onPreviewExit: () => {
                                    fetch("/next/exit-preview").then(() => {
                                        h.push("/"), h.refresh();
                                    });
                                },
                                style: {
                                    backgroundColor: "transparent",
                                    padding: 0,
                                    position: "relative",
                                    zIndex: "unset",
                                },
                            }),
                        }),
                    });
                };
        },
        71162: (e, t, n) => {
            "use strict";
            n.d(t, { cn: () => o });
            var i = n(1034),
                r = n(83283);
            function o() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return (0, r.QP)((0, i.$)(t));
            }
        },
        71941: (e, t, n) => {
            "use strict";
            n.d(t, { default: () => a });
            var i = n(32689),
                r = n(19893),
                o = n(19486),
                s = n(53173);
            let l =
                "\n  varying vec2 vUv;\n  void main() {\n    vUv = uv;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n  }\n",
                a = (e) => {
                    let {
                        brushSize: t = 25,
                        brushStrength: n = 0.5,
                        distortionAmount: a = 2.5,
                        fluidDecay: u = 0.98,
                        trailLength: c = 0.8,
                        stopDecay: d = 0.85,
                        color1: m = "#b8fff7",
                        color2: f = "#6e3466",
                        color3: v = "#0133ff",
                        color4: C = "#66d1fe",
                        colorIntensity: h = 1,
                        softness: p = 1,
                        easeFactor: g = 0.02,
                    } = e,
                        x = (0, r.useRef)(null),
                        w = (0, r.useRef)(null),
                        y = (0, r.useRef)(null),
                        b = (0, r.useRef)(null),
                        j = (e) => {
                            let t = parseInt(e.slice(1, 3), 16) / 255;
                            return [t, parseInt(e.slice(3, 5), 16) / 255, parseInt(e.slice(5, 7), 16) / 255];
                        };
                    return (
                        (0, r.useEffect)(() => {
                            if (!x.current) return;
                            for (; x.current.firstChild;) x.current.removeChild(x.current.firstChild);
                            let e = new o.qUd(-1, 1, 1, -1, 0, 1),
                                t = new s.JeP({ antialias: !0 });
                            (w.current = t),
                                t.setSize(window.innerWidth, window.innerHeight),
                                x.current.appendChild(t.domElement);
                            let n = () =>
                                new o.nWS(window.innerWidth, window.innerHeight, {
                                    minFilter: o.k6q,
                                    magFilter: o.k6q,
                                    format: o.GWd,
                                    type: o.RQf,
                                }),
                                i = n(),
                                r = n(),
                                u = i,
                                c = r,
                                d = 0,
                                g = new o.BKk({
                                    uniforms: {
                                        iTime: { value: 0 },
                                        iResolution: { value: new o.I9Y(window.innerWidth, window.innerHeight) },
                                        iFrame: { value: 0 },
                                        iPreviousFrame: { value: null },
                                        u_mouse: { value: new o.I9Y(0, 0) },
                                        u_prevMouse: { value: new o.I9Y(0, 0) },
                                        u_aberrationIntensity: { value: 0 },
                                    },
                                    vertexShader: l,
                                    fragmentShader:
                                        "\n uniform float iTime;\n uniform vec2 iResolution;\n uniform int iFrame;\n uniform sampler2D iPreviousFrame;\n uniform vec2 u_mouse;\n uniform vec2 u_prevMouse;\n uniform float u_aberrationIntensity;\n varying vec2 vUv;\n // Add some noise functions for organic movement\n float noise(vec2 p) {\n   return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);\n }\n float smoothNoise(vec2 p) {\n   vec2 i = floor(p);\n   vec2 f = fract(p);\n   f = f * f * (3.0 - 2.0 * f);\n   float a = noise(i);\n   float b = noise(i + vec2(1.0, 0.0));\n   float c = noise(i + vec2(0.0, 1.0));\n   float d = noise(i + vec2(1.0, 1.0));\n   return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);\n }\n void main() {\n   vec2 fragCoord = vUv * iResolution;\n   vec2 U = fragCoord;\n   vec2 ur = iResolution.xy;\n   if (iFrame < 1) {\n     // Initialize with subtle noise pattern\n     float initialNoise = smoothNoise(vUv * 10.0 + iTime * 0.1) * 0.1;\n     gl_FragColor = vec4(initialNoise, initialNoise, 0.0, 1.0);\n   } else {\n     // Get previous frame\n     vec4 prevData = texture2D(iPreviousFrame, vUv);\n     vec2 mousePos = u_mouse;\n     vec2 prevMousePos = u_prevMouse;\n     // Create multiple grid scales for layered effect\n     vec2 gridUV1 = floor(vUv * vec2(20.0, 20.0)) / vec2(20.0, 20.0);\n     vec2 gridUV2 = floor(vUv * vec2(35.0, 35.0)) / vec2(35.0, 35.0);\n     vec2 centerOfPixel1 = gridUV1 + vec2(1.0/20.0, 1.0/20.0);\n     vec2 centerOfPixel2 = gridUV2 + vec2(1.0/35.0, 1.0/35.0);\n     // Mouse direction with time-based enhancement\n     vec2 mouseDirection = mousePos - prevMousePos;\n     float mouseSpeed = length(mouseDirection);\n     // Add rotational component based on mouse movement\n     float angle = atan(mouseDirection.y, mouseDirection.x);\n     vec2 rotatedDir = vec2(cos(angle + iTime * 2.0), sin(angle + iTime * 2.0)) * mouseSpeed;\n     // Smaller influence zones - decreased radius\n     vec2 pixelToMouse1 = centerOfPixel1 - mousePos;\n     vec2 pixelToMouse2 = centerOfPixel2 - mousePos;\n     float dist1 = length(pixelToMouse1);\n     float dist2 = length(pixelToMouse2);\n     // Smaller radius - decreased from 0.4/0.3 to 0.15/0.1\n     float strength1 = smoothstep(0.15, 0.0, dist1);\n     float strength2 = smoothstep(0.1, 0.0, dist2) * 0.7;\n     // Combine strengths\n     float totalStrength = max(strength1, strength2);\n     // Create spiral distortion around mouse (tighter radius)\n     vec2 toMouse = mousePos - vUv;\n     float distToMouse = length(toMouse);\n     float spiralAngle = distToMouse * 15.0 + iTime * 4.0;\n     vec2 spiralDir = vec2(cos(spiralAngle), sin(spiralAngle));\n     // Combine different distortion types\n     vec2 primaryDistortion = strength1 * -mouseDirection * 6.0;\n     vec2 secondaryDistortion = strength2 * rotatedDir * 3.0;\n     vec2 spiralDistortion = totalStrength * spiralDir * 1.5 * mouseSpeed;\n     vec2 totalDistortion = primaryDistortion + secondaryDistortion + spiralDistortion;\n     \n     // ADDED: Gradual shrinking toward mouse when stopped\n     float shrinkFactor = 1.0;\n     vec2 shrinkOffset = vec2(0.0);\n     \n     // Detect when mouse has stopped (very small movement)\n     if (mouseSpeed < 0.002) {\n       // Calculate distance from current pixel to mouse\n       vec2 pixelToMouse = mousePos - vUv;\n       float distanceToMouse = length(pixelToMouse);\n       \n       // Create shrinking effect - further pixels shrink more\n       shrinkFactor = 0.985 - (distanceToMouse * 0.008);\n       shrinkFactor = max(shrinkFactor, 0.92); // Don't shrink too fast\n       \n       // Pull pixels slightly toward mouse\n       shrinkOffset = normalize(pixelToMouse) * distanceToMouse * 0.003;\n     }\n     \n     // Enhanced decay with breathing effect AND shrinking\n     float breathe = 0.88 + 0.05 * sin(iTime * 4.0);\n     vec2 newDistortion = prevData.xy * breathe * shrinkFactor + totalDistortion + shrinkOffset;\n     \n     // Add chromatic data with enhanced intensity (also affected by shrinking)\n     float chromaticData = u_aberrationIntensity * totalStrength * (1.0 + sin(iTime * 6.0) * 0.3) * shrinkFactor;\n     \n     // Store enhanced distortion data (totalStrength also shrinks)\n     float finalTotalStrength = totalStrength > 0.0 ? totalStrength : prevData.w * shrinkFactor;\n     \n     gl_FragColor = vec4(newDistortion, chromaticData, finalTotalStrength);\n   }\n }\n",
                                }),
                                T = new o.BKk({
                                    uniforms: {
                                        iTime: { value: 0 },
                                        iResolution: { value: new o.I9Y(window.innerWidth, window.innerHeight) },
                                        iFluid: { value: null },
                                        uDistortionAmount: { value: a },
                                        uColor1: { value: new o.Pq0(...j(m)) },
                                        uColor2: { value: new o.Pq0(...j(f)) },
                                        uColor3: { value: new o.Pq0(...j(v)) },
                                        uColor4: { value: new o.Pq0(...j(C)) },
                                        uColorIntensity: { value: h },
                                        uSoftness: { value: p },
                                    },
                                    vertexShader: l,
                                    fragmentShader:
                                        "\n  uniform float iTime;\n  uniform vec2 iResolution;\n  uniform sampler2D iFluid;\n  uniform float uDistortionAmount;\n  uniform vec3 uColor1;\n  uniform vec3 uColor2;\n  uniform vec3 uColor3;\n  uniform vec3 uColor4;\n  uniform float uColorIntensity;\n  uniform float uSoftness;\n  varying vec2 vUv;\n  \n  float noise(vec2 p) {\n    return sin(p.x * 1.2) * sin(p.y * 1.4) + \n           sin(p.x * 2.1 + iTime * 0.5) * sin(p.y * 1.8 + iTime * 0.3) * 0.5 +\n           sin(p.x * 3.3 + iTime * 0.7) * sin(p.y * 2.7 + iTime * 0.8) * 0.25;\n  }\n  \n  void main() {\n    vec4 fluid = texture2D(iFluid, vUv);\n    vec2 fluidVel = fluid.xy;\n    float fluidIntensity = fluid.w;\n    \n    // Multi-layered time-based movement\n    float slowTime = iTime * 0.15;\n    float mediumTime = iTime * 0.35;\n    float fastTime = iTime * 0.8;\n    \n    // Dynamic pixelation that breathes\n    float breathingEffect = sin(slowTime) * 0.3 + 0.7;\n    float basePixelSize = 25.0 * breathingEffect;\n    float pixelSize = basePixelSize - (fluidIntensity * 10.0);\n    pixelSize = max(pixelSize, 8.0);\n    \n    // Multi-directional distortion with rotation\n    float rotationAngle = slowTime * 0.5 + noise(vUv * 3.0) * 0.2;\n    vec2 rotatedUV = vec2(\n      cos(rotationAngle) * vUv.x - sin(rotationAngle) * vUv.y,\n      sin(rotationAngle) * vUv.x + cos(rotationAngle) * vUv.y\n    );\n    \n    // Layered distortion with different frequencies\n    vec2 waveDistortion = vec2(\n      sin(vUv.y * 8.0 + mediumTime) * 0.02,\n      cos(vUv.x * 6.0 + fastTime) * 0.015\n    );\n    \n    vec2 noiseDistortion = vec2(\n      noise(vUv * 4.0 + slowTime) * 0.03,\n      noise(vUv * 3.0 + mediumTime * 1.2) * 0.025\n    );\n    \n    // Apply compound distortion\n    vec2 distortedUV = rotatedUV + \n                       fluidVel * (0.4 * uDistortionAmount) + \n                       waveDistortion +\n                       noiseDistortion;\n    \n    // Dynamic pixelation with drift\n    float pixelDrift = sin(slowTime * 0.8) * 0.1;\n    vec2 pixelatedUV = vec2(\n      floor((distortedUV.x + pixelDrift) * pixelSize) / pixelSize,\n      distortedUV.y\n    );\n    \n    // Generate gradient using enhanced coordinates\n    float mr = min(iResolution.x, iResolution.y);\n    vec2 gradientUV = (pixelatedUV * iResolution * 2.0 - iResolution.xy) / mr;\n    \n    // Multiple animation layers with different speeds\n    float timeScale1 = 0.12;\n    float timeScale2 = 0.08;\n    float timeScale3 = 0.05;\n    \n    float d1 = -iTime * timeScale1 + fluidIntensity * 2.0;\n    float d2 = -iTime * timeScale2 + noise(gradientUV * 2.0) * 0.5;\n    float d3 = -iTime * timeScale3 + sin(iTime * 0.3) * 0.3;\n    \n    float a1 = fluidIntensity * 1.5;\n    float a2 = noise(gradientUV * 1.5 + iTime * 0.2) * 0.8;\n    \n    // More complex iteration with varying frequencies\n    for (float i = 0.0; i < 4.0; ++i) {\n      float layer = i / 4.0;\n      float freq = 1.0 + i * 0.5;\n      \n      // Multiple wave components\n      a1 += cos(i * freq - d1 - a1 * gradientUV.x * 0.4) * (0.5 - layer * 0.08);\n      d1 += sin(gradientUV.y * i * freq + a1 + d2) * (0.4 - layer * 0.05);\n      \n      a2 += sin(i * freq + d2 - a2 * gradientUV.y * 0.3) * (0.3 - layer * 0.04);\n      d2 += cos(gradientUV.x * i * freq + a2 + d3) * (0.35 - layer * 0.04);\n    }\n    \n    // Multiple pattern layers with movement\n    float verticalPattern = sin(gradientUV.x * 10.0 + fastTime) * 0.4 +\n                           sin(gradientUV.x * 5.0 + mediumTime * 0.7) * 0.2;\n    \n    float horizontalFlow = cos(gradientUV.y * 3.0 + slowTime * 1.5) * 0.15;\n    \n    float diagonalRipple = sin((gradientUV.x + gradientUV.y) * 4.0 + mediumTime) * 0.25;\n    \n    d1 += verticalPattern + horizontalFlow + diagonalRipple;\n    \n    // Dynamic mixing with more movement\n    float mixer1 = cos(gradientUV.x * 4.0 + d1 * 0.6 + slowTime * 0.5) * 0.5 + 0.5;\n    float mixer2 = sin(gradientUV.y * 3.0 + a1 * 0.7 + mediumTime * 0.3) * 0.5 + 0.5;\n    float mixer3 = cos((gradientUV.x + gradientUV.y) * 2.5 + d2 * 0.5 + fastTime * 0.2) * 0.5 + 0.5;\n    \n    // Pulsing radial component\n    float pulseFreq = slowTime * 2.0;\n    float pulse = sin(pulseFreq) * 0.1 + 0.9;\n    float radialGradient = length(gradientUV) * 0.4 * pulse;\n    mixer1 = mix(mixer1, radialGradient, 0.5);\n    \n    // Adaptive smoothing with movement\n    float breathingSmooth = sin(slowTime * 1.2) * 0.1 + 0.1;\n    float smoothAmount = clamp(uSoftness * 0.3 + fluidIntensity * 0.2 + breathingSmooth, 0.1, 0.9);\n    \n    mixer1 = mix(mixer1, 0.5, smoothAmount);\n    mixer2 = mix(mixer2, 0.5, smoothAmount * 0.8);\n    mixer3 = mix(mixer3, 0.5, smoothAmount * 0.6);\n    \n    // More dynamic smoothstep transitions\n    float edgeSoftness = 0.2 + sin(mediumTime) * 0.05;\n    mixer1 = smoothstep(0.1, 0.9 - edgeSoftness, mixer1);\n    mixer2 = smoothstep(0.15, 0.85 - edgeSoftness, mixer2);\n    mixer3 = smoothstep(0.2, 0.8 - edgeSoftness, mixer3);\n    \n    // Moving gradient with rotation\n    vec2 movingGradientStart = vec2(\n      0.2 + sin(slowTime * 0.6) * 0.3,\n      0.1 + cos(slowTime * 0.4) * 0.2\n    );\n    vec2 movingGradientEnd = vec2(\n      0.7 + sin(slowTime * 0.8 + 1.0) * 0.2,\n      0.9 + cos(slowTime * 0.5 + 1.5) * 0.15\n    );\n    \n    vec2 gradientDir = movingGradientEnd - movingGradientStart;\n    vec2 toPixel = pixelatedUV - movingGradientStart;\n    float gradientProgress = dot(toPixel, gradientDir) / dot(gradientDir, gradientDir);\n    gradientProgress = clamp(gradientProgress, 0.0, 1.0);\n    \n    // Multi-layer color mixing with all mixers\n    vec3 dominantColor = uColor1;\n    vec3 gradientColor1 = mix(uColor2, uColor3, mixer1 * gradientProgress);\n    vec3 gradientColor2 = mix(uColor3, uColor4, mixer3);\n    \n    float gradientStrength = 0.7 + fluidIntensity * 0.4 + sin(mediumTime) * 0.1;\n    \n    vec3 col = mix(dominantColor, gradientColor1, gradientStrength * mixer2);\n    col = mix(col, gradientColor2, mixer3 * 0.3);\n    \n    // Dynamic highlights with color cycling\n    if (fluidIntensity > 0.03) {\n      float colorCycle = sin(fastTime) * 0.5 + 0.5;\n      vec3 highlight = mix(mix(uColor1, uColor3, colorCycle), uColor4, mixer1 * 0.5);\n      col = mix(col, highlight, fluidIntensity * 0.25);\n    }\n    \n    // Subtle intensity pulsing\n    float intensityPulse = sin(slowTime * 1.8) * 0.05 + 0.95;\n    col *= uColorIntensity * intensityPulse;\n    \n    gl_FragColor = vec4(col, 1.0);\n  }\n",
                                }),
                                P = new o.bdM(2, 2),
                                N = new o.eaF(P, g),
                                A = new o.eaF(P, T),
                                M = 0,
                                k = 0,
                                S = 0,
                                D = 0,
                                U = 0,
                                V = 0,
                                E = (e) => {
                                    if (!x.current) return;
                                    let t = x.current.getBoundingClientRect();
                                    (U = performance.now()),
                                        (S = M),
                                        (D = k),
                                        (M = (e.clientX - t.left) / t.width),
                                        (k = (e.clientY - t.top) / t.height),
                                        (V = 1),
                                        g.uniforms.u_mouse.value.set(M, 1 - k),
                                        g.uniforms.u_prevMouse.value.set(S, 1 - D);
                                },
                                L = () => {
                                    g.uniforms.u_mouse.value.set(0, 0), g.uniforms.u_prevMouse.value.set(0, 0);
                                },
                                R = () => {
                                    let e = window.innerWidth,
                                        n = window.innerHeight;
                                    t.setSize(e, n),
                                        g.uniforms.iResolution.value.set(e, n),
                                        T.uniforms.iResolution.value.set(e, n),
                                        i.setSize(e, n),
                                        r.setSize(e, n),
                                        (d = 0);
                                };
                            document.addEventListener("mousemove", E),
                                document.addEventListener("mouseleave", L),
                                window.addEventListener("resize", R);
                            let z = () => {
                                let n = 0.001 * performance.now();
                                (g.uniforms.iTime.value = n),
                                    (g.uniforms.iFrame.value = d),
                                    (V = Math.max(0, V - 0.05)),
                                    (g.uniforms.u_aberrationIntensity.value = V),
                                    performance.now() - U > 100 &&
                                    (g.uniforms.u_mouse.value.set(0, 0), g.uniforms.u_prevMouse.value.set(0, 0)),
                                    (T.uniforms.iTime.value = n),
                                    (T.uniforms.uDistortionAmount.value = a),
                                    (T.uniforms.uColorIntensity.value = h),
                                    (T.uniforms.uSoftness.value = p),
                                    T.uniforms.uColor1.value.set(...j(m)),
                                    T.uniforms.uColor2.value.set(...j(f)),
                                    T.uniforms.uColor3.value.set(...j(v)),
                                    T.uniforms.uColor4.value.set(...j(C)),
                                    (g.uniforms.iPreviousFrame.value = c.texture),
                                    t.setRenderTarget(u),
                                    t.render(N, e),
                                    (T.uniforms.iFluid.value = u.texture),
                                    t.setRenderTarget(null),
                                    t.render(A, e);
                                let i = u;
                                (u = c), (c = i), d++, (y.current = requestAnimationFrame(z));
                            };
                            return (
                                (b.current = {
                                    fluidTarget1: i,
                                    fluidTarget2: r,
                                    mirrorMaterial: g,
                                    displayMaterial: T,
                                    geometry: P,
                                    handleMouseMove: E,
                                    handleMouseLeave: L,
                                    handleResize: R,
                                }),
                                z(),
                                () => {
                                    y.current && cancelAnimationFrame(y.current),
                                        document.removeEventListener("mousemove", E),
                                        document.removeEventListener("mouseleave", L),
                                        window.removeEventListener("resize", R),
                                        t.domElement && x.current && x.current.removeChild(t.domElement),
                                        i.dispose(),
                                        r.dispose(),
                                        g.dispose(),
                                        T.dispose(),
                                        P.dispose(),
                                        t.dispose();
                                }
                            );
                        }, [t, n, a, u, c, d, m, f, v, C, h, p, g]),
                        (0, i.jsx)("div", { ref: x, className: "gradient-canvas" })
                    );
                };
        },
        75165: (e, t, n) => {
            "use strict";
            n.d(t, { Button: () => d });
            var i = n(32689),
                r = n(71162),
                o = n(50494),
                s = n(86634),
                l = n(63804),
                a = n(39268),
                u = n(19893);
            let c = (0, l.F)(
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
                d = (e) => {
                    let {
                        asChild: t = !1,
                        className: n,
                        size: l,
                        variant: d,
                        isAnimated: m = !1,
                        children: f,
                        ref: v,
                        animatedClassName: C,
                        overlayClassName: h,
                        innerOverlayClassName: p,
                        withArrow: g,
                        ...x
                    } = e,
                        w = (0, u.useRef)(null);
                    (0, o.L)(
                        () => {
                            if (!m || !w.current) return;
                            let e = w.current,
                                t = () => {
                                    let t = e.querySelector(".button-overlay"),
                                        n = e.querySelector(".og-text");
                                    t &&
                                        n &&
                                        (a.Ay.to(t, { top: "0%", duration: 0.3, ease: "power2.out" }),
                                            a.Ay.to(n, { top: -40, duration: 0.3, ease: "power2.out" }));
                                },
                                n = () => {
                                    let t = e.querySelector(".button-overlay"),
                                        n = e.querySelector(".og-text");
                                    t &&
                                        n &&
                                        (a.Ay.to(t, { top: "110%", duration: 0.3, ease: "power2.out" }),
                                            a.Ay.to(n, { top: 0, duration: 0.3, ease: "power2.out" }));
                                };
                            return (
                                e.addEventListener("mouseenter", t),
                                e.addEventListener("mouseleave", n),
                                () => {
                                    e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", n);
                                }
                            );
                        },
                        { scope: w, dependencies: [m] }
                    );
                    let y = t ? s.DX : "button";
                    return m
                        ? (0, i.jsxs)(y, {
                            className: (0, r.cn)(
                                c({ className: n, size: l, variant: d }),
                                "relative overflow-hidden"
                            ),
                            ref: w,
                            ...x,
                            children: [
                                (0, i.jsx)("div", {
                                    className: (0, r.cn)(
                                        "og-text flex size-full items-center justify-center top-0 relative will-change-transform gap-2",
                                        C
                                    ),
                                    children: f,
                                }),
                                (0, i.jsx)("div", {
                                    className: (0, r.cn)(
                                        "button-overlay absolute bg-black top-[110%] size-full left-0 z-20 will-change-transform",
                                        h
                                    ),
                                    children: (0, i.jsx)("div", {
                                        className: (0, r.cn)(
                                            "flex items-center justify-center size-full invert gap-2 ",
                                            p
                                        ),
                                        children: f,
                                    }),
                                }),
                            ],
                        })
                        : (0, i.jsx)(y, {
                            className: (0, r.cn)(c({ className: n, size: l, variant: d })),
                            ref: v || w,
                            ...x,
                            children: f,
                        });
                };
        },
        79682: (e, t, n) => {
            "use strict";
            n.d(t, { Providers: () => f });
            var i = n(32689),
                r = n(19893),
                o = n(39268),
                s = n(84873);
            let l = (e) => {
                let { children: t } = e,
                    n = (0, s.useRouter)(),
                    l = (0, s.usePathname)(),
                    a = (0, r.useRef)(null),
                    u = (0, r.useRef)(null),
                    c = (0, r.useRef)([]),
                    d = (0, r.useRef)(!1),
                    m = (0, r.useRef)(null),
                    f = (0, r.useRef)(!0),
                    v = (0, r.useCallback)((e) => {
                        d.current || ((d.current = !0), p(e));
                    }, []),
                    C = (0, r.useCallback)(
                        (e) => {
                            if (d.current) return void e.preventDefault();
                            if (
                                e.metaKey ||
                                e.ctrlKey ||
                                e.shiftKey ||
                                e.altKey ||
                                0 !== e.button ||
                                "_blank" === e.currentTarget.target
                            )
                                return;
                            e.preventDefault();
                            let t = new URL(e.currentTarget.href).pathname;
                            t !== l && v(t);
                        },
                        [l, v]
                    ),
                    h = (0, r.useCallback)(async () => {
                        m.current && clearTimeout(m.current),
                            await new Promise((e) => setTimeout(e, 600)),
                            o.os.to(c.current, {
                                scaleX: 0,
                                duration: 0.4,
                                stagger: 0.02,
                                ease: "power2.out",
                                transformOrigin: "right",
                                onComplete: () => {
                                    (d.current = !1),
                                        a.current && (a.current.style.pointerEvents = "none"),
                                        u.current && (u.current.style.pointerEvents = "none");
                                },
                            }),
                            (m.current = setTimeout(() => {
                                if (c.current.length > 0) {
                                    let e = c.current[0];
                                    e &&
                                        o.os.getProperty(e, "scaleX") > 0 &&
                                        o.os.to(c.current, {
                                            scaleX: 0,
                                            duration: 0.2,
                                            ease: "power2.out",
                                            transformOrigin: "right",
                                            onComplete: () => {
                                                (d.current = !1),
                                                    a.current && (a.current.style.pointerEvents = "none"),
                                                    u.current && (u.current.style.pointerEvents = "none");
                                            },
                                        });
                                }
                            }, 1e3));
                    }, []);
                (0, r.useEffect)(() => {
                    (() => {
                        if (a.current) {
                            (a.current.innerHTML = ""), (c.current = []);
                            for (let e = 0; e < 10; e++) {
                                let e = document.createElement("div");
                                (e.className = "transition-block"), a.current.appendChild(e), c.current.push(e);
                            }
                        }
                    })(),
                        f.current
                            ? (o.os.set(c.current, { scaleX: 0, transformOrigin: "left" }), (f.current = !1))
                            : (o.os.set(c.current, { scaleX: 1, transformOrigin: "right" }), h());
                    let e = document.querySelectorAll('a[href^="/"]');
                    return (
                        e.forEach((e) => {
                            e.addEventListener("click", C);
                        }),
                        () => {
                            e.forEach((e) => {
                                e.removeEventListener("click", C);
                            }),
                                m.current && clearTimeout(m.current);
                        }
                    );
                }, [n, l, C, h]);
                let p = (e) => {
                    a.current && (a.current.style.pointerEvents = "auto"),
                        u.current && (u.current.style.pointerEvents = "auto"),
                        o.os
                            .timeline({
                                onComplete: () => {
                                    n.push(e);
                                },
                            })
                            .to(c.current, {
                                scaleX: 1,
                                duration: 0.4,
                                stagger: 0.02,
                                ease: "power2.out",
                                transformOrigin: "left",
                            })
                            .set(u.current, { opacity: 1 }, "-=0.2")
                            .to(u.current, { opacity: 0, duration: 0.25, ease: "power2.out" });
                };
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)("div", {
                            ref: a,
                            style: { zIndex: 999 },
                            className: "fixed top-0 left-0 w-screen h-[100lvh] flex pointer-events-none",
                        }),
                        (0, i.jsx)("div", {
                            ref: u,
                            style: { zIndex: 1e3 },
                            className:
                                "fixed top-0 left-0 w-screen h-[100lvh] flex items-center justify-center bg-neutral-950 pointer-events-none opacity-0",
                            children: (0, i.jsx)("div", {}),
                        }),
                        t,
                    ],
                });
            };
            var a = n(50494),
                u = n(4228),
                c = n(27117),
                d = n(17902),
                m = n(89796);
            o.Ay.registerPlugin(a.L, d.u, u.A, c.M);
            let f = (e) => {
                let { children: t } = e;
                return (0, i.jsx)(m.FH, { root: !0, children: (0, i.jsx)(l, { children: t }) });
            };
        },
        90652: (e, t, n) => {
            "use strict";
            n.d(t, { y: () => o });
            let i = !!window.document && !!window.document.createElement;
            var r = n(34679);
            let o = () => {
                if (i) {
                    let e = window.location.protocol,
                        t = window.location.hostname,
                        n = window.location.port;
                    return ""
                        .concat(e, "//")
                        .concat(t)
                        .concat(n ? ":".concat(n) : "");
                }
                return r.env.VERCEL_PROJECT_PRODUCTION_URL
                    ? "https://".concat(r.env.VERCEL_PROJECT_PRODUCTION_URL)
                    : "https://www.signalsfs.com";
            };
        },
    },
    (e) => {
        var t = (t) => e((e.s = t));
        e.O(0, [7644, 9340, 261, 663, 7876, 5770, 4824, 1195, 8711, 6398, 7358], () => t(8275)), (_N_E = e.O());
    },
]);
