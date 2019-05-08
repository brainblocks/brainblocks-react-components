module.exports = (function(e) {
  var t = {}
  function r(n) {
    if (t[n]) return t[n].exports
    var l = (t[n] = { i: n, l: !1, exports: {} })
    return e[n].call(l.exports, l, l.exports, r), (l.l = !0), l.exports
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
        for (var l in e)
          r.d(
            n,
            l,
            function(t) {
              return e[t]
            }.bind(null, l)
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
    r((r.s = 162))
  )
})({
  0: function(e, t) {
    e.exports = require('react')
  },
  162: function(e, t, r) {
    'use strict'
    r.r(t),
      r.d(t, 'KeyValue', function() {
        return o
      })
    var n = r(0),
      l = r(8)
    function u(e, t) {
      if (null == e) return {}
      var r,
        n,
        l = (function(e, t) {
          if (null == e) return {}
          var r,
            n,
            l = {},
            u = Object.keys(e)
          for (n = 0; n < u.length; n++)
            (r = u[n]), t.indexOf(r) >= 0 || (l[r] = e[r])
          return l
        })(e, t)
      if (Object.getOwnPropertySymbols) {
        var u = Object.getOwnPropertySymbols(e)
        for (n = 0; n < u.length; n++)
          (r = u[n]),
            t.indexOf(r) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(e, r) &&
                (l[r] = e[r]))
      }
      return l
    }
    var o = function(e) {
      var t = e.styles,
        r = e.label,
        l = e.value,
        o = e.keyEl,
        a = void 0 === o ? 'dt' : o,
        i = e.valueEl,
        c = void 0 === i ? 'dd' : i,
        f = (e.destyleMerge,
        u(e, ['styles', 'label', 'value', 'keyEl', 'valueEl', 'destyleMerge']),
        'dt' === a ? 'dl' : 'div'),
        s = a,
        d = c
      return n.createElement(
        f,
        { className: t.root },
        n.createElement(s, { className: t.key }, r),
        n.createElement(d, { className: t.value }, l)
      )
    }
    t.default = Object(l.destyle)(o, 'BB-KeyValue')
  },
  8: function(e, t) {
    e.exports = require('destyle')
  }
})
