import * as React from 'react';
import { emptyStatement } from '@babel/types';

export interface UserContextProps {
    _id: number;
    username: string;
    email: string;
    //Optional
    name?: string;
    lastname?: string;
}

export const createDefaultUser = (): UserContextProps => ({
    _id: 0,
    username: "",
    email: ""
});

export const SessionContext = React.createContext(
    createDefaultUser()
);

