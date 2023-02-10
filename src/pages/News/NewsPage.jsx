import { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
import Notiflix from 'notiflix'
import { fetchNews } from 'components/Utils/axios/fetchNews'
import { PageSection } from 'components/Utils/Styles/basicStyle'
import { Title } from 'components/Utils/Styles/basicStyle'
import { SearchBar } from 'components/SearchBar/SearchBar'
import { CardsList } from 'components/CardsList/CardsList'
import NewsCard from 'components/NewsCard/NewsCard'
import lastNews from 'data/news.json'
import getSortedNews from 'components/Utils/helpers/getSortedNews'
// import { Loader } from 'components/Utils/Loader/Loader';

const NewsPage = () => {
    const sortedNews = getSortedNews(lastNews)
    const [filter, setFilter] = useState('')
    const [news, setNews] = useState(sortedNews)
    // const isLoaders = useSelector(isLoading);
    
    const onFilterChange = e => {
    setFilter(e.currentTarget.value);
    };

    useEffect(() => {
    onFirstRender()  
    }, [])
    

    const onFirstRender = async () => {
        try {
            const results = await fetchNews('pets');
            if (results.length === 0) {
                Notiflix.Notify.info(`Please search news.`)
                return
            }
            setNews(results);
        } catch (e) {
            Notiflix.Notify.failure(e.message)
        }
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setNews(sortedNews);
        try {
            const results = await fetchNews(filter);
            if (results.length === 0) {
                Notiflix.Notify.failure(`No news found for the keyword "${filter}".`)
                return
            }
            Notiflix.Notify.success(`News found`)
            setNews(results);
        } catch (e) {
            Notiflix.Notify.failure(e.message)
        }
    };

    return <PageSection>
        <Title>News</Title>
        <SearchBar handleSubmit={handleSubmit} onFilterChange={onFilterChange} filter={filter} />

        <CardsList cardsArray={news} CardsItem={NewsCard} />
        
        {/* {isLoaders ? <Loader /> : <CardsList cardsArray={news} CardsItem={NewsCard} />} */}
        
    </PageSection>
}

export default NewsPage;