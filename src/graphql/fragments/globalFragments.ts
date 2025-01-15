export const ctaFragment = `
    fragment cta on Linkcta {
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
        url
        description
    }
`;


export const contentBlockConfig = `
    fragment contentBlockConfig on ContentBlockConfig {
        applySettingsOn
        backgroundColor
        paddingTop
        paddingBottom
        mobilePaddingTop
        mobilePaddingBottom
    }
`;
