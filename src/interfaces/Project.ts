import { PortableTextBlock } from '@portabletext/types'

export interface Project {
    image: string;
    projectName: string;
    slug?: { current: string };
    projectType: string;
    role: string;
    year: string;
    website: string;
    client: string;
    description: PortableTextBlock[];
    video: string;
    note?: boolean;
    imageAltText: string;
};