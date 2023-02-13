import { useEffect, useState } from 'react'
import Notiflix from 'notiflix'
import { fetchNews } from 'redux/News/fetchNews'
import { PageSection } from 'components/Utils/Styles/basicStyle'
import { Title } from 'components/Utils/Styles/basicStyle'
import { SearchBar } from 'components/SearchBar/SearchBar'
import { CardsList } from 'components/CardsList/CardsList'
import NewsCard from 'components/NewsCard/NewsCard'
import getSortedNews from 'components/Utils/helpers/getSortedNews'
import { CardsLoader } from 'components/Utils/Loader/Loader';

const NewsPage = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [filter, setFilter] = useState('')
    const [news, setNews] = useState([])
    const [sortedNews, setSortedNews] = useState([])
    
    const onFilterChange = e => {
    setFilter(e.currentTarget.value);
    };

    useEffect(() => {
    onFirstRender()  
    }, [])

    useEffect(() => {
        const newsByFilter = news.filter(oneNew => {
            let areSimilarWords = false;
            
            for (const word of filter.trim().split(' ')) {
                if (oneNew.title.toLowerCase().includes(word.toLowerCase())) {
                    areSimilarWords = true;
                    break
                }
            }
            
            return areSimilarWords;
        })
        const sortedNews = getSortedNews(newsByFilter)
        setSortedNews(sortedNews);
   
    }, [filter, news])
    

    const onFirstRender = async () => {
        try {
            setIsLoading(true)
            const results = await fetchNews();
            if (results.length === 0) {
                Notiflix.Notify.info(`We don't have any news!`)
                return
            }
            setNews(results);
            setSortedNews(getSortedNews(results));
        } catch (e) {
            Notiflix.Notify.failure(e.message)
        } finally {
            setIsLoading(false)
        }
    }

    const onCleanFilter = () => {
        if (filter.trim() === '') {
            return
        }
        setFilter('')
    };

    return <PageSection>
        <Title>News</Title>
        <SearchBar onCleanFilter={onCleanFilter} onFilterChange={onFilterChange} filter={filter} />
        {isLoading ? <CardsLoader /> : <CardsList cardsArray={sortedNews} CardsItem={NewsCard} />}      
    </PageSection>
}

export default NewsPage;