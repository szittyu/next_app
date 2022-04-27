import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import NotFound from '../../pages/404'

describe('404 page', () => {
    it('renders div from 404 page', () => {
        render(<NotFound />)

        const notFound = screen.getByRole("404")

        expect(notFound).toBeInTheDocument()
    })
})