export const contentBlockTestimonialList = `
    fragment contentBlockTestimonialList on ContentBlockTestimonialList {
        sys {
            id
        }
        headline
        testimonials: testimonialCardsListCollection(limit: 3) {
            items {
                sys {
                    id
                }
              ... on ElementTestimonialCard {
                headline
                testimony {
                    json
                }
                image {
                    ...image
                }
                imageAlt
                personName
                personTitle
                companyLogo {
                    ...image
                }
              }
            }
          }
        backgroundColorMode
    }
`;