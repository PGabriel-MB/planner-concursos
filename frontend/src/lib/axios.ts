import axios from 'axios';

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor para adicionar token em todas as requisições
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('@PlannerConcursos:token');

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
}); 