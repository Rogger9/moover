import { Link } from 'react-router-dom'
import { StyledMenu } from './style'

const Menu = () => (
  <StyledMenu>
    <li><Link to='pedidos'>Pedidos</Link></li>
    <li><Link to='seguimiento'>Seguimiento</Link></li>
    <li><Link to='contacto'>Contacto</Link></li>
  </StyledMenu>
)

export default Menu
