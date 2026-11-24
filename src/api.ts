import axios from 'axios';

export const api = axios.create({baseURL: 'http://localhost:8080'});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) config.headers.Authorization = `Bearer ${token}`; 
    return config;
})

api.interceptors.response.use(
    (res) => res,
    (error) => {
        const esAuth = error.config?.url.startsWith('/api/auth');
        if (error.response?.status === 401 && !esAuth){
        localStorage.removeItem('token');
        window.location.href ='/login';
    } 
    return Promise.reject(error);
    }
);

export function getError(err: unknown){
    if (axios.isAxiosError(err) && err.response){
        const data = err.response.data as  {code?: string, message?: string};
        return { status: err.response.status, code: data?.code, message: data?.message ?? 'Error del servidor'};
    }

    return { status: 0, code: undefined, message: 'No se pudo conectar con el servidor'};
}