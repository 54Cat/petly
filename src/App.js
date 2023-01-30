import { RegisterPage } from 'pages/Register/RegisterPage';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route path="register" element={<RegisterPage />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
