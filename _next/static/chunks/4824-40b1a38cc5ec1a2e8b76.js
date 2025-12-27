"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4824],
    {
        4228: (e, t, i) => {
            i.d(t, { A: () => S });
            let r,
                n,
                o,
                s = () => o || S.register(window.gsap),
                a = "undefined" != typeof Intl ? new Intl.Segmenter() : 0,
                l = (e) =>
                    "string" == typeof e ? l(document.querySelectorAll(e)) : "length" in e ? Array.from(e) : [e],
                c = (e) => l(e).filter((e) => e instanceof HTMLElement),
                u = [],
                h = function () { },
                d = /\s+/g,
                f = RegExp(
                    "\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.",
                    "gu"
                ),
                p = { left: 0, top: 0, width: 0, height: 0 },
                g = (e, t) => {
                    if (t) {
                        let i = new Set(e.join("").match(t) || u),
                            r = e.length,
                            n,
                            o,
                            s,
                            a;
                        if (i.size) {
                            for (; --r > -1;)
                                for (s of ((o = e[r]), i))
                                    if (s.startsWith(o) && s.length > o.length) {
                                        for (n = 0, a = o; s.startsWith((a += e[r + ++n])) && a.length < s.length;);
                                        if (n && a.length === s.length) {
                                            (e[r] = s), e.splice(r + 1, n);
                                            break;
                                        }
                                    }
                        }
                    }
                    return e;
                },
                m = (e) => "inline" === window.getComputedStyle(e).display && (e.style.display = "inline-block"),
                v = (e, t, i) => t.insertBefore("string" == typeof e ? document.createTextNode(e) : e, i),
                y = (e, t, i) => {
                    let r = t[e + "sClass"] || "",
                        { tag: n = "div", aria: o = "auto", propIndex: s = !1 } = t,
                        a = "line" === e ? "block" : "inline-block",
                        l = r.indexOf("++") > -1,
                        c = (t) => {
                            let c = document.createElement(n),
                                u = i.length + 1;
                            return (
                                r && (c.className = r + (l ? " " + r + u : "")),
                                s && c.style.setProperty("--" + e, u + ""),
                                "none" !== o && c.setAttribute("aria-hidden", "true"),
                                "span" !== n && ((c.style.position = "relative"), (c.style.display = a)),
                                (c.textContent = t),
                                i.push(c),
                                c
                            );
                        };
                    return l && (r = r.replace("++", "")), (c.collection = i), c;
                },
                w = (e, t, i, r) => {
                    let n = y("line", i, r),
                        o = window.getComputedStyle(e).textAlign || "left";
                    return (i, r) => {
                        let s = n("");
                        for (s.style.textAlign = o, e.insertBefore(s, t[i]); i < r; i++) s.appendChild(t[i]);
                        s.normalize();
                    };
                },
                b = (e, t, i, r, n, o, s, l, c, h) => {
                    var f;
                    let p = Array.from(e.childNodes),
                        y = 0,
                        { wordDelimiter: w, reduceWhiteSpace: x = !0, prepareText: S } = t,
                        _ = e.getBoundingClientRect(),
                        E = _,
                        C = !x && "pre" === window.getComputedStyle(e).whiteSpace.substring(0, 3),
                        T = 0,
                        M = i.collection,
                        P,
                        k,
                        O,
                        R,
                        A,
                        z,
                        N,
                        D,
                        L,
                        j,
                        W,
                        I,
                        H,
                        B,
                        F,
                        Y,
                        X,
                        U;
                    for (
                        "object" == typeof w
                            ? ((O = w.delimiter || w), (k = w.replaceWith || ""))
                            : (k = "" === w ? "" : w || " "),
                        P = " " !== k;
                        y < p.length;
                        y++
                    )
                        if (3 === (R = p[y]).nodeType) {
                            for (
                                F = R.textContent || "",
                                x ? (F = F.replace(d, " ")) : C && (F = F.replace(/\n/g, k + "\n")),
                                S && (F = S(F, e)),
                                R.textContent = F,
                                X = (A = k || O ? F.split(O || k) : F.match(l) || u)[A.length - 1],
                                D = P ? " " === X.slice(-1) : !X,
                                X || A.pop(),
                                E = _,
                                (N = P ? " " === A[0].charAt(0) : !A[0]) && v(" ", e, R),
                                A[0] || A.shift(),
                                g(A, c),
                                (o && h) || (R.textContent = ""),
                                L = 1;
                                L <= A.length;
                                L++
                            )
                                if (
                                    ((Y = A[L - 1]),
                                        !x &&
                                        C &&
                                        "\n" === Y.charAt(0) &&
                                        (null == (f = R.previousSibling) || f.remove(),
                                            v(document.createElement("br"), e, R),
                                            (Y = Y.slice(1))),
                                        x || "" !== Y)
                                )
                                    if (" " === Y) e.insertBefore(document.createTextNode(" "), R);
                                    else {
                                        if (
                                            (P && " " === Y.charAt(0) && v(" ", e, R),
                                                T && 1 === L && !N && M.indexOf(T.parentNode) > -1
                                                    ? (z = M[M.length - 1]).appendChild(document.createTextNode(r ? "" : Y))
                                                    : (v((z = i(r ? "" : Y)), e, R),
                                                        T && 1 === L && !N && z.insertBefore(T, z.firstChild)),
                                                r)
                                        )
                                            for (
                                                U = 0,
                                                W = a
                                                    ? g(
                                                        [...a.segment(Y)].map((e) => e.segment),
                                                        c
                                                    )
                                                    : Y.match(l) || u;
                                                U < W.length;
                                                U++
                                            )
                                                z.appendChild(" " === W[U] ? document.createTextNode(" ") : r(W[U]));
                                        if (o && h) {
                                            if (
                                                ((F = R.textContent = F.substring(Y.length + 1, F.length)),
                                                    (j = z.getBoundingClientRect()).top > E.top && j.left <= E.left)
                                            ) {
                                                for (I = e.cloneNode(), H = e.childNodes[0]; H && H !== z;)
                                                    (B = H), (H = H.nextSibling), I.appendChild(B);
                                                e.parentNode.insertBefore(I, e), n && m(I);
                                            }
                                            E = j;
                                        }
                                        (L < A.length || D) &&
                                            v(L >= A.length ? " " : P && " " === Y.slice(-1) ? " " + k : k, e, R);
                                    }
                                else v(k, e, R);
                            e.removeChild(R), (T = 0);
                        } else
                            1 === R.nodeType &&
                                (s && s.indexOf(R) > -1
                                    ? (M.indexOf(R.previousSibling) > -1 && M[M.length - 1].appendChild(R), (T = R))
                                    : (b(R, t, i, r, n, o, s, l, c, !0), (T = 0)),
                                    n && m(R));
                },
                x = class e {
                    constructor(e, t) {
                        (this.isSplit = !1),
                            s(),
                            (this.elements = c(e)),
                            (this.chars = []),
                            (this.words = []),
                            (this.lines = []),
                            (this.masks = []),
                            (this.vars = t),
                            (this._split = () => this.isSplit && this.split(this.vars));
                        let i = [],
                            r,
                            n = () => {
                                let e = i.length,
                                    t;
                                for (; e--;) {
                                    let r = (t = i[e]).element.offsetWidth;
                                    if (r !== t.width) {
                                        (t.width = r), this._split();
                                        return;
                                    }
                                }
                            };
                        (this._data = {
                            orig: i,
                            obs:
                                "undefined" != typeof ResizeObserver &&
                                new ResizeObserver(() => {
                                    clearTimeout(r), (r = setTimeout(n, 200));
                                }),
                        }),
                            h(this),
                            this.split(t);
                    }
                    split(e) {
                        this.isSplit && this.revert(), (this.vars = e = e || this.vars || {});
                        let {
                            type: t = "chars,words,lines",
                            aria: i = "auto",
                            deepSlice: r = !0,
                            smartWrap: o,
                            onSplit: s,
                            autoSplit: a = !1,
                            specialChars: u,
                            mask: h,
                        } = this.vars,
                            d = t.indexOf("lines") > -1,
                            g = t.indexOf("chars") > -1,
                            m = t.indexOf("words") > -1,
                            v = g && !m && !d,
                            x = u && ("push" in u ? RegExp("(?:" + u.join("|") + ")", "gu") : u),
                            S = x ? RegExp(x.source + "|" + f.source, "gu") : f,
                            _ = !!e.ignore && c(e.ignore),
                            { orig: E, animTime: C, obs: T } = this._data,
                            M;
                        return (
                            (g || m || d) &&
                            (this.elements.forEach((t, n) => {
                                (E[n] = {
                                    element: t,
                                    html: t.innerHTML,
                                    ariaL: t.getAttribute("aria-label"),
                                    ariaH: t.getAttribute("aria-hidden"),
                                }),
                                    "auto" === i
                                        ? t.setAttribute("aria-label", (t.textContent || "").trim())
                                        : "hidden" === i && t.setAttribute("aria-hidden", "true");
                                let s = [],
                                    a = [],
                                    c = [],
                                    u = g ? y("char", e, s) : null,
                                    h = y("word", e, a),
                                    f,
                                    C,
                                    T,
                                    M;
                                if ((b(t, e, h, u, v, r && (d || v), _, S, x, !1), d)) {
                                    let i = l(t.childNodes),
                                        r = w(t, i, e, c),
                                        n,
                                        o = [],
                                        s = 0,
                                        a = i.map((e) => (1 === e.nodeType ? e.getBoundingClientRect() : p)),
                                        u = p;
                                    for (f = 0; f < i.length; f++)
                                        1 === (n = i[f]).nodeType &&
                                            ("BR" === n.nodeName
                                                ? (o.push(n), r(s, f + 1), (u = a[(s = f + 1)]))
                                                : (f &&
                                                    a[f].top > u.top &&
                                                    a[f].left <= u.left &&
                                                    (r(s, f), (s = f)),
                                                    (u = a[f])));
                                    s < f && r(s, f),
                                        o.forEach((e) => {
                                            var t;
                                            return null == (t = e.parentNode) ? void 0 : t.removeChild(e);
                                        });
                                }
                                if (!m) {
                                    for (f = 0; f < a.length; f++)
                                        if (((C = a[f]), g || !C.nextSibling || 3 !== C.nextSibling.nodeType))
                                            if (o && !d) {
                                                for (
                                                    (T = document.createElement("span")).style.whiteSpace =
                                                    "nowrap";
                                                    C.firstChild;

                                                )
                                                    T.appendChild(C.firstChild);
                                                C.replaceWith(T);
                                            } else C.replaceWith(...C.childNodes);
                                        else
                                            (M = C.nextSibling) &&
                                                3 === M.nodeType &&
                                                ((M.textContent = (C.textContent || "") + (M.textContent || "")),
                                                    C.remove());
                                    (a.length = 0), t.normalize();
                                }
                                this.lines.push(...c), this.words.push(...a), this.chars.push(...s);
                            }),
                                h &&
                                this[h] &&
                                this.masks.push(
                                    ...this[h].map((e) => {
                                        let t = e.cloneNode();
                                        return (
                                            e.replaceWith(t),
                                            t.appendChild(e),
                                            e.className &&
                                            (t.className = e.className.replace(/(\b\w+\b)/g, "$1-mask")),
                                            (t.style.overflow = "clip"),
                                            t
                                        );
                                    })
                                )),
                            (this.isSplit = !0),
                            n &&
                            (a
                                ? n.addEventListener("loadingdone", this._split)
                                : "loading" === n.status && console.warn("SplitText called before fonts loaded")),
                            (M = s && s(this)) && M.totalTime && (this._data.anim = C ? M.totalTime(C) : M),
                            d &&
                            a &&
                            this.elements.forEach((e, t) => {
                                (E[t].width = e.offsetWidth), T && T.observe(e);
                            }),
                            this
                        );
                    }
                    revert() {
                        var e, t;
                        let { orig: i, anim: r, obs: o } = this._data;
                        return (
                            o && o.disconnect(),
                            i.forEach(({ element: e, html: t, ariaL: i, ariaH: r }) => {
                                (e.innerHTML = t),
                                    i ? e.setAttribute("aria-label", i) : e.removeAttribute("aria-label"),
                                    r ? e.setAttribute("aria-hidden", r) : e.removeAttribute("aria-hidden");
                            }),
                            (this.chars.length =
                                this.words.length =
                                this.lines.length =
                                i.length =
                                this.masks.length =
                                0),
                            (this.isSplit = !1),
                            null == n || n.removeEventListener("loadingdone", this._split),
                            r && ((this._data.animTime = r.totalTime()), r.revert()),
                            null == (t = (e = this.vars).onRevert) || t.call(e, this),
                            this
                        );
                    }
                    static create(t, i) {
                        return new e(t, i);
                    }
                    static register(e) {
                        (r = r || e || window.gsap) && ((l = r.utils.toArray), (h = r.core.context || h)),
                            !o && window.innerWidth > 0 && ((n = document.fonts), (o = !0));
                    }
                };
            x.version = "3.13.0";
            let S = x;
        },
        6142: (e, t, i) => {
            var r = i(34679);
            Object.defineProperty(t, "__esModule", { value: !0 }),
                !(function (e, t) {
                    for (var i in t) Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
                })(t, {
                    default: function () {
                        return m;
                    },
                    defaultHead: function () {
                        return d;
                    },
                });
            let n = i(84399),
                o = i(68940),
                s = i(32689),
                a = o._(i(19893)),
                l = n._(i(80451)),
                c = i(6994),
                u = i(60648),
                h = i(18774);
            function d(e) {
                void 0 === e && (e = !1);
                let t = [(0, s.jsx)("meta", { charSet: "utf-8" }, "charset")];
                return (
                    e || t.push((0, s.jsx)("meta", { name: "viewport", content: "width=device-width" }, "viewport")), t
                );
            }
            function f(e, t) {
                return "string" == typeof t || "number" == typeof t
                    ? e
                    : t.type === a.default.Fragment
                        ? e.concat(
                            a.default.Children.toArray(t.props.children).reduce(
                                (e, t) => ("string" == typeof t || "number" == typeof t ? e : e.concat(t)),
                                []
                            )
                        )
                        : e.concat(t);
            }
            i(47092);
            let p = ["name", "httpEquiv", "charSet", "itemProp"];
            function g(e, t) {
                let { inAmpMode: i } = t;
                return e
                    .reduce(f, [])
                    .reverse()
                    .concat(d(i).reverse())
                    .filter(
                        (function () {
                            let e = new Set(),
                                t = new Set(),
                                i = new Set(),
                                r = {};
                            return (n) => {
                                let o = !0,
                                    s = !1;
                                if (n.key && "number" != typeof n.key && n.key.indexOf("$") > 0) {
                                    s = !0;
                                    let t = n.key.slice(n.key.indexOf("$") + 1);
                                    e.has(t) ? (o = !1) : e.add(t);
                                }
                                switch (n.type) {
                                    case "title":
                                    case "base":
                                        t.has(n.type) ? (o = !1) : t.add(n.type);
                                        break;
                                    case "meta":
                                        for (let e = 0, t = p.length; e < t; e++) {
                                            let t = p[e];
                                            if (n.props.hasOwnProperty(t))
                                                if ("charSet" === t) i.has(t) ? (o = !1) : i.add(t);
                                                else {
                                                    let e = n.props[t],
                                                        i = r[t] || new Set();
                                                    ("name" !== t || !s) && i.has(e)
                                                        ? (o = !1)
                                                        : (i.add(e), (r[t] = i));
                                                }
                                        }
                                }
                                return o;
                            };
                        })()
                    )
                    .reverse()
                    .map((e, t) => {
                        let n = e.key || t;
                        if (
                            r.env.__NEXT_OPTIMIZE_FONTS &&
                            !i &&
                            "link" === e.type &&
                            e.props.href &&
                            ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some((t) =>
                                e.props.href.startsWith(t)
                            )
                        ) {
                            let t = { ...(e.props || {}) };
                            return (
                                (t["data-href"] = t.href),
                                (t.href = void 0),
                                (t["data-optimized-fonts"] = !0),
                                a.default.cloneElement(e, t)
                            );
                        }
                        return a.default.cloneElement(e, { key: n });
                    });
            }
            let m = function (e) {
                let { children: t } = e,
                    i = (0, a.useContext)(c.AmpStateContext),
                    r = (0, a.useContext)(u.HeadManagerContext);
                return (0, s.jsx)(l.default, {
                    reduceComponentsToState: g,
                    headManager: r,
                    inAmpMode: (0, h.isInAmpMode)(i),
                    children: t,
                });
            };
            ("function" == typeof t.default || ("object" == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, "__esModule", { value: !0 }),
                    Object.assign(t.default, t),
                    (e.exports = t.default));
        },
        6994: (e, t, i) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "AmpStateContext", {
                    enumerable: !0,
                    get: function () {
                        return r;
                    },
                });
            let r = i(84399)._(i(19893)).default.createContext({});
        },
        17678: (e, t) => {
            function i(e) {
                let { widthInt: t, heightInt: i, blurWidth: r, blurHeight: n, blurDataURL: o, objectFit: s } = e,
                    a = r ? 40 * r : t,
                    l = n ? 40 * n : i,
                    c = a && l ? "viewBox='0 0 " + a + " " + l + "'" : "";
                return (
                    "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
                    c +
                    "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
                    (c ? "none" : "contain" === s ? "xMidYMid" : "cover" === s ? "xMidYMid slice" : "none") +
                    "' style='filter: url(%23b);' href='" +
                    o +
                    "'/%3E%3C/svg%3E"
                );
            }
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "getImageBlurSvg", {
                    enumerable: !0,
                    get: function () {
                        return i;
                    },
                });
        },
        17902: (e, t, i) => {
            i.d(t, { u: () => t1 });
            var r,
                n,
                o,
                s,
                a,
                l,
                c,
                u,
                h,
                d,
                f,
                p,
                g,
                m = function () {
                    return r || ("undefined" != typeof window && (r = window.gsap) && r.registerPlugin && r);
                },
                v = 1,
                y = [],
                w = [],
                b = [],
                x = Date.now,
                S = function (e, t) {
                    return t;
                },
                _ = function () {
                    var e = h.core,
                        t = e.bridge || {},
                        i = e._scrollers,
                        r = e._proxies;
                    i.push.apply(i, w),
                        r.push.apply(r, b),
                        (w = i),
                        (b = r),
                        (S = function (e, i) {
                            return t[e](i);
                        });
                },
                E = function (e, t) {
                    return ~b.indexOf(e) && b[b.indexOf(e) + 1][t];
                },
                C = function (e) {
                    return !!~d.indexOf(e);
                },
                T = function (e, t, i, r, n) {
                    return e.addEventListener(t, i, { passive: !1 !== r, capture: !!n });
                },
                M = function (e, t, i, r) {
                    return e.removeEventListener(t, i, !!r);
                },
                P = "scrollLeft",
                k = "scrollTop",
                O = function () {
                    return (f && f.isPressed) || w.cache++;
                },
                R = function (e, t) {
                    var i = function i(r) {
                        if (r || 0 === r) {
                            v && (o.history.scrollRestoration = "manual");
                            var n = f && f.isPressed;
                            e((r = i.v = Math.round(r) || (f && f.iOS ? 1 : 0))),
                                (i.cacheID = w.cache),
                                n && S("ss", r);
                        } else (t || w.cache !== i.cacheID || S("ref")) && ((i.cacheID = w.cache), (i.v = e()));
                        return i.v + i.offset;
                    };
                    return (i.offset = 0), e && i;
                },
                A = {
                    s: P,
                    p: "left",
                    p2: "Left",
                    os: "right",
                    os2: "Right",
                    d: "width",
                    d2: "Width",
                    a: "x",
                    sc: R(function (e) {
                        return arguments.length ? o.scrollTo(e, z.sc()) : o.pageXOffset || s[P] || a[P] || l[P] || 0;
                    }),
                },
                z = {
                    s: k,
                    p: "top",
                    p2: "Top",
                    os: "bottom",
                    os2: "Bottom",
                    d: "height",
                    d2: "Height",
                    a: "y",
                    op: A,
                    sc: R(function (e) {
                        return arguments.length ? o.scrollTo(A.sc(), e) : o.pageYOffset || s[k] || a[k] || l[k] || 0;
                    }),
                },
                N = function (e, t) {
                    return (
                        ((t && t._ctx && t._ctx.selector) || r.utils.toArray)(e)[0] ||
                        ("string" == typeof e && !1 !== r.config().nullTargetWarn
                            ? console.warn("Element not found:", e)
                            : null)
                    );
                },
                D = function (e, t) {
                    for (var i = t.length; i--;) if (t[i] === e || t[i].contains(e)) return !0;
                    return !1;
                },
                L = function (e, t) {
                    var i = t.s,
                        n = t.sc;
                    C(e) && (e = s.scrollingElement || a);
                    var o = w.indexOf(e),
                        l = n === z.sc ? 1 : 2;
                    ~o || (o = w.push(e) - 1), w[o + l] || T(e, "scroll", O);
                    var c = w[o + l],
                        u =
                            c ||
                            (w[o + l] =
                                R(E(e, i), !0) ||
                                (C(e)
                                    ? n
                                    : R(function (t) {
                                        return arguments.length ? (e[i] = t) : e[i];
                                    })));
                    return (u.target = e), c || (u.smooth = "smooth" === r.getProperty(e, "scrollBehavior")), u;
                },
                j = function (e, t, i) {
                    var r = e,
                        n = e,
                        o = x(),
                        s = o,
                        a = t || 50,
                        l = Math.max(500, 3 * a),
                        c = function (e, t) {
                            var l = x();
                            t || l - o > a
                                ? ((n = r), (r = e), (s = o), (o = l))
                                : i
                                    ? (r += e)
                                    : (r = n + ((e - n) / (l - s)) * (o - s));
                        };
                    return {
                        update: c,
                        reset: function () {
                            (n = r = i ? 0 : r), (s = o = 0);
                        },
                        getVelocity: function (e) {
                            var t = s,
                                a = n,
                                u = x();
                            return (
                                (e || 0 === e) && e !== r && c(e),
                                o === s || u - s > l ? 0 : ((r + (i ? a : -a)) / ((i ? u : o) - t)) * 1e3
                            );
                        },
                    };
                },
                W = function (e, t) {
                    return t && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e;
                },
                I = function (e) {
                    var t = Math.max.apply(Math, e),
                        i = Math.min.apply(Math, e);
                    return Math.abs(t) >= Math.abs(i) ? t : i;
                },
                H = function () {
                    (h = r.core.globals().ScrollTrigger) && h.core && _();
                },
                B = function (e) {
                    return (
                        (r = e || m()),
                        !n &&
                        r &&
                        "undefined" != typeof document &&
                        document.body &&
                        ((o = window),
                            (a = (s = document).documentElement),
                            (l = s.body),
                            (d = [o, s, a, l]),
                            r.utils.clamp,
                            (g = r.core.context || function () { }),
                            (u = "onpointerenter" in l ? "pointer" : "mouse"),
                            (c = F.isTouch =
                                o.matchMedia && o.matchMedia("(hover: none), (pointer: coarse)").matches
                                    ? 1
                                    : 2 *
                                    ("ontouchstart" in o ||
                                        navigator.maxTouchPoints > 0 ||
                                        navigator.msMaxTouchPoints > 0)),
                            (p = F.eventTypes =
                                (
                                    "ontouchstart" in a
                                        ? "touchstart,touchmove,touchcancel,touchend"
                                        : !("onpointerdown" in a)
                                            ? "mousedown,mousemove,mouseup,mouseup"
                                            : "pointerdown,pointermove,pointercancel,pointerup"
                                ).split(",")),
                            setTimeout(function () {
                                return (v = 0);
                            }, 500),
                            H(),
                            (n = 1)),
                        n
                    );
                };
            (A.op = z), (w.cache = 0);
            var F = (function () {
                var e;
                function t(e) {
                    this.init(e);
                }
                return (
                    (t.prototype.init = function (e) {
                        n || B(r) || console.warn("Please gsap.registerPlugin(Observer)"), h || H();
                        var t = e.tolerance,
                            i = e.dragMinimum,
                            d = e.type,
                            m = e.target,
                            v = e.lineHeight,
                            w = e.debounce,
                            b = e.preventDefault,
                            S = e.onStop,
                            _ = e.onStopDelay,
                            E = e.ignore,
                            P = e.wheelSpeed,
                            k = e.event,
                            R = e.onDragStart,
                            F = e.onDragEnd,
                            Y = e.onDrag,
                            X = e.onPress,
                            U = e.onRelease,
                            V = e.onRight,
                            q = e.onLeft,
                            G = e.onUp,
                            $ = e.onDown,
                            Z = e.onChangeX,
                            J = e.onChangeY,
                            K = e.onChange,
                            Q = e.onToggleX,
                            ee = e.onToggleY,
                            et = e.onHover,
                            ei = e.onHoverEnd,
                            er = e.onMove,
                            en = e.ignoreCheck,
                            eo = e.isNormalizer,
                            es = e.onGestureStart,
                            ea = e.onGestureEnd,
                            el = e.onWheel,
                            ec = e.onEnable,
                            eu = e.onDisable,
                            eh = e.onClick,
                            ed = e.scrollSpeed,
                            ef = e.capture,
                            ep = e.allowClicks,
                            eg = e.lockAxis,
                            em = e.onLockAxis;
                        (this.target = m = N(m) || a),
                            (this.vars = e),
                            E && (E = r.utils.toArray(E)),
                            (t = t || 1e-9),
                            (i = i || 0),
                            (P = P || 1),
                            (ed = ed || 1),
                            (d = d || "wheel,touch,pointer"),
                            (w = !1 !== w),
                            v || (v = parseFloat(o.getComputedStyle(l).lineHeight) || 22);
                        var ev,
                            ey,
                            ew,
                            eb,
                            ex,
                            eS,
                            e_,
                            eE = this,
                            eC = 0,
                            eT = 0,
                            eM = e.passive || (!b && !1 !== e.passive),
                            eP = L(m, A),
                            ek = L(m, z),
                            eO = eP(),
                            eR = ek(),
                            eA = ~d.indexOf("touch") && !~d.indexOf("pointer") && "pointerdown" === p[0],
                            ez = C(m),
                            eN = m.ownerDocument || s,
                            eD = [0, 0, 0],
                            eL = [0, 0, 0],
                            ej = 0,
                            eW = function () {
                                return (ej = x());
                            },
                            eI = function (e, t) {
                                return (
                                    ((eE.event = e) && E && D(e.target, E)) ||
                                    (t && eA && "touch" !== e.pointerType) ||
                                    (en && en(e, t))
                                );
                            },
                            eH = function () {
                                var e = (eE.deltaX = I(eD)),
                                    i = (eE.deltaY = I(eL)),
                                    r = Math.abs(e) >= t,
                                    n = Math.abs(i) >= t;
                                K && (r || n) && K(eE, e, i, eD, eL),
                                    r &&
                                    (V && eE.deltaX > 0 && V(eE),
                                        q && eE.deltaX < 0 && q(eE),
                                        Z && Z(eE),
                                        Q && eE.deltaX < 0 != eC < 0 && Q(eE),
                                        (eC = eE.deltaX),
                                        (eD[0] = eD[1] = eD[2] = 0)),
                                    n &&
                                    ($ && eE.deltaY > 0 && $(eE),
                                        G && eE.deltaY < 0 && G(eE),
                                        J && J(eE),
                                        ee && eE.deltaY < 0 != eT < 0 && ee(eE),
                                        (eT = eE.deltaY),
                                        (eL[0] = eL[1] = eL[2] = 0)),
                                    (eb || ew) &&
                                    (er && er(eE), ew && (R && 1 === ew && R(eE), Y && Y(eE), (ew = 0)), (eb = !1)),
                                    eS && ((eS = !1), 1) && em && em(eE),
                                    ex && (el(eE), (ex = !1)),
                                    (ev = 0);
                            },
                            eB = function (e, t, i) {
                                (eD[i] += e),
                                    (eL[i] += t),
                                    eE._vx.update(e),
                                    eE._vy.update(t),
                                    w ? ev || (ev = requestAnimationFrame(eH)) : eH();
                            },
                            eF = function (e, t) {
                                eg && !e_ && ((eE.axis = e_ = Math.abs(e) > Math.abs(t) ? "x" : "y"), (eS = !0)),
                                    "y" !== e_ && ((eD[2] += e), eE._vx.update(e, !0)),
                                    "x" !== e_ && ((eL[2] += t), eE._vy.update(t, !0)),
                                    w ? ev || (ev = requestAnimationFrame(eH)) : eH();
                            },
                            eY = function (e) {
                                if (!eI(e, 1)) {
                                    var t = (e = W(e, b)).clientX,
                                        r = e.clientY,
                                        n = t - eE.x,
                                        o = r - eE.y,
                                        s = eE.isDragging;
                                    (eE.x = t),
                                        (eE.y = r),
                                        (s ||
                                            ((n || o) &&
                                                (Math.abs(eE.startX - t) >= i || Math.abs(eE.startY - r) >= i))) &&
                                        ((ew = s ? 2 : 1), s || (eE.isDragging = !0), eF(n, o));
                                }
                            },
                            eX = (eE.onPress = function (e) {
                                eI(e, 1) ||
                                    (e && e.button) ||
                                    ((eE.axis = e_ = null),
                                        ey.pause(),
                                        (eE.isPressed = !0),
                                        (e = W(e)),
                                        (eC = eT = 0),
                                        (eE.startX = eE.x = e.clientX),
                                        (eE.startY = eE.y = e.clientY),
                                        eE._vx.reset(),
                                        eE._vy.reset(),
                                        T(eo ? m : eN, p[1], eY, eM, !0),
                                        (eE.deltaX = eE.deltaY = 0),
                                        X && X(eE));
                            }),
                            eU = (eE.onRelease = function (e) {
                                if (!eI(e, 1)) {
                                    M(eo ? m : eN, p[1], eY, !0);
                                    var t = !isNaN(eE.y - eE.startY),
                                        i = eE.isDragging,
                                        n = i && (Math.abs(eE.x - eE.startX) > 3 || Math.abs(eE.y - eE.startY) > 3),
                                        s = W(e);
                                    !n &&
                                        t &&
                                        (eE._vx.reset(),
                                            eE._vy.reset(),
                                            b &&
                                            ep &&
                                            r.delayedCall(0.08, function () {
                                                if (x() - ej > 300 && !e.defaultPrevented) {
                                                    if (e.target.click) e.target.click();
                                                    else if (eN.createEvent) {
                                                        var t = eN.createEvent("MouseEvents");
                                                        t.initMouseEvent(
                                                            "click",
                                                            !0,
                                                            !0,
                                                            o,
                                                            1,
                                                            s.screenX,
                                                            s.screenY,
                                                            s.clientX,
                                                            s.clientY,
                                                            !1,
                                                            !1,
                                                            !1,
                                                            !1,
                                                            0,
                                                            null
                                                        ),
                                                            e.target.dispatchEvent(t);
                                                    }
                                                }
                                            })),
                                        (eE.isDragging = eE.isGesturing = eE.isPressed = !1),
                                        S && i && !eo && ey.restart(!0),
                                        ew && eH(),
                                        F && i && F(eE),
                                        U && U(eE, n);
                                }
                            }),
                            eV = function (e) {
                                return (
                                    e.touches && e.touches.length > 1 && (eE.isGesturing = !0) && es(e, eE.isDragging)
                                );
                            },
                            eq = function () {
                                return (eE.isGesturing = !1), ea(eE);
                            },
                            eG = function (e) {
                                if (!eI(e)) {
                                    var t = eP(),
                                        i = ek();
                                    eB((t - eO) * ed, (i - eR) * ed, 1), (eO = t), (eR = i), S && ey.restart(!0);
                                }
                            },
                            e$ = function (e) {
                                if (!eI(e)) {
                                    (e = W(e, b)), el && (ex = !0);
                                    var t = (1 === e.deltaMode ? v : 2 === e.deltaMode ? o.innerHeight : 1) * P;
                                    eB(e.deltaX * t, e.deltaY * t, 0), S && !eo && ey.restart(!0);
                                }
                            },
                            eZ = function (e) {
                                if (!eI(e)) {
                                    var t = e.clientX,
                                        i = e.clientY,
                                        r = t - eE.x,
                                        n = i - eE.y;
                                    (eE.x = t), (eE.y = i), (eb = !0), S && ey.restart(!0), (r || n) && eF(r, n);
                                }
                            },
                            eJ = function (e) {
                                (eE.event = e), et(eE);
                            },
                            eK = function (e) {
                                (eE.event = e), ei(eE);
                            },
                            eQ = function (e) {
                                return eI(e) || (W(e, b) && eh(eE));
                            };
                        (ey = eE._dc =
                            r
                                .delayedCall(_ || 0.25, function () {
                                    eE._vx.reset(), eE._vy.reset(), ey.pause(), S && S(eE);
                                })
                                .pause()),
                            (eE.deltaX = eE.deltaY = 0),
                            (eE._vx = j(0, 50, !0)),
                            (eE._vy = j(0, 50, !0)),
                            (eE.scrollX = eP),
                            (eE.scrollY = ek),
                            (eE.isDragging = eE.isGesturing = eE.isPressed = !1),
                            g(this),
                            (eE.enable = function (e) {
                                return (
                                    !eE.isEnabled &&
                                    (T(ez ? eN : m, "scroll", O),
                                        d.indexOf("scroll") >= 0 && T(ez ? eN : m, "scroll", eG, eM, ef),
                                        d.indexOf("wheel") >= 0 && T(m, "wheel", e$, eM, ef),
                                        ((d.indexOf("touch") >= 0 && c) || d.indexOf("pointer") >= 0) &&
                                        (T(m, p[0], eX, eM, ef),
                                            T(eN, p[2], eU),
                                            T(eN, p[3], eU),
                                            ep && T(m, "click", eW, !0, !0),
                                            eh && T(m, "click", eQ),
                                            es && T(eN, "gesturestart", eV),
                                            ea && T(eN, "gestureend", eq),
                                            et && T(m, u + "enter", eJ),
                                            ei && T(m, u + "leave", eK),
                                            er && T(m, u + "move", eZ)),
                                        (eE.isEnabled = !0),
                                        (eE.isDragging = eE.isGesturing = eE.isPressed = eb = ew = !1),
                                        eE._vx.reset(),
                                        eE._vy.reset(),
                                        (eO = eP()),
                                        (eR = ek()),
                                        e && e.type && eX(e),
                                        ec && ec(eE)),
                                    eE
                                );
                            }),
                            (eE.disable = function () {
                                eE.isEnabled &&
                                    (y.filter(function (e) {
                                        return e !== eE && C(e.target);
                                    }).length || M(ez ? eN : m, "scroll", O),
                                        eE.isPressed && (eE._vx.reset(), eE._vy.reset(), M(eo ? m : eN, p[1], eY, !0)),
                                        M(ez ? eN : m, "scroll", eG, ef),
                                        M(m, "wheel", e$, ef),
                                        M(m, p[0], eX, ef),
                                        M(eN, p[2], eU),
                                        M(eN, p[3], eU),
                                        M(m, "click", eW, !0),
                                        M(m, "click", eQ),
                                        M(eN, "gesturestart", eV),
                                        M(eN, "gestureend", eq),
                                        M(m, u + "enter", eJ),
                                        M(m, u + "leave", eK),
                                        M(m, u + "move", eZ),
                                        (eE.isEnabled = eE.isPressed = eE.isDragging = !1),
                                        eu && eu(eE));
                            }),
                            (eE.kill = eE.revert =
                                function () {
                                    eE.disable();
                                    var e = y.indexOf(eE);
                                    e >= 0 && y.splice(e, 1), f === eE && (f = 0);
                                }),
                            y.push(eE),
                            eo && C(m) && (f = eE),
                            eE.enable(k);
                    }),
                    (e = [
                        {
                            key: "velocityX",
                            get: function () {
                                return this._vx.getVelocity();
                            },
                        },
                        {
                            key: "velocityY",
                            get: function () {
                                return this._vy.getVelocity();
                            },
                        },
                    ]),
                    (function (e, t) {
                        for (var i = 0; i < t.length; i++) {
                            var r = t[i];
                            (r.enumerable = r.enumerable || !1),
                                (r.configurable = !0),
                                "value" in r && (r.writable = !0),
                                Object.defineProperty(e, r.key, r);
                        }
                    })(t.prototype, e),
                    t
                );
            })();
            (F.version = "3.13.0"),
                (F.create = function (e) {
                    return new F(e);
                }),
                (F.register = B),
                (F.getAll = function () {
                    return y.slice();
                }),
                (F.getById = function (e) {
                    return y.filter(function (t) {
                        return t.vars.id === e;
                    })[0];
                }),
                m() && r.registerPlugin(F);
            var Y,
                X,
                U,
                V,
                q,
                G,
                $,
                Z,
                J,
                K,
                Q,
                ee,
                et,
                ei,
                er,
                en,
                eo,
                es,
                ea,
                el,
                ec,
                eu,
                eh,
                ed,
                ef,
                ep,
                eg,
                em,
                ev,
                ey,
                ew,
                eb,
                ex,
                eS,
                e_,
                eE,
                eC,
                eT,
                eM = 1,
                eP = Date.now,
                ek = eP(),
                eO = 0,
                eR = 0,
                eA = function (e, t, i) {
                    var r = eV(e) && ("clamp(" === e.substr(0, 6) || e.indexOf("max") > -1);
                    return (i["_" + t + "Clamp"] = r), r ? e.substr(6, e.length - 7) : e;
                },
                ez = function (e, t) {
                    return t && (!eV(e) || "clamp(" !== e.substr(0, 6)) ? "clamp(" + e + ")" : e;
                },
                eN = function () {
                    return (ei = 1);
                },
                eD = function () {
                    return (ei = 0);
                },
                eL = function (e) {
                    return e;
                },
                ej = function (e) {
                    return Math.round(1e5 * e) / 1e5 || 0;
                },
                eW = function () {
                    return "undefined" != typeof window;
                },
                eI = function () {
                    return Y || (eW() && (Y = window.gsap) && Y.registerPlugin && Y);
                },
                eH = function (e) {
                    return !!~$.indexOf(e);
                },
                eB = function (e) {
                    return ("Height" === e ? ew : U["inner" + e]) || q["client" + e] || G["client" + e];
                },
                eF = function (e) {
                    return (
                        E(e, "getBoundingClientRect") ||
                        (eH(e)
                            ? function () {
                                return (tG.width = U.innerWidth), (tG.height = ew), tG;
                            }
                            : function () {
                                return tn(e);
                            })
                    );
                },
                eY = function (e, t, i) {
                    var r = i.d,
                        n = i.d2,
                        o = i.a;
                    return (o = E(e, "getBoundingClientRect"))
                        ? function () {
                            return o()[r];
                        }
                        : function () {
                            return (t ? eB(n) : e["client" + n]) || 0;
                        };
                },
                eX = function (e, t) {
                    var i = t.s,
                        r = t.d2,
                        n = t.d,
                        o = t.a;
                    return Math.max(
                        0,
                        (o = E(e, (i = "scroll" + r)))
                            ? o() - eF(e)()[n]
                            : eH(e)
                                ? (q[i] || G[i]) - eB(r)
                                : e[i] - e["offset" + r]
                    );
                },
                eU = function (e, t) {
                    for (var i = 0; i < ea.length; i += 3)
                        (!t || ~t.indexOf(ea[i + 1])) && e(ea[i], ea[i + 1], ea[i + 2]);
                },
                eV = function (e) {
                    return "string" == typeof e;
                },
                eq = function (e) {
                    return "function" == typeof e;
                },
                eG = function (e) {
                    return "number" == typeof e;
                },
                e$ = function (e) {
                    return "object" == typeof e;
                },
                eZ = function (e, t, i) {
                    return e && e.progress(+!t) && i && e.pause();
                },
                eJ = function (e, t) {
                    if (e.enabled) {
                        var i = e._ctx
                            ? e._ctx.add(function () {
                                return t(e);
                            })
                            : t(e);
                        i && i.totalTime && (e.callbackAnimation = i);
                    }
                },
                eK = Math.abs,
                eQ = "left",
                e0 = "right",
                e1 = "bottom",
                e2 = "width",
                e3 = "height",
                e4 = "Right",
                e5 = "Left",
                e8 = "Bottom",
                e9 = "padding",
                e6 = "margin",
                e7 = "Width",
                te = "Height",
                tt = function (e) {
                    return U.getComputedStyle(e);
                },
                ti = function (e) {
                    var t = tt(e).position;
                    e.style.position = "absolute" === t || "fixed" === t ? t : "relative";
                },
                tr = function (e, t) {
                    for (var i in t) i in e || (e[i] = t[i]);
                    return e;
                },
                tn = function (e, t) {
                    var i =
                        t &&
                        "matrix(1, 0, 0, 1, 0, 0)" !== tt(e)[er] &&
                        Y.to(e, {
                            x: 0,
                            y: 0,
                            xPercent: 0,
                            yPercent: 0,
                            rotation: 0,
                            rotationX: 0,
                            rotationY: 0,
                            scale: 1,
                            skewX: 0,
                            skewY: 0,
                        }).progress(1),
                        r = e.getBoundingClientRect();
                    return i && i.progress(0).kill(), r;
                },
                to = function (e, t) {
                    var i = t.d2;
                    return e["offset" + i] || e["client" + i] || 0;
                },
                ts = function (e) {
                    var t,
                        i = [],
                        r = e.labels,
                        n = e.duration();
                    for (t in r) i.push(r[t] / n);
                    return i;
                },
                ta = function (e) {
                    var t = Y.utils.snap(e),
                        i =
                            Array.isArray(e) &&
                            e.slice(0).sort(function (e, t) {
                                return e - t;
                            });
                    return i
                        ? function (e, r, n) {
                            var o;
                            if ((void 0 === n && (n = 0.001), !r)) return t(e);
                            if (r > 0) {
                                for (e -= n, o = 0; o < i.length; o++) if (i[o] >= e) return i[o];
                                return i[o - 1];
                            }
                            for (o = i.length, e += n; o--;) if (i[o] <= e) return i[o];
                            return i[0];
                        }
                        : function (i, r, n) {
                            void 0 === n && (n = 0.001);
                            var o = t(i);
                            return !r || Math.abs(o - i) < n || o - i < 0 == r < 0 ? o : t(r < 0 ? i - e : i + e);
                        };
                },
                tl = function (e, t, i, r) {
                    return i.split(",").forEach(function (i) {
                        return e(t, i, r);
                    });
                },
                tc = function (e, t, i, r, n) {
                    return e.addEventListener(t, i, { passive: !r, capture: !!n });
                },
                tu = function (e, t, i, r) {
                    return e.removeEventListener(t, i, !!r);
                },
                th = function (e, t, i) {
                    (i = i && i.wheelHandler) && (e(t, "wheel", i), e(t, "touchmove", i));
                },
                td = { startColor: "green", endColor: "red", indent: 0, fontSize: "16px", fontWeight: "normal" },
                tf = { toggleActions: "play", anticipatePin: 0 },
                tp = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
                tg = function (e, t) {
                    if (eV(e)) {
                        var i = e.indexOf("="),
                            r = ~i ? (e.charAt(i - 1) + 1) * parseFloat(e.substr(i + 1)) : 0;
                        ~i && (e.indexOf("%") > i && (r *= t / 100), (e = e.substr(0, i - 1))),
                            (e =
                                r +
                                (e in tp
                                    ? tp[e] * t
                                    : ~e.indexOf("%")
                                        ? (parseFloat(e) * t) / 100
                                        : parseFloat(e) || 0));
                    }
                    return e;
                },
                tm = function (e, t, i, r, n, o, s, a) {
                    var l = n.startColor,
                        c = n.endColor,
                        u = n.fontSize,
                        h = n.indent,
                        d = n.fontWeight,
                        f = V.createElement("div"),
                        p = eH(i) || "fixed" === E(i, "pinType"),
                        g = -1 !== e.indexOf("scroller"),
                        m = p ? G : i,
                        v = -1 !== e.indexOf("start"),
                        y = v ? l : c,
                        w =
                            "border-color:" +
                            y +
                            ";font-size:" +
                            u +
                            ";color:" +
                            y +
                            ";font-weight:" +
                            d +
                            ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
                    return (
                        (w += "position:" + ((g || a) && p ? "fixed;" : "absolute;")),
                        (g || a || !p) && (w += (r === z ? e0 : e1) + ":" + (o + parseFloat(h)) + "px;"),
                        s && (w += "box-sizing:border-box;text-align:left;width:" + s.offsetWidth + "px;"),
                        (f._isStart = v),
                        f.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
                        (f.style.cssText = w),
                        (f.innerText = t || 0 === t ? e + "-" + t : e),
                        m.children[0] ? m.insertBefore(f, m.children[0]) : m.appendChild(f),
                        (f._offset = f["offset" + r.op.d2]),
                        tv(f, 0, r, v),
                        f
                    );
                },
                tv = function (e, t, i, r) {
                    var n = { display: "block" },
                        o = i[r ? "os2" : "p2"],
                        s = i[r ? "p2" : "os2"];
                    (e._isFlipped = r),
                        (n[i.a + "Percent"] = r ? -100 : 0),
                        (n[i.a] = r ? "1px" : 0),
                        (n["border" + o + e7] = 1),
                        (n["border" + s + e7] = 0),
                        (n[i.p] = t + "px"),
                        Y.set(e, n);
                },
                ty = [],
                tw = {},
                tb = function () {
                    return eP() - eO > 34 && (e_ || (e_ = requestAnimationFrame(tI)));
                },
                tx = function () {
                    (eh && eh.isPressed && !(eh.startX > G.clientWidth)) ||
                        (w.cache++,
                            eh ? e_ || (e_ = requestAnimationFrame(tI)) : tI(),
                            eO || tM("scrollStart"),
                            (eO = eP()));
                },
                tS = function () {
                    (ep = U.innerWidth), (ef = U.innerHeight);
                },
                t_ = function (e) {
                    w.cache++,
                        (!0 === e ||
                            (!et &&
                                !eu &&
                                !V.fullscreenElement &&
                                !V.webkitFullscreenElement &&
                                (!ed || ep !== U.innerWidth || Math.abs(U.innerHeight - ef) > 0.25 * U.innerHeight))) &&
                        Z.restart(!0);
                },
                tE = {},
                tC = [],
                tT = function e() {
                    return tu(t1, "scrollEnd", e) || tL(!0);
                },
                tM = function (e) {
                    return (
                        (tE[e] &&
                            tE[e].map(function (e) {
                                return e();
                            })) ||
                        tC
                    );
                },
                tP = [],
                tk = function (e) {
                    for (var t = 0; t < tP.length; t += 5)
                        (!e || (tP[t + 4] && tP[t + 4].query === e)) &&
                            ((tP[t].style.cssText = tP[t + 1]),
                                tP[t].getBBox && tP[t].setAttribute("transform", tP[t + 2] || ""),
                                (tP[t + 3].uncache = 1));
                },
                tO = function (e, t) {
                    var i;
                    for (en = 0; en < ty.length; en++)
                        (i = ty[en]) && (!t || i._ctx === t) && (e ? i.kill(1) : i.revert(!0, !0));
                    (eb = !0), t && tk(t), t || tM("revert");
                },
                tR = function (e, t) {
                    w.cache++,
                        (t || !eE) &&
                        w.forEach(function (e) {
                            return eq(e) && e.cacheID++ && (e.rec = 0);
                        }),
                        eV(e) && (U.history.scrollRestoration = ev = e);
                },
                tA = 0,
                tz = function () {
                    if (eC !== tA) {
                        var e = (eC = tA);
                        requestAnimationFrame(function () {
                            return e === tA && tL(!0);
                        });
                    }
                },
                tN = function () {
                    G.appendChild(ey), (ew = (!eh && ey.offsetHeight) || U.innerHeight), G.removeChild(ey);
                },
                tD = function (e) {
                    return J(
                        ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
                    ).forEach(function (t) {
                        return (t.style.display = e ? "none" : "block");
                    });
                },
                tL = function (e, t) {
                    if (((q = V.documentElement), (G = V.body), ($ = [U, V, q, G]), eO && !e && !eb))
                        return void tc(t1, "scrollEnd", tT);
                    tN(),
                        (eE = t1.isRefreshing = !0),
                        w.forEach(function (e) {
                            return eq(e) && ++e.cacheID && (e.rec = e());
                        });
                    var i = tM("refreshInit");
                    el && t1.sort(),
                        t || tO(),
                        w.forEach(function (e) {
                            eq(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0));
                        }),
                        ty.slice(0).forEach(function (e) {
                            return e.refresh();
                        }),
                        (eb = !1),
                        ty.forEach(function (e) {
                            if (e._subPinOffset && e.pin) {
                                var t = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                                    i = e.pin[t];
                                e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - i), e.refresh();
                            }
                        }),
                        (ex = 1),
                        tD(!0),
                        ty.forEach(function (e) {
                            var t = eX(e.scroller, e._dir),
                                i = "max" === e.vars.end || (e._endClamp && e.end > t),
                                r = e._startClamp && e.start >= t;
                            (i || r) &&
                                e.setPositions(r ? t - 1 : e.start, i ? Math.max(r ? t : e.start + 1, t) : e.end, !0);
                        }),
                        tD(!1),
                        (ex = 0),
                        i.forEach(function (e) {
                            return e && e.render && e.render(-1);
                        }),
                        w.forEach(function (e) {
                            eq(e) &&
                                (e.smooth &&
                                    requestAnimationFrame(function () {
                                        return (e.target.style.scrollBehavior = "smooth");
                                    }),
                                    e.rec && e(e.rec));
                        }),
                        tR(ev, 1),
                        Z.pause(),
                        tA++,
                        (eE = 2),
                        tI(2),
                        ty.forEach(function (e) {
                            return eq(e.vars.onRefresh) && e.vars.onRefresh(e);
                        }),
                        (eE = t1.isRefreshing = !1),
                        tM("refresh");
                },
                tj = 0,
                tW = 1,
                tI = function (e) {
                    if (2 === e || (!eE && !eb)) {
                        (t1.isUpdating = !0), eT && eT.update(0);
                        var t = ty.length,
                            i = eP(),
                            r = i - ek >= 50,
                            n = t && ty[0].scroll();
                        if (
                            ((tW = tj > n ? -1 : 1),
                                eE || (tj = n),
                                r && (eO && !ei && i - eO > 200 && ((eO = 0), tM("scrollEnd")), (Q = ek), (ek = i)),
                                tW < 0)
                        ) {
                            for (en = t; en-- > 0;) ty[en] && ty[en].update(0, r);
                            tW = 1;
                        } else for (en = 0; en < t; en++) ty[en] && ty[en].update(0, r);
                        t1.isUpdating = !1;
                    }
                    e_ = 0;
                },
                tH = [
                    eQ,
                    "top",
                    e1,
                    e0,
                    e6 + e8,
                    e6 + e4,
                    e6 + "Top",
                    e6 + e5,
                    "display",
                    "flexShrink",
                    "float",
                    "zIndex",
                    "gridColumnStart",
                    "gridColumnEnd",
                    "gridRowStart",
                    "gridRowEnd",
                    "gridArea",
                    "justifySelf",
                    "alignSelf",
                    "placeSelf",
                    "order",
                ],
                tB = tH.concat([
                    e2,
                    e3,
                    "boxSizing",
                    "max" + e7,
                    "max" + te,
                    "position",
                    e6,
                    e9,
                    e9 + "Top",
                    e9 + e4,
                    e9 + e8,
                    e9 + e5,
                ]),
                tF = function (e, t, i) {
                    tU(i);
                    var r = e._gsap;
                    if (r.spacerIsNative) tU(r.spacerState);
                    else if (e._gsap.swappedIn) {
                        var n = t.parentNode;
                        n && (n.insertBefore(e, t), n.removeChild(t));
                    }
                    e._gsap.swappedIn = !1;
                },
                tY = function (e, t, i, r) {
                    if (!e._gsap.swappedIn) {
                        for (var n, o = tH.length, s = t.style, a = e.style; o--;) s[(n = tH[o])] = i[n];
                        (s.position = "absolute" === i.position ? "absolute" : "relative"),
                            "inline" === i.display && (s.display = "inline-block"),
                            (a[e1] = a[e0] = "auto"),
                            (s.flexBasis = i.flexBasis || "auto"),
                            (s.overflow = "visible"),
                            (s.boxSizing = "border-box"),
                            (s[e2] = to(e, A) + "px"),
                            (s[e3] = to(e, z) + "px"),
                            (s[e9] = a[e6] = a.top = a[eQ] = "0"),
                            tU(r),
                            (a[e2] = a["max" + e7] = i[e2]),
                            (a[e3] = a["max" + te] = i[e3]),
                            (a[e9] = i[e9]),
                            e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)),
                            (e._gsap.swappedIn = !0);
                    }
                },
                tX = /([A-Z])/g,
                tU = function (e) {
                    if (e) {
                        var t,
                            i,
                            r = e.t.style,
                            n = e.length,
                            o = 0;
                        for ((e.t._gsap || Y.core.getCache(e.t)).uncache = 1; o < n; o += 2)
                            (i = e[o + 1]),
                                (t = e[o]),
                                i ? (r[t] = i) : r[t] && r.removeProperty(t.replace(tX, "-$1").toLowerCase());
                    }
                },
                tV = function (e) {
                    for (var t = tB.length, i = e.style, r = [], n = 0; n < t; n++) r.push(tB[n], i[tB[n]]);
                    return (r.t = e), r;
                },
                tq = function (e, t, i) {
                    for (var r, n = [], o = e.length, s = 8 * !!i; s < o; s += 2)
                        (r = e[s]), n.push(r, r in t ? t[r] : e[s + 1]);
                    return (n.t = e.t), n;
                },
                tG = { left: 0, top: 0 },
                t$ = function (e, t, i, r, n, o, s, a, l, c, u, h, d, f) {
                    eq(e) && (e = e(a)),
                        eV(e) &&
                        "max" === e.substr(0, 3) &&
                        (e = h + ("=" === e.charAt(4) ? tg("0" + e.substr(3), i) : 0));
                    var p,
                        g,
                        m,
                        v = d ? d.time() : 0;
                    if ((d && d.seek(0), isNaN(e) || (e *= 1), eG(e)))
                        d && (e = Y.utils.mapRange(d.scrollTrigger.start, d.scrollTrigger.end, 0, h, e)),
                            s && tv(s, i, r, !0);
                    else {
                        eq(t) && (t = t(a));
                        var y,
                            w,
                            b,
                            x,
                            S = (e || "0").split(" ");
                        (y = tn((m = N(t, a) || G)) || {}).left ||
                            y.top ||
                            "none" !== tt(m).display ||
                            ((x = m.style.display),
                                (m.style.display = "block"),
                                (y = tn(m)),
                                x ? (m.style.display = x) : m.style.removeProperty("display")),
                            (w = tg(S[0], y[r.d])),
                            (b = tg(S[1] || "0", i)),
                            (e = y[r.p] - l[r.p] - c + w + n - b),
                            s && tv(s, b, r, i - b < 20 || (s._isStart && b > 20)),
                            (i -= i - b);
                    }
                    if ((f && ((a[f] = e || -0.001), e < 0 && (e = 0)), o)) {
                        var _ = e + i,
                            E = o._isStart;
                        (p = "scroll" + r.d2),
                            tv(o, _, r, (E && _ > 20) || (!E && (u ? Math.max(G[p], q[p]) : o.parentNode[p]) <= _ + 1)),
                            u && ((l = tn(s)), u && (o.style[r.op.p] = l[r.op.p] - r.op.m - o._offset + "px"));
                    }
                    return (
                        d &&
                        m &&
                        ((p = tn(m)),
                            d.seek(h),
                            (g = tn(m)),
                            (d._caScrollDist = p[r.p] - g[r.p]),
                            (e = (e / d._caScrollDist) * h)),
                        d && d.seek(v),
                        d ? e : Math.round(e)
                    );
                },
                tZ = /(webkit|moz|length|cssText|inset)/i,
                tJ = function (e, t, i, r) {
                    if (e.parentNode !== t) {
                        var n,
                            o,
                            s = e.style;
                        if (t === G) {
                            for (n in ((e._stOrig = s.cssText), (o = tt(e))))
                                +n || tZ.test(n) || !o[n] || "string" != typeof s[n] || "0" === n || (s[n] = o[n]);
                            (s.top = i), (s.left = r);
                        } else s.cssText = e._stOrig;
                        (Y.core.getCache(e).uncache = 1), t.appendChild(e);
                    }
                },
                tK = function (e, t, i) {
                    var r = t,
                        n = r;
                    return function (t) {
                        var o = Math.round(e());
                        return (
                            o !== r && o !== n && Math.abs(o - r) > 3 && Math.abs(o - n) > 3 && ((t = o), i && i()),
                            (n = r),
                            (r = Math.round(t))
                        );
                    };
                },
                tQ = function (e, t, i) {
                    var r = {};
                    (r[t.p] = "+=" + i), Y.set(e, r);
                },
                t0 = function (e, t) {
                    var i = L(e, t),
                        r = "_scroll" + t.p2,
                        n = function t(n, o, s, a, l) {
                            var c = t.tween,
                                u = o.onComplete,
                                h = {};
                            s = s || i();
                            var d = tK(i, s, function () {
                                c.kill(), (t.tween = 0);
                            });
                            return (
                                (l = (a && l) || 0),
                                (a = a || n - s),
                                c && c.kill(),
                                (o[r] = n),
                                (o.inherit = !1),
                                (o.modifiers = h),
                                (h[r] = function () {
                                    return d(s + a * c.ratio + l * c.ratio * c.ratio);
                                }),
                                (o.onUpdate = function () {
                                    w.cache++, t.tween && tI();
                                }),
                                (o.onComplete = function () {
                                    (t.tween = 0), u && u.call(c);
                                }),
                                (c = t.tween = Y.to(e, o))
                            );
                        };
                    return (
                        (e[r] = i),
                        (i.wheelHandler = function () {
                            return n.tween && n.tween.kill() && (n.tween = 0);
                        }),
                        tc(e, "wheel", i.wheelHandler),
                        t1.isTouch && tc(e, "touchmove", i.wheelHandler),
                        n
                    );
                },
                t1 = (function () {
                    function e(t, i) {
                        X || e.register(Y) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
                            em(this),
                            this.init(t, i);
                    }
                    return (
                        (e.prototype.init = function (t, i) {
                            if (((this.progress = this.start = 0), this.vars && this.kill(!0, !0), !eR)) {
                                this.update = this.refresh = this.kill = eL;
                                return;
                            }
                            var r,
                                n,
                                o,
                                s,
                                a,
                                l,
                                c,
                                u,
                                h,
                                d,
                                f,
                                p,
                                g,
                                m,
                                v,
                                y,
                                x,
                                S,
                                _,
                                C,
                                T,
                                M,
                                P,
                                k,
                                O,
                                R,
                                D,
                                j,
                                W,
                                I,
                                H,
                                B,
                                F,
                                X,
                                $,
                                Z,
                                ee,
                                er,
                                eo,
                                es,
                                ea,
                                eu = (t = tr(eV(t) || eG(t) || t.nodeType ? { trigger: t } : t, tf)),
                                eh = eu.onUpdate,
                                ed = eu.toggleClass,
                                ef = eu.id,
                                ep = eu.onToggle,
                                eg = eu.onRefresh,
                                em = eu.scrub,
                                ev = eu.trigger,
                                ey = eu.pin,
                                ew = eu.pinSpacing,
                                eb = eu.invalidateOnRefresh,
                                e_ = eu.anticipatePin,
                                eC = eu.onScrubComplete,
                                ek = eu.onSnapComplete,
                                eN = eu.once,
                                eD = eu.snap,
                                eW = eu.pinReparent,
                                eI = eu.pinSpacer,
                                eB = eu.containerAnimation,
                                eU = eu.fastScrollEnd,
                                eQ = eu.preventOverlaps,
                                e0 = t.horizontal || (t.containerAnimation && !1 !== t.horizontal) ? A : z,
                                e1 = !em && 0 !== em,
                                tl = N(t.scroller || U),
                                th = Y.core.getCache(tl),
                                tp = eH(tl),
                                tv = ("pinType" in t ? t.pinType : E(tl, "pinType") || (tp && "fixed")) === "fixed",
                                tb = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
                                tS = e1 && t.toggleActions.split(" "),
                                tE = "markers" in t ? t.markers : tf.markers,
                                tC = tp ? 0 : parseFloat(tt(tl)["border" + e0.p2 + e7]) || 0,
                                tM = this,
                                tP =
                                    t.onRefreshInit &&
                                    function () {
                                        return t.onRefreshInit(tM);
                                    },
                                tk = eY(tl, tp, e0),
                                tO =
                                    !tp || ~b.indexOf(tl)
                                        ? eF(tl)
                                        : function () {
                                            return tG;
                                        },
                                tR = 0,
                                tA = 0,
                                tN = 0,
                                tD = L(tl, e0);
                            if (
                                ((tM._startClamp = tM._endClamp = !1),
                                    (tM._dir = e0),
                                    (e_ *= 45),
                                    (tM.scroller = tl),
                                    (tM.scroll = eB ? eB.time.bind(eB) : tD),
                                    (l = tD()),
                                    (tM.vars = t),
                                    (i = i || t.animation),
                                    "refreshPriority" in t && ((el = 1), -9999 === t.refreshPriority && (eT = tM)),
                                    (th.tweenScroll = th.tweenScroll || { top: t0(tl, z), left: t0(tl, A) }),
                                    (tM.tweenTo = o = th.tweenScroll[e0.p]),
                                    (tM.scrubDuration = function (e) {
                                        ($ = eG(e) && e)
                                            ? X
                                                ? X.duration(e)
                                                : (X = Y.to(i, {
                                                    ease: "expo",
                                                    totalProgress: "+=0",
                                                    inherit: !1,
                                                    duration: $,
                                                    paused: !0,
                                                    onComplete: function () {
                                                        return eC && eC(tM);
                                                    },
                                                }))
                                            : (X && X.progress(1).kill(), (X = 0));
                                    }),
                                    i &&
                                    ((i.vars.lazy = !1),
                                        (i._initted && !tM.isReverted) ||
                                        (!1 !== i.vars.immediateRender &&
                                            !1 !== t.immediateRender &&
                                            i.duration() &&
                                            i.render(0, !0, !0)),
                                        (tM.animation = i.pause()),
                                        (i.scrollTrigger = tM),
                                        tM.scrubDuration(em),
                                        (B = 0),
                                        ef || (ef = i.vars.id)),
                                    eD &&
                                    ((!e$(eD) || eD.push) && (eD = { snapTo: eD }),
                                        "scrollBehavior" in G.style && Y.set(tp ? [G, q] : tl, { scrollBehavior: "auto" }),
                                        w.forEach(function (e) {
                                            return (
                                                eq(e) && e.target === (tp ? V.scrollingElement || q : tl) && (e.smooth = !1)
                                            );
                                        }),
                                        (a = eq(eD.snapTo)
                                            ? eD.snapTo
                                            : "labels" === eD.snapTo
                                                ? ((r = i),
                                                    function (e) {
                                                        return Y.utils.snap(ts(r), e);
                                                    })
                                                : "labelsDirectional" === eD.snapTo
                                                    ? ((n = i),
                                                        function (e, t) {
                                                            return ta(ts(n))(e, t.direction);
                                                        })
                                                    : !1 !== eD.directional
                                                        ? function (e, t) {
                                                            return ta(eD.snapTo)(e, eP() - tA < 500 ? 0 : t.direction);
                                                        }
                                                        : Y.utils.snap(eD.snapTo)),
                                        (Z = e$((Z = eD.duration || { min: 0.1, max: 2 })) ? K(Z.min, Z.max) : K(Z, Z)),
                                        (ee = Y.delayedCall(eD.delay || $ / 2 || 0.1, function () {
                                            var e = tD(),
                                                t = eP() - tA < 500,
                                                r = o.tween;
                                            if ((t || 10 > Math.abs(tM.getVelocity())) && !r && !ei && tR !== e) {
                                                var n,
                                                    s,
                                                    l = (e - u) / y,
                                                    c = i && !e1 ? i.totalProgress() : l,
                                                    d = t ? 0 : ((c - F) / (eP() - Q)) * 1e3 || 0,
                                                    f = Y.utils.clamp(-l, 1 - l, (eK(d / 2) * d) / 0.185),
                                                    p = l + (!1 === eD.inertia ? 0 : f),
                                                    g = eD,
                                                    m = g.onStart,
                                                    v = g.onInterrupt,
                                                    w = g.onComplete;
                                                if (
                                                    (eG((n = a(p, tM))) || (n = p),
                                                        (s = Math.max(0, Math.round(u + n * y))),
                                                        e <= h && e >= u && s !== e)
                                                ) {
                                                    if (r && !r._initted && r.data <= eK(s - e)) return;
                                                    !1 === eD.inertia && (f = n - l),
                                                        o(
                                                            s,
                                                            {
                                                                duration: Z(
                                                                    eK(
                                                                        (0.185 * Math.max(eK(p - c), eK(n - c))) /
                                                                        d /
                                                                        0.05 || 0
                                                                    )
                                                                ),
                                                                ease: eD.ease || "power3",
                                                                data: eK(s - e),
                                                                onInterrupt: function () {
                                                                    return ee.restart(!0) && v && v(tM);
                                                                },
                                                                onComplete: function () {
                                                                    tM.update(),
                                                                        (tR = tD()),
                                                                        i &&
                                                                        !e1 &&
                                                                        (X
                                                                            ? X.resetTo(
                                                                                "totalProgress",
                                                                                n,
                                                                                i._tTime / i._tDur
                                                                            )
                                                                            : i.progress(n)),
                                                                        (B = F =
                                                                            i && !e1 ? i.totalProgress() : tM.progress),
                                                                        ek && ek(tM),
                                                                        w && w(tM);
                                                                },
                                                            },
                                                            e,
                                                            f * y,
                                                            s - e - f * y
                                                        ),
                                                        m && m(tM, o.tween);
                                                }
                                            } else tM.isActive && tR !== e && ee.restart(!0);
                                        }).pause())),
                                    ef && (tw[ef] = tM),
                                    (ea =
                                        (ev = tM.trigger = N(ev || (!0 !== ey && ey))) && ev._gsap && ev._gsap.stRevert) &&
                                    (ea = ea(tM)),
                                    (ey = !0 === ey ? ev : N(ey)),
                                    eV(ed) && (ed = { targets: ev, className: ed }),
                                    ey &&
                                    (!1 === ew ||
                                        ew === e6 ||
                                        (ew =
                                            (!!ew ||
                                                !ey.parentNode ||
                                                !ey.parentNode.style ||
                                                "flex" !== tt(ey.parentNode).display) &&
                                            e9),
                                        (tM.pin = ey),
                                        (s = Y.core.getCache(ey)).spacer
                                            ? (x = s.pinState)
                                            : (eI &&
                                                ((eI = N(eI)) && !eI.nodeType && (eI = eI.current || eI.nativeElement),
                                                    (s.spacerIsNative = !!eI),
                                                    eI && (s.spacerState = tV(eI))),
                                                (s.spacer = C = eI || V.createElement("div")),
                                                C.classList.add("pin-spacer"),
                                                ef && C.classList.add("pin-spacer-" + ef),
                                                (s.pinState = x = tV(ey))),
                                        !1 !== t.force3D && Y.set(ey, { force3D: !0 }),
                                        (tM.spacer = C = s.spacer),
                                        (R = (H = tt(ey))[ew + e0.os2]),
                                        (M = Y.getProperty(ey)),
                                        (P = Y.quickSetter(ey, e0.a, "px")),
                                        tY(ey, C, H),
                                        (_ = tV(ey))),
                                    tE)
                            ) {
                                (m = e$(tE) ? tr(tE, td) : td),
                                    (p = tm("scroller-start", ef, tl, e0, m, 0)),
                                    (g = tm("scroller-end", ef, tl, e0, m, 0, p)),
                                    (T = p["offset" + e0.op.d2]);
                                var tL = N(E(tl, "content") || tl);
                                (d = this.markerStart = tm("start", ef, tL, e0, m, T, 0, eB)),
                                    (f = this.markerEnd = tm("end", ef, tL, e0, m, T, 0, eB)),
                                    eB && (es = Y.quickSetter([d, f], e0.a, "px")),
                                    tv ||
                                    (b.length && !0 === E(tl, "fixedMarkers")) ||
                                    (ti(tp ? G : tl),
                                        Y.set([p, g], { force3D: !0 }),
                                        (j = Y.quickSetter(p, e0.a, "px")),
                                        (I = Y.quickSetter(g, e0.a, "px")));
                            }
                            if (eB) {
                                var tj = eB.vars.onUpdate,
                                    tI = eB.vars.onUpdateParams;
                                eB.eventCallback("onUpdate", function () {
                                    tM.update(0, 0, 1), tj && tj.apply(eB, tI || []);
                                });
                            }
                            if (
                                ((tM.previous = function () {
                                    return ty[ty.indexOf(tM) - 1];
                                }),
                                    (tM.next = function () {
                                        return ty[ty.indexOf(tM) + 1];
                                    }),
                                    (tM.revert = function (e, t) {
                                        if (!t) return tM.kill(!0);
                                        var r = !1 !== e || !tM.enabled,
                                            n = et;
                                        r !== tM.isReverted &&
                                            (r &&
                                                ((er = Math.max(tD(), tM.scroll.rec || 0)),
                                                    (tN = tM.progress),
                                                    (eo = i && i.progress())),
                                                d &&
                                                [d, f, p, g].forEach(function (e) {
                                                    return (e.style.display = r ? "none" : "block");
                                                }),
                                                r && ((et = tM), tM.update(r)),
                                                !ey || (eW && tM.isActive) || (r ? tF(ey, C, x) : tY(ey, C, tt(ey), D)),
                                                r || tM.update(r),
                                                (et = n),
                                                (tM.isReverted = r));
                                    }),
                                    (tM.refresh = function (r, n, s, a) {
                                        if ((!et && tM.enabled) || n) {
                                            if (ey && r && eO) return void tc(e, "scrollEnd", tT);
                                            !eE && tP && tP(tM),
                                                (et = tM),
                                                o.tween && !s && (o.tween.kill(), (o.tween = 0)),
                                                X && X.pause(),
                                                eb &&
                                                i &&
                                                (i.revert({ kill: !1 }).invalidate(),
                                                    i.getChildren &&
                                                    i.getChildren(!0, !0, !1).forEach(function (e) {
                                                        return e.vars.immediateRender && e.render(0, !0, !0);
                                                    })),
                                                tM.isReverted || tM.revert(!0, !0),
                                                (tM._subPinOffset = !1);
                                            var m,
                                                w,
                                                b,
                                                E,
                                                T,
                                                P,
                                                R,
                                                j,
                                                I,
                                                H,
                                                B,
                                                F,
                                                U,
                                                $ = tk(),
                                                Z = tO(),
                                                J = eB ? eB.duration() : eX(tl, e0),
                                                K = y <= 0.01 || !y,
                                                Q = 0,
                                                ei = a || 0,
                                                en = e$(s) ? s.end : t.end,
                                                es = t.endTrigger || ev,
                                                ea = e$(s)
                                                    ? s.start
                                                    : t.start || (0 !== t.start && ev ? (ey ? "0 0" : "0 100%") : 0),
                                                el = (tM.pinnedContainer = t.pinnedContainer && N(t.pinnedContainer, tM)),
                                                eu = (ev && Math.max(0, ty.indexOf(tM))) || 0,
                                                eh = eu;
                                            for (
                                                tE && e$(s) && ((F = Y.getProperty(p, e0.p)), (U = Y.getProperty(g, e0.p)));
                                                eh-- > 0;

                                            )
                                                (P = ty[eh]).end || P.refresh(0, 1) || (et = tM),
                                                    (R = P.pin) &&
                                                    (R === ev || R === ey || R === el) &&
                                                    !P.isReverted &&
                                                    (H || (H = []), H.unshift(P), P.revert(!0, !0)),
                                                    P !== ty[eh] && (eu--, eh--);
                                            for (
                                                eq(ea) && (ea = ea(tM)),
                                                u =
                                                t$(
                                                    (ea = eA(ea, "start", tM)),
                                                    ev,
                                                    $,
                                                    e0,
                                                    tD(),
                                                    d,
                                                    p,
                                                    tM,
                                                    Z,
                                                    tC,
                                                    tv,
                                                    J,
                                                    eB,
                                                    tM._startClamp && "_startClamp"
                                                ) || (ey ? -0.001 : 0),
                                                eq(en) && (en = en(tM)),
                                                eV(en) &&
                                                !en.indexOf("+=") &&
                                                (~en.indexOf(" ")
                                                    ? (en = (eV(ea) ? ea.split(" ")[0] : "") + en)
                                                    : ((Q = tg(en.substr(2), $)),
                                                        (en = eV(ea)
                                                            ? ea
                                                            : (eB
                                                                ? Y.utils.mapRange(
                                                                    0,
                                                                    eB.duration(),
                                                                    eB.scrollTrigger.start,
                                                                    eB.scrollTrigger.end,
                                                                    u
                                                                )
                                                                : u) + Q),
                                                        (es = ev))),
                                                en = eA(en, "end", tM),
                                                h =
                                                Math.max(
                                                    u,
                                                    t$(
                                                        en || (es ? "100% 0" : J),
                                                        es,
                                                        $,
                                                        e0,
                                                        tD() + Q,
                                                        f,
                                                        g,
                                                        tM,
                                                        Z,
                                                        tC,
                                                        tv,
                                                        J,
                                                        eB,
                                                        tM._endClamp && "_endClamp"
                                                    )
                                                ) || -0.001,
                                                Q = 0,
                                                eh = eu;
                                                eh--;

                                            )
                                                (R = (P = ty[eh]).pin) &&
                                                    P.start - P._pinPush <= u &&
                                                    !eB &&
                                                    P.end > 0 &&
                                                    ((m = P.end - (tM._startClamp ? Math.max(0, P.start) : P.start)),
                                                        ((R === ev && P.start - P._pinPush < u) || R === el) &&
                                                        isNaN(ea) &&
                                                        (Q += m * (1 - P.progress)),
                                                        R === ey && (ei += m));
                                            if (
                                                ((u += Q),
                                                    (h += Q),
                                                    tM._startClamp && (tM._startClamp += Q),
                                                    tM._endClamp &&
                                                    !eE &&
                                                    ((tM._endClamp = h || -0.001), (h = Math.min(h, eX(tl, e0)))),
                                                    (y = h - u || ((u -= 0.01) && 0.001)),
                                                    K && (tN = Y.utils.clamp(0, 1, Y.utils.normalize(u, h, er))),
                                                    (tM._pinPush = ei),
                                                    d &&
                                                    Q &&
                                                    (((m = {})[e0.a] = "+=" + Q),
                                                        el && (m[e0.p] = "-=" + tD()),
                                                        Y.set([d, f], m)),
                                                    ey && !(ex && tM.end >= eX(tl, e0)))
                                            )
                                                (m = tt(ey)),
                                                    (E = e0 === z),
                                                    (b = tD()),
                                                    (k = parseFloat(M(e0.a)) + ei),
                                                    !J &&
                                                    h > 1 &&
                                                    ((B = {
                                                        style: (B = (tp ? V.scrollingElement || q : tl).style),
                                                        value: B["overflow" + e0.a.toUpperCase()],
                                                    }),
                                                        tp &&
                                                        "scroll" !== tt(G)["overflow" + e0.a.toUpperCase()] &&
                                                        (B.style["overflow" + e0.a.toUpperCase()] = "scroll")),
                                                    tY(ey, C, m),
                                                    (_ = tV(ey)),
                                                    (w = tn(ey, !0)),
                                                    (j = tv && L(tl, E ? A : z)()),
                                                    ew
                                                        ? (((D = [ew + e0.os2, y + ei + "px"]).t = C),
                                                            (eh = ew === e9 ? to(ey, e0) + y + ei : 0) &&
                                                            (D.push(e0.d, eh + "px"),
                                                                "auto" !== C.style.flexBasis &&
                                                                (C.style.flexBasis = eh + "px")),
                                                            tU(D),
                                                            el &&
                                                            ty.forEach(function (e) {
                                                                e.pin === el &&
                                                                    !1 !== e.vars.pinSpacing &&
                                                                    (e._subPinOffset = !0);
                                                            }),
                                                            tv && tD(er))
                                                        : (eh = to(ey, e0)) &&
                                                        "auto" !== C.style.flexBasis &&
                                                        (C.style.flexBasis = eh + "px"),
                                                    tv &&
                                                    (((T = {
                                                        top: w.top + (E ? b - u : j) + "px",
                                                        left: w.left + (E ? j : b - u) + "px",
                                                        boxSizing: "border-box",
                                                        position: "fixed",
                                                    })[e2] = T["max" + e7] =
                                                        Math.ceil(w.width) + "px"),
                                                        (T[e3] = T["max" + te] = Math.ceil(w.height) + "px"),
                                                        (T[e6] =
                                                            T[e6 + "Top"] =
                                                            T[e6 + e4] =
                                                            T[e6 + e8] =
                                                            T[e6 + e5] =
                                                            "0"),
                                                        (T[e9] = m[e9]),
                                                        (T[e9 + "Top"] = m[e9 + "Top"]),
                                                        (T[e9 + e4] = m[e9 + e4]),
                                                        (T[e9 + e8] = m[e9 + e8]),
                                                        (T[e9 + e5] = m[e9 + e5]),
                                                        (S = tq(x, T, eW)),
                                                        eE && tD(0)),
                                                    i
                                                        ? ((I = i._initted),
                                                            ec(1),
                                                            i.render(i.duration(), !0, !0),
                                                            (O = M(e0.a) - k + y + ei),
                                                            (W = Math.abs(y - O) > 1),
                                                            tv && W && S.splice(S.length - 2, 2),
                                                            i.render(0, !0, !0),
                                                            I || i.invalidate(!0),
                                                            i.parent || i.totalTime(i.totalTime()),
                                                            ec(0))
                                                        : (O = y),
                                                    B &&
                                                    (B.value
                                                        ? (B.style["overflow" + e0.a.toUpperCase()] = B.value)
                                                        : B.style.removeProperty("overflow-" + e0.a));
                                            else if (ev && tD() && !eB)
                                                for (w = ev.parentNode; w && w !== G;)
                                                    w._pinOffset && ((u -= w._pinOffset), (h -= w._pinOffset)),
                                                        (w = w.parentNode);
                                            H &&
                                                H.forEach(function (e) {
                                                    return e.revert(!1, !0);
                                                }),
                                                (tM.start = u),
                                                (tM.end = h),
                                                (l = c = eE ? er : tD()),
                                                eB || eE || (l < er && tD(er), (tM.scroll.rec = 0)),
                                                tM.revert(!1, !0),
                                                (tA = eP()),
                                                ee && ((tR = -1), ee.restart(!0)),
                                                (et = 0),
                                                i &&
                                                e1 &&
                                                (i._initted || eo) &&
                                                i.progress() !== eo &&
                                                i.progress(eo || 0, !0).render(i.time(), !0, !0),
                                                (K || tN !== tM.progress || eB || eb || (i && !i._initted)) &&
                                                (i &&
                                                    !e1 &&
                                                    (i._initted || tN || !1 !== i.vars.immediateRender) &&
                                                    i.totalProgress(
                                                        eB && u < -0.001 && !tN ? Y.utils.normalize(u, h, 0) : tN,
                                                        !0
                                                    ),
                                                    (tM.progress = K || (l - u) / y === tN ? 0 : tN)),
                                                ey && ew && (C._pinOffset = Math.round(tM.progress * O)),
                                                X && X.invalidate(),
                                                isNaN(F) ||
                                                ((F -= Y.getProperty(p, e0.p)),
                                                    (U -= Y.getProperty(g, e0.p)),
                                                    tQ(p, e0, F),
                                                    tQ(d, e0, F - (a || 0)),
                                                    tQ(g, e0, U),
                                                    tQ(f, e0, U - (a || 0))),
                                                K && !eE && tM.update(),
                                                !eg || eE || v || ((v = !0), eg(tM), (v = !1));
                                        }
                                    }),
                                    (tM.getVelocity = function () {
                                        return ((tD() - c) / (eP() - Q)) * 1e3 || 0;
                                    }),
                                    (tM.endAnimation = function () {
                                        eZ(tM.callbackAnimation),
                                            i &&
                                            (X
                                                ? X.progress(1)
                                                : i.paused()
                                                    ? e1 || eZ(i, tM.direction < 0, 1)
                                                    : eZ(i, i.reversed()));
                                    }),
                                    (tM.labelToScroll = function (e) {
                                        return (
                                            (i &&
                                                i.labels &&
                                                (u || tM.refresh() || u) + (i.labels[e] / i.duration()) * y) ||
                                            0
                                        );
                                    }),
                                    (tM.getTrailing = function (e) {
                                        var t = ty.indexOf(tM),
                                            i = tM.direction > 0 ? ty.slice(0, t).reverse() : ty.slice(t + 1);
                                        return (
                                            eV(e)
                                                ? i.filter(function (t) {
                                                    return t.vars.preventOverlaps === e;
                                                })
                                                : i
                                        ).filter(function (e) {
                                            return tM.direction > 0 ? e.end <= u : e.start >= h;
                                        });
                                    }),
                                    (tM.update = function (e, t, r) {
                                        if (!eB || r || e) {
                                            var n,
                                                s,
                                                a,
                                                d,
                                                f,
                                                g,
                                                m,
                                                v = !0 === eE ? er : tM.scroll(),
                                                w = e ? 0 : (v - u) / y,
                                                b = w < 0 ? 0 : w > 1 ? 1 : w || 0,
                                                x = tM.progress;
                                            if (
                                                (t &&
                                                    ((c = l),
                                                        (l = eB ? tD() : v),
                                                        eD && ((F = B), (B = i && !e1 ? i.totalProgress() : b))),
                                                    e_ &&
                                                    ey &&
                                                    !et &&
                                                    !eM &&
                                                    eO &&
                                                    (!b && u < v + ((v - c) / (eP() - Q)) * e_
                                                        ? (b = 1e-4)
                                                        : 1 === b && h > v + ((v - c) / (eP() - Q)) * e_ && (b = 0.9999)),
                                                    b !== x && tM.enabled)
                                            ) {
                                                if (
                                                    ((d =
                                                        (f = (n = tM.isActive = !!b && b < 1) != (!!x && x < 1)) ||
                                                        !!b != !!x),
                                                        (tM.direction = b > x ? 1 : -1),
                                                        (tM.progress = b),
                                                        d &&
                                                        !et &&
                                                        ((s = b && !x ? 0 : 1 === b ? 1 : 1 === x ? 2 : 3),
                                                            e1 &&
                                                            ((a = (!f && "none" !== tS[s + 1] && tS[s + 1]) || tS[s]),
                                                                (m = i && ("complete" === a || "reset" === a || a in i)))),
                                                        eQ &&
                                                        (f || m) &&
                                                        (m || em || !i) &&
                                                        (eq(eQ)
                                                            ? eQ(tM)
                                                            : tM.getTrailing(eQ).forEach(function (e) {
                                                                return e.endAnimation();
                                                            })),
                                                        !e1 &&
                                                        (!X || et || eM
                                                            ? i && i.totalProgress(b, !!(et && (tA || e)))
                                                            : (X._dp._time - X._start !== X._time &&
                                                                X.render(X._dp._time - X._start),
                                                                X.resetTo
                                                                    ? X.resetTo("totalProgress", b, i._tTime / i._tDur)
                                                                    : ((X.vars.totalProgress = b),
                                                                        X.invalidate().restart()))),
                                                        ey)
                                                )
                                                    if ((e && ew && (C.style[ew + e0.os2] = R), tv)) {
                                                        if (d) {
                                                            if (((g = !e && b > x && h + 1 > v && v + 1 >= eX(tl, e0)), eW))
                                                                if (!e && (n || g)) {
                                                                    var E = tn(ey, !0),
                                                                        T = v - u;
                                                                    tJ(
                                                                        ey,
                                                                        G,
                                                                        E.top + (e0 === z ? T : 0) + "px",
                                                                        E.left + (e0 === z ? 0 : T) + "px"
                                                                    );
                                                                } else tJ(ey, C);
                                                            tU(n || g ? S : _),
                                                                (W && b < 1 && n) || P(k + (1 !== b || g ? 0 : O));
                                                        }
                                                    } else P(ej(k + O * b));
                                                !eD || o.tween || et || eM || ee.restart(!0),
                                                    ed &&
                                                    (f || (eN && b && (b < 1 || !eS))) &&
                                                    J(ed.targets).forEach(function (e) {
                                                        return e.classList[n || eN ? "add" : "remove"](ed.className);
                                                    }),
                                                    !eh || e1 || e || eh(tM),
                                                    d && !et
                                                        ? (e1 &&
                                                            (m &&
                                                                ("complete" === a
                                                                    ? i.pause().totalProgress(1)
                                                                    : "reset" === a
                                                                        ? i.restart(!0).pause()
                                                                        : "restart" === a
                                                                            ? i.restart(!0)
                                                                            : i[a]()),
                                                                eh && eh(tM)),
                                                            (f || !eS) &&
                                                            (ep && f && eJ(tM, ep),
                                                                tb[s] && eJ(tM, tb[s]),
                                                                eN && (1 === b ? tM.kill(!1, 1) : (tb[s] = 0)),
                                                                !f && tb[(s = 1 === b ? 1 : 3)] && eJ(tM, tb[s])),
                                                            eU &&
                                                            !n &&
                                                            Math.abs(tM.getVelocity()) > (eG(eU) ? eU : 2500) &&
                                                            (eZ(tM.callbackAnimation),
                                                                X ? X.progress(1) : eZ(i, "reverse" === a ? 1 : !b, 1)))
                                                        : e1 && eh && !et && eh(tM);
                                            }
                                            if (I) {
                                                var M = eB ? (v / eB.duration()) * (eB._caScrollDist || 0) : v;
                                                j(M + +!!p._isFlipped), I(M);
                                            }
                                            es && es((-v / eB.duration()) * (eB._caScrollDist || 0));
                                        }
                                    }),
                                    (tM.enable = function (t, i) {
                                        tM.enabled ||
                                            ((tM.enabled = !0),
                                                tc(tl, "resize", t_),
                                                tp || tc(tl, "scroll", tx),
                                                tP && tc(e, "refreshInit", tP),
                                                !1 !== t && ((tM.progress = tN = 0), (l = c = tR = tD())),
                                                !1 !== i && tM.refresh());
                                    }),
                                    (tM.getTween = function (e) {
                                        return e && o ? o.tween : X;
                                    }),
                                    (tM.setPositions = function (e, t, i, r) {
                                        if (eB) {
                                            var n = eB.scrollTrigger,
                                                o = eB.duration(),
                                                s = n.end - n.start;
                                            (e = n.start + (s * e) / o), (t = n.start + (s * t) / o);
                                        }
                                        tM.refresh(
                                            !1,
                                            !1,
                                            { start: ez(e, i && !!tM._startClamp), end: ez(t, i && !!tM._endClamp) },
                                            r
                                        ),
                                            tM.update();
                                    }),
                                    (tM.adjustPinSpacing = function (e) {
                                        if (D && e) {
                                            var t = D.indexOf(e0.d) + 1;
                                            (D[t] = parseFloat(D[t]) + e + "px"),
                                                (D[1] = parseFloat(D[1]) + e + "px"),
                                                tU(D);
                                        }
                                    }),
                                    (tM.disable = function (t, i) {
                                        if (
                                            tM.enabled &&
                                            (!1 !== t && tM.revert(!0, !0),
                                                (tM.enabled = tM.isActive = !1),
                                                i || (X && X.pause()),
                                                (er = 0),
                                                s && (s.uncache = 1),
                                                tP && tu(e, "refreshInit", tP),
                                                ee && (ee.pause(), o.tween && o.tween.kill() && (o.tween = 0)),
                                                !tp)
                                        ) {
                                            for (var r = ty.length; r--;)
                                                if (ty[r].scroller === tl && ty[r] !== tM) return;
                                            tu(tl, "resize", t_), tp || tu(tl, "scroll", tx);
                                        }
                                    }),
                                    (tM.kill = function (e, r) {
                                        tM.disable(e, r), X && !r && X.kill(), ef && delete tw[ef];
                                        var n = ty.indexOf(tM);
                                        n >= 0 && ty.splice(n, 1),
                                            n === en && tW > 0 && en--,
                                            (n = 0),
                                            ty.forEach(function (e) {
                                                return e.scroller === tM.scroller && (n = 1);
                                            }),
                                            n || eE || (tM.scroll.rec = 0),
                                            i && ((i.scrollTrigger = null), e && i.revert({ kill: !1 }), r || i.kill()),
                                            d &&
                                            [d, f, p, g].forEach(function (e) {
                                                return e.parentNode && e.parentNode.removeChild(e);
                                            }),
                                            eT === tM && (eT = 0),
                                            ey &&
                                            (s && (s.uncache = 1),
                                                (n = 0),
                                                ty.forEach(function (e) {
                                                    return e.pin === ey && n++;
                                                }),
                                                n || (s.spacer = 0)),
                                            t.onKill && t.onKill(tM);
                                    }),
                                    ty.push(tM),
                                    tM.enable(!1, !1),
                                    ea && ea(tM),
                                    i && i.add && !y)
                            ) {
                                var tH = tM.update;
                                (tM.update = function () {
                                    (tM.update = tH), w.cache++, u || h || tM.refresh();
                                }),
                                    Y.delayedCall(0.01, tM.update),
                                    (y = 0.01),
                                    (u = h = 0);
                            } else tM.refresh();
                            ey && tz();
                        }),
                        (e.register = function (t) {
                            return X || ((Y = t || eI()), eW() && window.document && e.enable(), (X = eR)), X;
                        }),
                        (e.defaults = function (e) {
                            if (e) for (var t in e) tf[t] = e[t];
                            return tf;
                        }),
                        (e.disable = function (e, t) {
                            (eR = 0),
                                ty.forEach(function (i) {
                                    return i[t ? "kill" : "disable"](e);
                                }),
                                tu(U, "wheel", tx),
                                tu(V, "scroll", tx),
                                clearInterval(ee),
                                tu(V, "touchcancel", eL),
                                tu(G, "touchstart", eL),
                                tl(tu, V, "pointerdown,touchstart,mousedown", eN),
                                tl(tu, V, "pointerup,touchend,mouseup", eD),
                                Z.kill(),
                                eU(tu);
                            for (var i = 0; i < w.length; i += 3) th(tu, w[i], w[i + 1]), th(tu, w[i], w[i + 2]);
                        }),
                        (e.enable = function () {
                            if (
                                ((U = window),
                                    (q = (V = document).documentElement),
                                    (G = V.body),
                                    Y &&
                                    ((J = Y.utils.toArray),
                                        (K = Y.utils.clamp),
                                        (em = Y.core.context || eL),
                                        (ec = Y.core.suppressOverwrites || eL),
                                        (ev = U.history.scrollRestoration || "auto"),
                                        (tj = U.pageYOffset || 0),
                                        Y.core.globals("ScrollTrigger", e),
                                        G))
                            ) {
                                (eR = 1),
                                    ((ey = document.createElement("div")).style.height = "100vh"),
                                    (ey.style.position = "absolute"),
                                    tN(),
                                    (function e() {
                                        return eR && requestAnimationFrame(e);
                                    })(),
                                    F.register(Y),
                                    (e.isTouch = F.isTouch),
                                    (eg = F.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
                                    (ed = 1 === F.isTouch),
                                    tc(U, "wheel", tx),
                                    ($ = [U, V, q, G]),
                                    Y.matchMedia
                                        ? ((e.matchMedia = function (e) {
                                            var t,
                                                i = Y.matchMedia();
                                            for (t in e) i.add(t, e[t]);
                                            return i;
                                        }),
                                            Y.addEventListener("matchMediaInit", function () {
                                                return tO();
                                            }),
                                            Y.addEventListener("matchMediaRevert", function () {
                                                return tk();
                                            }),
                                            Y.addEventListener("matchMedia", function () {
                                                tL(0, 1), tM("matchMedia");
                                            }),
                                            Y.matchMedia().add("(orientation: portrait)", function () {
                                                return tS(), tS;
                                            }))
                                        : console.warn("Requires GSAP 3.11.0 or later"),
                                    tS(),
                                    tc(V, "scroll", tx);
                                var t,
                                    i,
                                    r = G.hasAttribute("style"),
                                    n = G.style,
                                    o = n.borderTopStyle,
                                    s = Y.core.Animation.prototype;
                                for (
                                    s.revert ||
                                    Object.defineProperty(s, "revert", {
                                        value: function () {
                                            return this.time(-0.01, !0);
                                        },
                                    }),
                                    n.borderTopStyle = "solid",
                                    z.m = Math.round((t = tn(G)).top + z.sc()) || 0,
                                    A.m = Math.round(t.left + A.sc()) || 0,
                                    o ? (n.borderTopStyle = o) : n.removeProperty("border-top-style"),
                                    r || (G.setAttribute("style", ""), G.removeAttribute("style")),
                                    ee = setInterval(tb, 250),
                                    Y.delayedCall(0.5, function () {
                                        return (eM = 0);
                                    }),
                                    tc(V, "touchcancel", eL),
                                    tc(G, "touchstart", eL),
                                    tl(tc, V, "pointerdown,touchstart,mousedown", eN),
                                    tl(tc, V, "pointerup,touchend,mouseup", eD),
                                    er = Y.utils.checkPrefix("transform"),
                                    tB.push(er),
                                    X = eP(),
                                    Z = Y.delayedCall(0.2, tL).pause(),
                                    ea = [
                                        V,
                                        "visibilitychange",
                                        function () {
                                            var e = U.innerWidth,
                                                t = U.innerHeight;
                                            V.hidden ? ((eo = e), (es = t)) : (eo !== e || es !== t) && t_();
                                        },
                                        V,
                                        "DOMContentLoaded",
                                        tL,
                                        U,
                                        "load",
                                        tL,
                                        U,
                                        "resize",
                                        t_,
                                    ],
                                    eU(tc),
                                    ty.forEach(function (e) {
                                        return e.enable(0, 1);
                                    }),
                                    i = 0;
                                    i < w.length;
                                    i += 3
                                )
                                    th(tu, w[i], w[i + 1]), th(tu, w[i], w[i + 2]);
                            }
                        }),
                        (e.config = function (t) {
                            "limitCallbacks" in t && (eS = !!t.limitCallbacks);
                            var i = t.syncInterval;
                            (i && clearInterval(ee)) || ((ee = i) && setInterval(tb, i)),
                                "ignoreMobileResize" in t && (ed = 1 === e.isTouch && t.ignoreMobileResize),
                                "autoRefreshEvents" in t &&
                                (eU(tu) || eU(tc, t.autoRefreshEvents || "none"),
                                    (eu = -1 === (t.autoRefreshEvents + "").indexOf("resize")));
                        }),
                        (e.scrollerProxy = function (e, t) {
                            var i = N(e),
                                r = w.indexOf(i),
                                n = eH(i);
                            ~r && w.splice(r, n ? 6 : 2), t && (n ? b.unshift(U, t, G, t, q, t) : b.unshift(i, t));
                        }),
                        (e.clearMatchMedia = function (e) {
                            ty.forEach(function (t) {
                                return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0);
                            });
                        }),
                        (e.isInViewport = function (e, t, i) {
                            var r = (eV(e) ? N(e) : e).getBoundingClientRect(),
                                n = r[i ? e2 : e3] * t || 0;
                            return i
                                ? r.right - n > 0 && r.left + n < U.innerWidth
                                : r.bottom - n > 0 && r.top + n < U.innerHeight;
                        }),
                        (e.positionInViewport = function (e, t, i) {
                            eV(e) && (e = N(e));
                            var r = e.getBoundingClientRect(),
                                n = r[i ? e2 : e3],
                                o =
                                    null == t
                                        ? n / 2
                                        : t in tp
                                            ? tp[t] * n
                                            : ~t.indexOf("%")
                                                ? (parseFloat(t) * n) / 100
                                                : parseFloat(t) || 0;
                            return i ? (r.left + o) / U.innerWidth : (r.top + o) / U.innerHeight;
                        }),
                        (e.killAll = function (e) {
                            if (
                                (ty.slice(0).forEach(function (e) {
                                    return "ScrollSmoother" !== e.vars.id && e.kill();
                                }),
                                    !0 !== e)
                            ) {
                                var t = tE.killAll || [];
                                (tE = {}),
                                    t.forEach(function (e) {
                                        return e();
                                    });
                            }
                        }),
                        e
                    );
                })();
            (t1.version = "3.13.0"),
                (t1.saveStyles = function (e) {
                    return e
                        ? J(e).forEach(function (e) {
                            if (e && e.style) {
                                var t = tP.indexOf(e);
                                t >= 0 && tP.splice(t, 5),
                                    tP.push(
                                        e,
                                        e.style.cssText,
                                        e.getBBox && e.getAttribute("transform"),
                                        Y.core.getCache(e),
                                        em()
                                    );
                            }
                        })
                        : tP;
                }),
                (t1.revert = function (e, t) {
                    return tO(!e, t);
                }),
                (t1.create = function (e, t) {
                    return new t1(e, t);
                }),
                (t1.refresh = function (e) {
                    return e ? t_(!0) : (X || t1.register()) && tL(!0);
                }),
                (t1.update = function (e) {
                    return ++w.cache && tI(2 * (!0 === e));
                }),
                (t1.clearScrollMemory = tR),
                (t1.maxScroll = function (e, t) {
                    return eX(e, t ? A : z);
                }),
                (t1.getScrollFunc = function (e, t) {
                    return L(N(e), t ? A : z);
                }),
                (t1.getById = function (e) {
                    return tw[e];
                }),
                (t1.getAll = function () {
                    return ty.filter(function (e) {
                        return "ScrollSmoother" !== e.vars.id;
                    });
                }),
                (t1.isScrolling = function () {
                    return !!eO;
                }),
                (t1.snapDirectional = ta),
                (t1.addEventListener = function (e, t) {
                    var i = tE[e] || (tE[e] = []);
                    ~i.indexOf(t) || i.push(t);
                }),
                (t1.removeEventListener = function (e, t) {
                    var i = tE[e],
                        r = i && i.indexOf(t);
                    r >= 0 && i.splice(r, 1);
                }),
                (t1.batch = function (e, t) {
                    var i,
                        r = [],
                        n = {},
                        o = t.interval || 0.016,
                        s = t.batchMax || 1e9,
                        a = function (e, t) {
                            var i = [],
                                r = [],
                                n = Y.delayedCall(o, function () {
                                    t(i, r), (i = []), (r = []);
                                }).pause();
                            return function (e) {
                                i.length || n.restart(!0), i.push(e.trigger), r.push(e), s <= i.length && n.progress(1);
                            };
                        };
                    for (i in t)
                        n[i] = "on" === i.substr(0, 2) && eq(t[i]) && "onRefreshInit" !== i ? a(i, t[i]) : t[i];
                    return (
                        eq(s) &&
                        ((s = s()),
                            tc(t1, "refresh", function () {
                                return (s = t.batchMax());
                            })),
                        J(e).forEach(function (e) {
                            var t = {};
                            for (i in n) t[i] = n[i];
                            (t.trigger = e), r.push(t1.create(t));
                        }),
                        r
                    );
                });
            var t2,
                t3 = function (e, t, i, r) {
                    return t > r ? e(r) : t < 0 && e(0), i > r ? (r - t) / (i - t) : i < 0 ? t / (t - i) : 1;
                },
                t4 = function e(t, i) {
                    !0 === i
                        ? t.style.removeProperty("touch-action")
                        : (t.style.touchAction =
                            !0 === i ? "auto" : i ? "pan-" + i + (F.isTouch ? " pinch-zoom" : "") : "none"),
                        t === q && e(G, i);
                },
                t5 = { auto: 1, scroll: 1 },
                t8 = function (e) {
                    var t,
                        i = e.event,
                        r = e.target,
                        n = e.axis,
                        o = (i.changedTouches ? i.changedTouches[0] : i).target,
                        s = o._gsap || Y.core.getCache(o),
                        a = eP();
                    if (!s._isScrollT || a - s._isScrollT > 2e3) {
                        for (
                            ;
                            o &&
                            o !== G &&
                            ((o.scrollHeight <= o.clientHeight && o.scrollWidth <= o.clientWidth) ||
                                !(t5[(t = tt(o)).overflowY] || t5[t.overflowX]));

                        )
                            o = o.parentNode;
                        (s._isScroll = o && o !== r && !eH(o) && (t5[(t = tt(o)).overflowY] || t5[t.overflowX])),
                            (s._isScrollT = a);
                    }
                    (s._isScroll || "x" === n) && (i.stopPropagation(), (i._gsapAllow = !0));
                },
                t9 = function (e, t, i, r) {
                    return F.create({
                        target: e,
                        capture: !0,
                        debounce: !1,
                        lockAxis: !0,
                        type: t,
                        onWheel: (r = r && t8),
                        onPress: r,
                        onDrag: r,
                        onScroll: r,
                        onEnable: function () {
                            return i && tc(V, F.eventTypes[0], t7, !1, !0);
                        },
                        onDisable: function () {
                            return tu(V, F.eventTypes[0], t7, !0);
                        },
                    });
                },
                t6 = /(input|label|select|textarea)/i,
                t7 = function (e) {
                    var t = t6.test(e.target.tagName);
                    (t || t2) && ((e._gsapAllow = !0), (t2 = t));
                },
                ie = function (e) {
                    e$(e) || (e = {}),
                        (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
                        e.type || (e.type = "wheel,touch"),
                        (e.debounce = !!e.debounce),
                        (e.id = e.id || "normalizer");
                    var t,
                        i,
                        r,
                        n,
                        o,
                        s,
                        a,
                        l,
                        c = e,
                        u = c.normalizeScrollX,
                        h = c.momentum,
                        d = c.allowNestedScroll,
                        f = c.onRelease,
                        p = N(e.target) || q,
                        g = Y.core.globals().ScrollSmoother,
                        m = g && g.get(),
                        v =
                            eg &&
                            ((e.content && N(e.content)) || (m && !1 !== e.content && !m.smooth() && m.content())),
                        y = L(p, z),
                        b = L(p, A),
                        x = 1,
                        S =
                            (F.isTouch && U.visualViewport
                                ? U.visualViewport.scale * U.visualViewport.width
                                : U.outerWidth) / U.innerWidth,
                        _ = 0,
                        E = eq(h)
                            ? function () {
                                return h(t);
                            }
                            : function () {
                                return h || 2.8;
                            },
                        C = t9(p, e.type, !0, d),
                        T = function () {
                            return (n = !1);
                        },
                        M = eL,
                        P = eL,
                        k = function () {
                            (i = eX(p, z)), (P = K(+!!eg, i)), u && (M = K(0, eX(p, A))), (r = tA);
                        },
                        O = function () {
                            (v._gsap.y = ej(parseFloat(v._gsap.y) + y.offset) + "px"),
                                (v.style.transform =
                                    "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                                    parseFloat(v._gsap.y) +
                                    ", 0, 1)"),
                                (y.offset = y.cacheID = 0);
                        },
                        R = function () {
                            if (n) {
                                requestAnimationFrame(T);
                                var e = ej(t.deltaY / 2),
                                    i = P(y.v - e);
                                if (v && i !== y.v + y.offset) {
                                    y.offset = i - y.v;
                                    var r = ej((parseFloat(v && v._gsap.y) || 0) - y.offset);
                                    (v.style.transform =
                                        "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + r + ", 0, 1)"),
                                        (v._gsap.y = r + "px"),
                                        (y.cacheID = w.cache),
                                        tI();
                                }
                                return !0;
                            }
                            y.offset && O(), (n = !0);
                        },
                        D = function () {
                            k(),
                                o.isActive() &&
                                o.vars.scrollY > i &&
                                (y() > i ? o.progress(1) && y(i) : o.resetTo("scrollY", i));
                        };
                    return (
                        v && Y.set(v, { y: "+=0" }),
                        (e.ignoreCheck = function (e) {
                            return (
                                (eg && "touchmove" === e.type && R(e)) ||
                                (x > 1.05 && "touchstart" !== e.type) ||
                                t.isGesturing ||
                                (e.touches && e.touches.length > 1)
                            );
                        }),
                        (e.onPress = function () {
                            n = !1;
                            var e = x;
                            (x = ej(((U.visualViewport && U.visualViewport.scale) || 1) / S)),
                                o.pause(),
                                e !== x && t4(p, x > 1.01 || (!u && "x")),
                                (s = b()),
                                (a = y()),
                                k(),
                                (r = tA);
                        }),
                        (e.onRelease = e.onGestureStart =
                            function (e, t) {
                                if ((y.offset && O(), t)) {
                                    w.cache++;
                                    var r,
                                        n,
                                        s = E();
                                    u &&
                                        ((n = (r = b()) + -(0.05 * s * e.velocityX) / 0.227),
                                            (s *= t3(b, r, n, eX(p, A))),
                                            (o.vars.scrollX = M(n))),
                                        (n = (r = y()) + -(0.05 * s * e.velocityY) / 0.227),
                                        (s *= t3(y, r, n, eX(p, z))),
                                        (o.vars.scrollY = P(n)),
                                        o.invalidate().duration(s).play(0.01),
                                        ((eg && o.vars.scrollY >= i) || r >= i - 1) &&
                                        Y.to({}, { onUpdate: D, duration: s });
                                } else l.restart(!0);
                                f && f(e);
                            }),
                        (e.onWheel = function () {
                            o._ts && o.pause(), eP() - _ > 1e3 && ((r = 0), (_ = eP()));
                        }),
                        (e.onChange = function (e, t, i, n, o) {
                            if (
                                (tA !== r && k(), t && u && b(M(n[2] === t ? s + (e.startX - e.x) : b() + t - n[1])), i)
                            ) {
                                y.offset && O();
                                var l = o[2] === i,
                                    c = l ? a + e.startY - e.y : y() + i - o[1],
                                    h = P(c);
                                l && c !== h && (a += h - c), y(h);
                            }
                            (i || t) && tI();
                        }),
                        (e.onEnable = function () {
                            t4(p, !u && "x"),
                                t1.addEventListener("refresh", D),
                                tc(U, "resize", D),
                                y.smooth && ((y.target.style.scrollBehavior = "auto"), (y.smooth = b.smooth = !1)),
                                C.enable();
                        }),
                        (e.onDisable = function () {
                            t4(p, !0), tu(U, "resize", D), t1.removeEventListener("refresh", D), C.kill();
                        }),
                        (e.lockAxis = !1 !== e.lockAxis),
                        ((t = new F(e)).iOS = eg),
                        eg && !y() && y(1),
                        eg && Y.ticker.add(eL),
                        (l = t._dc),
                        (o = Y.to(t, {
                            ease: "power4",
                            paused: !0,
                            inherit: !1,
                            scrollX: u ? "+=0.1" : "+=0",
                            scrollY: "+=0.1",
                            modifiers: {
                                scrollY: tK(y, y(), function () {
                                    return o.pause();
                                }),
                            },
                            onUpdate: tI,
                            onComplete: l.vars.onComplete,
                        })),
                        t
                    );
                };
            (t1.sort = function (e) {
                if (eq(e)) return ty.sort(e);
                var t = U.pageYOffset || 0;
                return (
                    t1.getAll().forEach(function (e) {
                        return (e._sortY = e.trigger
                            ? t + e.trigger.getBoundingClientRect().top
                            : e.start + U.innerHeight);
                    }),
                    ty.sort(
                        e ||
                        function (e, t) {
                            return (
                                -1e6 * (e.vars.refreshPriority || 0) +
                                (e.vars.containerAnimation ? 1e6 : e._sortY) -
                                ((t.vars.containerAnimation ? 1e6 : t._sortY) +
                                    -1e6 * (t.vars.refreshPriority || 0))
                            );
                        }
                    )
                );
            }),
                (t1.observe = function (e) {
                    return new F(e);
                }),
                (t1.normalizeScroll = function (e) {
                    if (void 0 === e) return eh;
                    if (!0 === e && eh) return eh.enable();
                    if (!1 === e) {
                        eh && eh.kill(), (eh = e);
                        return;
                    }
                    var t = e instanceof F ? e : ie(e);
                    return eh && eh.target === t.target && eh.kill(), eH(t.target) && (eh = t), t;
                }),
                (t1.core = {
                    _getVelocityProp: j,
                    _inputObserver: t9,
                    _scrollers: w,
                    _proxies: b,
                    bridge: {
                        ss: function () {
                            eO || tM("scrollStart"), (eO = eP());
                        },
                        ref: function () {
                            return et;
                        },
                    },
                }),
                eI() && Y.registerPlugin(t1);
        },
        18774: (e, t) => {
            function i(e) {
                let { ampFirst: t = !1, hybrid: i = !1, hasQuery: r = !1 } = void 0 === e ? {} : e;
                return t || (i && r);
            }
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "isInAmpMode", {
                    enumerable: !0,
                    get: function () {
                        return i;
                    },
                });
        },
        19071: (e, t) => {
            function i(e) {
                var t;
                let { config: i, src: r, width: n, quality: o } = e,
                    s =
                        o ||
                        (null == (t = i.qualities)
                            ? void 0
                            : t.reduce((e, t) => (Math.abs(t - 75) < Math.abs(e - 75) ? t : e))) ||
                        75;
                return (
                    i.path +
                    "?url=" +
                    encodeURIComponent(r) +
                    "&w=" +
                    n +
                    "&q=" +
                    s +
                    (r.startsWith("/_next/static/media/") && 1 ? "&dpl=dpl_83L6vq7Ui7Ub5PhdU3274E2VSipk" : "")
                );
            }
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "default", {
                    enumerable: !0,
                    get: function () {
                        return r;
                    },
                }),
                (i.__next_img_default = !0);
            let r = i;
        },
        20545: (e, t, i) => {
            i.d(t, { A: () => r });
            let r = (0, i(31144).A)("ArrowUpRight", [
                ["path", { d: "M7 7h10v10", key: "1tivn9" }],
                ["path", { d: "M7 17 17 7", key: "1vkiza" }],
            ]);
        },
        27117: (e, t, i) => {
            i.d(t, { M: () => C, A: () => C });
            var r,
                n = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                o = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
                s = Math.PI / 180,
                a = 180 / Math.PI,
                l = Math.sin,
                c = Math.cos,
                u = Math.abs,
                h = Math.sqrt,
                d = Math.atan2,
                f = function (e) {
                    return Math.round(1e5 * e) / 1e5 || 0;
                },
                p = function (e, t, i) {
                    var r = e.length,
                        n = ~~(i * r);
                    if (e[n] > t) {
                        for (; --n && e[n] > t;);
                        n < 0 && (n = 0);
                    } else for (; e[++n] < t && n < r;);
                    return n < r ? n : r - 1;
                },
                g,
                m,
                v = function () {
                    return g || ("undefined" != typeof window && (g = window.gsap) && g.registerPlugin && g);
                },
                y = function () {
                    (g = v())
                        ? (g.registerEase("_CE", C.create), (m = 1))
                        : console.warn("Please gsap.registerPlugin(CustomEase)");
                },
                w = function (e) {
                    return ~~(1e3 * e + (e < 0 ? -0.5 : 0.5)) / 1e3;
                },
                b = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,
                x = /[cLlsSaAhHvVtTqQ]/g,
                S = function (e) {
                    var t,
                        i = e.length,
                        r = 1e20;
                    for (t = 1; t < i; t += 6) +e[t] < r && (r = +e[t]);
                    return r;
                },
                _ = function (e, t, i) {
                    i || 0 === i || (i = Math.max(+e[e.length - 1], +e[1]));
                    var r,
                        n = -1 * e[0],
                        o = -i,
                        s = e.length,
                        a = 1 / (+e[s - 2] + n),
                        l = -t || (Math.abs(e[s - 1] - e[1]) < 0.01 * (e[s - 2] - e[0]) ? S(e) + o : +e[s - 1] + o);
                    for (r = 0, l = l ? 1 / l : -a; r < s; r += 2)
                        (e[r] = (+e[r] + n) * a), (e[r + 1] = (+e[r + 1] + o) * l);
                },
                E = function e(t, i, r, n, o, s, a, l, c, u, h) {
                    var d,
                        f = (t + r) / 2,
                        p = (i + n) / 2,
                        g = (r + o) / 2,
                        m = (n + s) / 2,
                        v = (o + a) / 2,
                        y = (s + l) / 2,
                        w = (f + g) / 2,
                        b = (p + m) / 2,
                        x = (g + v) / 2,
                        S = (m + y) / 2,
                        _ = (w + x) / 2,
                        E = (b + S) / 2,
                        C = a - t,
                        T = l - i,
                        M = Math.abs((r - a) * T - (n - l) * C),
                        P = Math.abs((o - a) * T - (s - l) * C);
                    return (
                        u ||
                        ((u = [
                            { x: t, y: i },
                            { x: a, y: l },
                        ]),
                            (h = 1)),
                        u.splice(h || u.length - 1, 0, { x: _, y: E }),
                        (M + P) * (M + P) > c * (C * C + T * T) &&
                        ((d = u.length),
                            e(t, i, f, p, w, b, _, E, c, u, h),
                            e(_, E, x, S, v, y, a, l, c, u, h + 1 + (u.length - d))),
                        u
                    );
                },
                C = (function () {
                    function e(e, t, i) {
                        m || y(), (this.id = e), this.setData(t, i);
                    }
                    var t = e.prototype;
                    return (
                        (t.setData = function (e, t) {
                            t = t || {};
                            var i,
                                r,
                                a,
                                d,
                                f,
                                p,
                                m,
                                v,
                                y,
                                w = (e = e || "0,0,1,1").match(b),
                                S = 1,
                                C = [],
                                T = [],
                                M = t.precision || 1,
                                P = M <= 1;
                            if (
                                ((this.data = e),
                                    (x.test(e) || (~e.indexOf("M") && 0 > e.indexOf("C"))) &&
                                    (w = (function (e) {
                                        var t,
                                            i,
                                            r,
                                            a,
                                            d,
                                            f,
                                            p,
                                            g,
                                            m,
                                            v,
                                            y,
                                            w,
                                            b,
                                            x,
                                            S,
                                            _ =
                                                (e + "")
                                                    .replace(o, function (e) {
                                                        var t = +e;
                                                        return t < 1e-4 && t > -1e-4 ? 0 : t;
                                                    })
                                                    .match(n) || [],
                                            E = [],
                                            C = 0,
                                            T = 0,
                                            M = 2 / 3,
                                            P = _.length,
                                            k = 0,
                                            O = "ERROR: malformed path: " + e,
                                            R = function (e, t, i, r) {
                                                (v = (i - e) / 3),
                                                    (y = (r - t) / 3),
                                                    p.push(e + v, t + y, i - v, r - y, i, r);
                                            };
                                        if (!e || !isNaN(_[0]) || isNaN(_[1])) return console.log(O), E;
                                        for (t = 0; t < P; t++)
                                            if (
                                                ((b = d),
                                                    isNaN(_[t]) ? (f = (d = _[t].toUpperCase()) !== _[t]) : t--,
                                                    (r = +_[t + 1]),
                                                    (a = +_[t + 2]),
                                                    f && ((r += C), (a += T)),
                                                    t || ((g = r), (m = a)),
                                                    "M" === d)
                                            )
                                                p && (p.length < 8 ? (E.length -= 1) : (k += p.length)),
                                                    (C = g = r),
                                                    (T = m = a),
                                                    (p = [r, a]),
                                                    E.push(p),
                                                    (t += 2),
                                                    (d = "L");
                                            else if ("C" === d)
                                                p || (p = [0, 0]),
                                                    f || (C = T = 0),
                                                    p.push(
                                                        r,
                                                        a,
                                                        C + +_[t + 3],
                                                        T + +_[t + 4],
                                                        (C += +_[t + 5]),
                                                        (T += +_[t + 6])
                                                    ),
                                                    (t += 6);
                                            else if ("S" === d)
                                                (v = C),
                                                    (y = T),
                                                    ("C" === b || "S" === b) &&
                                                    ((v += C - p[p.length - 4]), (y += T - p[p.length - 3])),
                                                    f || (C = T = 0),
                                                    p.push(v, y, r, a, (C += +_[t + 3]), (T += +_[t + 4])),
                                                    (t += 4);
                                            else if ("Q" === d)
                                                (v = C + (r - C) * M),
                                                    (y = T + (a - T) * M),
                                                    f || (C = T = 0),
                                                    (C += +_[t + 3]),
                                                    (T += +_[t + 4]),
                                                    p.push(v, y, C + (r - C) * M, T + (a - T) * M, C, T),
                                                    (t += 4);
                                            else if ("T" === d)
                                                (v = C - p[p.length - 4]),
                                                    (y = T - p[p.length - 3]),
                                                    p.push(
                                                        C + v,
                                                        T + y,
                                                        r + (C + 1.5 * v - r) * M,
                                                        a + (T + 1.5 * y - a) * M,
                                                        (C = r),
                                                        (T = a)
                                                    ),
                                                    (t += 2);
                                            else if ("H" === d) R(C, T, (C = r), T), (t += 1);
                                            else if ("V" === d) R(C, T, C, (T = r + (f ? T - C : 0))), (t += 1);
                                            else if ("L" === d || "Z" === d)
                                                "Z" === d && ((r = g), (a = m), (p.closed = !0)),
                                                    ("L" === d || u(C - r) > 0.5 || u(T - a) > 0.5) &&
                                                    (R(C, T, r, a), "L" === d && (t += 2)),
                                                    (C = r),
                                                    (T = a);
                                            else if ("A" === d) {
                                                if (
                                                    ((x = _[t + 4]),
                                                        (S = _[t + 5]),
                                                        (v = _[t + 6]),
                                                        (y = _[t + 7]),
                                                        (i = 7),
                                                        x.length > 1 &&
                                                        (x.length < 3
                                                            ? ((y = v), (v = S), i--)
                                                            : ((y = S), (v = x.substr(2)), (i -= 2)),
                                                            (S = x.charAt(1)),
                                                            (x = x.charAt(0))),
                                                        (w = (function (e, t, i, r, n, o, a, d, f) {
                                                            if (e !== d || t !== f) {
                                                                (i = u(i)), (r = u(r));
                                                                var p = (n % 360) * s,
                                                                    g = c(p),
                                                                    m = l(p),
                                                                    v = Math.PI,
                                                                    y = 2 * v,
                                                                    w = (e - d) / 2,
                                                                    b = (t - f) / 2,
                                                                    x = g * w + m * b,
                                                                    S = -m * w + g * b,
                                                                    _ = x * x,
                                                                    E = S * S,
                                                                    C = _ / (i * i) + E / (r * r);
                                                                C > 1 && ((i = h(C) * i), (r = h(C) * r));
                                                                var T = i * i,
                                                                    M = r * r,
                                                                    P = (T * M - T * E - M * _) / (T * E + M * _);
                                                                P < 0 && (P = 0);
                                                                var k = (o === a ? -1 : 1) * h(P),
                                                                    O = ((i * S) / r) * k,
                                                                    R = -(((r * x) / i) * k),
                                                                    A = (e + d) / 2 + (g * O - m * R),
                                                                    z = (t + f) / 2 + (m * O + g * R),
                                                                    N = (x - O) / i,
                                                                    D = (S - R) / r,
                                                                    L = (-x - O) / i,
                                                                    j = (-S - R) / r,
                                                                    W = N * N + D * D,
                                                                    I = (D < 0 ? -1 : 1) * Math.acos(N / h(W)),
                                                                    H =
                                                                        (N * j - D * L < 0 ? -1 : 1) *
                                                                        Math.acos((N * L + D * j) / h(W * (L * L + j * j)));
                                                                isNaN(H) && (H = v),
                                                                    !a && H > 0 ? (H -= y) : a && H < 0 && (H += y),
                                                                    (I %= y);
                                                                var B,
                                                                    F = Math.ceil(u((H %= y)) / (y / 4)),
                                                                    Y = [],
                                                                    X = H / F,
                                                                    U = ((4 / 3) * l(X / 2)) / (1 + c(X / 2)),
                                                                    V = g * i,
                                                                    q = m * i,
                                                                    G = -(m * r),
                                                                    $ = g * r;
                                                                for (B = 0; B < F; B++)
                                                                    (x = c((n = I + B * X))),
                                                                        (S = l(n)),
                                                                        (N = c((n += X))),
                                                                        (D = l(n)),
                                                                        Y.push(
                                                                            x - U * S,
                                                                            S + U * x,
                                                                            N + U * D,
                                                                            D - U * N,
                                                                            N,
                                                                            D
                                                                        );
                                                                for (B = 0; B < Y.length; B += 2)
                                                                    (x = Y[B]),
                                                                        (S = Y[B + 1]),
                                                                        (Y[B] = x * V + S * G + A),
                                                                        (Y[B + 1] = x * q + S * $ + z);
                                                                return (Y[B - 2] = d), (Y[B - 1] = f), Y;
                                                            }
                                                        })(
                                                            C,
                                                            T,
                                                            +_[t + 1],
                                                            +_[t + 2],
                                                            +_[t + 3],
                                                            +x,
                                                            +S,
                                                            (f ? C : 0) + +v,
                                                            (f ? T : 0) + +y
                                                        )),
                                                        (t += i),
                                                        w)
                                                )
                                                    for (i = 0; i < w.length; i++) p.push(w[i]);
                                                (C = p[p.length - 2]), (T = p[p.length - 1]);
                                            } else console.log(O);
                                        return (
                                            (t = p.length) < 6
                                                ? (E.pop(), (t = 0))
                                                : p[0] === p[t - 2] && p[1] === p[t - 1] && (p.closed = !0),
                                            (E.totalPoints = k + t),
                                            E
                                        );
                                    })(e)[0]),
                                    4 === (i = w.length))
                            )
                                w.unshift(0, 0), w.push(1, 1), (i = 8);
                            else if ((i - 2) % 6) throw "Invalid CustomEase";
                            for (
                                (0 != +w[0] || 1 != +w[i - 2]) && _(w, t.height, t.originY), this.segment = w, d = 2;
                                d < i;
                                d += 6
                            )
                                (r = { x: +w[d - 2], y: +w[d - 1] }),
                                    (a = { x: +w[d + 4], y: +w[d + 5] }),
                                    C.push(r, a),
                                    E(
                                        r.x,
                                        r.y,
                                        +w[d],
                                        +w[d + 1],
                                        +w[d + 2],
                                        +w[d + 3],
                                        a.x,
                                        a.y,
                                        1 / (2e5 * M),
                                        C,
                                        C.length - 1
                                    );
                            for (d = 0, i = C.length; d < i; d++)
                                (m = C[d]),
                                    (v = C[d - 1] || m),
                                    (m.x > v.x || (v.y !== m.y && v.x === m.x) || m === v) && m.x <= 1
                                        ? ((v.cx = m.x - v.x),
                                            (v.cy = m.y - v.y),
                                            (v.n = m),
                                            (v.nx = m.x),
                                            P &&
                                            d > 1 &&
                                            Math.abs(v.cy / v.cx - C[d - 2].cy / C[d - 2].cx) > 2 &&
                                            (P = 0),
                                            v.cx < S &&
                                            (v.cx
                                                ? (S = v.cx)
                                                : ((v.cx = 0.001),
                                                    d === i - 1 &&
                                                    ((v.x -= 0.001), (S = Math.min(S, 0.001)), (P = 0)))))
                                        : (C.splice(d--, 1), i--);
                            if (((f = 1 / (i = (1 / S + 1) | 0)), (p = 0), (m = C[0]), P)) {
                                for (d = 0; d < i; d++)
                                    (y = d * f),
                                        m.nx < y && (m = C[++p]),
                                        (r = m.y + ((y - m.x) / m.cx) * m.cy),
                                        (T[d] = { x: y, cx: f, y: r, cy: 0, nx: 9 }),
                                        d && (T[d - 1].cy = r - T[d - 1].y);
                                (p = C[C.length - 1]), (T[i - 1].cy = p.y - r), (T[i - 1].cx = p.x - T[T.length - 1].x);
                            } else {
                                for (d = 0; d < i; d++) m.nx < d * f && (m = C[++p]), (T[d] = m);
                                p < C.length - 1 && (T[d - 1] = C[C.length - 2]);
                            }
                            return (
                                (this.ease = function (e) {
                                    var t = T[(e * i) | 0] || T[i - 1];
                                    return t.nx < e && (t = t.n), t.y + ((e - t.x) / t.cx) * t.cy;
                                }),
                                (this.ease.custom = this),
                                this.id && g && g.registerEase(this.id, this.ease),
                                this
                            );
                        }),
                        (t.getSVGData = function (t) {
                            return e.getSVGData(this, t);
                        }),
                        (e.create = function (t, i, r) {
                            return new e(t, i, r).ease;
                        }),
                        (e.register = function (e) {
                            (g = e), y();
                        }),
                        (e.get = function (e) {
                            return g.parseEase(e);
                        }),
                        (e.getSVGData = function (t, i) {
                            var r,
                                n,
                                o,
                                s,
                                a,
                                l,
                                c,
                                u,
                                h,
                                d,
                                p = (i = i || {}).width || 100,
                                m = i.height || 100,
                                v = i.x || 0,
                                y = (i.y || 0) + m,
                                b = g.utils.toArray(i.path)[0];
                            if (
                                (i.invert && ((m = -m), (y = 0)),
                                    "string" == typeof t && (t = g.parseEase(t)),
                                    t.custom && (t = t.custom),
                                    t instanceof e)
                            )
                                r = (function (e) {
                                    "number" == typeof e[0] && (e = [e]);
                                    var t,
                                        i,
                                        r,
                                        n,
                                        o = "",
                                        s = e.length;
                                    for (i = 0; i < s; i++) {
                                        for (
                                            o += "M" + f((n = e[i])[0]) + "," + f(n[1]) + " C", t = n.length, r = 2;
                                            r < t;
                                            r++
                                        )
                                            o +=
                                                f(n[r++]) +
                                                "," +
                                                f(n[r++]) +
                                                " " +
                                                f(n[r++]) +
                                                "," +
                                                f(n[r++]) +
                                                " " +
                                                f(n[r++]) +
                                                "," +
                                                f(n[r]) +
                                                " ";
                                        n.closed && (o += "z");
                                    }
                                    return o;
                                })(
                                    (function (e, t, i, r, n, o, s) {
                                        for (var a, l, c, u, h, d = e.length; --d > -1;)
                                            for (c = 0, l = (a = e[d]).length; c < l; c += 2)
                                                (u = a[c]),
                                                    (h = a[c + 1]),
                                                    (a[c] = u * t + 0 * h + o),
                                                    (a[c + 1] = 0 * u + h * n + s);
                                        return (e._dirty = 1), e;
                                    })([t.segment], p, 0, 0, -m, v, y)
                                );
                            else {
                                for (
                                    r = [v, y],
                                    s = 1 / (c = Math.max(5, 200 * (i.precision || 1))),
                                    c += 2,
                                    u = 5 / c,
                                    h = w(v + s * p),
                                    n = ((d = w(y + -(t(s) * m))) - y) / (h - v),
                                    o = 2;
                                    o < c;
                                    o++
                                )
                                    (a = w(v + o * s * p)),
                                        (Math.abs(((l = w(y + -(t(o * s) * m))) - d) / (a - h) - n) > u ||
                                            o === c - 1) &&
                                        (r.push(h, d), (n = (l - d) / (a - h))),
                                        (h = a),
                                        (d = l);
                                r = "M" + r.join(",");
                            }
                            return b && b.setAttribute("d", r), r;
                        }),
                        e
                    );
                })();
            (C.version = "3.13.0"), (C.headless = !0), v() && g.registerPlugin(C);
        },
        31144: (e, t, i) => {
            i.d(t, { A: () => l });
            var r = i(19893);
            let n = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
                o = function () {
                    for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                    return t.filter((e, t, i) => !!e && i.indexOf(e) === t).join(" ");
                };
            var s = {
                xmlns: "http://www.w3.org/2000/svg",
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round",
            };
            let a = (0, r.forwardRef)((e, t) => {
                let {
                    color: i = "currentColor",
                    size: n = 24,
                    strokeWidth: a = 2,
                    absoluteStrokeWidth: l,
                    className: c = "",
                    children: u,
                    iconNode: h,
                    ...d
                } = e;
                return (0, r.createElement)(
                    "svg",
                    {
                        ref: t,
                        ...s,
                        width: n,
                        height: n,
                        stroke: i,
                        strokeWidth: l ? (24 * Number(a)) / Number(n) : a,
                        className: o("lucide", c),
                        ...d,
                    },
                    [
                        ...h.map((e) => {
                            let [t, i] = e;
                            return (0, r.createElement)(t, i);
                        }),
                        ...(Array.isArray(u) ? u : [u]),
                    ]
                );
            }),
                l = (e, t) => {
                    let i = (0, r.forwardRef)((i, s) => {
                        let { className: l, ...c } = i;
                        return (0, r.createElement)(a, {
                            ref: s,
                            iconNode: t,
                            className: o("lucide-".concat(n(e)), l),
                            ...c,
                        });
                    });
                    return (i.displayName = "".concat(e)), i;
                };
        },
        37138: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
                !(function (e, t) {
                    for (var i in t) Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
                })(t, {
                    VALID_LOADERS: function () {
                        return i;
                    },
                    imageConfigDefault: function () {
                        return r;
                    },
                });
            let i = ["default", "imgix", "cloudinary", "akamai", "custom"],
                r = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    loaderFile: "",
                    domains: [],
                    disableStaticImages: !1,
                    minimumCacheTTL: 60,
                    formats: ["image/webp"],
                    dangerouslyAllowSVG: !1,
                    contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
                    contentDispositionType: "attachment",
                    localPatterns: void 0,
                    remotePatterns: [],
                    qualities: void 0,
                    unoptimized: !1,
                };
        },
        41989: (e, t, i) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "Image", {
                    enumerable: !0,
                    get: function () {
                        return b;
                    },
                });
            let r = i(84399),
                n = i(68940),
                o = i(32689),
                s = n._(i(19893)),
                a = r._(i(16312)),
                l = r._(i(6142)),
                c = i(61301),
                u = i(37138),
                h = i(66750);
            i(47092);
            let d = i(72559),
                f = r._(i(19071)),
                p = i(15380),
                g = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !1,
                };
            function m(e, t, i, r, n, o, s) {
                let a = null == e ? void 0 : e.src;
                e &&
                    e["data-loaded-src"] !== a &&
                    ((e["data-loaded-src"] = a),
                        ("decode" in e ? e.decode() : Promise.resolve())
                            .catch(() => { })
                            .then(() => {
                                if (e.parentElement && e.isConnected) {
                                    if (("empty" !== t && n(!0), null == i ? void 0 : i.current)) {
                                        let t = new Event("load");
                                        Object.defineProperty(t, "target", { writable: !1, value: e });
                                        let r = !1,
                                            n = !1;
                                        i.current({
                                            ...t,
                                            nativeEvent: t,
                                            currentTarget: e,
                                            target: e,
                                            isDefaultPrevented: () => r,
                                            isPropagationStopped: () => n,
                                            persist: () => { },
                                            preventDefault: () => {
                                                (r = !0), t.preventDefault();
                                            },
                                            stopPropagation: () => {
                                                (n = !0), t.stopPropagation();
                                            },
                                        });
                                    }
                                    (null == r ? void 0 : r.current) && r.current(e);
                                }
                            }));
            }
            function v(e) {
                return s.use ? { fetchPriority: e } : { fetchpriority: e };
            }
            let y = (0, s.forwardRef)((e, t) => {
                let {
                    src: i,
                    srcSet: r,
                    sizes: n,
                    height: a,
                    width: l,
                    decoding: c,
                    className: u,
                    style: h,
                    fetchPriority: d,
                    placeholder: f,
                    loading: g,
                    unoptimized: y,
                    fill: w,
                    onLoadRef: b,
                    onLoadingCompleteRef: x,
                    setBlurComplete: S,
                    setShowAltText: _,
                    sizesInput: E,
                    onLoad: C,
                    onError: T,
                    ...M
                } = e,
                    P = (0, s.useCallback)(
                        (e) => {
                            e && (T && (e.src = e.src), e.complete && m(e, f, b, x, S, y, E));
                        },
                        [i, f, b, x, S, T, y, E]
                    ),
                    k = (0, p.useMergedRef)(t, P);
                return (0, o.jsx)("img", {
                    ...M,
                    ...v(d),
                    loading: g,
                    width: l,
                    height: a,
                    decoding: c,
                    "data-nimg": w ? "fill" : "1",
                    className: u,
                    style: h,
                    sizes: n,
                    srcSet: r,
                    src: i,
                    ref: k,
                    onLoad: (e) => {
                        m(e.currentTarget, f, b, x, S, y, E);
                    },
                    onError: (e) => {
                        _(!0), "empty" !== f && S(!0), T && T(e);
                    },
                });
            });
            function w(e) {
                let { isAppRouter: t, imgAttributes: i } = e,
                    r = {
                        as: "image",
                        imageSrcSet: i.srcSet,
                        imageSizes: i.sizes,
                        crossOrigin: i.crossOrigin,
                        referrerPolicy: i.referrerPolicy,
                        ...v(i.fetchPriority),
                    };
                return t && a.default.preload
                    ? (a.default.preload(i.src, r), null)
                    : (0, o.jsx)(l.default, {
                        children: (0, o.jsx)(
                            "link",
                            { rel: "preload", href: i.srcSet ? void 0 : i.src, ...r },
                            "__nimg-" + i.src + i.srcSet + i.sizes
                        ),
                    });
            }
            let b = (0, s.forwardRef)((e, t) => {
                let i = (0, s.useContext)(d.RouterContext),
                    r = (0, s.useContext)(h.ImageConfigContext),
                    n = (0, s.useMemo)(() => {
                        var e;
                        let t = g || r || u.imageConfigDefault,
                            i = [...t.deviceSizes, ...t.imageSizes].sort((e, t) => e - t),
                            n = t.deviceSizes.sort((e, t) => e - t),
                            o = null == (e = t.qualities) ? void 0 : e.sort((e, t) => e - t);
                        return { ...t, allSizes: i, deviceSizes: n, qualities: o };
                    }, [r]),
                    { onLoad: a, onLoadingComplete: l } = e,
                    p = (0, s.useRef)(a);
                (0, s.useEffect)(() => {
                    p.current = a;
                }, [a]);
                let m = (0, s.useRef)(l);
                (0, s.useEffect)(() => {
                    m.current = l;
                }, [l]);
                let [v, b] = (0, s.useState)(!1),
                    [x, S] = (0, s.useState)(!1),
                    { props: _, meta: E } = (0, c.getImgProps)(e, {
                        defaultLoader: f.default,
                        imgConf: n,
                        blurComplete: v,
                        showAltText: x,
                    });
                return (0, o.jsxs)(o.Fragment, {
                    children: [
                        (0, o.jsx)(y, {
                            ..._,
                            unoptimized: E.unoptimized,
                            placeholder: E.placeholder,
                            fill: E.fill,
                            onLoadRef: p,
                            onLoadingCompleteRef: m,
                            setBlurComplete: b,
                            setShowAltText: S,
                            sizesInput: e.sizes,
                            ref: t,
                        }),
                        E.priority ? (0, o.jsx)(w, { isAppRouter: !i, imgAttributes: _ }) : null,
                    ],
                });
            });
            ("function" == typeof t.default || ("object" == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, "__esModule", { value: !0 }),
                    Object.assign(t.default, t),
                    (e.exports = t.default));
        },
        61301: (e, t, i) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "getImgProps", {
                    enumerable: !0,
                    get: function () {
                        return l;
                    },
                }),
                i(47092);
            let r = i(17678),
                n = i(37138),
                o = ["-moz-initial", "fill", "none", "scale-down", void 0];
            function s(e) {
                return void 0 !== e.default;
            }
            function a(e) {
                return void 0 === e
                    ? e
                    : "number" == typeof e
                        ? Number.isFinite(e)
                            ? e
                            : NaN
                        : "string" == typeof e && /^[0-9]+$/.test(e)
                            ? parseInt(e, 10)
                            : NaN;
            }
            function l(e, t) {
                var i, l;
                let c,
                    u,
                    h,
                    {
                        src: d,
                        sizes: f,
                        unoptimized: p = !1,
                        priority: g = !1,
                        loading: m,
                        className: v,
                        quality: y,
                        width: w,
                        height: b,
                        fill: x = !1,
                        style: S,
                        overrideSrc: _,
                        onLoad: E,
                        onLoadingComplete: C,
                        placeholder: T = "empty",
                        blurDataURL: M,
                        fetchPriority: P,
                        decoding: k = "async",
                        layout: O,
                        objectFit: R,
                        objectPosition: A,
                        lazyBoundary: z,
                        lazyRoot: N,
                        ...D
                    } = e,
                    { imgConf: L, showAltText: j, blurComplete: W, defaultLoader: I } = t,
                    H = L || n.imageConfigDefault;
                if ("allSizes" in H) c = H;
                else {
                    let e = [...H.deviceSizes, ...H.imageSizes].sort((e, t) => e - t),
                        t = H.deviceSizes.sort((e, t) => e - t),
                        r = null == (i = H.qualities) ? void 0 : i.sort((e, t) => e - t);
                    c = { ...H, allSizes: e, deviceSizes: t, qualities: r };
                }
                if (void 0 === I)
                    throw Object.defineProperty(
                        Error(
                            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
                        ),
                        "__NEXT_ERROR_CODE",
                        { value: "E163", enumerable: !1, configurable: !0 }
                    );
                let B = D.loader || I;
                delete D.loader, delete D.srcSet;
                let F = "__next_img_default" in B;
                if (F) {
                    if ("custom" === c.loader)
                        throw Object.defineProperty(
                            Error(
                                'Image with src "' +
                                d +
                                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
                            ),
                            "__NEXT_ERROR_CODE",
                            { value: "E252", enumerable: !1, configurable: !0 }
                        );
                } else {
                    let e = B;
                    B = (t) => {
                        let { config: i, ...r } = t;
                        return e(r);
                    };
                }
                if (O) {
                    "fill" === O && (x = !0);
                    let e = {
                        intrinsic: { maxWidth: "100%", height: "auto" },
                        responsive: { width: "100%", height: "auto" },
                    }[O];
                    e && (S = { ...S, ...e });
                    let t = { responsive: "100vw", fill: "100vw" }[O];
                    t && !f && (f = t);
                }
                let Y = "",
                    X = a(w),
                    U = a(b);
                if ((l = d) && "object" == typeof l && (s(l) || void 0 !== l.src)) {
                    let e = s(d) ? d.default : d;
                    if (!e.src)
                        throw Object.defineProperty(
                            Error(
                                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                                JSON.stringify(e)
                            ),
                            "__NEXT_ERROR_CODE",
                            { value: "E460", enumerable: !1, configurable: !0 }
                        );
                    if (!e.height || !e.width)
                        throw Object.defineProperty(
                            Error(
                                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                                JSON.stringify(e)
                            ),
                            "__NEXT_ERROR_CODE",
                            { value: "E48", enumerable: !1, configurable: !0 }
                        );
                    if (((u = e.blurWidth), (h = e.blurHeight), (M = M || e.blurDataURL), (Y = e.src), !x))
                        if (X || U) {
                            if (X && !U) {
                                let t = X / e.width;
                                U = Math.round(e.height * t);
                            } else if (!X && U) {
                                let t = U / e.height;
                                X = Math.round(e.width * t);
                            }
                        } else (X = e.width), (U = e.height);
                }
                let V = !g && ("lazy" === m || void 0 === m);
                (!(d = "string" == typeof d ? d : Y) || d.startsWith("data:") || d.startsWith("blob:")) &&
                    ((p = !0), (V = !1)),
                    c.unoptimized && (p = !0),
                    F && !c.dangerouslyAllowSVG && d.split("?", 1)[0].endsWith(".svg") && (p = !0);
                let q = a(y),
                    G = Object.assign(
                        x
                            ? {
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                left: 0,
                                top: 0,
                                right: 0,
                                bottom: 0,
                                objectFit: R,
                                objectPosition: A,
                            }
                            : {},
                        j ? {} : { color: "transparent" },
                        S
                    ),
                    $ =
                        W || "empty" === T
                            ? null
                            : "blur" === T
                                ? M && "data:" === M.slice(0, 5)
                                    ? 'url("data:image/svg+xml;charset=utf-8,' +
                                    (0, r.getImageBlurSvg)({
                                        widthInt: X,
                                        heightInt: U,
                                        blurWidth: u,
                                        blurHeight: h,
                                        blurDataURL: M || "",
                                        objectFit: G.objectFit,
                                    }) +
                                    '")'
                                    : 'url("' + M + '")'
                                : 'url("' + T + '")',
                    Z = o.includes(G.objectFit) ? ("fill" === G.objectFit ? "100% 100%" : "cover") : G.objectFit,
                    J = $
                        ? {
                            backgroundSize: Z,
                            backgroundPosition: G.objectPosition || "50% 50%",
                            backgroundRepeat: "no-repeat",
                            backgroundImage: $,
                        }
                        : {},
                    K = (function (e) {
                        let { config: t, src: i, unoptimized: r, width: n, quality: o, sizes: s, loader: a } = e;
                        if (r) return { src: i, srcSet: void 0, sizes: void 0 };
                        let { widths: l, kind: c } = (function (e, t, i) {
                            let { deviceSizes: r, allSizes: n } = e;
                            if (i) {
                                let e = /(^|\s)(1?\d?\d)vw/g,
                                    t = [];
                                for (let r; (r = e.exec(i));) t.push(parseInt(r[2]));
                                if (t.length) {
                                    let e = 0.01 * Math.min(...t);
                                    return { widths: n.filter((t) => t >= r[0] * e), kind: "w" };
                                }
                                return { widths: n, kind: "w" };
                            }
                            return "number" != typeof t
                                ? { widths: r, kind: "w" }
                                : {
                                    widths: [
                                        ...new Set(
                                            [t, 2 * t].map((e) => n.find((t) => t >= e) || n[n.length - 1])
                                        ),
                                    ],
                                    kind: "x",
                                };
                        })(t, n, s),
                            u = l.length - 1;
                        return {
                            sizes: s || "w" !== c ? s : "100vw",
                            srcSet: l
                                .map(
                                    (e, r) =>
                                        a({ config: t, src: i, quality: o, width: e }) +
                                        " " +
                                        ("w" === c ? e : r + 1) +
                                        c
                                )
                                .join(", "),
                            src: a({ config: t, src: i, quality: o, width: l[u] }),
                        };
                    })({ config: c, src: d, unoptimized: p, width: X, quality: q, sizes: f, loader: B });
                return {
                    props: {
                        ...D,
                        loading: V ? "lazy" : m,
                        fetchPriority: P,
                        width: X,
                        height: U,
                        decoding: k,
                        className: v,
                        style: { ...G, ...J },
                        sizes: K.sizes,
                        srcSet: K.srcSet,
                        src: _ || K.src,
                    },
                    meta: { unoptimized: p, priority: g, placeholder: T, fill: x },
                };
            }
        },
        66750: (e, t, i) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "ImageConfigContext", {
                    enumerable: !0,
                    get: function () {
                        return o;
                    },
                });
            let r = i(84399)._(i(19893)),
                n = i(37138),
                o = r.default.createContext(n.imageConfigDefault);
        },
        72559: (e, t, i) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "RouterContext", {
                    enumerable: !0,
                    get: function () {
                        return r;
                    },
                });
            let r = i(84399)._(i(19893)).default.createContext(null);
        },
        80451: (e, t, i) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "default", {
                    enumerable: !0,
                    get: function () {
                        return s;
                    },
                });
            let r = i(19893),
                n = r.useLayoutEffect,
                o = r.useEffect;
            function s(e) {
                let { headManager: t, reduceComponentsToState: i } = e;
                function s() {
                    if (t && t.mountedInstances) {
                        let n = r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                        t.updateHead(i(n, e));
                    }
                }
                return (
                    n(() => {
                        var i;
                        return (
                            null == t || null == (i = t.mountedInstances) || i.add(e.children),
                            () => {
                                var i;
                                null == t || null == (i = t.mountedInstances) || i.delete(e.children);
                            }
                        );
                    }),
                    n(
                        () => (
                            t && (t._pendingUpdate = s),
                            () => {
                                t && (t._pendingUpdate = s);
                            }
                        )
                    ),
                    o(
                        () => (
                            t && t._pendingUpdate && (t._pendingUpdate(), (t._pendingUpdate = null)),
                            () => {
                                t && t._pendingUpdate && (t._pendingUpdate(), (t._pendingUpdate = null));
                            }
                        )
                    ),
                    null
                );
            }
        },
        84873: (e, t, i) => {
            var r = i(33301);
            i.o(r, "useParams") &&
                i.d(t, {
                    useParams: function () {
                        return r.useParams;
                    },
                }),
                i.o(r, "usePathname") &&
                i.d(t, {
                    usePathname: function () {
                        return r.usePathname;
                    },
                }),
                i.o(r, "useRouter") &&
                i.d(t, {
                    useRouter: function () {
                        return r.useRouter;
                    },
                }),
                i.o(r, "useSearchParams") &&
                i.d(t, {
                    useSearchParams: function () {
                        return r.useSearchParams;
                    },
                }),
                i.o(r, "useSelectedLayoutSegments") &&
                i.d(t, {
                    useSelectedLayoutSegments: function () {
                        return r.useSelectedLayoutSegments;
                    },
                });
        },
        89796: (e, t, i) => {
            function r(e, t, i) {
                return Math.max(e, Math.min(t, i));
            }
            i.d(t, { FH: () => m, xP: () => y });
            var n = class {
                isRunning = !1;
                value = 0;
                from = 0;
                to = 0;
                currentTime = 0;
                lerp;
                duration;
                easing;
                onUpdate;
                advance(e) {
                    if (!this.isRunning) return;
                    let t = !1;
                    if (this.duration && this.easing) {
                        this.currentTime += e;
                        let i = r(0, this.currentTime / this.duration, 1),
                            n = (t = i >= 1) ? 1 : this.easing(i);
                        this.value = this.from + (this.to - this.from) * n;
                    } else if (this.lerp) {
                        var i, n, o, s;
                        (this.value =
                            ((i = this.value),
                                (n = this.to),
                                (o = 60 * this.lerp),
                                (1 - (s = 1 - Math.exp(-o * e))) * i + s * n)),
                            Math.round(this.value) === this.to && ((this.value = this.to), (t = !0));
                    } else (this.value = this.to), (t = !0);
                    t && this.stop(), this.onUpdate?.(this.value, t);
                }
                stop() {
                    this.isRunning = !1;
                }
                fromTo(e, t, { lerp: i, duration: r, easing: n, onStart: o, onUpdate: s }) {
                    (this.from = this.value = e),
                        (this.to = t),
                        (this.lerp = i),
                        (this.duration = r),
                        (this.easing = n),
                        (this.currentTime = 0),
                        (this.isRunning = !0),
                        o?.(),
                        (this.onUpdate = s);
                }
            },
                o = class {
                    constructor(e, t, { autoResize: i = !0, debounce: r = 250 } = {}) {
                        (this.wrapper = e),
                            (this.content = t),
                            i &&
                            ((this.debouncedResize = (function (e, t) {
                                let i;
                                return function (...r) {
                                    let n = this;
                                    clearTimeout(i),
                                        (i = setTimeout(() => {
                                            (i = void 0), e.apply(n, r);
                                        }, t));
                                };
                            })(this.resize, r)),
                                this.wrapper instanceof Window
                                    ? window.addEventListener("resize", this.debouncedResize, !1)
                                    : ((this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize)),
                                        this.wrapperResizeObserver.observe(this.wrapper)),
                                (this.contentResizeObserver = new ResizeObserver(this.debouncedResize)),
                                this.contentResizeObserver.observe(this.content)),
                            this.resize();
                    }
                    width = 0;
                    height = 0;
                    scrollHeight = 0;
                    scrollWidth = 0;
                    debouncedResize;
                    wrapperResizeObserver;
                    contentResizeObserver;
                    destroy() {
                        this.wrapperResizeObserver?.disconnect(),
                            this.contentResizeObserver?.disconnect(),
                            this.wrapper === window &&
                            this.debouncedResize &&
                            window.removeEventListener("resize", this.debouncedResize, !1);
                    }
                    resize = () => {
                        this.onWrapperResize(), this.onContentResize();
                    };
                    onWrapperResize = () => {
                        this.wrapper instanceof Window
                            ? ((this.width = window.innerWidth), (this.height = window.innerHeight))
                            : ((this.width = this.wrapper.clientWidth), (this.height = this.wrapper.clientHeight));
                    };
                    onContentResize = () => {
                        this.wrapper instanceof Window
                            ? ((this.scrollHeight = this.content.scrollHeight),
                                (this.scrollWidth = this.content.scrollWidth))
                            : ((this.scrollHeight = this.wrapper.scrollHeight),
                                (this.scrollWidth = this.wrapper.scrollWidth));
                    };
                    get limit() {
                        return { x: this.scrollWidth - this.width, y: this.scrollHeight - this.height };
                    }
                },
                s = class {
                    events = {};
                    emit(e, ...t) {
                        let i = this.events[e] || [];
                        for (let e = 0, r = i.length; e < r; e++) i[e]?.(...t);
                    }
                    on(e, t) {
                        return (
                            this.events[e]?.push(t) || (this.events[e] = [t]),
                            () => {
                                this.events[e] = this.events[e]?.filter((e) => t !== e);
                            }
                        );
                    }
                    off(e, t) {
                        this.events[e] = this.events[e]?.filter((e) => t !== e);
                    }
                    destroy() {
                        this.events = {};
                    }
                },
                a = 100 / 6,
                l = { passive: !1 },
                c = class {
                    constructor(e, t = { wheelMultiplier: 1, touchMultiplier: 1 }) {
                        (this.element = e),
                            (this.options = t),
                            window.addEventListener("resize", this.onWindowResize, !1),
                            this.onWindowResize(),
                            this.element.addEventListener("wheel", this.onWheel, l),
                            this.element.addEventListener("touchstart", this.onTouchStart, l),
                            this.element.addEventListener("touchmove", this.onTouchMove, l),
                            this.element.addEventListener("touchend", this.onTouchEnd, l);
                    }
                    touchStart = { x: 0, y: 0 };
                    lastDelta = { x: 0, y: 0 };
                    window = { width: 0, height: 0 };
                    emitter = new s();
                    on(e, t) {
                        return this.emitter.on(e, t);
                    }
                    destroy() {
                        this.emitter.destroy(),
                            window.removeEventListener("resize", this.onWindowResize, !1),
                            this.element.removeEventListener("wheel", this.onWheel, l),
                            this.element.removeEventListener("touchstart", this.onTouchStart, l),
                            this.element.removeEventListener("touchmove", this.onTouchMove, l),
                            this.element.removeEventListener("touchend", this.onTouchEnd, l);
                    }
                    onTouchStart = (e) => {
                        let { clientX: t, clientY: i } = e.targetTouches ? e.targetTouches[0] : e;
                        (this.touchStart.x = t),
                            (this.touchStart.y = i),
                            (this.lastDelta = { x: 0, y: 0 }),
                            this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: e });
                    };
                    onTouchMove = (e) => {
                        let { clientX: t, clientY: i } = e.targetTouches ? e.targetTouches[0] : e,
                            r = -(t - this.touchStart.x) * this.options.touchMultiplier,
                            n = -(i - this.touchStart.y) * this.options.touchMultiplier;
                        (this.touchStart.x = t),
                            (this.touchStart.y = i),
                            (this.lastDelta = { x: r, y: n }),
                            this.emitter.emit("scroll", { deltaX: r, deltaY: n, event: e });
                    };
                    onTouchEnd = (e) => {
                        this.emitter.emit("scroll", { deltaX: this.lastDelta.x, deltaY: this.lastDelta.y, event: e });
                    };
                    onWheel = (e) => {
                        let { deltaX: t, deltaY: i, deltaMode: r } = e,
                            n = 1 === r ? a : 2 === r ? this.window.width : 1,
                            o = 1 === r ? a : 2 === r ? this.window.height : 1;
                        (t *= n),
                            (i *= o),
                            (t *= this.options.wheelMultiplier),
                            (i *= this.options.wheelMultiplier),
                            this.emitter.emit("scroll", { deltaX: t, deltaY: i, event: e });
                    };
                    onWindowResize = () => {
                        this.window = { width: window.innerWidth, height: window.innerHeight };
                    };
                },
                u = (e) => Math.min(1, 1.001 - Math.pow(2, -10 * e)),
                h = class {
                    _isScrolling = !1;
                    _isStopped = !1;
                    _isLocked = !1;
                    _preventNextNativeScrollEvent = !1;
                    _resetVelocityTimeout = null;
                    __rafID = null;
                    isTouching;
                    time = 0;
                    userData = {};
                    lastVelocity = 0;
                    velocity = 0;
                    direction = 0;
                    options;
                    targetScroll;
                    animatedScroll;
                    animate = new n();
                    emitter = new s();
                    dimensions;
                    virtualScroll;
                    constructor({
                        wrapper: e = window,
                        content: t = document.documentElement,
                        eventsTarget: i = e,
                        smoothWheel: r = !0,
                        syncTouch: n = !1,
                        syncTouchLerp: s = 0.075,
                        touchInertiaExponent: a = 1.7,
                        duration: l,
                        easing: h,
                        lerp: d = 0.1,
                        infinite: f = !1,
                        orientation: p = "vertical",
                        gestureOrientation: g = "vertical",
                        touchMultiplier: m = 1,
                        wheelMultiplier: v = 1,
                        autoResize: y = !0,
                        prevent: w,
                        virtualScroll: b,
                        overscroll: x = !0,
                        autoRaf: S = !1,
                        anchors: _ = !1,
                        autoToggle: E = !1,
                        allowNestedScroll: C = !1,
                        __experimental__naiveDimensions: T = !1,
                    } = {}) {
                        (window.lenisVersion = "1.3.8"),
                            (e && e !== document.documentElement) || (e = window),
                            "number" == typeof l && "function" != typeof h
                                ? (h = u)
                                : "function" == typeof h && "number" != typeof l && (l = 1),
                            (this.options = {
                                wrapper: e,
                                content: t,
                                eventsTarget: i,
                                smoothWheel: r,
                                syncTouch: n,
                                syncTouchLerp: s,
                                touchInertiaExponent: a,
                                duration: l,
                                easing: h,
                                lerp: d,
                                infinite: f,
                                gestureOrientation: g,
                                orientation: p,
                                touchMultiplier: m,
                                wheelMultiplier: v,
                                autoResize: y,
                                prevent: w,
                                virtualScroll: b,
                                overscroll: x,
                                autoRaf: S,
                                anchors: _,
                                autoToggle: E,
                                allowNestedScroll: C,
                                __experimental__naiveDimensions: T,
                            }),
                            (this.dimensions = new o(e, t, { autoResize: y })),
                            this.updateClassName(),
                            (this.targetScroll = this.animatedScroll = this.actualScroll),
                            this.options.wrapper.addEventListener("scroll", this.onNativeScroll, !1),
                            this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, { capture: !0 }),
                            this.options.anchors &&
                            this.options.wrapper === window &&
                            this.options.wrapper.addEventListener("click", this.onClick, !1),
                            this.options.wrapper.addEventListener("pointerdown", this.onPointerDown, !1),
                            (this.virtualScroll = new c(i, { touchMultiplier: m, wheelMultiplier: v })),
                            this.virtualScroll.on("scroll", this.onVirtualScroll),
                            this.options.autoToggle &&
                            this.rootElement.addEventListener("transitionend", this.onTransitionEnd, {
                                passive: !0,
                            }),
                            this.options.autoRaf && (this.__rafID = requestAnimationFrame(this.raf));
                    }
                    destroy() {
                        this.emitter.destroy(),
                            this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, !1),
                            this.options.wrapper.removeEventListener("scrollend", this.onScrollEnd, { capture: !0 }),
                            this.options.wrapper.removeEventListener("pointerdown", this.onPointerDown, !1),
                            this.options.anchors &&
                            this.options.wrapper === window &&
                            this.options.wrapper.removeEventListener("click", this.onClick, !1),
                            this.virtualScroll.destroy(),
                            this.dimensions.destroy(),
                            this.cleanUpClassName(),
                            this.__rafID && cancelAnimationFrame(this.__rafID);
                    }
                    on(e, t) {
                        return this.emitter.on(e, t);
                    }
                    off(e, t) {
                        return this.emitter.off(e, t);
                    }
                    onScrollEnd = (e) => {
                        e instanceof CustomEvent ||
                            ("smooth" !== this.isScrolling && !1 !== this.isScrolling) ||
                            e.stopPropagation();
                    };
                    dispatchScrollendEvent = () => {
                        this.options.wrapper.dispatchEvent(
                            new CustomEvent("scrollend", {
                                bubbles: this.options.wrapper === window,
                                detail: { lenisScrollEnd: !0 },
                            })
                        );
                    };
                    onTransitionEnd = (e) => {
                        if (e.propertyName.includes("overflow")) {
                            let e = this.isHorizontal ? "overflow-x" : "overflow-y";
                            ["hidden", "clip"].includes(getComputedStyle(this.rootElement)[e])
                                ? this.internalStop()
                                : this.internalStart();
                        }
                    };
                    setScroll(e) {
                        this.isHorizontal
                            ? this.options.wrapper.scrollTo({ left: e, behavior: "instant" })
                            : this.options.wrapper.scrollTo({ top: e, behavior: "instant" });
                    }
                    onClick = (e) => {
                        let t = e
                            .composedPath()
                            .find(
                                (e) =>
                                    e instanceof HTMLAnchorElement &&
                                    (e.getAttribute("href")?.startsWith("#") ||
                                        e.getAttribute("href")?.startsWith("/#") ||
                                        e.getAttribute("href")?.startsWith("./#"))
                            );
                        if (t) {
                            let e = t.getAttribute("href");
                            if (e) {
                                let t =
                                    "object" == typeof this.options.anchors && this.options.anchors
                                        ? this.options.anchors
                                        : void 0,
                                    i = `#${e.split("#")[1]}`;
                                ["#", "/#", "./#", "#top", "/#top", "./#top"].includes(e) && (i = 0),
                                    this.scrollTo(i, t);
                            }
                        }
                    };
                    onPointerDown = (e) => {
                        1 === e.button && this.reset();
                    };
                    onVirtualScroll = (e) => {
                        if ("function" == typeof this.options.virtualScroll && !1 === this.options.virtualScroll(e))
                            return;
                        let { deltaX: t, deltaY: i, event: r } = e;
                        if (
                            (this.emitter.emit("virtual-scroll", { deltaX: t, deltaY: i, event: r }),
                                r.ctrlKey || r.lenisStopPropagation)
                        )
                            return;
                        let n = r.type.includes("touch"),
                            o = r.type.includes("wheel");
                        this.isTouching = "touchstart" === r.type || "touchmove" === r.type;
                        let s = 0 === t && 0 === i;
                        if (
                            this.options.syncTouch &&
                            n &&
                            "touchstart" === r.type &&
                            s &&
                            !this.isStopped &&
                            !this.isLocked
                        )
                            return void this.reset();
                        let a =
                            ("vertical" === this.options.gestureOrientation && 0 === i) ||
                            ("horizontal" === this.options.gestureOrientation && 0 === t);
                        if (s || a) return;
                        let l = r.composedPath();
                        l = l.slice(0, l.indexOf(this.rootElement));
                        let c = this.options.prevent;
                        if (
                            l.find(
                                (e) =>
                                    e instanceof HTMLElement &&
                                    (("function" == typeof c && c?.(e)) ||
                                        e.hasAttribute?.("data-lenis-prevent") ||
                                        (n && e.hasAttribute?.("data-lenis-prevent-touch")) ||
                                        (o && e.hasAttribute?.("data-lenis-prevent-wheel")) ||
                                        (this.options.allowNestedScroll &&
                                            this.checkNestedScroll(e, { deltaX: t, deltaY: i })))
                            )
                        )
                            return;
                        if (this.isStopped || this.isLocked) {
                            r.cancelable && r.preventDefault();
                            return;
                        }
                        if (!((this.options.syncTouch && n) || (this.options.smoothWheel && o))) {
                            (this.isScrolling = "native"), this.animate.stop(), (r.lenisStopPropagation = !0);
                            return;
                        }
                        let u = i;
                        "both" === this.options.gestureOrientation
                            ? (u = Math.abs(i) > Math.abs(t) ? i : t)
                            : "horizontal" === this.options.gestureOrientation && (u = t),
                            (!this.options.overscroll ||
                                this.options.infinite ||
                                (this.options.wrapper !== window &&
                                    ((this.animatedScroll > 0 && this.animatedScroll < this.limit) ||
                                        (0 === this.animatedScroll && i > 0) ||
                                        (this.animatedScroll === this.limit && i < 0)))) &&
                            (r.lenisStopPropagation = !0),
                            r.cancelable && r.preventDefault();
                        let h = n && this.options.syncTouch,
                            d = n && "touchend" === r.type;
                        d &&
                            (u =
                                Math.sign(this.velocity) *
                                Math.pow(Math.abs(this.velocity), this.options.touchInertiaExponent)),
                            this.scrollTo(this.targetScroll + u, {
                                programmatic: !1,
                                ...(h
                                    ? { lerp: d ? this.options.syncTouchLerp : 1 }
                                    : {
                                        lerp: this.options.lerp,
                                        duration: this.options.duration,
                                        easing: this.options.easing,
                                    }),
                            });
                    };
                    resize() {
                        this.dimensions.resize(),
                            (this.animatedScroll = this.targetScroll = this.actualScroll),
                            this.emit();
                    }
                    emit() {
                        this.emitter.emit("scroll", this);
                    }
                    onNativeScroll = () => {
                        if (
                            (null !== this._resetVelocityTimeout &&
                                (clearTimeout(this._resetVelocityTimeout), (this._resetVelocityTimeout = null)),
                                this._preventNextNativeScrollEvent)
                        ) {
                            this._preventNextNativeScrollEvent = !1;
                            return;
                        }
                        if (!1 === this.isScrolling || "native" === this.isScrolling) {
                            let e = this.animatedScroll;
                            (this.animatedScroll = this.targetScroll = this.actualScroll),
                                (this.lastVelocity = this.velocity),
                                (this.velocity = this.animatedScroll - e),
                                (this.direction = Math.sign(this.animatedScroll - e)),
                                this.isStopped || (this.isScrolling = "native"),
                                this.emit(),
                                0 !== this.velocity &&
                                (this._resetVelocityTimeout = setTimeout(() => {
                                    (this.lastVelocity = this.velocity),
                                        (this.velocity = 0),
                                        (this.isScrolling = !1),
                                        this.emit();
                                }, 400));
                        }
                    };
                    reset() {
                        (this.isLocked = !1),
                            (this.isScrolling = !1),
                            (this.animatedScroll = this.targetScroll = this.actualScroll),
                            (this.lastVelocity = this.velocity = 0),
                            this.animate.stop();
                    }
                    start() {
                        if (this.isStopped) {
                            if (this.options.autoToggle) return void this.rootElement.style.removeProperty("overflow");
                            this.internalStart();
                        }
                    }
                    internalStart() {
                        this.isStopped && (this.reset(), (this.isStopped = !1), this.emit());
                    }
                    stop() {
                        if (!this.isStopped) {
                            if (this.options.autoToggle)
                                return void this.rootElement.style.setProperty("overflow", "clip");
                            this.internalStop();
                        }
                    }
                    internalStop() {
                        this.isStopped || (this.reset(), (this.isStopped = !0), this.emit());
                    }
                    raf = (e) => {
                        let t = e - (this.time || e);
                        (this.time = e),
                            this.animate.advance(0.001 * t),
                            this.options.autoRaf && (this.__rafID = requestAnimationFrame(this.raf));
                    };
                    scrollTo(
                        e,
                        {
                            offset: t = 0,
                            immediate: i = !1,
                            lock: n = !1,
                            duration: o = this.options.duration,
                            easing: s = this.options.easing,
                            lerp: a = this.options.lerp,
                            onStart: l,
                            onComplete: c,
                            force: h = !1,
                            programmatic: d = !0,
                            userData: f,
                        } = {}
                    ) {
                        if ((!this.isStopped && !this.isLocked) || h) {
                            if ("string" == typeof e && ["top", "left", "start"].includes(e)) e = 0;
                            else if ("string" == typeof e && ["bottom", "right", "end"].includes(e)) e = this.limit;
                            else {
                                let i;
                                if (
                                    ("string" == typeof e
                                        ? (i = document.querySelector(e))
                                        : e instanceof HTMLElement && e?.nodeType && (i = e),
                                        i)
                                ) {
                                    if (this.options.wrapper !== window) {
                                        let e = this.rootElement.getBoundingClientRect();
                                        t -= this.isHorizontal ? e.left : e.top;
                                    }
                                    let r = i.getBoundingClientRect();
                                    e = (this.isHorizontal ? r.left : r.top) + this.animatedScroll;
                                }
                            }
                            if ("number" == typeof e) {
                                if (((e += t), (e = Math.round(e)), this.options.infinite)) {
                                    if (d) {
                                        this.targetScroll = this.animatedScroll = this.scroll;
                                        let t = e - this.animatedScroll;
                                        t > this.limit / 2
                                            ? (e -= this.limit)
                                            : t < -this.limit / 2 && (e += this.limit);
                                    }
                                } else e = r(0, e, this.limit);
                                if (e === this.targetScroll) {
                                    l?.(this), c?.(this);
                                    return;
                                }
                                if (((this.userData = f ?? {}), i)) {
                                    (this.animatedScroll = this.targetScroll = e),
                                        this.setScroll(this.scroll),
                                        this.reset(),
                                        this.preventNextNativeScrollEvent(),
                                        this.emit(),
                                        c?.(this),
                                        (this.userData = {}),
                                        requestAnimationFrame(() => {
                                            this.dispatchScrollendEvent();
                                        });
                                    return;
                                }
                                d || (this.targetScroll = e),
                                    "number" == typeof o && "function" != typeof s
                                        ? (s = u)
                                        : "function" == typeof s && "number" != typeof o && (o = 1),
                                    this.animate.fromTo(this.animatedScroll, e, {
                                        duration: o,
                                        easing: s,
                                        lerp: a,
                                        onStart: () => {
                                            n && (this.isLocked = !0), (this.isScrolling = "smooth"), l?.(this);
                                        },
                                        onUpdate: (e, t) => {
                                            (this.isScrolling = "smooth"),
                                                (this.lastVelocity = this.velocity),
                                                (this.velocity = e - this.animatedScroll),
                                                (this.direction = Math.sign(this.velocity)),
                                                (this.animatedScroll = e),
                                                this.setScroll(this.scroll),
                                                d && (this.targetScroll = e),
                                                t || this.emit(),
                                                t &&
                                                (this.reset(),
                                                    this.emit(),
                                                    c?.(this),
                                                    (this.userData = {}),
                                                    requestAnimationFrame(() => {
                                                        this.dispatchScrollendEvent();
                                                    }),
                                                    this.preventNextNativeScrollEvent());
                                        },
                                    });
                            }
                        }
                    }
                    preventNextNativeScrollEvent() {
                        (this._preventNextNativeScrollEvent = !0),
                            requestAnimationFrame(() => {
                                this._preventNextNativeScrollEvent = !1;
                            });
                    }
                    checkNestedScroll(e, { deltaX: t, deltaY: i }) {
                        let r,
                            n,
                            o,
                            s,
                            a,
                            l,
                            c,
                            u,
                            h,
                            d,
                            f,
                            p,
                            g,
                            m,
                            v = Date.now(),
                            y = (e._lenis ??= {}),
                            w = this.options.gestureOrientation;
                        if (v - (y.time ?? 0) > 2e3) {
                            y.time = Date.now();
                            let t = window.getComputedStyle(e);
                            y.computedStyle = t;
                            let i = t.overflowX,
                                h = t.overflowY;
                            if (
                                ((r = ["auto", "overlay", "scroll"].includes(i)),
                                    (n = ["auto", "overlay", "scroll"].includes(h)),
                                    (y.hasOverflowX = r),
                                    (y.hasOverflowY = n),
                                    (!r && !n) || ("vertical" === w && !n) || ("horizontal" === w && !r))
                            )
                                return !1;
                            (a = e.scrollWidth),
                                (l = e.scrollHeight),
                                (c = e.clientWidth),
                                (u = e.clientHeight),
                                (o = a > c),
                                (s = l > u),
                                (y.isScrollableX = o),
                                (y.isScrollableY = s),
                                (y.scrollWidth = a),
                                (y.scrollHeight = l),
                                (y.clientWidth = c),
                                (y.clientHeight = u);
                        } else
                            (o = y.isScrollableX),
                                (s = y.isScrollableY),
                                (r = y.hasOverflowX),
                                (n = y.hasOverflowY),
                                (a = y.scrollWidth),
                                (l = y.scrollHeight),
                                (c = y.clientWidth),
                                (u = y.clientHeight);
                        if (
                            (!r && !n) ||
                            (!o && !s) ||
                            ("vertical" === w && (!n || !s)) ||
                            ("horizontal" === w && (!r || !o)) ||
                            ("horizontal" === w
                                ? (h = "x")
                                : "vertical" === w
                                    ? (h = "y")
                                    : (0 !== t && r && o && (h = "x"), 0 !== i && n && s && (h = "y")),
                                !h)
                        )
                            return !1;
                        if ("x" === h) (d = e.scrollLeft), (f = a - c), (p = t), (g = r), (m = o);
                        else {
                            if ("y" !== h) return !1;
                            (d = e.scrollTop), (f = l - u), (p = i), (g = n), (m = s);
                        }
                        return (p > 0 ? d < f : d > 0) && g && m;
                    }
                    get rootElement() {
                        return this.options.wrapper === window ? document.documentElement : this.options.wrapper;
                    }
                    get limit() {
                        return this.options.__experimental__naiveDimensions
                            ? this.isHorizontal
                                ? this.rootElement.scrollWidth - this.rootElement.clientWidth
                                : this.rootElement.scrollHeight - this.rootElement.clientHeight
                            : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
                    }
                    get isHorizontal() {
                        return "horizontal" === this.options.orientation;
                    }
                    get actualScroll() {
                        let e = this.options.wrapper;
                        return this.isHorizontal ? (e.scrollX ?? e.scrollLeft) : (e.scrollY ?? e.scrollTop);
                    }
                    get scroll() {
                        var e;
                        return this.options.infinite
                            ? ((this.animatedScroll % (e = this.limit)) + e) % e
                            : this.animatedScroll;
                    }
                    get progress() {
                        return 0 === this.limit ? 1 : this.scroll / this.limit;
                    }
                    get isScrolling() {
                        return this._isScrolling;
                    }
                    set isScrolling(e) {
                        this._isScrolling !== e && ((this._isScrolling = e), this.updateClassName());
                    }
                    get isStopped() {
                        return this._isStopped;
                    }
                    set isStopped(e) {
                        this._isStopped !== e && ((this._isStopped = e), this.updateClassName());
                    }
                    get isLocked() {
                        return this._isLocked;
                    }
                    set isLocked(e) {
                        this._isLocked !== e && ((this._isLocked = e), this.updateClassName());
                    }
                    get isSmooth() {
                        return "smooth" === this.isScrolling;
                    }
                    get className() {
                        let e = "lenis";
                        return (
                            this.options.autoToggle && (e += " lenis-autoToggle"),
                            this.isStopped && (e += " lenis-stopped"),
                            this.isLocked && (e += " lenis-locked"),
                            this.isScrolling && (e += " lenis-scrolling"),
                            "smooth" === this.isScrolling && (e += " lenis-smooth"),
                            e
                        );
                    }
                    updateClassName() {
                        this.cleanUpClassName(),
                            (this.rootElement.className = `${this.rootElement.className} ${this.className}`.trim());
                    }
                    cleanUpClassName() {
                        this.rootElement.className = this.rootElement.className.replace(/lenis(-\w+)?/g, "").trim();
                    }
                },
                d = i(19893),
                f = i(32689),
                p = (0, d.createContext)(null),
                g = new (class {
                    set(e) {
                        for (let t of ((this.state = e), this.listeners)) t(this.state);
                    }
                    subscribe(e) {
                        return (
                            (this.listeners = [...this.listeners, e]),
                            () => {
                                this.listeners = this.listeners.filter((t) => t !== e);
                            }
                        );
                    }
                    get() {
                        return this.state;
                    }
                    constructor(e) {
                        (this.listeners = []), (this.state = e);
                    }
                })(null),
                m = (0, d.forwardRef)((e, t) => {
                    let {
                        children: i,
                        root: r = !1,
                        options: n = {},
                        className: o,
                        autoRaf: s = !0,
                        style: a,
                        props: l,
                    } = e,
                        c = (0, d.useRef)(null),
                        u = (0, d.useRef)(null),
                        [m, v] = (0, d.useState)(void 0);
                    (0, d.useImperativeHandle)(t, () => ({ wrapper: c.current, content: u.current, lenis: m }), [m]),
                        (0, d.useEffect)(() => {
                            var e;
                            let t = new h({
                                ...n,
                                ...(!r && { wrapper: c.current, content: u.current }),
                                autoRaf: null != (e = null == n ? void 0 : n.autoRaf) ? e : s,
                            });
                            return (
                                v(t),
                                () => {
                                    t.destroy(), v(void 0);
                                }
                            );
                        }, [r, JSON.stringify(n)]);
                    let y = (0, d.useRef)([]),
                        w = (0, d.useCallback)((e, t) => {
                            y.current.push({ callback: e, priority: t }),
                                y.current.sort((e, t) => e.priority - t.priority);
                        }, []),
                        b = (0, d.useCallback)((e) => {
                            y.current = y.current.filter((t) => t.callback !== e);
                        }, []);
                    return (
                        (0, d.useEffect)(() => {
                            if (r && m)
                                return g.set({ lenis: m, addCallback: w, removeCallback: b }), () => g.set(null);
                        }, [r, m, w, b]),
                        (0, d.useEffect)(() => {
                            if (!m) return;
                            let e = (e) => {
                                for (let i = 0; i < y.current.length; i++) {
                                    var t;
                                    null == (t = y.current[i]) || t.callback(e);
                                }
                            };
                            return (
                                m.on("scroll", e),
                                () => {
                                    m.off("scroll", e);
                                }
                            );
                        }, [m]),
                        (0, f.jsx)(p.Provider, {
                            value: { lenis: m, addCallback: w, removeCallback: b },
                            children: r
                                ? i
                                : (0, f.jsx)("div", {
                                    ref: c,
                                    className: o,
                                    style: a,
                                    ...l,
                                    children: (0, f.jsx)("div", { ref: u, children: i }),
                                }),
                        })
                    );
                }),
                v = {};
            function y(e) {
                var t;
                let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    n = (0, d.useContext)(p),
                    o = (function (e) {
                        let [t, i] = (0, d.useState)(e.get());
                        return (0, d.useEffect)(() => e.subscribe((e) => i(e)), [e]), t;
                    })(g),
                    { lenis: s, addCallback: a, removeCallback: l } = null != (t = null != n ? n : o) ? t : v;
                return (
                    (0, d.useEffect)(() => {
                        if (e && a && l && s)
                            return (
                                a(e, r),
                                e(s),
                                () => {
                                    l(e);
                                }
                            );
                    }, [s, a, l, r, ...i]),
                    s
                );
            }
        },
    },
]);
