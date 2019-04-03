import { css } from 'emotion'
import theme from '../../theme'

export default props => ({
  root: css`
    display: block;
    list-style: none;
    margin: 0;
    padding: 0;
  `,
  key: css`
    display: block;
    margin: 0;
  `,
  value: css`
    display: block;
    margin: 0;
  `
})
