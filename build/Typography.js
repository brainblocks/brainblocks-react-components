module.exports = (function(e) {
  var r = {}
  function t(n) {
    if (r[n]) return r[n].exports
    var o = (r[n] = { i: n, l: !1, exports: {} })
    return e[n].call(o.exports, o, o.exports, t), (o.l = !0), o.exports
  }
  return (
    (t.m = e),
    (t.c = r),
    (t.d = function(e, r, n) {
      t.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: n })
    }),
    (t.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (t.t = function(e, r) {
      if ((1 & r && (e = t(e)), 8 & r)) return e
      if (4 & r && 'object' == typeof e && e && e.__esModule) return e
      var n = Object.create(null)
      if (
        (t.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & r && 'string' != typeof e)
      )
        for (var o in e)
          t.d(
            n,
            o,
            function(r) {
              return e[r]
            }.bind(null, o)
          )
      return n
    }),
    (t.n = function(e) {
      var r =
        e && e.__esModule
          ? function() {
              return e.default
            }
          : function() {
              return e
            }
      return t.d(r, 'a', r), r
    }),
    (t.o = function(e, r) {
      return Object.prototype.hasOwnProperty.call(e, r)
    }),
    (t.p = ''),
    t((t.s = 224))
  )
})({
  0: function(e, r) {
    e.exports = require('react')
  },
  224: function(e, r, t) {
    'use strict'
    t.r(r),
      t.d(r, 'Typography', function() {
        return c
      })
    var n = t(0),
      o = t(8)
    function u() {
      return (u =
        Object.assign ||
        function(e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = arguments[r]
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
          }
          return e
        }).apply(this, arguments)
    }
    function l(e, r) {
      if (null == e) return {}
      var t,
        n,
        o = (function(e, r) {
          if (null == e) return {}
          var t,
            n,
            o = {},
            u = Object.keys(e)
          for (n = 0; n < u.length; n++)
            (t = u[n]), r.indexOf(t) >= 0 || (o[t] = e[t])
          return o
        })(e, r)
      if (Object.getOwnPropertySymbols) {
        var u = Object.getOwnPropertySymbols(e)
        for (n = 0; n < u.length; n++)
          (t = u[n]),
            r.indexOf(t) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(e, t) &&
                (o[t] = e[t]))
      }
      return o
    }
    var c = function(e) {
      var r = e.styles,
        t = (e.destyleMerge, e.el),
        o = void 0 === t ? 'span' : t,
        c = (e.size, e.color, e.noWrap, e.spaceAbove, e.spaceBelow, e.children),
        i = l(e, [
          'styles',
          'destyleMerge',
          'el',
          'size',
          'color',
          'noWrap',
          'spaceAbove',
          'spaceBelow',
          'children'
        ]),
        a = o
      return n.createElement(a, u({ className: r.root }, i), c)
    }
    r.default = Object(o.destyle)(c, 'BB-Typography')
  },
  8: function(e, r) {
    e.exports = require('destyle')
  }
})
