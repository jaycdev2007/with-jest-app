import { render, screen } from '@testing-library/react'
import Home from "../src/app/page"

describe('Home', () => {
  it('renders a h1', () => {
    render(<Home />)

    const h1 = screen.getByText("Ola mundo")

    expect(h1).toBeInTheDocument()
  })
})
