import { css } from 'emotion'
import theme from '../../theme'

export default props => ({
  root: css`
    display: flex;
    flex-wrap: wrap;
  `,
  address: css`
    flex-grow: 1;
  `
})
