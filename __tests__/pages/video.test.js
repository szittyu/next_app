import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Video from '../../pages/video'
import { videoMockData } from '../../__mocks__/videoMockData'

describe('Video', () => {
    it('renders h1 from video page', () => {
        render(<Video data={videoMockData} />)

        const header = screen.getByRole("header")

        expect(header).toBeInTheDocument()
    })
})

describe("Video", () => {
    it("renders div from video page", () => {
        const { getByTestId } = render(
            <Video data={videoMockData} />
        );

        expect(getByTestId("video")).toBeVisible();
    });
});