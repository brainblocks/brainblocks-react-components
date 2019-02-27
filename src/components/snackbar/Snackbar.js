// @flow
import * as React from 'react'
import { destyle } from 'destyle'
import { SnackbarProvider } from 'notistack'

type Props = {
  successIcon: React.Node,
  errorIcon: React.Node,
  infoIcon: React.Node,
  warningIcon: React.Node,
  children: React.Node,
  notistackProps: Object,
  /** Given by destyle. Do not pass this to the component as a prop. */
  styles: Object
}

export const Snackbar = ({
  styles,
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
      root: styles.root,
      variantSuccess: styles.success,
      variantError: styles.error,
      variantWarning: styles.warning,
      variantInfo: styles.info
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
