// @flow
import * as React from 'react'
import { destyle } from 'destyle'
import TabComponents from '../tabs/Tabs'

const { Tabs, Tab, TabList, TabPanel } = TabComponents

type Props = {
  /** Collapsed  */
  collapsed: boolean,
  /** In collapsed mode, are we viewing a tab or the list */
  viewingTab: boolean,
  /** Handler for when tabs are selected */
  onSelect: tabindex => {},
  /** Handler for when "back" is clicked in collapsed mode */
  onBack: () => {},
  /** Index of currently active tab */
  activeTab: number,
  /** An array of tabs */
  tabs: Array<{
    title: React.Node,
    content: React.Node
  }>,
  /** Props to be passed to the Tabs component */
  tabsProps?: {},
  /** Back button content */
  backButtonContent?: React.Node,
  /** Given by destyle. Do not pass this to the component as a prop. */
  styles: Object
}

export const CollapseTabs = ({
  styles,
  collapsed = false,
  viewingTab = false,
  activeTab,
  tabs,
  tabsProps,
  onSelect,
  onBack,
  backButtonContent,
  ...rest
}: Props) => (
  <div className={styles.root}>
    {collapsed ? (
      <div className={styles.collapsedRoot}>
        {viewingTab ? (
          <>
            <div className={styles.collapsedBack} onClick={onBack}>
              {backButtonContent ? backButtonContent : 'Back'}
            </div>
            <div className={styles.collapsedTab}>{tabs[activeTab].content}</div>
          </>
        ) : (
          <ul className={styles.collapsedList}>
            {tabs.map((tab, i) => (
              <li
                key={`bb-collapsed-tab-${i}`}
                className={styles.collapsedListItem}
                onClick={() => onSelect(i)}
              >
                {tab.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    ) : (
      <Tabs {...tabsProps} selectedIndex={activeTab} onSelect={onSelect}>
        <div className={styles.tabsRoot}>
          <div className={styles.tabs}>
            <TabList>
              {tabs.map(tab => (
                <Tab>
                  <div className={styles.tab}>{tab.title}</div>
                </Tab>
              ))}
            </TabList>
          </div>
          <div className={styles.tabPanels}>
            {tabs.map(tab => (
              <TabPanel key={`bb-uncollapsed-tab-${i}`}>
                <div className={styles.tabPanel}>{tab.content}</div>
              </TabPanel>
            ))}
          </div>
        </div>
      </Tabs>
    )}
  </div>
)

export default destyle(CollapseTabs, 'BB-CollapseTabs')
