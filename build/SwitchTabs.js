module.exports = (function(e) {
  var t = {}
  function r(n) {
    if (t[n]) return t[n].exports
    var o = (t[n] = { i: n, l: !1, exports: {} })
    return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports
  }
  return (
    (r.m = e),
    (r.c = t),
    (r.d = function(e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n })
    }),
    (r.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (r.t = function(e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e
      var n = Object.create(null)
      if (
        (r.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var o in e)
          r.d(
            n,
            o,
            function(t) {
              return e[t]
            }.bind(null, o)
          )
      return n
    }),
    (r.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default
            }
          : function() {
              return e
            }
      return r.d(t, 'a', t), t
    }),
    (r.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }),
    (r.p = ''),
    r((r.s = 225))
  )
})({
  0: function(e, t) {
    e.exports = require('react')
  },
  225: function(e, t, r) {
    'use strict'
    r.r(t)
    var n = r(0),
      o = (r(8), r(87))
    function a(e) {
      return (a =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(e) {
              return typeof e
            }
          : function(e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e
            })(e)
    }
    function s() {
      return (s =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }).apply(this, arguments)
    }
    function c(e, t) {
      if (null == e) return {}
      var r,
        n,
        o = (function(e, t) {
          if (null == e) return {}
          var r,
            n,
            o = {},
            a = Object.keys(e)
          for (n = 0; n < a.length; n++)
            (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r])
          return o
        })(e, t)
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e)
        for (n = 0; n < a.length; n++)
          (r = a[n]),
            t.indexOf(r) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(e, r) &&
                (o[r] = e[r]))
      }
      return o
    }
    function l(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r]
        ;(n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          'value' in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n)
      }
    }
    function i(e) {
      return (i = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
          })(e)
    }
    function u(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        )
      return e
    }
    function f(e, t) {
      return (f =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e
        })(e, t)
    }
    var p = o.default.Tabs,
      d = (o.default.Tab,
      o.default.TabList,
      o.default.TabPanel,
      (function(e) {
        function t() {
          var e, r, n, o, s, c, l
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function')
          })(this, t)
          for (var f = arguments.length, p = new Array(f), d = 0; d < f; d++)
            p[d] = arguments[d]
          return (
            (n = this),
            (r =
              !(o = (e = i(t)).call.apply(e, [this].concat(p))) ||
              ('object' !== a(o) && 'function' != typeof o)
                ? u(n)
                : o),
            (s = u(r)),
            (l = void 0),
            (c = 'tabs') in s
              ? Object.defineProperty(s, c, {
                  value: l,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                })
              : (s[c] = l),
            r
          )
        }
        var r, o, d
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function'
              )
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && f(e, t)
          })(t, n['Component']),
          (r = t),
          (o = [
            {
              key: 'componentDidMount',
              value: function() {
                this.forceUpdate()
              }
            },
            {
              key: 'render',
              value: function() {
                var e,
                  t = this,
                  r = this.props,
                  o = r.children,
                  a = r.selectedIndex,
                  l = (r.destyleMerge,
                  c(r, ['children', 'selectedIndex', 'destyleMerge'])),
                  i = 0,
                  u = 0
                return (
                  this.tabs &&
                    (e = this.tabs.querySelectorAll('.react-tabs__tab')[a]) &&
                    ((i = e.offsetLeft), (u = e.offsetWidth)),
                  n.createElement(
                    p,
                    s(
                      {
                        variant: 'switch',
                        selectedIndex: a,
                        domRef: function(e) {
                          return (t.tabs = e)
                        },
                        activeTabLeft: i,
                        activeTabWidth: u
                      },
                      l
                    ),
                    o
                  )
                )
              }
            }
          ]) && l(r.prototype, o),
          d && l(r, d),
          t
        )
      })())
    t.default = d
  },
  4: function(e, t, r) {
    e.exports = r(51)()
  },
  51: function(e, t, r) {
    'use strict'
    var n = r(52)
    function o() {}
    function a() {}
    ;(a.resetWarningCache = o),
      (e.exports = function() {
        function e(e, t, r, o, a, s) {
          if (s !== n) {
            var c = new Error(
              'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
            )
            throw ((c.name = 'Invariant Violation'), c)
          }
        }
        function t() {
          return e
        }
        e.isRequired = e
        var r = {
          array: e,
          bool: e,
          func: e,
          number: e,
          object: e,
          string: e,
          symbol: e,
          any: e,
          arrayOf: t,
          element: e,
          elementType: e,
          instanceOf: t,
          node: e,
          objectOf: t,
          oneOf: t,
          oneOfType: t,
          shape: t,
          exact: t,
          checkPropTypes: a,
          resetWarningCache: o
        }
        return (r.PropTypes = r), r
      })
  },
  52: function(e, t, r) {
    'use strict'
    e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
  },
  7: function(e, t, r) {
    var n
    /*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
    /*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
    !(function() {
      'use strict'
      var r = {}.hasOwnProperty
      function o() {
        for (var e = [], t = 0; t < arguments.length; t++) {
          var n = arguments[t]
          if (n) {
            var a = typeof n
            if ('string' === a || 'number' === a) e.push(n)
            else if (Array.isArray(n) && n.length) {
              var s = o.apply(null, n)
              s && e.push(s)
            } else if ('object' === a)
              for (var c in n) r.call(n, c) && n[c] && e.push(c)
          }
        }
        return e.join(' ')
      }
      e.exports
        ? ((o.default = o), (e.exports = o))
        : void 0 ===
            (n = function() {
              return o
            }.apply(t, [])) || (e.exports = n)
    })()
  },
  8: function(e, t) {
    e.exports = require('destyle')
  },
  87: function(e, t, r) {
    'use strict'
    r.r(t)
    var n = r(0),
      o = r.n(n),
      a = r(8)
    r(4)
    function s(e) {
      return e.type && 'Tab' === e.type.tabsRole
    }
    function c(e) {
      return e.type && 'TabPanel' === e.type.tabsRole
    }
    function l(e) {
      return e.type && 'TabList' === e.type.tabsRole
    }
    function i(e, t, r) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = r),
        e
      )
    }
    function u(e, t) {
      return n.Children.map(e, function(e) {
        return null === e
          ? null
          : (function(e) {
              return s(e) || l(e) || c(e)
            })(e)
          ? t(e)
          : e.props && e.props.children && 'object' == typeof e.props.children
          ? Object(n.cloneElement)(
              e,
              (function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r)
                  'function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                      Object.getOwnPropertySymbols(r).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                      })
                    )),
                    n.forEach(function(t) {
                      i(e, t, r[t])
                    })
                }
                return e
              })({}, e.props, { children: u(e.props.children, t) })
            )
          : e
      })
    }
    function f(e, t) {
      return n.Children.forEach(e, function(e) {
        null !== e &&
          (s(e) || c(e)
            ? t(e)
            : e.props &&
              e.props.children &&
              'object' == typeof e.props.children &&
              (l(e) && t(e), f(e.props.children, t)))
      })
    }
    var p,
      d = r(7),
      b = r.n(d),
      y = 0
    function h() {
      return 'react-tabs-' + y++
    }
    function v(e) {
      var t = 0
      return (
        f(e, function(e) {
          s(e) && t++
        }),
        t
      )
    }
    function m() {
      return (m =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }).apply(this, arguments)
    }
    function g(e) {
      return e && 'getAttribute' in e
    }
    function O(e) {
      return g(e) && 'tab' === e.getAttribute('role')
    }
    function T(e) {
      return g(e) && 'true' === e.getAttribute('aria-disabled')
    }
    try {
      p = !(
        'undefined' == typeof window ||
        !window.document ||
        !window.document.activeElement
      )
    } catch (e) {
      p = !1
    }
    var j = (function(e) {
      var t, r
      function a() {
        for (var t, r = arguments.length, n = new Array(r), o = 0; o < r; o++)
          n[o] = arguments[o]
        return (
          ((t = e.call.apply(e, [this].concat(n)) || this).tabNodes = []),
          (t.handleKeyDown = function(e) {
            if (t.isTabFromContainer(e.target)) {
              var r = t.props.selectedIndex,
                n = !1,
                o = !1
              ;(32 !== e.keyCode && 13 !== e.keyCode) ||
                ((n = !0), (o = !1), t.handleClick(e)),
                37 === e.keyCode || 38 === e.keyCode
                  ? ((r = t.getPrevTab(r)), (n = !0), (o = !0))
                  : 39 === e.keyCode || 40 === e.keyCode
                  ? ((r = t.getNextTab(r)), (n = !0), (o = !0))
                  : 35 === e.keyCode
                  ? ((r = t.getLastTab()), (n = !0), (o = !0))
                  : 36 === e.keyCode &&
                    ((r = t.getFirstTab()), (n = !0), (o = !0)),
                n && e.preventDefault(),
                o && t.setSelected(r, e)
            }
          }),
          (t.handleClick = function(e) {
            var r = e.target
            do {
              if (t.isTabFromContainer(r)) {
                if (T(r)) return
                var n = [].slice
                  .call(r.parentNode.children)
                  .filter(O)
                  .indexOf(r)
                return void t.setSelected(n, e)
              }
            } while (null != (r = r.parentNode))
          }),
          t
        )
      }
      ;(r = e),
        ((t = a).prototype = Object.create(r.prototype)),
        (t.prototype.constructor = t),
        (t.__proto__ = r)
      var i = a.prototype
      return (
        (i.setSelected = function(e, t) {
          if (!(e < 0 || e >= this.getTabsCount())) {
            var r = this.props
            ;(0, r.onSelect)(e, r.selectedIndex, t)
          }
        }),
        (i.getNextTab = function(e) {
          for (var t = this.getTabsCount(), r = e + 1; r < t; r++)
            if (!T(this.getTab(r))) return r
          for (var n = 0; n < e; n++) if (!T(this.getTab(n))) return n
          return e
        }),
        (i.getPrevTab = function(e) {
          for (var t = e; t--; ) if (!T(this.getTab(t))) return t
          for (t = this.getTabsCount(); t-- > e; )
            if (!T(this.getTab(t))) return t
          return e
        }),
        (i.getFirstTab = function() {
          for (var e = this.getTabsCount(), t = 0; t < e; t++)
            if (!T(this.getTab(t))) return t
          return null
        }),
        (i.getLastTab = function() {
          for (var e = this.getTabsCount(); e--; )
            if (!T(this.getTab(e))) return e
          return null
        }),
        (i.getTabsCount = function() {
          return v(this.props.children)
        }),
        (i.getPanelsCount = function() {
          return (function(e) {
            var t = 0
            return (
              f(e, function(e) {
                c(e) && t++
              }),
              t
            )
          })(this.props.children)
        }),
        (i.getTab = function(e) {
          return this.tabNodes['tabs-' + e]
        }),
        (i.getChildren = function() {
          var e = this,
            t = 0,
            r = this.props,
            a = r.children,
            i = r.disabledTabClassName,
            f = r.focus,
            d = r.forceRenderTabPanel,
            b = r.selectedIndex,
            y = r.selectedTabClassName,
            v = r.selectedTabPanelClassName
          ;(this.tabIds = this.tabIds || []),
            (this.panelIds = this.panelIds || [])
          for (var m = this.tabIds.length - this.getTabsCount(); m++ < 0; )
            this.tabIds.push(h()), this.panelIds.push(h())
          return u(a, function(r) {
            var a = r
            if (l(r)) {
              var h = 0,
                m = !1
              p &&
                (m = o.a.Children.toArray(r.props.children)
                  .filter(s)
                  .some(function(t, r) {
                    return document.activeElement === e.getTab(r)
                  })),
                (a = Object(n.cloneElement)(r, {
                  children: u(r.props.children, function(t) {
                    var r = 'tabs-' + h,
                      o = b === h,
                      a = {
                        tabRef: function(t) {
                          e.tabNodes[r] = t
                        },
                        id: e.tabIds[h],
                        panelId: e.panelIds[h],
                        selected: o,
                        focus: o && (f || m)
                      }
                    return (
                      y && (a.selectedClassName = y),
                      i && (a.disabledClassName = i),
                      h++,
                      Object(n.cloneElement)(t, a)
                    )
                  })
                }))
            } else if (c(r)) {
              var g = {
                id: e.panelIds[t],
                tabId: e.tabIds[t],
                selected: b === t
              }
              d && (g.forceRender = d),
                v && (g.selectedClassName = v),
                t++,
                (a = Object(n.cloneElement)(r, g))
            }
            return a
          })
        }),
        (i.isTabFromContainer = function(e) {
          if (!O(e)) return !1
          var t = e.parentElement
          do {
            if (t === this.node) return !0
            if (t.getAttribute('data-tabs')) break
            t = t.parentElement
          } while (t)
          return !1
        }),
        (i.render = function() {
          var e = this,
            t = this.props,
            r = (t.children, t.className),
            n = (t.disabledTabClassName, t.domRef),
            a = (t.focus,
            t.forceRenderTabPanel,
            t.onSelect,
            t.selectedIndex,
            t.selectedTabClassName,
            t.selectedTabPanelClassName,
            (function(e, t) {
              if (null == e) return {}
              var r,
                n,
                o = {},
                a = Object.keys(e)
              for (n = 0; n < a.length; n++)
                (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r])
              return o
            })(t, [
              'children',
              'className',
              'disabledTabClassName',
              'domRef',
              'focus',
              'forceRenderTabPanel',
              'onSelect',
              'selectedIndex',
              'selectedTabClassName',
              'selectedTabPanelClassName'
            ]))
          return o.a.createElement(
            'div',
            m({}, a, {
              className: b()(r),
              onClick: this.handleClick,
              onKeyDown: this.handleKeyDown,
              ref: function(t) {
                ;(e.node = t), n && n(t)
              },
              'data-tabs': !0
            }),
            this.getChildren()
          )
        }),
        a
      )
    })(n.Component)
    ;(j.defaultProps = { className: 'react-tabs', focus: !1 }),
      (j.propTypes = {})
    var C = 1,
      P = (function(e) {
        var t, r
        function n(t) {
          var r
          return (
            ((r = e.call(this, t) || this).handleSelected = function(e, t, n) {
              var o = r.props.onSelect,
                a = r.state.mode
              if ('function' != typeof o || !1 !== o(e, t, n)) {
                var s = { focus: 'keydown' === n.type }
                a === C && (s.selectedIndex = e), r.setState(s)
              }
            }),
            (r.state = n.copyPropsToState(r.props, {}, t.defaultFocus)),
            r
          )
        }
        return (
          (r = e),
          ((t = n).prototype = Object.create(r.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = r),
          (n.getDerivedStateFromProps = function(e, t) {
            return n.copyPropsToState(e, t)
          }),
          (n.getModeFromProps = function(e) {
            return null === e.selectedIndex ? C : 0
          }),
          (n.copyPropsToState = function(e, t, r) {
            void 0 === r && (r = !1)
            var o = { focus: r, mode: n.getModeFromProps(e) }
            if (o.mode === C) {
              var a = v(e.children) - 1,
                s = null
              ;(s =
                null != t.selectedIndex
                  ? Math.min(t.selectedIndex, a)
                  : e.defaultIndex || 0),
                (o.selectedIndex = s)
            }
            return o
          }),
          (n.prototype.render = function() {
            var e = this.props,
              t = e.children,
              r = (e.defaultIndex,
              e.defaultFocus,
              (function(e, t) {
                if (null == e) return {}
                var r,
                  n,
                  o = {},
                  a = Object.keys(e)
                for (n = 0; n < a.length; n++)
                  (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r])
                return o
              })(e, ['children', 'defaultIndex', 'defaultFocus'])),
              n = this.state,
              a = n.focus,
              s = n.selectedIndex
            return (
              (r.focus = a),
              (r.onSelect = this.handleSelected),
              null != s && (r.selectedIndex = s),
              o.a.createElement(j, r, t)
            )
          }),
          n
        )
      })(n.Component)
    function _() {
      return (_ =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }).apply(this, arguments)
    }
    ;(P.defaultProps = {
      defaultFocus: !1,
      forceRenderTabPanel: !1,
      selectedIndex: null,
      defaultIndex: null
    }),
      (P.propTypes = {}),
      (P.tabsRole = 'Tabs')
    var x = (function(e) {
      var t, r
      function n() {
        return e.apply(this, arguments) || this
      }
      return (
        (r = e),
        ((t = n).prototype = Object.create(r.prototype)),
        (t.prototype.constructor = t),
        (t.__proto__ = r),
        (n.prototype.render = function() {
          var e = this.props,
            t = e.children,
            r = e.className,
            n = (function(e, t) {
              if (null == e) return {}
              var r,
                n,
                o = {},
                a = Object.keys(e)
              for (n = 0; n < a.length; n++)
                (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r])
              return o
            })(e, ['children', 'className'])
          return o.a.createElement(
            'ul',
            _({}, n, { className: b()(r), role: 'tablist' }),
            t
          )
        }),
        n
      )
    })(n.Component)
    function I() {
      return (I =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }).apply(this, arguments)
    }
    ;(x.defaultProps = { className: 'react-tabs__tab-list' }),
      (x.propTypes = {}),
      (x.tabsRole = 'TabList')
    var N = (function(e) {
      var t, r
      function n() {
        return e.apply(this, arguments) || this
      }
      ;(r = e),
        ((t = n).prototype = Object.create(r.prototype)),
        (t.prototype.constructor = t),
        (t.__proto__ = r)
      var a = n.prototype
      return (
        (a.componentDidMount = function() {
          this.checkFocus()
        }),
        (a.componentDidUpdate = function() {
          this.checkFocus()
        }),
        (a.checkFocus = function() {
          var e = this.props,
            t = e.selected,
            r = e.focus
          t && r && this.node.focus()
        }),
        (a.render = function() {
          var e,
            t = this,
            r = this.props,
            n = r.children,
            a = r.className,
            s = r.disabled,
            c = r.disabledClassName,
            l = (r.focus, r.id),
            i = r.panelId,
            u = r.selected,
            f = r.selectedClassName,
            p = r.tabIndex,
            d = r.tabRef,
            y = (function(e, t) {
              if (null == e) return {}
              var r,
                n,
                o = {},
                a = Object.keys(e)
              for (n = 0; n < a.length; n++)
                (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r])
              return o
            })(r, [
              'children',
              'className',
              'disabled',
              'disabledClassName',
              'focus',
              'id',
              'panelId',
              'selected',
              'selectedClassName',
              'tabIndex',
              'tabRef'
            ])
          return o.a.createElement(
            'li',
            I({}, y, {
              className: b()(a, ((e = {}), (e[f] = u), (e[c] = s), e)),
              ref: function(e) {
                ;(t.node = e), d && d(e)
              },
              role: 'tab',
              id: l,
              'aria-selected': u ? 'true' : 'false',
              'aria-disabled': s ? 'true' : 'false',
              'aria-controls': i,
              tabIndex: p || (u ? '0' : null)
            }),
            n
          )
        }),
        n
      )
    })(n.Component)
    function w() {
      return (w =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }).apply(this, arguments)
    }
    ;(N.defaultProps = {
      className: 'react-tabs__tab',
      disabledClassName: 'react-tabs__tab--disabled',
      focus: !1,
      id: null,
      panelId: null,
      selected: !1,
      selectedClassName: 'react-tabs__tab--selected'
    }),
      (N.propTypes = {}),
      (N.tabsRole = 'Tab')
    var S = (function(e) {
      var t, r
      function n() {
        return e.apply(this, arguments) || this
      }
      return (
        (r = e),
        ((t = n).prototype = Object.create(r.prototype)),
        (t.prototype.constructor = t),
        (t.__proto__ = r),
        (n.prototype.render = function() {
          var e,
            t = this.props,
            r = t.children,
            n = t.className,
            a = t.forceRender,
            s = t.id,
            c = t.selected,
            l = t.selectedClassName,
            i = t.tabId,
            u = (function(e, t) {
              if (null == e) return {}
              var r,
                n,
                o = {},
                a = Object.keys(e)
              for (n = 0; n < a.length; n++)
                (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r])
              return o
            })(t, [
              'children',
              'className',
              'forceRender',
              'id',
              'selected',
              'selectedClassName',
              'tabId'
            ])
          return o.a.createElement(
            'div',
            w({}, u, {
              className: b()(n, ((e = {}), (e[l] = c), e)),
              role: 'tabpanel',
              id: s,
              'aria-labelledby': i
            }),
            a || c ? r : null
          )
        }),
        n
      )
    })(n.Component)
    function k() {
      return (k =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }).apply(this, arguments)
    }
    function E(e, t) {
      if (null == e) return {}
      var r,
        n,
        o = (function(e, t) {
          if (null == e) return {}
          var r,
            n,
            o = {},
            a = Object.keys(e)
          for (n = 0; n < a.length; n++)
            (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r])
          return o
        })(e, t)
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e)
        for (n = 0; n < a.length; n++)
          (r = a[n]),
            t.indexOf(r) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(e, r) &&
                (o[r] = e[r]))
      }
      return o
    }
    ;(S.defaultProps = {
      className: 'react-tabs__tab-panel',
      forceRender: !1,
      selectedClassName: 'react-tabs__tab-panel--selected'
    }),
      (S.propTypes = {}),
      (S.tabsRole = 'TabPanel')
    t.default = {
      TabPanel: S,
      TabList: x,
      Tab: N,
      Tabs: Object(a.destyle)(function(e) {
        var t = e.children,
          r = (e.activeTabWidth, e.activeTabLeft, e.variant, e.styles),
          o = (e.destyleMerge,
          E(e, [
            'children',
            'activeTabWidth',
            'activeTabLeft',
            'variant',
            'styles',
            'destyleMerge'
          ]))
        return n.createElement(P, k({ className: r.tabs }, o), t)
      }, 'BB-Tabs')
    }
  }
})
