import {api} from './api';
import type { LoginRequest, RegisterRequest, Reports, ItemPage, LocationsDetails, UserCreated, ReportRequest,  } from './types';


export async function loginRequest(data: LoginRequest){
    const res = await api.post<{token: string}>('/api/auth/login', data);
    return res.data;
}

export async function registerRequest(data: RegisterRequest): Promise<UserCreated> {
    const res = await api.post<UserCreated>('/api/auth/register', data);
    return res.data
}

export async function getItems(page: number): Promise<ItemPage>{
    const res = await api.get<ItemPage>('/api/locations', {params: {page, size:5}});
    return res.data;
}

export async function getItem(id: number){
    const res = await api.get<LocationsDetails>(`/api/locations/${id}`);
    return res.data
}

export async function operacion(data: ReportRequest, id:number): Promise<Reports> {
    const res = await api.post<Reports>(`/api/locations/${id}/reports`, data)
    return res.data;
}