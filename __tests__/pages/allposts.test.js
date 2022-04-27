import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import AllPost from '../../pages/allposts/index'

describe('AllPosts page', () => {
    it('renders a heading', () => {
        render(<AllPost />)

        const heading = screen.getByRole("header")

        expect(heading).toBeInTheDocument()
    })
})

describe('AllPost page', () => {
    it('renders allposts div', () => {
        render(<AllPost />)

        const allpostDiv = screen.getByRole("allposts")

        expect(allpostDiv).toBeInTheDocument()
    })
})