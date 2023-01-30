import { Route, Routes } from 'react-router-dom';
import  SharedLayout  from './components/SharedLayout/SharedLayout';


 const App = () => {

  return (
    <>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
          {/* всі компоненти вставляемо сюда */}
          </Route>
      </Routes>
    </>
  );
};

export default App;