import * as React from 'react';
import { SplashContainer } from '../pods/splash/splash.container';
import { SessionProvider } from '../core/session.context';

interface Props {
    componentId: string;
}

export const SplashScene = (props: Props) => (
    <SessionProvider>
        <SplashContainer {...props} />
    </SessionProvider>
)