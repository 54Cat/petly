import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from "react-router-dom"
import { getNotices, getAuth } from 'redux/selectors';
import { fetchNotices } from 'redux/Notices/noticesOperations';
import { fetchFavoriteNotices, fetchDeleteNotice, updateFavoriteNotice} from 'redux/Notices/fetchNotices';
import { PageSection } from 'components/Utils/Styles/basicStyle';
import { Title } from 'components/Utils/Styles/basicStyle';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { NoticesCategoriesNav } from 'components/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
import { NoticesCategoriesList } from 'components/Notices/NoticesCategoriesList/NoticesCategoriesList';


const NoticesPage = () => {
    const { isLoggedIn } = useSelector(getAuth);

    const dispatch = useDispatch();
    const allNoticesByCategory = useSelector(getNotices).items;
    const [filter, setFilter] = useState('');
    const [notices, setNotices] = useState([]);
    const [favorite, setFavorite] = useState([])
    const { category } = useParams();
    const navigate = useNavigate();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchFavorite = async () => {
        if (!isLoggedIn) {
            setFavorite([]);
            return}
        const results = await fetchFavoriteNotices();
        const resultId = results.map(result => result._id)
        setFavorite(resultId)
    }

    const updateFavorite = async (id) => {
        const results = await updateFavoriteNotice(id);
        setFavorite(results.favorites)
    }

    const deleteMyNotices = async (id) => {
        const results = await fetchDeleteNotice(id);
        const newNotices = notices.filter(notice =>
            notice._id !== results.data._id);
        setNotices(newNotices)
    }

    useEffect(() => {
        switch (category) {
            case "lost-found":
                dispatch(fetchNotices('lost-found'))
                if (isLoggedIn) {
                    fetchFavorite()
                };
                break;

            case "for-free":
                dispatch(fetchNotices("for-free"))  
                if (isLoggedIn) {
                    fetchFavorite()
                };
                break;

            case "sell":
                dispatch(fetchNotices("sell")) 
                if (isLoggedIn) {
                    fetchFavorite()
                };
                break;
        
            case "favorite":
                if (!isLoggedIn) {
                    navigate('/notices/lost-found')
                    return
                };
                dispatch(fetchNotices('myFavorite'))
                fetchFavorite()
                break;
        
            case "own":
                if (!isLoggedIn) {
                    navigate('/notices/lost-found')
                    return
                };
                dispatch(fetchNotices(''))
                fetchFavorite()
                break;

            default:
                navigate('/notices/sell')
} 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoggedIn, category, dispatch, navigate])

    useEffect(() => {
    setNotices(allNoticesByCategory);
    }, [allNoticesByCategory])
    
    useEffect(() => {
      const filtredNotices = allNoticesByCategory.filter(notice => {
            let areSimilarWords = false;

            for (const word of filter.trim().split(' ')) {
                if (notice.title.toLowerCase().includes(word.toLowerCase())) {
                    areSimilarWords = true;
                    break
                }
            }
            
            return areSimilarWords;
        })
        setNotices(filtredNotices);
    
      
    }, [allNoticesByCategory, filter])
    


    const onFilterChange = e => {
        setFilter(e.currentTarget.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (filter.trim() === '') {
            return
        }
        setFilter('')
        
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

            <NoticesCategoriesList notices={notices} favorite={favorite} updateFavorite={updateFavorite} deleteMyNotices={deleteMyNotices} />

        </PageSection>
    );
};

export default NoticesPage;
