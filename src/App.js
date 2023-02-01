import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import UserPage from 'pages/User/UserPage';


 const App = () => {

  return (
    <>
        <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path='/' element={<UserPage />} />
          {/* всі компоненти вставляемо сюда */}
          </Route>
      </Routes>
    </>
  );
};

export default App;