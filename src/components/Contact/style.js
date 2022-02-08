import styled from 'styled-components'
import { DivFlex } from '../../styles/DivFlex'

export const StyledContact = styled(DivFlex)`
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 4rem;

  & > * {
    display: flex;
    gap: 1rem;
  }
`
