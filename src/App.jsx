import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles } from './styles/GlobalStyles'
import { StyledApp } from './styles/StyledApp'

function App () {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <StyledApp>
        <h1>Moover</h1>
      </StyledApp>
    </BrowserRouter>
  )
}

export default App
