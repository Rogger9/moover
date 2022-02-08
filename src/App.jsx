import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Page404 from './components/404Page'
import Contact from './components/Contact'
import Home from './components/Home'
import Orders from './components/Orders'
import Tracking from './components/Tracking'
import Welcome from './components/Welcome'
import { GlobalStyles } from './styles/GlobalStyles'

function App () {
  return (
    <BrowserRouter>
      <GlobalStyles />
        <Routes>
          <Route path='/moover' element={<Home />}>
            <Route index element={<Welcome />} />
            <Route path='pedidos' element={<Orders />} />
            <Route path='seguimiento' element={<Tracking />} />
            <Route path='contacto' element={<Contact />} />
          </Route>
          <Route path='*' element={<Page404 />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
