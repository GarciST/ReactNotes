import * as React from 'react';
import { CreateAccountComponent } from './create-account-component';

interface Props{
    componentId: string;    
}

export const CreateAccountContainer = (props: Props) => (<CreateAccountComponent />);