import { Route, Routes } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { useEffect } from 'react';
import SharedLayout from './components/SharedLayout/SharedLayout';
import { RegisterPage } from 'pages/Register/RegisterPage';
import { NewsPage } from 'pages/News/NewsPage';
import UserPage from 'pages/User/UserPage';
import { FriendsPage } from 'pages/Friends/FriendsPage';
import { userCurrent } from './auth/UserAuth/AuthUser';

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
                    <Route path="news" element={<NewsPage />} />
                    <Route path="user" element={<UserPage /> } />
                    <Route path="friends" element={<FriendsPage />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
