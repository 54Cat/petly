import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import { Header } from 'components/Header';
import { Logo } from 'components/Logo';
import { Navigation } from 'components/Navigation';
import { Auth } from 'components/Auth';
import { MenuAuth } from 'components/MenuAuth';
import { MenuHeader } from 'components/MenuHeader';
import { MenuPages } from 'components/MenuPages';
import { RegisterPage } from 'pages/Register/RegisterPage';
import { NewsPage } from 'pages/News/NewsPage';

const App = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route path="register" element={<Header />} />
                    <Route path="register" element={<Logo />} />
                    <Route path="register" element={<Navigation />} />
                    <Route path="register" element={<Auth />} />
                    <Route path="register" element={<MenuAuth />} />
                    <Route path="register" element={<MenuHeader />} />
                    <Route path="register" element={<MenuPages />} />
                    <Route path="register" element={<RegisterPage />} />
                    <Route path="news" element={<NewsPage />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;