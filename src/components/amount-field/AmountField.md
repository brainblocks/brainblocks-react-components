Example:

```js
function convert(val, from, nanoPrice) {
  if (!nanoPrice) return 0
  return from === 'nano' ? val * nanoPrice : val / nanoPrice
}
initialState = {
  conversionRate: 0.5,
  topCurrency: 'nano',
  topAmount: 2,
  bottomCurrency: 'fiat',
  bottomAmount: 1
}
;<AmountField
  value={state.topAmount}
  topCurrency={state.topCurrency}
  bottomAmount={state.bottomAmount}
  bottomCurrency={state.bottomCurrency}
  onChange={newAmount =>
    setState({
      bottomAmount: convert(newAmount, state.topCurrency, state.conversionRate)
    })
  }
  onSwitchCurrency={() => {
    setState({
      topCurrency: state.bottomCurrency,
      bottomCurrency: state.topCurrency,
      bottomAmount: convert(
        state.topAmount,
        state.bottomCurrency,
        state.conversionRate
      )
    })
  }}
/>
```
