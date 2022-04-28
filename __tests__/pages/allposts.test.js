import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import AllPost from '../../pages/allposts/index'
import { dummyCardData } from '../../__mocks__/dummyCardData'

jest.mock("next/router", () => ({
    useRouter() {
        return {
            route: "/",
            pathname: "",
            query: "",
            asPath: "",
        };
    },
}));


describe('AllPosts page', () => {
    it('renders a heading', () => {
        render(<AllPost learn={dummyCardData} />)

        const heading = screen.getByRole("header")

        expect(heading).toBeInTheDocument()
    })
})

describe('AllPost page', () => {
    it('renders allposts div', () => {
        render(<AllPost learn={dummyCardData} />)

        const allpostDiv = screen.getByRole("allposts")

        expect(allpostDiv).toBeInTheDocument()
    })
})