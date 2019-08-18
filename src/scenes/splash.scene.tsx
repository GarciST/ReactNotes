import * as React from 'react';
import { SplashContainer } from '../pods/splash/splash.container';
import { SessionProvider, UserContextProps } from '../core/session.context';

interface Props extends UserContextProps {
    componentId: string;
}

export const SplashScene = (props: Props) => (
    <SessionProvider>
        <SplashContainer {...props} />
    </SessionProvider>
)