// @flow
import * as React from 'react'
import { destyle } from 'destyle'
import { cx } from 'emotion'
import {
  SnackbarProvider,
  withSnackbar as notistackWithSnackbar
} from 'notistack'

export const withSnackbar = notistackWithSnackbar

type Props = {
  successIcon: React.Node,
  errorIcon: React.Node,
  infoIcon: React.Node,
  warningIcon: React.Node,
  children: React.Node,
  notistackProps: Object,
  /** Given by destyle. Do not pass this to the component as a prop. */
  styles: Object,
  destyleMerge?: Object
}

export const Snackbar = ({
  styles,
  destyleMerge,
  children,
  successIcon,
  errorIcon,
  infoIcon,
  warningIcon,
  notistackProps,
  ...rest
}: Props) => {
  const defaultNotistackProps = {
    maxSnack: 3,
    anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
    classes: {
      root: cx(styles.root),
      variantSuccess: cx(styles.success),
      variantError: cx(styles.error),
      variantWarning: cx(styles.warning),
      variantInfo: cx(styles.info)
    },
    iconVariant: {
      success: <div className={styles.iconSuccess}>{successIcon}</div>,
      error: <div className={styles.iconError}>{errorIcon}</div>,
      warning: <div className={styles.iconWarning}>{warningIcon}</div>,
      info: <div className={styles.iconInfo}>{infoIcon}</div>
    }
  }
  const snackbarProps = { ...defaultNotistackProps, ...notistackProps }
  return <SnackbarProvider {...snackbarProps}>{children}</SnackbarProvider>
}

export default destyle(Snackbar, 'BB-Snackbar')
