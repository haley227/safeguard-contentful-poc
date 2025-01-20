import { pageTemplateQuery } from '../graphql/pageTemplateQuery';
import * as contentful from "contentful";
const SPACE = import.meta.env.CONTENTFUL_SPACE_ID
const TOKEN = import.meta.env.CONTENTFUL_DELIVERY_TOKEN

export interface PageTemplate {
  sys: {
    id: string;
  };
  pageTitle: string;
  pageUri: string;
}

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

// Client init
export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  environment: 'redesign',
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});

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

export const client = { getAllPages, getSinglePage }