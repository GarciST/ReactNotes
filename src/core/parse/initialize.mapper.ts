import { ParseConfig } from './const';
import Parse from 'parse/react-native';
import AsyncStorage from '@react-native-community/async-storage';

export const _initialize = () => {
    Parse.setAsyncStorage(AsyncStorage);
    (Parse as any).serverURL = ParseConfig.serverUrl;
    Parse.initialize(ParseConfig.appID, ParseConfig.jsKey);
}