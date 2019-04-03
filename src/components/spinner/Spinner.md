Example:

```js
const styles = require('./spinner.style').default
const addStyles = require('destyle').addStyles
addStyles('BB-Spinner', props => styles(props))
;<div
  style={{
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  }}
>
  <Spinner color="pink" />
  <Spinner color="rebeccapurple" />
  <Spinner size={24} color="#bada55" />
</div>
```
