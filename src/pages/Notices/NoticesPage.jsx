import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom"
import Notiflix from 'notiflix'
import { PageSection } from 'components/Utils/Styles/basicStyle';
import { Title } from 'components/Utils/Styles/basicStyle';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { NoticesCategoriesNav } from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import { fetchNoticesByCategory } from 'components/Utils/axios/fetchNotices';
import { NoticesCategoriesList } from 'components/NoticesCategoriesList/NoticesCategoriesList';



const NoticesPage = () => {
    const [filter, setFilter] = useState('');
    const [notices, setNotices] = useState([]);
    const { categoryName } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        switch (categoryName) {
            case "lostFound":
                fetchNotices('lost')
                break;

            case "inGoodHands":
                fetchNotices("in_good_hands")
                break;

            case "sell":
                fetchNotices("sell")
                break;
        
            case "favoriteAds":
                break;
        
            case "myAds":
                break;

            default:
                navigate('/notices/lostFound')
} 
    }, [categoryName, navigate])

    const fetchNotices = async (category) => {
        try {
            const results = await fetchNoticesByCategory(category);
            if (results.length === 0) {
                Notiflix.Notify.info(`Please choose category.`);
                return;
            }
            setNotices(results);
        } catch (e) {
            Notiflix.Notify.failure(e.message);
        }
    };

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

export default NoticesPage;
