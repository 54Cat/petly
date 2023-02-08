import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from "react-router-dom"
import { getNotices } from 'redux/selectors';
import { fetchNotices } from 'redux/Notices/noticesOperations';
import { PageSection } from 'components/Utils/Styles/basicStyle';
import { Title } from 'components/Utils/Styles/basicStyle';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { NoticesCategoriesNav } from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import { NoticesCategoriesList } from 'components/NoticesCategoriesList/NoticesCategoriesList';

const NoticesPage = () => {
    const dispatch = useDispatch();
    const notices = useSelector(getNotices);
    const [filter, setFilter] = useState('');
    // const [notices, setNotices] = useState([]);
    const { categoryName } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        switch (categoryName) {
            case "lostFound":
                dispatch(fetchNotices('lost'))
                break;

            case "inGoodHands":
              dispatch(fetchNotices("in_good_hands"))  
                break;

            case "sell":
              dispatch( fetchNotices("sell")) 
                break;
        
            case "favoriteAds":
                break;
        
            case "myAds":
                break;

            default:
                navigate('/notices/lostFound')
} 
    }, [categoryName, dispatch, navigate])


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
            <NoticesCategoriesList notices={notices.items} />
        </PageSection>
    );
};

export default NoticesPage;
