import 'react-toastify/dist/ReactToastify.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

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
    return (
        <>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route path="/" element={<HomePage />} />

                    <Route element={<PublicRoute />}>
                        <Route path="register" element={<RegisterPage />} />
                        <Route path="login" element={<LoginPage />} />
                        <Route path="news" element={<NewsPage />} />
                        <Route path="friends" element={<FriendsPage />} />
                        <Route path="notices" element={<NoticesPage />}>
                            <Route
                                path=":category"
                                element={<NoticesCategoriesList />}
                            />
                        </Route>
                    </Route>

                    <Route element={<PrivateRoute />}>
                        <Route path="user" element={<UserPage />} />
                    </Route>
                </Route>

                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    );
};

export default App;
