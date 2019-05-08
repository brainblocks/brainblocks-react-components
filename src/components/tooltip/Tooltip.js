// @flow
import * as React from 'react'

import MUITooltip from '@material-ui/core/es/Tooltip'
import { destyle } from 'destyle'

type Props = {
  /** Tooltip contents */
  children?: React.Node,
  styles: Object,
  destyleMerge?: Object
}

/**
 * Tooltip.
 */
export const Tooltip = ({ styles, children, destyleMerge, ...rest }: Props) => {
  return (
    <MUITooltip className={styles.root} {...rest}>
      {children}
    </MUITooltip>
  )
}

export default destyle(Tooltip, 'BB-Tooltip')
