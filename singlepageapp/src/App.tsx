import { Route, Routes, Navigate } from 'react-router-dom';

import { publicRoutes, privateRoutes } from "./routes";
import NotFoundPage from './pages/NotFound/NotFoundPage';

function App() {
  return (
    <Routes>
        
      {privateRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.element/>}/>

      ))}
        
      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.element/>}/>

      ))}

      {/* Catch-all route for 404 - Not Found */}
      <Route path="*" element={<Navigate to="/notfound" />} />

      {/* Not Found Page */}
      <Route path="/notfound" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
