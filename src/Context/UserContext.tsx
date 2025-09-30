import { createContext, useContext, useState, type ReactNode } from "react";


type UseContextType ={
  username: string;
  setUsername:(name: string) => void;
};

const UserContext = createContext<UseContextType | undefined>(undefined);

export function UserProvider({children}: {children:ReactNode}) {
  const [username, setUsername] = useState('');

  return(
    <UserContext.Provider value={{username, setUsername}}>
      {children}
    </UserContext.Provider>
  )
}

export function useName() {
  const context = useContext(UserContext)
  if(!context) {
    throw new Error("User must be used within a UserProvider")
  }
  return context
}