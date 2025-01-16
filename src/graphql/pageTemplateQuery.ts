import { headerImageBlockFragment } from './fragments/ContentBlockHeaderImage';
import { contentBlockConfig, ctaFragment } from './fragments/globalFragments';
import { imageFragment } from './fragments/globalFragments';
import { contentBlockCardsStatFragment } from './fragments/ContentBlockCardsStat';
import { contentBlockHorizontalCardsListFragment } from './fragments/ContentBlockHorizontalCardsList';
import { contentBlockInteractiveDemoFragment } from './fragments/ContentBlockInteractiveDemo';
import { contentBlockCardsGridFragment } from './fragments/ContentBlockCardsGrid';
import { contentBlockTabbedContentFragment } from './fragments/ContentBlockTabbedContent';
import { contentBlockTestimonialList } from './fragments/ContentBlockTestimonialList';

export const pageTemplateQuery = `
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