Example:

```js
const styles = require('./popup.style').default
const addStyles = require('destyle').addStyles
addStyles('BB-Popup', props => styles(props))
initialState = { open: false }
;<div>
  <Button onClick={() => setState({ open: true })}>Open Modal</Button>
  <p>
    <Popup open={state.open} onClose={() => setState({ open: false })}>
      This is my text in the modal
    </Popup>
  </p>
</div>
```
