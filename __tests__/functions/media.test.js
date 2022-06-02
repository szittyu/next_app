import '@testing-library/jest-dom'
import { getStrapiMedia } from "../../lib/mediaVideo"
import { apiMedia } from '../../__mocks__/apiMedia'

test('calculates order total', () => {
    getStrapiMedia(apiMedia);
    expect(getStrapiMedia(apiMedia)).toEqual("uploads/html_276d5b895a.svg")
});