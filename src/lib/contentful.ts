import { defineCollection, z } from 'astro:content';
import { pageTemplateQuery } from '../graphql/pageTemplateQuery';
const SPACE = import.meta.env.CONTENTFUL_SPACE_ID
const TOKEN = import.meta.env.CONTENTFUL_DELIVERY_TOKEN

async function apiCall(query: string, variables?: { uri: string; } | undefined) {
  const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${SPACE}/environments/redesign`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({ query, variables }),
  }
  return await fetch(fetchUrl, options)
}

async function getAllPages() {
  const query = `
    {
      pageTemplateCollection {
        items {
          sys {
            id
          }
          pageTitle
          pageUri
        }
      }
    }`;
  const response = await apiCall(query);
  const json = await response.json()
  return await json.data.pageTemplateCollection.items;
}

async function getSinglePage(uri: string) {
  const variables = {
    uri: uri
  };

  const response = await apiCall(pageTemplateQuery, variables);
  const json = await response.json();

  return await json.data.pageTemplateCollection.items[0]
}

/* const pages = defineCollection({
  loader: async () => {
    const response = await apiCall(pageTemplateQuery, variables);
    const json = await response.json();
    // Must return an array of entries with an id property, or an object with IDs as keys and entries as values
    return data.map((country) => ({
      id: country.cca3,
      ...country,
    }));
  },
  // optionally define a schema using Zod
  schema: z.object({
    id: z.string(),
    name: z.string(),
    capital: z.array(z.string()),
    population: z.number(),
    // ...
  }),
});
*/

export const client = { getAllPages, getSinglePage }