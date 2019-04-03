Button example:

```js
const styles = require('./example-component.style').default
const addStyles = require('destyle').addStyles
addStyles('BB-ExampleComponent', props => styles(props))
;<div style={{ display: 'flex', justifyContent: 'space-around' }}>
  <ExampleComponent type="secondary">Secondary Button</ExampleComponent>
  <ExampleComponent type="primary">Primary Button</ExampleComponent>
  <ExampleComponent style={{ borderRadius: 3, fontSize: 18 }}>
    Custom Styles
  </ExampleComponent>
</div>
```
