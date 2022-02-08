import { Link } from 'react-router-dom'
import logo from '../../assets/MooverLogo.png'

const Logo = () => (
  <Link to='/moover'>
    <img src={logo} alt='Logo' width='140' />
  </Link>
)

export default Logo
