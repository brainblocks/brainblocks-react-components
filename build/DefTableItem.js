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
    r((r.s = 133))
  )
})({
  0: function(e, t) {
    e.exports = require('react')
  },
  133: function(e, t, r) {
    'use strict'
    r.r(t),
      r.d(t, 'DefTableItem', function() {
        return a
      })
    var n = r(0),
      o = r(8)
    function l() {
      return (l =
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
    function u(e, t) {
      if (null == e) return {}
      var r,
        n,
        o = (function(e, t) {
          if (null == e) return {}
          var r,
            n,
            o = {},
            l = Object.keys(e)
          for (n = 0; n < l.length; n++)
            (r = l[n]), t.indexOf(r) >= 0 || (o[r] = e[r])
          return o
        })(e, t)
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e)
        for (n = 0; n < l.length; n++)
          (r = l[n]),
            t.indexOf(r) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(e, r) &&
                (o[r] = e[r]))
      }
      return o
    }
    var a = function(e) {
      var t = e.label,
        r = e.children,
        o = e.styles,
        a = (e.destyleMerge,
        u(e, ['label', 'children', 'styles', 'destyleMerge']))
      return n.createElement(
        'div',
        l({ className: o.item }, a),
        n.createElement('dt', { className: o.dt }, t),
        n.createElement('dd', { className: o.dd }, r)
      )
    }
    t.default = Object(o.destyle)(a, 'BB-DefTable')
  },
  8: function(e, t) {
    e.exports = require('destyle')
  }
})
