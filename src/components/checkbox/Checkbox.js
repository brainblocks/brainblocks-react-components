// @flow
import * as React from 'react'
import { destyle } from 'destyle'

type Props = {
  label: string,
  /** Only used by destyle */
  size: number,
  /** Given by destyle. Do not pass this to the component as a prop. */
  styles: Object,
  destyleMerge?: Object
}

/**
 * Checkbox.
 */
export const Checkbox = ({
  styles,
  label,
  size,
  destyleMerge,
  ...rest
}: Props) => {
  return (
    <label className={styles.root}>
      <input type="checkbox" className={styles.checkbox} {...rest} />
      <span className={styles.faux}>
        <span className={styles.check} />
      </span>
      <span className={styles.label}>{label}</span>
    </label>
  )
}

export default destyle(Checkbox, 'BB-Checkbox')
