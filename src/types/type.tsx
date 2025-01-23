export  interface AuthResponse{
    user: {
        id: string,
        name: string,
        email: string,
    },
    jwt: string
}