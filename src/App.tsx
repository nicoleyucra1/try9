import {Routes, Route, Navigate} from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import LoginPage from './page/LoginPage';
import RegisterPage from './page/RegisterPage';
import LocationsPage from './page/LocationsPage'
import LocationsDetailsPage from './page/LocationsDetailsPage';

export default function App(){
  return (
    <Routes>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route element={<ProtectedRoute/>}>
        <Route path="/locations" element={<LocationsPage/>}/>
        <Route path="/locations/:id" element={<LocationsDetailsPage/>}/>  
      </Route>
    </Routes>
  )
}