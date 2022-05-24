import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Redux from '../../pages/redux'
import { charactersMockData } from '../../__mocks__/charactersMockData'

import * as redux from 'react-redux'

const spy = jest.spyOn(redux, 'useSelector')
spy.mockReturnValue({ username: 'test' })

describe('Redux', () => {
    it('renders h1 from video page', () => {
        render(<Redux char={charactersMockData} />)

        const header = screen.getByRole("redux")

        expect(header).toBeInTheDocument()
    })
})

describe("Redux", () => {
    it("renders div from video page", () => {
        const { getByTestId } = render(
            <Redux char={charactersMockData} />
        );

        expect(getByTestId("redux")).toBeVisible();
    });
});