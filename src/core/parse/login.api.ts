import { UserContextProps } from '../session.context';
import { parseUserContextMapping } from './user.mapper';
export const login = async (email: string, password: string): Promise<UserContextProps> => {
    let parseUser = new Parse.User();
    parseUser.set("email", email);
    parseUser.set("password", password);
    let user = await parseUser.logIn();
    return new Promise<UserContextProps>((resolve, reject) => {
        if(user){
            resolve(parseUserContextMapping(user));
        }else{
            reject("Invalid login");
        }
    });
}