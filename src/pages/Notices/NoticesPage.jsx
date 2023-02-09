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
    const allNoticesByCategory = useSelector(getNotices).items;
    const [filter, setFilter] = useState('');
    const [notices, setNotices] = useState([]);
    const { category } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        switch (category) {
            case "lost-found":
                dispatch(fetchNotices('lost'))
                break;

            case "for-free":
              dispatch(fetchNotices("in_good_hands"))  
                break;

            case "sell":
              dispatch( fetchNotices("sell")) 
                break;
        
            case "favorite":
                break;
        
            case "own":
                break;

            default:
                navigate('/notices/lost-found')
} 
    }, [category, dispatch, navigate])


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
           
            <NoticesCategoriesList notices={notices} />
        </PageSection>
    );
};

export default NoticesPage;
