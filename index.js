/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import crashlytics from '@react-native-firebase/crashlytics';

// crashlytics
// crashlytics().setCrashlyticsCollectionEnabled(true);
// ErrorUtils.setGlobalHandler((error, isFatal) => {
//   // Log the error to Crashlytics
//   if (isFatal) {
//     crashlytics().recordError(error);
//   } else {
//     console.log('errorcrash');
//   }
// });
//crashlytics.

// YellowBox.ignoreWarnings(['Setting a timer']);

AppRegistry.registerComponent(appName, () => App);
