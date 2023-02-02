import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import { RegisterPage } from 'pages/Register/RegisterPage';
import { NewsPage } from 'pages/News/NewsPage';
import { FriendsPage } from 'pages/Friends/FriendsPage';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route path="register" element={<RegisterPage />} />
                    <Route path="news" element={<NewsPage />} />
                    <Route path="friends" element={<FriendsPage />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
