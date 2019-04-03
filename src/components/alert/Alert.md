Alert examples:

```js
const styles = require('./alert.style').default
const addStyles = require('destyle').addStyles
addStyles('BB-Alert', props => styles(props))
;<div>
  <Alert>Here is a default alert</Alert>
  <Alert style={{ marginTop: 10 }} variant="success">
    This is a success alert
  </Alert>
  <Alert style={{ marginTop: 10 }} variant="warning">
    <p>This warning alert has a paragraph tag for a child</p>
  </Alert>
  <Alert style={{ marginTop: 10 }} variant="error">
    Error! Please make sure your password is correct
  </Alert>
</div>
```
