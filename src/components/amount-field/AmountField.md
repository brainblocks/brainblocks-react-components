Example:

```js
const styles = require('./amount-field.style').default
const addStyles = require('destyle').addStyles
addStyles('BB-AmountField', props => styles(props))
const nanoPrice = 1.24
function convert(val, from, nanoPrice) {
  if (!nanoPrice) return 0
  return from === 'nano' ? val * nanoPrice : val / nanoPrice
}
function formatNano(nanoVal, decimals = 3) {
  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits: decimals,
    minimumFractionDigits: 2
  }).format(nanoVal)
}
function formatFiat(fiatVal, currency = 'USD') {
  try {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency
    }).format(fiatVal)
  } catch (e) {
    const number = new Intl.NumberFormat('en-US').format(fiatVal)
    return `${number} ${currency.toUpperCase()}`
  }
}
function getAmounts(state) {
  const nano =
    state.editing === 'nano'
      ? state.value
      : convert(state.value, 'fiat', nanoPrice)
  const fiat =
    state.editing === 'fiat'
      ? state.value
      : convert(state.value, 'nano', nanoPrice)
  return { nano, fiat }
}
initialState = {
  editing: 'nano',
  value: 0
}
;<AmountField
  value={state.value}
  editing={state.editing}
  fiatCode="USD"
  nanoFormatted={formatNano(getAmounts(state).nano)}
  fiatFormatted={formatFiat(getAmounts(state).fiat)}
  onChange={e =>
    setState({
      value: e.target.value
    })
  }
  onSwitchCurrency={() => {
    setState(oldState => ({
      editing: oldState.editing === 'nano' ? 'fiat' : 'nano'
    }))
  }}
/>
```
