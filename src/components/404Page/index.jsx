import { Link } from 'react-router-dom'
import { HOME } from '../../routes'
import { Styled404Page } from './style'

const Page404 = () => (
  <Styled404Page>
    <h1>Lo sentimos! Esta página no existe.</h1>
    <h2>Regresar al <Link to={HOME}>inicio</Link></h2>
  </Styled404Page>
)

export default Page404
