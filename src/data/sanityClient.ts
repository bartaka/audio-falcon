import { createClient } from '@sanity/client';

const projectId = import.meta.env.VITE_SANITY_PROJECT;
const dataset = import.meta.env.VITE_SANITY_DATASET;

const client = createClient({
    projectId: projectId,
    dataset: dataset,
    useCdn: true,
    apiVersion: '2024-01-01'
});

export default client;
