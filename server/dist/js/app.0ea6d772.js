(function(t) {
    function e(e) {
        for (var o, r, i = e[0], c = e[1], l = e[2], d = 0, h = []; d < i.length; d++) r = i[d],
        Object.prototype.hasOwnProperty.call(s, r) && s[r] && h.push(s[r][0]),
        s[r] = 0;
        for (o in c) Object.prototype.hasOwnProperty.call(c, o) && (t[o] = c[o]);
        u && u(e);
        while (h.length) h.shift()();
        return a.push.apply(a, l || []),
        n()
    }
    function n() {
        for (var t, e = 0; e < a.length; e++) {
            for (var n = a[e], o = !0, i = 1; i < n.length; i++) {
                var c = n[i];
                0 !== s[c] && (o = !1)
            }
            o && (a.splice(e--, 1), t = r(r.s = n[0]))
        }
        return t
    }
    var o = {},
    s = {
        app: 0
    },
    a = [];
    function r(e) {
        if (o[e]) return o[e].exports;
        var n = o[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(n.exports, n, n.exports, r),
        n.l = !0,
        n.exports
    }
    r.m = t,
    r.c = o,
    r.d = function(t, e, n) {
        r.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    },
    r.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    },
    r.t = function(t, e) {
        if (1 & e && (t = r(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var o in t) r.d(n, o,
        function(e) {
            return t[e]
        }.bind(null, o));
        return n
    },
    r.n = function(t) {
        var e = t && t.__esModule ?
        function() {
            return t["default"]
        }: function() {
            return t
        };
        return r.d(e, "a", e),
        e
    },
    r.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    },
    r.p = "/";
    var i = window["webpackJsonp"] = window["webpackJsonp"] || [],
    c = i.push.bind(i);
    i.push = e,
    i = i.slice();
    for (var l = 0; l < i.length; l++) e(i[l]);
    var u = c;
    a.push([0, "chunk-vendors"]),
    n()
})({
    0 : function(t, e, n) {
        t.exports = n("56d7")
    },
    "0a82": function(t, e, n) {},
    1184 : function(t, e, n) {},
    "165c": function(t, e, n) {
        "use strict";
        n("76bf")
    },
    "1a3b": function(t, e, n) {},
    "1b85": function(t, e, n) {
        "use strict";
        n("ed2c")
    },
    "3c32": function(t, e, n) {
        "use strict";
        n("1184")
    },
    "496d": function(t, e, n) {},
    5655 : function(t, e, n) {
        "use strict";
        n("6668")
    },
    "56d7": function(t, e, n) {
        "use strict";
        n.r(e);
        n("fb6a"),
        n("e260"),
        n("e6cf"),
        n("cca6"),
        n("a79d");
        var o = n("2b0e"),
        s = n("f309");
        n("d4b8"),
        n("5363");
        o["a"].use(s["a"]);
        var a = new s["a"]({
            icons: {
                iconfont: "mdi"
            },
            breakpoint: {
                thresholds: {
                    xs: 760,
                    sm: 960,
                    md: 1280,
                    lg: 1920
                },
                scrollBarWidth: 24
            }
        }),
        r = function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("v-app", [n("HandleWebsocket"), n("HandleKeyEvent"), n("AppBar"), n("v-content", [n("Home")], 1)], 1)
        },
        i = [],
        c = (n("ac1f"), n("466d"),
        function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("v-app-bar", {
                staticClass: "appBar",
                attrs: {
                    app: "",
                    dark: ""
                }
            },
            [n("div", {
                staticClass: "d-flex align-center"
            },
            [n("v-img", {
                staticClass: "shrink mr-2",
                attrs: {
                    alt: "Logo",
                    contain: "",
                    src: "/api/img/icons/logo.png",
                    transition: "scale-transition",
                    width: "55"
                }
            }), n("span", {
                staticClass: "shrink d-none d-sm-block",
                staticStyle: {
                    "font-size": "2rem",
                    "margin-left": ".8rem"
                },
                attrs: {
                    alt: "Name",
                    "min-width": "100",
                    width: "100"
                }
            },
            [t._v("BLONWINER Web")])], 1), n("v-spacer")], 1)
        }),
        l = [],
        u = {
            name: "AppBar",
            components: {}
        },
        d = u,
        h = (n("83b3"), n("2877")),
        f = n("6544"),
        p = n.n(f),
        m = n("40dc"),
        v = n("adda"),
        C = n("2fa4"),
        b = Object(h["a"])(d, c, l, !1, null, "2f6fc0b6", null),
        g = b.exports;
        p()(b, {
            VAppBar: m["a"],
            VImg: v["a"],
            VSpacer: C["a"]
        });
        var w = function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("div", {
                staticClass: "home"
            },
            [n("ControllArea")], 1)
        },
        y = [],
        k = function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("div", {
                staticClass: "area-bg"
            },
            [n("div", {
                staticClass: "area-wrapper"
            },
            [n("v-container", {
                staticClass: "controll-area"
            },
            [n("v-row", [n("v-col", {
                attrs: {
                    md: "6",
                    sm: "7",
                    xs: "12",
                    order: "6"
                }
            },
            [n("v-row", {
                staticClass: "innerRow"
            },
            [n("v-col", {
                attrs: {
                    cols: "12"
                }
            },
            [n("ControllerSheet", {
                attrs: {
                    modName: "Video"
                }
            },
            [n("VedioMod")], 1)], 1), n("v-col", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "xs" !== this.$vuetify.breakpoint.name,
                    expression: "this.$vuetify.breakpoint.name === 'xs' ? false : true"
                }],
                attrs: {
                    cols: "12"
                }
            },
            [n("ControllerSheet", {
                attrs: {
                    modName: "Instruction"
                }
            },
            [n("InstructionMod")], 1)], 1)], 1)], 1), n("v-col", {
                attrs: {
                    md: "4",
                    sm: "5",
                    xs: "12",
                    order: "9"
                }
            },
            [n("v-row", {
                staticClass: "innerRow"
            },
            [n("v-col", {
                attrs: {
                    cols: "12"
                }
            },
            [n("ControllerSheet", {
                attrs: {
                    modName: "Move Control"
                }
            },
            [n("MoveControlMod")], 1)], 1), n("v-col", {
                attrs: {
                    cols: "12"
                }
            },
            [n("ControllerSheet", {
                attrs: {
                    modName: "Arm Control"
                }
            },
            [n("ArmControlMod")], 1)], 1), n("v-col", {
                attrs: {
                    cols: "12"
                }
            },
            [n("ControllerSheet", {
                attrs: {
                    modName: "Camera CVFL Control"
                }
            },
            [n("CVFLMod")], 1)], 1)], 1)], 1), n("v-col", {
                attrs: {
                    md: "2",
                    sm: "12",
                    xs: "12",
                    order: 12
                }
            },
            [n("v-row", {
                staticClass: "innerRow"
            },
            [n("v-col", {
                attrs: {
                    md: "12",
                    sm: "3",
                    xs: "12"
                }
            },
            [n("ControllerSheet", {
                attrs: {
                    modName: "PI Ware"
                }
            },
            [n("StatusMod")], 1)], 1), n("v-col", {
                attrs: {
                    md: "12",
                    sm: "4",
                    xs: "12"
                }
            },
            [n("ControllerSheet", {
                attrs: {
                    modName: "Actions"
                }
            },
            [n("ActionsMod")], 1)], 1), n("v-col", {
                attrs: {
                    md: "12",
                    sm: "5",
                    xs: "12"
                }
            },
            [n("v-row", {
                staticClass: "innerRow"
            },
            [n("v-col", {
                attrs: {
                    md: "12",
                    sm: "12",
                    xs: "6"
                }
            },
            [n("ControllerSheet", {
                attrs: {
                    modName: "Camera FC Control"
                }
            },
            [n("FindColorMod")], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1)])
        },
        F = [],
        _ = function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("v-sheet", {
                staticClass: "mod-sheet"
            },
            [n("p", {
                staticClass: "mod-title"
            },
            [t._v(t._s(t.modName))]), n("div", {
                staticClass: "mod-wrapper"
            },
            [t._t("default")], 2)])
        },
        S = [],
        x = {
            name: "ControllerSheet",
            props: {
                modName: {
                    type: String,
                default:
                    "No Mod Name"
                }
            }
        },
        V = x,
        O = (n("5655"), n("8dd9")),
        A = Object(h["a"])(V, _, S, !1, null, "68bf214e", null),
        j = A.exports;
        p()(A, {
            VSheet: O["a"]
        });
        var E = function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("div", {
                staticClass: "vedio-wrapper"
            },
            [n("canvas", {
                ref: "canvas",
                staticClass: "canvas",
                attrs: {
                    width: "640",
                    height: "480"
                }
            }), n("div", {
                staticClass: "draw-area"
            })])
        },
        M = [],
        L = n("5530"),
        W = n("2f62"),
        I = {
            name: "VedioMod",
            data: function() {
                return {
                    timmer: null,
                    rand: 0
                }
            },
            mounted: function() {
                var t = this;
                this.setVedioTimmer(),
                this.changeSetVedioTimmer((function() {
                    t.setVedioTimmer()
                }))
            },
            destroyed: function() {
                clearInterval(this.timmer)
            },
            methods: Object(L["a"])({
                setVedioTimmer: function() {
                    var t = this;
                    this.timmer && (clearInterval(this.timmer), this.rand = Math.random()),
                    this.timmer = setInterval((function() {
                        var e = t.$refs.canvas,
                        n = e.getContext("2d"),
                        o = new Image;
                        o.crossOrigin = "Anonymous",
                        o.src = "http://" + location.hostname + ":5000/video_feed?rand=" + t.rand,
                        o.onload = function() {
                            n.drawImage(o, 0, 0, 640, 480)
                        }
                    }), 1e3 / 24)
                }
            },
            Object(W["c"])(["changeSetVedioTimmer"]))
        },
        B = I,
        T = (n("5ce7"), Object(h["a"])(B, E, M, !1, null, "024a6bab", null)),
        $ = T.exports,
        R = function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("div", {
                staticClass: "status-wrapper"
            },
            t._l(t.chips, (function(e, o) {
                return n("v-chip", {
                    key: o,
                    ref: "chips",
                    refInFor: !0,
                    staticClass: "ma-2 chips",
                    attrs: {
                        color: t.chipColor[o],
                        "text-color": "white"
                    }
                },
                [n("b", {
                    staticClass: "chip-title"
                },
                [t._v(t._s(e[0] + " " + e[1]))]), t._v(" " + t._s(e[2] + e[3]) + " ")])
            })), 1)
        },
        N = [],
        P = {
            name: "ArmControlMod",
            props: {
                title: String
            },
            data: function() {
                return {
                    chips: [["CPU", "Temp", 50, "°C", 55, 70], ["CPU", "Usage", 75, "%", 70, 85], ["RAM", "Usage", 90, "%", 70, 85]],
                    infoInterval: null
                }
            },
            computed: Object(L["a"])({
                chipColor: function() {
                    var t = [];
                    for (var e in this.chips) this.chips[e][2] < this.chips[e][4] ? t.push("green") : this.chips[e][2] < this.chips[e][5] ? t.push("orange") : t.push("red");
                    return t
                }
            },
            Object(W["d"])(["wsResponse"])),
            watch: {
                wsResponse: function() {
                    if ("get_info" === this.wsResponse.title) {
                        var t = this.wsResponse.data;
                        console.log(t);
                        for (var e = 0; e < this.chips.length; e++) this.$set(this.chips[e], 2, t[e])
                    }
                }
            },
            methods: Object(L["a"])({},
            Object(W["b"])(["changeWsContent"])),
            mounted: function() {
                var t = this;
                this.infoInterval = setInterval((function() {
                    t.changeWsContent("get_info")
                }), 5e3)
            },
            destroyed: function() {
                clearInterval(this.infoInterval)
            }
        },
        H = P,
        U = (n("8208"), n("cc20")),
        D = Object(h["a"])(H, R, N, !1, null, "05264423", null),
        K = D.exports;
        p()(D, {
            VChip: U["a"]
        });
        var G = function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("ButtonsChild", {
                attrs: {
                    buttons: t.buttons,
                    cols: t.cols
                }
            })
        },
        J = [],
        X = function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("div", {
                staticClass: "button-child"
            },
            t._l(t.buttonsDetail, (function(e, o) {
                return n("ControlButton", {
                    key: o,
                    style: {
                        width: t.buttonWidth
                    },
                    attrs: {
                        attr: e
                    }
                })
            })), 1)
        },
        q = [],
        z = (n("a9e3"),
        function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("v-btn", {
                class: t.buttonClass,
                style: t.buttonStyle,
                attrs: {
                    small: "",
                    "retain-focus-on-click": ""
                },
                on: {
                    mousedown: t.handleMouseDown,
                    mouseup: t.handleMouseUp,
                    touchstart: t.handleMouseDown,
                    touchend: t.handleMouseUp
                }
            },
            [t.attr.isIcon ? n("v-icon", [t._v(t._s(t.attr.content))]) : n("span", {
                staticClass: "texts"
            },
            [t._v(t._s(t.attr.content))])], 1)
        }),
        Q = [],
        Y = {
            name: "ControlButton",
            props: {
                attr: Object
            },
            data: function() {
                return {
                    buttonClass: ["buttons", "clickable"]
                }
            },
            computed: {
                buttonStyle: function() {
                    return {
                        opacity: "" === this.attr.content ? 0 : ""
                    }
                }
            },
            methods: Object(L["a"])({
                handleMouseDown: function(t, e) {
                    "clickable" === this.buttonClass[1] ? this.changeWsContent(this.attr.sendContent) : "action" === this.buttonClass[1] && this.changeWsContent(this.attr.reversSendContent),
                    this.attr.reversSendContent && ("clickable" === this.buttonClass[1] ? this.$set(this.buttonClass, 1, "action") : this.$set(this.buttonClass, 1, "clickable"))
                },
                handleMouseUp: function() {
                    this.changeWsContent(this.attr.upSendContent)
                }
            },
            Object(W["b"])(["changeWsContent"]), {},
            Object(W["c"])(["setKeyEvent"])),
            mounted: function() {
                var t = this;
                "" === this.attr && (this.attr = {
                    isIcon: !1,
                    content: ""
                }),
                this.setKeyEvent([this.attr.sendKey,
                function() {
                    t.changeWsContent(t.attr.sendContent)
                },
                "down"]),
                this.setKeyEvent([this.attr.sendKey,
                function() {
                    t.changeWsContent(t.attr.upSendContent)
                },
                "up"])
            }
        },
        Z = Y,
        tt = (n("3c32"), n("8336")),
        et = n("132d"),
        nt = Object(h["a"])(Z, z, Q, !1, null, "726ac712", null),
        ot = nt.exports;
        p()(nt, {
            VBtn: tt["a"],
            VIcon: et["a"]
        });
        var st = {
            name: "ButtonsChild",
            components: {
                ControlButton: ot
            },
            props: {
                buttons: Array,
                cols: Number
            },
            data: function() {
                return {
                    buttonsDetail: null,
                    buttonsState: []
                }
            },
            computed: {
                buttonWidth: function() {
                    return 3 === this.cols ? "30%": 4 === this.cols ? "23%": 1 === this.cols ? "100%": "30%"
                }
            },
            mounted: function() {
                var t = [];
                for (var e in this.buttons) {
                    var n = this.buttons[e],
                    o = {
                        isIcon: !1,
                        content: "",
                        sendContent: void 0,
                        sendKey: void 0,
                        upSendContent: void 0,
                        reversSendContent: void 0
                    };
                    if ("" !== n) {
                        var s = 0;
                        for (var a in o) o[a] = n[s],
                        s++;
                        t.push(o)
                    } else t.push(o)
                }
                this.buttonsDetail = t
            }
        },
        at = st,
        rt = (n("704e"), Object(h["a"])(at, X, q, !1, null, "b4e411fa", null)),
        it = rt.exports,
        ct = {
            name: "ArmControlMod",
            components: {
                ButtonsChild: it
            },
            data: function() {
                return {
                    buttons: [[!1, "Grab", "grab", 85, "stop"], [!1, "Up", "up", 73, "UDstop"], [!1, "Loose", "loose", 79, "stop"], [!1, "Left", "lookleft", 74, "LRstop"], [!1, "Down", "down", 75, "UDstop"], [!1, "Right", "lookright", 76, "LRstop"], [!1, "HandUp", "handup", 80, "HAstop"], "", [!1, "ArmUp", "armup", 82, "Armstop"], [!1, "HandDown", "handdown", 186, "HAstop"], [!1, "ArmDown", "armdown", 70, "Armstop"]],
                    cols: 3
                }
            }
        },
        lt = ct,
        ut = Object(h["a"])(lt, G, J, !1, null, "1c3c35e3", null),
        dt = ut.exports,
        ht = function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("ButtonsChild", {
                attrs: {
                    buttons: t.buttons,
                    cols: t.cols
                }
            })
        },
        ft = [],
        pt = {
            name: "ActionsMod",
            components: {
                ButtonsChild: it
            },
            data: function() {
                return {
                    buttons: [[!1, "Motion Get", "motionGet", "", "", "stopCV"], [!1, "Auto Move", "automatic", "", "", "automaticOff"], [!1, "POLICE LIGHT", "police", "", "", "policeOff"], [!1, "Track Line", "trackLine", "", "", "trackLineOff"]],
                    cols: 1
                }
            }
        },
        mt = pt,
        vt = Object(h["a"])(mt, ht, ft, !1, null, "62b5a2a8", null),
        Ct = vt.exports,
        bt = function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("div", [n("ButtonsChild", {
                attrs: {
                    buttons: t.buttons,
                    cols: t.cols
                }
            }), n("v-slider", {
                staticClass: "mx-4 mt-1",
                attrs: {
                    "thumb-label": "",
                    label: "speed",
                    "hide-details": ""
                },
                model: {
                    value: t.speed,
                    callback: function(e) {
                        t.speed = e
                    },
                    expression: "speed"
                }
            })], 1)
        },
        gt = [],
        wt = {
            name: "MoveControlMod",
            components: {
                ButtonsChild: it
            },
            data: function() {
                return {
                    buttons: ["", [!0, "mdi-arrow-up-thick", "forward", 87, "DS"], "", [!0, "mdi-arrow-left-thick", "left", 65, "TS"], [!0, "mdi-arrow-down-thick", "backward", 83, "DS"], [!0, "mdi-arrow-right-thick", "right", 68, "TS"]],
                    cols: 3,
                    speed: 100,
                    timmer: null
                }
            },
            methods: Object(L["a"])({},
            Object(W["b"])(["changeWsContent"])),
            watch: {
                speed: function() {
                    var t = this;
                    this.timmer && clearTimeout(this.timmer),
                    this.timmer = setTimeout((function() {
                        t.changeWsContent("wsB " + String(t.speed))
                    }), 300)
                }
            }
        },
        yt = wt,
        kt = n("ba0d"),
        Ft = Object(h["a"])(yt, bt, gt, !1, null, "65369f3e", null),
        _t = Ft.exports;
        p()(Ft, {
            VSlider: kt["a"]
        });
        var St = function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("div", {
                staticClass: "CVFL-wrapper"
            },
            [n("div", {
                staticClass: "sliders"
            },
            t._l(t.valuesKeys, (function(e) {
                return n("v-slider", {
                    key: e,
                    staticClass: "mx-4 mt-1",
                    attrs: {
                        "thumb-label": "",
                        label: e,
                        "hide-details": "",
                        min: t.values[e][1],
                        max: t.values[e][2]
                    },
                    on: {
                        change: function(n) {
                            return t.handleValueChange(e)
                        }
                    },
                    model: {
                        value: t.values[e][0],
                        callback: function(n) {
                            t.$set(t.values[e], 0, n)
                        },
                        expression: "values[valueKey][0]"
                    }
                })
            })), 1), n("div", {
                staticClass: "CVFL-bottons"
            },
            [n("ControlButton", {
                staticClass: "button",
                attrs: {
                    attr: t.buttonAttr
                }
            }), n("v-btn", {
                staticClass: "colorButton",
                style: {
                    borderColor: t.CVFLColor
                },
                attrs: {
                    small: ""
                },
                on: {
                    click: t.handleColorChange
                }
            },
            [t._v(" color ")])], 1)])
        },
        xt = [],
        Vt = (n("d3b7"), n("ddb0"), {
            name: "CVFLMod",
            components: {
                ControlButton: ot
            },
            data: function() {
                return {
                    buttonAttr: {
                        isIcon: !1,
                        content: "start",
                        sendContent: "CVFL",
                        reversSendContent: "stopCV"
                    },
                    values: {
                        L1: [380, 0, 480],
                        L2: [440, 0, 480],
                        SP: [20, 0, 200]
                    }
                }
            },
            computed: Object(L["a"])({
                valuesKeys: function() {
                    var t = [];
                    for (var e in this.values) t.push(e);
                    return t
                },
                rgbKeys: function() {
                    var t = [];
                    for (var e in this.rgb) t.push(e);
                    return t
                }
            },
            Object(W["d"])(["CVFLColor"])),
            methods: Object(L["a"])({
                handleColorChange: function() {
                    "#000000" === this.CVFLColor ? (this.changeCVFLColor("#FFFFFF"), this.changeWsContent("CVFLColorSet 255")) : (this.changeCVFLColor("#000000"), this.changeWsContent("CVFLColorSet 0"))
                },
                handleValueChange: function(t) {
                    "L1" === t ? this.changeWsContent("CVFLL1 " + this.values.L1[0]) : "L2" === t ? this.changeWsContent("CVFLL2 " + this.values.L2[0]) : "SP" === t ? this.changeWsContent("CVFLSP " + this.values.SP[0]) : "EXP" === t && this.changeWsContent("CVFLEXP " + this.values.EXP[0])
                }
            },
            Object(W["b"])(["changeWsContent"]), {},
            Object(W["c"])(["changeCVFLColor"]))
        }),
        Ot = Vt,
        At = (n("82da"), Object(h["a"])(Ot, St, xt, !1, null, "38858175", null)),
        jt = At.exports;
        p()(At, {
            VBtn: tt["a"],
            VSlider: kt["a"]
        });
        var Et = function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("div", {
                staticClass: "FC-bottons"
            },
            [n("ControlButton", {
                staticClass: "button",
                attrs: {
                    attr: t.buttonAttr
                }
            }), n("v-menu", {
                attrs: {
                    "close-on-content-click": !1,
                    absolute: ""
                },
                scopedSlots: t._u([{
                    key: "activator",
                    fn: function(e) {
                        var o = e.on;
                        return [n("v-btn", t._g({
                            staticClass: "button colorButton",
                            style: {
                                borderColor: t.FCColor
                            },
                            attrs: {
                                small: ""
                            }
                        },
                        o), [t._v(" color ")])]
                    }
                }])
            },
            [n("div", {
                staticClass: "colorSelecter"
            },
            [n("ColorPickerChild", {
                on: {
                    colorChange: t.handleColorChange
                }
            })], 1)])], 1)
        },
        Mt = [],
        Lt = function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("div", {
                staticClass: "color-picker-child"
            },
            [n("v-color-picker", {
                staticClass: "ma-2",
                staticStyle: {
                    "background-color": "#EEEEEE"
                },
                attrs: {
                    "hide-mode-switch": "",
                    "hide-canvas": "",
                    "show-swatches": "",
                    swatches: t.swatches
                },
                model: {
                    value: t.selectedColor,
                    callback: function(e) {
                        t.selectedColor = e
                    },
                    expression: "selectedColor"
                }
            })], 1)
        },
        Wt = [],
        It = {
            name: "",
            props: {
                witchColor: String,
                defaultColor: {
                    type: String,
                default:
                    "#000000"
                }
            },
            data: function() {
                return {
                    swatches: [["#FFFFFF", "#FF0000", "#AA0000"], ["#CCCCCC", "#FFFF00", "#AAAA00"], ["#999999", "#00FF00", "#00AA00"], ["#666666", "#00FFFF", "#00AAAA"], ["#333333", "#0000FF", "#0000AA"], ["#000000", "#FF00FF", "#AA00AA"]],
                    selectedColor: "#000000",
                    timmer: null
                }
            },
            watch: {
                selectedColor: {
                    handler: function(t, e) {
                        var n = this;
                        this.timmer && clearTimeout(this.timmer),
                        this.timmer = setTimeout((function() {
                            return n.$emit("colorChange", n.selectedColor)
                        }), 12)
                    }
                }
            },
            mounted: function() {
                this.selectedColor = this.defaultColor
            }
        },
        Bt = It,
        Tt = (n("e5bf"), n("03a4")),
        $t = Object(h["a"])(Bt, Lt, Wt, !1, null, "3dbdf3cf", null),
        Rt = $t.exports;
        p()($t, {
            VColorPicker: Tt["a"]
        });
        var Nt = {
            name: "FindColorMod",
            components: {
                ColorPickerChild: Rt,
                ControlButton: ot
            },
            data: function() {
                return {
                    buttonAttr: {
                        isIcon: !1,
                        content: "start",
                        sendContent: "findColor",
                        reversSendContent: "stopCV"
                    }
                }
            },
            computed: Object(L["a"])({},
            Object(W["d"])(["FCColor"])),
            methods: Object(L["a"])({
                handleColorChange: function(t) {
                    this.changeFCColor(t)
                }
            },
            Object(W["c"])(["changeFCColor"]), {},
            Object(W["b"])(["changeWsContent"])),
            watch: {
                FCColor: function() {
                    var t = this.RGBToHSV255(this.hexToRgba(this.FCColor));
                    this.changeWsContent({
                        title: "findColorSet",
                        data: t
                    })
                }
            }
        },
        Pt = Nt,
        Ht = (n("1b85"), n("e449")),
        Ut = Object(h["a"])(Pt, Et, Mt, !1, null, "5a57ef1d", null),
        Dt = Ut.exports;
        p()(Ut, {
            VBtn: tt["a"],
            VMenu: Ht["a"]
        });
        var Kt = function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("v-expansion-panels", {
                staticClass: "expansion",
                attrs: {
                    accordion: "",
                    mandatory: ""
                },
                model: {
                    value: t.witchOpen,
                    callback: function(e) {
                        t.witchOpen = e
                    },
                    expression: "witchOpen"
                }
            },
            [n("v-expansion-panel", [n("v-expansion-panel-header", {
                scopedSlots: t._u([{
                    key: "default",
                    fn: function(e) {
                        var o = e.open;
                        return [n("v-row", {
                            attrs: {
                                "no-gutters": ""
                            }
                        },
                        [n("v-col", {
                            attrs: {
                                cols: "4"
                            }
                        },
                        [t._v("Shortcut Key")]), t._l(t.instructContent["Shortcut Key"][0], (function(e) {
                            return n("v-col", {
                                key: e,
                                staticClass: "text--secondary",
                                attrs: {
                                    cols: "4"
                                }
                            },
                            [n("v-fade-transition", {
                                attrs: {
                                    "leave-absolute": ""
                                }
                            },
                            [o ? n("span", [t._v(" " + t._s(e) + " ")]) : t._e()])], 1)
                        }))], 2)]
                    }
                }])
            }), n("v-expansion-panel-content", [n("v-row", {
                attrs: {
                    "no-gutters": ""
                }
            },
            [n("v-spacer"), t._l(t.instructContent["Shortcut Key"][1], (function(e, o) {
                return n("v-col", {
                    key: o,
                    attrs: {
                        cols: "4"
                    }
                },
                t._l(e, (function(e, o) {
                    return n("div", {
                        key: o
                    },
                    [t._v(" " + t._s(o) + " - " + t._s(e)), n("br")])
                })), 0)
            }))], 2)], 1)], 1), n("v-expansion-panel", [n("v-expansion-panel-header", [t._v("About Us")]), n("v-expansion-panel-content", {
                staticStyle: {
                    "text-indent": "2rem"
                }
            },
            [t._v(" " + t._s(t.instructContent["About Us"]) + " ")])], 1)], 1)
        },
        Gt = [],
        Jt = {
            name: "InstructionMod",
            data: function() {
                return {
                    cols: 1,
                    witchOpen: 0,
                    instructContent: {
                        "Shortcut Key": [["Move Control", "Arm Control"], [{
                            W: "move forward",
                            A: "turn left",
                            S: "move backward",
                            D: "turn right"
                        },
                        {
                            I: "up",
                            J: "left",
                            K: "down",
                            L: "right",
                            U: "grab",
                            O: "loose",
                            P: "hand up",
                            ";": "hand down",
                            R: "arm up",
                            F: "arm down"
                        }]],
                        "About Us": "BLONWINER is a technical service team of open source software and hardware. Dedicated to applying the Internet and the latest industrial technology in open source area, we strive to provide best hardware support and software service for general makers and electronic enthusiasts around the world. We aim to create infinite possibilities with sharing. No matter what field you are in, we can lead you into the electronic world and bring your ideas into reality.Have a technical question for Tech Support? blonwiner@outlook.com",
                        "Contact Us": "Have a technical question for Tech Support? blonwiner@outlook.com"
                    }
                }
            }
        },
        Xt = Jt,
        qt = (n("165c"), n("62ad")),
        zt = n("cd55"),
        Qt = n("49e2"),
        Yt = n("c865"),
        Zt = n("0393"),
        te = n("0789"),
        ee = n("0fd9"),
        ne = Object(h["a"])(Xt, Kt, Gt, !1, null, "4404e3bc", null),
        oe = ne.exports;
        p()(ne, {
            VCol: qt["a"],
            VExpansionPanel: zt["a"],
            VExpansionPanelContent: Qt["a"],
            VExpansionPanelHeader: Yt["a"],
            VExpansionPanels: Zt["a"],
            VFadeTransition: te["c"],
            VRow: ee["a"],
            VSpacer: C["a"]
        });
        var se = {
            name: "ControllArea",
            components: {
                ControllerSheet: j,
                VedioMod: $,
                StatusMod: K,
                ArmControlMod: dt,
                ActionsMod: Ct,
                MoveControlMod: _t,
                CVFLMod: jt,
                FindColorMod: Dt,
                InstructionMod: oe
            }
        },
        ae = se,
        re = (n("fd96"), n("a523")),
        ie = Object(h["a"])(ae, k, F, !1, null, "ff914742", null),
        ce = ie.exports;
        p()(ie, {
            VCol: qt["a"],
            VContainer: re["a"],
            VRow: ee["a"]
        });
        var le = {
            name: "Home",
            components: {
                ControllArea: ce
            }
        },
        ue = le,
        de = Object(h["a"])(ue, w, y, !1, null, null, null),
        he = de.exports,
        fe = function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("div", [n("v-snackbar", {
                staticClass: "reconnect-tip",
                attrs: {
                    color: "grey lighten-4 black--text",
                    timeout: 0
                },
                model: {
                    value: t.reconnectTip,
                    callback: function(e) {
                        t.reconnectTip = e
                    },
                    expression: "reconnectTip"
                }
            },
            [t._v(" Connect Failed "), n("v-btn", {
                attrs: {
                    color: "pink",
                    text: ""
                }
            },
            [t._v(" Reconnecting ")]), n("AniLoading"), n("v-overlay", {
                attrs: {
                    absolute: "",
                    opacity: 0
                }
            })], 1)], 1)
        },
        pe = [],
        me = function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("span", {
                staticClass: "light",
                style: t.lightStyle
            })
        },
        ve = [],
        Ce = {
            name: "AniLoading",
            data: function() {
                return {
                    lightStyle: {
                        height: "52px",
                        "margin-left": "-10%",
                        "transition-duration": "1.3s"
                    },
                    timer: null
                }
            },
            mounted: function() {
                var t = this;
                this.lightStyle.height = this.$el.parentNode.offsetHeight + 50 + "px",
                this.$el.parentNode.style.position || (this.$el.parentNode.style.position = "relative"),
                this.timer = setInterval((function() {
                    "-10%" === t.lightStyle["margin-left"] ? (t.lightStyle["margin-left"] = "105%", t.lightStyle["transition-duration"] = "1.3s") : (t.lightStyle["margin-left"] = "-10%", t.lightStyle["transition-duration"] = "0s")
                }), 1300)
            }
        },
        be = Ce,
        ge = (n("f11b"), Object(h["a"])(be, me, ve, !1, null, "b9aab66e", null)),
        we = ge.exports,
        ye = {
            name: "HandleWebsocket",
            data: function() {
                return {
                    websock: null,
                    reconnectTip: !1
                }
            },
            components: {
                AniLoading: we
            },
            computed: Object(L["a"])({},
            Object(W["d"])(["wsContent", "setVedioTimmer"])),
            created: function() {
                this.initWebSocket()
            },
            destroyed: function() {
                this.websock.close()
            },
            methods: Object(L["a"])({
                initWebSocket: function() {
                    var t = "ws://" + location.hostname + ":8888";
                    this.websock = new WebSocket(t),
                    this.websock.onmessage = this.websocketonmessage,
                    this.websock.onopen = this.websocketonopen,
                    this.websock.onerror = this.websocketonerror,
                    this.websock.onclose = this.websocketclose
                },
                websocketonopen: function() {
                    this.websock.send("admin:123456")
                },
                websocketonerror: function() {},
                websocketonmessage: function(t) {
                    this.reconnectTip && (this.reconnectTip = !1, this.setVedioTimmer());
                    var e = null;
                    try {
                        e = JSON.parse(t.data)
                    } catch(n) {
                        e = t.data
                    }
                    this.changeWsResponse(e)
                },
                websocketsend: function(t) {
                    if (t) {
                        try {
                            t = JSON.stringify(t)
                        } catch(e) {}
                        this.websock.send(t),
                        this.changeWsContent("")
                    }
                },
                websocketclose: function(t) {
                    this.reconnectTip = !0,
                    this.initWebSocket()
                }
            },
            Object(W["b"])(["changeWsResponse", "changeWsContent"])),
            watch: {
                wsContent: function() {
                    if (this.wsContent) try {
                        this.websocketsend(this.wsContent)
                    } catch(t) {
                        console.log("连接已关闭或正在连接中，无法发送数据"),
                        this.changeWsContent("")
                    }
                }
            }
        },
        ke = ye,
        Fe = n("a797"),
        _e = n("2db4"),
        Se = Object(h["a"])(ke, fe, pe, !1, null, null, null),
        xe = Se.exports;
        p()(Se, {
            VBtn: tt["a"],
            VOverlay: Fe["a"],
            VSnackbar: _e["a"]
        });
        var Ve = function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("div")
        },
        Oe = [],
        Ae = (n("38cf"), {
            name: "HandleKeyEvent",
            computed: Object(L["a"])({},
            Object(W["d"])(["keyEvents"])),
            created: function() {
                var t = this;
                document.onkeydown = function(e) {
                    if (!e.repeat) for (var n in t.keyEvents.down) if (e.keyCode === Number(n)) {
                        var o = t.keyEvents.down[n];
                        o()
                    }
                },
                document.onkeyup = function(e) {
                    for (var n in t.keyEvents.up) if (e.keyCode === Number(n)) {
                        var o = t.keyEvents.up[n];
                        o()
                    }
                }
            }
        }),
        je = Ae,
        Ee = Object(h["a"])(je, Ve, Oe, !1, null, null, null),
        Me = Ee.exports,
        Le = {
            name: "App",
            components: {
                AppBar: g,
                Home: he,
                HandleWebsocket: xe,
                HandleKeyEvent: Me
            },
            data: function() {
                return {}
            }
        },
        We = null != navigator.userAgent.toLowerCase().match(/(ipod|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i);
        We && console.log("mobaView");
        var Ie = Le,
        Be = (n("7faf"), n("7496")),
        Te = n("a75b"),
        $e = Object(h["a"])(Ie, r, i, !1, null, null, null),
        Re = $e.exports;
        p()($e, {
            VApp: Be["a"],
            VContent: Te["a"]
        });
        var Ne = n("9483");
        Object(Ne["a"])("".concat("/", "service-worker.js"), {
            ready: function() {
                console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")
            },
            registered: function() {
                console.log("Service worker has been registered.")
            },
            cached: function() {
                console.log("Content has been cached for offline use.")
            },
            updatefound: function() {
                console.log("New content is downloading.")
            },
            updated: function() {
                console.log("New content is available; please refresh.")
            },
            offline: function() {
                console.log("No internet connection found. App is running in offline mode.")
            },
            error: function(t) {
                console.error("Error during service worker registration:", t)
            }
        });
        var Pe = n("8c4f");
        o["a"].use(Pe["a"]);
        var He = [{
            path: "/",
            name: "Home",
            component: he
        }],
        Ue = new Pe["a"]({
            mode: "history",
            base: "/",
            routes: He
        }),
        De = Ue;
        o["a"].use(W["a"]);
        var Ke = new W["a"].Store({
            state: {
                setVedioTimmer: null,
                CVFLColor: "#787D91",
                FCColor: "#FFFF00",
                nowAction: "none",
                wsContent: "",
                wsResponse: "",
                keyEvents: {
                    down: {},
                    up: {}
                }
            },
            actions: {
                changeWsContent: function(t, e) {
                    t.commit("changeWsContent", e)
                },
                changeWsResponse: function(t, e) {
                    e && t.commit("changeWsResponse", e)
                }
            },
            mutations: {
                changeSetVedioTimmer: function(t, e) {
                    t.setVedioTimmer = e
                },
                changeCVFLColor: function(t, e) {
                    t.CVFLColor = e
                },
                changeFCColor: function(t, e) {
                    console.log(e),
                    t.FCColor = e
                },
                changeWsContent: function(t, e) {
                    t.wsContent = e
                },
                changeWsResponse: function(t, e) {
                    t.wsResponse = e
                },
                setKeyEvent: function(t, e) {
                    e && e[0] && e[1] && e[2] && (t.keyEvents[e[2]][e[0]] = e[1])
                }
            },
            modules: {}
        });
        n("8ae3");
        o["a"].config.productionTip = !1,
        o["a"].prototype.RGBToHSV255 = function(t) {
            var e = 0,
            n = 0,
            o = 0,
            s = t[0],
            a = t[1],
            r = t[2];
            t.sort((function(t, e) {
                return t - e
            }));
            var i = t[2],
            c = t[0];
            return o = i / 255,
            n = 0 === i ? 0 : 1 - c / i,
            i === c ? e = 0 : i === s && a >= r ? e = (a - r) / (i - c) * 60 + 0 : i === s && a < r ? e = (a - r) / (i - c) * 60 + 360 : i === a ? e = (r - s) / (i - c) * 60 + 120 : i === r && (e = (s - a) / (i - c) * 60 + 240),
            e = parseInt(Math.floor(e / 2)),
            n = parseInt(255 * n),
            o = parseInt(255 * o),
            [e, n, o]
        },
        o["a"].prototype.hexToRgba = function(t, e) {
            return e ? [parseInt("0x" + t.slice(1, 3)), parseInt("0x" + t.slice(3, 5)), parseInt("0x" + t.slice(5, 7)), e] : [parseInt("0x" + t.slice(1, 3)), parseInt("0x" + t.slice(3, 5)), parseInt("0x" + t.slice(5, 7))]
        },
        new o["a"]({
            router: De,
            store: Ke,
            vuetify: a,
            render: function(t) {
                return t(Re)
            }
        }).$mount("#app")
    },
    "5ce7": function(t, e, n) {
        "use strict";
        n("9201")
    },
    6668 : function(t, e, n) {},
    "704e": function(t, e, n) {
        "use strict";
        n("1a3b")
    },
    "76bf": function(t, e, n) {},
    "7faf": function(t, e, n) {
        "use strict";
        n("b8ff")
    },
    8208 : function(t, e, n) {
        "use strict";
        n("c192")
    },
    "82da": function(t, e, n) {
        "use strict";
        n("bbf3")
    },
    "83b3": function(t, e, n) {
        "use strict";
        n("0a82")
    },
    "8ae3": function(t, e, n) {},
    9201 : function(t, e, n) {},
    a5fc: function(t, e, n) {},
    b8ff: function(t, e, n) {},
    bbf3: function(t, e, n) {},
    c192: function(t, e, n) {},
    c822: function(t, e, n) {},
    e5bf: function(t, e, n) {
        "use strict";
        n("496d")
    },
    ed2c: function(t, e, n) {},
    f11b: function(t, e, n) {
        "use strict";
        n("a5fc")
    },
    fd96: function(t, e, n) {
        "use strict";
        n("c822")
    }
});
//# sourceMappingURL=app.0ea6d772.js.map
