import styled from 'styled-components'
import { DivFlex } from '../../styles/DivFlex'

export const Styled404Page = styled(DivFlex)`
  width: 100%;
  height: 100vh;
  flex-direction: column;
  gap: 4rem;

  a {
    color: var(--contrast);
    text-decoration: none;
  }
`
