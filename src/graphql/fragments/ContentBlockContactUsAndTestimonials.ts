export const contentBlockContactUsAndTestimonials = `
    fragment contentBlockContactUsAndTestimonials on ContentBlockContactUsAndTestimonials {
      sys {
        id
      }
      id
      form {
        id
        title
        content {
          json
        }
        form {
          sys {
            id
          }
          formLanguage
          dataSource
          tfValue
          conversionType
          submitButtonText
          redirectUrlUponSubmission
          formType
        }
      }
      testimonials: testimonialsCollection(limit: 5) {
        items {
          sys {
            id
          }
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
          cta {
            ...cta
          }
        }
      }
    }
`;