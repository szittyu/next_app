import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Video from '../../pages/video'
import { videoMockData } from '../../__mocks__/dummyCardData'

describe('Video', () => {
    it('renders div from video page', () => {
        render(<Video data={videoMockData} />)

        const video = screen.getByRole("video")

        expect(video).toBeInTheDocument()
    })
})