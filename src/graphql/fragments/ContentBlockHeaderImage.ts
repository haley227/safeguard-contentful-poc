export const headerImageBlockFragment = `
    fragment headerImageBlock on ContentBlockHeaderImage {
        sys {
            id
        }
        breadcrumb
        heading
        subheading {
            json
        }
        image {
            ...image
        }
        mobileImage{
            ...image
        }
        overlayImage{
            ...image
        }
        imageAlt
        primaryCtaButton {
            ...cta
        }
        secondaryCtaButton {
            ...cta
        }
        existingCustomersHeading
        existingCustomersLogosCollection(limit: 5) {
            items {
                ...image
            }
        }
    }
`;
