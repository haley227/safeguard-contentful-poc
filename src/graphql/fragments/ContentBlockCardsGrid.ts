export const contentBlockCardsGridFragment = `
  fragment contentBlockCardsGrid on ContentBlockCardsGrid {
    sys {
      id
    }
    id
    headline
    backgroundColorMode
    cardsPerRow
    cards: cardsCollection(limit: 6) {
        items {
          ... on ElementCardWithImage {
            sys {
              id
            }
            headline
            subheading
            image {
                ...image
            }
            imageAlt
            clickDestinationUrl
          }
          ... on ElementCardWithText {
            sys {
              id
            }
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
