import Menu from './Menu'
import { StyledNavBar, StyledIconMenu } from './style'
import iconMenu from '../../../assets/menuVertical.svg'

const NavBar = () => (
  <StyledNavBar>
    <input type="checkbox" name="iconMenu" id="iconMenu" />
    <Menu />
    <StyledIconMenu htmlFor="iconMenu">
      <img src={iconMenu} alt="iconMenu" width="34" />
    </StyledIconMenu>
  </StyledNavBar>
)

export default NavBar
