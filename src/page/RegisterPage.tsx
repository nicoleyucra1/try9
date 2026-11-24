import {useState, type FormEvent} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {loginRequest} from '../services';
import {getError} from '../api';

export default function RegisterPage(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errores, setErrores] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError('');
        const errs: Errores = {};
        if (!name.trim() || name.length > 100) errs.name = 'Obligatorio, maximo 100 caracteres';
        if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))errs.email = 'Correo inválido';)
        try{
            const data = await loginRequest({email, password});
            localStorage.setItem('token', data.token);
            navigate('/LocationsPage');
        } catch (err) {
            const er = getError(err);
            setError(er.status === 401 ? 'Correo o contrasena incorrectos': er.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="card bg-base-100 shadow p-6 gap-3 max-w-sm mx-auto mt-20">
            <h1 className="text-2xl font-bold">Iniciar sesion</h1>
            {error && <p className='alert alert-error'>{error}</p>}
            <label htmlFor='email'>Correo</label>
            <input id="email" type="email" className="input" value={email} onChange={(e) =>setEmail(e.target.value)}/>
            <label htmlFor='password'>Contrasena</label>
            <input id="password" type="password" className="input" value={password} onChange={(e) =>setEmail(e.target.value)}/>
            <button className="btn btn-primary">Ingresar</button>
            <Link to="/register">Crear cuenta</Link>
        </form>
    )
}
