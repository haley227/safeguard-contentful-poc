export const contentBlockCardsStatFragment = `
    fragment contentBlockCardsStat on ContentBlockCardsStat {
        sys {
            id
        }
        id
        headline
        cards: cardsCollection(limit: 4) {
            items {
              ... on ElementCardStats {
                stat
                heading
                subheading
              }
            }
          }
    }
`;