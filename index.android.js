/**
 * @format
 */

import { Navigation } from 'react-native-navigation';
import { pushInit } from './src/navigation/app.navigator';
import { initContext } from './src/core';

await initContext()
Navigation.events().registerAppLaunchedListener(() => pushInit());