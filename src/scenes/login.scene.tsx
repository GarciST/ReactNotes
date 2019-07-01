import * as React from 'react';
import { LoginContainer } from '../pods/login/login.container';

interface Props {
    componentId: string;
}

export const LoginScene = (props: Props) =>  {

    

    return(
        <LoginContainer {...props} />
    )
}
