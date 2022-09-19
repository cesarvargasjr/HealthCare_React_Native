import { createContext, useState } from 'react';

interface AuthProps {
    email: string;
}

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
    const [user, setUser] = useState({});

    const signIn = ({ email }: AuthProps) => {
        setUser({ email: email });
    }

    return (
        <AuthContext.Provider value={{ signIn, user }}>
            {children}
        </AuthContext.Provider>
    )
}