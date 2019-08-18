import { UserContextProps } from '../session.context';
import { parseUserContextMapping } from './user.mapper';
import * as Parse from 'parse/react-native';
export const _login = async (userLogin: {email: string, password: string}): Promise<UserContextProps> => {
    return Parse.User.logIn(userLogin.email,userLogin.password)
        .then(user => parseUserContextMapping(user));
}

export const _currentSession = async (): Promise<UserContextProps> => {
    let current = await Parse.User.currentAsync();
    return new Promise((resolve, reject) => {
        current ? resolve(parseUserContextMapping(current)) : reject("No User in Parse");
    });
}