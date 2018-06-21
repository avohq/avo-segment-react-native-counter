import {AppRegistry} from 'react-native';
import App from './App';
import Avo from './src/analytics.js';

Avo.setup_({useProductionKey: false, validateProperties: true}, null, {
  anonymousId: 'Hello world',
});

AppRegistry.registerComponent('AvoReactNativeSegment', () => App);
