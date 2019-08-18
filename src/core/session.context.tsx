import * as React from 'react';
import { _login, _currentSession } from './parse/session.mapper';
import { _initialize } from './parse/initialize.mapper';
import { Navigation } from 'react-native-navigation';
import { LoginScene } from '../scenes';
import { loginOptions } from '../layout/options';

export interface UserContextProps {
  _id: string | undefined;
  username: string | undefined;
  email: string | undefined;
  //Optional
  name?: string;
  lastname?: string;
  updateUser?: (user: UserContextProps) => void;
}

export const initContext = _initialize;

export const userLogin = async (userLogin: { email: string, password: string }): Promise<UserContextProps> => _login(userLogin);

export const userCurrent = async (): Promise<UserContextProps> => _currentSession().catch(_ => createDefaultUser());


const createDefaultUser = (): UserContextProps => ({
  _id: undefined,
  username: undefined,
  email: undefined,
  updateUser: user => {
    console.warn("Empty user");
  },
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