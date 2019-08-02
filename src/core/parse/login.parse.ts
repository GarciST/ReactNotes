import { UserContextProps } from '../session.context';
import { parseUserContextMapping } from './user.mapper';
export const _login = async (userLogin: {email: string, password: string}): Promise<UserContextProps> => {
    let parseUser = new Parse.User();
    parseUser.set("email", userLogin.email);
    parseUser.set("password", userLogin.password);
    return parseUser.logIn()
        .then(user => parseUserContextMapping(user));
}