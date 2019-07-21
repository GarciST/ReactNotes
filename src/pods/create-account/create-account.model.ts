import * as React from 'react';

export interface CreateAccountEntity {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    name?: string;
    lastname?: string
}

export const createEmptyAccount = (): CreateAccountEntity => (
    {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
        lastname: ''
    }
)