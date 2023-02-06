import { useState, useEffect } from 'react';
// import { useParams } from "react-router-dom"
import Notiflix from 'notiflix'
import { PageSection } from 'components/Utils/Styles/basicStyle';
import { Title } from 'components/Utils/Styles/basicStyle';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { NoticesCategoriesNav } from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import { fetchAllNotices } from 'components/Utils/axios/fetchNotices';
import { NoticesCategoriesList } from 'components/NoticesCategoriesList/NoticesCategoriesList';

export const NoticesPage = () => {
    const [filter, setFilter] = useState('');
    const [notices, setNotices] = useState([]);
    // const { categoryName } = useParams();

    useEffect(() => {
    onFirstRender()  
    }, [])

    const onFirstRender = async () => {
        try {
            const results = await fetchAllNotices();
            if (results.length === 0) {
                Notiflix.Notify.info(`Please choose category.`)
                return
            }
            setNotices(results);
        } catch (e) {
            Notiflix.Notify.failure(e.message)
        }
    }
    

    const onFilterChange = e => {
        setFilter(e.currentTarget.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
    };

    return (
        <PageSection>
            <Title>Find your favorite pet</Title>
            <SearchBar
                styles={{ marginBottom: 0 }}
                handleSubmit={handleSubmit}
                onFilterChange={onFilterChange}
                filter={filter}
            />
            <NoticesCategoriesNav />
           <NoticesCategoriesList notices={notices} />
        </PageSection>
    );
};
