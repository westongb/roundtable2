import React, {createContext, useState} from 'react';

const LoginContext = React.createContext(

  )

function LoginProvider(props){

  const [user, setUser] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState('');

  const writeToken = (token) => {
      setToken(token)
  }

  return (
      <LoginContext.Provider  value={{user,setUser, loggedIn, setLoggedIn, token, writeToken}}>
          {props.children}
      </LoginContext.Provider>
  
  )
}

const LoginConsumer = LoginContext.Consumer
export {LoginContext, LoginConsumer, LoginProvider}