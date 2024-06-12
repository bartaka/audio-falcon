import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import imageUrlBuilder from '@sanity/image-url';

import client from '../data/sanityClient';

const { projectId, dataset } = client.config();

/**
 * Generates a URL for a Sanity image source.
 * @param {SanityImageSource} source - The Sanity image source object.
 * @returns {string|undefined} The URL for the image source, or undefined if the project ID or dataset is not available.
 */
export const urlFor = (source: SanityImageSource): string | undefined => {
    return projectId && dataset
        ? imageUrlBuilder({ projectId, dataset }).image(source).toString()
        : undefined;
};
