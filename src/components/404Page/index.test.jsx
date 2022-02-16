import { MemoryRouter } from 'react-router-dom'
// import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Page404 from './'

describe('Page404', () => {
  test('render content', () => {
    render(<MemoryRouter><Page404 /></MemoryRouter>)
    screen.getByText('Lo sentimos! Esta página no existe.')
  })

  test('text in multiple elements', () => {
    render(<MemoryRouter><Page404 /></MemoryRouter>)
    screen.getByRole('heading', { level: 2, name: 'Regresar al inicio' })
  })
})
