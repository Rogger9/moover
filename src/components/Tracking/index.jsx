import { lazy } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { StyledTrackingPage } from './style'

const Loader = lazy(() => import('../Loader'))

const Tracking = () => {
  const { data, loading, error } = useFetch({ route: '/tracking' })

  if (error) return <h1>Lo sentimos! Hubo un problema al buscar esta información</h1>
  if (loading) return <Loader />

  return (
  <StyledTrackingPage>
    <h1>Tracking</h1>
    <h3>{data?.message}</h3>
  </StyledTrackingPage>
  )
}

export default Tracking
