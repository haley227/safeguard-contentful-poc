import { headerImageBlockFragment } from '../graphql/fragments/ContentBlockHeaderImage';
import { contentBlockConfig, ctaFragment } from '../graphql/fragments/globalFragments';
import { imageFragment } from '../graphql/fragments/globalFragments';
import { contentBlockCardsStatFragment } from '../graphql/fragments/ContentBlockCardsStat';
import { contentBlockHorizontalCardsListFragment } from '../graphql/fragments/ContentBlockHorizontalCardsList';
import { contentBlockInteractiveDemoFragment } from '../graphql/fragments/ContentBlockInteractiveDemo';
import { contentBlockCardsGridFragment } from '../graphql/fragments/ContentBlockCardsGrid';
import { contentBlockTabbedContentFragment } from '../graphql/fragments/ContentBlockTabbedContent';
import { contentBlockTestimonialList } from '../graphql/fragments/ContentBlockTestimonialList';
const SPACE = import.meta.env.CONTENTFUL_SPACE_ID
const TOKEN = import.meta.env.CONTENTFUL_DELIVERY_TOKEN

async function apiCall(query: string, variables?: { uri: string; } | undefined) {
  const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${SPACE}/environments/master`;
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
  const query = `
  ${ctaFragment}
  ${imageFragment}
  ${contentBlockConfig}
  ${headerImageBlockFragment}
  ${contentBlockCardsStatFragment}
  ${contentBlockHorizontalCardsListFragment}
  ${contentBlockInteractiveDemoFragment}
  ${contentBlockCardsGridFragment}
  ${contentBlockTabbedContentFragment}
  ${contentBlockTestimonialList}
    query ($uri: String!) {
      pageTemplateCollection(limit: 1, where: {pageUri: $uri}) {
        items {
          __typename
          sys {
            id
          }
          pageTitle
          pageUri
          contentCollection(limit: 20) {
            items {
              __typename
              ... on ContentBlockHeaderImage {
                ...headerImageBlock
              }
                ... on ContentBlockCardsStat {
                ...contentBlockCardsStat
              }
              ... on ContentBlockHorizontalCardsList {
                ...contentBlockHorizontalCardsList
              }
              ... on ContentBlockInteractiveDemo {
                ...contentBlockInteractiveDemo
              }
              ... on ContentBlockCardsGrid {
                ...contentBlockCardsGrid
              }
              ... on ContentBlockTabbedContent {
                ...contentBlockTabbedContent
              }
              ... on ContentBlockTestimonialList {
                ...contentBlockTestimonialList
              }
            }
          }
        }
      }
    }
    `;
  const variables = {
    uri: uri
  };

  const response = await apiCall(query, variables);
  const json = await response.json();

  return await json.data.pageTemplateCollection.items[0]
}


export const client = { getAllPages, getSinglePage }