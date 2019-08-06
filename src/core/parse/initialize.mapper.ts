import { ParseConfig } from './const';
import * as Parse from 'parse';

export const _initialize = () => {
    Parse.initialize(ParseConfig.appID, ParseConfig.jsKey);
    (Parse as any).serverURL = ParseConfig.serverUrl;
}