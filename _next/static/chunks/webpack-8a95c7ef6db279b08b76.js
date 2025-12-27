(() => {
    "use strict";
    var e = {},
        t = {};
    function r(a) {
        var n = t[a];
        if (void 0 !== n) return n.exports;
        var o = (t[a] = { exports: {} }),
            d = !0;
        try {
            e[a].call(o.exports, o, o.exports, r), (d = !1);
        } finally {
            d && delete t[a];
        }
        return o.exports;
    }
    (r.m = e),
        (() => {
            var e = [];
            r.O = (t, a, n, o) => {
                if (a) {
                    o = o || 0;
                    for (var d = e.length; d > 0 && e[d - 1][2] > o; d--) e[d] = e[d - 1];
                    e[d] = [a, n, o];
                    return;
                }
                for (var c = 1 / 0, d = 0; d < e.length; d++) {
                    for (var [a, n, o] = e[d], f = !0, i = 0; i < a.length; i++)
                        (!1 & o || c >= o) && Object.keys(r.O).every((e) => r.O[e](a[i]))
                            ? a.splice(i--, 1)
                            : ((f = !1), o < c && (c = o));
                    if (f) {
                        e.splice(d--, 1);
                        var l = n();
                        void 0 !== l && (t = l);
                    }
                }
                return t;
            };
        })(),
        (r.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return r.d(t, { a: t }), t;
        }),
        (() => {
            var e,
                t = Object.getPrototypeOf ? (e) => Object.getPrototypeOf(e) : (e) => e.__proto__;
            r.t = function (a, n) {
                if (
                    (1 & n && (a = this(a)),
                        8 & n ||
                        ("object" == typeof a &&
                            a &&
                            ((4 & n && a.__esModule) || (16 & n && "function" == typeof a.then))))
                )
                    return a;
                var o = Object.create(null);
                r.r(o);
                var d = {};
                e = e || [null, t({}), t([]), t(t)];
                for (var c = 2 & n && a; "object" == typeof c && !~e.indexOf(c); c = t(c))
                    Object.getOwnPropertyNames(c).forEach((e) => (d[e] = () => a[e]));
                return (d.default = () => a), r.d(o, d), o;
            };
        })(),
        (r.d = (e, t) => {
            for (var a in t) r.o(t, a) && !r.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
        }),
        (r.f = {}),
        (r.e = (e) => Promise.all(Object.keys(r.f).reduce((t, a) => (r.f[a](e, t), t), []))),
        (r.u = (e) =>
            "static/chunks/" +
            e +
            "." +
            {
                171: "8adee39a256259ff",
                260: "bb2e74ae43bee784",
                318: "e10c8b000b12c6b9",
                539: "17bc1f9b03a65bbe",
                802: "4fd0f6cae6ba1f20",
                854: "f0f25a4d0d811683",
                1188: "880e31c9fb38151e",
                1271: "4d5c7795b11c87ac",
                1400: "a8f15eb9a09f65dc",
                1902: "0593f4788c92ef32",
                2082: "7e4fcf2eb52df2c0",
                2510: "3458c22708be82d6",
                2645: "9641f78ac4d32f95",
                2854: "e5300d2f30ab8d14",
                2892: "ea587fc20e290031",
                3544: "26b59ed1a33a4ee7",
                3706: "e8798010c8a3f482",
                4767: "86b2b69198227212",
                4797: "3ac28bf158b1731c",
                5232: "c6362753a96ac4da",
                5276: "4739db98f5a311c6",
                5551: "2d09c3566d69e134",
                5971: "3e1853ea91971fa5",
                6157: "5bc7e40a6ededc8e",
                6185: "488d12ee1b16f6f9",
                6237: "baae2eae658667ec",
                6438: "29c33edb1a671568",
                6583: "8fa648293f35dd57",
                6647: "c75dc6b62b8299a0",
                6730: "5b5c33694a4fc79e",
                6764: "c69f19a9c7ae6e9d",
                6992: "5f74c3d6b5c92340",
                7116: "d00b371afde85a75",
                7211: "a9b08fe0f6866afe",
                7474: "f54a7669f96bbd4b",
                7571: "11ae21691877e87d",
                8415: "619911618fb87ba0",
                8487: "eb79e53540cdf894",
                8898: "b2aea04bb82b213b",
                8912: "7239906e3a2a1dbf",
                8934: "6f07ebe55a5c050b",
                9030: "0c0df4b2a6e18322",
                9115: "c51650806548e239",
                9360: "4636db67c208749a",
                9894: "5687b86d38b9ffaf",
            }[e] +
            ".js"),
        (r.miniCssF = (e) => "static/css/22e6784acfc6f08c.css"),
        (r.g = (function () {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || Function("return this")();
            } catch (e) {
                if ("object" == typeof window) return window;
            }
        })()),
        (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (() => {
            var e = {},
                t = "_N_E:";
            r.l = (a, n, o, d) => {
                if (e[a]) return void e[a].push(n);
                if (void 0 !== o)
                    for (var c, f, i = document.getElementsByTagName("script"), l = 0; l < i.length; l++) {
                        var u = i[l];
                        if (u.getAttribute("src") == a || u.getAttribute("data-webpack") == t + o) {
                            c = u;
                            break;
                        }
                    }
                c ||
                    ((f = !0),
                        ((c = document.createElement("script")).charset = "utf-8"),
                        (c.timeout = 120),
                        r.nc && c.setAttribute("nonce", r.nc),
                        c.setAttribute("data-webpack", t + o),
                        (c.src = r.tu(a))),
                    (e[a] = [n]);
                var s = (t, r) => {
                    (c.onerror = c.onload = null), clearTimeout(b);
                    var n = e[a];
                    if ((delete e[a], c.parentNode && c.parentNode.removeChild(c), n && n.forEach((e) => e(r)), t))
                        return t(r);
                },
                    b = setTimeout(s.bind(null, void 0, { type: "timeout", target: c }), 12e4);
                (c.onerror = s.bind(null, c.onerror)),
                    (c.onload = s.bind(null, c.onload)),
                    f;/*&& document.head.appendChild(c)*/
            };
        })(),
        (r.r = (e) => {
            "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
                Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (() => {
            var e;
            r.tt = () => (
                void 0 === e &&
                ((e = { createScriptURL: (e) => e }),
                    "undefined" != typeof trustedTypes &&
                    trustedTypes.createPolicy &&
                    (e = trustedTypes.createPolicy("nextjs#bundler", e))),
                e
            );
        })(),
        (r.tu = (e) => r.tt().createScriptURL(e)),
        (r.p = "/_next/"),
        (() => {
            var e = (e, t, r, a) => {
                var n = document.createElement("link");
                return (
                    (n.rel = "stylesheet"),
                    (n.type = "text/css"),
                    (n.onerror = n.onload =
                        (o) => {
                            if (((n.onerror = n.onload = null), "load" === o.type)) r();
                            else {
                                var d = o && ("load" === o.type ? "missing" : o.type),
                                    c = (o && o.target && o.target.href) || t,
                                    f = Error("Loading CSS chunk " + e + " failed.\n(" + c + ")");
                                (f.code = "CSS_CHUNK_LOAD_FAILED"),
                                    (f.type = d),
                                    (f.request = c),
                                    n.parentNode.removeChild(n),
                                    a(f);
                            }
                        }),
                    (n.href = t),
                    !(function (e) {
                        if ("function" == typeof _N_E_STYLE_LOAD) {
                            let { href: t, onload: r, onerror: a } = e;
                            _N_E_STYLE_LOAD(0 === t.indexOf(window.location.origin) ? new URL(t).pathname : t).then(
                                () => (null == r ? void 0 : r.call(e, { type: "load" })),
                                () => (null == a ? void 0 : a.call(e, {}))
                            );
                        } else document.head.appendChild(e);
                    })(n),
                    n
                );
            },
                t = (e, t) => {
                    for (var r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
                        var n = r[a],
                            o = n.getAttribute("data-href") || n.getAttribute("href");
                        if ("stylesheet" === n.rel && (o === e || o === t)) return n;
                    }
                    for (var d = document.getElementsByTagName("style"), a = 0; a < d.length; a++) {
                        var n = d[a],
                            o = n.getAttribute("data-href");
                        if (o === e || o === t) return n;
                    }
                },
                a = (a) =>
                    new Promise((n, o) => {
                        var d = r.miniCssF(a),
                            c = r.p + d;
                        if (t(d, c)) return n();
                        e(a, c, n, o);
                    }),
                n = { 8068: 0 };
            r.f.miniCss = (e, t) => {
                n[e]
                    ? t.push(n[e])
                    : 0 !== n[e] &&
                    { 3018: 1 }[e] &&
                    t.push(
                        (n[e] = a(e).then(
                            () => {
                                n[e] = 0;
                            },
                            (t) => {
                                throw (delete n[e], t);
                            }
                        ))
                    );
            };
        })(),
        (() => {
            var e = { 8068: 0, 9682: 0, 8601: 0, 8101: 0, 2541: 0, 7644: 0, 6638: 0 };
            (r.f.j = (t, a) => {
                var n = r.o(e, t) ? e[t] : void 0;
                if (0 !== n)
                    if (n) a.push(n[2]);
                    else if (/^(8([16]01|068)|2541|3018|6638|7644|9682)$/.test(t)) e[t] = 0;
                    else {
                        var o = new Promise((r, a) => (n = e[t] = [r, a]));
                        a.push((n[2] = o));
                        var d = r.p + r.u(t),
                            c = Error();
                        r.l(
                            d,
                            (a) => {
                                if (r.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
                                    var o = a && ("load" === a.type ? "missing" : a.type),
                                        d = a && a.target && a.target.src;
                                    (c.message = "Loading chunk " + t + " failed.\n(" + o + ": " + d + ")"),
                                        (c.name = "ChunkLoadError"),
                                        (c.type = o),
                                        (c.request = d),
                                        n[1](c);
                                }
                            },
                            "chunk-" + t,
                            t
                        );
                    }
            }),
                (r.O.j = (t) => 0 === e[t]);
            var t = (t, a) => {
                var n,
                    o,
                    [d, c, f] = a,
                    i = 0;
                if (d.some((t) => 0 !== e[t])) {
                    for (n in c) r.o(c, n) && (r.m[n] = c[n]);
                    if (f) var l = f(r);
                }
                for (t && t(a); i < d.length; i++) (o = d[i]), r.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
                return r.O(l);
            },
                a = (self.webpackChunk_N_E = self.webpackChunk_N_E || []);
            a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a)));
        })(),
        (r.nc = void 0);
})();
(function () {
    if (typeof document === "undefined" || !/(?:^|;\s)__vercel_toolbar=1(?:;|$)/.test(document.cookie)) return;
    var s = document.createElement("script");
    s.src = "https://vercel.live/_next-live/feedback/feedback.js";
    s.setAttribute("data-explicit-opt-in", "true");
    s.setAttribute("data-cookie-opt-in", "true");
    s.setAttribute("data-deployment-id", "dpl_83L6vq7Ui7Ub5PhdU3274E2VSipk");
    (document.head || document.documentElement).appendChild(s);
})();
