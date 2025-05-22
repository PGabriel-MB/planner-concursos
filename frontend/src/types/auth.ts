export interface User {
    id: string;
    name: string;
    email: string;
}

export interface AuthResponse {
    token: string;
    user: User;
}

export interface SignInCredentials {
    email: string;
    password: string;
}

export interface SignUpCredentials {
    name: string;
    email: string;
    password: string;
} 