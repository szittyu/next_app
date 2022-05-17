import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Characters from '../../components/reduxComponents/Characters'
import { charactersMockData } from '../../__mocks__/charactersMockData'

jest.mock(
    "next/image",
    () =>
        function Image({ src, alt }) {
            // eslint-disable-next-line @next/next/no-img-element
            return <img src={src} alt={alt} />
        },
)

describe('Characters', () => {
    it('renders div from Characters component', () => {
        render(<Characters char={charactersMockData} />)

        const char = screen.getByRole("characters")

        expect(char).toBeInTheDocument()
    })
})