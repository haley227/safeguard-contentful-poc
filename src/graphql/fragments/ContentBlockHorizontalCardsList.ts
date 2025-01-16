export const contentBlockHorizontalCardsListFragment = `
    fragment contentBlockHorizontalCardsList on ContentBlockHorizontalCardsList {
        sys {
            id
        }
        id
        eyebrow
        headline
        HCLSubheading: subheading
        cta {
            ...cta
        }
        cardsView
        cardsCollection {
            items {
                id
                icon {
                    url
                    description
                }
                heading
                subheading
                cta {
                    ...cta
                }
            }
        }
    }
`;
