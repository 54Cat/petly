import { useState} from 'react'
import { NewsPageSection, NewsList } from './NewsPageStyled'
import { Title } from 'components/Utils/Styles/basicStyle'
import { SearchBar } from 'components/SearchBar/SearchBar'
import lastNews from 'data/news.json'

export const NewsPage = () => {
    const [filter, setFilter] = useState('')
    const [news, setNews] = useState(lastNews)
    

    const onFilterChange = e => {
    setFilter(e.currentTarget.value);
    };

    const handleSubmit = e => {
    e.preventDefault();
        console.log(filter)
    };
    

    return <NewsPageSection>
        <Title>News</Title>
        <SearchBar handleSubmit={handleSubmit} onFilterChange={onFilterChange} filter={filter} />
        <NewsList></NewsList>
    </NewsPageSection>
}