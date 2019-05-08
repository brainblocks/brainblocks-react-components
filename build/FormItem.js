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
    r((r.s = 210))
  )
})({
  0: function(e, t) {
    e.exports = require('react')
  },
  10: function(e, t) {
    e.exports = require('destyle')
  },
  210: function(e, t, r) {
    'use strict'
    r.r(t),
      r.d(t, 'FormItem', function() {
        return i
      })
    var n = r(0),
      l = r(10)
    function o(e, t) {
      if (null == e) return {}
      var r,
        n,
        l = (function(e, t) {
          if (null == e) return {}
          var r,
            n,
            l = {},
            o = Object.keys(e)
          for (n = 0; n < o.length; n++)
            (r = o[n]), t.indexOf(r) >= 0 || (l[r] = e[r])
          return l
        })(e, t)
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e)
        for (n = 0; n < o.length; n++)
          (r = o[n]),
            t.indexOf(r) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(e, r) &&
                (l[r] = e[r]))
      }
      return l
    }
    var i = function(e) {
      var t = e.styles,
        r = (e.destyleMerge, e.fieldId),
        l = e.label,
        i = e.description,
        u = e.error,
        a = e.extra,
        c = e.children
      o(e, [
        'styles',
        'destyleMerge',
        'fieldId',
        'label',
        'description',
        'error',
        'extra',
        'children'
      ])
      return n.createElement(
        'div',
        { className: t.root },
        !!l &&
          n.createElement(
            'div',
            { className: t.label },
            'string' == typeof l
              ? n.createElement('label', { htmlFor: r }, l)
              : l
          ),
        !!a && n.createElement('div', { className: t.extra }, a),
        n.createElement('div', { className: t.field }, c),
        !!i &&
          n.createElement(
            'div',
            { className: t.description },
            'string' == typeof i ? n.createElement('p', null, i) : i
          ),
        !!u &&
          n.createElement(
            'div',
            { className: t.error },
            'string' == typeof u ? n.createElement('p', null, u) : u
          )
      )
    }
    t.default = Object(l.destyle)(i, 'BB-FormItem')
  }
})
