/**
 * @format
 */

import { Navigation } from 'react-native-navigation';
import { pushInit } from './src/navigation/app.navigator';
//import { initContext } from './src/core';

Navigation.events().registerAppLaunchedListener(() => pushInit());