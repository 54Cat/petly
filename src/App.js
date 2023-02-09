import 'react-toastify/dist/ReactToastify.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
// import { useDispatch } from 'react-redux';
// import {fetchCurrentUser} from 'redux/Auth/AuthSlice';

import { NoticesCategoriesList } from 'components/NoticesCategoriesList/NoticesCategoriesList';

import PublicRoute from './components/Routes/PublicRoute';
import PrivateRoute from './components/Routes/PrivateRoute';

import SharedLayout from './components/SharedLayout/SharedLayout';
const HomePage = lazy(() => import('pages/Home/HomePage'));
const RegisterPage = lazy(() => import('pages/Register/RegisterPage'));
const LoginPage = lazy(() => import('pages/Login/LoginPage'));
const FriendsPage = lazy(() => import('pages/Friends/FriendsPage'));
const NewsPage = lazy(() => import('pages/News/NewsPage'));
const NoticesPage = lazy(() => import('pages/Notices/NoticesPage'));
const UserPage = lazy(() => import('./pages/User/UserPage'));

const App = () => {
    // const dispatch = useDispatch();

    // useEffect(() => {
        // dispatch(fetchCurrentUser())
    // }, [dispatch]);

    return (
        <>
            <Suspense>
                <Routes>
                    <Route path="/" element={<SharedLayout />}>
                        <Route path="/" element={<HomePage />} />

                        <Route path="register" element={<PublicRoute />}>
                            <Route index element={<RegisterPage />} />
                        </Route>
                        
                        <Route path="login" element={<PublicRoute />}>
                            <Route index element={<LoginPage />} />
                        </Route>
                        
                        <Route path="news" element={<NewsPage />} />
                        <Route path="friends" element={<FriendsPage />} />
                        <Route path="notices" element={<NoticesPage />}>
                            <Route
                                path=":category"
                                element={<NoticesCategoriesList />}
                            />
                        </Route>

                        <Route path="user" element={<PrivateRoute />}>
                            <Route index element={<UserPage />} />
                        </Route>
                        
                    </Route>

                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Suspense>
        </>
    );
};

export default App;
