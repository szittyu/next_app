import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Navbar from '../../components/Navbar'

describe('Navbar', () => {
    it('renders nav from Navbar component', () => {
        render(<Navbar />)

        const nav = screen.getByRole("navbar")

        expect(nav).toBeInTheDocument()
    })
})