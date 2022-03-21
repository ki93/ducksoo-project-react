import React from "react";

import { fakeAuthProvider } from "./auth";

const authContext = React.createContext(); //인증 정보 값을 가진 컨텍스트를 생성

function useAuth() {
  //   const [authed, setAuthed] = React.useState(false);
  let [user, setUser] = React.useState(null);

  let signin = (newUser, cb) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser);
      cb();
    });
  };

  let signout = (cb) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      cb();
    });
  };
  return { user, signin, signout };
}

export function AuthProvider({ children }) {
  const auth = useAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>; //컨텍스트를 구독하는 컴포넌트들에게 컨텍스트의 변화를 알리는 용도
}

export default function AuthConsumer() {
  return React.useContext(authContext);
}
