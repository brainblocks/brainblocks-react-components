```js
const styles = require('./tabs.style').default
const addStyles = require('destyle').addStyles
addStyles('BB-Tabs', props => styles(props))
const TabComponents = require('../tabs/Tabs').default
const { Tabs, TabPanel, TabList, Tab } = TabComponents
;<Tabs>
  <TabList>
    <Tab>One</Tab>
    <Tab>Two</Tab>
    <Tab>Three</Tab>
  </TabList>

  <TabPanel>One</TabPanel>
  <TabPanel>Two</TabPanel>
  <TabPanel>Three</TabPanel>
</Tabs>
```
