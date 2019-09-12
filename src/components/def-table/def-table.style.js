import { css } from 'emotion'
import theme from '../../theme'

export default props => ({
  root: css``,
  item: css`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 6px 0;
    border-top: 1px solid #eee;
    &:first-child {
      border-top: none;
    }
    @media (max-width: 767px) {
      display: block;
    }
  `,
  dt: css`
    margin: 2px 16px 2px 0;
  `,
  dd: css`
    margin: 2px 0;
  `
})
