import * as React from 'react';
import { _login, _currentSession } from './parse/session.mapper';
import { Navigation } from 'react-native-navigation';
import { LoginScene } from '../scenes/login.scene';
import { loginOptions } from '../layout/options';
import { _initialize } from './parse/initialize.mapper';

export interface UserContextProps {
  _id: string | undefined;
  username: string | undefined;
  email: string | undefined;
  //Optional
  name?: string;
  lastname?: string;
  updateUser?: (user: UserContextProps) => void;
}

export const initContext = async () => _initialize();

export const userLogin = async (userLogin: { email: string, password: string }): Promise<UserContextProps> => (
  /**
   * Current Parse Login
   */
  _login({
    email: userLogin.email,
    password: userLogin.password,
  })
)

export const userCurrent = (): UserContextProps => {
  let current = _currentSession();
  return current ? current : createDefaultUser();
}

const createDefaultUser = (): UserContextProps => ({
  _id: undefined,
  username: undefined,
  email: undefined,
  updateUser: user => {
    console.warn("Empty user");
  },
});

export const SessionContext = React.createContext(
  userCurrent()
);

export const SessionProvider: React.StatelessComponent = props => {
  const [user, setUser] = React.useState<UserContextProps>(userCurrent());
  React.useEffect(() => {
    if(user._id)
      Navigation.setRoot({
        root: {
          stack: {
            children: [{
              component: {
                name: LoginScene.name,
                options: { ...loginOptions }
              }
            }]
          }
        }
      })
  }, [user])
  return (
    <SessionContext.Provider value={{ ...user, updateUser: setUser }}>
      {props.children}
    </SessionContext.Provider>
  );
};