import { Route, Routes } from 'react-router-dom';
import routes from './routes';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <>
      <Routes>
        {routes.map((route) => (
          <Route
            path={route.path}
            element={<route.element />}
            key={route.path}
          />
        ))}
      </Routes>
      <div className="Toastify">
        <ToastContainer autoClose={2500} />
      </div>
    </>
  );
};

export default App;
