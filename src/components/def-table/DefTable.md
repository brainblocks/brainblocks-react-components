DefTable example:

```js
const styles = require('./def-table.style').default
const addStyles = require('destyle').addStyles
addStyles('BB-DefTable', props => styles(props))
const DefTableItem = require('./DefTableItem').default
;<DefTable>
  <DefTableItem label="Text Label">277.32 Nano</DefTableItem>
  <DefTableItem label={<span style={{ color: 'green' }}>JSX Label</span>}>
    1 ETH = 192 NANO
  </DefTableItem>
  <DefTableItem label="Receive address">
    nano_1brainb3zz81wmhxndsbrjb94hx3fhr1fyydmg6iresyk76f3k7y7jiazoji
  </DefTableItem>
</DefTable>
```
