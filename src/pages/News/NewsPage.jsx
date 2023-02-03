import { useState } from 'react'
import { fetchNews } from 'components/Utils/axios/fetchNews'
import { PageSection } from 'components/Utils/Styles/basicStyle'
import { Title } from 'components/Utils/Styles/basicStyle'
import { SearchBar } from 'components/SearchBar/SearchBar'
import { CardsList } from 'components/CardsList/CardsList'
import NewsCard from 'components/NewsCard/NewsCard'


export const NewsPage = () => {
    const [filter, setFilter] = useState('')
    const [news, setNews] = useState([])
    const onFilterChange = e => {
    setFilter(e.currentTarget.value);
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const results = await fetchNews(filter);
            setNews(results);
        } catch (e) {
            console.log(e.message)
        }
        
    };
    

    return <PageSection>
        <Title>News</Title>
        <SearchBar handleSubmit={handleSubmit} onFilterChange={onFilterChange} filter={filter} />
        <CardsList cardsArray={news} CardsItem={NewsCard} />
    </PageSection>
}