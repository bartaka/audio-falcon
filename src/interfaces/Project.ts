import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';

export interface Project {
    image: string;
    projectName: string;
    slug?: { current: string };
    projectType: string;
    role: string;
    year: string;
    website: string;
    client: string;
    description: string;
    video: string;
    note?: boolean;
    imageAltText: string;
};