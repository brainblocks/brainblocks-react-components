import { css } from 'emotion'
import theme from '../../theme'

const styleFunc = props => ({
  root: css`
    display: flex;
  `,
  option: css`
    margin: 10px;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    position: relative;
    ${props.options.map(
      (color, i) => css`
        &:nth-of-type(${i + 1}) {
          background: ${color};
        }
      `
    )};
  `,
  label: css`
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    border-radius: 100%;
    cursor: pointer;
  `,
  hiddenLabel: css`
    display: none;
    visibility: hidden;
  `,
  radioInput: css`
    display: none;
    visibility: hidden;
    &:checked + label {
      border: 2px solid #555;
    }
  `
})

export default styleFunc
