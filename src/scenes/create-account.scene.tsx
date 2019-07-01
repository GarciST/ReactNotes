import * as React from 'react';
import { CreateAccountContainer } from '../pods/create-account/create-account.container';

interface Props{
    componentId: string;
}

export const CreateAccountScene = (props: Props) => (<CreateAccountContainer {...props} />)