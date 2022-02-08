import styled from 'styled-components'

export const StyledNavBar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;

  input { display: none }

  input:checked ~ ul {
    display: flex
  }

  @media (max-width: 768px) {
    justify-content: flex-end;
  }
`

export const StyledIconMenu = styled.label`
  width: max-content;
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`

export const StyledMenu = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  font-size: 1.2rem;
  font-weight: bold;

  a {
    padding: .6rem 1.4rem;
    border-radius: .2rem;

    &:hover {
      background: var(--contrast);
      color: var(--bgColor);
      transition: background-color .2s ease-in-out;
    }
  }

  @media (max-width: 768px) {
    display: none;
    flex-direction: column;
    background: var(--secundary);
    padding: 2rem;
    border: 1px solid var(--blackOpacity);
    border-radius: .2rem;
    position: absolute;
    right: 0;
    top: 100%;
    z-index: 99;
  }
`
