import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from '@/context/Auth.jsx';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Home from '@/pages/Home';
import Dashboard from '@/pages/Dashboard';
import ProductDetail from '@/pages/ProductDetail'
import NotFound from '@/pages/NotFound';

function MainRoutes() {
  const { isAuth } = useContext(AuthContext);

  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path="/item/:id" element={<ProductDetail/>}/>
      <Route path="*" element={<NotFound/>}/>
      <Route
        path='/dashboard'
        element={isAuth ? <Dashboard /> : <Navigate to='/' replace />}
  />
    </Routes>
  );
}

export default MainRoutes;