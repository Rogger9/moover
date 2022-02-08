import { Link } from 'react-router-dom'
import { CONTACT, ORDERS, TRACKING } from '../../../routes'
import { StyledMenu } from './style'

const Menu = () => (
  <StyledMenu>
    <li><Link to={ORDERS}>Pedidos</Link></li>
    <li><Link to={TRACKING}>Seguimiento</Link></li>
    <li><Link to={CONTACT}>Contacto</Link></li>
  </StyledMenu>
)

export default Menu
