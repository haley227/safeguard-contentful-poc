export const contentBlockInteractiveDemoFragment = `
    fragment contentBlockInteractiveDemo on ContentBlockInteractiveDemo {
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
