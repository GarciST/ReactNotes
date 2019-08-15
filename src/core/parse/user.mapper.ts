import { UserContextProps } from '../'
import * as Parse from 'parse/react-native';
export const parseUserContextMapping = (user: Parse.User): UserContextProps  => ({
    _id: user.id,
    email: user.getEmail(),
    username: user.getUsername(),
    name: user.get('name'),
    lastname: user.get('lastname'),
})