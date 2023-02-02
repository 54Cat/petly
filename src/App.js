import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import { RegisterPage } from 'pages/Register/RegisterPage';
import { NewsPage } from 'pages/News/NewsPage';
import UserPage from 'pages/User/UserPage';

const App = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route path="register" element={<RegisterPage />} />
                    <Route path="news" element={<NewsPage />} />
                    <Route path="/" element={<UserPage />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;