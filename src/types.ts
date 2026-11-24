export interface Health{
    status: string;
}

export interface RegisterRequest{
    name: string;
    email: string;
    password: string;
}

export interface LoginRequest{
    email: string;
    password: string;
}

export interface UserCreated{
    email: string;
    name: string;
}


export interface Item {
    id: number;
    name: string;
    building: string;
    floor: number;
    openReports: number;
    acceptReports: boolean
}

export interface ItemPage {
    items: Item[];
    page: number;
    totalItems: number;
    totalPages: number;
}

export interface Reports {
    id: number;
    category: string;
    description: string;
}

export interface LocationsDetails {
    id: number;
    name: string;
    building: string;
    floor: number;
    openReports: number;
    acceptsReports: boolean;
    reports: Reports[];
}

export interface ReportRequest {
    id: number;
    category: string;
}

export interface StateValidation {
    code: string;
    message: string;
}