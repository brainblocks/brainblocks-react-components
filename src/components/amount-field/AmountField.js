// @flow
import React from 'react'
import Input from '../input/Input'
import FormField from '../form-field/FormField'
import Button from '../button/Button'
import SwitchIcon from 'mdi-react/SwapVerticalIcon'
import { destyle } from 'destyle'

type Props = {
  /** Value of the field (always the same) */
  value: number,
  /** Which value is currently being edited? */
  editing: 'nano' | 'fiat',
  /** Do the conversion, then format it, then put that here */
  nanoFormatted: string,
  /** Do the conversion, then format it, then put that here */
  fiatFormatted: string,
  /** E.g. 'USD' */
  fiatCode?: string,
  /** Event handler for the switch button */
  onSwitchCurrency: () => void,
  /** Event handler for change event */
  onChange: () => void,
  /** Props to pass to the FormField component (E.g. `valid`) */
  formFieldProps?: Object,
  /** Given by destyle. Do not pass this to the component as a prop. */
  styles: Object,
  destyleMerge?: Object
}

/**
 * AmountField.
 *
 * ### Important note
 * It's up to you to convert the values, format them, and pass them in for display purposes. It's also up to you to convert the value to Nano or Fiat on form submission.
 */
export const AmountField = ({
  value = 0,
  editing,
  nanoFormatted,
  fiatFormatted,
  fiatCode = 'USD',
  onSwitchCurrency,
  onChange,
  styles,
  destyleMerge,
  formFieldProps,
  ...rest
}: Props) => {
  return (
    <FormField {...formFieldProps}>
      <div className={styles.root}>
        <div className={styles.content}>
          <div className={styles.topRow}>
            <span className={styles.topVal}>
              <Input
                destyleMerge={{ root: styles.input }}
                value={value}
                type="number"
                min="0"
                step="any"
                onChange={onChange}
                {...rest}
              />
            </span>
            <span className={styles.topLabel}>
              {editing === 'nano' ? 'NANO' : fiatCode}
            </span>
          </div>
          <div className={styles.bottomRow}>
            <span className={styles.bottomVal}>
              {editing === 'nano' ? fiatFormatted : nanoFormatted}
            </span>
            <span className={styles.bottomLabel}>
              {editing === 'nano' ? fiatCode : 'NANO'}
            </span>
          </div>
        </div>
        <div className={styles.switchButton}>
          <Button
            variant="icon"
            color="#AAA"
            size={40}
            iconSize={32}
            onClick={onSwitchCurrency}
            type="button"
          >
            <SwitchIcon />
          </Button>
        </div>
      </div>
    </FormField>
  )
}

export default destyle(AmountField, 'BB-AmountField')
