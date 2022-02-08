import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import { GlobalStyles } from './styles/GlobalStyles'
import { StyledApp } from './styles/StyledApp'

function App () {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <StyledApp>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </StyledApp>
    </BrowserRouter>
  )
}

export default App
