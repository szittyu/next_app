import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import About from '../../pages/about'

describe('About', () => {
    it('renders div from about page', () => {
        render(<About />)

        const about = screen.getByRole("about")

        expect(about).toBeInTheDocument()
    })
})