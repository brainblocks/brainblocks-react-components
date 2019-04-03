Example:

```js
const menu = require('./menu.style').menu
const menuItem = require('./menu.style').menuItem
const addStyles = require('destyle').addStyles
addStyles('BB-Menu', props => menu(props))
addStyles('BB-MenuItem', props => menuItem(props))
const MenuItem = require('./MenuItem').default
initialState = { anchorEl: null }
;<div>
  <Button onClick={event => setState({ anchorEl: event.currentTarget })}>
    Open Menu
  </Button>
  <p>
    <Menu
      open={Boolean(state.anchorEl)}
      onClose={() => setState({ anchorEl: null })}
      anchorEl={state.anchorEl}
    >
      <MenuItem>A</MenuItem>
      <MenuItem>B</MenuItem>
      <MenuItem>C</MenuItem>
    </Menu>
  </p>
</div>
```

<!-- TODO
```js
const MenuDropdown = require('./MenuDropdown').default
;<MenuDropdown buttonText="Open MenuDropdown" />
``` -->
