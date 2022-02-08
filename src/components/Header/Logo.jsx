import { Link } from 'react-router-dom'
import logo from '../../assets/MooverLogo.png'
import { HOME } from '../../routes'

const Logo = () => (
  <Link to={HOME}>
    <img src={logo} alt='Logo' width='140' />
  </Link>
)

export default Logo
