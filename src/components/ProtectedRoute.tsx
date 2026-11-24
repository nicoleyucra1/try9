import {Navigate, Outlet, useNavigate} from 'react-router-dom';

export default function ProtectedRoute(){
    const navigate = useNavigate();
    if (!localStorage.getItem('token')) return <Navigate to ='/login' replace/>;

    const logout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <div className = "p-6">
            <nav className = "flex justify-between mb-6>">
                <b>Report It</b>
                <button onClick={logout} className="btn btn-sm">Cerrar sesion</button>
            </nav>
            <Outlet/>
        </div>
    );
}