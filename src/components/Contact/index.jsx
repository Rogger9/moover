import { StyledContact } from './style'
import iconEmail from '../../assets/iconEmail.svg'
import iconWhatsapp from '../../assets/iconWhatsapp.svg'
import iconInstagram from '../../assets/iconInstagram.svg'
import iconFacebook from '../../assets/iconFacebook.svg'

const Contact = () => (
  <StyledContact>
    <h2>¿Necesitas comunicarte con nosotros? Hazlo a través de:</h2>
    <span><img src={iconEmail} alt="iconEmail" /> correo@correo.com</span>
    <span><img src={iconWhatsapp} alt="iconWhatsapp" /> +54123456789</span>
    <h3>Puedes ver más sobre nosotros en:</h3>
    <a href="https://instagram.com" target='_blank' rel='noreferrer noopener'>
      <img src={iconInstagram} alt="iconInstagram" />
    </a>
    <a href="https://facebook.com" target='_blank' rel='noreferrer noopener'>
      <img src={iconFacebook} alt="" />
    </a>
  </StyledContact>
)

export default Contact
