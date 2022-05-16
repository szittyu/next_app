import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { VideoComponent } from '../../components/VideoComponent'

describe('VideoComponent', () => {
    it('renders video from Videocomponent', () => {
        render(<VideoComponent />)

        const video = screen.getByRole("video")

        expect(video).toBeInTheDocument()
    })
})