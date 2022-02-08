import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Loader from './components/Loader'
import { GlobalStyles } from './styles/GlobalStyles'

const Welcome = lazy(() => import('./components/Welcome'))
const Orders = lazy(() => import('./components/Orders'))
const Tracking = lazy(() => import('./components/Tracking'))
const Contact = lazy(() => import('./components/Contact'))
const Page404 = lazy(() => import('./components/404Page'))

function App () {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/moover' element={<Home />}>
            <Route index element={<Welcome />} />
            <Route path='pedidos' element={<Orders />} />
            <Route path='seguimiento' element={<Tracking />} />
            <Route path='contacto' element={<Contact />} />
          </Route>
          <Route path='*' element={<Page404 />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
