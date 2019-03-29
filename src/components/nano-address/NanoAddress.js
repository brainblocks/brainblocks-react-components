// @flow
import React from 'react'
import Button from '../button/Button'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import CopyIcon from 'mdi-react/ContentCopyIcon'
import { destyle } from 'destyle'

type Props = {
  /** Address to format */
  address: string,
  /** Show copy button */
  copyable?: boolean,
  /** Show copy button on hover */
  hover?: boolean,
  /** Number of characters before ellipsis */
  startChars: number,
  /** Number of characters after ellipsis */
  endChars: number,
  /** Given by destyle. Do not pass this to the component as a prop. */
  styles: Object,
  destyleMerge?: Object
}

/**
 * NanoAddress.
 */
export class NanoAddress extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
    this.state = {
      isHovering: false
    }
  }

  handleMouseEnter = () => {
    this.setState({
      isHovering: true
    })
  }

  handleMouseLeave = () => {
    this.setState({
      isHovering: false
    })
  }

  render() {
    const {
      styles,
      destyleMerge,
      address,
      startChars = 10,
      endChars = 5,
      copyable = false,
      hoverable = false,
      onCopy,
      ...rest
    } = this.props
    const start = address.substr(0, startChars)
    const end = address.substr(address.length - endChars)

    return (
      <span
        className={styles.root}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <span className={styles.address}>
          <span className={styles.start}>{start}</span>
          <span className={styles.ellipsis}>&hellip;</span>
          <span className={styles.end}>{end}</span>
        </span>
        {(copyable || (hoverable && this.state.isHovering)) && (
          <CopyToClipboard text={address} onCopy={onCopy}>
            <CopyIcon className={styles.icon} size={22} />
          </CopyToClipboard>
        )}
      </span>
    )
  }
}

export default destyle(NanoAddress, 'BB-NanoAddress')
