import { lazy } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { StyledOrders } from './style'

const Loader = lazy(() => import('../Loader'))

const Orders = () => {
  const { data, loading, error } = useFetch({ route: '/orders' })

  if (error) return <h1>Lo sentimos! Hubo un problema al buscar esta información</h1>
  if (loading) return <Loader />

  return (
  <StyledOrders>
    <h1>Orders</h1>
    <h3>{data?.message}</h3>
  </StyledOrders>
  )
}

export default Orders
