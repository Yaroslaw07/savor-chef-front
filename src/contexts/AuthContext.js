import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const AuthContext = createContext();

export default AuthContext;

//auth-token
//username
export function AuthContextProvider ({children}) {

    const navigate = useNavigate();

    const [authState,setAuthState] = useState({
        isAuthenticated: false,
        token: null,
        userName: null
    })

    const context = {
        state: authState,
        login: login,
        signUp: signUp,
        logout: logout
    }

    useEffect(() => {
        const token = localStorage.getItem('auth-token');
        if (token) {
            setAuthState({
                isAuthenticated: true,
                token: token,
                user: JSON.parse(localStorage.getItem('username'))
            })
        }
    }, [])

    async function login(email,password){
        const response = await fetch('my-api/login', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({email,password})
        })

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('auth-token',data.token);
            localStorage.setItem('username',JSON.stringify(data.user))
            setAuthState({
                isAuthenticated:true,
                token: data.token,
                user: data.user
            })
            navigate('/');
        } else {
            alert("Something went wrong!:(");
            // add errors handling
        }
    };

    async function signUp(username,email,password) {
        const response = await fetch('my-api/signup',{
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({username,email,password})
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem("auth-token", data.token);
            localStorage.setItem("username", JSON.stringify(data.user));
            setAuthState({
              isAuthenticated: true,
              token: data.token,
              user: data.user,
            });
            navigate('/');
        } else {
            alert("Something went wrong!");
            //error handling
        }
    };

    function logout() {
        localStorage.removeItem('auth-token');
        localStorage.removeItem('username');
        setAuthState({
            isAuthenticated:false,
            token: null,
            user: null
        });
    };

    return <AuthContext.Provider value={context}>
        {children}
    </AuthContext.Provider>

}


