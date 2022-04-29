import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Details from '../../pages/allposts/[title]'
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

describe('Details', () => {
    it('renders div from allpost Details component', () => {
        render(<Details learn={dummyCardData} />)

        const about = screen.getByRole("details")

        expect(about).toBeInTheDocument()
    })
})