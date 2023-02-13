import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { authCurrentUser } from 'redux/Auth/AuthOperations';
import { isLoading } from 'redux/Auth/AuthSelectors';

import { NoticesCategoriesList } from 'components/Notices/NoticesCategoriesList/NoticesCategoriesList';

import PublicRoute from './components/Routes/PublicRoute';
import PrivateRoute from './components/Routes/PrivateRoute';
// import * as authOpetations from 'redux/auth/authOperations'

import SharedLayout from './components/SharedLayout/SharedLayout';
const HomePage = lazy(() => import('pages/Home/HomePage'));
const RegisterPage = lazy(() => import('pages/Register/RegisterPage'));
const LoginPage = lazy(() => import('pages/Login/LoginPage'));
const FriendsPage = lazy(() => import('pages/Friends/FriendsPage'));
const NewsPage = lazy(() => import('pages/News/NewsPage'));
const NoticesPage = lazy(() => import('pages/Notices/NoticesPage'));
const UserPage = lazy(() => import('./pages/User/UserPage'));

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(authCurrentUser());
    }, [dispatch]);
    const isFetchingCurrentUser = useSelector(isLoading);

    return (
        !isFetchingCurrentUser && (
            <>
                <Suspense>
                    <Routes>
                        <Route path="/" element={<SharedLayout />}>
                            <Route path="/" element={<HomePage />} />

                            <Route element={<PublicRoute />}>
                                <Route path="/login" element={<LoginPage />} />
                                <Route
                                    path="/register"
                                    element={<RegisterPage />}
                                />
                            </Route>

                            <Route path="/news" element={<NewsPage />} />
                            <Route path="/friends" element={<FriendsPage />} />
                            <Route path="/notices" element={<NoticesPage />}>
                                <Route
                                    path=":category"
                                    element={<NoticesCategoriesList />}
                                />
                            </Route>

                            <Route element={<PrivateRoute />}>
                                <Route path="/user" element={<UserPage />} />
                            </Route>
                        </Route>

                        {/* <Route path="*" element={<Navigate to="/" />} /> */}
                    </Routes>
                </Suspense>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    theme="colored"
                />
            </>
        )
    );
};

export default App;
