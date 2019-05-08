module.exports = (function(e) {
  var t = {}
  function n(r) {
    if (t[r]) return t[r].exports
    var a = (t[r] = { i: r, l: !1, exports: {} })
    return e[r].call(a.exports, a, a.exports, n), (a.l = !0), a.exports
  }
  return (
    (n.m = e),
    (n.c = t),
    (n.d = function(e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r })
    }),
    (n.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e
      var r = Object.create(null)
      if (
        (n.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var a in e)
          n.d(
            r,
            a,
            function(t) {
              return e[t]
            }.bind(null, a)
          )
      return r
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default
            }
          : function() {
              return e
            }
      return n.d(t, 'a', t), t
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }),
    (n.p = ''),
    n((n.s = 157))
  )
})({
  0: function(e, t) {
    e.exports = require('react')
  },
  157: function(e, t, n) {
    'use strict'
    n.r(t),
      n.d(t, 'CollapseTabs', function() {
        return p
      })
    var r = n(0),
      a = n(8),
      o = n(87)
    function s() {
      return (s =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }).apply(this, arguments)
    }
    function l(e, t) {
      if (null == e) return {}
      var n,
        r,
        a = (function(e, t) {
          if (null == e) return {}
          var n,
            r,
            a = {},
            o = Object.keys(e)
          for (r = 0; r < o.length; r++)
            (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n])
          return a
        })(e, t)
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e)
        for (r = 0; r < o.length; r++)
          (n = o[r]),
            t.indexOf(n) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(e, n) &&
                (a[n] = e[n]))
      }
      return a
    }
    var c = o.default.Tabs,
      i = o.default.Tab,
      u = o.default.TabList,
      d = o.default.TabPanel,
      p = function(e) {
        var t = e.styles,
          n = (e.destyleMerge, e.collapsed),
          a = void 0 !== n && n,
          o = e.viewingTab,
          p = void 0 !== o && o,
          f = e.activeTab,
          b = e.tabs,
          h = e.tabsProps,
          y = e.onSelect,
          m = e.onBack,
          v = e.backButtonContent
        l(e, [
          'styles',
          'destyleMerge',
          'collapsed',
          'viewingTab',
          'activeTab',
          'tabs',
          'tabsProps',
          'onSelect',
          'onBack',
          'backButtonContent'
        ])
        return r.createElement(
          'div',
          { className: t.root },
          a
            ? r.createElement(
                'div',
                { className: t.collapsedRoot },
                p
                  ? r.createElement(
                      r.Fragment,
                      null,
                      r.createElement(
                        'div',
                        { className: t.collapsedBack, onClick: m },
                        v || 'Back'
                      ),
                      r.createElement(
                        'div',
                        { className: t.collapsedTab },
                        b[f].content
                      )
                    )
                  : r.createElement(
                      'ul',
                      { className: t.collapsedList },
                      b.map(function(e, n) {
                        return r.createElement(
                          'li',
                          {
                            key: 'bb-collapsed-tab-'.concat(n),
                            className: t.collapsedListItem,
                            onClick: function() {
                              return y(n)
                            }
                          },
                          e.title
                        )
                      })
                    )
              )
            : r.createElement(
                c,
                s({}, h, { selectedIndex: f, onSelect: y }),
                r.createElement(
                  'div',
                  { className: t.tabsRoot },
                  r.createElement(
                    'div',
                    { className: t.tabs },
                    r.createElement(
                      u,
                      null,
                      b.map(function(e, n) {
                        return r.createElement(
                          i,
                          { key: 'bb-uncollapsed-tab-'.concat(n) },
                          r.createElement('div', { className: t.tab }, e.title)
                        )
                      })
                    )
                  ),
                  r.createElement(
                    'div',
                    { className: t.tabPanels },
                    b.map(function(e, n) {
                      return r.createElement(
                        d,
                        { key: 'bb-uncollapsed-tabpanel-'.concat(n) },
                        r.createElement(
                          'div',
                          { className: t.tabPanel },
                          e.content
                        )
                      )
                    })
                  )
                )
              )
        )
      }
    t.default = Object(a.destyle)(p, 'BB-CollapseTabs')
  },
  4: function(e, t, n) {
    e.exports = n(51)()
  },
  51: function(e, t, n) {
    'use strict'
    var r = n(52)
    function a() {}
    function o() {}
    ;(o.resetWarningCache = a),
      (e.exports = function() {
        function e(e, t, n, a, o, s) {
          if (s !== r) {
            var l = new Error(
              'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
            )
            throw ((l.name = 'Invariant Violation'), l)
          }
        }
        function t() {
          return e
        }
        e.isRequired = e
        var n = {
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
          checkPropTypes: o,
          resetWarningCache: a
        }
        return (n.PropTypes = n), n
      })
  },
  52: function(e, t, n) {
    'use strict'
    e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
  },
  7: function(e, t, n) {
    var r
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
      var n = {}.hasOwnProperty
      function a() {
        for (var e = [], t = 0; t < arguments.length; t++) {
          var r = arguments[t]
          if (r) {
            var o = typeof r
            if ('string' === o || 'number' === o) e.push(r)
            else if (Array.isArray(r) && r.length) {
              var s = a.apply(null, r)
              s && e.push(s)
            } else if ('object' === o)
              for (var l in r) n.call(r, l) && r[l] && e.push(l)
          }
        }
        return e.join(' ')
      }
      e.exports
        ? ((a.default = a), (e.exports = a))
        : void 0 ===
            (r = function() {
              return a
            }.apply(t, [])) || (e.exports = r)
    })()
  },
  8: function(e, t) {
    e.exports = require('destyle')
  },
  87: function(e, t, n) {
    'use strict'
    n.r(t)
    var r = n(0),
      a = n.n(r),
      o = n(8)
    n(4)
    function s(e) {
      return e.type && 'Tab' === e.type.tabsRole
    }
    function l(e) {
      return e.type && 'TabPanel' === e.type.tabsRole
    }
    function c(e) {
      return e.type && 'TabList' === e.type.tabsRole
    }
    function i(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = n),
        e
      )
    }
    function u(e, t) {
      return r.Children.map(e, function(e) {
        return null === e
          ? null
          : (function(e) {
              return s(e) || c(e) || l(e)
            })(e)
          ? t(e)
          : e.props && e.props.children && 'object' == typeof e.props.children
          ? Object(r.cloneElement)(
              e,
              (function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n)
                  'function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                      Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                      })
                    )),
                    r.forEach(function(t) {
                      i(e, t, n[t])
                    })
                }
                return e
              })({}, e.props, { children: u(e.props.children, t) })
            )
          : e
      })
    }
    function d(e, t) {
      return r.Children.forEach(e, function(e) {
        null !== e &&
          (s(e) || l(e)
            ? t(e)
            : e.props &&
              e.props.children &&
              'object' == typeof e.props.children &&
              (c(e) && t(e), d(e.props.children, t)))
      })
    }
    var p,
      f = n(7),
      b = n.n(f),
      h = 0
    function y() {
      return 'react-tabs-' + h++
    }
    function m(e) {
      var t = 0
      return (
        d(e, function(e) {
          s(e) && t++
        }),
        t
      )
    }
    function v() {
      return (v =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }).apply(this, arguments)
    }
    function g(e) {
      return e && 'getAttribute' in e
    }
    function T(e) {
      return g(e) && 'tab' === e.getAttribute('role')
    }
    function O(e) {
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
    var C = (function(e) {
      var t, n
      function o() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a]
        return (
          ((t = e.call.apply(e, [this].concat(r)) || this).tabNodes = []),
          (t.handleKeyDown = function(e) {
            if (t.isTabFromContainer(e.target)) {
              var n = t.props.selectedIndex,
                r = !1,
                a = !1
              ;(32 !== e.keyCode && 13 !== e.keyCode) ||
                ((r = !0), (a = !1), t.handleClick(e)),
                37 === e.keyCode || 38 === e.keyCode
                  ? ((n = t.getPrevTab(n)), (r = !0), (a = !0))
                  : 39 === e.keyCode || 40 === e.keyCode
                  ? ((n = t.getNextTab(n)), (r = !0), (a = !0))
                  : 35 === e.keyCode
                  ? ((n = t.getLastTab()), (r = !0), (a = !0))
                  : 36 === e.keyCode &&
                    ((n = t.getFirstTab()), (r = !0), (a = !0)),
                r && e.preventDefault(),
                a && t.setSelected(n, e)
            }
          }),
          (t.handleClick = function(e) {
            var n = e.target
            do {
              if (t.isTabFromContainer(n)) {
                if (O(n)) return
                var r = [].slice
                  .call(n.parentNode.children)
                  .filter(T)
                  .indexOf(n)
                return void t.setSelected(r, e)
              }
            } while (null != (n = n.parentNode))
          }),
          t
        )
      }
      ;(n = e),
        ((t = o).prototype = Object.create(n.prototype)),
        (t.prototype.constructor = t),
        (t.__proto__ = n)
      var i = o.prototype
      return (
        (i.setSelected = function(e, t) {
          if (!(e < 0 || e >= this.getTabsCount())) {
            var n = this.props
            ;(0, n.onSelect)(e, n.selectedIndex, t)
          }
        }),
        (i.getNextTab = function(e) {
          for (var t = this.getTabsCount(), n = e + 1; n < t; n++)
            if (!O(this.getTab(n))) return n
          for (var r = 0; r < e; r++) if (!O(this.getTab(r))) return r
          return e
        }),
        (i.getPrevTab = function(e) {
          for (var t = e; t--; ) if (!O(this.getTab(t))) return t
          for (t = this.getTabsCount(); t-- > e; )
            if (!O(this.getTab(t))) return t
          return e
        }),
        (i.getFirstTab = function() {
          for (var e = this.getTabsCount(), t = 0; t < e; t++)
            if (!O(this.getTab(t))) return t
          return null
        }),
        (i.getLastTab = function() {
          for (var e = this.getTabsCount(); e--; )
            if (!O(this.getTab(e))) return e
          return null
        }),
        (i.getTabsCount = function() {
          return m(this.props.children)
        }),
        (i.getPanelsCount = function() {
          return (function(e) {
            var t = 0
            return (
              d(e, function(e) {
                l(e) && t++
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
            n = this.props,
            o = n.children,
            i = n.disabledTabClassName,
            d = n.focus,
            f = n.forceRenderTabPanel,
            b = n.selectedIndex,
            h = n.selectedTabClassName,
            m = n.selectedTabPanelClassName
          ;(this.tabIds = this.tabIds || []),
            (this.panelIds = this.panelIds || [])
          for (var v = this.tabIds.length - this.getTabsCount(); v++ < 0; )
            this.tabIds.push(y()), this.panelIds.push(y())
          return u(o, function(n) {
            var o = n
            if (c(n)) {
              var y = 0,
                v = !1
              p &&
                (v = a.a.Children.toArray(n.props.children)
                  .filter(s)
                  .some(function(t, n) {
                    return document.activeElement === e.getTab(n)
                  })),
                (o = Object(r.cloneElement)(n, {
                  children: u(n.props.children, function(t) {
                    var n = 'tabs-' + y,
                      a = b === y,
                      o = {
                        tabRef: function(t) {
                          e.tabNodes[n] = t
                        },
                        id: e.tabIds[y],
                        panelId: e.panelIds[y],
                        selected: a,
                        focus: a && (d || v)
                      }
                    return (
                      h && (o.selectedClassName = h),
                      i && (o.disabledClassName = i),
                      y++,
                      Object(r.cloneElement)(t, o)
                    )
                  })
                }))
            } else if (l(n)) {
              var g = {
                id: e.panelIds[t],
                tabId: e.tabIds[t],
                selected: b === t
              }
              f && (g.forceRender = f),
                m && (g.selectedClassName = m),
                t++,
                (o = Object(r.cloneElement)(n, g))
            }
            return o
          })
        }),
        (i.isTabFromContainer = function(e) {
          if (!T(e)) return !1
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
            n = (t.children, t.className),
            r = (t.disabledTabClassName, t.domRef),
            o = (t.focus,
            t.forceRenderTabPanel,
            t.onSelect,
            t.selectedIndex,
            t.selectedTabClassName,
            t.selectedTabPanelClassName,
            (function(e, t) {
              if (null == e) return {}
              var n,
                r,
                a = {},
                o = Object.keys(e)
              for (r = 0; r < o.length; r++)
                (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n])
              return a
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
          return a.a.createElement(
            'div',
            v({}, o, {
              className: b()(n),
              onClick: this.handleClick,
              onKeyDown: this.handleKeyDown,
              ref: function(t) {
                ;(e.node = t), r && r(t)
              },
              'data-tabs': !0
            }),
            this.getChildren()
          )
        }),
        o
      )
    })(r.Component)
    ;(C.defaultProps = { className: 'react-tabs', focus: !1 }),
      (C.propTypes = {})
    var N = 1,
      P = (function(e) {
        var t, n
        function r(t) {
          var n
          return (
            ((n = e.call(this, t) || this).handleSelected = function(e, t, r) {
              var a = n.props.onSelect,
                o = n.state.mode
              if ('function' != typeof a || !1 !== a(e, t, r)) {
                var s = { focus: 'keydown' === r.type }
                o === N && (s.selectedIndex = e), n.setState(s)
              }
            }),
            (n.state = r.copyPropsToState(n.props, {}, t.defaultFocus)),
            n
          )
        }
        return (
          (n = e),
          ((t = r).prototype = Object.create(n.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = n),
          (r.getDerivedStateFromProps = function(e, t) {
            return r.copyPropsToState(e, t)
          }),
          (r.getModeFromProps = function(e) {
            return null === e.selectedIndex ? N : 0
          }),
          (r.copyPropsToState = function(e, t, n) {
            void 0 === n && (n = !1)
            var a = { focus: n, mode: r.getModeFromProps(e) }
            if (a.mode === N) {
              var o = m(e.children) - 1,
                s = null
              ;(s =
                null != t.selectedIndex
                  ? Math.min(t.selectedIndex, o)
                  : e.defaultIndex || 0),
                (a.selectedIndex = s)
            }
            return a
          }),
          (r.prototype.render = function() {
            var e = this.props,
              t = e.children,
              n = (e.defaultIndex,
              e.defaultFocus,
              (function(e, t) {
                if (null == e) return {}
                var n,
                  r,
                  a = {},
                  o = Object.keys(e)
                for (r = 0; r < o.length; r++)
                  (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n])
                return a
              })(e, ['children', 'defaultIndex', 'defaultFocus'])),
              r = this.state,
              o = r.focus,
              s = r.selectedIndex
            return (
              (n.focus = o),
              (n.onSelect = this.handleSelected),
              null != s && (n.selectedIndex = s),
              a.a.createElement(C, n, t)
            )
          }),
          r
        )
      })(r.Component)
    function j() {
      return (j =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
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
      var t, n
      function r() {
        return e.apply(this, arguments) || this
      }
      return (
        (n = e),
        ((t = r).prototype = Object.create(n.prototype)),
        (t.prototype.constructor = t),
        (t.__proto__ = n),
        (r.prototype.render = function() {
          var e = this.props,
            t = e.children,
            n = e.className,
            r = (function(e, t) {
              if (null == e) return {}
              var n,
                r,
                a = {},
                o = Object.keys(e)
              for (r = 0; r < o.length; r++)
                (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n])
              return a
            })(e, ['children', 'className'])
          return a.a.createElement(
            'ul',
            j({}, r, { className: b()(n), role: 'tablist' }),
            t
          )
        }),
        r
      )
    })(r.Component)
    function _() {
      return (_ =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }).apply(this, arguments)
    }
    ;(x.defaultProps = { className: 'react-tabs__tab-list' }),
      (x.propTypes = {}),
      (x.tabsRole = 'TabList')
    var I = (function(e) {
      var t, n
      function r() {
        return e.apply(this, arguments) || this
      }
      ;(n = e),
        ((t = r).prototype = Object.create(n.prototype)),
        (t.prototype.constructor = t),
        (t.__proto__ = n)
      var o = r.prototype
      return (
        (o.componentDidMount = function() {
          this.checkFocus()
        }),
        (o.componentDidUpdate = function() {
          this.checkFocus()
        }),
        (o.checkFocus = function() {
          var e = this.props,
            t = e.selected,
            n = e.focus
          t && n && this.node.focus()
        }),
        (o.render = function() {
          var e,
            t = this,
            n = this.props,
            r = n.children,
            o = n.className,
            s = n.disabled,
            l = n.disabledClassName,
            c = (n.focus, n.id),
            i = n.panelId,
            u = n.selected,
            d = n.selectedClassName,
            p = n.tabIndex,
            f = n.tabRef,
            h = (function(e, t) {
              if (null == e) return {}
              var n,
                r,
                a = {},
                o = Object.keys(e)
              for (r = 0; r < o.length; r++)
                (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n])
              return a
            })(n, [
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
          return a.a.createElement(
            'li',
            _({}, h, {
              className: b()(o, ((e = {}), (e[d] = u), (e[l] = s), e)),
              ref: function(e) {
                ;(t.node = e), f && f(e)
              },
              role: 'tab',
              id: c,
              'aria-selected': u ? 'true' : 'false',
              'aria-disabled': s ? 'true' : 'false',
              'aria-controls': i,
              tabIndex: p || (u ? '0' : null)
            }),
            r
          )
        }),
        r
      )
    })(r.Component)
    function k() {
      return (k =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }).apply(this, arguments)
    }
    ;(I.defaultProps = {
      className: 'react-tabs__tab',
      disabledClassName: 'react-tabs__tab--disabled',
      focus: !1,
      id: null,
      panelId: null,
      selected: !1,
      selectedClassName: 'react-tabs__tab--selected'
    }),
      (I.propTypes = {}),
      (I.tabsRole = 'Tab')
    var E = (function(e) {
      var t, n
      function r() {
        return e.apply(this, arguments) || this
      }
      return (
        (n = e),
        ((t = r).prototype = Object.create(n.prototype)),
        (t.prototype.constructor = t),
        (t.__proto__ = n),
        (r.prototype.render = function() {
          var e,
            t = this.props,
            n = t.children,
            r = t.className,
            o = t.forceRender,
            s = t.id,
            l = t.selected,
            c = t.selectedClassName,
            i = t.tabId,
            u = (function(e, t) {
              if (null == e) return {}
              var n,
                r,
                a = {},
                o = Object.keys(e)
              for (r = 0; r < o.length; r++)
                (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n])
              return a
            })(t, [
              'children',
              'className',
              'forceRender',
              'id',
              'selected',
              'selectedClassName',
              'tabId'
            ])
          return a.a.createElement(
            'div',
            k({}, u, {
              className: b()(r, ((e = {}), (e[c] = l), e)),
              role: 'tabpanel',
              id: s,
              'aria-labelledby': i
            }),
            o || l ? n : null
          )
        }),
        r
      )
    })(r.Component)
    function w() {
      return (w =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }).apply(this, arguments)
    }
    function S(e, t) {
      if (null == e) return {}
      var n,
        r,
        a = (function(e, t) {
          if (null == e) return {}
          var n,
            r,
            a = {},
            o = Object.keys(e)
          for (r = 0; r < o.length; r++)
            (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n])
          return a
        })(e, t)
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e)
        for (r = 0; r < o.length; r++)
          (n = o[r]),
            t.indexOf(n) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(e, n) &&
                (a[n] = e[n]))
      }
      return a
    }
    ;(E.defaultProps = {
      className: 'react-tabs__tab-panel',
      forceRender: !1,
      selectedClassName: 'react-tabs__tab-panel--selected'
    }),
      (E.propTypes = {}),
      (E.tabsRole = 'TabPanel')
    t.default = {
      TabPanel: E,
      TabList: x,
      Tab: I,
      Tabs: Object(o.destyle)(function(e) {
        var t = e.children,
          n = (e.activeTabWidth, e.activeTabLeft, e.variant, e.styles),
          a = (e.destyleMerge,
          S(e, [
            'children',
            'activeTabWidth',
            'activeTabLeft',
            'variant',
            'styles',
            'destyleMerge'
          ]))
        return r.createElement(P, w({ className: n.tabs }, a), t)
      }, 'BB-Tabs')
    }
  }
})
