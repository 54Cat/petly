import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import { RegisterPage } from 'pages/Register/RegisterPage';
import { NewsPage } from 'pages/News/NewsPage';
import { FriendsPage } from 'pages/Friends/FriendsPage';
import { LoginPage } from 'pages/Login/LoginPage';
import { NoticesPage } from 'pages/Notices/NoticesPage';
import { NoticesCategoriesList } from 'components/NoticesCategoriesList/NoticesCategoriesList';
import { UserPage } from 'pages/User/UserPage';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route path="register" element={<RegisterPage />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="news" element={<NewsPage />} />
                    <Route path="friends" element={<FriendsPage />} />
                    <Route path="user" element={<UserPage />} />
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
