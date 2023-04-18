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
        accessToken: null,
        refreshToken: null
    })

    

    useEffect(() => {
        const token = localStorage.getItem('auth-token');
        if (token) {
            setAuthState({
              isAuthenticated: true,
              accessToken: JSON.parse(localStorage.getItem("accessToken")),
              refreshToken: JSON.parse(localStorage.getItem("refreshToken")),
            });
        }
    }, [])

    async function signIn(email,password){

        console.log(email, password);
        
        const response = await fetch("https://localhost:7083/signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
          body: JSON.stringify({ email, password }),
        });

        

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem("accessToken", JSON.stringify(data.accessToken));
            localStorage.setItem("refreshToken", JSON.stringify(data.refreshToken));
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
        const response = await fetch("https://localhost:7083/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
          body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem("accessToken", JSON.stringify(data.accessToken));
            localStorage.setItem("refreshToken", JSON.stringify(data.refreshToken));
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
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        setAuthState({
          isAuthenticated: false,
          accessToken: null,
          refreshToken: null,
        });
    };

    const context = {
      state: authState,
      signIn: signIn,
      signUp: signUp,
      logout: logout,
    };

    return <AuthContext.Provider value={context}>
        {children}
    </AuthContext.Provider>

}


