import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { api } from '@/lib/axios';
import { User, AuthResponse, SignInCredentials, SignUpCredentials } from '@/types/auth';
import { useRouter } from 'next/navigation';

interface AuthContextData {
    user: User | null;
    isAuthenticated: boolean;
    signIn: (credentials: SignInCredentials) => Promise<void>;
    signUp: (credentials: SignUpCredentials) => Promise<void>;
    signOut: () => void;
}

interface AuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();

    useEffect(() => {
        // Verificar token no localStorage ao carregar
        const token = localStorage.getItem('@PlannerConcursos:token');
        const savedUser = localStorage.getItem('@PlannerConcursos:user');

        if (token && savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    const signIn = async ({ email, password }: SignInCredentials) => {
        try {
            const response = await api.post<AuthResponse>('/auth/login', {
                email,
                password,
            });

            const { token, user } = response.data;

            localStorage.setItem('@PlannerConcursos:token', token);
            localStorage.setItem('@PlannerConcursos:user', JSON.stringify(user));

            setUser(user);
            router.push('/dashboard');
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            throw new Error('Erro ao fazer login');
        }
    };

    const signUp = async ({ name, email, password }: SignUpCredentials) => {
        try {
            const response = await api.post<AuthResponse>('/auth/register', {
                name,
                email,
                password,
            });

            const { token, user } = response.data;

            localStorage.setItem('@PlannerConcursos:token', token);
            localStorage.setItem('@PlannerConcursos:user', JSON.stringify(user));

            setUser(user);
            router.push('/dashboard');
        } catch (error) {
            console.error('Erro ao criar conta:', error);
            throw new Error('Erro ao criar conta');
        }
    };

    const signOut = () => {
        localStorage.removeItem('@PlannerConcursos:token');
        localStorage.removeItem('@PlannerConcursos:user');
        setUser(null);
        router.push('/login');
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated: !!user,
                signIn,
                signUp,
                signOut
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext); 