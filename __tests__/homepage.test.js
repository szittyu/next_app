import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

describe('Homepage', () => {
    it('renders a heading', () => {
        render(<Home />)

        const heading = screen.getByRole("homepage")

        expect(heading).toBeInTheDocument()
    })
})

describe('Homepage', () => {
    it('renders link button', () => {
        render(<Home />)

        const linkButton = screen.getByRole("allposts")

        expect(linkButton).toBeInTheDocument()
    })
})