import { css } from 'emotion'
import theme from '../../theme'

export default props => ({
  root: css`
    border: 1px solid #eee;
    ${!!props.multiline &&
      css`
        height: ${(props.rows || 3) * 32}px;
      `};
  `
})
