Text field example:

```js
const styles = require('./input.style').default
const addStyles = require('destyle').addStyles
addStyles('BB-Input', props => styles(props))
initialState = { val1: 'Abcd' }
;<div style={{ display: 'flex', justifyContent: 'space-around' }}>
  <Input
    value={state.val1}
    onChange={e => setState({ val1: e.target.value })}
  />
</div>
```

Textarea example:

```js
initialState = { val1: 'Abcd' }
;<div style={{ display: 'flex', justifyContent: 'space-around' }}>
  <Input
    multiline
    rows={2}
    value={state.val1}
    onChange={e => setState({ val1: e.target.value })}
  />
</div>
```
