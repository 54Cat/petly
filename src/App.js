import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { useEffect } from 'react';
import SharedLayout from './components/SharedLayout/SharedLayout';
import { RegisterPage } from 'pages/Register/RegisterPage';
import { NewsPage } from 'pages/News/NewsPage';
import UserPage from 'pages/User/UserPage';
import { FriendsPage } from 'pages/Friends/FriendsPage';
import { userCurrent } from './auth/UserAuth/AuthUser';
import { LoginPage } from 'pages/Login/LoginPage';
import { NoticesPage } from 'pages/Notices/NoticesPage';
import { NoticesCategoriesList } from 'components/NoticesCategoriesList/NoticesCategoriesList';

const App = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(userCurrent());
    }, [dispatch]);



    return (
        <>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route path="register" element={<RegisterPage />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="news" element={<NewsPage />} />
                    <Route path="user" element={<UserPage /> } />
                    <Route path="friends" element={<FriendsPage />} />
                    <Route path="notices" element={<NoticesPage />}>
                        <Route
                            path=":categoryName"
                            element={<NoticesCategoriesList />}
                        />
                    </Route>
                </Route>
            </Routes>
        </>
    );
};

export default App;
