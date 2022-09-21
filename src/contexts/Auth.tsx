import { createContext, useContext, useState } from 'react';

export interface ContextProps {
    user: { email: string };
    signIn: (email: string) => void;
}

export const AuthContext = createContext({} as ContextProps);

function AuthProvider({ children }) {
    const [user, setUser] = useState({ email: '' });

    const signIn = (email: string) => {
        setUser({ email: email });
    }

    return (
        <AuthContext.Provider value={{ signIn, user }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth }


// const [nameUser, setNameUser] = useState({});
// const nameUserProfile = ({ name }: AuthProps) => {
//     setNameUser({ name: name });
// }