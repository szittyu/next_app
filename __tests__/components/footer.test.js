import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Footer from '../../components/Footer'

describe('Navbar', () => {
    it('renders nav from Navbar component', () => {
        render(<Footer />)

        const footer = screen.getByRole("footer")

        expect(footer).toBeInTheDocument()
    })
})