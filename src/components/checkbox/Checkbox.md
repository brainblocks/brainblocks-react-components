Text field example:

```js
initialState = { isCheckboxChecked: false }
;<div style={{ display: 'flex', justifyContent: 'space-around' }}>
  <Checkbox
    size={28}
    checked={state.isCheckboxChecked}
    onChange={e => setState({ isCheckboxChecked: e.target.checked })}
    label="Here's my cool checkbox"
  />
  <div>Checkbox is {state.isCheckboxChecked ? 'checked' : 'unchecked'}</div>
</div>
```
