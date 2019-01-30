```js
initialState = { activeTab: 0, collapsed: false, viewingTab: false }
onSelect = i => {
  setState({
    activeTab: i,
    viewingTab: state.collapsed
  })
}
onBack = () => {
  setState({
    viewingTab: false
  })
}
;<div>
  <button
    onClick={() => setState({ collapsed: !state.collapsed, viewingTab: false })}
  >
    Toggle collapsed
  </button>
  <CollapseTabs
    collapsed={state.collapsed}
    onSelect={onSelect}
    onBack={onBack}
    activeTab={state.activeTab}
    viewingTab={state.viewingTab}
    backButtonContent={<span style={{ color: '#AAA' }}>Take me back</span>}
    tabs={[
      {
        title: 'Tab 1',
        content: <div style={{ color: 'pink' }}>This is pink</div>
      },
      {
        title: 'Tab 2',
        content: <div style={{ color: 'green' }}>This is green</div>
      },
      {
        title: 'Tab 3',
        content: <div style={{ color: 'purple' }}>This is purple</div>
      }
    ]}
  />
</div>
```
