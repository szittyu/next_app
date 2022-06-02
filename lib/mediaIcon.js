import { getStrapiURL } from "./api";

export function getStrapiMediaIcon(media) {
    const { url } = media.data.attributes;
    const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
    return imageUrl;
}