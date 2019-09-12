// @flow
import * as React from 'react'
import { destyle } from 'destyle'

type DefTableItemProps = {
  /** Label / definition term */
  label: string | React.Node,
  /** Description / definition dd */
  children: React.Node,
  /** Given by destyle. Do not pass this to the component as a prop. */
  styles: Object,
  destyleMerge?: Object
}

/**
 * DefTable Item.
 */
export const DefTableItem = ({
  label,
  children,
  styles,
  destyleMerge,
  ...rest
}: DefTableItemProps) => {
  return (
    <div className={styles.item} {...rest}>
      <dt className={styles.dt}>{label}</dt>
      <dd className={styles.dd}>{children}</dd>
    </div>
  )
}

export default destyle(DefTableItem, 'BB-DefTable')
