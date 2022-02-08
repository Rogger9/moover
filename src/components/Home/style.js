import styled from 'styled-components'
import { DivFlex } from '../../styles/DivFlex'

export const StyledHome = styled(DivFlex)`
  flex-direction: column;
  min-height: 100vh;
  text-align: center;

  a {
    color: var(--fontColor);
    text-decoration: none;
  }
`

export const StyledMain = styled(DivFlex)`
  width: 100%;
  height: calc(100vh - 6rem);
`
