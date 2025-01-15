export const contentBlockContactUsAndTestimonials = `
    fragment contentBlockContactUsAndTestimonials on ContentBlockContactUsAndTestimonials {
      id
      form {
        id
        title
        content {
          json
        }
        form {
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