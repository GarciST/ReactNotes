import { ParseConfig } from './const';
import * as Parse from 'parse/react-native';
import { AsyncStorage } from 'react-native';

export const _initialize = () => {
    Parse.setAsyncStorage(AsyncStorage);
    Parse.initialize(ParseConfig.appID, ParseConfig.jsKey);
    (Parse as any).serverURL = ParseConfig.serverUrl;
}