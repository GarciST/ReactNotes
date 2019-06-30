/**
 * @format
 */

import { Navigation } from 'react-native-navigation';
import { pushInit } from './src/navigation/app.navigator';

Navigation.events().registerAppLaunchedListener(() => pushInit());