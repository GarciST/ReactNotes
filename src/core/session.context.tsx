import * as React from 'react';
import { _login } from './parse/login.parse';

export interface UserContextProps {
  _id: string;
  username: string | undefined;
  email: string | undefined;
  //Optional
  name?: string;
  lastname?: string;
  updateUser?: (user: UserContextProps) => void;
  isLogin: () => boolean;
}

export const userLogin = async (userLogin: { email: string, password: string }): Promise<UserContextProps> => (
  /**
   * Current Parse Login
   */
  _login({
    email: userLogin.email,
    password: userLogin.password,
  })
)

export const createDefaultUser = (): UserContextProps => ({
  _id: "",
  username: "",
  email: "",
  updateUser: user => {
    console.warn("Empty user");
  },
  isLogin: () => false
});

export const SessionContext = React.createContext(
  createDefaultUser()
);

export const SessionProvider: React.StatelessComponent = props => {
  const [user, setUser] = React.useState<UserContextProps>(createDefaultUser());

  return (
    <SessionContext.Provider value={{ ...user, updateUser: setUser }}>
      {props.children}
    </SessionContext.Provider>
  );
};