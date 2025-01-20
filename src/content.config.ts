import { defineCollection, z } from 'astro:content';
import { client, contentfulClient, type PageTemplate } from './lib/contentful';

// Define collection(s)
const pages = defineCollection({
    loader: async () => {
        const data = await client.getAllPages();

        // Must return an array of entries with an id property, or an object with IDs as keys and entries as values
        return data.map((page: PageTemplate) => ({
          id: page.sys.id,
          ...page,
        }));
      },
 });

 const pagesRest = defineCollection({
    loader: async () => {
        const data = await contentfulClient.getEntries({
            content_type: "pageTemplate",
            include: 10,
        });

        return data.items.map((page: any) => ({
            id: page.sys.id,
            ...page,
        }));
    }
 });

// Export a single `collections` object to register collection(s)
export const collections = { pages, pagesRest };