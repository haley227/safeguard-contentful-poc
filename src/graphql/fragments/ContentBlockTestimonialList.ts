export const contentBlockTestimonialList = `
    fragment contentBlockTestimonialList on ContentBlockTestimonialList {
        headline
        testimonials: testimonialCardsListCollection(limit: 3) {
            items {
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