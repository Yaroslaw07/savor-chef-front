import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import api from "../../../api-common";

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
        
        await api.post(
          "/signin",
          payload,
        ).then(response => {

            const data = response.data;
            console.log(data);
            localStorage.setItem("tokens",JSON.stringify(data));
            
            setUser(jwt_decode(data.accessToken));

            console.log(user);

            navigate('/')
        }).catch(_ => {
            throw new Error("Wrong data")
        });
    };

    async function signUp(payload) {
        api.post(
          "/signup",payload
          ).then(response =>  navigate('/signin')).catch(error => console.log(error.response))
          .catch(_ => {
            throw new Error("Wrong data");
          })
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


