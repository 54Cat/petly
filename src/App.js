import { Routes, Route } from 'react-router-dom';
import { RegisterPage } from './pages/Register/RegisterPage';
const App = () => {
    <Routes>
        <Route path="/" element={'HomePage'} />
        <Route path="register" element={<RegisterPage />} />
    </Routes>;
    return <RegisterPage />;
};

export default App;
