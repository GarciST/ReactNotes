import * as React from 'react';
import { CreateAccountComponent } from './create-account-component';
import { CreateAccountEntity } from './create-account.model';

interface Props{
    componentId: string;    
}

export const CreateAccountContainer = (props: Props) => {

    const onSignUp = (account: CreateAccountEntity) => {
        console.log(`Crating account ${JSON.stringify(account)}`);
    }

    return(
        <CreateAccountComponent onSignUp={onSignUp}/>
    );
}