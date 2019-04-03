import { css } from 'emotion'
import theme from '../../theme'

const styleFunc = props => ({
  root: css`
    background: #eee;
    ${props.type === 'primary' &&
      css`
        background: blue;
        color: #fff;
      `};
  `
})

export default styleFunc
