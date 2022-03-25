import { createContext, useState } from "react";
import { useCookies, Cookies } from 'react-cookie';

const AuthContext = createContext({});

const cookie = getCookie('jwt');

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    // const [cookies, getCookie] = useCookies(['jwt']);
    console.log("init cookies :"+cookie);
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;

export function getCookie(name) {
    var cookieValue;
    if (document.cookie && document.cookie !== '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) === (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
}