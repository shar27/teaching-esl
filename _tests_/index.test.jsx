import { render, screen } from '@testing-library/react'
import About from '../pages/index'

describe('About', () => {
  it('renders a heading', () => {
    render(<About />)

    const heading = screen.getByRole('heading', {
      name: /Shariq Ahmed\./i,
    })

    expect(heading).toBeInTheDocument()
  })
})