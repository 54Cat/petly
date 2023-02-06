import 'react-toastify/dist/ReactToastify.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { useDispatch} from 'react-redux';
import { useEffect } from 'react';

// ------------------------------------------
// это не роуты, нужно перенести
import { userCurrent } from './auth/UserAuth/AuthUser';
import { NoticesCategoriesList } from 'components/NoticesCategoriesList/NoticesCategoriesList';
// ------------------------------------------

import SharedLayout from './components/SharedLayout/SharedLayout';
const HomePage = lazy(() => import('pages/Home/HomePage'));
const RegisterPage = lazy(() => import('pages/Register/RegisterPage'));
const LoginPage = lazy(() => import('pages/Login/LoginPage'));
const FriendsPage = lazy(() => import('pages/Friends/FriendsPage'));
const NewsPage = lazy(() => import('pages/News/NewsPage'));
const NoticesPage = lazy(() => import('pages/Notices/NoticesPage'));
const UserPage = lazy(() => import('pages/User/UserPage'));

const App = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(userCurrent());
    }, [dispatch]);

    return (
        <>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="register" element={<RegisterPage />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="news" element={<NewsPage />} />
                    <Route path="user" element={<UserPage /> } />
                    <Route path="friends" element={<FriendsPage />} />
                    <Route path="user" element={<UserPage />} />
                    <Route path="notices" element={<NoticesPage />}>
                        <Route
                            path=":categoryName"
                            element={<NoticesCategoriesList />}
                        />
                    </Route>
                </Route>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    );
};

export default App;
