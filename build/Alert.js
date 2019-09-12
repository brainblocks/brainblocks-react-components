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
    r((r.s = 155))
  )
})({
  0: function(e, t) {
    e.exports = require('react')
  },
  155: function(e, t, r) {
    'use strict'
    r.r(t),
      r.d(t, 'Alert', function() {
        return d
      })
    var n = r(0),
      l = r(8)
    function o() {
      return (o =
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
    function a(e, t) {
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
    var c = function(e) {
      return n.createElement(
        'svg',
        e,
        n.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M17.456.73c.783.904.712 2.297-.157 3.111l-9.176 8.593a2.06 2.06 0 0 1-2.971-.14L.564 7.138a2.267 2.267 0 0 1 .115-3.114 2.06 2.06 0 0 1 2.992.12l3.17 3.562 7.625-7.14a2.06 2.06 0 0 1 2.99.163z'
        })
      )
    }
    c.defaultProps = {
      width: '18',
      height: '13',
      viewBox: '0 0 18 13',
      xmlns: 'http://www.w3.org/2000/svg',
      className: 'bb-svg-icon'
    }
    var i = function(e) {
      return n.createElement(
        'svg',
        e,
        n.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M2.5 0C3.88 0 5 .988 5 2.207v11.586C5 15.012 3.88 16 2.5 16S0 15.012 0 13.793V2.207C0 .988 1.12 0 2.5 0z'
        }),
        n.createElement('path', {
          d: 'M5 20.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z'
        })
      )
    }
    i.defaultProps = {
      width: '5',
      height: '23',
      viewBox: '0 0 5 23',
      xmlns: 'http://www.w3.org/2000/svg',
      className: 'bb-svg-icon'
    }
    var u = function(e) {
      return n.createElement(
        'svg',
        e,
        n.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M3.5 20C2.12 20 1 19.062 1 17.905v-6.81C1 9.938 2.12 9 3.5 9S6 9.938 6 11.095v6.81C6 19.062 4.88 20 3.5 20z'
        }),
        n.createElement('path', {
          d: 'M0 3.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z'
        })
      )
    }
    u.defaultProps = {
      width: '7',
      height: '20',
      viewBox: '0 0 7 20',
      xmlns: 'http://www.w3.org/2000/svg',
      className: 'bb-svg-icon'
    }
    var s = function(e) {
      return n.createElement(
        'svg',
        e,
        n.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M12.365 3.983c.846-.911.846-2.388 0-3.3a2.059 2.059 0 0 0-3.064 0L6.5 3.7 3.699.683a2.059 2.059 0 0 0-3.064 0c-.847.912-.847 2.389 0 3.3L3.435 7l-2.8 3.017c-.847.911-.847 2.388 0 3.3a2.059 2.059 0 0 0 3.064 0L6.5 10.3l2.801 3.017a2.059 2.059 0 0 0 3.064 0c.846-.912.846-2.389 0-3.3L9.565 7l2.8-3.017z'
        })
      )
    }
    s.defaultProps = {
      width: '13',
      height: '14',
      viewBox: '0 0 13 14',
      xmlns: 'http://www.w3.org/2000/svg',
      className: 'bb-svg-icon'
    }
    var d = function(e) {
      var t = e.styles,
        r = e.children,
        l = e.variant,
        d = void 0 === l ? 'info' : l,
        f = (e.destyleMerge,
        a(e, ['styles', 'children', 'variant', 'destyleMerge'])),
        v = u
      switch (d) {
        case 'success':
          v = c
          break
        case 'error':
          v = s
          break
        case 'warning':
          v = i
      }
      return n.createElement(
        'div',
        o({ className: t.root }, f),
        n.createElement('div', { className: t.icon }, n.createElement(v, null)),
        n.createElement('div', { className: t.message }, r)
      )
    }
    t.default = Object(l.destyle)(d, 'BB-Alert')
  },
  8: function(e, t) {
    e.exports = require('destyle')
  }
})
