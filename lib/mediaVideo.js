import { getStrapiURL } from "./api";

export function getStrapiMediaVideo(media) {
    const { url } = media.attributes;
    const videoUrl = url.startsWith("/") ? getStrapiURL(url) : url;
    return videoUrl;
}