import { useState} from 'react'
import { PageSection } from 'components/Utils/Styles/basicStyle'
import { Title } from 'components/Utils/Styles/basicStyle'
import { SearchBar } from 'components/SearchBar/SearchBar'
import { CardsList } from 'components/CardsList/CardsList'
import NewsCard from 'components/NewsCard/NewsCard'
import lastNews from 'data/news.json'
import getSortedNews from 'components/Utils/helpers/getSortedNews'

export const NewsPage = () => {
    const sortedNews = getSortedNews(lastNews)
    const [filter, setFilter] = useState('')
    const [news, setNews] = useState(sortedNews)

    
    

    const onFilterChange = e => {
    setFilter(e.currentTarget.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        setNews(sortedNews);
    };
    

    return <PageSection>
        <Title>News</Title>
        <SearchBar handleSubmit={handleSubmit} onFilterChange={onFilterChange} filter={filter} />
        <CardsList cardsArray={news} CardsItem={NewsCard} />
    </PageSection>
}