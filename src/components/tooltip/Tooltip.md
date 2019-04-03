```js
const styles = require('./tooltip.style').default
const addStyles = require('destyle').addStyles
addStyles('BB-Tooltip', props => styles(props))
const Button = require('../button/Button').default
;<Tooltip title="Hello!">
  <Button>Hover over this!</Button>
</Tooltip>
```
