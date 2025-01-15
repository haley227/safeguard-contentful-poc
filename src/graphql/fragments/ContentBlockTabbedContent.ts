export const contentBlockTabbedContentFragment = `
    fragment contentBlockTabbedContent on ContentBlockTabbedContent {
      eyebrow
      headline
      tabbedContentSubheading: subheading
      cta {
        ...cta
      }
      bgColor
      tabs: tabsCollection(limit: 10) {
        items {
          __typename
          ...on ElementServiceTab {
            tabName
            headline
            cardSubheading: subheading
            ctAsCollection(limit: 4) {
              items {
                ...cta
              }
            }
            image {
              ...image
            }
            imageAlt
          }
        }
      }
      blockConfig {
        ...contentBlockConfig
      }
    }
`;