const getSortedNews = news => {
    const sortedNews = [...news].sort(
        (a, b) => Date.parse(b.date) - Date.parse(a.date)
    );
    return sortedNews;
};

export default getSortedNews;
