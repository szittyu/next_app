import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Layout from '../../components/Layout'

describe('Navbar', () => {
    it('renders nav from Navbar component', () => {
        render(<Layout />)

        const layout = screen.getByRole("layout")

        expect(layout).toBeInTheDocument()
    })
})