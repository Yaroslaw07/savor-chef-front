import { createContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


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

        if (authState.accessToken != null && authState.refreshToken != null) {
          return;
        }
        
        if (authState.refreshToken != null) {
          refresh(authState.accessToken)
        }

        const refreshToken = localStorage.getItem("refreshToken");
        
        if (refreshToken) {
          refresh(refreshToken)
        } else {

          navigate("/signin");
        }
    }, [])

    async function refresh(refreshToken) {
      const response = await fetch("https://localhost:7083/refresh", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({ refreshToken }),
      });

      if (response.ok) {

          const data = await response.json();
          localStorage.setItem("refreshToken",JSON.stringify(data.refreshToken));
          setAuthState({
            isAuthenticated: true,
            accessToken: data.accessToken,
            refreshToken: data.refreshToken
          });

      } else {
        
        logout()
        navigate('/signin')
        // error
      }
    }

    async function signIn(email,password){
        
        const response = await fetch("https://localhost:7083/signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
          body: JSON.stringify({ email, password }),
        });

        

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem("refreshToken", JSON.stringify(data.refreshToken));
            setAuthState({
              isAuthenticated: true,
              accessToken: data.accessToken,
              refreshToken: data.refreshToken,
            });
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
            localStorage.setItem("refreshToken", JSON.stringify(data.refreshToken));
            setAuthState({
              isAuthenticated: true,
              accessToken: data.accessToken,
              refreshToken: data.refreshToken,
            });
            navigate('/');
        } else {
            alert("Something went wrong!");
            //error handling
        }
    };

    function logout() {
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


