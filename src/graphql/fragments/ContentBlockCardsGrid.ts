export const contentBlockCardsGridFragment = `
    fragment contentBlockCardsGrid on ContentBlockCardsGrid {
        id
        headline
        backgroundColorMode
        cardsPerRow
        cards: cardsCollection(limit: 6) {
            items {
              ... on ElementCardWithImage {
                headline
                subheading
                image {
                    ...image
                }
                imageAlt
                clickDestinationUrl
              }
              ... on ElementCardWithText {
                headline
                subheading
                cta {
                  ...cta
                }
              }
            }
          }
    }
`;
