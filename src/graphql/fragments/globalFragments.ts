export const ctaFragment = `
    fragment cta on Linkcta {
        sys {
            id
        }
        label
        link
        openInANewTab
        showAsButton
        buttonIcon {
            ...image
        }
    }
`;


export const imageFragment = `
    fragment image on Asset {
        sys {
            id
        }
        url
        description
    }
`;


export const contentBlockConfig = `
    fragment contentBlockConfig on ContentBlockConfig {
        sys {
            id
        }
        applySettingsOn
        backgroundColor
        paddingTop
        paddingBottom
        mobilePaddingTop
        mobilePaddingBottom
    }
`;
