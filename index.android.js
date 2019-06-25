/**
 * @format
 */

import { Navigation } from 'react-native-navigation';
import { pushInit } from './src/navigation/app.navigator';
import Parse from 'parse/react-native'
import { ParseConfig } from './src/core';
import { AsyncStorage } from 'react-native';

Parse.setAsyncStorage(AsyncStorage);
Parse.serverURL = ParseConfig.serverUrl; // This is your Server URL
Parse.initialize(
    ParseConfig.appID, // This is your Application ID
    ParseConfig.jsKey // This is your Javascript key
);

Navigation.events().registerAppLaunchedListener(() => pushInit());