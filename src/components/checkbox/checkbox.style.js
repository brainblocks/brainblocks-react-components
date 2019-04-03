import { css } from 'emotion'
import theme from '../../theme'

/**
 * Styles here are an example. It's probably best to use
 * these as an example rather than including them.
 */
const styleFunc = props => {
  const size = props.size || 24
  return {
    root: css`
      display: flex;
    `,
    checkbox: css`
      display: none;
    `,
    faux: css`
      position: relative;
      width: ${size}px;
      height: ${size}px;
      background: ${props.checked ? 'green' : 'gray'};
    `,
    check: css`
      display: ${props.checked ? 'block' : 'none'};
      position: absolute;
      right: 50%;
      bottom: 25%;
      height: ${size * 0.75}px;
      width: ${size * 0.33}px;
      border-bottom: 3px solid #fff;
      border-right: 3px solid #fff;
      transform: rotate(45deg);
      transform-origin: bottom right;
    `,
    label: css``
  }
}

export default styleFunc
