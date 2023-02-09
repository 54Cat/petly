import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from "react-router-dom"
import { getNotices, getAuth } from 'redux/selectors';
import { fetchNotices } from 'redux/Notices/noticesOperations';
import { fetchFavoriteNotices } from 'components/Utils/axios/fetchNotices';
import { PageSection } from 'components/Utils/Styles/basicStyle';
import { Title } from 'components/Utils/Styles/basicStyle';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { NoticesCategoriesNav } from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import { NoticesCategoriesList } from 'components/NoticesCategoriesList/NoticesCategoriesList';

const NoticesPage = () => {
    const auth = useSelector(getAuth);
    const dispatch = useDispatch();
    const allNoticesByCategory = useSelector(getNotices).items;
    const [filter, setFilter] = useState('');
    const [notices, setNotices] = useState([]);
    const [favorite, setFavorite] = useState([])
    const { category } = useParams();
    const navigate = useNavigate();

    const fetchFavorite = async () => {
        const results = await fetchFavoriteNotices();
        setFavorite(results)
    }

    useEffect(() => {
        switch (category) {
            case "lost-found":
                dispatch(fetchNotices('lost-found'))
                if (auth.isLoggedIn) {
                    fetchFavorite()
                };
                break;

            case "for-free":
                dispatch(fetchNotices("for-free"))  
                if (auth.isLoggedIn) {
                    fetchFavorite()
                };
                break;

            case "sell":
                dispatch(fetchNotices("sell")) 
                if (auth.isLoggedIn) {
                    fetchFavorite()
                };
                break;
        
            case "favorite":
                if (!auth.isLoggedIn) {
                    navigate('/notices/lost-found')
                    return
                };
                dispatch( fetchNotices('myFavorite'))
                break;
        
            case "own":
                if (!auth.isLoggedIn) {
                    navigate('/notices/lost-found')
                    return
                };
                dispatch(fetchNotices(''))
                fetchFavorite()
                break;

            default:
                navigate('/notices/lost-found')
} 
    }, [auth.isLoggedIn, category, dispatch, navigate])

    useEffect(() => {
    setNotices(allNoticesByCategory);
    }, [allNoticesByCategory])
    


    const onFilterChange = e => {
        setFilter(e.currentTarget.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        const filtredNotices = allNoticesByCategory.filter(notice => {
            let areSimilarWords = false;

            for (const word of filter.split(' ')) {
                if (notice.title.toLowerCase().includes(word.toLowerCase())) {
                    areSimilarWords = true;
                    break
                }
            }
            
            return areSimilarWords;
        })
        setNotices(filtredNotices);
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
            <NoticesCategoriesList notices={notices} favorite={favorite} />
        </PageSection>
    );
};

export default NoticesPage;
