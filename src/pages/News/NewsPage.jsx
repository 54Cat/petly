import { useEffect, useState } from 'react'
import Notiflix from 'notiflix'
import { fetchNews } from 'redux/News/fetchNews'
import { PageSection } from 'components/Utils/Styles/basicStyle'
import { Title } from 'components/Utils/Styles/basicStyle'
import { SearchBar } from 'components/SearchBar/SearchBar'
import { CardsList } from 'components/CardsList/CardsList'
import NewsCard from 'components/NewsCard/NewsCard'
import getSortedNews from 'components/Utils/helpers/getSortedNews'
// import { Loader } from 'components/Utils/Loader/Loader';

const NewsPage = () => {
    const [filter, setFilter] = useState('')
    const [news, setNews] = useState([])
    const [sortedNews, setSortedNews] = useState([])
    // const isLoaders = useSelector(isLoading);
    
    const onFilterChange = e => {
    setFilter(e.currentTarget.value);
    };

    useEffect(() => {
    onFirstRender()  
    }, [])
    

    const onFirstRender = async () => {
        try {
            const results = await fetchNews();
            if (results.length === 0) {
                Notiflix.Notify.info(`We don't have any news!`)
                return
            }
            setNews(results);
            setSortedNews(getSortedNews(results));
        } catch (e) {
            Notiflix.Notify.failure(e.message)
        }
    }

    const handleSubmit = async e => {
        e.preventDefault();
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
        if (newsByFilter.length === 0) {
            Notiflix.Notify.failure('These news not found!')
        }
        const sortedNews = getSortedNews(newsByFilter)
        setSortedNews(sortedNews);
        
    };

    return <PageSection>
        <Title>News</Title>
        <SearchBar handleSubmit={handleSubmit} onFilterChange={onFilterChange} filter={filter} />

        <CardsList cardsArray={sortedNews} CardsItem={NewsCard} />
        
        {/* {isLoaders ? <Loader /> : <CardsList cardsArray={news} CardsItem={NewsCard} />} */}
        
    </PageSection>
}

export default NewsPage;