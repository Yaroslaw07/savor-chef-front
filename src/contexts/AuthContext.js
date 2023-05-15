import { createContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { apiPath } from "../App";


const AuthContext = createContext();

export default AuthContext;

//auth-token
//username
export function AuthContextProvider ({children}) {

    const navigate = useNavigate();

    const [user,setUser] = useState(()=>{
      if (localStorage.getItem('tokens')) {
        let tokens = JSON.parse(localStorage.getItem("tokens"))
        console.log(tokens)
        return jwt_decode(tokens.accessToken)
      }

      return null
    })

    async function signIn(payload){
        
        await axios.post(
          apiPath + "signin",
          payload,
          { 
            headers: {'Content-Type': 'application/json'}
          }
        ).then(response => {

            const data = response.data;
            console.log(data);
            localStorage.setItem("tokens",JSON.stringify(data))
            
            setUser(data.accessToken)

            console.log(user)

            navigate('/')
        }).catch(error => {
          
          console.log(error);
        })
    };

    async function signUp(payload) {
        axios.post(
          apiPath + "signup",
          payload,
          { 
            headers: {'Content-Type': 'application/json'}
          }
          ).then(response =>  navigate('/signin')).catch(error => console.log(error.response))
    };

    async function logout() {
        localStorage.removeItem("tokens");
        setUser(null)
        navigate('/')
    };

    const context = {
      user: user,
      signIn: signIn,
      signUp: signUp,
      logout: logout,
    };

    return <AuthContext.Provider value={context}>
        {children}
    </AuthContext.Provider>

}


