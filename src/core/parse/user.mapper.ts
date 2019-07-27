import { UserContextProps } from '../'

export const ParseUserContextMapping = (user: Parse.User): UserContextProps  => ({
    _id: user.id,
    email: user.getEmail(),
    username: user.getUsername(),
    name: user.get('name'),
    lastname: user.get('lastname'),
})