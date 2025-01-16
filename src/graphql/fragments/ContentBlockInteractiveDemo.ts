export const contentBlockInteractiveDemoFragment = `
    fragment contentBlockInteractiveDemo on ContentBlockInteractiveDemo {
        sys {
            id
        }
        title
        id
        navatticUrl
        primaryCtaButton {
            ...cta
        }
        secondaryCtaButton {
            ...cta
        }
    }
`;
