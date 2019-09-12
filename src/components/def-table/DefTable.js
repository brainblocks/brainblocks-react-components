// @flow
import * as React from 'react'
import { destyle } from 'destyle'
import DefTableItem from './DefTableItem'

type DefTableProps = {
  /** Items */
  children: React.ChildrenArray<React.Element<typeof DefTableItem>>,
  /** Given by destyle. Do not pass this to the component as a prop. */
  styles: Object,
  destyleMerge?: Object
}

/**
 * DefTable.
 */
export const DefTable = ({
  styles,
  children,
  destyleMerge,
  ...rest
}: DefTableProps) => {
  return (
    <dl className={styles.root} {...rest}>
      {children}
    </dl>
  )
}

export default destyle(DefTable, 'BB-DefTable')
