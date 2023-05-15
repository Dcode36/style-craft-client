import { useState, useContext, useEffect, createContext } from "react";
import axios from "axios";

const AuthContenxt = createContext();



const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        user: null,
        token: ""
    });

    // default axios
    axios.defaults.headers.common['Authorization'] = auth?.token;
    useEffect(() => {
        const data = localStorage.getItem('auth');
        if (data) {
            const parseData = JSON.parse(data);
            setAuth({
                ...auth,
                user: parseData.user,
                token: parseData.token
            })
        }

        // eslint-disable-next-line

    }, [])
    return (
        <AuthContenxt.Provider value={[auth, setAuth]}>
            {children}
        </AuthContenxt.Provider>
    )
}


const useAuth = () => useContext(AuthContenxt);

export { useAuth, AuthProvider };
