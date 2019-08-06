import { UserContextProps } from '../session.context';
import { parseUserContextMapping } from './user.mapper';
import * as Parse from 'parse';
export const _login = async (userLogin: {email: string, password: string}): Promise<UserContextProps> => {
    let parseUser = new Parse.User();
    parseUser.set("email", userLogin.email);
    parseUser.set("password", userLogin.password);
    return parseUser.logIn()
        .then(user => parseUserContextMapping(user));
}

export const _currentSession = (): UserContextProps | undefined => {
    let current = Parse.User.current();
    return current ? parseUserContextMapping(current) : undefined
}