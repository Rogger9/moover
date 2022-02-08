import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import Header from '../Header'
import { StyledHome, StyledMain } from './style'

const Home = () => {
  return (
    <StyledHome>
      <Header />
      <StyledMain>
        <Outlet />
      </StyledMain>
      <Footer />
    </StyledHome>
  )
}

export default Home
