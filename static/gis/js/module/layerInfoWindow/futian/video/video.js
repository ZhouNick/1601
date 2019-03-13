!function (t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t(); else if ("function" == typeof define && define.amd) define([], t); else {
        var e;
        e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, e.videojs = t()
    }
}(function () {
    var t;
    return function e(t, r, n) {
        function o(s, a) {
            if (!r[s]) {
                if (!t[s]) {
                    var l = "function" == typeof require && require;
                    if (!a && l) return l(s, !0);
                    if (i) return i(s, !0);
                    var u = new Error("Cannot find module '" + s + "'");
                    throw u.code = "MODULE_NOT_FOUND", u
                }
                var c = r[s] = {exports: {}};
                t[s][0].call(c.exports, function (e) {
                    var r = t[s][1][e];
                    return o(r ? r : e)
                }, c, c.exports, e, t, r, n)
            }
            return r[s].exports
        }

        for (var i = "function" == typeof require && require, s = 0; s < n.length; s++) o(n[s]);
        return o
    }({
        1: [function (t, e, r) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function o(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var a = t(2), l = n(a), u = t(5), c = n(u), p = function (t) {
                function e() {
                    return o(this, e), i(this, t.apply(this, arguments))
                }

                return s(e, t), e.prototype.buildCSSClass = function () {
                    return "vjs-big-play-button"
                }, e.prototype.handleClick = function (t) {
                    this.player_.play()
                }, e
            }(l["default"]);
            p.prototype.controlText_ = "Play Video", c["default"].registerComponent("BigPlayButton", p), r["default"] = p
        }, {2: 2, 5: 5}],
        2: [function (t, e, r) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function o(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var a = t(3), l = n(a), u = t(5), c = n(u), p = t(86), f = n(p), h = t(88), d = function (t) {
                function e() {
                    return o(this, e), i(this, t.apply(this, arguments))
                }

                return s(e, t), e.prototype.createEl = function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "button",
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    e = (0, h.assign)({className: this.buildCSSClass()}, e), "button" !== t && (f["default"].warn("Creating a Button with an HTML element of " + t + " is deprecated; use ClickableComponent instead."), e = (0, h.assign)({tabIndex: 0}, e), r = (0, h.assign)({role: "button"}, r)), r = (0, h.assign)({
                        type: "button",
                        "aria-live": "polite"
                    }, r);
                    var n = c["default"].prototype.createEl.call(this, t, e, r);
                    return this.createControlTextEl(n), n
                }, e.prototype.addChild = function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = this.constructor.name;
                    return f["default"].warn("Adding an actionable (user controllable) child to a Button (" + r + ") is not supported; use a ClickableComponent instead."), c["default"].prototype.addChild.call(this, t, e)
                }, e.prototype.enable = function () {
                    t.prototype.enable.call(this), this.el_.removeAttribute("disabled")
                }, e.prototype.disable = function () {
                    t.prototype.disable.call(this), this.el_.setAttribute("disabled", "disabled")
                }, e.prototype.handleKeyPress = function (e) {
                    32 !== e.which && 13 !== e.which && t.prototype.handleKeyPress.call(this, e)
                }, e
            }(l["default"]);
            c["default"].registerComponent("Button", d), r["default"] = d
        }, {3: 3, 5: 5, 86: 86, 88: 88}],
        3: [function (t, e, r) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e["default"] = t, e
            }

            function o(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var l = t(5), u = o(l), c = t(81), p = n(c), f = t(82), h = n(f), d = t(83), y = n(d), v = t(86), _ = o(v),
                g = t(94), b = o(g), m = t(88), T = function (t) {
                    function e(r, n) {
                        i(this, e);
                        var o = s(this, t.call(this, r, n));
                        return o.emitTapEvents(), o.enable(), o
                    }

                    return a(e, t), e.prototype.createEl = function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "div",
                            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        r = (0, m.assign)({
                            className: this.buildCSSClass(),
                            tabIndex: 0
                        }, r), "button" === e && _["default"].error("Creating a ClickableComponent with an HTML element of " + e + " is not supported; use a Button instead."), n = (0, m.assign)({
                            role: "button",
                            "aria-live": "polite"
                        }, n), this.tabIndex_ = r.tabIndex;
                        var o = t.prototype.createEl.call(this, e, r, n);
                        return this.createControlTextEl(o), o
                    }, e.prototype.createControlTextEl = function (t) {
                        return this.controlTextEl_ = p.createEl("span", {className: "vjs-control-text"}), t && t.appendChild(this.controlTextEl_), this.controlText(this.controlText_, t), this.controlTextEl_
                    }, e.prototype.controlText = function (t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.el();
                        if (!t) return this.controlText_ || "Need Text";
                        var r = this.localize(t);
                        return this.controlText_ = t, this.controlTextEl_.innerHTML = r, e.setAttribute("title", r), this
                    }, e.prototype.buildCSSClass = function () {
                        return "vjs-control vjs-button " + t.prototype.buildCSSClass.call(this)
                    }, e.prototype.enable = function () {
                        return this.removeClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "false"), "undefined" != typeof this.tabIndex_ && this.el_.setAttribute("tabIndex", this.tabIndex_), this.on("tap", this.handleClick), this.on("click", this.handleClick), this.on("focus", this.handleFocus), this.on("blur", this.handleBlur), this
                    }, e.prototype.disable = function () {
                        return this.addClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "true"), "undefined" != typeof this.tabIndex_ && this.el_.removeAttribute("tabIndex"), this.off("tap", this.handleClick), this.off("click", this.handleClick), this.off("focus", this.handleFocus), this.off("blur", this.handleBlur), this
                    }, e.prototype.handleClick = function (t) {
                    }, e.prototype.handleFocus = function (t) {
                        h.on(b["default"], "keydown", y.bind(this, this.handleKeyPress))
                    }, e.prototype.handleKeyPress = function (e) {
                        32 === e.which || 13 === e.which ? (e.preventDefault(), this.handleClick(e)) : t.prototype.handleKeyPress && t.prototype.handleKeyPress.call(this, e)
                    }, e.prototype.handleBlur = function (t) {
                        h.off(b["default"], "keydown", y.bind(this, this.handleKeyPress))
                    }, e
                }(u["default"]);
            u["default"].registerComponent("ClickableComponent", T), r["default"] = T
        }, {5: 5, 81: 81, 82: 82, 83: 83, 86: 86, 88: 88, 94: 94}],
        4: [function (t, e, r) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function o(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var a = t(2), l = n(a), u = t(5), c = n(u), p = function (t) {
                function e(r, n) {
                    o(this, e);
                    var s = i(this, t.call(this, r, n));
                    return s.controlText(n && n.controlText || s.localize("Close")), s
                }

                return s(e, t), e.prototype.buildCSSClass = function () {
                    return "vjs-close-button " + t.prototype.buildCSSClass.call(this)
                }, e.prototype.handleClick = function (t) {
                    this.trigger({type: "close", bubbles: !1})
                }, e
            }(l["default"]);
            c["default"].registerComponent("CloseButton", p), r["default"] = p
        }, {2: 2, 5: 5}],
        5: [function (t, e, r) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e["default"] = t, e
            }

            function o(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            r.__esModule = !0;
            var s = t(95), a = o(s), l = t(81), u = n(l), c = t(83), p = n(c), f = t(85), h = n(f), d = t(82), y = n(d),
                v = t(86), _ = o(v), g = t(91), b = o(g), m = t(87), T = o(m), w = function () {
                    function t(e, r, n) {
                        if (i(this, t), !e && this.play ? this.player_ = e = this : this.player_ = e, this.options_ = (0, T["default"])({}, this.options_), r = this.options_ = (0, T["default"])(this.options_, r), this.id_ = r.id || r.el && r.el.id, !this.id_) {
                            var o = e && e.id && e.id() || "no_player";
                            this.id_ = o + "_component_" + h.newGUID()
                        }
                        this.name_ = r.name || null, r.el ? this.el_ = r.el : r.createEl !== !1 && (this.el_ = this.createEl()), this.children_ = [], this.childIndex_ = {}, this.childNameIndex_ = {}, r.initChildren !== !1 && this.initChildren(), this.ready(n), r.reportTouchActivity !== !1 && this.enableTouchActivity()
                    }

                    return t.prototype.dispose = function () {
                        if (this.trigger({
                            type: "dispose",
                            bubbles: !1
                        }), this.children_) for (var t = this.children_.length - 1; t >= 0; t--) this.children_[t].dispose && this.children_[t].dispose();
                        this.children_ = null, this.childIndex_ = null, this.childNameIndex_ = null, this.off(), this.el_.parentNode && this.el_.parentNode.removeChild(this.el_), u.removeElData(this.el_), this.el_ = null
                    }, t.prototype.player = function () {
                        return this.player_
                    }, t.prototype.options = function (t) {
                        return _["default"].warn("this.options() has been deprecated and will be moved to the constructor in 6.0"), t ? (this.options_ = (0, T["default"])(this.options_, t), this.options_) : this.options_
                    }, t.prototype.el = function () {
                        return this.el_
                    }, t.prototype.createEl = function (t, e, r) {
                        return u.createEl(t, e, r)
                    }, t.prototype.localize = function (t) {
                        var e = this.player_.language && this.player_.language(),
                            r = this.player_.languages && this.player_.languages();
                        if (!e || !r) return t;
                        var n = r[e];
                        if (n && n[t]) return n[t];
                        var o = e.split("-")[0], i = r[o];
                        return i && i[t] ? i[t] : t
                    }, t.prototype.contentEl = function () {
                        return this.contentEl_ || this.el_
                    }, t.prototype.id = function () {
                        return this.id_
                    }, t.prototype.name = function () {
                        return this.name_
                    }, t.prototype.children = function () {
                        return this.children_
                    }, t.prototype.getChildById = function (t) {
                        return this.childIndex_[t]
                    }, t.prototype.getChild = function (t) {
                        if (t) return t = (0, b["default"])(t), this.childNameIndex_[t]
                    }, t.prototype.addChild = function (e) {
                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.children_.length,
                            o = void 0, i = void 0;
                        if ("string" == typeof e) {
                            i = (0, b["default"])(e), r || (r = {}), r === !0 && (_["default"].warn("Initializing a child component with `true` is deprecated.Children should be defined in an array when possible, but if necessary use an object instead of `true`."), r = {});
                            var s = r.componentClass || i;
                            r.name = i;
                            var a = t.getComponent(s);
                            if (!a) throw new Error("Component " + s + " does not exist");
                            if ("function" != typeof a) return null;
                            o = new a(this.player_ || this, r)
                        } else o = e;
                        if (this.children_.splice(n, 0, o), "function" == typeof o.id && (this.childIndex_[o.id()] = o), i = i || o.name && o.name(), i && (this.childNameIndex_[i] = o), "function" == typeof o.el && o.el()) {
                            var l = this.contentEl().children, u = l[n] || null;
                            this.contentEl().insertBefore(o.el(), u)
                        }
                        return o
                    }, t.prototype.removeChild = function (t) {
                        if ("string" == typeof t && (t = this.getChild(t)), t && this.children_) {
                            for (var e = !1, r = this.children_.length - 1; r >= 0; r--) if (this.children_[r] === t) {
                                e = !0, this.children_.splice(r, 1);
                                break
                            }
                            if (e) {
                                this.childIndex_[t.id()] = null, this.childNameIndex_[t.name()] = null;
                                var n = t.el();
                                n && n.parentNode === this.contentEl() && this.contentEl().removeChild(t.el())
                            }
                        }
                    }, t.prototype.initChildren = function () {
                        var e = this, r = this.options_.children;
                        r && !function () {
                            var n = e.options_, o = function (t) {
                                var r = t.name, o = t.opts;
                                if (void 0 !== n[r] && (o = n[r]), o !== !1) {
                                    o === !0 && (o = {}), o.playerOptions = e.options_.playerOptions;
                                    var i = e.addChild(r, o);
                                    i && (e[r] = i)
                                }
                            }, i = void 0, s = t.getComponent("Tech");
                            i = Array.isArray(r) ? r : Object.keys(r), i.concat(Object.keys(e.options_).filter(function (t) {
                                return !i.some(function (e) {
                                    return "string" == typeof e ? t === e : t === e.name
                                })
                            })).map(function (t) {
                                var n = void 0, o = void 0;
                                return "string" == typeof t ? (n = t, o = r[n] || e.options_[n] || {}) : (n = t.name, o = t), {
                                    name: n,
                                    opts: o
                                }
                            }).filter(function (e) {
                                var r = t.getComponent(e.opts.componentClass || (0, b["default"])(e.name));
                                return r && !s.isTech(r)
                            }).forEach(o)
                        }()
                    }, t.prototype.buildCSSClass = function () {
                        return ""
                    }, t.prototype.on = function (t, e, r) {
                        var n = this;
                        return "string" == typeof t || Array.isArray(t) ? y.on(this.el_, t, p.bind(this, e)) : !function () {
                            var o = t, i = e, s = p.bind(n, r), a = function () {
                                return n.off(o, i, s)
                            };
                            a.guid = s.guid, n.on("dispose", a);
                            var l = function () {
                                return n.off("dispose", a)
                            };
                            l.guid = s.guid, t.nodeName ? (y.on(o, i, s), y.on(o, "dispose", l)) : "function" == typeof t.on && (o.on(i, s), o.on("dispose", l))
                        }(), this
                    }, t.prototype.off = function (t, e, r) {
                        if (!t || "string" == typeof t || Array.isArray(t)) y.off(this.el_, t, e); else {
                            var n = t, o = e, i = p.bind(this, r);
                            this.off("dispose", i), t.nodeName ? (y.off(n, o, i), y.off(n, "dispose", i)) : (n.off(o, i), n.off("dispose", i))
                        }
                        return this
                    }, t.prototype.one = function (t, e, r) {
                        var n = this, o = arguments;
                        return "string" == typeof t || Array.isArray(t) ? y.one(this.el_, t, p.bind(this, e)) : !function () {
                            var i = t, s = e, a = p.bind(n, r), l = function u() {
                                n.off(i, s, u), a.apply(null, o)
                            };
                            l.guid = a.guid, n.on(i, s, l)
                        }(), this
                    }, t.prototype.trigger = function (t, e) {
                        return y.trigger(this.el_, t, e), this
                    }, t.prototype.ready = function (t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return t && (this.isReady_ ? e ? t.call(this) : this.setTimeout(t, 1) : (this.readyQueue_ = this.readyQueue_ || [], this.readyQueue_.push(t))), this
                    }, t.prototype.triggerReady = function () {
                        this.isReady_ = !0, this.setTimeout(function () {
                            var t = this.readyQueue_;
                            this.readyQueue_ = [], t && t.length > 0 && t.forEach(function (t) {
                                t.call(this)
                            }, this), this.trigger("ready")
                        }, 1)
                    }, t.prototype.$ = function (t, e) {
                        return u.$(t, e || this.contentEl())
                    }, t.prototype.$$ = function (t, e) {
                        return u.$$(t, e || this.contentEl())
                    }, t.prototype.hasClass = function (t) {
                        return u.hasElClass(this.el_, t)
                    }, t.prototype.addClass = function (t) {
                        return u.addElClass(this.el_, t), this
                    }, t.prototype.removeClass = function (t) {
                        return u.removeElClass(this.el_, t), this
                    }, t.prototype.toggleClass = function (t, e) {
                        return u.toggleElClass(this.el_, t, e), this
                    }, t.prototype.show = function () {
                        return this.removeClass("vjs-hidden"), this
                    }, t.prototype.hide = function () {
                        return this.addClass("vjs-hidden"), this
                    }, t.prototype.lockShowing = function () {
                        return this.addClass("vjs-lock-showing"), this
                    }, t.prototype.unlockShowing = function () {
                        return this.removeClass("vjs-lock-showing"), this
                    }, t.prototype.getAttribute = function (t) {
                        return u.getAttribute(this.el_, t)
                    }, t.prototype.setAttribute = function (t, e) {
                        return u.setAttribute(this.el_, t, e), this
                    }, t.prototype.removeAttribute = function (t) {
                        return u.removeAttribute(this.el_, t), this
                    }, t.prototype.width = function (t, e) {
                        return this.dimension("width", t, e)
                    }, t.prototype.height = function (t, e) {
                        return this.dimension("height", t, e)
                    }, t.prototype.dimensions = function (t, e) {
                        return this.width(t, !0).height(e)
                    }, t.prototype.dimension = function (t, e, r) {
                        if (void 0 !== e) return null !== e && e === e || (e = 0), ("" + e).indexOf("%") !== -1 || ("" + e).indexOf("px") !== -1 ? this.el_.style[t] = e : "auto" === e ? this.el_.style[t] = "" : this.el_.style[t] = e + "px", r || this.trigger("resize"), this;
                        if (!this.el_) return 0;
                        var n = this.el_.style[t], o = n.indexOf("px");
                        return o !== -1 ? parseInt(n.slice(0, o), 10) : parseInt(this.el_["offset" + (0, b["default"])(t)], 10)
                    }, t.prototype.currentDimension = function (t) {
                        var e = 0;
                        if ("width" !== t && "height" !== t) throw new Error("currentDimension only accepts width or height value");
                        if ("function" == typeof a["default"].getComputedStyle) {
                            var r = a["default"].getComputedStyle(this.el_);
                            e = r.getPropertyValue(t) || r[t]
                        }
                        if (e = parseFloat(e), 0 === e) {
                            var n = "offset" + (0, b["default"])(t);
                            e = this.el_[n]
                        }
                        return e
                    }, t.prototype.currentDimensions = function () {
                        return {width: this.currentDimension("width"), height: this.currentDimension("height")}
                    }, t.prototype.currentWidth = function () {
                        return this.currentDimension("width")
                    }, t.prototype.currentHeight = function () {
                        return this.currentDimension("height")
                    }, t.prototype.emitTapEvents = function () {
                        var t = 0, e = null, r = 10, n = 200, o = void 0;
                        this.on("touchstart", function (r) {
                            1 === r.touches.length && (e = {
                                pageX: r.touches[0].pageX,
                                pageY: r.touches[0].pageY
                            }, t = (new Date).getTime(), o = !0)
                        }), this.on("touchmove", function (t) {
                            if (t.touches.length > 1) o = !1; else if (e) {
                                var n = t.touches[0].pageX - e.pageX, i = t.touches[0].pageY - e.pageY,
                                    s = Math.sqrt(n * n + i * i);
                                s > r && (o = !1)
                            }
                        });
                        var i = function () {
                            o = !1
                        };
                        this.on("touchleave", i), this.on("touchcancel", i), this.on("touchend", function (r) {
                            if (e = null, o === !0) {
                                var i = (new Date).getTime() - t;
                                i < n && (r.preventDefault(), this.trigger("tap"))
                            }
                        })
                    }, t.prototype.enableTouchActivity = function () {
                        if (this.player() && this.player().reportUserActivity) {
                            var t = p.bind(this.player(), this.player().reportUserActivity), e = void 0;
                            this.on("touchstart", function () {
                                t(), this.clearInterval(e), e = this.setInterval(t, 250)
                            });
                            var r = function (r) {
                                t(), this.clearInterval(e)
                            };
                            this.on("touchmove", t), this.on("touchend", r), this.on("touchcancel", r)
                        }
                    }, t.prototype.setTimeout = function (t, e) {
                        t = p.bind(this, t);
                        var r = a["default"].setTimeout(t, e), n = function () {
                            this.clearTimeout(r)
                        };
                        return n.guid = "vjs-timeout-" + r, this.on("dispose", n), r
                    }, t.prototype.clearTimeout = function (t) {
                        a["default"].clearTimeout(t);
                        var e = function () {
                        };
                        return e.guid = "vjs-timeout-" + t, this.off("dispose", e), t
                    }, t.prototype.setInterval = function (t, e) {
                        t = p.bind(this, t);
                        var r = a["default"].setInterval(t, e), n = function () {
                            this.clearInterval(r)
                        };
                        return n.guid = "vjs-interval-" + r, this.on("dispose", n), r
                    }, t.prototype.clearInterval = function (t) {
                        a["default"].clearInterval(t);
                        var e = function () {
                        };
                        return e.guid = "vjs-interval-" + t, this.off("dispose", e), t
                    }, t.registerComponent = function (e, r) {
                        if (e) return e = (0, b["default"])(e), t.components_ || (t.components_ = {}), "Player" === e && t.components_[e] && !function () {
                            var r = t.components_[e];
                            if (r.players && Object.keys(r.players).length > 0 && Object.keys(r.players).map(function (t) {
                                return r.players[t]
                            }).every(Boolean)) throw new Error("Can not register Player component after player has been created")
                        }(), t.components_[e] = r, r
                    }, t.getComponent = function (e) {
                        if (e) return e = (0, b["default"])(e), t.components_ && t.components_[e] ? t.components_[e] : a["default"] && a["default"].videojs && a["default"].videojs[e] ? (_["default"].warn("The " + e + " component was added to the videojs object when it should be registered using videojs.registerComponent(name, component)"), a["default"].videojs[e]) : void 0
                    }, t.extend = function (e) {
                        e = e || {}, _["default"].warn("Component.extend({}) has been deprecated,  use videojs.extend(Component, {}) instead");
                        var r = e.init || e.init || this.prototype.init || this.prototype.init || function () {
                        }, n = function () {
                            r.apply(this, arguments)
                        };
                        n.prototype = Object.create(this.prototype), n.prototype.constructor = n, n.extend = t.extend;
                        for (var o in e) e.hasOwnProperty(o) && (n.prototype[o] = e[o]);
                        return n
                    }, t
                }();
            w.registerComponent("Component", w), r["default"] = w
        }, {81: 81, 82: 82, 83: 83, 85: 85, 86: 86, 87: 87, 91: 91, 95: 95}],
        6: [function (t, e, r) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function o(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var a = t(36), l = n(a), u = t(5), c = n(u), p = t(7), f = n(p), h = function (t) {
                function e(r) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    o(this, e), n.tracks = r.audioTracks && r.audioTracks();
                    var s = i(this, t.call(this, r, n));
                    return s.el_.setAttribute("aria-label", "Audio Menu"), s
                }

                return s(e, t), e.prototype.buildCSSClass = function () {
                    return "vjs-audio-button " + t.prototype.buildCSSClass.call(this)
                }, e.prototype.createItems = function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        e = this.player_.audioTracks && this.player_.audioTracks();
                    if (!e) return t;
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r];
                        t.push(new f["default"](this.player_, {track: n, selectable: !0}))
                    }
                    return t
                }, e
            }(l["default"]);
            h.prototype.controlText_ = "Audio Track", c["default"].registerComponent("AudioTrackButton", h), r["default"] = h
        }, {36: 36, 5: 5, 7: 7}],
        7: [function (t, e, r) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e["default"] = t, e
            }

            function o(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var l = t(48), u = o(l), c = t(5), p = o(c), f = t(83), h = n(f), d = function (t) {
                function e(r, n) {
                    i(this, e);
                    var o = n.track, a = r.audioTracks();
                    n.label = o.label || o.language || "Unknown", n.selected = o.enabled;
                    var l = s(this, t.call(this, r, n));
                    return l.track = o, a && !function () {
                        var t = h.bind(l, l.handleTracksChange);
                        a.addEventListener("change", t), l.on("dispose", function () {
                            a.removeEventListener("change", t)
                        })
                    }(), l
                }

                return a(e, t), e.prototype.handleClick = function (e) {
                    var r = this.player_.audioTracks();
                    if (t.prototype.handleClick.call(this, e), r) for (var n = 0; n < r.length; n++) {
                        var o = r[n];
                        o.enabled = o === this.track
                    }
                }, e.prototype.handleTracksChange = function (t) {
                    this.selected(this.track.enabled)
                }, e
            }(u["default"]);
            p["default"].registerComponent("AudioTrackMenuItem", d), r["default"] = d
        }, {48: 48, 5: 5, 83: 83}],
        8: [function (t, e, r) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function o(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var a = t(5), l = n(a);
            t(12), t(32), t(33), t(35), t(34), t(10), t(18), t(9), t(38), t(40), t(11), t(25), t(27), t(29), t(24), t(6), t(13), t(21);
            var u = function (t) {
                function e() {
                    return o(this, e), i(this, t.apply(this, arguments))
                }

                return s(e, t), e.prototype.createEl = function () {
                    return t.prototype.createEl.call(this, "div", {
                        className: "vjs-control-bar",
                        dir: "ltr"
                    }, {role: "group"})
                }, e
            }(l["default"]);
            u.prototype.options_ = {children: ["playToggle", "volumeMenuButton", "currentTimeDisplay", "timeDivider", "durationDisplay", "progressControl", "liveDisplay", "remainingTimeDisplay", "customControlSpacer", "playbackRateMenuButton", "chaptersButton", "descriptionsButton", "subtitlesButton", "captionsButton", "audioTrackButton", "fullscreenToggle"]}, l["default"].registerComponent("ControlBar", u), r["default"] = u
        }, {
            10: 10,
            11: 11,
            12: 12,
            13: 13,
            18: 18,
            21: 21,
            24: 24,
            25: 25,
            27: 27,
            29: 29,
            32: 32,
            33: 33,
            34: 34,
            35: 35,
            38: 38,
            40: 40,
            5: 5,
            6: 6,
            9: 9
        }],
        9: [function (t, e, r) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function o(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var a = t(2), l = n(a), u = t(5), c = n(u), p = function (t) {
                function e(r, n) {
                    o(this, e);
                    var s = i(this, t.call(this, r, n));
                    return s.on(r, "fullscreenchange", s.handleFullscreenChange), s
                }

                return s(e, t), e.prototype.buildCSSClass = function () {
                    return "vjs-fullscreen-control " + t.prototype.buildCSSClass.call(this)
                }, e.prototype.handleFullscreenChange = function (t) {
                    this.player_.isFullscreen() ? this.controlText("Non-Fullscreen") : this.controlText("Fullscreen")
                }, e.prototype.handleClick = function (t) {
                    this.player_.isFullscreen() ? this.player_.exitFullscreen() : this.player_.requestFullscreen()
                }, e
            }(l["default"]);
            p.prototype.controlText_ = "Fullscreen", c["default"].registerComponent("FullscreenToggle", p), r["default"] = p
        }, {2: 2, 5: 5}],
        10: [function (t, e, r) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e["default"] = t, e
            }

            function o(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var l = t(5), u = o(l), c = t(81), p = n(c), f = function (t) {
                function e(r, n) {
                    i(this, e);
                    var o = s(this, t.call(this, r, n));
                    return o.updateShowing(), o.on(o.player(), "durationchange", o.updateShowing), o
                }

                return a(e, t), e.prototype.createEl = function () {
                    var e = t.prototype.createEl.call(this, "div", {className: "vjs-live-control vjs-control"});
                    return this.contentEl_ = p.createEl("div", {
                        className: "vjs-live-display",
                        innerHTML: '<span class="vjs-control-text">' + this.localize("Stream Type") + "</span>" + this.localize("LIVE")
                    }, {"aria-live": "off"}), e.appendChild(this.contentEl_), e
                }, e.prototype.updateShowing = function (t) {
                    this.player().duration() === 1 / 0 ? this.show() : this.hide()
                }, e
            }(u["default"]);
            u["default"].registerComponent("LiveDisplay", f), r["default"] = f
        }, {5: 5, 81: 81}],
        11: [function (t, e, r) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e["default"] = t, e
            }

            function o(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var l = t(2), u = o(l), c = t(5), p = o(c), f = t(81), h = n(f), d = function (t) {
                function e(r, n) {
                    i(this, e);
                    var o = s(this, t.call(this, r, n));
                    return o.on(r, "volumechange", o.update), r.tech_ && r.tech_.featuresVolumeControl === !1 && o.addClass("vjs-hidden"), o.on(r, "loadstart", function () {
                        this.update(), r.tech_.featuresVolumeControl === !1 ? this.addClass("vjs-hidden") : this.removeClass("vjs-hidden")
                    }), o
                }

                return a(e, t), e.prototype.buildCSSClass = function () {
                    return "vjs-mute-control " + t.prototype.buildCSSClass.call(this)
                }, e.prototype.handleClick = function (t) {
                    this.player_.muted(!this.player_.muted())
                }, e.prototype.update = function (t) {
                    var e = this.player_.volume(), r = 3;
                    0 === e || this.player_.muted() ? r = 0 : e < .33 ? r = 1 : e < .67 && (r = 2);
                    var n = this.player_.muted() ? "Unmute" : "Mute";
                    this.controlText() !== n && this.controlText(n);
                    for (var o = 0; o < 4; o++) h.removeElClass(this.el_, "vjs-vol-" + o);
                    h.addElClass(this.el_, "vjs-vol-" + r)
                }, e
            }(u["default"]);
            d.prototype.controlText_ = "Mute", p["default"].registerComponent("MuteToggle", d), r["default"] = d
        }, {2: 2, 5: 5, 81: 81}],
        12: [function (t, e, r) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function o(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var a = t(2), l = n(a), u = t(5), c = n(u), p = function (t) {
                function e(r, n) {
                    o(this, e);
                    var s = i(this, t.call(this, r, n));
                    return s.on(r, "play", s.handlePlay), s.on(r, "pause", s.handlePause), s
                }

                return s(e, t), e.prototype.buildCSSClass = function () {
                    return "vjs-play-control " + t.prototype.buildCSSClass.call(this)
                }, e.prototype.handleClick = function (t) {
                    this.player_.paused() ? this.player_.play() : this.player_.pause()
                }, e.prototype.handlePlay = function (t) {
                    this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.controlText("Pause")
                }, e.prototype.handlePause = function (t) {
                    this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.controlText("Play")
                }, e
            }(l["default"]);
            p.prototype.controlText_ = "Play", c["default"].registerComponent("PlayToggle", p), r["default"] = p
        }, {2: 2, 5: 5}],
        13: [function (t, e, r) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e["default"] = t, e
            }

            function o(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var l = t(47), u = o(l), c = t(49), p = o(c), f = t(14), h = o(f), d = t(5), y = o(d), v = t(81), _ = n(v),
                g = function (t) {
                    function e(r, n) {
                        i(this, e);
                        var o = s(this, t.call(this, r, n));
                        return o.updateVisibility(), o.updateLabel(), o.on(r, "loadstart", o.updateVisibility), o.on(r, "ratechange", o.updateLabel), o
                    }

                    return a(e, t), e.prototype.createEl = function () {
                        var e = t.prototype.createEl.call(this);
                        return this.labelEl_ = _.createEl("div", {
                            className: "vjs-playback-rate-value",
                            innerHTML: 1
                        }), e.appendChild(this.labelEl_), e
                    }, e.prototype.buildCSSClass = function () {
                        return "vjs-playback-rate " + t.prototype.buildCSSClass.call(this)
                    }, e.prototype.createMenu = function () {
                        var t = new p["default"](this.player()), e = this.playbackRates();
                        if (e) for (var r = e.length - 1; r >= 0; r--) t.addChild(new h["default"](this.player(), {rate: e[r] + "x"}));
                        return t
                    }, e.prototype.updateARIAAttributes = function () {
                        this.el().setAttribute("aria-valuenow", this.player().playbackRate())
                    }, e.prototype.handleClick = function (t) {
                        for (var e = this.player().playbackRate(), r = this.playbackRates(), n = r[0], o = 0; o < r.length; o++) if (r[o] > e) {
                            n = r[o];
                            break
                        }
                        this.player().playbackRate(n)
                    }, e.prototype.playbackRates = function () {
                        return this.options_.playbackRates || this.options_.playerOptions && this.options_.playerOptions.playbackRates
                    }, e.prototype.playbackRateSupported = function () {
                        return this.player().tech_ && this.player().tech_.featuresPlaybackRate && this.playbackRates() && this.playbackRates().length > 0
                    }, e.prototype.updateVisibility = function (t) {
                        this.playbackRateSupported() ? this.removeClass("vjs-hidden") : this.addClass("vjs-hidden")
                    }, e.prototype.updateLabel = function (t) {
                        this.playbackRateSupported() && (this.labelEl_.innerHTML = this.player().playbackRate() + "x")
                    }, e
                }(u["default"]);
            g.prototype.controlText_ = "Playback Rate", y["default"].registerComponent("PlaybackRateMenuButton", g), r["default"] = g
        }, {14: 14, 47: 47, 49: 49, 5: 5, 81: 81}],
        14: [function (t, e, r) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function o(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var a = t(48), l = n(a), u = t(5), c = n(u), p = function (t) {
                function e(r, n) {
                    o(this, e);
                    var s = n.rate, a = parseFloat(s, 10);
                    n.label = s, n.selected = 1 === a;
                    var l = i(this, t.call(this, r, n));
                    return l.label = s, l.rate = a, l.on(r, "ratechange", l.update), l
                }

                return s(e, t), e.prototype.handleClick = function (e) {
                    t.prototype.handleClick.call(this), this.player().playbackRate(this.rate)
                }, e.prototype.update = function (t) {
                    this.selected(this.player().playbackRate() === this.rate)
                }, e
            }(l["default"]);
            p.prototype.contentElType = "button", c["default"].registerComponent("PlaybackRateMenuItem", p), r["default"] = p
        }, {48: 48, 5: 5}],
        15: [function (t, e, r) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e["default"] = t, e
            }

            function o(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var l = t(5), u = o(l), c = t(81), p = n(c), f = function (t) {
                function e(r, n) {
                    i(this, e);
                    var o = s(this, t.call(this, r, n));
                    return o.partEls_ = [], o.on(r, "progress", o.update), o
                }

                return a(e, t), e.prototype.createEl = function () {
                    return t.prototype.createEl.call(this, "div", {
                        className: "vjs-load-progress",
                        innerHTML: '<span class="vjs-control-text"><span>' + this.localize("Loaded") + "</span>: 0%</span>"
                    })
                }, e.prototype.update = function (t) {
                    var e = this.player_.buffered(), r = this.player_.duration(), n = this.player_.bufferedEnd(),
                        o = this.partEls_, i = function (t, e) {
                            var r = t / e || 0;
                            return 100 * (r >= 1 ? 1 : r) + "%"
                        };
                    this.el_.style.width = i(n, r);
                    for (var s = 0; s < e.length; s++) {
                        var a = e.start(s), l = e.end(s), u = o[s];
                        u || (u = this.el_.appendChild(p.createEl()), o[s] = u), u.style.left = i(a, n), u.style.width = i(l - a, n)
                    }
                    for (var c = o.length; c > e.length; c--) this.el_.removeChild(o[c - 1]);
                    o.length = e.length
                }, e
            }(u["default"]);
            u["default"].registerComponent("LoadProgressBar", f), r["default"] = f
        }, {5: 5, 81: 81}],
        16: [function (t, e, r) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e["default"] = t, e
            }

            function o(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var l = t(5), u = o(l), c = t(81), p = n(c), f = t(83), h = n(f), d = t(84), y = o(d), v = t(80), _ = o(v),
                g = function (t) {
                    function e(r, n) {
                        i(this, e);
                        var o = s(this, t.call(this, r, n));
                        return n.playerOptions && n.playerOptions.controlBar && n.playerOptions.controlBar.progressControl && n.playerOptions.controlBar.progressControl.keepTooltipsInside && (o.keepTooltipsInside = n.playerOptions.controlBar.progressControl.keepTooltipsInside), o.keepTooltipsInside && (o.tooltip = p.createEl("div", {className: "vjs-time-tooltip"}), o.el().appendChild(o.tooltip), o.addClass("vjs-keep-tooltips-inside")), o.update(0, 0), r.on("ready", function () {
                            o.on(r.controlBar.progressControl.el(), "mousemove", h.throttle(h.bind(o, o.handleMouseMove), 25))
                        }), o
                    }

                    return a(e, t), e.prototype.createEl = function () {
                        return t.prototype.createEl.call(this, "div", {className: "vjs-mouse-display"})
                    }, e.prototype.handleMouseMove = function (t) {
                        var e = this.player_.duration(), r = this.calculateDistance(t) * e,
                            n = t.pageX - p.findElPosition(this.el().parentNode).left;
                        this.update(r, n)
                    }, e.prototype.update = function (t, e) {
                        var r = (0, y["default"])(t, this.player_.duration());
                        if (this.el().style.left = e + "px", this.el().setAttribute("data-current-time", r), this.keepTooltipsInside) {
                            var n = this.clampPosition_(e), o = e - n + 1,
                                i = parseFloat((0, _["default"])(this.tooltip, "width")), s = i / 2;
                            this.tooltip.innerHTML = r, this.tooltip.style.right = "-" + (s - o) + "px"
                        }
                    }, e.prototype.calculateDistance = function (t) {
                        return p.getPointerPosition(this.el().parentNode, t).x
                    }, e.prototype.clampPosition_ = function (t) {
                        if (!this.keepTooltipsInside) return t;
                        var e = parseFloat((0, _["default"])(this.player().el(), "width")),
                            r = parseFloat((0, _["default"])(this.tooltip, "width")), n = r / 2, o = t;
                        return t < n ? o = Math.ceil(n) : t > e - n && (o = Math.floor(e - n)), o
                    }, e
                }(u["default"]);
            u["default"].registerComponent("MouseTimeDisplay", g), r["default"] = g
        }, {5: 5, 80: 80, 81: 81, 83: 83, 84: 84}],
        17: [function (t, e, r) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e["default"] = t, e
            }

            function o(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var l = t(5), u = o(l), c = t(83), p = n(c), f = t(84), h = o(f), d = function (t) {
                function e(r, n) {
                    i(this, e);
                    var o = s(this, t.call(this, r, n));
                    return o.updateDataAttr(), o.on(r, "timeupdate", o.updateDataAttr), r.ready(p.bind(o, o.updateDataAttr)), n.playerOptions && n.playerOptions.controlBar && n.playerOptions.controlBar.progressControl && n.playerOptions.controlBar.progressControl.keepTooltipsInside && (o.keepTooltipsInside = n.playerOptions.controlBar.progressControl.keepTooltipsInside), o.keepTooltipsInside && o.addClass("vjs-keep-tooltips-inside"), o
                }

                return a(e, t), e.prototype.createEl = function () {
                    return t.prototype.createEl.call(this, "div", {
                        className: "vjs-play-progress vjs-slider-bar",
                        innerHTML: '<span class="vjs-control-text"><span>' + this.localize("Progress") + "</span>: 0%</span>"
                    })
                }, e.prototype.updateDataAttr = function (t) {
                    var e = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
                    this.el_.setAttribute("data-current-time", (0, h["default"])(e, this.player_.duration()))
                }, e
            }(u["default"]);
            u["default"].registerComponent("PlayProgressBar", d), r["default"] = d
        }, {5: 5, 83: 83, 84: 84}],
        18: [function (t, e, r) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function o(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var a = t(5), l = n(a);
            t(19), t(16);
            var u = function (t) {
                function e() {
                    return o(this, e), i(this, t.apply(this, arguments))
                }

                return s(e, t), e.prototype.createEl = function () {
                    return t.prototype.createEl.call(this, "div", {className: "vjs-progress-control vjs-control"})
                }, e
            }(l["default"]);
            u.prototype.options_ = {children: ["seekBar"]}, l["default"].registerComponent("ProgressControl", u), r["default"] = u
        }, {16: 16, 19: 19, 5: 5}],
        19: [function (t, e, r) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e["default"] = t, e
            }

            function o(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var l = t(57), u = o(l), c = t(5), p = o(c), f = t(83), h = n(f), d = t(84), y = o(d), v = t(80), _ = o(v);
            t(15), t(17), t(20);
            var g = function (t) {
                function e(r, n) {
                    i(this, e);
                    var o = s(this, t.call(this, r, n));
                    return o.on(r, "timeupdate", o.updateProgress), o.on(r, "ended", o.updateProgress), r.ready(h.bind(o, o.updateProgress)), n.playerOptions && n.playerOptions.controlBar && n.playerOptions.controlBar.progressControl && n.playerOptions.controlBar.progressControl.keepTooltipsInside && (o.keepTooltipsInside = n.playerOptions.controlBar.progressControl.keepTooltipsInside), o.keepTooltipsInside && (o.tooltipProgressBar = o.addChild("TooltipProgressBar")), o
                }

                return a(e, t), e.prototype.createEl = function () {
                    return t.prototype.createEl.call(this, "div", {className: "vjs-progress-holder"}, {"aria-label": "progress bar"})
                }, e.prototype.updateProgress = function (t) {
                    if (this.updateAriaAttributes(this.el_), this.keepTooltipsInside) {
                        this.updateAriaAttributes(this.tooltipProgressBar.el_), this.tooltipProgressBar.el_.style.width = this.bar.el_.style.width;
                        var e = parseFloat((0, _["default"])(this.player().el(), "width")),
                            r = parseFloat((0, _["default"])(this.tooltipProgressBar.tooltip, "width")),
                            n = this.tooltipProgressBar.el().style;
                        n.maxWidth = Math.floor(e - r / 2) + "px", n.minWidth = Math.ceil(r / 2) + "px", n.right = "-" + r / 2 + "px"
                    }
                }, e.prototype.updateAriaAttributes = function (t) {
                    var e = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
                    t.setAttribute("aria-valuenow", (100 * this.getPercent()).toFixed(2)), t.setAttribute("aria-valuetext", (0, y["default"])(e, this.player_.duration()))
                }, e.prototype.getPercent = function () {
                    var t = this.player_.currentTime() / this.player_.duration();
                    return t >= 1 ? 1 : t
                }, e.prototype.handleMouseDown = function (e) {
                    this.player_.scrubbing(!0), this.videoWasPlaying = !this.player_.paused(), this.player_.pause(), t.prototype.handleMouseDown.call(this, e)
                }, e.prototype.handleMouseMove = function (t) {
                    var e = this.calculateDistance(t) * this.player_.duration();
                    e === this.player_.duration() && (e -= .1), this.player_.currentTime(e)
                }, e.prototype.handleMouseUp = function (e) {
                    t.prototype.handleMouseUp.call(this, e), this.player_.scrubbing(!1), this.videoWasPlaying && this.player_.play()
                }, e.prototype.stepForward = function () {
                    this.player_.currentTime(this.player_.currentTime() + 5)
                }, e.prototype.stepBack = function () {
                    this.player_.currentTime(this.player_.currentTime() - 5)
                }, e
            }(u["default"]);
            g.prototype.options_ = {
                children: ["loadProgressBar", "mouseTimeDisplay", "playProgressBar"],
                barName: "playProgressBar"
            }, g.prototype.playerEvent = "timeupdate", p["default"].registerComponent("SeekBar", g), r["default"] = g
        }, {15: 15, 17: 17, 20: 20, 5: 5, 57: 57, 80: 80, 83: 83, 84: 84}],
        20: [function (t, e, r) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e["default"] = t, e
            }

            function o(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var l = t(5), u = o(l), c = t(83), p = n(c), f = t(84), h = o(f), d = function (t) {
                function e(r, n) {
                    i(this, e);
                    var o = s(this, t.call(this, r, n));
                    return o.updateDataAttr(), o.on(r, "timeupdate", o.updateDataAttr), r.ready(p.bind(o, o.updateDataAttr)), o
                }

                return a(e, t), e.prototype.createEl = function () {
                    var e = t.prototype.createEl.call(this, "div", {
                        className: "vjs-tooltip-progress-bar vjs-slider-bar",
                        innerHTML: '<div class="vjs-time-tooltip"></div>\n        <span class="vjs-control-text"><span>' + this.localize("Progress") + "</span>: 0%</span>"
                    });
                    return this.tooltip = e.querySelector(".vjs-time-tooltip"), e
                }, e.prototype.updateDataAttr = function (t) {
                    var e = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime(),
                        r = (0, h["default"])(e, this.player_.duration());
                    this.el_.setAttribute("data-current-time", r), this.tooltip.innerHTML = r
                }, e
            }(u["default"]);
            u["default"].registerComponent("TooltipProgressBar", d), r["default"] = d
        }, {5: 5, 83: 83, 84: 84}],
        21: [function (t, e, r) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function o(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var a = t(22), l = n(a), u = t(5), c = n(u), p = function (t) {
                function e() {
                    return o(this, e), i(this, t.apply(this, arguments))
                }

                return s(e, t), e.prototype.buildCSSClass = function () {
                    return "vjs-custom-control-spacer " + t.prototype.buildCSSClass.call(this)
                }, e.prototype.createEl = function () {
                    var e = t.prototype.createEl.call(this, {className: this.buildCSSClass()});
                    return e.innerHTML = "&nbsp;", e
                }, e
            }(l["default"]);
            c["default"].registerComponent("CustomControlSpacer", p), r["default"] = p
        }, {22: 22, 5: 5}],
        22: [function (t, e, r) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function o(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var a = t(5), l = n(a), u = function (t) {
                function e() {
                    return o(this, e), i(this, t.apply(this, arguments))
                }

                return s(e, t), e.prototype.buildCSSClass = function () {
                    return "vjs-spacer " + t.prototype.buildCSSClass.call(this)
                }, e.prototype.createEl = function () {
                    return t.prototype.createEl.call(this, "div", {className: this.buildCSSClass()})
                }, e
            }(l["default"]);
            l["default"].registerComponent("Spacer", u), r["default"] = u
        }, {5: 5}],
        23: [function (t, e, r) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function o(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var a = t(31), l = n(a), u = t(5), c = n(u), p = function (t) {
                function e(r, n) {
                    o(this, e), n.track = {
                        player: r,
                        kind: n.kind,
                        label: n.kind + " settings",
                        selectable: !1,
                        "default": !1,
                        mode: "disabled"
                    }, n.selectable = !1;
                    var s = i(this, t.call(this, r, n));
                    return s.addClass("vjs-texttrack-settings"), s.controlText(", opens " + n.kind + " settings dialog"), s
                }

                return s(e, t), e.prototype.handleClick = function (t) {
                    this.player().getChild("textTrackSettings").show(), this.player().getChild("textTrackSettings").el_.focus()
                }, e
            }(l["default"]);
            c["default"].registerComponent("CaptionSettingsMenuItem", p), r["default"] = p
        }, {31: 31, 5: 5}],
        24: [function (t, e, r) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function o(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var a = t(30), l = n(a), u = t(5), c = n(u), p = t(23), f = n(p), h = function (t) {
                function e(r, n, s) {
                    o(this, e);
                    var a = i(this, t.call(this, r, n, s));
                    return a.el_.setAttribute("aria-label", "Captions Menu"), a
                }

                return s(e, t), e.prototype.buildCSSClass = function () {
                    return "vjs-captions-button " + t.prototype.buildCSSClass.call(this)
                }, e.prototype.update = function (e) {
                    var r = 2;
                    t.prototype.update.call(this), this.player().tech_ && this.player().tech_.featuresNativeTextTracks && (r = 1), this.items && this.items.length > r ? this.show() : this.hide()
                }, e.prototype.createItems = function () {
                    var e = [];
                    return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || e.push(new f["default"](this.player_, {kind: this.kind_})), t.prototype.createItems.call(this, e)
                }, e
            }(l["default"]);
            h.prototype.kind_ = "captions", h.prototype.controlText_ = "Captions", c["default"].registerComponent("CaptionsButton", h), r["default"] = h
        }, {23: 23, 30: 30, 5: 5}],
        25: [function (t, e, r) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function o(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var a = t(30), l = n(a), u = t(5), c = n(u), p = t(26), f = n(p), h = t(91), d = n(h), y = function (t) {
                function e(r, n, s) {
                    o(this, e);
                    var a = i(this, t.call(this, r, n, s));
                    return a.el_.setAttribute("aria-label", "Chapters Menu"), a
                }

                return s(e, t), e.prototype.buildCSSClass = function () {
                    return "vjs-chapters-button " + t.prototype.buildCSSClass.call(this)
                }, e.prototype.update = function (e) {
                    this.track_ && (!e || "addtrack" !== e.type && "removetrack" !== e.type) || this.setTrack(this.findChaptersTrack()), t.prototype.update.call(this)
                }, e.prototype.setTrack = function (t) {
                    if (this.track_ !== t) {
                        if (this.updateHandler_ || (this.updateHandler_ = this.update.bind(this)), this.track_) {
                            var e = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
                            e && e.removeEventListener("load", this.updateHandler_), this.track_ = null
                        }
                        if (this.track_ = t, this.track_) {
                            this.track_.mode = "hidden";
                            var r = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
                            r && r.addEventListener("load", this.updateHandler_)
                        }
                    }
                }, e.prototype.findChaptersTrack = function () {
                    for (var t = this.player_.textTracks() || [], e = t.length - 1; e >= 0; e--) {
                        var r = t[e];
                        if (r.kind === this.kind_) return r
                    }
                }, e.prototype.getMenuCaption = function () {
                    return this.track_ && this.track_.label ? this.track_.label : this.localize((0, d["default"])(this.kind_))
                }, e.prototype.createMenu = function () {
                    return this.options_.title = this.getMenuCaption(), t.prototype.createMenu.call(this)
                }, e.prototype.createItems = function () {
                    var t = [];
                    if (!this.track_) return t;
                    var e = this.track_.cues;
                    if (!e) return t;
                    for (var r = 0, n = e.length; r < n; r++) {
                        var o = e[r], i = new f["default"](this.player_, {track: this.track_, cue: o});
                        t.push(i)
                    }
                    return t
                }, e
            }(l["default"]);
            y.prototype.kind_ = "chapters", y.prototype.controlText_ = "Chapters", c["default"].registerComponent("ChaptersButton", y), r["default"] = y
        }, {26: 26, 30: 30, 5: 5, 91: 91}],
        26: [function (t, e, r) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e["default"] = t, e
            }

            function o(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var l = t(48), u = o(l), c = t(5), p = o(c), f = t(83), h = n(f), d = function (t) {
                function e(r, n) {
                    i(this, e);
                    var o = n.track, a = n.cue, l = r.currentTime();
                    n.selectable = !0, n.label = a.text, n.selected = a.startTime <= l && l < a.endTime;
                    var u = s(this, t.call(this, r, n));
                    return u.track = o, u.cue = a, o.addEventListener("cuechange", h.bind(u, u.update)), u
                }

                return a(e, t), e.prototype.handleClick = function (e) {
                    t.prototype.handleClick.call(this), this.player_.currentTime(this.cue.startTime), this.update(this.cue.startTime)
                }, e.prototype.update = function (t) {
                    var e = this.cue, r = this.player_.currentTime();
                    this.selected(e.startTime <= r && r < e.endTime)
                }, e
            }(u["default"]);
            p["default"].registerComponent("ChaptersTrackMenuItem", d), r["default"] = d
        }, {48: 48, 5: 5, 83: 83}],
        27: [function (t, e, r) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e["default"] = t, e
            }

            function o(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var l = t(30), u = o(l), c = t(5), p = o(c), f = t(83), h = n(f), d = function (t) {
                function e(r, n, o) {
                    i(this, e);
                    var a = s(this, t.call(this, r, n, o));
                    a.el_.setAttribute("aria-label", "Descriptions Menu");
                    var l = r.textTracks();
                    return l && !function () {
                        var t = h.bind(a, a.handleTracksChange);
                        l.addEventListener("change", t), a.on("dispose", function () {
                            l.removeEventListener("change", t)
                        })
                    }(), a
                }

                return a(e, t), e.prototype.handleTracksChange = function (t) {
                    for (var e = this.player().textTracks(), r = !1, n = 0, o = e.length; n < o; n++) {
                        var i = e[n];
                        if (i.kind !== this.kind_ && "showing" === i.mode) {
                            r = !0;
                            break
                        }
                    }
                    r ? this.disable() : this.enable()
                }, e.prototype.buildCSSClass = function () {
                    return "vjs-descriptions-button " + t.prototype.buildCSSClass.call(this)
                }, e
            }(u["default"]);
            d.prototype.kind_ = "descriptions", d.prototype.controlText_ = "Descriptions", p["default"].registerComponent("DescriptionsButton", d), r["default"] = d
        }, {30: 30, 5: 5, 83: 83}],
        28: [function (t, e, r) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function o(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var a = t(31), l = n(a), u = t(5), c = n(u), p = function (t) {
                function e(r, n) {
                    o(this, e), n.track = {
                        player: r,
                        kind: n.kind,
                        label: n.kind + " off",
                        "default": !1,
                        mode: "disabled"
                    }, n.selectable = !0;
                    var s = i(this, t.call(this, r, n));
                    return s.selected(!0), s
                }

                return s(e, t), e.prototype.handleTracksChange = function (t) {
                    for (var e = this.player().textTracks(), r = !0, n = 0, o = e.length; n < o; n++) {
                        var i = e[n];
                        if (i.kind === this.track.kind && "showing" === i.mode) {
                            r = !1;
                            break
                        }
                    }
                    this.selected(r)
                }, e
            }(l["default"]);
            c["default"].registerComponent("OffTextTrackMenuItem", p), r["default"] = p
        }, {31: 31, 5: 5}],
        29: [function (t, e, r) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function o(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var a = t(30), l = n(a), u = t(5), c = n(u), p = function (t) {
                function e(r, n, s) {
                    o(this, e);
                    var a = i(this, t.call(this, r, n, s));
                    return a.el_.setAttribute("aria-label", "Subtitles Menu"), a
                }

                return s(e, t), e.prototype.buildCSSClass = function () {
                    return "vjs-subtitles-button " + t.prototype.buildCSSClass.call(this)
                }, e
            }(l["default"]);
            p.prototype.kind_ = "subtitles", p.prototype.controlText_ = "Subtitles", c["default"].registerComponent("SubtitlesButton", p), r["default"] = p
        }, {30: 30, 5: 5}],
        30: [function (t, e, r) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function o(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var a = t(36), l = n(a), u = t(5), c = n(u), p = t(31), f = n(p), h = t(28), d = n(h), y = function (t) {
                function e(r) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return o(this, e), n.tracks = r.textTracks(), i(this, t.call(this, r, n))
                }

                return s(e, t), e.prototype.createItems = function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    t.push(new d["default"](this.player_, {kind: this.kind_}));
                    var e = this.player_.textTracks();
                    if (!e) return t;
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r];
                        n.kind === this.kind_ && t.push(new f["default"](this.player_, {track: n, selectable: !0}))
                    }
                    return t
                }, e
            }(l["default"]);
            c["default"].registerComponent("TextTrackButton", y), r["default"] = y
        }, {28: 28, 31: 31, 36: 36, 5: 5}],
        31: [function (t, e, r) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e["default"] = t, e
            }

            function o(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, u = t(48), c = o(u), p = t(5), f = o(p), h = t(83), d = n(h), y = t(95), v = o(y), _ = t(94), g = o(_),
                b = function (t) {
                    function e(r, n) {
                        i(this, e);
                        var o = n.track, a = r.textTracks();
                        n.label = o.label || o.language || "Unknown", n.selected = o["default"] || "showing" === o.mode;
                        var u = s(this, t.call(this, r, n));
                        return u.track = o, a && !function () {
                            var t = d.bind(u, u.handleTracksChange);
                            a.addEventListener("change", t), u.on("dispose", function () {
                                a.removeEventListener("change", t)
                            })
                        }(), a && void 0 === a.onchange && !function () {
                            var t = void 0;
                            u.on(["tap", "click"], function () {
                                if ("object" !== l(v["default"].Event)) try {
                                    t = new v["default"].Event("change")
                                } catch (e) {
                                }
                                t || (t = g["default"].createEvent("Event"), t.initEvent("change", !0, !0)), a.dispatchEvent(t)
                            })
                        }(), u
                    }

                    return a(e, t), e.prototype.handleClick = function (e) {
                        var r = this.track.kind, n = this.player_.textTracks();
                        if (t.prototype.handleClick.call(this, e), n) for (var o = 0; o < n.length; o++) {
                            var i = n[o];
                            i.kind === r && (i === this.track ? i.mode = "showing" : i.mode = "disabled")
                        }
                    }, e.prototype.handleTracksChange = function (t) {
                        this.selected("showing" === this.track.mode)
                    }, e
                }(c["default"]);
            f["default"].registerComponent("TextTrackMenuItem", b), r["default"] = b
        }, {48: 48, 5: 5, 83: 83, 94: 94, 95: 95}],
        32: [function (t, e, r) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e["default"] = t, e
            }

            function o(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var l = t(5), u = o(l), c = t(81), p = n(c), f = t(84), h = o(f), d = function (t) {
                function e(r, n) {
                    i(this, e);
                    var o = s(this, t.call(this, r, n));
                    return o.on(r, "timeupdate", o.updateContent), o
                }

                return a(e, t), e.prototype.createEl = function () {
                    var e = t.prototype.createEl.call(this, "div", {className: "vjs-current-time vjs-time-control vjs-control"});
                    return this.contentEl_ = p.createEl("div", {
                        className: "vjs-current-time-display",
                        innerHTML: '<span class="vjs-control-text">Current Time </span>0:00'
                    }, {"aria-live": "off"}), e.appendChild(this.contentEl_), e
                }, e.prototype.updateContent = function (t) {
                    var e = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime(),
                        r = this.localize("Current Time"), n = (0, h["default"])(e, this.player_.duration());
                    n !== this.formattedTime_ && (this.formattedTime_ = n, this.contentEl_.innerHTML = '<span class="vjs-control-text">' + r + "</span> " + n)
                }, e
            }(u["default"]);
            u["default"].registerComponent("CurrentTimeDisplay", d), r["default"] = d
        }, {5: 5, 81: 81, 84: 84}],
        33: [function (t, e, r) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e["default"] = t, e
            }

            function o(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var l = t(5), u = o(l), c = t(81), p = n(c), f = t(84), h = o(f), d = function (t) {
                function e(r, n) {
                    i(this, e);
                    var o = s(this, t.call(this, r, n));
                    return o.on(r, "durationchange", o.updateContent), o.on(r, "timeupdate", o.updateContent), o.on(r, "loadedmetadata", o.updateContent), o
                }

                return a(e, t), e.prototype.createEl = function () {
                    var e = t.prototype.createEl.call(this, "div", {className: "vjs-duration vjs-time-control vjs-control"});
                    return this.contentEl_ = p.createEl("div", {
                        className: "vjs-duration-display",
                        innerHTML: '<span class="vjs-control-text">' + this.localize("Duration Time") + "</span> 0:00"
                    }, {"aria-live": "off"}), e.appendChild(this.contentEl_), e
                }, e.prototype.updateContent = function (t) {
                    var e = this.player_.duration();
                    if (e && this.duration_ !== e) {
                        this.duration_ = e;
                        var r = this.localize("Duration Time"), n = (0, h["default"])(e);
                        this.contentEl_.innerHTML = '<span class="vjs-control-text">' + r + "</span> " + n
                    }
                }, e
            }(u["default"]);
            u["default"].registerComponent("DurationDisplay", d), r["default"] = d
        }, {5: 5, 81: 81, 84: 84}],
        34: [function (t, e, r) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e["default"] = t, e
            }

            function o(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var l = t(5), u = o(l), c = t(81), p = n(c), f = t(84), h = o(f), d = function (t) {
                function e(r, n) {
                    i(this, e);
                    var o = s(this, t.call(this, r, n));
                    return o.on(r, "timeupdate", o.updateContent), o.on(r, "durationchange", o.updateContent), o
                }

                return a(e, t), e.prototype.createEl = function () {
                    var e = t.prototype.createEl.call(this, "div", {className: "vjs-remaining-time vjs-time-control vjs-control"});
                    return this.contentEl_ = p.createEl("div", {
                        className: "vjs-remaining-time-display",
                        innerHTML: '<span class="vjs-control-text">' + this.localize("Remaining Time") + "</span> -0:00"
                    }, {"aria-live": "off"}), e.appendChild(this.contentEl_), e
                }, e.prototype.updateContent = function (t) {
                    if (this.player_.duration()) {
                        var e = this.localize("Remaining Time"), r = (0, h["default"])(this.player_.remainingTime());
                        r !== this.formattedTime_ && (this.formattedTime_ = r, this.contentEl_.innerHTML = '<span class="vjs-control-text">' + e + "</span> -" + r)
                    }
                }, e
            }(u["default"]);
            u["default"].registerComponent("RemainingTimeDisplay", d), r["default"] = d
        }, {5: 5, 81: 81, 84: 84}],
        35: [function (t, e, r) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function o(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var a = t(5), l = n(a), u = function (t) {
                function e() {
                    return o(this, e), i(this, t.apply(this, arguments))
                }

                return s(e, t), e.prototype.createEl = function () {
                    return t.prototype.createEl.call(this, "div", {
                        className: "vjs-time-control vjs-time-divider",
                        innerHTML: "<div><span>/</span></div>"
                    })
                }, e
            }(l["default"]);
            l["default"].registerComponent("TimeDivider", u), r["default"] = u
        }, {5: 5}],
        36: [function (t, e, r) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e["default"] = t, e
            }

            function o(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var l = t(47), u = o(l), c = t(5), p = o(c), f = t(83), h = n(f), d = function (t) {
                function e(r, n) {
                    i(this, e);
                    var o = n.tracks, a = s(this, t.call(this, r, n));
                    if (a.items.length <= 1 && a.hide(), !o) return s(a);
                    var l = h.bind(a, a.update);
                    return o.addEventListener("removetrack", l), o.addEventListener("addtrack", l), a.player_.on("dispose", function () {
                        o.removeEventListener("removetrack", l), o.removeEventListener("addtrack", l)
                    }), a
                }

                return a(e, t), e
            }(u["default"]);
            p["default"].registerComponent("TrackButton", d), r["default"] = d
        }, {47: 47, 5: 5, 83: 83}],
        37: [function (t, e, r) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e["default"] = t, e
            }

            function o(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var l = t(57), u = o(l), c = t(5), p = o(c), f = t(83), h = n(f);
            t(39);
            var d = function (t) {
                function e(r, n) {
                    i(this, e);
                    var o = s(this, t.call(this, r, n));
                    return o.on(r, "volumechange", o.updateARIAAttributes), r.ready(h.bind(o, o.updateARIAAttributes)), o
                }

                return a(e, t), e.prototype.createEl = function () {
                    return t.prototype.createEl.call(this, "div", {className: "vjs-volume-bar vjs-slider-bar"}, {"aria-label": "volume level"})
                }, e.prototype.handleMouseMove = function (t) {
                    this.checkMuted(), this.player_.volume(this.calculateDistance(t))
                }, e.prototype.checkMuted = function () {
                    this.player_.muted() && this.player_.muted(!1)
                }, e.prototype.getPercent = function () {
                    return this.player_.muted() ? 0 : this.player_.volume()
                }, e.prototype.stepForward = function () {
                    this.checkMuted(), this.player_.volume(this.player_.volume() + .1)
                }, e.prototype.stepBack = function () {
                    this.checkMuted(), this.player_.volume(this.player_.volume() - .1)
                }, e.prototype.updateARIAAttributes = function (t) {
                    var e = (100 * this.player_.volume()).toFixed(2);
                    this.el_.setAttribute("aria-valuenow", e), this.el_.setAttribute("aria-valuetext", e + "%")
                }, e
            }(u["default"]);
            d.prototype.options_ = {
                children: ["volumeLevel"],
                barName: "volumeLevel"
            }, d.prototype.playerEvent = "volumechange", p["default"].registerComponent("VolumeBar", d), r["default"] = d
        }, {39: 39, 5: 5, 57: 57, 83: 83}],
        38: [function (t, e, r) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function o(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var a = t(5), l = n(a);
            t(37);
            var u = function (t) {
                function e(r, n) {
                    o(this, e);
                    var s = i(this, t.call(this, r, n));
                    return r.tech_ && r.tech_.featuresVolumeControl === !1 && s.addClass("vjs-hidden"), s.on(r, "loadstart", function () {
                        r.tech_.featuresVolumeControl === !1 ? this.addClass("vjs-hidden") : this.removeClass("vjs-hidden")
                    }), s
                }

                return s(e, t), e.prototype.createEl = function () {
                    return t.prototype.createEl.call(this, "div", {className: "vjs-volume-control vjs-control"})
                }, e
            }(l["default"]);
            u.prototype.options_ = {children: ["volumeBar"]}, l["default"].registerComponent("VolumeControl", u), r["default"] = u
        }, {37: 37, 5: 5}],
        39: [function (t, e, r) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function o(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var a = t(5), l = n(a), u = function (t) {
                function e() {
                    return o(this, e), i(this, t.apply(this, arguments))
                }

                return s(e, t), e.prototype.createEl = function () {
                    return t.prototype.createEl.call(this, "div", {
                        className: "vjs-volume-level",
                        innerHTML: '<span class="vjs-control-text"></span>'
                    })
                }, e
            }(l["default"]);
            l["default"].registerComponent("VolumeLevel", u), r["default"] = u
        }, {5: 5}],
        40: [function (t, e, r) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function o(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e["default"] = t, e
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var l = t(83), u = o(l), c = t(5), p = n(c), f = t(54), h = n(f), d = t(53), y = n(d), v = t(11), _ = n(v),
                g = t(37), b = n(g), m = function (t) {
                    function e(r) {
                        function n() {
                            r.tech_ && r.tech_.featuresVolumeControl === !1 ? this.addClass("vjs-hidden") : this.removeClass("vjs-hidden")
                        }

                        var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        i(this, e), void 0 === o.inline && (o.inline = !0), void 0 === o.vertical && (o.inline ? o.vertical = !1 : o.vertical = !0), o.volumeBar = o.volumeBar || {}, o.volumeBar.vertical = !!o.vertical;
                        var a = s(this, t.call(this, r, o));
                        return a.on(r, "volumechange", a.volumeUpdate), a.on(r, "loadstart", a.volumeUpdate), n.call(a), a.on(r, "loadstart", n), a.on(a.volumeBar, ["slideractive", "focus"], function () {
                            this.addClass("vjs-slider-active")
                        }), a.on(a.volumeBar, ["sliderinactive", "blur"], function () {
                            this.removeClass("vjs-slider-active")
                        }), a.on(a.volumeBar, ["focus"], function () {
                            this.addClass("vjs-lock-showing")
                        }), a.on(a.volumeBar, ["blur"], function () {
                            this.removeClass("vjs-lock-showing")
                        }), a
                    }

                    return a(e, t), e.prototype.buildCSSClass = function () {
                        var e = "";
                        return e = this.options_.vertical ? "vjs-volume-menu-button-vertical" : "vjs-volume-menu-button-horizontal", "vjs-volume-menu-button " + t.prototype.buildCSSClass.call(this) + " " + e
                    }, e.prototype.createPopup = function () {
                        var t = new h["default"](this.player_, {contentElType: "div"}),
                            e = new b["default"](this.player_, this.options_.volumeBar);
                        return t.addChild(e), this.menuContent = t, this.volumeBar = e, this.attachVolumeBarEvents(), t
                    }, e.prototype.handleClick = function (e) {
                        _["default"].prototype.handleClick.call(this), t.prototype.handleClick.call(this)
                    }, e.prototype.attachVolumeBarEvents = function () {
                        this.menuContent.on(["mousedown", "touchdown"], u.bind(this, this.handleMouseDown))
                    }, e.prototype.handleMouseDown = function (t) {
                        this.on(["mousemove", "touchmove"], u.bind(this.volumeBar, this.volumeBar.handleMouseMove)), this.on(this.el_.ownerDocument, ["mouseup", "touchend"], this.handleMouseUp)
                    }, e.prototype.handleMouseUp = function (t) {
                        this.off(["mousemove", "touchmove"], u.bind(this.volumeBar, this.volumeBar.handleMouseMove))
                    }, e
                }(y["default"]);
            m.prototype.volumeUpdate = _["default"].prototype.update, m.prototype.controlText_ = "Mute", p["default"].registerComponent("VolumeMenuButton", m), r["default"] = m
        }, {11: 11, 37: 37, 5: 5, 53: 53, 54: 54, 83: 83}],
        41: [function (t, e, r) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function o(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var a = t(5), l = n(a), u = t(50), c = n(u), p = t(87), f = n(p), h = function (t) {
                function e(r, n) {
                    o(this, e);
                    var s = i(this, t.call(this, r, n));
                    return s.on(r, "error", s.open), s
                }

                return s(e, t), e.prototype.buildCSSClass = function () {
                    return "vjs-error-display " + t.prototype.buildCSSClass.call(this)
                }, e.prototype.content = function () {
                    var t = this.player().error();
                    return t ? this.localize(t.message) : ""
                }, e
            }(c["default"]);
            h.prototype.options_ = (0, f["default"])(c["default"].prototype.options_, {
                fillAlways: !0,
                temporary: !1,
                uncloseable: !0
            }), l["default"].registerComponent("ErrorDisplay", h), r["default"] = h
        }, {5: 5, 50: 50, 87: 87}],
        42: [function (t, e, r) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e["default"] = t, e
            }

            r.__esModule = !0;
            var o = t(82), i = n(o), s = function () {
            };
            s.prototype.allowedEvents_ = {}, s.prototype.on = function (t, e) {
                var r = this.addEventListener;
                this.addEventListener = function () {
                }, i.on(this, t, e), this.addEventListener = r
            }, s.prototype.addEventListener = s.prototype.on, s.prototype.off = function (t, e) {
                i.off(this, t, e)
            }, s.prototype.removeEventListener = s.prototype.off, s.prototype.one = function (t, e) {
                var r = this.addEventListener;
                this.addEventListener = function () {
                }, i.one(this, t, e), this.addEventListener = r
            }, s.prototype.trigger = function (t) {
                var e = t.type || t;
                "string" == typeof t && (t = {type: e}), t = i.fixEvent(t), this.allowedEvents_[e] && this["on" + e] && this["on" + e](t), i.trigger(this, t)
            }, s.prototype.dispatchEvent = s.prototype.trigger, r["default"] = s
        }, {82: 82}],
        43: [function (t, e, r) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            r.__esModule = !0;
            var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, i = t(86), s = n(i), a = t(88), l = function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof e ? "undefined" : o(e)));
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (t.super_ = e)
            }, u = function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = function () {
                    t.apply(this, arguments)
                }, n = {};
                (0, a.isObject)(e) ? ("function" == typeof e.init && (s["default"].warn("Constructor logic via init() is deprecated; please use constructor() instead."), e.constructor = e.init), e.constructor !== Object.prototype.constructor && (r = e.constructor), n = e) : "function" == typeof e && (r = e), l(r, t);
                for (var o in n) n.hasOwnProperty(o) && (r.prototype[o] = n[o]);
                return r
            };
            r["default"] = u
        }, {86: 86, 88: 88}],
        44: [function (t, e, r) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            r.__esModule = !0;
            for (var o = t(94), i = n(o), s = {}, a = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], l = a[0], u = void 0, c = 0; c < a.length; c++) if (a[c][1] in i["default"]) {
                u = a[c];
                break
            }
            if (u) for (var p = 0; p < u.length; p++) s[l[p]] = u[p];
            r["default"] = s
        }, {94: 94}],
        45: [function (t, e, r) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function o(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var a = t(5), l = n(a), u = function (t) {
                function e() {
                    return o(this, e), i(this, t.apply(this, arguments))
                }

                return s(e, t), e.prototype.createEl = function () {
                    return t.prototype.createEl.call(this, "div", {className: "vjs-loading-spinner", dir: "ltr"})
                }, e
            }(l["default"]);
            l["default"].registerComponent("LoadingSpinner", u), r["default"] = u
        }, {5: 5}],
        46: [function (t, e, r) {
            "use strict";

            function n(t) {
                return t instanceof n ? t : ("number" == typeof t ? this.code = t : "string" == typeof t ? this.message = t : (0, o.isObject)(t) && ("number" == typeof t.code && (this.code = t.code), (0, o.assign)(this, t)), void(this.message || (this.message = n.defaultMessages[this.code] || "")))
            }

            r.__esModule = !0;
            var o = t(88);
            n.prototype.code = 0, n.prototype.message = "", n.prototype.status = null, n.errorTypes = ["MEDIA_ERR_CUSTOM", "MEDIA_ERR_ABORTED", "MEDIA_ERR_NETWORK", "MEDIA_ERR_DECODE", "MEDIA_ERR_SRC_NOT_SUPPORTED", "MEDIA_ERR_ENCRYPTED"], n.defaultMessages = {
                1: "You aborted the media playback",
                2: "A network error caused the media download to fail part-way.",
                3: "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.",
                4: "The media could not be loaded, either because the server or network failed or because the format is not supported.",
                5: "The media is encrypted and we do not have the keys to decrypt it."
            };
            for (var i = 0; i < n.errorTypes.length; i++) n[n.errorTypes[i]] = i, n.prototype[n.errorTypes[i]] = i;
            r["default"] = n
        }, {88: 88}],
        47: [function (t, e, r) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e["default"] = t, e
            }

            function o(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var l = t(3), u = o(l), c = t(5), p = o(c), f = t(49), h = o(f), d = t(81), y = n(d), v = t(83), _ = n(v),
                g = t(91), b = o(g), m = function (t) {
                    function e(r) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        i(this, e);
                        var o = s(this, t.call(this, r, n));
                        return o.update(), o.enabled_ = !0, o.el_.setAttribute("aria-haspopup", "true"), o.el_.setAttribute("role", "menuitem"), o.on("keydown", o.handleSubmenuKeyPress), o
                    }

                    return a(e, t), e.prototype.update = function () {
                        var t = this.createMenu();
                        this.menu && this.removeChild(this.menu), this.menu = t, this.addChild(t), this.buttonPressed_ = !1, this.el_.setAttribute("aria-expanded", "false"), this.items && 0 === this.items.length ? this.hide() : this.items && this.items.length > 1 && this.show()
                    }, e.prototype.createMenu = function () {
                        var t = new h["default"](this.player_);
                        if (this.options_.title) {
                            var e = y.createEl("li", {
                                className: "vjs-menu-title",
                                innerHTML: (0, b["default"])(this.options_.title),
                                tabIndex: -1
                            });
                            t.children_.unshift(e), y.insertElFirst(e, t.contentEl())
                        }
                        if (this.items = this.createItems(), this.items) for (var r = 0; r < this.items.length; r++) t.addItem(this.items[r]);
                        return t
                    }, e.prototype.createItems = function () {
                    }, e.prototype.createEl = function () {
                        return t.prototype.createEl.call(this, "div", {className: this.buildCSSClass()})
                    }, e.prototype.buildCSSClass = function () {
                        var e = "vjs-menu-button";
                        return e += this.options_.inline === !0 ? "-inline" : "-popup", "vjs-menu-button " + e + " " + t.prototype.buildCSSClass.call(this)
                    }, e.prototype.handleClick = function (t) {
                        this.one(this.menu.contentEl(), "mouseleave", _.bind(this, function (t) {
                            this.unpressButton(), this.el_.blur()
                        })), this.buttonPressed_ ? this.unpressButton() : this.pressButton()
                    }, e.prototype.handleKeyPress = function (e) {
                        27 === e.which || 9 === e.which ? (this.buttonPressed_ && this.unpressButton(), 9 !== e.which && e.preventDefault()) : 38 === e.which || 40 === e.which ? this.buttonPressed_ || (this.pressButton(), e.preventDefault()) : t.prototype.handleKeyPress.call(this, e)
                    }, e.prototype.handleSubmenuKeyPress = function (t) {
                        27 !== t.which && 9 !== t.which || (this.buttonPressed_ && this.unpressButton(), 9 !== t.which && t.preventDefault())
                    }, e.prototype.pressButton = function () {
                        this.enabled_ && (this.buttonPressed_ = !0, this.menu.lockShowing(), this.el_.setAttribute("aria-expanded", "true"), this.menu.focus())
                    }, e.prototype.unpressButton = function () {
                        this.enabled_ && (this.buttonPressed_ = !1, this.menu.unlockShowing(), this.el_.setAttribute("aria-expanded", "false"), this.el_.focus())
                    }, e.prototype.disable = function () {
                        return this.buttonPressed_ = !1, this.menu.unlockShowing(), this.el_.setAttribute("aria-expanded", "false"), this.enabled_ = !1, t.prototype.disable.call(this)
                    }, e.prototype.enable = function () {
                        return this.enabled_ = !0, t.prototype.enable.call(this)
                    }, e
                }(u["default"]);
            p["default"].registerComponent("MenuButton", m), r["default"] = m
        }, {3: 3, 49: 49, 5: 5, 81: 81, 83: 83, 91: 91}],
        48: [function (t, e, r) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function o(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var a = t(3), l = n(a), u = t(5), c = n(u), p = t(88), f = function (t) {
                function e(r, n) {
                    o(this, e);
                    var s = i(this, t.call(this, r, n));
                    return s.selectable = n.selectable, s.selected(n.selected), s.selectable ? s.el_.setAttribute("role", "menuitemcheckbox") : s.el_.setAttribute("role", "menuitem"), s
                }

                return s(e, t), e.prototype.createEl = function (e, r, n) {
                    return t.prototype.createEl.call(this, "li", (0, p.assign)({
                        className: "vjs-menu-item",
                        innerHTML: this.localize(this.options_.label),
                        tabIndex: -1
                    }, r), n)
                }, e.prototype.handleClick = function (t) {
                    this.selected(!0)
                }, e.prototype.selected = function (t) {
                    this.selectable && (t ? (this.addClass("vjs-selected"), this.el_.setAttribute("aria-checked", "true"), this.controlText(", selected")) : (this.removeClass("vjs-selected"), this.el_.setAttribute("aria-checked", "false"), this.controlText(" ")))
                }, e
            }(l["default"]);
            c["default"].registerComponent("MenuItem", f), r["default"] = f
        }, {3: 3, 5: 5, 88: 88}],
        49: [function (t, e, r) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e["default"] = t, e
            }

            function o(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var l = t(5), u = o(l), c = t(81), p = n(c), f = t(83), h = n(f), d = t(82), y = n(d), v = function (t) {
                function e(r, n) {
                    i(this, e);
                    var o = s(this, t.call(this, r, n));
                    return o.focusedChild_ = -1, o.on("keydown", o.handleKeyPress), o
                }

                return a(e, t), e.prototype.addItem = function (t) {
                    this.addChild(t), t.on("click", h.bind(this, function (t) {
                        this.unlockShowing()
                    }))
                }, e.prototype.createEl = function () {
                    var e = this.options_.contentElType || "ul";
                    this.contentEl_ = p.createEl(e, {className: "vjs-menu-content"}), this.contentEl_.setAttribute("role", "menu");
                    var r = t.prototype.createEl.call(this, "div", {append: this.contentEl_, className: "vjs-menu"});
                    return r.setAttribute("role", "presentation"), r.appendChild(this.contentEl_), y.on(r, "click", function (t) {
                        t.preventDefault(), t.stopImmediatePropagation()
                    }), r
                }, e.prototype.handleKeyPress = function (t) {
                    37 === t.which || 40 === t.which ? (t.preventDefault(), this.stepForward()) : 38 !== t.which && 39 !== t.which || (t.preventDefault(), this.stepBack())
                }, e.prototype.stepForward = function () {
                    var t = 0;
                    void 0 !== this.focusedChild_ && (t = this.focusedChild_ + 1), this.focus(t)
                }, e.prototype.stepBack = function () {
                    var t = 0;
                    void 0 !== this.focusedChild_ && (t = this.focusedChild_ - 1), this.focus(t)
                }, e.prototype.focus = function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        e = this.children().slice(),
                        r = e.length && e[0].className && /vjs-menu-title/.test(e[0].className);
                    r && e.shift(), e.length > 0 && (t < 0 ? t = 0 : t >= e.length && (t = e.length - 1), this.focusedChild_ = t, e[t].el_.focus())
                }, e
            }(u["default"]);
            u["default"].registerComponent("Menu", v), r["default"] = v
        }, {5: 5, 81: 81, 82: 82, 83: 83}],
        50: [function (t, e, r) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function o(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e["default"] = t, e
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var l = t(81), u = o(l), c = t(83), p = o(c), f = t(5), h = n(f), d = "vjs-modal-dialog", y = 27,
                v = function (t) {
                    function e(r, n) {
                        i(this, e);
                        var o = s(this, t.call(this, r, n));
                        return o.opened_ = o.hasBeenOpened_ = o.hasBeenFilled_ = !1, o.closeable(!o.options_.uncloseable), o.content(o.options_.content), o.contentEl_ = u.createEl("div", {className: d + "-content"}, {role: "document"}), o.descEl_ = u.createEl("p", {
                            className: d + "-description vjs-offscreen",
                            id: o.el().getAttribute("aria-describedby")
                        }), u.textContent(o.descEl_, o.description()), o.el_.appendChild(o.descEl_), o.el_.appendChild(o.contentEl_), o
                    }

                    return a(e, t), e.prototype.createEl = function () {
                        return t.prototype.createEl.call(this, "div", {
                            className: this.buildCSSClass(),
                            tabIndex: -1
                        }, {
                            "aria-describedby": this.id() + "_description",
                            "aria-hidden": "true",
                            "aria-label": this.label(),
                            role: "dialog"
                        })
                    }, e.prototype.buildCSSClass = function () {
                        return d + " vjs-hidden " + t.prototype.buildCSSClass.call(this)
                    }, e.prototype.handleKeyPress = function (t) {
                        t.which === y && this.closeable() && this.close()
                    }, e.prototype.label = function () {
                        return this.options_.label || this.localize("Modal Window")
                    }, e.prototype.description = function () {
                        var t = this.options_.description || this.localize("This is a modal window.");
                        return this.closeable() && (t += " " + this.localize("This modal can be closed by pressing the Escape key or activating the close button.")), t
                    }, e.prototype.open = function () {
                        if (!this.opened_) {
                            var t = this.player();
                            this.trigger("beforemodalopen"), this.opened_ = !0, (this.options_.fillAlways || !this.hasBeenOpened_ && !this.hasBeenFilled_) && this.fill(), this.wasPlaying_ = !t.paused(), this.wasPlaying_ && t.pause(), this.closeable() && this.on(this.el_.ownerDocument, "keydown", p.bind(this, this.handleKeyPress)), t.controls(!1), this.show(), this.el().setAttribute("aria-hidden", "false"), this.trigger("modalopen"), this.hasBeenOpened_ = !0
                        }
                        return this
                    }, e.prototype.opened = function (t) {
                        return "boolean" == typeof t && this[t ? "open" : "close"](), this.opened_
                    }, e.prototype.close = function () {
                        if (this.opened_) {
                            var t = this.player();
                            this.trigger("beforemodalclose"), this.opened_ = !1, this.wasPlaying_ && t.play(), this.closeable() && this.off(this.el_.ownerDocument, "keydown", p.bind(this, this.handleKeyPress)), t.controls(!0), this.hide(), this.el().setAttribute("aria-hidden", "true"), this.trigger("modalclose"), this.options_.temporary && this.dispose()
                        }
                        return this
                    }, e.prototype.closeable = function r(t) {
                        if ("boolean" == typeof t) {
                            var r = this.closeable_ = !!t, e = this.getChild("closeButton");
                            if (r && !e) {
                                var n = this.contentEl_;
                                this.contentEl_ = this.el_, e = this.addChild("closeButton", {controlText: "Close Modal Dialog"}), this.contentEl_ = n, this.on(e, "close", this.close)
                            }
                            !r && e && (this.off(e, "close", this.close), this.removeChild(e), e.dispose())
                        }
                        return this.closeable_
                    }, e.prototype.fill = function () {
                        return this.fillWith(this.content())
                    }, e.prototype.fillWith = function (t) {
                        var e = this.contentEl(), r = e.parentNode, n = e.nextSibling;
                        return this.trigger("beforemodalfill"), this.hasBeenFilled_ = !0, r.removeChild(e), this.empty(), u.insertContent(e, t), this.trigger("modalfill"), n ? r.insertBefore(e, n) : r.appendChild(e), this
                    }, e.prototype.empty = function () {
                        return this.trigger("beforemodalempty"), u.emptyEl(this.contentEl()), this.trigger("modalempty"),
                            this
                    }, e.prototype.content = function (t) {
                        return "undefined" != typeof t && (this.content_ = t), this.content_
                    }, e
                }(h["default"]);
            v.prototype.options_ = {temporary: !0}, h["default"].registerComponent("ModalDialog", v), r["default"] = v
        }, {5: 5, 81: 81, 83: 83}],
        51: [function (t, e, r) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e["default"] = t, e
            }

            function o(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var l = t(5), u = o(l), c = t(94), p = o(c), f = t(95), h = o(f), d = t(82), y = n(d), v = t(81), _ = n(v),
                g = t(83), b = n(g), m = t(85), T = n(m), w = t(78), E = n(w), C = t(86), k = o(C), O = t(91), j = o(O),
                S = t(90), x = t(79), P = t(89), M = n(P), A = t(44), R = o(A), I = t(46), N = o(I), D = t(97),
                L = o(D), F = t(88), B = t(87), H = o(B), V = t(69), U = o(V), W = t(50), z = o(W), X = t(62), $ = o(X),
                q = t(63), G = o(q), Y = t(76), K = o(Y);
            t(61), t(59), t(55), t(68), t(45), t(1), t(4), t(8), t(41), t(71), t(60);
            var J = ["progress", "abort", "suspend", "emptied", "stalled", "loadedmetadata", "loadeddata", "timeupdate", "ratechange", "volumechange", "texttrackchange"],
                Q = function (t) {
                    function e(r, n, o) {
                        if (i(this, e), r.id = r.id || "vjs_video_" + T.newGUID(), n = (0, F.assign)(e.getTagSettings(r), n), n.initChildren = !1, n.createEl = !1, n.reportTouchActivity = !1, !n.language) if ("function" == typeof r.closest) {
                            var a = r.closest("[lang]");
                            a && (n.language = a.getAttribute("lang"))
                        } else for (var l = r; l && 1 === l.nodeType;) {
                            if (_.getElAttributes(l).hasOwnProperty("lang")) {
                                n.language = l.getAttribute("lang");
                                break
                            }
                            l = l.parentNode
                        }
                        var u = s(this, t.call(this, null, n, o));
                        if (!u.options_ || !u.options_.techOrder || !u.options_.techOrder.length) throw new Error("No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?");
                        u.tag = r, u.tagAttributes = r && _.getElAttributes(r), u.language(u.options_.language), n.languages ? !function () {
                            var t = {};
                            Object.getOwnPropertyNames(n.languages).forEach(function (e) {
                                t[e.toLowerCase()] = n.languages[e]
                            }), u.languages_ = t
                        }() : u.languages_ = e.prototype.options_.languages, u.cache_ = {}, u.poster_ = n.poster || "", u.controls_ = !!n.controls, r.controls = !1, u.scrubbing_ = !1, u.el_ = u.createEl();
                        var c = (0, H["default"])(u.options_);
                        return n.plugins && !function () {
                            var t = n.plugins;
                            Object.getOwnPropertyNames(t).forEach(function (e) {
                                "function" == typeof this[e] ? this[e](t[e]) : k["default"].error("Unable to find plugin:", e)
                            }, u)
                        }(), u.options_.playerOptions = c, u.initChildren(), u.isAudio("audio" === r.nodeName.toLowerCase()), u.controls() ? u.addClass("vjs-controls-enabled") : u.addClass("vjs-controls-disabled"), u.el_.setAttribute("role", "region"), u.isAudio() ? u.el_.setAttribute("aria-label", "audio player") : u.el_.setAttribute("aria-label", "video player"), u.isAudio() && u.addClass("vjs-audio"), u.flexNotSupported_() && u.addClass("vjs-no-flex"), E.IS_IOS || u.addClass("vjs-workinghover"), e.players[u.id_] = u, u.userActive(!0), u.reportUserActivity(), u.listenForUserActivity_(), u.on("fullscreenchange", u.handleFullscreenChange_), u.on("stageclick", u.handleStageClick_), u
                    }

                    return a(e, t), e.prototype.dispose = function () {
                        this.trigger("dispose"), this.off("dispose"), this.styleEl_ && this.styleEl_.parentNode && this.styleEl_.parentNode.removeChild(this.styleEl_), e.players[this.id_] = null, this.tag && this.tag.player && (this.tag.player = null), this.el_ && this.el_.player && (this.el_.player = null), this.tech_ && this.tech_.dispose(), t.prototype.dispose.call(this)
                    }, e.prototype.createEl = function () {
                        var e = this.tag, r = void 0,
                            n = this.playerElIngest_ = e.parentNode && e.parentNode.hasAttribute && e.parentNode.hasAttribute("data-vjs-player");
                        r = n ? this.el_ = e.parentNode : this.el_ = t.prototype.createEl.call(this, "div"), e.removeAttribute("width"), e.removeAttribute("height");
                        var o = _.getElAttributes(e);
                        if (Object.getOwnPropertyNames(o).forEach(function (t) {
                            "class" === t ? r.className += " " + o[t] : r.setAttribute(t, o[t])
                        }), e.playerId = e.id, e.id += "_html5_api", e.className = "vjs-tech", e.player = r.player = this, this.addClass("vjs-paused"), h["default"].VIDEOJS_NO_DYNAMIC_STYLE !== !0) {
                            this.styleEl_ = M.createStyleElement("vjs-styles-dimensions");
                            var i = _.$(".vjs-styles-defaults"), s = _.$("head");
                            s.insertBefore(this.styleEl_, i ? i.nextSibling : s.firstChild)
                        }
                        this.width(this.options_.width), this.height(this.options_.height), this.fluid(this.options_.fluid), this.aspectRatio(this.options_.aspectRatio);
                        for (var a = e.getElementsByTagName("a"), l = 0; l < a.length; l++) {
                            var u = a.item(l);
                            _.addElClass(u, "vjs-hidden"), u.setAttribute("hidden", "hidden")
                        }
                        return e.initNetworkState_ = e.networkState, e.parentNode && !n && e.parentNode.insertBefore(r, e), _.insertElFirst(e, r), this.children_.unshift(e), this.el_ = r, r
                    }, e.prototype.width = function (t) {
                        return this.dimension("width", t)
                    }, e.prototype.height = function (t) {
                        return this.dimension("height", t)
                    }, e.prototype.dimension = function (t, e) {
                        var r = t + "_";
                        if (void 0 === e) return this[r] || 0;
                        if ("" === e) this[r] = void 0; else {
                            var n = parseFloat(e);
                            if (isNaN(n)) return k["default"].error('Improper value "' + e + '" supplied for for ' + t), this;
                            this[r] = n
                        }
                        return this.updateStyleEl_(), this
                    }, e.prototype.fluid = function (t) {
                        return void 0 === t ? !!this.fluid_ : (this.fluid_ = !!t, t ? this.addClass("vjs-fluid") : this.removeClass("vjs-fluid"), void this.updateStyleEl_())
                    }, e.prototype.aspectRatio = function (t) {
                        if (void 0 === t) return this.aspectRatio_;
                        if (!/^\d+\:\d+$/.test(t)) throw new Error("Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.");
                        this.aspectRatio_ = t, this.fluid(!0), this.updateStyleEl_()
                    }, e.prototype.updateStyleEl_ = function () {
                        if (h["default"].VIDEOJS_NO_DYNAMIC_STYLE === !0) {
                            var t = "number" == typeof this.width_ ? this.width_ : this.options_.width,
                                e = "number" == typeof this.height_ ? this.height_ : this.options_.height,
                                r = this.tech_ && this.tech_.el();
                            return void(r && (t >= 0 && (r.width = t), e >= 0 && (r.height = e)))
                        }
                        var n = void 0, o = void 0, i = void 0, s = void 0;
                        i = void 0 !== this.aspectRatio_ && "auto" !== this.aspectRatio_ ? this.aspectRatio_ : this.videoWidth() > 0 ? this.videoWidth() + ":" + this.videoHeight() : "16:9";
                        var a = i.split(":"), l = a[1] / a[0];
                        n = void 0 !== this.width_ ? this.width_ : void 0 !== this.height_ ? this.height_ / l : this.videoWidth() || 300, o = void 0 !== this.height_ ? this.height_ : n * l, s = /^[^a-zA-Z]/.test(this.id()) ? "dimensions-" + this.id() : this.id() + "-dimensions", this.addClass(s), M.setTextContent(this.styleEl_, "\n      ." + s + " {\n        width: " + n + "px;\n        height: " + o + "px;\n      }\n\n      ." + s + ".vjs-fluid {\n        padding-top: " + 100 * l + "%;\n      }\n    ")
                    }, e.prototype.loadTech_ = function (t, e) {
                        var r = this;
                        this.tech_ && this.unloadTech_(), "Html5" !== t && this.tag && ($["default"].getTech("Html5").disposeMediaElement(this.tag), this.tag.player = null, this.tag = null), this.techName_ = t, this.isReady_ = !1;
                        var n = (0, F.assign)({
                            source: e,
                            nativeControlsForTouch: this.options_.nativeControlsForTouch,
                            playerId: this.id(),
                            techId: this.id() + "_" + t + "_api",
                            videoTracks: this.videoTracks_,
                            textTracks: this.textTracks_,
                            audioTracks: this.audioTracks_,
                            autoplay: this.options_.autoplay,
                            preload: this.options_.preload,
                            loop: this.options_.loop,
                            muted: this.options_.muted,
                            poster: this.poster(),
                            language: this.language(),
                            playerElIngest: this.playerElIngest_ || !1,
                            "vtt.js": this.options_["vtt.js"]
                        }, this.options_[t.toLowerCase()]);
                        this.tag && (n.tag = this.tag), e && (this.currentType_ = e.type, e.src === this.cache_.src && this.cache_.currentTime > 0 && (n.startTime = this.cache_.currentTime), this.cache_.sources = null, this.cache_.source = e, this.cache_.src = e.src);
                        var o = $["default"].getTech(t);
                        o || (o = u["default"].getComponent(t)), this.tech_ = new o(n), this.tech_.ready(b.bind(this, this.handleTechReady_), !0), U["default"].jsonToTextTracks(this.textTracksJson_ || [], this.tech_), J.forEach(function (t) {
                            r.on(r.tech_, t, r["handleTech" + (0, j["default"])(t) + "_"])
                        }), this.on(this.tech_, "loadstart", this.handleTechLoadStart_), this.on(this.tech_, "waiting", this.handleTechWaiting_), this.on(this.tech_, "canplay", this.handleTechCanPlay_), this.on(this.tech_, "canplaythrough", this.handleTechCanPlayThrough_), this.on(this.tech_, "playing", this.handleTechPlaying_), this.on(this.tech_, "ended", this.handleTechEnded_), this.on(this.tech_, "seeking", this.handleTechSeeking_), this.on(this.tech_, "seeked", this.handleTechSeeked_), this.on(this.tech_, "play", this.handleTechPlay_), this.on(this.tech_, "firstplay", this.handleTechFirstPlay_), this.on(this.tech_, "pause", this.handleTechPause_), this.on(this.tech_, "durationchange", this.handleTechDurationChange_), this.on(this.tech_, "fullscreenchange", this.handleTechFullscreenChange_), this.on(this.tech_, "error", this.handleTechError_), this.on(this.tech_, "loadedmetadata", this.updateStyleEl_), this.on(this.tech_, "posterchange", this.handleTechPosterChange_), this.on(this.tech_, "textdata", this.handleTechTextData_), this.usingNativeControls(this.techGet_("controls")), this.controls() && !this.usingNativeControls() && this.addTechControlsListeners_(), this.tech_.el().parentNode === this.el() || "Html5" === t && this.tag || _.insertElFirst(this.tech_.el(), this.el()), this.tag && (this.tag.player = null, this.tag = null)
                    }, e.prototype.unloadTech_ = function () {
                        this.videoTracks_ = this.videoTracks(), this.textTracks_ = this.textTracks(), this.audioTracks_ = this.audioTracks(), this.textTracksJson_ = U["default"].textTracksToJson(this.tech_), this.isReady_ = !1, this.tech_.dispose(), this.tech_ = !1
                    }, e.prototype.tech = function (t) {
                        if (t && t.IWillNotUseThisInPlugins) return this.tech_;
                        var e = "\n      Please make sure that you are not using this inside of a plugin.\n      To disable this alert and error, please pass in an object with\n      `IWillNotUseThisInPlugins` to the `tech` method. See\n      https://github.com/videojs/video.js/issues/2617 for more info.\n    ";
                        throw h["default"].alert(e), new Error(e)
                    }, e.prototype.addTechControlsListeners_ = function () {
                        this.removeTechControlsListeners_(), this.on(this.tech_, "mousedown", this.handleTechClick_), this.on(this.tech_, "touchstart", this.handleTechTouchStart_), this.on(this.tech_, "touchmove", this.handleTechTouchMove_), this.on(this.tech_, "touchend", this.handleTechTouchEnd_), this.on(this.tech_, "tap", this.handleTechTap_)
                    }, e.prototype.removeTechControlsListeners_ = function () {
                        this.off(this.tech_, "tap", this.handleTechTap_), this.off(this.tech_, "touchstart", this.handleTechTouchStart_), this.off(this.tech_, "touchmove", this.handleTechTouchMove_), this.off(this.tech_, "touchend", this.handleTechTouchEnd_), this.off(this.tech_, "mousedown", this.handleTechClick_)
                    }, e.prototype.handleTechReady_ = function () {
                        if (this.triggerReady(), this.cache_.volume && this.techCall_("setVolume", this.cache_.volume), this.handleTechPosterChange_(), this.handleTechDurationChange_(), (this.src() || this.currentSrc()) && this.tag && this.options_.autoplay && this.paused()) {
                            try {
                                delete this.tag.poster
                            } catch (t) {
                                (0, k["default"])("deleting tag.poster throws in some browsers", t)
                            }
                            this.play()
                        }
                    }, e.prototype.handleTechLoadStart_ = function () {
                        this.removeClass("vjs-ended"), this.removeClass("vjs-seeking"), this.error(null), this.paused() ? (this.hasStarted(!1), this.trigger("loadstart")) : (this.trigger("loadstart"), this.trigger("firstplay"))
                    }, e.prototype.hasStarted = function (t) {
                        return void 0 !== t ? (this.hasStarted_ !== t && (this.hasStarted_ = t, t ? (this.addClass("vjs-has-started"), this.trigger("firstplay")) : this.removeClass("vjs-has-started")), this) : !!this.hasStarted_
                    }, e.prototype.handleTechPlay_ = function () {
                        this.removeClass("vjs-ended"), this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.hasStarted(!0), this.trigger("play")
                    }, e.prototype.handleTechWaiting_ = function () {
                        var t = this;
                        this.addClass("vjs-waiting"), this.trigger("waiting"), this.one("timeupdate", function () {
                            return t.removeClass("vjs-waiting")
                        })
                    }, e.prototype.handleTechCanPlay_ = function () {
                        this.removeClass("vjs-waiting"), this.trigger("canplay")
                    }, e.prototype.handleTechCanPlayThrough_ = function () {
                        this.removeClass("vjs-waiting"), this.trigger("canplaythrough")
                    }, e.prototype.handleTechPlaying_ = function () {
                        this.removeClass("vjs-waiting"), this.trigger("playing")
                    }, e.prototype.handleTechSeeking_ = function () {
                        this.addClass("vjs-seeking"), this.trigger("seeking")
                    }, e.prototype.handleTechSeeked_ = function () {
                        this.removeClass("vjs-seeking"), this.trigger("seeked")
                    }, e.prototype.handleTechFirstPlay_ = function () {
                        this.options_.starttime && (k["default"].warn("Passing the `starttime` option to the player will be deprecated in 6.0"), this.currentTime(this.options_.starttime)), this.addClass("vjs-has-started"), this.trigger("firstplay")
                    }, e.prototype.handleTechPause_ = function () {
                        this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.trigger("pause")
                    }, e.prototype.handleTechEnded_ = function () {
                        this.addClass("vjs-ended"), this.options_.loop ? (this.currentTime(0), this.play()) : this.paused() || this.pause(), this.trigger("ended")
                    }, e.prototype.handleTechDurationChange_ = function () {
                        this.duration(this.techGet_("duration"))
                    }, e.prototype.handleTechClick_ = function (t) {
                        0 === t.button && this.controls() && (this.paused() ? this.play() : this.pause())
                    }, e.prototype.handleTechTap_ = function () {
                        this.userActive(!this.userActive())
                    }, e.prototype.handleTechTouchStart_ = function () {
                        this.userWasActive = this.userActive()
                    }, e.prototype.handleTechTouchMove_ = function () {
                        this.userWasActive && this.reportUserActivity()
                    }, e.prototype.handleTechTouchEnd_ = function (t) {
                        t.preventDefault()
                    }, e.prototype.handleFullscreenChange_ = function () {
                        this.isFullscreen() ? this.addClass("vjs-fullscreen") : this.removeClass("vjs-fullscreen")
                    }, e.prototype.handleStageClick_ = function () {
                        this.reportUserActivity()
                    }, e.prototype.handleTechFullscreenChange_ = function (t, e) {
                        e && this.isFullscreen(e.isFullscreen), this.trigger("fullscreenchange")
                    }, e.prototype.handleTechError_ = function () {
                        var t = this.tech_.error();
                        this.error(t)
                    }, e.prototype.handleTechTextData_ = function () {
                        var t = null;
                        arguments.length > 1 && (t = arguments[1]), this.trigger("textdata", t)
                    }, e.prototype.getCache = function () {
                        return this.cache_
                    }, e.prototype.techCall_ = function (t, e) {
                        if (this.tech_ && !this.tech_.isReady_) this.tech_.ready(function () {
                            this[t](e)
                        }, !0); else try {
                            this.tech_ && this.tech_[t](e)
                        } catch (r) {
                            throw(0, k["default"])(r), r
                        }
                    }, e.prototype.techGet_ = function (t) {
                        if (this.tech_ && this.tech_.isReady_) try {
                            return this.tech_[t]()
                        } catch (e) {
                            throw void 0 === this.tech_[t] ? (0, k["default"])("Video.js: " + t + " method not defined for " + this.techName_ + " playback technology.", e) : "TypeError" === e.name ? ((0, k["default"])("Video.js: " + t + " unavailable on " + this.techName_ + " playback technology element.", e), this.tech_.isReady_ = !1) : (0, k["default"])(e), e
                        }
                    }, e.prototype.play = function () {
                        return this.src() || this.currentSrc() ? this.techCall_("play") : this.tech_.one("loadstart", function () {
                            this.play()
                        }), this
                    }, e.prototype.pause = function () {
                        return this.techCall_("pause"), this
                    }, e.prototype.paused = function () {
                        return this.techGet_("paused") !== !1
                    }, e.prototype.scrubbing = function (t) {
                        return void 0 !== t ? (this.scrubbing_ = !!t, t ? this.addClass("vjs-scrubbing") : this.removeClass("vjs-scrubbing"), this) : this.scrubbing_
                    }, e.prototype.currentTime = function (t) {
                        return void 0 !== t ? (this.techCall_("setCurrentTime", t), this) : (this.cache_.currentTime = this.techGet_("currentTime") || 0, this.cache_.currentTime)
                    }, e.prototype.duration = function (t) {
                        return void 0 === t ? this.cache_.duration || 0 : (t = parseFloat(t) || 0, t < 0 && (t = 1 / 0), t !== this.cache_.duration && (this.cache_.duration = t, t === 1 / 0 ? this.addClass("vjs-live") : this.removeClass("vjs-live"), this.trigger("durationchange")), this)
                    }, e.prototype.remainingTime = function () {
                        return this.duration() - this.currentTime()
                    }, e.prototype.buffered = function r() {
                        var r = this.techGet_("buffered");
                        return r && r.length || (r = (0, S.createTimeRange)(0, 0)), r
                    }, e.prototype.bufferedPercent = function () {
                        return (0, x.bufferedPercent)(this.buffered(), this.duration())
                    }, e.prototype.bufferedEnd = function () {
                        var t = this.buffered(), e = this.duration(), r = t.end(t.length - 1);
                        return r > e && (r = e), r
                    }, e.prototype.volume = function (t) {
                        var e = void 0;
                        return void 0 !== t ? (e = Math.max(0, Math.min(1, parseFloat(t))), this.cache_.volume = e, this.techCall_("setVolume", e), this) : (e = parseFloat(this.techGet_("volume")), isNaN(e) ? 1 : e)
                    }, e.prototype.muted = function (t) {
                        return void 0 !== t ? (this.techCall_("setMuted", t), this) : this.techGet_("muted") || !1
                    }, e.prototype.supportsFullScreen = function () {
                        return this.techGet_("supportsFullScreen") || !1
                    }, e.prototype.isFullscreen = function (t) {
                        return void 0 !== t ? (this.isFullscreen_ = !!t, this) : !!this.isFullscreen_
                    }, e.prototype.requestFullscreen = function () {
                        var t = R["default"];
                        return this.isFullscreen(!0), t.requestFullscreen ? (y.on(p["default"], t.fullscreenchange, b.bind(this, function e(r) {
                            this.isFullscreen(p["default"][t.fullscreenElement]), this.isFullscreen() === !1 && y.off(p["default"], t.fullscreenchange, e), this.trigger("fullscreenchange")
                        })), this.el_[t.requestFullscreen]()) : this.tech_.supportsFullScreen() ? this.techCall_("enterFullScreen") : (this.enterFullWindow(), this.trigger("fullscreenchange")), this
                    }, e.prototype.exitFullscreen = function () {
                        var t = R["default"];
                        return this.isFullscreen(!1), t.requestFullscreen ? p["default"][t.exitFullscreen]() : this.tech_.supportsFullScreen() ? this.techCall_("exitFullScreen") : (this.exitFullWindow(), this.trigger("fullscreenchange")), this
                    }, e.prototype.enterFullWindow = function () {
                        this.isFullWindow = !0, this.docOrigOverflow = p["default"].documentElement.style.overflow, y.on(p["default"], "keydown", b.bind(this, this.fullWindowOnEscKey)), p["default"].documentElement.style.overflow = "hidden", _.addElClass(p["default"].body, "vjs-full-window"), this.trigger("enterFullWindow")
                    }, e.prototype.fullWindowOnEscKey = function (t) {
                        27 === t.keyCode && (this.isFullscreen() === !0 ? this.exitFullscreen() : this.exitFullWindow())
                    }, e.prototype.exitFullWindow = function () {
                        this.isFullWindow = !1, y.off(p["default"], "keydown", this.fullWindowOnEscKey), p["default"].documentElement.style.overflow = this.docOrigOverflow, _.removeElClass(p["default"].body, "vjs-full-window"), this.trigger("exitFullWindow")
                    }, e.prototype.canPlayType = function (t) {
                        for (var e = void 0, r = 0, n = this.options_.techOrder; r < n.length; r++) {
                            var o = (0, j["default"])(n[r]), i = $["default"].getTech(o);
                            if (i || (i = u["default"].getComponent(o)), i) {
                                if (i.isSupported() && (e = i.canPlayType(t))) return e
                            } else k["default"].error('The "' + o + '" tech is undefined. Skipped browser support check for that tech.')
                        }
                        return ""
                    }, e.prototype.selectSource = function (t) {
                        var e = this, r = this.options_.techOrder.map(j["default"]).map(function (t) {
                            return [t, $["default"].getTech(t) || u["default"].getComponent(t)]
                        }).filter(function (t) {
                            var e = t[0], r = t[1];
                            return r ? r.isSupported() : (k["default"].error('The "' + e + '" tech is undefined. Skipped browser support check for that tech.'), !1)
                        }), n = function (t, e, r) {
                            var n = void 0;
                            return t.some(function (t) {
                                return e.some(function (e) {
                                    if (n = r(t, e)) return !0
                                })
                            }), n
                        }, o = void 0, i = function (t) {
                            return function (e, r) {
                                return t(r, e)
                            }
                        }, s = function (t, r) {
                            var n = t[0], o = t[1];
                            if (o.canPlaySource(r, e.options_[n.toLowerCase()])) return {source: r, tech: n}
                        };
                        return o = this.options_.sourceOrder ? n(t, r, i(s)) : n(r, t, s), o || !1
                    }, e.prototype.src = function (t) {
                        if (void 0 === t) return this.techGet_("src");
                        var e = $["default"].getTech(this.techName_);
                        return e || (e = u["default"].getComponent(this.techName_)), Array.isArray(t) ? this.sourceList_(t) : "string" == typeof t ? this.src({src: t}) : t instanceof Object && (t.type && !e.canPlaySource(t, this.options_[this.techName_.toLowerCase()]) ? this.sourceList_([t]) : (this.cache_.sources = null, this.cache_.source = t, this.cache_.src = t.src, this.currentType_ = t.type || "", this.ready(function () {
                            e.prototype.hasOwnProperty("setSource") ? this.techCall_("setSource", t) : this.techCall_("src", t.src), "auto" === this.options_.preload && this.load(), this.options_.autoplay && this.play()
                        }, !0))), this
                    }, e.prototype.sourceList_ = function (t) {
                        var e = this.selectSource(t);
                        e ? (e.tech === this.techName_ ? this.src(e.source) : this.loadTech_(e.tech, e.source), this.cache_.sources = t) : (this.setTimeout(function () {
                            this.error({code: 4, message: this.localize(this.options_.notSupportedMessage)})
                        }, 0), this.triggerReady())
                    }, e.prototype.load = function () {
                        return this.techCall_("load"), this
                    }, e.prototype.reset = function () {
                        return this.loadTech_((0, j["default"])(this.options_.techOrder[0]), null), this.techCall_("reset"), this
                    }, e.prototype.currentSources = function () {
                        var t = this.currentSource(), e = [];
                        return 0 !== Object.keys(t).length && e.push(t), this.cache_.sources || e
                    }, e.prototype.currentSource = function () {
                        var t = {}, e = this.currentSrc();
                        return e && (t.src = e), this.cache_.source || t
                    }, e.prototype.currentSrc = function () {
                        return this.techGet_("currentSrc") || this.cache_.src || ""
                    }, e.prototype.currentType = function () {
                        return this.currentType_ || ""
                    }, e.prototype.preload = function (t) {
                        return void 0 !== t ? (this.techCall_("setPreload", t), this.options_.preload = t, this) : this.techGet_("preload")
                    }, e.prototype.autoplay = function (t) {
                        return void 0 !== t ? (this.techCall_("setAutoplay", t), this.options_.autoplay = t, this) : this.techGet_("autoplay", t)
                    }, e.prototype.loop = function (t) {
                        return void 0 !== t ? (this.techCall_("setLoop", t), this.options_.loop = t, this) : this.techGet_("loop")
                    }, e.prototype.poster = function (t) {
                        return void 0 === t ? this.poster_ : (t || (t = ""), this.poster_ = t, this.techCall_("setPoster", t), this.trigger("posterchange"), this)
                    }, e.prototype.handleTechPosterChange_ = function () {
                        !this.poster_ && this.tech_ && this.tech_.poster && (this.poster_ = this.tech_.poster() || "", this.trigger("posterchange"))
                    }, e.prototype.controls = function (t) {
                        return void 0 !== t ? (t = !!t, this.controls_ !== t && (this.controls_ = t, this.usingNativeControls() && this.techCall_("setControls", t), t ? (this.removeClass("vjs-controls-disabled"), this.addClass("vjs-controls-enabled"), this.trigger("controlsenabled"), this.usingNativeControls() || this.addTechControlsListeners_()) : (this.removeClass("vjs-controls-enabled"), this.addClass("vjs-controls-disabled"), this.trigger("controlsdisabled"), this.usingNativeControls() || this.removeTechControlsListeners_())), this) : !!this.controls_
                    }, e.prototype.usingNativeControls = function (t) {
                        return void 0 !== t ? (t = !!t, this.usingNativeControls_ !== t && (this.usingNativeControls_ = t, t ? (this.addClass("vjs-using-native-controls"), this.trigger("usingnativecontrols")) : (this.removeClass("vjs-using-native-controls"), this.trigger("usingcustomcontrols"))), this) : !!this.usingNativeControls_
                    }, e.prototype.error = function (t) {
                        return void 0 === t ? this.error_ || null : null === t ? (this.error_ = t, this.removeClass("vjs-error"), this.errorDisplay && this.errorDisplay.close(), this) : (this.error_ = new N["default"](t), this.addClass("vjs-error"), k["default"].error("(CODE:" + this.error_.code + " " + N["default"].errorTypes[this.error_.code] + ")", this.error_.message, this.error_), this.trigger("error"), this)
                    }, e.prototype.reportUserActivity = function (t) {
                        this.userActivity_ = !0
                    }, e.prototype.userActive = function (t) {
                        return void 0 !== t ? (t = !!t, t !== this.userActive_ && (this.userActive_ = t, t ? (this.userActivity_ = !0, this.removeClass("vjs-user-inactive"), this.addClass("vjs-user-active"), this.trigger("useractive")) : (this.userActivity_ = !1, this.tech_ && this.tech_.one("mousemove", function (t) {
                            t.stopPropagation(), t.preventDefault()
                        }), this.removeClass("vjs-user-active"), this.addClass("vjs-user-inactive"), this.trigger("userinactive"))), this) : this.userActive_
                    }, e.prototype.listenForUserActivity_ = function () {
                        var t = void 0, e = void 0, r = void 0, n = b.bind(this, this.reportUserActivity),
                            o = function (t) {
                                t.screenX === e && t.screenY === r || (e = t.screenX, r = t.screenY, n())
                            }, i = function () {
                                n(), this.clearInterval(t), t = this.setInterval(n, 250)
                            }, s = function (e) {
                                n(), this.clearInterval(t)
                            };
                        this.on("mousedown", i), this.on("mousemove", o), this.on("mouseup", s), this.on("keydown", n), this.on("keyup", n);
                        var a = void 0;
                        this.setInterval(function () {
                            if (this.userActivity_) {
                                this.userActivity_ = !1, this.userActive(!0), this.clearTimeout(a);
                                var t = this.options_.inactivityTimeout;
                                t > 0 && (a = this.setTimeout(function () {
                                    this.userActivity_ || this.userActive(!1)
                                }, t))
                            }
                        }, 250)
                    }, e.prototype.playbackRate = function (t) {
                        return void 0 !== t ? (this.techCall_("setPlaybackRate", t), this) : this.tech_ && this.tech_.featuresPlaybackRate ? this.techGet_("playbackRate") : 1
                    }, e.prototype.isAudio = function (t) {
                        return void 0 !== t ? (this.isAudio_ = !!t, this) : !!this.isAudio_
                    }, e.prototype.videoTracks = function () {
                        return this.tech_ ? this.tech_.videoTracks() : (this.videoTracks_ = this.videoTracks_ || new K["default"], this.videoTracks_)
                    }, e.prototype.audioTracks = function () {
                        return this.tech_ ? this.tech_.audioTracks() : (this.audioTracks_ = this.audioTracks_ || new G["default"], this.audioTracks_)
                    }, e.prototype.textTracks = function () {
                        if (this.tech_) return this.tech_.textTracks()
                    }, e.prototype.remoteTextTracks = function () {
                        if (this.tech_) return this.tech_.remoteTextTracks()
                    }, e.prototype.remoteTextTrackEls = function () {
                        if (this.tech_) return this.tech_.remoteTextTrackEls()
                    }, e.prototype.addTextTrack = function (t, e, r) {
                        if (this.tech_) return this.tech_.addTextTrack(t, e, r)
                    }, e.prototype.addRemoteTextTrack = function (t, e) {
                        if (this.tech_) return this.tech_.addRemoteTextTrack(t, e)
                    }, e.prototype.removeRemoteTextTrack = function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = t.track,
                            r = void 0 === e ? arguments[0] : e;
                        if (this.tech_) return this.tech_.removeRemoteTextTrack(r)
                    }, e.prototype.videoWidth = function () {
                        return this.tech_ && this.tech_.videoWidth && this.tech_.videoWidth() || 0
                    }, e.prototype.videoHeight = function () {
                        return this.tech_ && this.tech_.videoHeight && this.tech_.videoHeight() || 0
                    }, e.prototype.language = function (t) {
                        return void 0 === t ? this.language_ : (this.language_ = String(t).toLowerCase(), this)
                    }, e.prototype.languages = function () {
                        return (0, H["default"])(e.prototype.options_.languages, this.languages_)
                    }, e.prototype.toJSON = function () {
                        var t = (0, H["default"])(this.options_), e = t.tracks;
                        t.tracks = [];
                        for (var r = 0; r < e.length; r++) {
                            var n = e[r];
                            n = (0, H["default"])(n), n.player = void 0, t.tracks[r] = n
                        }
                        return t
                    }, e.prototype.createModal = function (t, e) {
                        var r = this;
                        e = e || {}, e.content = t || "";
                        var n = new z["default"](this, e);
                        return this.addChild(n), n.on("dispose", function () {
                            r.removeChild(n)
                        }), n.open()
                    }, e.getTagSettings = function (t) {
                        var e = {sources: [], tracks: []}, r = _.getElAttributes(t), n = r["data-setup"];
                        if (_.hasElClass(t, "vjs-fluid") && (r.fluid = !0), null !== n) {
                            var o = (0, L["default"])(n || "{}"), i = o[0], s = o[1];
                            i && k["default"].error(i), (0, F.assign)(r, s)
                        }
                        if ((0, F.assign)(e, r), t.hasChildNodes()) for (var a = t.childNodes, l = 0, u = a.length; l < u; l++) {
                            var c = a[l], p = c.nodeName.toLowerCase();
                            "source" === p ? e.sources.push(_.getElAttributes(c)) : "track" === p && e.tracks.push(_.getElAttributes(c))
                        }
                        return e
                    }, e.prototype.flexNotSupported_ = function () {
                        var t = p["default"].createElement("i");
                        return !("flexBasis" in t.style || "webkitFlexBasis" in t.style || "mozFlexBasis" in t.style || "msFlexBasis" in t.style || "msFlexOrder" in t.style)
                    }, e
                }(u["default"]);
            Q.players = {};
            var Z = h["default"].navigator;
            Q.prototype.options_ = {
                techOrder: ["html5", "flash"],
                html5: {},
                flash: {},
                defaultVolume: 0,
                inactivityTimeout: 2e3,
                playbackRates: [],
                children: ["mediaLoader", "posterImage", "textTrackDisplay", "loadingSpinner", "bigPlayButton", "controlBar", "errorDisplay", "textTrackSettings"],
                language: Z && (Z.languages && Z.languages[0] || Z.userLanguage || Z.language) || "en",
                languages: {},
                notSupportedMessage: "No compatible source was found for this media."
            }, ["ended", "seeking", "seekable", "networkState", "readyState"].forEach(function (t) {
                Q.prototype[t] = function () {
                    return this.techGet_(t)
                }
            }), J.forEach(function (t) {
                Q.prototype["handleTech" + (0, j["default"])(t) + "_"] = function () {
                    return this.trigger(t)
                }
            }), u["default"].registerComponent("Player", Q), r["default"] = Q
        }, {
            1: 1,
            4: 4,
            41: 41,
            44: 44,
            45: 45,
            46: 46,
            5: 5,
            50: 50,
            55: 55,
            59: 59,
            60: 60,
            61: 61,
            62: 62,
            63: 63,
            68: 68,
            69: 69,
            71: 71,
            76: 76,
            78: 78,
            79: 79,
            8: 8,
            81: 81,
            82: 82,
            83: 83,
            85: 85,
            86: 86,
            87: 87,
            88: 88,
            89: 89,
            90: 90,
            91: 91,
            94: 94,
            95: 95,
            97: 97
        }],
        52: [function (t, e, r) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            r.__esModule = !0;
            var o = t(51), i = n(o), s = function (t, e) {
                i["default"].prototype[t] = e
            };
            r["default"] = s
        }, {51: 51}],
        53: [function (t, e, r) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function o(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var a = t(3), l = n(a), u = t(5), c = n(u), p = function (t) {
                function e(r) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    o(this, e);
                    var s = i(this, t.call(this, r, n));
                    return s.update(), s
                }

                return s(e, t), e.prototype.update = function () {
                    var t = this.createPopup();
                    this.popup && this.removeChild(this.popup), this.popup = t, this.addChild(t), this.items && 0 === this.items.length ? this.hide() : this.items && this.items.length > 1 && this.show()
                }, e.prototype.createPopup = function () {
                }, e.prototype.createEl = function () {
                    return t.prototype.createEl.call(this, "div", {className: this.buildCSSClass()})
                }, e.prototype.buildCSSClass = function () {
                    var e = "vjs-menu-button";
                    return e += this.options_.inline === !0 ? "-inline" : "-popup", "vjs-menu-button " + e + " " + t.prototype.buildCSSClass.call(this)
                }, e
            }(l["default"]);
            c["default"].registerComponent("PopupButton", p), r["default"] = p
        }, {3: 3, 5: 5}],
        54: [function (t, e, r) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e["default"] = t, e
            }

            function o(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var l = t(5), u = o(l), c = t(81), p = n(c), f = t(83), h = n(f), d = t(82), y = n(d), v = function (t) {
                function e() {
                    return i(this, e), s(this, t.apply(this, arguments))
                }

                return a(e, t), e.prototype.addItem = function (t) {
                    this.addChild(t), t.on("click", h.bind(this, function () {
                        this.unlockShowing()
                    }))
                }, e.prototype.createEl = function () {
                    var e = this.options_.contentElType || "ul";
                    this.contentEl_ = p.createEl(e, {className: "vjs-menu-content"});
                    var r = t.prototype.createEl.call(this, "div", {append: this.contentEl_, className: "vjs-menu"});
                    return r.appendChild(this.contentEl_), y.on(r, "click", function (t) {
                        t.preventDefault(), t.stopImmediatePropagation()
                    }), r
                }, e
            }(u["default"]);
            u["default"].registerComponent("Popup", v), r["default"] = v
        }, {5: 5, 81: 81, 82: 82, 83: 83}],
        55: [function (t, e, r) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e["default"] = t, e
            }

            function o(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var l = t(3), u = o(l), c = t(5), p = o(c), f = t(83), h = n(f), d = t(81), y = n(d), v = t(78), _ = n(v),
                g = function (t) {
                    function e(r, n) {
                        i(this, e);
                        var o = s(this, t.call(this, r, n));
                        return o.update(), r.on("posterchange", h.bind(o, o.update)), o
                    }

                    return a(e, t), e.prototype.dispose = function () {
                        this.player().off("posterchange", this.update), t.prototype.dispose.call(this)
                    }, e.prototype.createEl = function () {
                        var t = y.createEl("div", {className: "vjs-poster", tabIndex: -1});
                        return _.BACKGROUND_SIZE_SUPPORTED || (this.fallbackImg_ = y.createEl("img"), t.appendChild(this.fallbackImg_)),
                            t
                    }, e.prototype.update = function (t) {
                        var e = this.player().poster();
                        this.setSrc(e), e ? this.show() : this.hide()
                    }, e.prototype.setSrc = function (t) {
                        if (this.fallbackImg_) this.fallbackImg_.src = t; else {
                            var e = "";
                            t && (e = 'url("' + t + '")'), this.el_.style.backgroundImage = e
                        }
                    }, e.prototype.handleClick = function (t) {
                        this.player_.controls() && (this.player_.paused() ? this.player_.play() : this.player_.pause())
                    }, e
                }(u["default"]);
            p["default"].registerComponent("PosterImage", g), r["default"] = g
        }, {3: 3, 5: 5, 78: 78, 81: 81, 83: 83}],
        56: [function (t, e, r) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function o(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e["default"] = t, e
            }

            function i(t, e) {
                e && (y = e), h["default"].setTimeout(v, t)
            }

            r.__esModule = !0, r.hasLoaded = r.autoSetupTimeout = r.autoSetup = void 0;
            var s = t(81), a = o(s), l = t(82), u = o(l), c = t(94), p = n(c), f = t(95), h = n(f), d = !1, y = void 0,
                v = function () {
                    if (a.isReal()) {
                        var t = p["default"].getElementsByTagName("video"),
                            e = p["default"].getElementsByTagName("audio"), r = [];
                        if (t && t.length > 0) for (var n = 0, o = t.length; n < o; n++) r.push(t[n]);
                        if (e && e.length > 0) for (var s = 0, l = e.length; s < l; s++) r.push(e[s]);
                        if (r && r.length > 0) for (var u = 0, c = r.length; u < c; u++) {
                            var f = r[u];
                            if (!f || !f.getAttribute) {
                                i(1);
                                break
                            }
                            if (void 0 === f.player) {
                                var h = f.getAttribute("data-setup");
                                null !== h && y(f)
                            }
                        } else d || i(1)
                    }
                };
            a.isReal() && "complete" === p["default"].readyState ? d = !0 : u.one(h["default"], "load", function () {
                d = !0
            });
            var _ = function () {
                return d
            };
            r.autoSetup = v, r.autoSetupTimeout = i, r.hasLoaded = _
        }, {81: 81, 82: 82, 94: 94, 95: 95}],
        57: [function (t, e, r) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e["default"] = t, e
            }

            function o(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var l = t(5), u = o(l), c = t(81), p = n(c), f = t(88), h = function (t) {
                function e(r, n) {
                    i(this, e);
                    var o = s(this, t.call(this, r, n));
                    return o.bar = o.getChild(o.options_.barName), o.vertical(!!o.options_.vertical), o.on("mousedown", o.handleMouseDown), o.on("touchstart", o.handleMouseDown), o.on("focus", o.handleFocus), o.on("blur", o.handleBlur), o.on("click", o.handleClick), o.on(r, "controlsvisible", o.update), o.on(r, o.playerEvent, o.update), o
                }

                return a(e, t), e.prototype.createEl = function (e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return r.className = r.className + " vjs-slider", r = (0, f.assign)({tabIndex: 0}, r), n = (0, f.assign)({
                        role: "slider",
                        "aria-valuenow": 0,
                        "aria-valuemin": 0,
                        "aria-valuemax": 100,
                        tabIndex: 0
                    }, n), t.prototype.createEl.call(this, e, r, n)
                }, e.prototype.handleMouseDown = function (t) {
                    var e = this.bar.el_.ownerDocument;
                    t.preventDefault(), p.blockTextSelection(), this.addClass("vjs-sliding"), this.trigger("slideractive"), this.on(e, "mousemove", this.handleMouseMove), this.on(e, "mouseup", this.handleMouseUp), this.on(e, "touchmove", this.handleMouseMove), this.on(e, "touchend", this.handleMouseUp), this.handleMouseMove(t)
                }, e.prototype.handleMouseMove = function (t) {
                }, e.prototype.handleMouseUp = function () {
                    var t = this.bar.el_.ownerDocument;
                    p.unblockTextSelection(), this.removeClass("vjs-sliding"), this.trigger("sliderinactive"), this.off(t, "mousemove", this.handleMouseMove), this.off(t, "mouseup", this.handleMouseUp), this.off(t, "touchmove", this.handleMouseMove), this.off(t, "touchend", this.handleMouseUp), this.update()
                }, e.prototype.update = function () {
                    if (this.el_) {
                        var t = this.getPercent(), e = this.bar;
                        if (e) {
                            ("number" != typeof t || t !== t || t < 0 || t === 1 / 0) && (t = 0);
                            var r = (100 * t).toFixed(2) + "%";
                            this.vertical() ? e.el().style.height = r : e.el().style.width = r
                        }
                    }
                }, e.prototype.calculateDistance = function (t) {
                    var e = p.getPointerPosition(this.el_, t);
                    return this.vertical() ? e.y : e.x
                }, e.prototype.handleFocus = function () {
                    this.on(this.bar.el_.ownerDocument, "keydown", this.handleKeyPress)
                }, e.prototype.handleKeyPress = function (t) {
                    37 === t.which || 40 === t.which ? (t.preventDefault(), this.stepBack()) : 38 !== t.which && 39 !== t.which || (t.preventDefault(), this.stepForward())
                }, e.prototype.handleBlur = function () {
                    this.off(this.bar.el_.ownerDocument, "keydown", this.handleKeyPress)
                }, e.prototype.handleClick = function (t) {
                    t.stopImmediatePropagation(), t.preventDefault()
                }, e.prototype.vertical = function (t) {
                    return void 0 === t ? this.vertical_ || !1 : (this.vertical_ = !!t, this.vertical_ ? this.addClass("vjs-slider-vertical") : this.addClass("vjs-slider-horizontal"), this)
                }, e
            }(u["default"]);
            u["default"].registerComponent("Slider", h), r["default"] = h
        }, {5: 5, 81: 81, 88: 88}],
        58: [function (t, e, r) {
            "use strict";

            function n(t) {
                return t.streamingFormats = {
                    "rtmp/mp4": "MP4",
                    "rtmp/flv": "FLV"
                }, t.streamFromParts = function (t, e) {
                    return t + "&" + e
                }, t.streamToParts = function (t) {
                    var e = {connection: "", stream: ""};
                    if (!t) return e;
                    var r = t.search(/&(?!\w+=)/), n = void 0;
                    return r !== -1 ? n = r + 1 : (r = n = t.lastIndexOf("/") + 1, 0 === r && (r = n = t.length)), e.connection = t.substring(0, r), e.stream = t.substring(n, t.length), e
                }, t.isStreamingType = function (e) {
                    return e in t.streamingFormats
                }, t.RTMP_RE = /^rtmp[set]?:\/\//i, t.isStreamingSrc = function (e) {
                    return t.RTMP_RE.test(e)
                }, t.rtmpSourceHandler = {}, t.rtmpSourceHandler.canPlayType = function (e) {
                    return t.isStreamingType(e) ? "maybe" : ""
                }, t.rtmpSourceHandler.canHandleSource = function (e, r) {
                    var n = t.rtmpSourceHandler.canPlayType(e.type);
                    return n ? n : t.isStreamingSrc(e.src) ? "maybe" : ""
                }, t.rtmpSourceHandler.handleSource = function (e, r, n) {
                    var o = t.streamToParts(e.src);
                    r.setRtmpConnection(o.connection), r.setRtmpStream(o.stream)
                }, t.registerSourceHandler(t.rtmpSourceHandler), t
            }

            r.__esModule = !0, r["default"] = n
        }, {}],
        59: [function (t, e, r) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e["default"] = t, e
            }

            function o(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            function l(t) {
                var e = t.charAt(0).toUpperCase() + t.slice(1);
                O["set" + e] = function (e) {
                    return this.el_.vjs_setProperty(t, e)
                }
            }

            function u(t) {
                O[t] = function () {
                    return this.el_.vjs_getProperty(t)
                }
            }

            r.__esModule = !0;
            for (var c = t(62), p = o(c), f = t(81), h = n(f), d = t(92), y = n(d), v = t(90), _ = t(58), g = o(_), b = t(5), m = o(b), T = t(95), w = o(T), E = t(88), C = w["default"].navigator, k = function (t) {
                function e(r, n) {
                    i(this, e);
                    var o = s(this, t.call(this, r, n));
                    return r.source && o.ready(function () {
                        this.setSource(r.source)
                    }, !0), r.startTime && o.ready(function () {
                        this.load(), this.play(), this.currentTime(r.startTime)
                    }, !0), w["default"].videojs = w["default"].videojs || {}, w["default"].videojs.Flash = w["default"].videojs.Flash || {}, w["default"].videojs.Flash.onReady = e.onReady, w["default"].videojs.Flash.onEvent = e.onEvent, w["default"].videojs.Flash.onError = e.onError, o.on("seeked", function () {
                        this.lastSeekTarget_ = void 0
                    }), o
                }

                return a(e, t), e.prototype.createEl = function () {
                    var t = this.options_;
                    if (!t.swf) {
                        var r = "5.1.0";
                        t.swf = "//vjs.zencdn.net/swf/" + r + "/video-js.swf"
                    }
                    var n = t.techId, o = (0, E.assign)({
                            readyFunction: "videojs.Flash.onReady",
                            eventProxyFunction: "videojs.Flash.onEvent",
                            errorEventProxyFunction: "videojs.Flash.onError",
                            autoplay: t.autoplay,
                            preload: t.preload,
                            loop: t.loop,
                            muted: t.muted
                        }, t.flashVars), i = (0, E.assign)({wmode: "opaque", bgcolor: "#000000"}, t.params),
                        s = (0, E.assign)({id: n, name: n, "class": "vjs-tech"}, t.attributes);
                    return this.el_ = e.embed(t.swf, o, i, s), this.el_.tech = this, this.el_
                }, e.prototype.play = function () {
                    this.ended() && this.setCurrentTime(0), this.el_.vjs_play()
                }, e.prototype.pause = function () {
                    this.el_.vjs_pause()
                }, e.prototype.src = function (t) {
                    return void 0 === t ? this.currentSrc() : this.setSrc(t)
                }, e.prototype.setSrc = function (t) {
                    var e = this;
                    t = y.getAbsoluteURL(t), this.el_.vjs_src(t), this.autoplay() && this.setTimeout(function () {
                        return e.play()
                    }, 0)
                }, e.prototype.seeking = function () {
                    return void 0 !== this.lastSeekTarget_
                }, e.prototype.setCurrentTime = function (e) {
                    var r = this.seekable();
                    r.length && (e = e > r.start(0) ? e : r.start(0), e = e < r.end(r.length - 1) ? e : r.end(r.length - 1), this.lastSeekTarget_ = e, this.trigger("seeking"), this.el_.vjs_setProperty("currentTime", e), t.prototype.setCurrentTime.call(this))
                }, e.prototype.currentTime = function () {
                    return this.seeking() ? this.lastSeekTarget_ || 0 : this.el_.vjs_getProperty("currentTime")
                }, e.prototype.currentSrc = function () {
                    return this.currentSource_ ? this.currentSource_.src : this.el_.vjs_getProperty("currentSrc")
                }, e.prototype.duration = function r() {
                    if (0 === this.readyState()) return NaN;
                    var r = this.el_.vjs_getProperty("duration");
                    return r >= 0 ? r : 1 / 0
                }, e.prototype.load = function () {
                    this.el_.vjs_load()
                }, e.prototype.poster = function () {
                    this.el_.vjs_getProperty("poster")
                }, e.prototype.setPoster = function () {
                }, e.prototype.seekable = function () {
                    var t = this.duration();
                    return 0 === t ? (0, v.createTimeRange)() : (0, v.createTimeRange)(0, t)
                }, e.prototype.buffered = function () {
                    var t = this.el_.vjs_getProperty("buffered");
                    //return 0 === t.length ? (0, v.createTimeRange)() : (0, v.createTimeRange)(t[0][0], t[0][1])
                }, e.prototype.supportsFullScreen = function () {
                    return !1
                }, e.prototype.enterFullScreen = function () {
                    return !1
                }, e
            }(p["default"]), O = k.prototype, j = "rtmpConnection,rtmpStream,preload,defaultPlaybackRate,playbackRate,autoplay,loop,mediaGroup,controller,controls,volume,muted,defaultMuted".split(","), S = "networkState,readyState,initialTime,startOffsetTime,paused,ended,videoWidth,videoHeight".split(","), x = 0; x < j.length; x++) u(j[x]), l(j[x]);
            for (var P = 0; P < S.length; P++) u(S[P]);
            k.isSupported = function () {
                return k.version()[0] >= 10
            }, p["default"].withSourceHandlers(k), k.nativeSourceHandler = {}, k.nativeSourceHandler.canPlayType = function (t) {
                return t in k.formats ? "maybe" : ""
            }, k.nativeSourceHandler.canHandleSource = function (t, e) {
                function r(t) {
                    var e = y.getFileExtension(t);
                    return e ? "video/" + e : ""
                }

                var n = void 0;
                return n = t.type ? t.type.replace(/;.*/, "").toLowerCase() : r(t.src), k.nativeSourceHandler.canPlayType(n)
            }, k.nativeSourceHandler.handleSource = function (t, e, r) {
                e.setSrc(t.src)
            }, k.nativeSourceHandler.dispose = function () {
            }, k.registerSourceHandler(k.nativeSourceHandler), k.formats = {
                "video/flv": "FLV",
                "video/x-flv": "FLV",
                "video/mp4": "MP4",
                "video/m4v": "MP4"
            }, k.onReady = function (t) {
                var e = h.getEl(t), r = e && e.tech;
                r && r.el() && k.checkReady(r)
            }, k.checkReady = function (t) {
                t.el() && (t.el().vjs_getProperty ? t.triggerReady() : this.setTimeout(function () {
                    k.checkReady(t)
                }, 50))
            }, k.onEvent = function (t, e) {
                var r = h.getEl(t).tech, n = Array.prototype.slice.call(arguments, 2);
                r.setTimeout(function () {
                    r.trigger(e, n)
                }, 1)
            }, k.onError = function (t, e) {
                var r = h.getEl(t).tech;
                return "srcnotfound" === e ? r.error(4) : void r.error("FLASH: " + e)
            }, k.version = function () {
                var t = "0,0,0";
                try {
                    t = new w["default"].ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1]
                } catch (e) {
                    try {
                        C.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (t = (C.plugins["Shockwave Flash 2.0"] || C.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1])
                    } catch (r) {
                    }
                }
                return t.split(",")
            }, k.embed = function (t, e, r, n) {
                var o = k.getEmbedCode(t, e, r, n), i = h.createEl("div", {innerHTML: o}).childNodes[0];
                return i
            }, k.getEmbedCode = function (t, e, r, n) {
                var o = '<object type="application/x-shockwave-flash" ', i = "", s = "", a = "";
                return e && Object.getOwnPropertyNames(e).forEach(function (t) {
                    i += t + "=" + e[t] + "&amp;"
                }), r = (0, E.assign)({
                    movie: t,
                    flashvars: i,
                    allowScriptAccess: "always",
                    allowNetworking: "all"
                }, r), Object.getOwnPropertyNames(r).forEach(function (t) {
                    s += '<param name="' + t + '" value="' + r[t] + '" />'
                }), n = (0, E.assign)({
                    data: t,
                    width: "100%",
                    height: "100%"
                }, n), Object.getOwnPropertyNames(n).forEach(function (t) {
                    a += t + '="' + n[t] + '" '
                }), "" + o + a + ">" + s + "</object>"
            }, (0, g["default"])(k), m["default"].registerComponent("Flash", k), p["default"].registerTech("Flash", k), r["default"] = k
        }, {5: 5, 58: 58, 62: 62, 81: 81, 88: 88, 90: 90, 92: 92, 95: 95}],
        60: [function (t, e, r) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e["default"] = t, e
            }

            function o(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function i(t, e) {
                return t.raw = e, t
            }

            function s(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function a(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function l(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                },
                c = i(["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."], ["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."]),
                p = t(62), f = o(p), h = t(5), d = o(h), y = t(81), v = n(y), _ = t(92), g = n(_), b = t(83), m = n(b),
                T = t(86), w = o(T), E = t(98), C = o(E), k = t(78), O = n(k), j = t(94), S = o(j), x = t(95), P = o(x),
                M = t(88), A = t(87), R = o(A), I = t(91), N = o(I), D = function (t) {
                    function e(r, n) {
                        s(this, e);
                        var o = a(this, t.call(this, r, n)), i = r.source, l = !1;
                        if (i && (o.el_.currentSrc !== i.src || r.tag && 3 === r.tag.initNetworkState_) ? o.setSource(i) : o.handleLateInit_(o.el_), o.el_.hasChildNodes()) {
                            for (var u = o.el_.childNodes, p = u.length, f = []; p--;) {
                                var h = u[p], d = h.nodeName.toLowerCase();
                                "track" === d && (o.featuresNativeTextTracks ? (o.remoteTextTrackEls().addTrackElement_(h), o.remoteTextTracks().addTrack_(h.track), l || o.el_.hasAttribute("crossorigin") || !g.isCrossOrigin(h.src) || (l = !0)) : f.push(h))
                            }
                            for (var y = 0; y < f.length; y++) o.el_.removeChild(f[y])
                        }
                        var v = ["audio", "video"];
                        return v.forEach(function (t) {
                            var e = o.el()[t + "Tracks"], r = o[t + "Tracks"](), n = (0, N["default"])(t);
                            o["featuresNative" + n + "Tracks"] && e && e.addEventListener && (o["handle" + n + "TrackChange_"] = function (t) {
                                r.trigger({type: "change", target: r, currentTarget: r, srcElement: r})
                            }, o["handle" + n + "TrackAdd_"] = function (t) {
                                return r.addTrack(t.track)
                            }, o["handle" + n + "TrackRemove_"] = function (t) {
                                return r.removeTrack(t.track)
                            }, e.addEventListener("change", o["handle" + n + "TrackChange_"]), e.addEventListener("addtrack", o["handle" + n + "TrackAdd_"]), e.addEventListener("removetrack", o["handle" + n + "TrackRemove_"]), o["removeOld" + n + "Tracks_"] = function (t) {
                                return o.removeOldTracks_(r, e)
                            }, o.on("loadstart", o["removeOld" + n + "Tracks_"]))
                        }), o.featuresNativeTextTracks && (l && w["default"].warn((0, C["default"])(c)), o.handleTextTrackChange_ = m.bind(o, o.handleTextTrackChange), o.handleTextTrackAdd_ = m.bind(o, o.handleTextTrackAdd), o.handleTextTrackRemove_ = m.bind(o, o.handleTextTrackRemove), o.proxyNativeTextTracks_()), (O.TOUCH_ENABLED || O.IS_IPHONE || O.IS_NATIVE_ANDROID) && r.nativeControlsForTouch === !0 && o.setControls(!0), o.proxyWebkitFullscreen_(), o.triggerReady(), o
                    }

                    return l(e, t), e.prototype.dispose = function () {
                        var r = this;
                        ["audio", "video", "text"].forEach(function (t) {
                            var e = (0, N["default"])(t), n = r.el_[t + "Tracks"];
                            n && n.removeEventListener && (n.removeEventListener("change", r["handle" + e + "TrackChange_"]), n.removeEventListener("addtrack", r["handle" + e + "TrackAdd_"]), n.removeEventListener("removetrack", r["handle" + e + "TrackRemove_"])), n && r.off("loadstart", r["removeOld" + e + "Tracks_"])
                        }), e.disposeMediaElement(this.el_), t.prototype.dispose.call(this)
                    }, e.prototype.createEl = function () {
                        var t = this.options_.tag;
                        if (!t || !this.options_.playerElIngest && !this.movingMediaElementInDOM) {
                            if (t) {
                                var r = t.cloneNode(!0);
                                t.parentNode && t.parentNode.insertBefore(r, t), e.disposeMediaElement(t), t = r
                            } else {
                                t = S["default"].createElement("video");
                                var n = this.options_.tag && v.getElAttributes(this.options_.tag),
                                    o = (0, R["default"])({}, n);
                                O.TOUCH_ENABLED && this.options_.nativeControlsForTouch === !0 || delete o.controls, v.setElAttributes(t, (0, M.assign)(o, {
                                    id: this.options_.techId,
                                    "class": "vjs-tech"
                                }))
                            }
                            t.playerId = this.options_.playerId
                        }
                        for (var i = ["autoplay", "preload", "loop", "muted"], s = i.length - 1; s >= 0; s--) {
                            var a = i[s], l = {};
                            "undefined" != typeof this.options_[a] && (l[a] = this.options_[a]), v.setElAttributes(t, l)
                        }
                        return t
                    }, e.prototype.handleLateInit_ = function (t) {
                        var e = this;
                        if (0 !== t.networkState && 3 !== t.networkState) {
                            if (0 === t.readyState) {
                                var r = function () {
                                    var t = !1, r = function () {
                                        t = !0
                                    };
                                    e.on("loadstart", r);
                                    var n = function () {
                                        t || this.trigger("loadstart")
                                    };
                                    return e.on("loadedmetadata", n), e.ready(function () {
                                        this.off("loadstart", r), this.off("loadedmetadata", n), t || this.trigger("loadstart")
                                    }), {v: void 0}
                                }();
                                if ("object" === ("undefined" == typeof r ? "undefined" : u(r))) return r.v
                            }
                            var n = ["loadstart"];
                            n.push("loadedmetadata"), t.readyState >= 2 && n.push("loadeddata"), t.readyState >= 3 && n.push("canplay"), t.readyState >= 4 && n.push("canplaythrough"), this.ready(function () {
                                n.forEach(function (t) {
                                    this.trigger(t)
                                }, this)
                            })
                        }
                    }, e.prototype.proxyNativeTextTracks_ = function () {
                        var t = this.el().textTracks;
                        if (t) {
                            for (var e = 0; e < t.length; e++) this.textTracks().addTrack_(t[e]);
                            t.addEventListener && (t.addEventListener("change", this.handleTextTrackChange_), t.addEventListener("addtrack", this.handleTextTrackAdd_), t.addEventListener("removetrack", this.handleTextTrackRemove_)), this.on("loadstart", this.removeOldTextTracks_)
                        }
                    }, e.prototype.handleTextTrackChange = function (t) {
                        var e = this.textTracks();
                        this.textTracks().trigger({type: "change", target: e, currentTarget: e, srcElement: e})
                    }, e.prototype.handleTextTrackAdd = function (t) {
                        this.textTracks().addTrack_(t.track)
                    }, e.prototype.handleTextTrackRemove = function (t) {
                        this.textTracks().removeTrack_(t.track)
                    }, e.prototype.removeOldTracks_ = function (t, e) {
                        var r = [];
                        if (e) {
                            for (var n = 0; n < t.length; n++) {
                                for (var o = t[n], i = !1, s = 0; s < e.length; s++) if (e[s] === o) {
                                    i = !0;
                                    break
                                }
                                i || r.push(o)
                            }
                            for (var a = 0; a < r.length; a++) {
                                var l = r[a];
                                t.removeTrack_(l)
                            }
                        }
                    }, e.prototype.removeOldTextTracks_ = function (t) {
                        var e = this.textTracks(), r = this.el().textTracks;
                        this.removeOldTracks_(e, r)
                    }, e.prototype.play = function () {
                        var t = this.el_.play();
                        void 0 !== t && "function" == typeof t.then && t.then(null, function (t) {
                        })
                    }, e.prototype.setCurrentTime = function (t) {
                        try {
                            this.el_.currentTime = t
                        } catch (e) {
                            (0, w["default"])(e, "Video is not ready. (Video.js)")
                        }
                    }, e.prototype.duration = function () {
                        var t = this;
                        if (this.el_.duration === 1 / 0 && O.IS_ANDROID && O.IS_CHROME && 0 === this.el_.currentTime) {
                            var e = function () {
                                var e = function r() {
                                    t.el_.currentTime > 0 && (t.el_.duration === 1 / 0 && t.trigger("durationchange"), t.off("timeupdate", r))
                                };
                                return t.on("timeupdate", e), {v: NaN}
                            }();
                            if ("object" === ("undefined" == typeof e ? "undefined" : u(e))) return e.v
                        }
                        return this.el_.duration || NaN
                    }, e.prototype.width = function () {
                        return this.el_.offsetWidth
                    }, e.prototype.height = function () {
                        return this.el_.offsetHeight
                    }, e.prototype.proxyWebkitFullscreen_ = function () {
                        var t = this;
                        if ("webkitDisplayingFullscreen" in this.el_) {
                            var e = function () {
                                this.trigger("fullscreenchange", {isFullscreen: !1})
                            }, r = function () {
                                this.one("webkitendfullscreen", e), this.trigger("fullscreenchange", {isFullscreen: !0})
                            };
                            this.on("webkitbeginfullscreen", r), this.on("dispose", function () {
                                t.off("webkitbeginfullscreen", r), t.off("webkitendfullscreen", e)
                            })
                        }
                    }, e.prototype.supportsFullScreen = function () {
                        if ("function" == typeof this.el_.webkitEnterFullScreen) {
                            var t = P["default"].navigator && P["default"].navigator.userAgent || "";
                            if (/Android/.test(t) || !/Chrome|Mac OS X 10.5/.test(t)) return !0
                        }
                        return !1
                    }, e.prototype.enterFullScreen = function () {
                        var t = this.el_;
                        t.paused && t.networkState <= t.HAVE_METADATA ? (this.el_.play(), this.setTimeout(function () {
                            t.pause(), t.webkitEnterFullScreen()
                        }, 0)) : t.webkitEnterFullScreen()
                    }, e.prototype.exitFullScreen = function () {
                        this.el_.webkitExitFullScreen()
                    }, e.prototype.src = function (t) {
                        return void 0 === t ? this.el_.src : void this.setSrc(t)
                    }, e.prototype.reset = function () {
                        e.resetMediaElement(this.el_)
                    }, e.prototype.currentSrc = function () {
                        return this.currentSource_ ? this.currentSource_.src : this.el_.currentSrc
                    }, e.prototype.setControls = function (t) {
                        this.el_.controls = !!t
                    }, e.prototype.addTextTrack = function (e, r, n) {
                        return this.featuresNativeTextTracks ? this.el_.addTextTrack(e, r, n) : t.prototype.addTextTrack.call(this, e, r, n)
                    }, e.prototype.createRemoteTextTrack = function (e) {
                        if (!this.featuresNativeTextTracks) return t.prototype.createRemoteTextTrack.call(this, e);
                        var r = S["default"].createElement("track");
                        return e.kind && (r.kind = e.kind), e.label && (r.label = e.label), (e.language || e.srclang) && (r.srclang = e.language || e.srclang), e["default"] && (r["default"] = e["default"]), e.id && (r.id = e.id), e.src && (r.src = e.src), r
                    }, e.prototype.addRemoteTextTrack = function (e, r) {
                        var n = t.prototype.addRemoteTextTrack.call(this, e, r);
                        return this.featuresNativeTextTracks && this.el().appendChild(n), n
                    }, e.prototype.removeRemoteTextTrack = function (e) {
                        if (t.prototype.removeRemoteTextTrack.call(this, e), this.featuresNativeTextTracks) for (var r = this.$$("track"), n = r.length; n--;) e !== r[n] && e !== r[n].track || this.el().removeChild(r[n])
                    }, e
                }(f["default"]);
            if (v.isReal()) {
                D.TEST_VID = S["default"].createElement("video");
                var L = S["default"].createElement("track");
                L.kind = "captions", L.srclang = "en", L.label = "English", D.TEST_VID.appendChild(L)
            }
            D.isSupported = function () {
                try {
                    D.TEST_VID.volume = .5
                } catch (t) {
                    return !1
                }
                return !(!D.TEST_VID || !D.TEST_VID.canPlayType)
            }, D.canControlVolume = function () {
                try {
                    var t = D.TEST_VID.volume;
                    return D.TEST_VID.volume = t / 2 + .1, t !== D.TEST_VID.volume
                } catch (e) {
                    return !1
                }
            }, D.canControlPlaybackRate = function () {
                if (O.IS_ANDROID && O.IS_CHROME) return !1;
                try {
                    var t = D.TEST_VID.playbackRate;
                    return D.TEST_VID.playbackRate = t / 2 + .1, t !== D.TEST_VID.playbackRate
                } catch (e) {
                    return !1
                }
            }, D.supportsNativeTextTracks = function () {
                return O.IS_ANY_SAFARI
            }, D.supportsNativeVideoTracks = function () {
                return !(!D.TEST_VID || !D.TEST_VID.videoTracks)
            }, D.supportsNativeAudioTracks = function () {
                return !(!D.TEST_VID || !D.TEST_VID.audioTracks)
            }, D.Events = ["loadstart", "suspend", "abort", "error", "emptied", "stalled", "loadedmetadata", "loadeddata", "canplay", "canplaythrough", "playing", "waiting", "seeking", "seeked", "ended", "durationchange", "timeupdate", "progress", "play", "pause", "ratechange", "volumechange"], D.prototype.featuresVolumeControl = D.canControlVolume(), D.prototype.featuresPlaybackRate = D.canControlPlaybackRate(), D.prototype.movingMediaElementInDOM = !O.IS_IOS, D.prototype.featuresFullscreenResize = !0, D.prototype.featuresProgressEvents = !0, D.prototype.featuresTimeupdateEvents = !0, D.prototype.featuresNativeTextTracks = D.supportsNativeTextTracks(), D.prototype.featuresNativeVideoTracks = D.supportsNativeVideoTracks(), D.prototype.featuresNativeAudioTracks = D.supportsNativeAudioTracks();
            var F = D.TEST_VID && D.TEST_VID.constructor.prototype.canPlayType,
                B = /^application\/(?:x-|vnd\.apple\.)mpegurl/i, H = /^video\/mp4/i;
            D.patchCanPlayType = function () {
                O.ANDROID_VERSION >= 4 && !O.IS_FIREFOX ? D.TEST_VID.constructor.prototype.canPlayType = function (t) {
                    return t && B.test(t) ? "maybe" : F.call(this, t)
                } : O.IS_OLD_ANDROID && (D.TEST_VID.constructor.prototype.canPlayType = function (t) {
                    return t && H.test(t) ? "maybe" : F.call(this, t)
                })
            }, D.unpatchCanPlayType = function () {
                var t = D.TEST_VID.constructor.prototype.canPlayType;
                return D.TEST_VID.constructor.prototype.canPlayType = F, t
            }, D.patchCanPlayType(), D.disposeMediaElement = function (t) {
                if (t) {
                    for (t.parentNode && t.parentNode.removeChild(t); t.hasChildNodes();) t.removeChild(t.firstChild);
                    t.removeAttribute("src"), "function" == typeof t.load && !function () {
                        try {
                            t.load()
                        } catch (e) {
                        }
                    }()
                }
            }, D.resetMediaElement = function (t) {
                if (t) {
                    for (var e = t.querySelectorAll("source"), r = e.length; r--;) t.removeChild(e[r]);
                    t.removeAttribute("src"), "function" == typeof t.load && !function () {
                        try {
                            t.load()
                        } catch (e) {
                        }
                    }()
                }
            }, ["paused", "currentTime", "buffered", "volume", "muted", "poster", "preload", "autoplay", "controls", "loop", "error", "seeking", "seekable", "ended", "defaultMuted", "playbackRate", "played", "networkState", "readyState", "videoWidth", "videoHeight"].forEach(function (t) {
                D.prototype[t] = function () {
                    return this.el_[t]
                }
            }), ["volume", "muted", "src", "poster", "preload", "autoplay", "loop", "playbackRate"].forEach(function (t) {
                D.prototype["set" + (0, N["default"])(t)] = function (e) {
                    this.el_[t] = e
                }
            }), ["pause", "load"].forEach(function (t) {
                D.prototype[t] = function () {
                    return this.el_[t]()
                }
            }), f["default"].withSourceHandlers(D), D.nativeSourceHandler = {}, D.nativeSourceHandler.canPlayType = function (t) {
                try {
                    return D.TEST_VID.canPlayType(t)
                } catch (e) {
                    return ""
                }
            }, D.nativeSourceHandler.canHandleSource = function (t, e) {
                if (t.type) return D.nativeSourceHandler.canPlayType(t.type);
                if (t.src) {
                    var r = g.getFileExtension(t.src);
                    return D.nativeSourceHandler.canPlayType("video/" + r)
                }
                return ""
            }, D.nativeSourceHandler.handleSource = function (t, e, r) {
                e.setSrc(t.src)
            }, D.nativeSourceHandler.dispose = function () {
            }, D.registerSourceHandler(D.nativeSourceHandler), d["default"].registerComponent("Html5", D), f["default"].registerTech("Html5", D), r["default"] = D
        }, {5: 5, 62: 62, 78: 78, 81: 81, 83: 83, 86: 86, 87: 87, 88: 88, 91: 91, 92: 92, 94: 94, 95: 95, 98: 98}],
        61: [function (t, e, r) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function o(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var a = t(5), l = n(a), u = t(62), c = n(u), p = t(91), f = n(p), h = function (t) {
                function e(r, n, s) {
                    o(this, e);
                    var a = i(this, t.call(this, r, n, s));
                    if (n.playerOptions.sources && 0 !== n.playerOptions.sources.length) r.src(n.playerOptions.sources); else for (var u = 0, p = n.playerOptions.techOrder; u < p.length; u++) {
                        var h = (0, f["default"])(p[u]), d = c["default"].getTech(h);
                        if (h || (d = l["default"].getComponent(h)), d && d.isSupported()) {
                            r.loadTech_(h);
                            break
                        }
                    }
                    return a
                }

                return s(e, t), e
            }(l["default"]);
            l["default"].registerComponent("MediaLoader", h), r["default"] = h
        }, {5: 5, 62: 62, 91: 91}],
        62: [function (t, e, r) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e["default"] = t, e
            }

            function o(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            function l(t, e, r, n) {
                var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, i = t.textTracks();
                o.kind = e, r && (o.label = r), n && (o.language = n), o.tech = t;
                var s = new b["default"](o);
                return i.addTrack_(s), s
            }

            r.__esModule = !0;
            var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, c = t(5), p = o(c), f = t(66), h = o(f), d = t(65), y = o(d), v = t(87), _ = o(v), g = t(72), b = o(g),
                m = t(70), T = o(m), w = t(76), E = o(w), C = t(63), k = o(C), O = t(83), j = n(O), S = t(86), x = o(S),
                P = t(90), M = t(79), A = t(46), R = o(A), I = t(95), N = o(I), D = t(94), L = o(D), F = t(88),
                B = function (e) {
                    function r() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {
                            };
                        i(this, r), t.reportTouchActivity = !1;
                        var o = s(this, e.call(this, null, t, n));
                        return o.hasStarted_ = !1, o.on("playing", function () {
                            this.hasStarted_ = !0
                        }), o.on("loadstart", function () {
                            this.hasStarted_ = !1
                        }), o.textTracks_ = t.textTracks, o.videoTracks_ = t.videoTracks, o.audioTracks_ = t.audioTracks, o.featuresProgressEvents || o.manualProgressOn(), o.featuresTimeupdateEvents || o.manualTimeUpdatesOn(), ["Text", "Audio", "Video"].forEach(function (e) {
                            t["native" + e + "Tracks"] === !1 && (o["featuresNative" + e + "Tracks"] = !1)
                        }), t.nativeCaptions === !1 && (o.featuresNativeTextTracks = !1), o.featuresNativeTextTracks || o.emulateTextTracks(), o.autoRemoteTextTracks_ = new T["default"], o.initTextTrackListeners(), o.initTrackListeners(), t.nativeControlsForTouch || o.emitTapEvents(), o.constructor && (o.name_ = o.constructor.name || "Unknown Tech"), o
                    }

                    return a(r, e), r.prototype.manualProgressOn = function () {
                        this.on("durationchange", this.onDurationChange), this.manualProgress = !0, this.one("ready", this.trackProgress)
                    }, r.prototype.manualProgressOff = function () {
                        this.manualProgress = !1, this.stopTrackingProgress(), this.off("durationchange", this.onDurationChange)
                    }, r.prototype.trackProgress = function (t) {
                        this.stopTrackingProgress(), this.progressInterval = this.setInterval(j.bind(this, function () {
                            var t = this.bufferedPercent();
                            this.bufferedPercent_ !== t && this.trigger("progress"), this.bufferedPercent_ = t, 1 === t && this.stopTrackingProgress()
                        }), 500)
                    }, r.prototype.onDurationChange = function (t) {
                        this.duration_ = this.duration()
                    }, r.prototype.buffered = function () {
                        return (0, P.createTimeRange)(0, 0)
                    }, r.prototype.bufferedPercent = function () {
                        return (0, M.bufferedPercent)(this.buffered(), this.duration_)
                    }, r.prototype.stopTrackingProgress = function () {
                        this.clearInterval(this.progressInterval)
                    }, r.prototype.manualTimeUpdatesOn = function () {
                        this.manualTimeUpdates = !0, this.on("play", this.trackCurrentTime), this.on("pause", this.stopTrackingCurrentTime)
                    }, r.prototype.manualTimeUpdatesOff = function () {
                        this.manualTimeUpdates = !1, this.stopTrackingCurrentTime(), this.off("play", this.trackCurrentTime), this.off("pause", this.stopTrackingCurrentTime)
                    }, r.prototype.trackCurrentTime = function () {
                        this.currentTimeInterval && this.stopTrackingCurrentTime(), this.currentTimeInterval = this.setInterval(function () {
                            this.trigger({type: "timeupdate", target: this, manuallyTriggered: !0})
                        }, 250)
                    }, r.prototype.stopTrackingCurrentTime = function () {
                        this.clearInterval(this.currentTimeInterval), this.trigger({
                            type: "timeupdate",
                            target: this,
                            manuallyTriggered: !0
                        })
                    }, r.prototype.dispose = function () {
                        this.clearTracks(["audio", "video", "text"]), this.manualProgress && this.manualProgressOff(), this.manualTimeUpdates && this.manualTimeUpdatesOff(), e.prototype.dispose.call(this)
                    }, r.prototype.clearTracks = function (t) {
                        var e = this;
                        t = [].concat(t), t.forEach(function (t) {
                            for (var r = e[t + "Tracks"]() || [], n = r.length; n--;) {
                                var o = r[n];
                                "text" === t && e.removeRemoteTextTrack(o), r.removeTrack_(o)
                            }
                        })
                    }, r.prototype.cleanupAutoTextTracks = function () {
                        for (var t = this.autoRemoteTextTracks_ || [], e = t.length; e--;) {
                            var r = t[e];
                            this.removeRemoteTextTrack(r)
                        }
                    }, r.prototype.reset = function () {
                    }, r.prototype.error = function (t) {
                        return void 0 !== t && (this.error_ = new R["default"](t), this.trigger("error")), this.error_
                    }, r.prototype.played = function () {
                        return this.hasStarted_ ? (0, P.createTimeRange)(0, 0) : (0, P.createTimeRange)()
                    }, r.prototype.setCurrentTime = function () {
                        this.manualTimeUpdates && this.trigger({
                            type: "timeupdate",
                            target: this,
                            manuallyTriggered: !0
                        })
                    }, r.prototype.initTextTrackListeners = function () {
                        var t = j.bind(this, function () {
                            this.trigger("texttrackchange")
                        }), e = this.textTracks();
                        e && (e.addEventListener("removetrack", t), e.addEventListener("addtrack", t), this.on("dispose", j.bind(this, function () {
                            e.removeEventListener("removetrack", t),
                                e.removeEventListener("addtrack", t)
                        })))
                    }, r.prototype.initTrackListeners = function () {
                        var t = this, e = ["video", "audio"];
                        e.forEach(function (e) {
                            var r = function () {
                                t.trigger(e + "trackchange")
                            }, n = t[e + "Tracks"]();
                            n.addEventListener("removetrack", r), n.addEventListener("addtrack", r), t.on("dispose", function () {
                                n.removeEventListener("removetrack", r), n.removeEventListener("addtrack", r)
                            })
                        })
                    }, r.prototype.addWebVttScript_ = function () {
                        var e = this;
                        if (!N["default"].WebVTT && null !== this.el().parentNode && void 0 !== this.el().parentNode) {
                            var r = function () {
                                var r = t(99);
                                if (!e.options_["vtt.js"] && (0, F.isPlain)(r) && Object.keys(r).length > 0) return Object.keys(r).forEach(function (t) {
                                    N["default"][t] = r[t]
                                }), e.trigger("vttjsloaded"), {v: void 0};
                                var n = L["default"].createElement("script");
                                n.src = e.options_["vtt.js"] || "https://cdn.rawgit.com/gkatsev/vtt.js/vjs-v0.12.1/dist/vtt.min.js", n.onload = function () {
                                    e.trigger("vttjsloaded")
                                }, n.onerror = function () {
                                    e.trigger("vttjserror")
                                }, e.on("dispose", function () {
                                    n.onload = null, n.onerror = null
                                }), N["default"].WebVTT = !0, e.el().parentNode.appendChild(n)
                            }();
                            if ("object" === ("undefined" == typeof r ? "undefined" : u(r))) return r.v
                        }
                    }, r.prototype.emulateTextTracks = function () {
                        var t = this, e = this.textTracks();
                        if (e) {
                            this.remoteTextTracks().on("addtrack", function (e) {
                                t.textTracks().addTrack_(e.track)
                            }), this.remoteTextTracks().on("removetrack", function (e) {
                                t.textTracks().removeTrack_(e.track)
                            }), this.on("ready", this.addWebVttScript_);
                            var r = function () {
                                return t.trigger("texttrackchange")
                            }, n = function () {
                                r();
                                for (var t = 0; t < e.length; t++) {
                                    var n = e[t];
                                    n.removeEventListener("cuechange", r), "showing" === n.mode && n.addEventListener("cuechange", r)
                                }
                            };
                            n(), e.addEventListener("change", n), this.on("dispose", function () {
                                e.removeEventListener("change", n)
                            })
                        }
                    }, r.prototype.videoTracks = function () {
                        return this.videoTracks_ = this.videoTracks_ || new E["default"], this.videoTracks_
                    }, r.prototype.audioTracks = function () {
                        return this.audioTracks_ = this.audioTracks_ || new k["default"], this.audioTracks_
                    }, r.prototype.textTracks = function () {
                        return this.textTracks_ = this.textTracks_ || new T["default"], this.textTracks_
                    }, r.prototype.remoteTextTracks = function () {
                        return this.remoteTextTracks_ = this.remoteTextTracks_ || new T["default"], this.remoteTextTracks_
                    }, r.prototype.remoteTextTrackEls = function () {
                        return this.remoteTextTrackEls_ = this.remoteTextTrackEls_ || new y["default"], this.remoteTextTrackEls_
                    }, r.prototype.addTextTrack = function (t, e, r) {
                        if (!t) throw new Error("TextTrack kind is required but was not provided");
                        return l(this, t, e, r)
                    }, r.prototype.createRemoteTextTrack = function (t) {
                        var e = (0, _["default"])(t, {tech: this});
                        return new h["default"](e)
                    }, r.prototype.addRemoteTextTrack = function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = arguments[1],
                            r = this.createRemoteTextTrack(t);
                        return e !== !0 && e !== !1 && (x["default"].warn('Calling addRemoteTextTrack without explicitly setting the "manualCleanup" parameter to `true` is deprecated and default to `false` in future version of video.js'), e = !0), this.remoteTextTrackEls().addTrackElement_(r), this.remoteTextTracks().addTrack_(r.track), e !== !0 && this.autoRemoteTextTracks_.addTrack_(r.track), r
                    }, r.prototype.removeRemoteTextTrack = function (t) {
                        var e = this.remoteTextTrackEls().getTrackElementByTrack_(t);
                        this.remoteTextTrackEls().removeTrackElement_(e), this.remoteTextTracks().removeTrack_(t), this.autoRemoteTextTracks_.removeTrack_(t)
                    }, r.prototype.setPoster = function () {
                    }, r.prototype.canPlayType = function () {
                        return ""
                    }, r.isTech = function (t) {
                        return t.prototype instanceof r || t instanceof r || t === r
                    }, r.registerTech = function (t, e) {
                        if (r.techs_ || (r.techs_ = {}), !r.isTech(e)) throw new Error("Tech " + t + " must be a Tech");
                        return r.techs_[t] = e, e
                    }, r.getTech = function (t) {
                        return r.techs_ && r.techs_[t] ? r.techs_[t] : N["default"] && N["default"].videojs && N["default"].videojs[t] ? (x["default"].warn("The " + t + " tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)"), N["default"].videojs[t]) : void 0
                    }, r
                }(p["default"]);
            B.prototype.textTracks_, B.prototype.audioTracks_, B.prototype.videoTracks_, B.prototype.featuresVolumeControl = !0, B.prototype.featuresFullscreenResize = !1, B.prototype.featuresPlaybackRate = !1, B.prototype.featuresProgressEvents = !1, B.prototype.featuresTimeupdateEvents = !1, B.prototype.featuresNativeTextTracks = !1, B.withSourceHandlers = function (t) {
                t.registerSourceHandler = function (e, r) {
                    var n = t.sourceHandlers;
                    n || (n = t.sourceHandlers = []), void 0 === r && (r = n.length), n.splice(r, 0, e)
                }, t.canPlayType = function (e) {
                    for (var r = t.sourceHandlers || [], n = void 0, o = 0; o < r.length; o++) if (n = r[o].canPlayType(e)) return n;
                    return ""
                }, t.selectSourceHandler = function (e, r) {
                    for (var n = t.sourceHandlers || [], o = void 0, i = 0; i < n.length; i++) if (o = n[i].canHandleSource(e, r)) return n[i];
                    return null
                }, t.canPlaySource = function (e, r) {
                    var n = t.selectSourceHandler(e, r);
                    return n ? n.canHandleSource(e, r) : ""
                };
                var e = ["seekable", "duration"];
                e.forEach(function (t) {
                    var e = this[t];
                    "function" == typeof e && (this[t] = function () {
                        return this.sourceHandler_ && this.sourceHandler_[t] ? this.sourceHandler_[t].apply(this.sourceHandler_, arguments) : e.apply(this, arguments)
                    })
                }, t.prototype), t.prototype.setSource = function (e) {
                    var r = t.selectSourceHandler(e, this.options_);
                    return r || (t.nativeSourceHandler ? r = t.nativeSourceHandler : x["default"].error("No source hander found for the current source.")), this.disposeSourceHandler(), this.off("dispose", this.disposeSourceHandler), r !== t.nativeSourceHandler && (this.currentSource_ = e, this.off(this.el_, "loadstart", t.prototype.firstLoadStartListener_), this.off(this.el_, "loadstart", t.prototype.successiveLoadStartListener_), this.one(this.el_, "loadstart", t.prototype.firstLoadStartListener_)), this.sourceHandler_ = r.handleSource(e, this, this.options_), this.on("dispose", this.disposeSourceHandler), this
                }, t.prototype.firstLoadStartListener_ = function () {
                    this.one(this.el_, "loadstart", t.prototype.successiveLoadStartListener_)
                }, t.prototype.successiveLoadStartListener_ = function () {
                    this.disposeSourceHandler(), this.one(this.el_, "loadstart", t.prototype.successiveLoadStartListener_)
                }, t.prototype.disposeSourceHandler = function () {
                    this.currentSource_ && (this.clearTracks(["audio", "video"]), this.currentSource_ = null), this.cleanupAutoTextTracks(), this.sourceHandler_ && (this.off(this.el_, "loadstart", t.prototype.firstLoadStartListener_), this.off(this.el_, "loadstart", t.prototype.successiveLoadStartListener_), this.sourceHandler_.dispose && this.sourceHandler_.dispose(), this.sourceHandler_ = null)
                }
            }, p["default"].registerComponent("Tech", B), p["default"].registerComponent("MediaTechController", B), B.registerTech("Tech", B), r["default"] = B
        }, {
            46: 46,
            5: 5,
            63: 63,
            65: 65,
            66: 66,
            70: 70,
            72: 72,
            76: 76,
            79: 79,
            83: 83,
            86: 86,
            87: 87,
            88: 88,
            90: 90,
            94: 94,
            95: 95,
            99: 99
        }],
        63: [function (t, e, r) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e["default"] = t, e
            }

            function o(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var l = t(74), u = o(l), c = t(78), p = n(c), f = t(94), h = o(f), d = function (t, e) {
                for (var r = 0; r < t.length; r++) e.id !== t[r].id && (t[r].enabled = !1)
            }, y = function (t) {
                function e() {
                    var r, n, o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    i(this, e);
                    for (var a = void 0, l = o.length - 1; l >= 0; l--) if (o[l].enabled) {
                        d(o, o[l]);
                        break
                    }
                    if (p.IS_IE8) {
                        a = h["default"].createElement("custom");
                        for (var c in u["default"].prototype) "constructor" !== c && (a[c] = u["default"].prototype[c]);
                        for (var f in e.prototype) "constructor" !== f && (a[f] = e.prototype[f])
                    }
                    return a = r = s(this, t.call(this, o, a)), a.changing_ = !1, n = a, s(r, n)
                }

                return a(e, t), e.prototype.addTrack_ = function (e) {
                    var r = this;
                    e.enabled && d(this, e), t.prototype.addTrack_.call(this, e), e.addEventListener && e.addEventListener("enabledchange", function () {
                        r.changing_ || (r.changing_ = !0, d(r, e), r.changing_ = !1, r.trigger("change"))
                    })
                }, e.prototype.addTrack = function (t) {
                    this.addTrack_(t)
                }, e.prototype.removeTrack = function (e) {
                    t.prototype.removeTrack_.call(this, e)
                }, e
            }(u["default"]);
            r["default"] = y
        }, {74: 74, 78: 78, 94: 94}],
        64: [function (t, e, r) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e["default"] = t, e
            }

            function o(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var l = t(73), u = t(75), c = o(u), p = t(87), f = o(p), h = t(78), d = n(h), y = function (t) {
                function e() {
                    var r, n, o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    i(this, e);
                    var a = (0, f["default"])(o, {kind: l.AudioTrackKind[o.kind] || ""}),
                        u = r = s(this, t.call(this, a)), c = !1;
                    if (d.IS_IE8) for (var p in e.prototype) "constructor" !== p && (u[p] = e.prototype[p]);
                    return Object.defineProperty(u, "enabled", {
                        get: function () {
                            return c
                        }, set: function (t) {
                            "boolean" == typeof t && t !== c && (c = t, this.trigger("enabledchange"))
                        }
                    }), a.enabled && (u.enabled = a.enabled), u.loaded_ = !0, n = u, s(r, n)
                }

                return a(e, t), e
            }(c["default"]);
            r["default"] = y
        }, {73: 73, 75: 75, 78: 78, 87: 87}],
        65: [function (t, e, r) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function o(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e["default"] = t, e
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            r.__esModule = !0;
            var s = t(78), a = o(s), l = t(94), u = n(l), c = function () {
                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    i(this, t);
                    var r = this;
                    if (a.IS_IE8) {
                        r = u["default"].createElement("custom");
                        for (var n in t.prototype) "constructor" !== n && (r[n] = t.prototype[n])
                    }
                    r.trackElements_ = [], Object.defineProperty(r, "length", {
                        get: function () {
                            return this.trackElements_.length
                        }
                    });
                    for (var o = 0, s = e.length; o < s; o++) r.addTrackElement_(e[o]);
                    if (a.IS_IE8) return r
                }

                return t.prototype.addTrackElement_ = function (t) {
                    var e = this.trackElements_.length;
                    "" + e in this || Object.defineProperty(this, e, {
                        get: function () {
                            return this.trackElements_[e]
                        }
                    }), this.trackElements_.indexOf(t) === -1 && this.trackElements_.push(t)
                }, t.prototype.getTrackElementByTrack_ = function (t) {
                    for (var e = void 0, r = 0, n = this.trackElements_.length; r < n; r++) if (t === this.trackElements_[r].track) {
                        e = this.trackElements_[r];
                        break
                    }
                    return e
                }, t.prototype.removeTrackElement_ = function (t) {
                    for (var e = 0, r = this.trackElements_.length; e < r; e++) if (t === this.trackElements_[e]) {
                        this.trackElements_.splice(e, 1);
                        break
                    }
                }, t
            }();
            r["default"] = c
        }, {78: 78, 94: 94}],
        66: [function (t, e, r) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function o(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e["default"] = t, e
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var l = t(78), u = o(l), c = t(94), p = n(c), f = t(42), h = n(f), d = t(72), y = n(d), v = 0, _ = 1, g = 2,
                b = 3, m = function (t) {
                    function e() {
                        var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        i(this, e);
                        var n = s(this, t.call(this)), o = void 0, a = n;
                        if (u.IS_IE8) {
                            a = p["default"].createElement("custom");
                            for (var l in e.prototype) "constructor" !== l && (a[l] = e.prototype[l])
                        }
                        var c = new y["default"](r);
                        if (a.kind = c.kind, a.src = c.src, a.srclang = c.language, a.label = c.label, a["default"] = c["default"], Object.defineProperty(a, "readyState", {
                            get: function () {
                                return o
                            }
                        }), Object.defineProperty(a, "track", {
                            get: function () {
                                return c
                            }
                        }), o = v, c.addEventListener("loadeddata", function () {
                            o = g, a.trigger({type: "load", target: a})
                        }), u.IS_IE8) {
                            var f;
                            return f = a, s(n, f)
                        }
                        return n
                    }

                    return a(e, t), e
                }(h["default"]);
            m.prototype.allowedEvents_ = {load: "load"}, m.NONE = v, m.LOADING = _, m.LOADED = g, m.ERROR = b, r["default"] = m
        }, {42: 42, 72: 72, 78: 78, 94: 94}],
        67: [function (t, e, r) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function o(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e["default"] = t, e
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            r.__esModule = !0;
            var s = t(78), a = o(s), l = t(94), u = n(l), c = function () {
                function t(e) {
                    i(this, t);
                    var r = this;
                    if (a.IS_IE8) {
                        r = u["default"].createElement("custom");
                        for (var n in t.prototype) "constructor" !== n && (r[n] = t.prototype[n])
                    }
                    if (t.prototype.setCues_.call(r, e), Object.defineProperty(r, "length", {
                        get: function () {
                            return this.length_
                        }
                    }), a.IS_IE8) return r
                }

                return t.prototype.setCues_ = function (t) {
                    var e = this.length || 0, r = 0, n = t.length;
                    this.cues_ = t, this.length_ = t.length;
                    var o = function (t) {
                        "" + t in this || Object.defineProperty(this, "" + t, {
                            get: function () {
                                return this.cues_[t]
                            }
                        })
                    };
                    if (e < n) for (r = e; r < n; r++) o.call(this, r)
                }, t.prototype.getCueById = function (t) {
                    for (var e = null, r = 0, n = this.length; r < n; r++) {
                        var o = this[r];
                        if (o.id === t) {
                            e = o;
                            break
                        }
                    }
                    return e
                }, t
            }();
            r["default"] = c
        }, {78: 78, 94: 94}],
        68: [function (t, e, r) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e["default"] = t, e
            }

            function o(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            function l(t, e) {
                return "rgba(" + parseInt(t[1] + t[1], 16) + "," + parseInt(t[2] + t[2], 16) + "," + parseInt(t[3] + t[3], 16) + "," + e + ")"
            }

            function u(t, e, r) {
                try {
                    t.style[e] = r
                } catch (n) {
                    return
                }
            }

            r.__esModule = !0;
            var c = t(5), p = o(c), f = t(83), h = n(f), d = t(95), y = o(d), v = "#222", _ = "#ccc", g = {
                monospace: "monospace",
                sansSerif: "sans-serif",
                serif: "serif",
                monospaceSansSerif: '"Andale Mono", "Lucida Console", monospace',
                monospaceSerif: '"Courier New", monospace',
                proportionalSansSerif: "sans-serif",
                proportionalSerif: "serif",
                casual: '"Comic Sans MS", Impact, fantasy',
                script: '"Monotype Corsiva", cursive',
                smallcaps: '"Andale Mono", "Lucida Console", monospace, sans-serif'
            }, b = function (t) {
                function e(r, n, o) {
                    i(this, e);
                    var a = s(this, t.call(this, r, n, o));
                    return r.on("loadstart", h.bind(a, a.toggleDisplay)), r.on("texttrackchange", h.bind(a, a.updateDisplay)), r.ready(h.bind(a, function () {
                        if (r.tech_ && r.tech_.featuresNativeTextTracks) return void this.hide();
                        r.on("fullscreenchange", h.bind(this, this.updateDisplay));
                        for (var t = this.options_.playerOptions.tracks || [], e = 0; e < t.length; e++) this.player_.addRemoteTextTrack(t[e], !0);
                        var n = {captions: 1, subtitles: 1}, o = this.player_.textTracks(), i = void 0, s = void 0;
                        if (o) {
                            for (var a = 0; a < o.length; a++) {
                                var l = o[a];
                                l["default"] && ("descriptions" !== l.kind || i ? l.kind in n && !s && (s = l) : i = l)
                            }
                            s ? s.mode = "showing" : i && (i.mode = "showing")
                        }
                    })), a
                }

                return a(e, t), e.prototype.toggleDisplay = function () {
                    this.player_.tech_ && this.player_.tech_.featuresNativeTextTracks ? this.hide() : this.show()
                }, e.prototype.createEl = function () {
                    return t.prototype.createEl.call(this, "div", {className: "vjs-text-track-display"}, {
                        "aria-live": "off",
                        "aria-atomic": "true"
                    })
                }, e.prototype.clearDisplay = function () {
                    "function" == typeof y["default"].WebVTT && y["default"].WebVTT.processCues(y["default"], [], this.el_)
                }, e.prototype.updateDisplay = function () {
                    var t = this.player_.textTracks();
                    if (this.clearDisplay(), t) {
                        for (var e = null, r = null, n = t.length; n--;) {
                            var o = t[n];
                            "showing" === o.mode && ("descriptions" === o.kind ? e = o : r = o)
                        }
                        r ? ("off" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "off"), this.updateForTrack(r)) : e && ("assertive" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "assertive"), this.updateForTrack(e))
                    }
                }, e.prototype.updateForTrack = function (t) {
                    if ("function" == typeof y["default"].WebVTT && t.activeCues) {
                        for (var e = this.player_.textTrackSettings.getValues(), r = [], n = 0; n < t.activeCues.length; n++) r.push(t.activeCues[n]);
                        y["default"].WebVTT.processCues(y["default"], r, this.el_);
                        for (var o = r.length; o--;) {
                            var i = r[o];
                            if (i) {
                                var s = i.displayState;
                                if (e.color && (s.firstChild.style.color = e.color), e.textOpacity && u(s.firstChild, "color", l(e.color || "#fff", e.textOpacity)), e.backgroundColor && (s.firstChild.style.backgroundColor = e.backgroundColor), e.backgroundOpacity && u(s.firstChild, "backgroundColor", l(e.backgroundColor || "#000", e.backgroundOpacity)), e.windowColor && (e.windowOpacity ? u(s, "backgroundColor", l(e.windowColor, e.windowOpacity)) : s.style.backgroundColor = e.windowColor), e.edgeStyle && ("dropshadow" === e.edgeStyle ? s.firstChild.style.textShadow = "2px 2px 3px " + v + ", 2px 2px 4px " + v + ", 2px 2px 5px " + v : "raised" === e.edgeStyle ? s.firstChild.style.textShadow = "1px 1px " + v + ", 2px 2px " + v + ", 3px 3px " + v : "depressed" === e.edgeStyle ? s.firstChild.style.textShadow = "1px 1px " + _ + ", 0 1px " + _ + ", -1px -1px " + v + ", 0 -1px " + v : "uniform" === e.edgeStyle && (s.firstChild.style.textShadow = "0 0 4px " + v + ", 0 0 4px " + v + ", 0 0 4px " + v + ", 0 0 4px " + v)), e.fontPercent && 1 !== e.fontPercent) {
                                    var a = y["default"].parseFloat(s.style.fontSize);
                                    s.style.fontSize = a * e.fontPercent + "px", s.style.height = "auto", s.style.top = "auto", s.style.bottom = "2px"
                                }
                                e.fontFamily && "default" !== e.fontFamily && ("small-caps" === e.fontFamily ? s.firstChild.style.fontVariant = "small-caps" : s.firstChild.style.fontFamily = g[e.fontFamily])
                            }
                        }
                    }
                }, e
            }(p["default"]);
            p["default"].registerComponent("TextTrackDisplay", b), r["default"] = b
        }, {5: 5, 83: 83, 95: 95}],
        69: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n = function (t) {
                var e = ["kind", "label", "language", "id", "inBandMetadataTrackDispatchType", "mode", "src"].reduce(function (e, r, n) {
                    return t[r] && (e[r] = t[r]), e
                }, {
                    cues: t.cues && Array.prototype.map.call(t.cues, function (t) {
                        return {startTime: t.startTime, endTime: t.endTime, text: t.text, id: t.id}
                    })
                });
                return e
            }, o = function (t) {
                var e = t.$$("track"), r = Array.prototype.map.call(e, function (t) {
                    return t.track
                }), o = Array.prototype.map.call(e, function (t) {
                    var e = n(t.track);
                    return t.src && (e.src = t.src), e
                });
                return o.concat(Array.prototype.filter.call(t.textTracks(), function (t) {
                    return r.indexOf(t) === -1
                }).map(n))
            }, i = function (t, e) {
                return t.forEach(function (t) {
                    var r = e.addRemoteTextTrack(t).track;
                    !t.src && t.cues && t.cues.forEach(function (t) {
                        return r.addCue(t)
                    })
                }), e.textTracks()
            };
            r["default"] = {textTracksToJson: o, jsonToTextTracks: i, trackToJson_: n}
        }, {}],
        70: [function (t, e, r) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e["default"] = t, e
            }

            function o(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var l = t(74), u = o(l), c = t(83), p = n(c), f = t(78), h = n(f), d = t(94), y = o(d), v = function (t) {
                function e() {
                    var r, n, o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    i(this, e);
                    var a = void 0;
                    if (h.IS_IE8) {
                        a = y["default"].createElement("custom");
                        for (var l in u["default"].prototype) "constructor" !== l && (a[l] = u["default"].prototype[l]);
                        for (var c in e.prototype) "constructor" !== c && (a[c] = e.prototype[c])
                    }
                    return a = r = s(this, t.call(this, o, a)), n = a, s(r, n)
                }

                return a(e, t), e.prototype.addTrack_ = function (e) {
                    t.prototype.addTrack_.call(this, e), e.addEventListener("modechange", p.bind(this, function () {
                        this.trigger("change")
                    }))
                }, e
            }(u["default"]);
            r["default"] = v
        }, {74: 74, 78: 78, 83: 83, 94: 94}],
        71: [function (t, e, r) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e["default"] = t, e
            }

            function o(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            function l(t, e) {
                if (e && (t = e(t)), t && "none" !== t) return t
            }

            function u(t, e) {
                var r = t.options[t.options.selectedIndex].value;
                return l(r, e)
            }

            function c(t, e, r) {
                if (e) for (var n = 0; n < t.options.length; n++) if (l(t.options[n].value, r) === e) {
                    t.selectedIndex = n;
                    break
                }
            }

            r.__esModule = !0;
            var p = t(95), f = o(p), h = t(5), d = o(h), y = t(81), v = t(83), _ = n(v), g = t(88), b = n(g), m = t(86),
                T = o(m), w = "vjs-text-track-settings", E = ["#000", "Black"], C = ["#00F", "Blue"],
                k = ["#0FF", "Cyan"], O = ["#0F0", "Green"], j = ["#F0F", "Magenta"], S = ["#F00", "Red"],
                x = ["#FFF", "White"], P = ["#FF0", "Yellow"], M = ["1", "Opaque"], A = ["0.5", "Semi-Transparent"],
                R = ["0", "Transparent"], I = {
                    backgroundColor: {
                        selector: ".vjs-bg-color > select",
                        id: "captions-background-color-%s",
                        label: "Color",
                        options: [E, x, S, O, C, P, j, k]
                    },
                    backgroundOpacity: {
                        selector: ".vjs-bg-opacity > select",
                        id: "captions-background-opacity-%s",
                        label: "Transparency",
                        options: [M, A, R]
                    },
                    color: {
                        selector: ".vjs-fg-color > select",
                        id: "captions-foreground-color-%s",
                        label: "Color",
                        options: [x, E, S, O, C, P, j, k]
                    },
                    edgeStyle: {
                        selector: ".vjs-edge-style > select",
                        id: "%s",
                        label: "Text Edge Style",
                        options: [["none", "None"], ["raised", "Raised"], ["depressed", "Depressed"], ["uniform", "Uniform"], ["dropshadow", "Dropshadow"]]
                    },
                    fontFamily: {
                        selector: ".vjs-font-family > select",
                        id: "captions-font-family-%s",
                        label: "Font Family",
                        options: [["proportionalSansSerif", "Proportional Sans-Serif"], ["monospaceSansSerif", "Monospace Sans-Serif"], ["proportionalSerif", "Proportional Serif"], ["monospaceSerif", "Monospace Serif"], ["casual", "Casual"], ["script", "Script"], ["small-caps", "Small Caps"]]
                    },
                    fontPercent: {
                        selector: ".vjs-font-percent > select",
                        id: "captions-font-size-%s",
                        label: "Font Size",
                        options: [["0.50", "50%"], ["0.75", "75%"], ["1.00", "100%"], ["1.25", "125%"], ["1.50", "150%"], ["1.75", "175%"], ["2.00", "200%"], ["3.00", "300%"], ["4.00", "400%"]],
                        "default": 2,
                        parser: function (t) {
                            return "1.00" === t ? null : Number(t)
                        }
                    },
                    textOpacity: {
                        selector: ".vjs-text-opacity > select",
                        id: "captions-foreground-opacity-%s",
                        label: "Transparency",
                        options: [M, A]
                    },
                    windowColor: {selector: ".vjs-window-color > select", id: "captions-window-color-%s", label: "Color"},
                    windowOpacity: {
                        selector: ".vjs-window-opacity > select",
                        id: "captions-window-opacity-%s",
                        label: "Transparency",
                        options: [R, A, M]
                    }
                };
            I.windowColor.options = I.backgroundColor.options;
            var N = function (t) {
                function e(r, n) {
                    i(this, e);
                    var o = s(this, t.call(this, r, n));
                    return o.setDefaults(), o.hide(), o.updateDisplay = _.bind(o, o.updateDisplay), void 0 === n.persistTextTrackSettings && (o.options_.persistTextTrackSettings = o.options_.playerOptions.persistTextTrackSettings), o.on(o.$(".vjs-done-button"), "click", function () {
                        o.saveSettings(), o.hide()
                    }), o.on(o.$(".vjs-default-button"), "click", function () {
                        o.setDefaults(), o.updateDisplay()
                    }), b.each(I, function (t) {
                        o.on(o.$(t.selector), "change", o.updateDisplay)
                    }), o.options_.persistTextTrackSettings && o.restoreSettings(), o
                }

                return a(e, t), e.prototype.createElSelect_ = function (t) {
                    var e = this, r = I[t], n = r.id.replace("%s", this.id_);
                    return [(0, y.createEl)("label", {
                        className: "vjs-label",
                        textContent: r.label
                    }, {"for": n}), (0, y.createEl)("select", {id: n}, void 0, r.options.map(function (t) {
                        return (0, y.createEl)("option", {textContent: e.localize(t[1]), value: t[0]})
                    }))]
                }, e.prototype.createElFgColor_ = function () {
                    var t = (0, y.createEl)("legend", {textContent: this.localize("Text")}),
                        e = this.createElSelect_("color"),
                        r = (0, y.createEl)("span", {className: "vjs-text-opacity vjs-opacity"}, void 0, this.createElSelect_("textOpacity"));
                    return (0, y.createEl)("fieldset", {className: "vjs-fg-color vjs-tracksetting"}, void 0, [t].concat(e, r))
                }, e.prototype.createElBgColor_ = function () {
                    var t = (0, y.createEl)("legend", {textContent: this.localize("Background")}),
                        e = this.createElSelect_("backgroundColor"),
                        r = (0, y.createEl)("span", {className: "vjs-bg-opacity vjs-opacity"}, void 0, this.createElSelect_("backgroundOpacity"));
                    return (0, y.createEl)("fieldset", {className: "vjs-bg-color vjs-tracksetting"}, void 0, [t].concat(e, r))
                }, e.prototype.createElWinColor_ = function () {
                    var t = (0, y.createEl)("legend", {textContent: this.localize("Window")}),
                        e = this.createElSelect_("windowColor"),
                        r = (0, y.createEl)("span", {className: "vjs-window-opacity vjs-opacity"}, void 0, this.createElSelect_("windowOpacity"));
                    return (0, y.createEl)("fieldset", {className: "vjs-window-color vjs-tracksetting"}, void 0, [t].concat(e, r))
                }, e.prototype.createElColors_ = function () {
                    return (0, y.createEl)("div", {className: "vjs-tracksettings-colors"}, void 0, [this.createElFgColor_(), this.createElBgColor_(), this.createElWinColor_()])
                }, e.prototype.createElFont_ = function () {
                    var t = (0, y.createEl)("div", {className: "vjs-font-percent vjs-tracksetting"}, void 0, this.createElSelect_("fontPercent")),
                        e = (0, y.createEl)("div", {className: "vjs-edge-style vjs-tracksetting"}, void 0, this.createElSelect_("edgeStyle")),
                        r = (0, y.createEl)("div", {className: "vjs-font-family vjs-tracksetting"}, void 0, this.createElSelect_("fontFamily"));
                    return (0, y.createEl)("div", {className: "vjs-tracksettings-font"}, void 0, [t, e, r])
                }, e.prototype.createElControls_ = function () {
                    var t = (0, y.createEl)("button", {
                        className: "vjs-default-button",
                        textContent: this.localize("Defaults")
                    }), e = (0, y.createEl)("button", {className: "vjs-done-button", textContent: "Done"});
                    return (0, y.createEl)("div", {className: "vjs-tracksettings-controls"}, void 0, [t, e])
                }, e.prototype.createEl = function () {
                    var t = (0, y.createEl)("div", {className: "vjs-tracksettings"}, void 0, [this.createElColors_(), this.createElFont_(), this.createElControls_()]),
                        e = (0, y.createEl)("div", {
                            className: "vjs-control-text",
                            id: "TTsettingsDialogLabel-" + this.id_,
                            textContent: "Caption Settings Dialog"
                        }, {"aria-level": "1", role: "heading"}), r = (0, y.createEl)("div", {
                            className: "vjs-control-text",
                            id: "TTsettingsDialogDescription-" + this.id_,
                            textContent: "Beginning of dialog window. Escape will cancel and close the window."
                        }), n = (0, y.createEl)("div", void 0, {role: "document"}, [e, r, t]);
                    return (0, y.createEl)("div", {
                        className: "vjs-caption-settings vjs-modal-overlay",
                        tabIndex: -1
                    }, {role: "dialog", "aria-labelledby": e.id, "aria-describedby": r.id}, n)
                }, e.prototype.getValues = function () {
                    var t = this;
                    return b.reduce(I, function (e, r, n) {
                        var o = u(t.$(r.selector), r.parser);
                        return void 0 !== o && (e[n] = o), e
                    }, {})
                }, e.prototype.setValues = function (t) {
                    var e = this;
                    b.each(I, function (r, n) {
                        c(e.$(r.selector), t[n], r.parser)
                    })
                }, e.prototype.setDefaults = function () {
                    var t = this;
                    b.each(I, function (e) {
                        var r = e.hasOwnProperty("default") ? e["default"] : 0;
                        t.$(e.selector).selectedIndex = r
                    })
                }, e.prototype.restoreSettings = function () {
                    var t = void 0;
                    try {
                        t = JSON.parse(f["default"].localStorage.getItem(w))
                    } catch (e) {
                        T["default"].warn(e)
                    }
                    t && this.setValues(t)
                }, e.prototype.saveSettings = function () {
                    if (this.options_.persistTextTrackSettings) {
                        var t = this.getValues();
                        try {
                            Object.keys(t).length ? f["default"].localStorage.setItem(w, JSON.stringify(t)) : f["default"].localStorage.removeItem(w)
                        } catch (e) {
                            T["default"].warn(e)
                        }
                    }
                }, e.prototype.updateDisplay = function () {
                    var t = this.player_.getChild("textTrackDisplay");
                    t && t.updateDisplay()
                }, e
            }(d["default"]);
            d["default"].registerComponent("TextTrackSettings", N), r["default"] = N
        }, {5: 5, 81: 81, 83: 83, 86: 86, 88: 88, 95: 95}],
        72: [function (t, e, r) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e["default"] = t, e
            }

            function o(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var l = t(67), u = o(l), c = t(83), p = n(c), f = t(73), h = t(86), d = o(h), y = t(95), v = o(y),
                _ = t(75), g = o(_), b = t(92), m = t(105), T = o(m), w = t(87), E = o(w), C = t(78), k = n(C),
                O = function (t, e) {
                    var r = new v["default"].WebVTT.Parser(v["default"], v["default"].vttjs, v["default"].WebVTT.StringDecoder()),
                        n = [];
                    r.oncue = function (t) {
                        e.addCue(t)
                    }, r.onparsingerror = function (t) {
                        n.push(t)
                    }, r.onflush = function () {
                        e.trigger({type: "loadeddata", target: e})
                    }, r.parse(t), n.length > 0 && (v["default"].console && v["default"].console.groupCollapsed && v["default"].console.groupCollapsed("Text Track parsing errors for " + e.src), n.forEach(function (t) {
                        return d["default"].error(t)
                    }), v["default"].console && v["default"].console.groupEnd && v["default"].console.groupEnd()), r.flush()
                }, j = function (t, e) {
                    var r = {uri: t}, n = (0, b.isCrossOrigin)(t);
                    n && (r.cors = n), (0, T["default"])(r, p.bind(this, function (t, r, n) {
                        return t ? d["default"].error(t, r) : (e.loaded_ = !0, void("function" != typeof v["default"].WebVTT ? e.tech_ && !function () {
                            var t = function () {
                                return O(n, e)
                            };
                            e.tech_.on("vttjsloaded", t), e.tech_.on("vttjserror", function () {
                                d["default"].error("vttjs failed to load, stopping trying to process " + e.src), e.tech_.off("vttjsloaded", t)
                            })
                        }() : O(n, e)))
                    }))
                }, S = function (t) {
                    function e() {
                        var r, n, o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (i(this, e), !o.tech) throw new Error("A tech was not provided.");
                        var a = (0, E["default"])(o, {
                            kind: f.TextTrackKind[o.kind] || "subtitles",
                            language: o.language || o.srclang || ""
                        }), l = f.TextTrackMode[a.mode] || "disabled", c = a["default"];
                        "metadata" !== a.kind && "chapters" !== a.kind || (l = "hidden");
                        var h = r = s(this, t.call(this, a));
                        if (h.tech_ = a.tech, k.IS_IE8) for (var d in e.prototype) "constructor" !== d && (h[d] = e.prototype[d]);
                        h.cues_ = [], h.activeCues_ = [];
                        var y = new u["default"](h.cues_), v = new u["default"](h.activeCues_), _ = !1,
                            g = p.bind(h, function () {
                                this.activeCues, _ && (this.trigger("cuechange"), _ = !1)
                            });
                        return "disabled" !== l && h.tech_.on("timeupdate", g), Object.defineProperty(h, "default", {
                            get: function () {
                                return c
                            }, set: function () {
                            }
                        }), Object.defineProperty(h, "mode", {
                            get: function () {
                                return l
                            }, set: function (t) {
                                f.TextTrackMode[t] && (l = t, "showing" === l && this.tech_.on("timeupdate", g), this.trigger("modechange"))
                            }
                        }), Object.defineProperty(h, "cues", {
                            get: function () {
                                return this.loaded_ ? y : null
                            }, set: function () {
                            }
                        }), Object.defineProperty(h, "activeCues", {
                            get: function () {
                                if (!this.loaded_) return null;
                                if (0 === this.cues.length) return v;
                                for (var t = this.tech_.currentTime(), e = [], r = 0, n = this.cues.length; r < n; r++) {
                                    var o = this.cues[r];
                                    o.startTime <= t && o.endTime >= t ? e.push(o) : o.startTime === o.endTime && o.startTime <= t && o.startTime + .5 >= t && e.push(o)
                                }
                                if (_ = !1, e.length !== this.activeCues_.length) _ = !0; else for (var i = 0; i < e.length; i++) this.activeCues_.indexOf(e[i]) === -1 && (_ = !0);
                                return this.activeCues_ = e, v.setCues_(this.activeCues_), v
                            }, set: function () {
                            }
                        }), a.src ? (h.src = a.src, j(a.src, h)) : h.loaded_ = !0, n = h, s(r, n)
                    }

                    return a(e, t), e.prototype.addCue = function (t) {
                        var e = this.tech_.textTracks();
                        if (e) for (var r = 0; r < e.length; r++) e[r] !== this && e[r].removeCue(t);
                        this.cues_.push(t), this.cues.setCues_(this.cues_)
                    }, e.prototype.removeCue = function (t) {
                        for (var e = !1, r = 0, n = this.cues_.length; r < n; r++) {
                            var o = this.cues_[r];
                            o === t && (this.cues_.splice(r, 1), e = !0)
                        }
                        e && this.cues.setCues_(this.cues_)
                    }, e
                }(g["default"]);
            S.prototype.allowedEvents_ = {cuechange: "cuechange"}, r["default"] = S
        }, {105: 105, 67: 67, 73: 73, 75: 75, 78: 78, 83: 83, 86: 86, 87: 87, 92: 92, 95: 95}],
        73: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            r.VideoTrackKind = {
                alternative: "alternative",
                captions: "captions",
                main: "main",
                sign: "sign",
                subtitles: "subtitles",
                commentary: "commentary"
            }, r.AudioTrackKind = {
                alternative: "alternative",
                descriptions: "descriptions",
                main: "main",
                "main-desc": "main-desc",
                translation: "translation",
                commentary: "commentary"
            }, r.TextTrackKind = {
                subtitles: "subtitles",
                captions: "captions",
                descriptions: "descriptions",
                chapters: "chapters",
                metadata: "metadata"
            }, r.TextTrackMode = {disabled: "disabled", hidden: "hidden", showing: "showing"}
        }, {}],
        74: [function (t, e, r) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e["default"] = t, e
            }

            function o(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var l = t(42), u = o(l), c = t(78), p = n(c), f = t(94), h = o(f), d = function (t) {
                function e() {
                    var r, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    i(this, e);
                    var a = s(this, t.call(this));
                    if (!o && (o = a, p.IS_IE8)) {
                        o = h["default"].createElement("custom");
                        for (var l in e.prototype) "constructor" !== l && (o[l] = e.prototype[l])
                    }
                    o.tracks_ = [], Object.defineProperty(o, "length", {
                        get: function () {
                            return this.tracks_.length
                        }
                    });
                    for (var u = 0; u < n.length; u++) o.addTrack_(n[u]);
                    return r = o, s(a, r)
                }

                return a(e, t), e.prototype.addTrack_ = function (t) {
                    var e = this.tracks_.length;
                    "" + e in this || Object.defineProperty(this, e, {
                        get: function () {
                            return this.tracks_[e]
                        }
                    }), this.tracks_.indexOf(t) === -1 && (this.tracks_.push(t), this.trigger({
                        track: t,
                        type: "addtrack"
                    }))
                }, e.prototype.removeTrack_ = function (t) {
                    for (var e = void 0, r = 0, n = this.length; r < n; r++) if (this[r] === t) {
                        e = this[r], e.off && e.off(), this.tracks_.splice(r, 1);
                        break
                    }
                    e && this.trigger({track: e, type: "removetrack"})
                }, e.prototype.getTrackById = function (t) {
                    for (var e = null, r = 0, n = this.length; r < n; r++) {
                        var o = this[r];
                        if (o.id === t) {
                            e = o;
                            break
                        }
                    }
                    return e
                }, e
            }(u["default"]);
            d.prototype.allowedEvents_ = {change: "change", addtrack: "addtrack", removetrack: "removetrack"};
            for (var y in d.prototype.allowedEvents_) d.prototype["on" + y] = null;
            r["default"] = d
        }, {42: 42, 78: 78, 94: 94}],
        75: [function (t, e, r) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function o(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e["default"] = t, e
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var l = t(78), u = o(l), c = t(94), p = n(c), f = t(85), h = o(f), d = t(42), y = n(d), v = function (t) {
                function e() {
                    var r, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    i(this, e);
                    var o = s(this, t.call(this)), a = o;
                    if (u.IS_IE8) {
                        a = p["default"].createElement("custom");
                        for (var l in e.prototype) "constructor" !== l && (a[l] = e.prototype[l])
                    }
                    var c = {
                        id: n.id || "vjs_track_" + h.newGUID(),
                        kind: n.kind || "",
                        label: n.label || "",
                        language: n.language || ""
                    }, f = function (t) {
                        Object.defineProperty(a, t, {
                            get: function () {
                                return c[t]
                            }, set: function () {
                            }
                        })
                    };
                    for (var d in c) f(d);
                    return r = a, s(o, r)
                }

                return a(e, t), e
            }(y["default"]);
            r["default"] = v
        }, {42: 42, 78: 78, 85: 85, 94: 94}],
        76: [function (t, e, r) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e["default"] = t, e
            }

            function o(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var l = t(74), u = o(l), c = t(78), p = n(c), f = t(94), h = o(f), d = function (t, e) {
                for (var r = 0; r < t.length; r++) e.id !== t[r].id && (t[r].selected = !1)
            }, y = function (t) {
                function e() {
                    var r, n, o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    i(this, e);
                    for (var a = void 0, l = o.length - 1; l >= 0; l--) if (o[l].selected) {
                        d(o, o[l]);
                        break
                    }
                    if (p.IS_IE8) {
                        a = h["default"].createElement("custom");
                        for (var c in u["default"].prototype) "constructor" !== c && (a[c] = u["default"].prototype[c]);
                        for (var f in e.prototype) "constructor" !== f && (a[f] = e.prototype[f])
                    }
                    return a = r = s(this, t.call(this, o, a)), a.changing_ = !1, Object.defineProperty(a, "selectedIndex", {
                        get: function () {
                            for (var t = 0; t < this.length; t++) if (this[t].selected) return t;
                            return -1
                        }, set: function () {
                        }
                    }), n = a, s(r, n)
                }

                return a(e, t), e.prototype.addTrack_ = function (e) {
                    var r = this;
                    e.selected && d(this, e), t.prototype.addTrack_.call(this, e), e.addEventListener && e.addEventListener("selectedchange", function () {
                        r.changing_ || (r.changing_ = !0, d(r, e), r.changing_ = !1, r.trigger("change"))
                    })
                }, e.prototype.addTrack = function (t) {
                    this.addTrack_(t)
                }, e.prototype.removeTrack = function (e) {
                    t.prototype.removeTrack_.call(this, e)
                }, e
            }(u["default"]);
            r["default"] = y
        }, {74: 74, 78: 78, 94: 94}],
        77: [function (t, e, r) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e["default"] = t, e
            }

            function o(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            r.__esModule = !0;
            var l = t(73), u = t(75), c = o(u), p = t(87), f = o(p), h = t(78), d = n(h), y = function (t) {
                function e() {
                    var r, n, o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    i(this, e);
                    var a = (0, f["default"])(o, {kind: l.VideoTrackKind[o.kind] || ""}),
                        u = r = s(this, t.call(this, a)), c = !1;
                    if (d.IS_IE8) for (var p in e.prototype) "constructor" !== p && (u[p] = e.prototype[p]);
                    return Object.defineProperty(u, "selected", {
                        get: function () {
                            return c
                        }, set: function (t) {
                            "boolean" == typeof t && t !== c && (c = t, this.trigger("selectedchange"))
                        }
                    }), a.selected && (u.selected = a.selected), n = u, s(r, n)
                }

                return a(e, t), e
            }(c["default"]);
            r["default"] = y
        }, {73: 73, 75: 75, 78: 78, 87: 87}],
        78: [function (t, e, r) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function o(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e["default"] = t, e
            }

            r.__esModule = !0, r.BACKGROUND_SIZE_SUPPORTED = r.TOUCH_ENABLED = r.IS_ANY_SAFARI = r.IS_SAFARI = r.IE_VERSION = r.IS_IE8 = r.IS_CHROME = r.IS_EDGE = r.IS_FIREFOX = r.IS_NATIVE_ANDROID = r.IS_OLD_ANDROID = r.ANDROID_VERSION = r.IS_ANDROID = r.IOS_VERSION = r.IS_IOS = r.IS_IPOD = r.IS_IPHONE = r.IS_IPAD = void 0;
            var i = t(81), s = o(i), a = t(95), l = n(a),
                u = l["default"].navigator && l["default"].navigator.userAgent || "",
                c = /AppleWebKit\/([\d.]+)/i.exec(u), p = c ? parseFloat(c.pop()) : null,
                f = r.IS_IPAD = /iPad/i.test(u), h = r.IS_IPHONE = /iPhone/i.test(u) && !f,
                d = r.IS_IPOD = /iPod/i.test(u), y = r.IS_IOS = h || f || d, v = (r.IOS_VERSION = function () {
                    var t = u.match(/OS (\d+)_/i);
                    return t && t[1] ? t[1] : null
                }(), r.IS_ANDROID = /Android/i.test(u)), _ = r.ANDROID_VERSION = function () {
                    var t = u.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);
                    if (!t) return null;
                    var e = t[1] && parseFloat(t[1]), r = t[2] && parseFloat(t[2]);
                    return e && r ? parseFloat(t[1] + "." + t[2]) : e ? e : null
                }(),
                g = (r.IS_OLD_ANDROID = v && /webkit/i.test(u) && _ < 2.3, r.IS_NATIVE_ANDROID = v && _ < 5 && p < 537, r.IS_FIREFOX = /Firefox/i.test(u), r.IS_EDGE = /Edge/i.test(u)),
                b = r.IS_CHROME = !g && /Chrome/i.test(u),
                m = (r.IS_IE8 = /MSIE\s8\.0/.test(u), r.IE_VERSION = function (t) {
                    return t && parseFloat(t[1])
                }(/MSIE\s(\d+)\.\d/.exec(u)), r.IS_SAFARI = /Safari/i.test(u) && !b && !v && !g);
            r.IS_ANY_SAFARI = m || y, r.TOUCH_ENABLED = s.isReal() && ("ontouchstart" in l["default"] || l["default"].DocumentTouch && l["default"].document instanceof l["default"].DocumentTouch), r.BACKGROUND_SIZE_SUPPORTED = s.isReal() && "backgroundSize" in l["default"].document.createElement("video").style
        }, {81: 81, 95: 95}],
        79: [function (t, e, r) {
            "use strict";

            function n(t, e) {
                var r = 0, n = void 0, i = void 0;
                if (!e) return 0;
                t && t.length || (t = (0, o.createTimeRange)(0, 0));
                for (var s = 0; s < t.length; s++) n = t.start(s), i = t.end(s), i > e && (i = e), r += i - n;
                return r / e
            }

            r.__esModule = !0, r.bufferedPercent = n;
            var o = t(90)
        }, {90: 90}],
        80: [function (t, e, r) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function o(t, e) {
                if (!t || !e) return "";
                if ("function" == typeof s["default"].getComputedStyle) {
                    var r = s["default"].getComputedStyle(t);
                    return r ? r[e] : ""
                }
                return t.currentStyle[e] || ""
            }

            r.__esModule = !0, r["default"] = o;
            var i = t(95), s = n(i)
        }, {95: 95}],
        81: [function (t, e, r) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e["default"] = t, e
            }

            function o(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function i(t, e) {
                return t.raw = e, t
            }

            function s(t) {
                return "string" == typeof t && /\S/.test(t)
            }

            function a(t) {
                if (/\s/.test(t)) throw new Error("class has illegal whitespace characters")
            }

            function l(t) {
                return new RegExp("(^|\\s)" + t + "($|\\s)")
            }

            function u() {
                return B["default"] === V["default"].document && "undefined" != typeof B["default"].createElement
            }

            function c(t) {
                return (0, G.isObject)(t) && 1 === t.nodeType
            }

            function p(t) {
                return function (e, r) {
                    if (!s(e)) return B["default"][t](null);
                    s(r) && (r = B["default"].querySelector(r));
                    var n = c(r) ? r : B["default"];
                    return n[t] && n[t](e)
                }
            }

            function f(t) {
                return 0 === t.indexOf("#") && (t = t.slice(1)), B["default"].getElementById(t)
            }

            function h() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "div",
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, n = arguments[3],
                    o = B["default"].createElement(t);
                return Object.getOwnPropertyNames(e).forEach(function (t) {
                    var r = e[t];
                    t.indexOf("aria-") !== -1 || "role" === t || "type" === t ? (X["default"].warn((0, q["default"])(L, t, r)), o.setAttribute(t, r)) : "textContent" === t ? d(o, r) : o[t] = r
                }), Object.getOwnPropertyNames(r).forEach(function (t) {
                    o.setAttribute(t, r[t])
                }), n && N(o, n), o
            }

            function d(t, e) {
                return "undefined" == typeof t.textContent ? t.innerText = e : t.textContent = e, t
            }

            function y(t, e) {
                e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t)
            }

            function v(t) {
                var e = t[K];
                return e || (e = t[K] = W.newGUID()), Y[e] || (Y[e] = {}), Y[e]
            }

            function _(t) {
                var e = t[K];
                return !!e && !!Object.getOwnPropertyNames(Y[e]).length
            }

            function g(t) {
                var e = t[K];
                if (e) {
                    delete Y[e];
                    try {
                        delete t[K]
                    } catch (r) {
                        t.removeAttribute ? t.removeAttribute(K) : t[K] = null
                    }
                }
            }

            function b(t, e) {
                return a(e), t.classList ? t.classList.contains(e) : l(e).test(t.className)
            }

            function m(t, e) {
                return t.classList ? t.classList.add(e) : b(t, e) || (t.className = (t.className + " " + e).trim()), t
            }

            function T(t, e) {
                return t.classList ? t.classList.remove(e) : (a(e), t.className = t.className.split(/\s+/).filter(function (t) {
                    return t !== e
                }).join(" ")), t
            }

            function w(t, e, r) {
                var n = b(t, e);
                if ("function" == typeof r && (r = r(t, e)), "boolean" != typeof r && (r = !n), r !== n) return r ? m(t, e) : T(t, e), t
            }

            function E(t, e) {
                Object.getOwnPropertyNames(e).forEach(function (r) {
                    var n = e[r];
                    null === n || "undefined" == typeof n || n === !1 ? t.removeAttribute(r) : t.setAttribute(r, n === !0 ? "" : n)
                })
            }

            function C(t) {
                var e = {}, r = ",autoplay,controls,loop,muted,default,";
                if (t && t.attributes && t.attributes.length > 0) for (var n = t.attributes, o = n.length - 1; o >= 0; o--) {
                    var i = n[o].name, s = n[o].value;
                    "boolean" != typeof t[i] && r.indexOf("," + i + ",") === -1 || (s = null !== s), e[i] = s
                }
                return e
            }

            function k(t, e) {
                return t.getAttribute(e)
            }

            function O(t, e, r) {
                t.setAttribute(e, r)
            }

            function j(t, e) {
                t.removeAttribute(e)
            }

            function S() {
                B["default"].body.focus(), B["default"].onselectstart = function () {
                    return !1
                }
            }

            function x() {
                B["default"].onselectstart = function () {
                    return !0
                }
            }

            function P(t) {
                var e = void 0;
                if (t.getBoundingClientRect && t.parentNode && (e = t.getBoundingClientRect()), !e) return {
                    left: 0,
                    top: 0
                };
                var r = B["default"].documentElement, n = B["default"].body, o = r.clientLeft || n.clientLeft || 0,
                    i = V["default"].pageXOffset || n.scrollLeft, s = e.left + i - o,
                    a = r.clientTop || n.clientTop || 0, l = V["default"].pageYOffset || n.scrollTop, u = e.top + l - a;
                return {left: Math.round(s), top: Math.round(u)}
            }

            function M(t, e) {
                var r = {}, n = P(t), o = t.offsetWidth, i = t.offsetHeight, s = n.top, a = n.left, l = e.pageY,
                    u = e.pageX;
                return e.changedTouches && (u = e.changedTouches[0].pageX, l = e.changedTouches[0].pageY), r.y = Math.max(0, Math.min(1, (s - l + i) / i)), r.x = Math.max(0, Math.min(1, (u - a) / o)), r
            }

            function A(t) {
                return (0, G.isObject)(t) && 3 === t.nodeType
            }

            function R(t) {
                for (; t.firstChild;) t.removeChild(t.firstChild);
                return t
            }

            function I(t) {
                return "function" == typeof t && (t = t()), (Array.isArray(t) ? t : [t]).map(function (t) {
                    return "function" == typeof t && (t = t()), c(t) || A(t) ? t : "string" == typeof t && /\S/.test(t) ? B["default"].createTextNode(t) : void 0
                }).filter(function (t) {
                    return t
                })
            }

            function N(t, e) {
                return I(e).forEach(function (e) {
                    return t.appendChild(e)
                }), t
            }

            function D(t, e) {
                return N(R(t), e)
            }

            r.__esModule = !0, r.$$ = r.$ = void 0;
            var L = i(["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ", " to ", "."], ["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ", " to ", "."]);
            r.isReal = u, r.isEl = c, r.getEl = f, r.createEl = h, r.textContent = d, r.insertElFirst = y, r.getElData = v, r.hasElData = _, r.removeElData = g, r.hasElClass = b, r.addElClass = m, r.removeElClass = T, r.toggleElClass = w, r.setElAttributes = E, r.getElAttributes = C, r.getAttribute = k, r.setAttribute = O, r.removeAttribute = j, r.blockTextSelection = S, r.unblockTextSelection = x, r.findElPosition = P, r.getPointerPosition = M, r.isTextNode = A, r.emptyEl = R, r.normalizeContent = I, r.appendContent = N, r.insertContent = D;
            var F = t(94), B = o(F), H = t(95), V = o(H), U = t(85), W = n(U), z = t(86), X = o(z), $ = t(98), q = o($),
                G = t(88), Y = {}, K = "vdata" + (new Date).getTime();
            r.$ = p("querySelector"), r.$$ = p("querySelectorAll")
        }, {85: 85, 86: 86, 88: 88, 94: 94, 95: 95, 98: 98}],
        82: [function (t, e, r) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function o(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e["default"] = t, e
            }

            function i(t, e) {
                var r = h.getElData(t);
                0 === r.handlers[e].length && (delete r.handlers[e], t.removeEventListener ? t.removeEventListener(e, r.dispatcher, !1) : t.detachEvent && t.detachEvent("on" + e, r.dispatcher)), Object.getOwnPropertyNames(r.handlers).length <= 0 && (delete r.handlers, delete r.dispatcher, delete r.disabled), 0 === Object.getOwnPropertyNames(r).length && h.removeElData(t)
            }

            function s(t, e, r, n) {
                r.forEach(function (r) {
                    t(e, r, n)
                })
            }

            function a(t) {
                function e() {
                    return !0
                }

                function r() {
                    return !1
                }

                return t && t.isPropagationStopped || !function () {
                    var n = t || b["default"].event;
                    t = {};
                    for (var o in n) "layerX" !== o && "layerY" !== o && "keyLocation" !== o && "webkitMovementX" !== o && "webkitMovementY" !== o && ("returnValue" === o && n.preventDefault || (t[o] = n[o]));
                    if (t.target || (t.target = t.srcElement || T["default"]), t.relatedTarget || (t.relatedTarget = t.fromElement === t.target ? t.toElement : t.fromElement), t.preventDefault = function () {
                        n.preventDefault && n.preventDefault(), t.returnValue = !1, n.returnValue = !1, t.defaultPrevented = !0
                    }, t.defaultPrevented = !1, t.stopPropagation = function () {
                        n.stopPropagation && n.stopPropagation(), t.cancelBubble = !0, n.cancelBubble = !0, t.isPropagationStopped = e
                    }, t.isPropagationStopped = r, t.stopImmediatePropagation = function () {
                        n.stopImmediatePropagation && n.stopImmediatePropagation(), t.isImmediatePropagationStopped = e, t.stopPropagation()
                    }, t.isImmediatePropagationStopped = r, null !== t.clientX && void 0 !== t.clientX) {
                        var i = T["default"].documentElement, s = T["default"].body;
                        t.pageX = t.clientX + (i && i.scrollLeft || s && s.scrollLeft || 0) - (i && i.clientLeft || s && s.clientLeft || 0), t.pageY = t.clientY + (i && i.scrollTop || s && s.scrollTop || 0) - (i && i.clientTop || s && s.clientTop || 0)
                    }
                    t.which = t.charCode || t.keyCode, null !== t.button && void 0 !== t.button && (t.button = 1 & t.button ? 0 : 4 & t.button ? 1 : 2 & t.button ? 2 : 0)
                }(), t
            }

            function l(t, e, r) {
                if (Array.isArray(e)) return s(l, t, e, r);
                var n = h.getElData(t);
                n.handlers || (n.handlers = {}), n.handlers[e] || (n.handlers[e] = []), r.guid || (r.guid = y.newGUID()), n.handlers[e].push(r), n.dispatcher || (n.disabled = !1, n.dispatcher = function (e, r) {
                    if (!n.disabled) {
                        e = a(e);
                        var o = n.handlers[e.type];
                        if (o) for (var i = o.slice(0), s = 0, l = i.length; s < l && !e.isImmediatePropagationStopped(); s++) try {
                            i[s].call(t, e, r)
                        } catch (u) {
                            _["default"].error(u)
                        }
                    }
                }), 1 === n.handlers[e].length && (t.addEventListener ? t.addEventListener(e, n.dispatcher, !1) : t.attachEvent && t.attachEvent("on" + e, n.dispatcher))
            }

            function u(t, e, r) {
                if (h.hasElData(t)) {
                    var n = h.getElData(t);
                    if (n.handlers) {
                        if (Array.isArray(e)) return s(u, t, e, r);
                        var o = function (e) {
                            n.handlers[e] = [], i(t, e)
                        };
                        if (e) {
                            var a = n.handlers[e];
                            if (a) {
                                if (!r) return void o(e);
                                if (r.guid) for (var l = 0; l < a.length; l++) a[l].guid === r.guid && a.splice(l--, 1);
                                i(t, e)
                            }
                        } else for (var c in n.handlers) o(c)
                    }
                }
            }

            function c(t, e, r) {
                var n = h.hasElData(t) ? h.getElData(t) : {}, o = t.parentNode || t.ownerDocument;
                if ("string" == typeof e && (e = {
                    type: e,
                    target: t
                }), e = a(e), n.dispatcher && n.dispatcher.call(t, e, r), o && !e.isPropagationStopped() && e.bubbles === !0) c.call(null, o, e, r); else if (!o && !e.defaultPrevented) {
                    var i = h.getElData(e.target);
                    e.target[e.type] && (i.disabled = !0, "function" == typeof e.target[e.type] && e.target[e.type](), i.disabled = !1)
                }
                return !e.defaultPrevented
            }

            function p(t, e, r) {
                if (Array.isArray(e)) return s(p, t, e, r);
                var n = function o() {
                    u(t, e, o), r.apply(this, arguments)
                };
                n.guid = r.guid = r.guid || y.newGUID(), l(t, e, n)
            }

            r.__esModule = !0, r.fixEvent = a, r.on = l, r.off = u, r.trigger = c, r.one = p;
            var f = t(81), h = o(f), d = t(85), y = o(d), v = t(86), _ = n(v), g = t(95), b = n(g), m = t(94), T = n(m)
        }, {81: 81, 85: 85, 86: 86, 94: 94, 95: 95}],
        83: [function (t, e, r) {
            "use strict";
            r.__esModule = !0, r.throttle = r.bind = void 0;
            var n = t(85);
            r.bind = function (t, e, r) {
                e.guid || (e.guid = (0, n.newGUID)());
                var o = function () {
                    return e.apply(t, arguments)
                };
                return o.guid = r ? r + "_" + e.guid : e.guid, o
            }, r.throttle = function (t, e) {
                var r = Date.now(), n = function () {
                    var n = Date.now();
                    n - r >= e && (t.apply(void 0, arguments), r = n)
                };
                return n
            }
        }, {85: 85}],
        84: [function (t, e, r) {
            "use strict";

            function n(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t;
                t = t < 0 ? 0 : t;
                var r = Math.floor(t % 60), n = Math.floor(t / 60 % 60), o = Math.floor(t / 3600),
                    i = Math.floor(e / 60 % 60), s = Math.floor(e / 3600);
                return (isNaN(t) || t === 1 / 0) && (o = n = r = "-"), o = o > 0 || s > 0 ? o + ":" : "", n = ((o || i >= 10) && n < 10 ? "0" + n : n) + ":", r = r < 10 ? "0" + r : r, o + n + r
            }

            r.__esModule = !0, r["default"] = n
        }, {}],
        85: [function (t, e, r) {
            "use strict";

            function n() {
                return o++
            }

            r.__esModule = !0, r.newGUID = n;
            var o = 1
        }, {}],
        86: [function (t, e, r) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            r.__esModule = !0, r.logByType = void 0;
            var o = t(95), i = n(o), s = t(78), a = t(88), l = void 0, u = r.logByType = function (t, e) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : !!s.IE_VERSION && s.IE_VERSION < 11;
                "log" !== t && e.unshift(t.toUpperCase() + ":"), l.history.push(e), e.unshift("VIDEOJS:");
                var n = i["default"].console && i["default"].console[t];
                n && (r && (e = e.map(function (t) {
                    if ((0, a.isObject)(t) || Array.isArray(t)) try {
                        return JSON.stringify(t)
                    } catch (e) {
                        return String(t)
                    }
                    return String(t)
                }).join(" ")), n.apply ? n[Array.isArray(e) ? "apply" : "call"](i["default"].console, e) : n(e))
            };
            l = function () {
                for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                u("log", e)
            }, l.history = [], l.error = function () {
                for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                return u("error", e)
            }, l.warn = function () {
                for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                return u("warn", e)
            }, r["default"] = l
        }, {78: 78, 88: 88, 95: 95}],
        87: [function (t, e, r) {
            "use strict";

            function n() {
                for (var t = {}, e = arguments.length, r = Array(e), i = 0; i < e; i++) r[i] = arguments[i];
                return r.forEach(function (e) {
                    e && (0, o.each)(e, function (e, r) {
                        return (0, o.isPlain)(e) ? ((0, o.isPlain)(t[r]) || (t[r] = {}), void(t[r] = n(t[r], e))) : void(t[r] = e)
                    })
                }), t
            }

            r.__esModule = !0, r["default"] = n;
            var o = t(88)
        }, {88: 88}],
        88: [function (t, e, r) {
            "use strict";

            function n(t, e) {
                Object.keys(t).forEach(function (r) {
                    return e(t[r], r)
                })
            }

            function o(t, e) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                return Object.keys(t).reduce(function (r, n) {
                    return e(r, t[n], n)
                }, r)
            }

            function i(t) {
                for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++) r[o - 1] = arguments[o];
                return Object.assign ? Object.assign.apply(Object, [t].concat(r)) : (r.forEach(function (e) {
                    e && n(e, function (e, r) {
                        t[r] = e
                    })
                }), t)
            }

            function s(t) {
                return !!t && "object" === ("undefined" == typeof t ? "undefined" : l(t))
            }

            function a(t) {
                return s(t) && "[object Object]" === u.call(t) && t.constructor === Object
            }

            r.__esModule = !0;
            var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            };
            r.each = n, r.reduce = o, r.assign = i, r.isObject = s, r.isPlain = a;
            var u = Object.prototype.toString
        }, {}],
        89: [function (t, e, r) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            r.__esModule = !0, r.setTextContent = r.createStyleElement = void 0;
            var o = t(94), i = n(o);
            r.createStyleElement = function (t) {
                var e = i["default"].createElement("style");
                return e.className = t, e
            }, r.setTextContent = function (t, e) {
                t.styleSheet ? t.styleSheet.cssText = e : t.textContent = e
            }
        }, {94: 94}],
        90: [function (t, e, r) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function o(t, e, r) {
                if (e < 0 || e > r) throw new Error("Failed to execute '" + t + "' on 'TimeRanges': The index provided (" + e + ") is greater than or equal to the maximum bound (" + r + ").")
            }

            function i(t, e, r, n) {
                return void 0 === n && (u["default"].warn("DEPRECATED: Function '" + t + "' on 'TimeRanges' called without an index argument."), n = 0), o(t, n, r.length - 1), r[n][e]
            }

            function s(t) {
                return void 0 === t || 0 === t.length ? {
                    length: 0, start: function () {
                        throw new Error("This TimeRanges object is empty")
                    }, end: function () {
                        throw new Error("This TimeRanges object is empty")
                    }
                } : {length: t.length, start: i.bind(null, "start", 0, t), end: i.bind(null, "end", 1, t)}
            }

            function a(t, e) {
                return Array.isArray(t) ? s(t) : void 0 === t || void 0 === e ? s() : s([[t, e]])
            }

            r.__esModule = !0, r.createTimeRange = void 0, r.createTimeRanges = a;
            var l = t(86), u = n(l);
            r.createTimeRange = a
        }, {86: 86}],
        91: [function (t, e, r) {
            "use strict";

            function n(t) {
                return "string" != typeof t ? t : t.charAt(0).toUpperCase() + t.slice(1)
            }

            r.__esModule = !0, r["default"] = n
        }, {}],
        92: [function (t, e, r) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            r.__esModule = !0, r.isCrossOrigin = r.getFileExtension = r.getAbsoluteURL = r.parseUrl = void 0;
            var o = t(94), i = n(o), s = t(95), a = n(s), l = r.parseUrl = function (t) {
                var e = ["protocol", "hostname", "port", "pathname", "search", "hash", "host"],
                    r = i["default"].createElement("a");
                r.href = t;
                var n = "" === r.host && "file:" !== r.protocol, o = void 0;
                n && (o = i["default"].createElement("div"), o.innerHTML = '<a href="' + t + '"></a>', r = o.firstChild, o.setAttribute("style", "display:none; position:absolute;"), i["default"].body.appendChild(o));
                for (var s = {}, a = 0; a < e.length; a++) s[e[a]] = r[e[a]];
                return "http:" === s.protocol && (s.host = s.host.replace(/:80$/, "")), "https:" === s.protocol && (s.host = s.host.replace(/:443$/, "")), n && i["default"].body.removeChild(o), s
            };
            r.getAbsoluteURL = function (t) {
                if (!t.match(/^https?:\/\//)) {
                    var e = i["default"].createElement("div");
                    e.innerHTML = '<a href="' + t + '">x</a>', t = e.firstChild.href
                }
                return t
            }, r.getFileExtension = function (t) {
                if ("string" == typeof t) {
                    var e = /^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/i, r = e.exec(t);
                    if (r) return r.pop().toLowerCase()
                }
                return ""
            }, r.isCrossOrigin = function (t) {
                var e = a["default"].location, r = l(t), n = ":" === r.protocol ? e.protocol : r.protocol,
                    o = n + r.host !== e.protocol + e.host;
                return o
            }
        }, {94: 94, 95: 95}],
        93: [function (e, r, n) {
            "use strict";

            function o(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e["default"] = t, e
            }

            function i(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function s(t, e, r) {
                var n = void 0;
                if ("string" == typeof t) {
                    if (0 === t.indexOf("#") && (t = t.slice(1)), s.getPlayers()[t]) return e && H["default"].warn('Player "' + t + '" is already initialised. Options will not be applied.'), r && s.getPlayers()[t].ready(r), s.getPlayers()[t];
                    n = U.getEl(t)
                } else n = t;
                if (!n || !n.nodeName) throw new TypeError("The element or ID supplied is not valid. (videojs)");
                if (n.player || E["default"].players[n.playerId]) return n.player || E["default"].players[n.playerId];
                e = e || {}, s.hooks("beforesetup").forEach(function (t) {
                    var r = t(n, (0, j["default"])(e));
                    return !(0, q.isObject)(r) || Array.isArray(r) ? void H["default"].error("please return an object in beforesetup hooks") : void(e = (0, j["default"])(e, r))
                });
                var o = _["default"].getComponent("Player"), i = new o(n, e, r);
                return s.hooks("setup").forEach(function (t) {
                    return t(i)
                }), i
            }

            n.__esModule = !0;
            var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, l = e(95), u = i(l), c = e(94), p = i(c), f = e(56), h = o(f), d = e(89), y = o(d), v = e(5), _ = i(v),
                g = e(42), b = i(g), m = e(82), T = o(m), w = e(51), E = i(w), C = e(52), k = i(C), O = e(87), j = i(O),
                S = e(83), x = o(S), P = e(72), M = i(P), A = e(64), R = i(A), I = e(77), N = i(I), D = e(90),
                L = e(84), F = i(L), B = e(86), H = i(B), V = e(81), U = o(V), W = e(78), z = o(W), X = e(92), $ = o(X),
                q = e(88), G = e(80), Y = i(G), K = e(43), J = i(K), Q = e(105), Z = i(Q), tt = e(62), et = i(tt);
            if ("undefined" == typeof HTMLVideoElement && U.isReal() && (p["default"].createElement("video"), p["default"].createElement("audio"), p["default"].createElement("track")), s.hooks_ = {}, s.hooks = function (t, e) {
                return s.hooks_[t] = s.hooks_[t] || [], e && (s.hooks_[t] = s.hooks_[t].concat(e)), s.hooks_[t]
            }, s.hook = function (t, e) {
                s.hooks(t, e)
            }, s.removeHook = function (t, e) {
                var r = s.hooks(t).indexOf(e);
                return !(r <= -1) && (s.hooks_[t] = s.hooks_[t].slice(), s.hooks_[t].splice(r, 1), !0)
            }, u["default"].VIDEOJS_NO_DYNAMIC_STYLE !== !0 && U.isReal()) {
                var rt = U.$(".vjs-styles-defaults");
                if (!rt) {
                    rt = y.createStyleElement("vjs-styles-defaults");
                    var nt = U.$("head");
                    nt && nt.insertBefore(rt, nt.firstChild), y.setTextContent(rt, "\n      .video-js {\n        width: 300px;\n        height: 150px;\n      }\n\n      .vjs-fluid {\n        padding-top: 56.25%\n      }\n    ")
                }
            }
            h.autoSetupTimeout(1, s), s.VERSION = "5.16.0", s.options = E["default"].prototype.options_, s.getPlayers = function () {
                return E["default"].players
            }, s.players = E["default"].players, s.getComponent = _["default"].getComponent, s.registerComponent = function (t, e) {
                et["default"].isTech(e) && H["default"].warn("The " + t + " tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)"), _["default"].registerComponent.call(_["default"], t, e)
            }, s.getTech = et["default"].getTech, s.registerTech = et["default"].registerTech, s.browser = z, s.TOUCH_ENABLED = z.TOUCH_ENABLED, s.extend = J["default"], s.mergeOptions = j["default"], s.bind = x.bind, s.plugin = k["default"], s.addLanguage = function (t, e) {
                var r;
                return t = ("" + t).toLowerCase(), s.options.languages = (0, j["default"])(s.options.languages, (r = {}, r[t] = e, r)), s.options.languages[t]
            }, s.log = H["default"], s.createTimeRange = s.createTimeRanges = D.createTimeRanges, s.formatTime = F["default"], s.parseUrl = $.parseUrl, s.isCrossOrigin = $.isCrossOrigin, s.EventTarget = b["default"], s.on = T.on, s.one = T.one, s.off = T.off, s.trigger = T.trigger, s.xhr = Z["default"], s.TextTrack = M["default"], s.AudioTrack = R["default"], s.VideoTrack = N["default"], s.isEl = U.isEl, s.isTextNode = U.isTextNode, s.createEl = U.createEl, s.hasClass = U.hasElClass, s.addClass = U.addElClass, s.removeClass = U.removeElClass, s.toggleClass = U.toggleElClass, s.setAttributes = U.setElAttributes, s.getAttributes = U.getElAttributes, s.emptyEl = U.emptyEl, s.appendContent = U.appendContent, s.insertContent = U.insertContent, s.computedStyle = Y["default"], "function" == typeof t && t.amd ? t("videojs", [], function () {
                return s
            }) : "object" === ("undefined" == typeof n ? "undefined" : a(n)) && "object" === ("undefined" == typeof r ? "undefined" : a(r)) && (r.exports = s), n["default"] = s
        }, {
            105: 105,
            42: 42,
            43: 43,
            5: 5,
            51: 51,
            52: 52,
            56: 56,
            62: 62,
            64: 64,
            72: 72,
            77: 77,
            78: 78,
            80: 80,
            81: 81,
            82: 82,
            83: 83,
            84: 84,
            86: 86,
            87: 87,
            88: 88,
            89: 89,
            90: 90,
            92: 92,
            94: 94,
            95: 95
        }],
        94: [function (t, e, r) {
            (function (r) {
                var n = "undefined" != typeof r ? r : "undefined" != typeof window ? window : {}, o = t(96);
                if ("undefined" != typeof document) e.exports = document; else {
                    var i = n["__GLOBAL_DOCUMENT_CACHE@4"];
                    i || (i = n["__GLOBAL_DOCUMENT_CACHE@4"] = o), e.exports = i
                }
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {96: 96}],
        95: [function (t, e, r) {
            (function (t) {
                "undefined" != typeof window ? e.exports = window : "undefined" != typeof t ? e.exports = t : "undefined" != typeof self ? e.exports = self : e.exports = {}
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        96: [function (t, e, r) {
        }, {}],
        97: [function (t, e, r) {
            function n(t, e) {
                var r, n = null;
                try {
                    r = JSON.parse(t, e)
                } catch (o) {
                    n = o
                }
                return [n, r]
            }

            e.exports = n
        }, {}],
        98: [function (t, e, r) {
            function n(t) {
                return t.replace(/\n\r?\s*/g, "")
            }

            e.exports = function (t) {
                for (var e = "", r = 0; r < arguments.length; r++) e += n(t[r]) + (arguments[r + 1] || "");
                return e
            }
        }, {}],
        99: [function (t, e, r) {
            e.exports = {WebVTT: t(100).WebVTT, VTTCue: t(101).VTTCue, VTTRegion: t(103).VTTRegion}
        }, {100: 100, 101: 101, 103: 103}],
        100: [function (t, e, r) {
            !function (t) {
                function e(t, e) {
                    this.name = "ParsingError", this.code = t.code, this.message = e || t.message
                }

                function r(t) {
                    function e(t, e, r, n) {
                        return 3600 * (0 | t) + 60 * (0 | e) + (0 | r) + (0 | n) / 1e3
                    }

                    var r = t.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
                    return r ? r[3] ? e(r[1], r[2], r[3].replace(":", ""), r[4]) : r[1] > 59 ? e(r[1], r[2], 0, r[4]) : e(0, r[1], r[2], r[4]) : null
                }

                function n() {
                    this.values = d(null)
                }

                function o(t, e, r, n) {
                    var o = n ? t.split(n) : [t];
                    for (var i in o) if ("string" == typeof o[i]) {
                        var s = o[i].split(r);
                        if (2 === s.length) {
                            var a = s[0], l = s[1];
                            e(a, l)
                        }
                    }
                }

                function i(t, i, s) {
                    function a() {
                        var n = r(t);
                        if (null === n) throw new e(e.Errors.BadTimeStamp, "Malformed timestamp: " + c);
                        return t = t.replace(/^[^\sa-zA-Z-]+/, ""), n
                    }

                    function l(t, e) {
                        var r = new n;
                        o(t, function (t, e) {
                            switch (t) {
                                case"region":
                                    for (var n = s.length - 1; n >= 0; n--) if (s[n].id === e) {
                                        r.set(t, s[n].region);
                                        break
                                    }
                                    break;
                                case"vertical":
                                    r.alt(t, e, ["rl", "lr"]);
                                    break;
                                case"line":
                                    var o = e.split(","), i = o[0];
                                    r.integer(t, i), r.percent(t, i) ? r.set("snapToLines", !1) : null,
                                        r.alt(t, i, ["auto"]), 2 === o.length && r.alt("lineAlign", o[1], ["start", "middle", "end"]);
                                    break;
                                case"position":
                                    o = e.split(","), r.percent(t, o[0]), 2 === o.length && r.alt("positionAlign", o[1], ["start", "middle", "end"]);
                                    break;
                                case"size":
                                    r.percent(t, e);
                                    break;
                                case"align":
                                    r.alt(t, e, ["start", "middle", "end", "left", "right"])
                            }
                        }, /:/, /\s/), e.region = r.get("region", null), e.vertical = r.get("vertical", ""), e.line = r.get("line", "auto"), e.lineAlign = r.get("lineAlign", "start"), e.snapToLines = r.get("snapToLines", !0), e.size = r.get("size", 100), e.align = r.get("align", "middle"), e.position = r.get("position", {
                            start: 0,
                            left: 0,
                            middle: 50,
                            end: 100,
                            right: 100
                        }, e.align), e.positionAlign = r.get("positionAlign", {
                            start: "start",
                            left: "start",
                            middle: "middle",
                            end: "end",
                            right: "end"
                        }, e.align)
                    }

                    function u() {
                        t = t.replace(/^\s+/, "")
                    }

                    var c = t;
                    if (u(), i.startTime = a(), u(), "-->" !== t.substr(0, 3)) throw new e(e.Errors.BadTimeStamp, "Malformed time stamp (time stamps must be separated by '-->'): " + c);
                    t = t.substr(3), u(), i.endTime = a(), u(), l(t, i)
                }

                function s(t, e) {
                    function n() {
                        function t(t) {
                            return e = e.substr(t.length), t
                        }

                        if (!e) return null;
                        var r = e.match(/^([^<]*)(<[^>]+>?)?/);
                        return t(r[1] ? r[1] : r[2])
                    }

                    function o(t) {
                        return y[t]
                    }

                    function i(t) {
                        for (; d = t.match(/&(amp|lt|gt|lrm|rlm|nbsp);/);) t = t.replace(d[0], o);
                        return t
                    }

                    function s(t, e) {
                        return !g[e.localName] || g[e.localName] === t.localName
                    }

                    function a(e, r) {
                        var n = v[e];
                        if (!n) return null;
                        var o = t.document.createElement(n);
                        o.localName = n;
                        var i = _[e];
                        return i && r && (o[i] = r.trim()), o
                    }

                    for (var l, u = t.document.createElement("div"), c = u, p = []; null !== (l = n());) if ("<" !== l[0]) c.appendChild(t.document.createTextNode(i(l))); else {
                        if ("/" === l[1]) {
                            p.length && p[p.length - 1] === l.substr(2).replace(">", "") && (p.pop(), c = c.parentNode);
                            continue
                        }
                        var f, h = r(l.substr(1, l.length - 2));
                        if (h) {
                            f = t.document.createProcessingInstruction("timestamp", h), c.appendChild(f);
                            continue
                        }
                        var d = l.match(/^<([^.\s\/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);
                        if (!d) continue;
                        if (f = a(d[1], d[3]), !f) continue;
                        if (!s(c, f)) continue;
                        d[2] && (f.className = d[2].substr(1).replace(".", " ")), p.push(d[1]), c.appendChild(f), c = f
                    }
                    return u
                }

                function a(t) {
                    function e(t, e) {
                        for (var r = e.childNodes.length - 1; r >= 0; r--) t.push(e.childNodes[r])
                    }

                    function r(t) {
                        if (!t || !t.length) return null;
                        var n = t.pop(), o = n.textContent || n.innerText;
                        if (o) {
                            var i = o.match(/^.*(\n|\r)/);
                            return i ? (t.length = 0, i[0]) : o
                        }
                        return "ruby" === n.tagName ? r(t) : n.childNodes ? (e(t, n), r(t)) : void 0
                    }

                    var n, o = [], i = "";
                    if (!t || !t.childNodes) return "ltr";
                    for (e(o, t); i = r(o);) for (var s = 0; s < i.length; s++) {
                        n = i.charCodeAt(s);
                        for (var a = 0; a < b.length; a++) if (b[a] === n) return "rtl"
                    }
                    return "ltr"
                }

                function l(t) {
                    if ("number" == typeof t.line && (t.snapToLines || t.line >= 0 && t.line <= 100)) return t.line;
                    if (!t.track || !t.track.textTrackList || !t.track.textTrackList.mediaElement) return -1;
                    for (var e = t.track, r = e.textTrackList, n = 0, o = 0; o < r.length && r[o] !== e; o++) "showing" === r[o].mode && n++;
                    return ++n * -1
                }

                function u() {
                }

                function c(t, e, r) {
                    var n = /MSIE\s8\.0/.test(navigator.userAgent), o = "rgba(255, 255, 255, 1)",
                        i = "rgba(0, 0, 0, 0.8)";
                    n && (o = "rgb(255, 255, 255)", i = "rgb(0, 0, 0)"), u.call(this), this.cue = e, this.cueDiv = s(t, e.text);
                    var l = {
                        color: o,
                        backgroundColor: i,
                        position: "relative",
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        display: "inline"
                    };
                    n || (l.writingMode = "" === e.vertical ? "horizontal-tb" : "lr" === e.vertical ? "vertical-lr" : "vertical-rl", l.unicodeBidi = "plaintext"), this.applyStyles(l, this.cueDiv), this.div = t.document.createElement("div"), l = {
                        textAlign: "middle" === e.align ? "center" : e.align,
                        font: r.font,
                        whiteSpace: "pre-line",
                        position: "absolute"
                    }, n || (l.direction = a(this.cueDiv), l.writingMode = "" === e.vertical ? "horizontal-tb" : "lr" === e.vertical ? "vertical-lr" : "vertical-rl".stylesunicodeBidi = "plaintext"), this.applyStyles(l), this.div.appendChild(this.cueDiv);
                    var c = 0;
                    switch (e.positionAlign) {
                        case"start":
                            c = e.position;
                            break;
                        case"middle":
                            c = e.position - e.size / 2;
                            break;
                        case"end":
                            c = e.position - e.size
                    }
                    "" === e.vertical ? this.applyStyles({
                        left: this.formatStyle(c, "%"),
                        width: this.formatStyle(e.size, "%")
                    }) : this.applyStyles({
                        top: this.formatStyle(c, "%"),
                        height: this.formatStyle(e.size, "%")
                    }), this.move = function (t) {
                        this.applyStyles({
                            top: this.formatStyle(t.top, "px"),
                            bottom: this.formatStyle(t.bottom, "px"),
                            left: this.formatStyle(t.left, "px"),
                            right: this.formatStyle(t.right, "px"),
                            height: this.formatStyle(t.height, "px"),
                            width: this.formatStyle(t.width, "px")
                        })
                    }
                }

                function p(t) {
                    var e, r, n, o, i = /MSIE\s8\.0/.test(navigator.userAgent);
                    if (t.div) {
                        r = t.div.offsetHeight, n = t.div.offsetWidth, o = t.div.offsetTop;
                        var s = (s = t.div.childNodes) && (s = s[0]) && s.getClientRects && s.getClientRects();
                        t = t.div.getBoundingClientRect(), e = s ? Math.max(s[0] && s[0].height || 0, t.height / s.length) : 0
                    }
                    this.left = t.left, this.right = t.right, this.top = t.top || o, this.height = t.height || r, this.bottom = t.bottom || o + (t.height || r), this.width = t.width || n, this.lineHeight = void 0 !== e ? e : t.lineHeight, i && !this.lineHeight && (this.lineHeight = 13)
                }

                function f(t, e, r, n) {
                    function o(t, e) {
                        for (var o, i = new p(t), s = 1, a = 0; a < e.length; a++) {
                            for (; t.overlapsOppositeAxis(r, e[a]) || t.within(r) && t.overlapsAny(n);) t.move(e[a]);
                            if (t.within(r)) return t;
                            var l = t.intersectPercentage(r);
                            s > l && (o = new p(t), s = l), t = new p(i)
                        }
                        return o || i
                    }

                    var i = new p(e), s = e.cue, a = l(s), u = [];
                    if (s.snapToLines) {
                        var c;
                        switch (s.vertical) {
                            case"":
                                u = ["+y", "-y"], c = "height";
                                break;
                            case"rl":
                                u = ["+x", "-x"], c = "width";
                                break;
                            case"lr":
                                u = ["-x", "+x"], c = "width"
                        }
                        var f = i.lineHeight, h = f * Math.round(a), d = r[c] + f, y = u[0];
                        Math.abs(h) > d && (h = h < 0 ? -1 : 1, h *= Math.ceil(d / f) * f), a < 0 && (h += "" === s.vertical ? r.height : r.width, u = u.reverse()), i.move(y, h)
                    } else {
                        var v = i.lineHeight / r.height * 100;
                        switch (s.lineAlign) {
                            case"middle":
                                a -= v / 2;
                                break;
                            case"end":
                                a -= v
                        }
                        switch (s.vertical) {
                            case"":
                                e.applyStyles({top: e.formatStyle(a, "%")});
                                break;
                            case"rl":
                                e.applyStyles({left: e.formatStyle(a, "%")});
                                break;
                            case"lr":
                                e.applyStyles({right: e.formatStyle(a, "%")})
                        }
                        u = ["+y", "-x", "+x", "-y"], i = new p(e)
                    }
                    var _ = o(i, u);
                    e.move(_.toCSSCompatValues(r))
                }

                function h() {
                }

                var d = Object.create || function () {
                    function t() {
                    }

                    return function (e) {
                        if (1 !== arguments.length) throw new Error("Object.create shim only accepts one parameter.");
                        return t.prototype = e, new t
                    }
                }();
                e.prototype = d(Error.prototype), e.prototype.constructor = e, e.Errors = {
                    BadSignature: {
                        code: 0,
                        message: "Malformed WebVTT signature."
                    }, BadTimeStamp: {code: 1, message: "Malformed time stamp."}
                }, n.prototype = {
                    set: function (t, e) {
                        this.get(t) || "" === e || (this.values[t] = e)
                    }, get: function (t, e, r) {
                        return r ? this.has(t) ? this.values[t] : e[r] : this.has(t) ? this.values[t] : e
                    }, has: function (t) {
                        return t in this.values
                    }, alt: function (t, e, r) {
                        for (var n = 0; n < r.length; ++n) if (e === r[n]) {
                            this.set(t, e);
                            break
                        }
                    }, integer: function (t, e) {
                        /^-?\d+$/.test(e) && this.set(t, parseInt(e, 10))
                    }, percent: function (t, e) {
                        var r;
                        return !!((r = e.match(/^([\d]{1,3})(\.[\d]*)?%$/)) && (e = parseFloat(e), e >= 0 && e <= 100)) && (this.set(t, e), !0)
                    }
                };
                var y = {"&amp;": "&", "&lt;": "<", "&gt;": ">", "&lrm;": "‎", "&rlm;": "‏", "&nbsp;": " "},
                    v = {c: "span", i: "i", b: "b", u: "u", ruby: "ruby", rt: "rt", v: "span", lang: "span"},
                    _ = {v: "title", lang: "lang"}, g = {rt: "ruby"},
                    b = [1470, 1472, 1475, 1478, 1488, 1489, 1490, 1491, 1492, 1493, 1494, 1495, 1496, 1497, 1498, 1499, 1500, 1501, 1502, 1503, 1504, 1505, 1506, 1507, 1508, 1509, 1510, 1511, 1512, 1513, 1514, 1520, 1521, 1522, 1523, 1524, 1544, 1547, 1549, 1563, 1566, 1567, 1568, 1569, 1570, 1571, 1572, 1573, 1574, 1575, 1576, 1577, 1578, 1579, 1580, 1581, 1582, 1583, 1584, 1585, 1586, 1587, 1588, 1589, 1590, 1591, 1592, 1593, 1594, 1595, 1596, 1597, 1598, 1599, 1600, 1601, 1602, 1603, 1604, 1605, 1606, 1607, 1608, 1609, 1610, 1645, 1646, 1647, 1649, 1650, 1651, 1652, 1653, 1654, 1655, 1656, 1657, 1658, 1659, 1660, 1661, 1662, 1663, 1664, 1665, 1666, 1667, 1668, 1669, 1670, 1671, 1672, 1673, 1674, 1675, 1676, 1677, 1678, 1679, 1680, 1681, 1682, 1683, 1684, 1685, 1686, 1687, 1688, 1689, 1690, 1691, 1692, 1693, 1694, 1695, 1696, 1697, 1698, 1699, 1700, 1701, 1702, 1703, 1704, 1705, 1706, 1707, 1708, 1709, 1710, 1711, 1712, 1713, 1714, 1715, 1716, 1717, 1718, 1719, 1720, 1721, 1722, 1723, 1724, 1725, 1726, 1727, 1728, 1729, 1730, 1731, 1732, 1733, 1734, 1735, 1736, 1737, 1738, 1739, 1740, 1741, 1742, 1743, 1744, 1745, 1746, 1747, 1748, 1749, 1765, 1766, 1774, 1775, 1786, 1787, 1788, 1789, 1790, 1791, 1792, 1793, 1794, 1795, 1796, 1797, 1798, 1799, 1800, 1801, 1802, 1803, 1804, 1805, 1807, 1808, 1810, 1811, 1812, 1813, 1814, 1815, 1816, 1817, 1818, 1819, 1820, 1821, 1822, 1823, 1824, 1825, 1826, 1827, 1828, 1829, 1830, 1831, 1832, 1833, 1834, 1835, 1836, 1837, 1838, 1839, 1869, 1870, 1871, 1872, 1873, 1874, 1875, 1876, 1877, 1878, 1879, 1880, 1881, 1882, 1883, 1884, 1885, 1886, 1887, 1888, 1889, 1890, 1891, 1892, 1893, 1894, 1895, 1896, 1897, 1898, 1899, 1900, 1901, 1902, 1903, 1904, 1905, 1906, 1907, 1908, 1909, 1910, 1911, 1912, 1913, 1914, 1915, 1916, 1917, 1918, 1919, 1920, 1921, 1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929, 1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1969, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2e3, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2036, 2037, 2042, 2048, 2049, 2050, 2051, 2052, 2053, 2054, 2055, 2056, 2057, 2058, 2059, 2060, 2061, 2062, 2063, 2064, 2065, 2066, 2067, 2068, 2069, 2074, 2084, 2088, 2096, 2097, 2098, 2099, 2100, 2101, 2102, 2103, 2104, 2105, 2106, 2107, 2108, 2109, 2110, 2112, 2113, 2114, 2115, 2116, 2117, 2118, 2119, 2120, 2121, 2122, 2123, 2124, 2125, 2126, 2127, 2128, 2129, 2130, 2131, 2132, 2133, 2134, 2135, 2136, 2142, 2208, 2210, 2211, 2212, 2213, 2214, 2215, 2216, 2217, 2218, 2219, 2220, 8207, 64285, 64287, 64288, 64289, 64290, 64291, 64292, 64293, 64294, 64295, 64296, 64298, 64299, 64300, 64301, 64302, 64303, 64304, 64305, 64306, 64307, 64308, 64309, 64310, 64312, 64313, 64314, 64315, 64316, 64318, 64320, 64321, 64323, 64324, 64326, 64327, 64328, 64329, 64330, 64331, 64332, 64333, 64334, 64335, 64336, 64337, 64338, 64339, 64340, 64341, 64342, 64343, 64344, 64345, 64346, 64347, 64348, 64349, 64350, 64351, 64352, 64353, 64354, 64355, 64356, 64357, 64358, 64359, 64360, 64361, 64362, 64363, 64364, 64365, 64366, 64367, 64368, 64369, 64370, 64371, 64372, 64373, 64374, 64375, 64376, 64377, 64378, 64379, 64380, 64381, 64382, 64383, 64384, 64385, 64386, 64387, 64388, 64389, 64390, 64391, 64392, 64393, 64394, 64395, 64396, 64397, 64398, 64399, 64400, 64401, 64402, 64403, 64404, 64405, 64406, 64407, 64408, 64409, 64410, 64411, 64412, 64413, 64414, 64415, 64416, 64417, 64418, 64419, 64420, 64421, 64422, 64423, 64424, 64425, 64426, 64427, 64428, 64429, 64430, 64431, 64432, 64433, 64434, 64435, 64436, 64437, 64438, 64439, 64440, 64441, 64442, 64443, 64444, 64445, 64446, 64447, 64448, 64449, 64467, 64468, 64469, 64470, 64471, 64472, 64473, 64474, 64475, 64476, 64477, 64478, 64479, 64480, 64481, 64482, 64483, 64484, 64485, 64486, 64487, 64488, 64489, 64490, 64491, 64492, 64493, 64494, 64495, 64496, 64497, 64498, 64499, 64500, 64501, 64502, 64503, 64504, 64505, 64506, 64507, 64508, 64509, 64510, 64511, 64512, 64513, 64514, 64515, 64516, 64517, 64518, 64519, 64520, 64521, 64522, 64523, 64524, 64525, 64526, 64527, 64528, 64529, 64530, 64531, 64532, 64533, 64534, 64535, 64536, 64537, 64538, 64539, 64540, 64541, 64542, 64543, 64544, 64545, 64546, 64547, 64548, 64549, 64550, 64551, 64552, 64553, 64554, 64555, 64556, 64557, 64558, 64559, 64560, 64561, 64562, 64563, 64564, 64565, 64566, 64567, 64568, 64569, 64570, 64571, 64572, 64573, 64574, 64575, 64576, 64577, 64578, 64579, 64580, 64581, 64582, 64583, 64584, 64585, 64586, 64587, 64588, 64589, 64590, 64591, 64592, 64593, 64594, 64595, 64596, 64597, 64598, 64599, 64600, 64601, 64602, 64603, 64604, 64605, 64606, 64607, 64608, 64609, 64610, 64611, 64612, 64613, 64614, 64615, 64616, 64617, 64618, 64619, 64620, 64621, 64622, 64623, 64624, 64625, 64626, 64627, 64628, 64629, 64630, 64631, 64632, 64633, 64634, 64635, 64636, 64637, 64638, 64639, 64640, 64641, 64642, 64643, 64644, 64645, 64646, 64647, 64648, 64649, 64650, 64651, 64652, 64653, 64654, 64655, 64656, 64657, 64658, 64659, 64660, 64661, 64662, 64663, 64664, 64665, 64666, 64667, 64668, 64669, 64670, 64671, 64672, 64673, 64674, 64675, 64676, 64677, 64678, 64679, 64680, 64681, 64682, 64683, 64684, 64685, 64686, 64687, 64688, 64689, 64690, 64691, 64692, 64693, 64694, 64695, 64696, 64697, 64698, 64699, 64700, 64701, 64702, 64703, 64704, 64705, 64706, 64707, 64708, 64709, 64710, 64711, 64712, 64713, 64714, 64715, 64716, 64717, 64718, 64719, 64720, 64721, 64722, 64723, 64724, 64725, 64726, 64727, 64728, 64729, 64730, 64731, 64732, 64733, 64734, 64735, 64736, 64737, 64738, 64739, 64740, 64741, 64742, 64743, 64744, 64745, 64746, 64747, 64748, 64749, 64750, 64751, 64752, 64753, 64754, 64755, 64756, 64757, 64758, 64759, 64760, 64761, 64762, 64763, 64764, 64765, 64766, 64767, 64768, 64769, 64770, 64771, 64772, 64773, 64774, 64775, 64776, 64777, 64778, 64779, 64780, 64781, 64782, 64783, 64784, 64785, 64786, 64787, 64788, 64789, 64790, 64791, 64792, 64793, 64794, 64795, 64796, 64797, 64798, 64799, 64800, 64801, 64802, 64803, 64804, 64805, 64806, 64807, 64808, 64809, 64810, 64811, 64812, 64813, 64814, 64815, 64816, 64817, 64818, 64819, 64820, 64821, 64822, 64823, 64824, 64825, 64826, 64827, 64828, 64829, 64848, 64849, 64850, 64851, 64852, 64853, 64854, 64855, 64856, 64857, 64858, 64859, 64860, 64861, 64862, 64863, 64864, 64865, 64866, 64867, 64868, 64869, 64870, 64871, 64872, 64873, 64874, 64875, 64876, 64877, 64878, 64879, 64880, 64881, 64882, 64883, 64884, 64885, 64886, 64887, 64888, 64889, 64890, 64891, 64892, 64893, 64894, 64895, 64896, 64897, 64898, 64899, 64900, 64901, 64902, 64903, 64904, 64905, 64906, 64907, 64908, 64909, 64910, 64911, 64914, 64915, 64916, 64917, 64918, 64919, 64920, 64921, 64922, 64923, 64924, 64925, 64926, 64927, 64928, 64929, 64930, 64931, 64932, 64933, 64934, 64935, 64936, 64937, 64938, 64939, 64940, 64941, 64942, 64943, 64944, 64945, 64946, 64947, 64948, 64949, 64950, 64951, 64952, 64953, 64954, 64955, 64956, 64957, 64958, 64959, 64960, 64961, 64962, 64963, 64964, 64965, 64966, 64967, 65008, 65009, 65010, 65011, 65012, 65013, 65014, 65015, 65016, 65017, 65018, 65019, 65020, 65136, 65137, 65138, 65139, 65140, 65142, 65143, 65144, 65145, 65146, 65147, 65148, 65149, 65150, 65151, 65152, 65153, 65154, 65155, 65156, 65157, 65158, 65159, 65160, 65161, 65162, 65163, 65164, 65165, 65166, 65167, 65168, 65169, 65170, 65171, 65172, 65173, 65174, 65175, 65176, 65177, 65178, 65179, 65180, 65181, 65182, 65183, 65184, 65185, 65186, 65187, 65188, 65189, 65190, 65191, 65192, 65193, 65194, 65195, 65196, 65197, 65198, 65199, 65200, 65201, 65202, 65203, 65204, 65205, 65206, 65207, 65208, 65209, 65210, 65211, 65212, 65213, 65214, 65215, 65216, 65217, 65218, 65219, 65220, 65221, 65222, 65223, 65224, 65225, 65226, 65227, 65228, 65229, 65230, 65231, 65232, 65233, 65234, 65235, 65236, 65237, 65238, 65239, 65240, 65241, 65242, 65243, 65244, 65245, 65246, 65247, 65248, 65249, 65250, 65251, 65252, 65253, 65254, 65255, 65256, 65257, 65258, 65259, 65260, 65261, 65262, 65263, 65264, 65265, 65266, 65267, 65268, 65269, 65270, 65271, 65272, 65273, 65274, 65275, 65276, 67584, 67585, 67586, 67587, 67588, 67589, 67592, 67594, 67595, 67596, 67597, 67598, 67599, 67600, 67601, 67602, 67603, 67604, 67605, 67606, 67607, 67608, 67609, 67610, 67611, 67612, 67613, 67614, 67615, 67616, 67617, 67618, 67619, 67620, 67621, 67622, 67623, 67624, 67625, 67626, 67627, 67628, 67629, 67630, 67631, 67632, 67633, 67634, 67635, 67636, 67637, 67639, 67640, 67644, 67647, 67648, 67649, 67650, 67651, 67652, 67653, 67654, 67655, 67656, 67657, 67658, 67659, 67660, 67661, 67662, 67663, 67664, 67665, 67666, 67667, 67668, 67669, 67671, 67672, 67673, 67674, 67675, 67676, 67677, 67678, 67679, 67840, 67841, 67842, 67843, 67844, 67845, 67846, 67847, 67848, 67849, 67850, 67851, 67852, 67853, 67854, 67855, 67856, 67857, 67858, 67859, 67860, 67861, 67862, 67863, 67864, 67865, 67866, 67867, 67872, 67873, 67874, 67875, 67876, 67877, 67878, 67879, 67880, 67881, 67882, 67883, 67884, 67885, 67886, 67887, 67888, 67889, 67890, 67891, 67892, 67893, 67894, 67895, 67896, 67897, 67903, 67968, 67969, 67970, 67971, 67972, 67973, 67974, 67975, 67976, 67977, 67978, 67979, 67980, 67981, 67982, 67983, 67984, 67985, 67986, 67987, 67988, 67989, 67990, 67991, 67992, 67993, 67994, 67995, 67996, 67997, 67998, 67999, 68e3, 68001, 68002, 68003, 68004, 68005, 68006, 68007, 68008, 68009, 68010, 68011, 68012, 68013, 68014, 68015, 68016, 68017, 68018, 68019, 68020, 68021, 68022, 68023, 68030, 68031, 68096, 68112, 68113, 68114, 68115, 68117, 68118, 68119, 68121, 68122, 68123, 68124, 68125, 68126, 68127, 68128, 68129, 68130, 68131, 68132, 68133, 68134, 68135, 68136, 68137, 68138, 68139, 68140, 68141, 68142, 68143, 68144, 68145, 68146, 68147, 68160, 68161, 68162, 68163, 68164, 68165, 68166, 68167, 68176, 68177, 68178, 68179, 68180, 68181, 68182, 68183, 68184, 68192, 68193, 68194, 68195, 68196, 68197, 68198, 68199, 68200, 68201, 68202, 68203, 68204, 68205, 68206, 68207, 68208, 68209, 68210, 68211, 68212, 68213, 68214, 68215, 68216, 68217, 68218, 68219, 68220, 68221, 68222, 68223, 68352, 68353, 68354, 68355, 68356, 68357, 68358, 68359, 68360, 68361, 68362, 68363, 68364, 68365, 68366, 68367, 68368, 68369, 68370, 68371, 68372, 68373, 68374, 68375, 68376, 68377, 68378, 68379, 68380, 68381, 68382, 68383, 68384, 68385, 68386, 68387, 68388, 68389, 68390, 68391, 68392, 68393, 68394, 68395, 68396, 68397, 68398, 68399, 68400, 68401, 68402, 68403, 68404, 68405, 68416, 68417, 68418, 68419, 68420, 68421, 68422, 68423, 68424, 68425, 68426, 68427, 68428, 68429, 68430, 68431, 68432, 68433, 68434, 68435, 68436, 68437, 68440, 68441, 68442, 68443, 68444, 68445, 68446, 68447, 68448, 68449, 68450, 68451, 68452, 68453, 68454, 68455, 68456, 68457, 68458, 68459, 68460, 68461, 68462, 68463, 68464, 68465, 68466, 68472, 68473, 68474, 68475, 68476, 68477, 68478, 68479, 68608, 68609, 68610, 68611, 68612, 68613, 68614, 68615, 68616, 68617, 68618, 68619, 68620, 68621, 68622, 68623, 68624, 68625, 68626, 68627, 68628, 68629, 68630, 68631, 68632, 68633, 68634, 68635, 68636, 68637, 68638, 68639, 68640, 68641, 68642, 68643, 68644, 68645, 68646, 68647, 68648, 68649, 68650, 68651, 68652, 68653, 68654, 68655, 68656, 68657, 68658, 68659, 68660, 68661, 68662, 68663, 68664, 68665, 68666, 68667, 68668, 68669, 68670, 68671, 68672, 68673, 68674, 68675, 68676, 68677, 68678, 68679, 68680, 126464, 126465, 126466, 126467, 126469, 126470, 126471, 126472, 126473, 126474, 126475, 126476, 126477, 126478, 126479, 126480, 126481, 126482, 126483, 126484, 126485, 126486, 126487, 126488, 126489, 126490, 126491, 126492, 126493, 126494, 126495, 126497, 126498, 126500, 126503, 126505, 126506, 126507, 126508, 126509, 126510, 126511, 126512, 126513, 126514, 126516, 126517, 126518, 126519, 126521, 126523, 126530, 126535, 126537, 126539, 126541, 126542, 126543, 126545, 126546, 126548, 126551, 126553, 126555, 126557, 126559, 126561, 126562, 126564, 126567, 126568, 126569, 126570, 126572, 126573, 126574, 126575, 126576, 126577, 126578, 126580, 126581, 126582, 126583, 126585, 126586, 126587, 126588, 126590, 126592, 126593, 126594, 126595, 126596, 126597, 126598, 126599, 126600, 126601, 126603, 126604, 126605, 126606, 126607, 126608, 126609, 126610, 126611, 126612, 126613, 126614, 126615, 126616, 126617, 126618, 126619, 126625, 126626, 126627, 126629, 126630, 126631, 126632, 126633, 126635, 126636, 126637, 126638, 126639, 126640, 126641, 126642, 126643, 126644, 126645, 126646, 126647, 126648, 126649, 126650, 126651, 1114109];
                u.prototype.applyStyles = function (t, e) {
                    e = e || this.div;
                    for (var r in t) t.hasOwnProperty(r) && (e.style[r] = t[r])
                }, u.prototype.formatStyle = function (t, e) {
                    return 0 === t ? 0 : t + e
                }, c.prototype = d(u.prototype), c.prototype.constructor = c, p.prototype.move = function (t, e) {
                    switch (e = void 0 !== e ? e : this.lineHeight, t) {
                        case"+x":
                            this.left += e, this.right += e;
                            break;
                        case"-x":
                            this.left -= e, this.right -= e;
                            break;
                        case"+y":
                            this.top += e, this.bottom += e;
                            break;
                        case"-y":
                            this.top -= e, this.bottom -= e
                    }
                }, p.prototype.overlaps = function (t) {
                    return this.left < t.right && this.right > t.left && this.top < t.bottom && this.bottom > t.top
                }, p.prototype.overlapsAny = function (t) {
                    for (var e = 0; e < t.length; e++) if (this.overlaps(t[e])) return !0;
                    return !1
                }, p.prototype.within = function (t) {
                    return this.top >= t.top && this.bottom <= t.bottom && this.left >= t.left && this.right <= t.right
                }, p.prototype.overlapsOppositeAxis = function (t, e) {
                    switch (e) {
                        case"+x":
                            return this.left < t.left;
                        case"-x":
                            return this.right > t.right;
                        case"+y":
                            return this.top < t.top;
                        case"-y":
                            return this.bottom > t.bottom
                    }
                }, p.prototype.intersectPercentage = function (t) {
                    var e = Math.max(0, Math.min(this.right, t.right) - Math.max(this.left, t.left)),
                        r = Math.max(0, Math.min(this.bottom, t.bottom) - Math.max(this.top, t.top)), n = e * r;
                    return n / (this.height * this.width)
                }, p.prototype.toCSSCompatValues = function (t) {
                    return {
                        top: this.top - t.top,
                        bottom: t.bottom - this.bottom,
                        left: this.left - t.left,
                        right: t.right - this.right,
                        height: this.height,
                        width: this.width
                    }
                }, p.getSimpleBoxPosition = function (t) {
                    var e = t.div ? t.div.offsetHeight : t.tagName ? t.offsetHeight : 0,
                        r = t.div ? t.div.offsetWidth : t.tagName ? t.offsetWidth : 0,
                        n = t.div ? t.div.offsetTop : t.tagName ? t.offsetTop : 0;
                    t = t.div ? t.div.getBoundingClientRect() : t.tagName ? t.getBoundingClientRect() : t;
                    var o = {
                        left: t.left,
                        right: t.right,
                        top: t.top || n,
                        height: t.height || e,
                        bottom: t.bottom || n + (t.height || e),
                        width: t.width || r
                    };
                    return o
                }, h.StringDecoder = function () {
                    return {
                        decode: function (t) {
                            if (!t) return "";
                            if ("string" != typeof t) throw new Error("Error - expected string data.");
                            return decodeURIComponent(encodeURIComponent(t))
                        }
                    }
                }, h.convertCueToDOMTree = function (t, e) {
                    return t && e ? s(t, e) : null
                };
                var m = .05, T = "sans-serif", w = "1.5%";
                h.processCues = function (t, e, r) {
                    function n(t) {
                        for (var e = 0; e < t.length; e++) if (t[e].hasBeenReset || !t[e].displayState) return !0;
                        return !1
                    }

                    if (!t || !e || !r) return null;
                    for (; r.firstChild;) r.removeChild(r.firstChild);
                    var o = t.document.createElement("div");
                    if (o.style.position = "absolute", o.style.left = "0", o.style.right = "0", o.style.top = "0", o.style.bottom = "0", o.style.margin = w, r.appendChild(o), n(e)) {
                        var i = [], s = p.getSimpleBoxPosition(o), a = Math.round(s.height * m * 100) / 100,
                            l = {font: a + "px " + T};
                        !function () {
                            for (var r, n, a = 0; a < e.length; a++) n = e[a], r = new c(t, n, l), o.appendChild(r.div), f(t, r, s, i), n.displayState = r.div, i.push(p.getSimpleBoxPosition(r))
                        }()
                    } else for (var u = 0; u < e.length; u++) o.appendChild(e[u].displayState)
                }, h.Parser = function (t, e, r) {
                    r || (r = e, e = {}), e || (e = {}), this.window = t, this.vttjs = e, this.state = "INITIAL", this.buffer = "", this.decoder = r || new TextDecoder("utf8"), this.regionList = []
                }, h.Parser.prototype = {
                    reportOrThrowError: function (t) {
                        if (!(t instanceof e)) throw t;
                        this.onparsingerror && this.onparsingerror(t)
                    }, parse: function (t) {
                        function r() {
                            for (var t = l.buffer, e = 0; e < t.length && "\r" !== t[e] && "\n" !== t[e];) ++e;
                            var r = t.substr(0, e);
                            return "\r" === t[e] && ++e, "\n" === t[e] && ++e, l.buffer = t.substr(e), r
                        }

                        function s(t) {
                            var e = new n;
                            if (o(t, function (t, r) {
                                switch (t) {
                                    case"id":
                                        e.set(t, r);
                                        break;
                                    case"width":
                                        e.percent(t, r);
                                        break;
                                    case"lines":
                                        e.integer(t, r);
                                        break;
                                    case"regionanchor":
                                    case"viewportanchor":
                                        var o = r.split(",");
                                        if (2 !== o.length) break;
                                        var i = new n;
                                        if (i.percent("x", o[0]), i.percent("y", o[1]), !i.has("x") || !i.has("y")) break;
                                        e.set(t + "X", i.get("x")), e.set(t + "Y", i.get("y"));
                                        break;
                                    case"scroll":
                                        e.alt(t, r, ["up"])
                                }
                            }, /=/, /\s/), e.has("id")) {
                                var r = new (l.vttjs.VTTRegion || l.window.VTTRegion);
                                r.width = e.get("width", 100), r.lines = e.get("lines", 3), r.regionAnchorX = e.get("regionanchorX", 0), r.regionAnchorY = e.get("regionanchorY", 100), r.viewportAnchorX = e.get("viewportanchorX", 0), r.viewportAnchorY = e.get("viewportanchorY", 100), r.scroll = e.get("scroll", ""), l.onregion && l.onregion(r), l.regionList.push({
                                    id: e.get("id"),
                                    region: r
                                })
                            }
                        }

                        function a(t) {
                            o(t, function (t, e) {
                                switch (t) {
                                    case"Region":
                                        s(e)
                                }
                            }, /:/)
                        }

                        var l = this;
                        t && (l.buffer += l.decoder.decode(t, {stream: !0}));
                        try {
                            var u;
                            if ("INITIAL" === l.state) {
                                if (!/\r\n|\n/.test(l.buffer)) return this;
                                u = r();
                                var c = u.match(/^WEBVTT([ \t].*)?$/);
                                if (!c || !c[0]) throw new e(e.Errors.BadSignature);
                                l.state = "HEADER"
                            }
                            for (var p = !1; l.buffer;) {
                                if (!/\r\n|\n/.test(l.buffer)) return this;
                                switch (p ? p = !1 : u = r(), l.state) {
                                    case"HEADER":
                                        /:/.test(u) ? a(u) : u || (l.state = "ID");
                                        continue;
                                    case"NOTE":
                                        u || (l.state = "ID");
                                        continue;
                                    case"ID":
                                        if (/^NOTE($|[ \t])/.test(u)) {
                                            l.state = "NOTE";
                                            break
                                        }
                                        if (!u) continue;
                                        if (l.cue = new (l.vttjs.VTTCue || l.window.VTTCue)(0, 0, ""), l.state = "CUE", u.indexOf("-->") === -1) {
                                            l.cue.id = u;
                                            continue
                                        }
                                    case"CUE":
                                        try {
                                            i(u, l.cue, l.regionList)
                                        } catch (f) {
                                            l.reportOrThrowError(f), l.cue = null, l.state = "BADCUE";
                                            continue
                                        }
                                        l.state = "CUETEXT";
                                        continue;
                                    case"CUETEXT":
                                        var h = u.indexOf("-->") !== -1;
                                        if (!u || h && (p = !0)) {
                                            l.oncue && l.oncue(l.cue), l.cue = null, l.state = "ID";
                                            continue
                                        }
                                        l.cue.text && (l.cue.text += "\n"), l.cue.text += u;
                                        continue;
                                    case"BADCUE":
                                        u || (l.state = "ID");
                                        continue
                                }
                            }
                        } catch (f) {
                            l.reportOrThrowError(f), "CUETEXT" === l.state && l.cue && l.oncue && l.oncue(l.cue), l.cue = null, l.state = "INITIAL" === l.state ? "BADWEBVTT" : "BADCUE"
                        }
                        return this
                    }, flush: function () {
                        var t = this;
                        try {
                            if (t.buffer += t.decoder.decode(), (t.cue || "HEADER" === t.state) && (t.buffer += "\n\n", t.parse()), "INITIAL" === t.state) throw new e(e.Errors.BadSignature)
                        } catch (r) {
                            t.reportOrThrowError(r)
                        }
                        return t.onflush && t.onflush(), this
                    }
                }, t.WebVTT = h
            }(this, this.vttjs || {})
        }, {}],
        101: [function (t, e, r) {
            "undefined" != typeof e && e.exports && (this.VTTCue = this.VTTCue || t(102).VTTCue), function (t) {
                t.VTTCue.prototype.toJSON = function () {
                    var t = {}, e = this;
                    return Object.keys(this).forEach(function (r) {
                        "getCueAsHTML" !== r && "hasBeenReset" !== r && "displayState" !== r && (t[r] = e[r])
                    }), t
                }, t.VTTCue.create = function (e) {
                    if (!e.hasOwnProperty("startTime") || !e.hasOwnProperty("endTime") || !e.hasOwnProperty("text")) throw new Error("You must at least have start time, end time, and text.");
                    var r = new t.VTTCue(e.startTime, e.endTime, e.text);
                    for (var n in e) r.hasOwnProperty(n) && (r[n] = e[n]);
                    return r
                }, t.VTTCue.fromJSON = function (t) {
                    return this.create(JSON.parse(t))
                }
            }(this)
        }, {102: 102}],
        102: [function (t, e, r) {
            !function (t, e) {
                function r(t) {
                    if ("string" != typeof t) return !1;
                    var e = a[t.toLowerCase()];
                    return !!e && t.toLowerCase()
                }

                function n(t) {
                    if ("string" != typeof t) return !1;
                    var e = l[t.toLowerCase()];
                    return !!e && t.toLowerCase()
                }

                function o(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) t[n] = r[n]
                    }
                    return t
                }

                function i(t, e, i) {
                    var a = this, l = /MSIE\s8\.0/.test(navigator.userAgent), u = {};
                    l ? a = document.createElement("custom") : u.enumerable = !0, a.hasBeenReset = !1;
                    var c = "", p = !1, f = t, h = e, d = i, y = null, v = "", _ = !0, g = "auto", b = "start", m = 50,
                        T = "middle", w = 50, E = "middle";
                    if (Object.defineProperty(a, "id", o({}, u, {
                        get: function () {
                            return c
                        }, set: function (t) {
                            c = "" + t
                        }
                    })), Object.defineProperty(a, "pauseOnExit", o({}, u, {
                        get: function () {
                            return p
                        }, set: function (t) {
                            p = !!t
                        }
                    })), Object.defineProperty(a, "startTime", o({}, u, {
                        get: function () {
                            return f
                        }, set: function (t) {
                            if ("number" != typeof t) throw new TypeError("Start time must be set to a number.");
                            f = t, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(a, "endTime", o({}, u, {
                        get: function () {
                            return h
                        }, set: function (t) {
                            if ("number" != typeof t) throw new TypeError("End time must be set to a number.");
                            h = t, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(a, "text", o({}, u, {
                        get: function () {
                            return d
                        }, set: function (t) {
                            d = "" + t, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(a, "region", o({}, u, {
                        get: function () {
                            return y
                        }, set: function (t) {
                            y = t, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(a, "vertical", o({}, u, {
                        get: function () {
                            return v
                        }, set: function (t) {
                            var e = r(t);
                            if (e === !1) throw new SyntaxError("An invalid or illegal string was specified.");
                            v = e, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(a, "snapToLines", o({}, u, {
                        get: function () {
                            return _
                        }, set: function (t) {
                            _ = !!t, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(a, "line", o({}, u, {
                        get: function () {
                            return g
                        }, set: function (t) {
                            if ("number" != typeof t && t !== s) throw new SyntaxError("An invalid number or illegal string was specified.");
                            g = t, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(a, "lineAlign", o({}, u, {
                        get: function () {
                            return b
                        }, set: function (t) {
                            var e = n(t);
                            if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                            b = e, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(a, "position", o({}, u, {
                        get: function () {
                            return m
                        }, set: function (t) {
                            if (t < 0 || t > 100) throw new Error("Position must be between 0 and 100.");
                            m = t, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(a, "positionAlign", o({}, u, {
                        get: function () {
                            return T
                        }, set: function (t) {
                            var e = n(t);
                            if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                            T = e, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(a, "size", o({}, u, {
                        get: function () {
                            return w
                        }, set: function (t) {
                            if (t < 0 || t > 100) throw new Error("Size must be between 0 and 100.");
                            w = t, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(a, "align", o({}, u, {
                        get: function () {
                            return E
                        }, set: function (t) {
                            var e = n(t);
                            if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                            E = e, this.hasBeenReset = !0
                        }
                    })), a.displayState = void 0, l) return a
                }

                var s = "auto", a = {"": !0, lr: !0, rl: !0}, l = {start: !0, middle: !0, end: !0, left: !0, right: !0};
                i.prototype.getCueAsHTML = function () {
                    return WebVTT.convertCueToDOMTree(window, this.text)
                }, t.VTTCue = t.VTTCue || i, e.VTTCue = i
            }(this, this.vttjs || {})
        }, {}],
        103: [function (t, e, r) {
            "undefined" != typeof e && e.exports && (this.VTTRegion = t(104).VTTRegion), function (t) {
                t.VTTRegion.create = function (e) {
                    var r = new t.VTTRegion;
                    for (var n in e) r.hasOwnProperty(n) && (r[n] = e[n]);
                    return r
                }, t.VTTRegion.fromJSON = function (t) {
                    return this.create(JSON.parse(t))
                }
            }(this)
        }, {104: 104}],
        104: [function (t, e, r) {
            !function (t, e) {
                function r(t) {
                    if ("string" != typeof t) return !1;
                    var e = i[t.toLowerCase()];
                    return !!e && t.toLowerCase()
                }

                function n(t) {
                    return "number" == typeof t && t >= 0 && t <= 100
                }

                function o() {
                    var t = 100, e = 3, o = 0, i = 100, s = 0, a = 100, l = "";
                    Object.defineProperties(this, {
                        width: {
                            enumerable: !0, get: function () {
                                return t
                            }, set: function (e) {
                                if (!n(e)) throw new Error("Width must be between 0 and 100.");
                                t = e
                            }
                        }, lines: {
                            enumerable: !0, get: function () {
                                return e
                            }, set: function (t) {
                                if ("number" != typeof t) throw new TypeError("Lines must be set to a number.");
                                e = t
                            }
                        }, regionAnchorY: {
                            enumerable: !0, get: function () {
                                return i
                            }, set: function (t) {
                                if (!n(t)) throw new Error("RegionAnchorX must be between 0 and 100.");
                                i = t
                            }
                        }, regionAnchorX: {
                            enumerable: !0, get: function () {
                                return o
                            }, set: function (t) {
                                if (!n(t)) throw new Error("RegionAnchorY must be between 0 and 100.");
                                o = t
                            }
                        }, viewportAnchorY: {
                            enumerable: !0, get: function () {
                                return a
                            }, set: function (t) {
                                if (!n(t)) throw new Error("ViewportAnchorY must be between 0 and 100.");
                                a = t
                            }
                        }, viewportAnchorX: {
                            enumerable: !0, get: function () {
                                return s
                            }, set: function (t) {
                                if (!n(t)) throw new Error("ViewportAnchorX must be between 0 and 100.");
                                s = t
                            }
                        }, scroll: {
                            enumerable: !0, get: function () {
                                return l
                            }, set: function (t) {
                                var e = r(t);
                                if (e === !1) throw new SyntaxError("An invalid or illegal string was specified.");
                                l = e
                            }
                        }
                    })
                }

                var i = {"": !0, up: !0};
                t.VTTRegion = t.VTTRegion || o, e.VTTRegion = o
            }(this, this.vttjs || {})
        }, {}],
        105: [function (t, e, r) {
            "use strict";

            function n(t, e) {
                for (var r = 0; r < t.length; r++) e(t[r])
            }

            function o(t) {
                for (var e in t) if (t.hasOwnProperty(e)) return !1;
                return !0
            }

            function i(t, e, r) {
                var n = t;
                return p(e) ? (r = e, "string" == typeof t && (n = {uri: t})) : n = h(e, {uri: t}), n.callback = r, n
            }

            function s(t, e, r) {
                return e = i(t, e, r), a(e)
            }

            function a(t) {
                function e() {
                    4 === p.readyState && i()
                }

                function r() {
                    var t = void 0;
                    if (t = p.response ? p.response : p.responseText || l(p), T) try {
                        t = JSON.parse(t)
                    } catch (e) {
                    }
                    return t
                }

                function n(t) {
                    return clearTimeout(y), t instanceof Error || (t = new Error("" + (t || "Unknown XMLHttpRequest Error"))), t.statusCode = 0, u(t, c)
                }

                function i() {
                    if (!d) {
                        var e;
                        clearTimeout(y), e = t.useXDR && void 0 === p.status ? 200 : 1223 === p.status ? 204 : p.status;
                        var n = c, o = null;
                        return 0 !== e ? (n = {
                            body: r(),
                            statusCode: e,
                            method: _,
                            headers: {},
                            url: v,
                            rawRequest: p
                        }, p.getAllResponseHeaders && (n.headers = f(p.getAllResponseHeaders()))) : o = new Error("Internal XMLHttpRequest Error"), u(o, n, n.body)
                    }
                }

                if ("undefined" == typeof t.callback) throw new Error("callback argument missing");
                var a = !1, u = function (e, r, n) {
                    a || (a = !0, t.callback(e, r, n))
                }, c = {body: void 0, headers: {}, statusCode: 0, method: _, url: v, rawRequest: p}, p = t.xhr || null;
                p || (p = t.cors || t.useXDR ? new s.XDomainRequest : new s.XMLHttpRequest);
                var h, d, y, v = p.url = t.uri || t.url, _ = p.method = t.method || "GET", g = t.body || t.data || null,
                    b = p.headers = t.headers || {}, m = !!t.sync, T = !1;
                if ("json" in t && (T = !0, b.accept || b.Accept || (b.Accept = "application/json"), "GET" !== _ && "HEAD" !== _ && (b["content-type"] || b["Content-Type"] || (b["Content-Type"] = "application/json"), g = JSON.stringify(t.json))), p.onreadystatechange = e, p.onload = i, p.onerror = n, p.onprogress = function () {
                }, p.ontimeout = n, p.open(_, v, !m, t.username, t.password), m || (p.withCredentials = !!t.withCredentials), !m && t.timeout > 0 && (y = setTimeout(function () {
                    d = !0, p.abort("timeout");
                    var t = new Error("XMLHttpRequest timeout");
                    t.code = "ETIMEDOUT", n(t)
                }, t.timeout)), p.setRequestHeader) for (h in b) b.hasOwnProperty(h) && p.setRequestHeader(h, b[h]); else if (t.headers && !o(t.headers)) throw new Error("Headers cannot be set on an XDomainRequest object");
                return "responseType" in t && (p.responseType = t.responseType), "beforeSend" in t && "function" == typeof t.beforeSend && t.beforeSend(p), p.send(g), p
            }

            function l(t) {
                if ("document" === t.responseType) return t.responseXML;
                var e = 204 === t.status && t.responseXML && "parsererror" === t.responseXML.documentElement.nodeName;
                return "" !== t.responseType || e ? null : t.responseXML
            }

            function u() {
            }

            var c = t(95), p = t(106), f = t(109), h = t(110);
            e.exports = s, s.XMLHttpRequest = c.XMLHttpRequest || u, s.XDomainRequest = "withCredentials" in new s.XMLHttpRequest ? s.XMLHttpRequest : c.XDomainRequest, n(["get", "put", "post", "patch", "head", "delete"], function (t) {
                s["delete" === t ? "del" : t] = function (e, r, n) {
                    return r = i(e, r, n), r.method = t.toUpperCase(), a(r)
                }
            })
        }, {106: 106, 109: 109, 110: 110, 95: 95}],
        106: [function (t, e, r) {
            function n(t) {
                var e = o.call(t);
                return "[object Function]" === e || "function" == typeof t && "[object RegExp]" !== e || "undefined" != typeof window && (t === window.setTimeout || t === window.alert || t === window.confirm || t === window.prompt)
            }

            e.exports = n;
            var o = Object.prototype.toString
        }, {}],
        107: [function (t, e, r) {
            function n(t, e, r) {
                if (!a(e)) throw new TypeError("iterator must be a function");
                arguments.length < 3 && (r = this), "[object Array]" === l.call(t) ? o(t, e, r) : "string" == typeof t ? i(t, e, r) : s(t, e, r)
            }

            function o(t, e, r) {
                for (var n = 0, o = t.length; n < o; n++) u.call(t, n) && e.call(r, t[n], n, t)
            }

            function i(t, e, r) {
                for (var n = 0, o = t.length; n < o; n++) e.call(r, t.charAt(n), n, t);
            }

            function s(t, e, r) {
                for (var n in t) u.call(t, n) && e.call(r, t[n], n, t)
            }

            var a = t(106);
            e.exports = n;
            var l = Object.prototype.toString, u = Object.prototype.hasOwnProperty
        }, {106: 106}],
        108: [function (t, e, r) {
            function n(t) {
                return t.replace(/^\s*|\s*$/g, "")
            }

            r = e.exports = n, r.left = function (t) {
                return t.replace(/^\s*/, "")
            }, r.right = function (t) {
                return t.replace(/\s*$/, "")
            }
        }, {}],
        109: [function (t, e, r) {
            var n = t(108), o = t(107), i = function (t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            };
            e.exports = function (t) {
                if (!t) return {};
                var e = {};
                return o(n(t).split("\n"), function (t) {
                    var r = t.indexOf(":"), o = n(t.slice(0, r)).toLowerCase(), s = n(t.slice(r + 1));
                    "undefined" == typeof e[o] ? e[o] = s : i(e[o]) ? e[o].push(s) : e[o] = [e[o], s]
                }), e
            }
        }, {107: 107, 108: 108}],
        110: [function (t, e, r) {
            function n() {
                for (var t = {}, e = 0; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var n in r) o.call(r, n) && (t[n] = r[n])
                }
                return t
            }

            e.exports = n;
            var o = Object.prototype.hasOwnProperty
        }, {}]
    }, {}, [93])(93)
});