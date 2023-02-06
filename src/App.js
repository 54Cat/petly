import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import { HomePage } from 'pages/Home/HomePage';
import { RegisterPage } from 'pages/Register/RegisterPage';
import { NewsPage } from 'pages/News/NewsPage';
import { FriendsPage } from 'pages/Friends/FriendsPage';
import { UserPage } from 'pages/User/UserPage';
import { LoginPage } from 'pages/Login/LoginPage';
import { NoticesPage } from 'pages/Notices/NoticesPage';
import { NoticesCategoriesList } from 'components/NoticesCategoriesList/NoticesCategoriesList';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route path="/" element={<HomePage />} />
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
