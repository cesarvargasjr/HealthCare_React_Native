import { createContext, useState } from 'react';

interface AuthProps {
    email: string;
    // name: string;
}

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
    const [user, setUser] = useState({});
    // const [nameUser, setNameUser] = useState({});

    const signIn = ({ email }: AuthProps) => {
        setUser({ email: email });
    }

    // const nameUserProfile = ({ name }: AuthProps) => {
    //     setNameUser({ name: name });
    // }

    return (
        <AuthContext.Provider value={{ signIn, user }}>
            {children}
        </AuthContext.Provider>
    )
}