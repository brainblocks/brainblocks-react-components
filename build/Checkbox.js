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
    r((r.s = 206))
  )
})({
  0: function(e, t) {
    e.exports = require('react')
  },
  10: function(e, t) {
    e.exports = require('destyle')
  },
  206: function(e, t, r) {
    'use strict'
    r.r(t),
      r.d(t, 'Checkbox', function() {
        return a
      })
    var n = r(0),
      o = r(10)
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
      var t = e.styles,
        r = e.label,
        o = (e.size,
        e.destyleMerge,
        u(e, ['styles', 'label', 'size', 'destyleMerge']))
      return n.createElement(
        'label',
        { className: t.root },
        n.createElement(
          'input',
          l({ type: 'checkbox', className: t.checkbox }, o)
        ),
        n.createElement(
          'span',
          { className: t.faux },
          n.createElement('span', { className: t.check })
        ),
        n.createElement('span', { className: t.label }, r)
      )
    }
    t.default = Object(o.destyle)(a, 'BB-Checkbox')
  }
})
