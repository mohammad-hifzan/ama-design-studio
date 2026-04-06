import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

export const client = createClient({
  projectId: 'aqcd5swq', // Find this in your Sanity folder's sanity.cli.js file
  dataset: 'production',
  useCdn: true, // Makes images load super fast
  apiVersion: '2024-04-05', // Use today's date
});

// This sets up the image URL generator
const builder = createImageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
}