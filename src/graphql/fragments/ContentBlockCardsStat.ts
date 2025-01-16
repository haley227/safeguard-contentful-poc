export const contentBlockCardsStatFragment = `
    fragment contentBlockCardsStat on ContentBlockCardsStat {
        sys {
            id
        }
        id
        headline
        cards: cardsCollection(limit: 4) {
            items {
              sys {
                id
              }
              ... on ElementCardStats {
                stat
                heading
                subheading
              }
            }
          }
    }
`;