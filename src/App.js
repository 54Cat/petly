import { RegisterPage } from 'pages/Register/RegisterPage';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import { LoginPage } from 'pages/Login/LoginPage';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route path="register" element={<RegisterPage />} />
                    <Route path="login" element={<LoginPage />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
