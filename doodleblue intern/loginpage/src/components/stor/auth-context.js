import react from "react";
const AuthContext = react.createContext(
    {
        isLoggedIn:false,
        onLogout:()=>{}
    }
);
// const AuthContextProvider ={props}
export default AuthContext;
