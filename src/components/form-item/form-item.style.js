import { css } from 'emotion'
import theme from '../../theme'

export default props => ({
  root: css`
    display: flex;
    flex-wrap: wrap;
  `,
  label: css`
    flex-grow: 1;
  `,
  extra: css`
    flex: 0 0 auto;
  `,
  field: css`
    flex: 0 0 100%;
  `,
  description: css`
    flex: 0 1 100%;
  `
})
