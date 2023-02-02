import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
// import { Header } from './components/Header/Header';
// import { Logo } from './components/Header/Logo';
// import { Navigation } from './components/Header/Navigation';
// import { Auth } from './components/Header/Auth';
// import { MenuAuth } from './components/Header/MenuBurger/MenuAuth';
// import { MenuHeader } from './components/Header/MenuBurger/MenuHeader';
// import { MenuPages } from './components/Header/MenuBurger/MenuPages';
import { RegisterPage } from 'pages/Register/RegisterPage';
import { NewsPage } from 'pages/News/NewsPage';
import { FriendsPage } from 'pages/Friends/FriendsPage';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                {/* <Route path="header" element={<Header />} />
                <Route path="header" element={<Logo />} />
                <Route path="header" element={<Navigation />} />
                <Route path="header" element={<Auth />} />
                <Route path="header/menuburger/" element={<MenuAuth />} />
                <Route path="header/menuburger/" element={<MenuHeader />} />
                <Route path="header/menuburger/" element={<MenuPages />} /> */}
                <Route path="register" element={<RegisterPage />} />
                <Route path="news" element={<NewsPage />} />
                <Route path="friends" element={<FriendsPage />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
