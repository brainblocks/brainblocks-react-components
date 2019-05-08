module.exports = (function(e) {
  var t = {}
  function n(r) {
    if (t[r]) return t[r].exports
    var o = (t[r] = { i: r, l: !1, exports: {} })
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports
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
        for (var o in e)
          n.d(
            r,
            o,
            function(t) {
              return e[t]
            }.bind(null, o)
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
    n((n.s = 165))
  )
})({
  0: function(e, t) {
    e.exports = require('react')
  },
  146: function(e, t, n) {
    'use strict'
    var r = n(166).CopyToClipboard
    ;(r.CopyToClipboard = r), (e.exports = r)
  },
  147: function(e, t, n) {
    'use strict'
    var r,
      o = (r = n(0)) && 'object' == typeof r && 'default' in r ? r.default : r,
      a =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }
    e.exports = function(e) {
      var t = e.color,
        n = void 0 === t ? 'currentColor' : t,
        r = e.size,
        i = void 0 === r ? 24 : r,
        c = (e.children,
        (function(e, t) {
          var n = {}
          for (var r in e)
            t.indexOf(r) >= 0 ||
              (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]))
          return n
        })(e, ['color', 'size', 'children'])),
        l = 'mdi-icon ' + (c.className || '')
      return o.createElement(
        'svg',
        a({}, c, {
          className: l,
          width: i,
          height: i,
          fill: n,
          viewBox: '0 0 24 24'
        }),
        o.createElement('path', {
          d:
            'M19,21H8V7H19M19,5H8C6.9,5 6,5.9 6,7V21C6,22.1 6.9,23 8,23H19C20.1,23 21,22.1 21,21V7C21,5.9 20.1,5 19,5M16,1H4C2.9,1 2,1.9 2,3V17H4V3H16V1Z'
        })
      )
    }
  },
  165: function(e, t, n) {
    'use strict'
    n.r(t),
      n.d(t, 'NanoAddress', function() {
        return v
      })
    var r = n(0),
      o = n.n(r),
      a = n(146),
      i = n(147),
      c = n.n(i),
      l = n(8)
    function u(e) {
      return (u =
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
    function s(e, t) {
      if (null == e) return {}
      var n,
        r,
        o = (function(e, t) {
          if (null == e) return {}
          var n,
            r,
            o = {},
            a = Object.keys(e)
          for (r = 0; r < a.length; r++)
            (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n])
          return o
        })(e, t)
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e)
        for (r = 0; r < a.length; r++)
          (n = a[r]),
            t.indexOf(n) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(e, n) &&
                (o[n] = e[n]))
      }
      return o
    }
    function f(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n]
        ;(r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r)
      }
    }
    function p(e) {
      return (p = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
          })(e)
    }
    function y(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        )
      return e
    }
    function d(e, t) {
      return (d =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e
        })(e, t)
    }
    function b(e, t, n) {
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
    var v = (function(e) {
      function t(e) {
        var n, r, o
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function')
          })(this, t),
          (r = this),
          (o = p(t).call(this, e)),
          (n = !o || ('object' !== u(o) && 'function' != typeof o) ? y(r) : o),
          b(y(n), 'handleMouseEnter', function() {
            n.setState({ isHovering: !0 })
          }),
          b(y(n), 'handleMouseLeave', function() {
            n.setState({ isHovering: !1 })
          }),
          (n.state = { isHovering: !1 }),
          n
        )
      }
      var n, r, i
      return (
        (function(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            )
          ;(e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && d(e, t)
        })(t, o.a.Component),
        (n = t),
        (r = [
          {
            key: 'render',
            value: function() {
              var e = this.props,
                t = e.styles,
                n = (e.destyleMerge, e.address),
                r = e.startChars,
                i = void 0 === r ? 10 : r,
                l = e.endChars,
                u = void 0 === l ? 5 : l,
                f = e.showAll,
                p = void 0 !== f && f,
                y = e.copyable,
                d = void 0 !== y && y,
                b = e.hoverable,
                v = void 0 !== b && b,
                m = e.onCopy,
                h = (s(e, [
                  'styles',
                  'destyleMerge',
                  'address',
                  'startChars',
                  'endChars',
                  'showAll',
                  'copyable',
                  'hoverable',
                  'onCopy'
                ]),
                n.substr(0, i)),
                g = n.substr(n.length - u)
              return o.a.createElement(
                'span',
                {
                  className: t.root,
                  onMouseEnter: this.handleMouseEnter,
                  onMouseLeave: this.handleMouseLeave
                },
                o.a.createElement(
                  'span',
                  { className: t.address },
                  p
                    ? n
                    : o.a.createElement(
                        o.a.Fragment,
                        null,
                        o.a.createElement('span', { className: t.start }, h),
                        o.a.createElement(
                          'span',
                          { className: t.ellipsis },
                          '…'
                        ),
                        o.a.createElement('span', { className: t.end }, g)
                      )
                ),
                (d || (v && this.state.isHovering)) &&
                  o.a.createElement(
                    a.CopyToClipboard,
                    { text: n, onCopy: m },
                    o.a.createElement(c.a, { className: t.icon, size: 22 })
                  )
              )
            }
          }
        ]) && f(n.prototype, r),
        i && f(n, i),
        t
      )
    })()
    t.default = Object(l.destyle)(v, 'BB-NanoAddress')
  },
  166: function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.CopyToClipboard = void 0)
    var r =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        },
      o = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n]
            ;(r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      })(),
      a = c(n(0)),
      i = c(n(167))
    function c(e) {
      return e && e.__esModule ? e : { default: e }
    }
    function l(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        )
      return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
    }
    ;(t.CopyToClipboard = (function(e) {
      function t() {
        var e, n, r
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
        })(this, t)
        for (var o = arguments.length, c = Array(o), u = 0; u < o; u++)
          c[u] = arguments[u]
        return (
          (n = r = l(
            this,
            (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
              e,
              [this].concat(c)
            )
          )),
          (r.onClick = function(e) {
            var t = r.props,
              n = t.text,
              o = t.onCopy,
              c = t.children,
              l = t.options,
              u = a.default.Children.only(c),
              s = (0, i.default)(n, l)
            o && o(n, s),
              u &&
                u.props &&
                'function' == typeof u.props.onClick &&
                u.props.onClick(e)
          }),
          l(r, n)
        )
      }
      return (
        (function(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof t
            )
          ;(e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t))
        })(t, a.default.PureComponent),
        o(t, [
          {
            key: 'render',
            value: function() {
              var e = this.props,
                t = (e.text, e.onCopy, e.options, e.children),
                n = (function(e, t) {
                  var n = {}
                  for (var r in e)
                    t.indexOf(r) >= 0 ||
                      (Object.prototype.hasOwnProperty.call(e, r) &&
                        (n[r] = e[r]))
                  return n
                })(e, ['text', 'onCopy', 'options', 'children']),
                o = a.default.Children.only(t)
              return a.default.cloneElement(
                o,
                r({}, n, { onClick: this.onClick })
              )
            }
          }
        ]),
        t
      )
    })()).defaultProps = { onCopy: void 0, options: void 0 }
  },
  167: function(e, t, n) {
    'use strict'
    var r = n(168),
      o = 'Copy to clipboard: #{key}, Enter'
    e.exports = function(e, t) {
      var n,
        a,
        i,
        c,
        l,
        u,
        s = !1
      t || (t = {}), (n = t.debug || !1)
      try {
        if (
          ((i = r()),
          (c = document.createRange()),
          (l = document.getSelection()),
          ((u = document.createElement('span')).textContent = e),
          (u.style.all = 'unset'),
          (u.style.position = 'fixed'),
          (u.style.top = 0),
          (u.style.clip = 'rect(0, 0, 0, 0)'),
          (u.style.whiteSpace = 'pre'),
          (u.style.webkitUserSelect = 'text'),
          (u.style.MozUserSelect = 'text'),
          (u.style.msUserSelect = 'text'),
          (u.style.userSelect = 'text'),
          document.body.appendChild(u),
          c.selectNode(u),
          l.addRange(c),
          !document.execCommand('copy'))
        )
          throw new Error('copy command was unsuccessful')
        s = !0
      } catch (r) {
        n && console.error('unable to copy using execCommand: ', r),
          n && console.warn('trying IE specific stuff')
        try {
          window.clipboardData.setData('text', e), (s = !0)
        } catch (r) {
          n && console.error('unable to copy using clipboardData: ', r),
            n && console.error('falling back to prompt'),
            (a = (function(e) {
              var t =
                (/mac os x/i.test(navigator.userAgent) ? '⌘' : 'Ctrl') + '+C'
              return e.replace(/#{\s*key\s*}/g, t)
            })('message' in t ? t.message : o)),
            window.prompt(a, e)
        }
      } finally {
        l &&
          ('function' == typeof l.removeRange
            ? l.removeRange(c)
            : l.removeAllRanges()),
          u && document.body.removeChild(u),
          i()
      }
      return s
    }
  },
  168: function(e, t) {
    e.exports = function() {
      var e = document.getSelection()
      if (!e.rangeCount) return function() {}
      for (var t = document.activeElement, n = [], r = 0; r < e.rangeCount; r++)
        n.push(e.getRangeAt(r))
      switch (t.tagName.toUpperCase()) {
        case 'INPUT':
        case 'TEXTAREA':
          t.blur()
          break
        default:
          t = null
      }
      return (
        e.removeAllRanges(),
        function() {
          'Caret' === e.type && e.removeAllRanges(),
            e.rangeCount ||
              n.forEach(function(t) {
                e.addRange(t)
              }),
            t && t.focus()
        }
      )
    }
  },
  8: function(e, t) {
    e.exports = require('destyle')
  }
})
