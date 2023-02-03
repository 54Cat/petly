const onListStyles = windowSize => {
    let gap = 0;
    if (windowSize[0] < 768) {
        gap = 12;
    }
    if (windowSize[0] >= 768) {
        gap = 32;
    }
    return {
        rowGap: gap,
    };
};

const onTitleStyles = windowSize => {
    let margin = 40;
    if (windowSize[0] >= 768) {
        margin = 45;
    }
    if (windowSize[0] >= 1280) {
        margin = 60;
    }
    return {
        marginBottom: margin,
    };
};

export { onListStyles, onTitleStyles };
