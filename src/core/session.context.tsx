import * as React from 'react';

export interface UserContextProps {
    _id: number;
    username: string;
    email: string;
    //Optional
    name?: string;
    lastname?: string;
    updateUser: (user: UserContextProps) => void;
}

export const createDefaultUser = (): UserContextProps => ({
    _id: 0,
    username: "hola username",
    email: "",
    updateUser: user => {
        console.warn("Empty user");
    }
});

export const SessionContext = React.createContext(
    createDefaultUser()
);

export const SessionProvider: React.StatelessComponent = props => {
    const [user, setUser] = React.useState<UserContextProps>(createDefaultUser());
  
    return (
      <SessionContext.Provider value={{...user, updateUser: setUser}}>
        {props.children}
      </SessionContext.Provider>
    );
  };