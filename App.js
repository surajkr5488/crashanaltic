// import React, {useEffect} from 'react';
// import {View, Text, Button} from 'react-native';

// import {getApps, initializeApp} from '@firebase/app';
// import crashlytics, {firebase} from '@react-native-firebase/crashlytics';

// const App = () => {
//   useEffect(() => {
//     var crash = crashlytics().crash();
//     if (crash) {
//       crashlytics().crash();
//       console.log('ww', ww);
//     } else {
//       console.log('error crash3 ');
//     }

//     // crashlytics
//     // crashlytics().setCrashlyticsCollectionEnabled(true);
//     // ErrorUtils.setGlobalHandler((error, isFatal) => {
//     //   // Log the error to Crashlytics
//     //   if (isFatal) {
//     //     crashlytics().crash();
//     //     crashlytics().recordError(error);
//     //   } else {
//     //     console.log('errorcrashded');
//     //   }
//     // });
//   }, []);

//   useEffect(() => {
//     // Initialize Firebase if it hasn't been initialized already
//     if (getApps().length === 0) {
//       initializeApp({
//         apiKey: 'AIzaSyDDkgy1dLPLzYD5-3svFFHdK5Dp-cnGge0',
//         authDomain: 'crashanalytics-149cf.firebaseapp.com.',
//         projectId: 'crashanalytics-149cf',
//         storageBucket: 'crashanalytics-149cf.appspot.com',
//         messagingSenderId: '503312135291',
//         appId: '1:503312135291:android:6d9874b8c243d841159ede',
//       });
//     }

//     // Initialize Crashlytics
//     crashlytics().setCrashlyticsCollectionEnabled(true);
//   }, []);

//   // Function to trigger a crash for testing
//   const testCrash = () => {
//     crashlytics().crash();
//   };

//   return (
//     <View>
//       <Text>React Nativele</Text>
//       <Button title="Test Crash" onPress={testCrash} />
//     </View>
//   );
// };

// export default App;

// import React, {useEffect} from 'react';
// import {View, Button} from 'react-native';
// import crashlytics from '@react-native-firebase/crashlytics';

// const App = () => {
//   useEffect(() => {
//     crashlytics().log('App component mounted.');
//   }, []);

//   const handleCrash = () => {
//     crashlytics().crash();
//   };

//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Button title="Test Crash" onPress={handleCrash} />
//     </View>
//   );
// };

// export default App;

//22hbhbd

// import React, {useEffect} from 'react';
// import {View, Button} from 'react-native';
// import crashlytics from '@react-native-firebase/crashlytics';

// async function onSignIn(user) {
//   crashlytics().log('User signed in.');
//   await Promise.all([
//     crashlytics().setUserId(user.uid),
//     crashlytics().setAttribute('credits', String(user.credits)),
//     crashlytics().setAttributes({
//       role: 'admin',
//       followers: '13',
//       email: user.email,
//       username: user.username,
//     }),
//   ]);
// }

// export default function App() {
//   useEffect(() => {
//     crashlytics().crash();
//     crashlytics().log('App mounted.');
//     console.log('eedd');
//   }, []);
//   const handleCrash = () => {
//     crashlytics().crash();
//     console.log('ddd');
//   };

//   return (
//     <View>
//       <Button
//         title="Sign In"
//         onPress={() =>
//           onSignIn({
//             uid: 'Aa0Bb1Cc2Dd3Ee4Ff5Gg6Hh7Ii8Jj9',
//             username: 'Joaquin Phoenix',
//             email: 'phoenix@example.com',
//             credits: 42,
//           })
//         }
//       />
//       <Button title="Test Crash" onPress={handleCrash} />
//     </View>
//   );
// }

// #5 How to Add Firebase Crashlytics in React Native App
// https://aboutreact.com/react-native-firebase-crashlytics/

// Import React in our code
import React, {useEffect, useState} from 'react';

// Import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import crashlytics from '@react-native-firebase/crashlytics';

const App = () => {
  const [userCounts, setUserCounts] = useState(null);

  useEffect(() => {
    crashlytics().log('App mounted.');
  }, []);

  const logCrashlytics = async () => {
    crashlytics().log('Dummy Details Added');
    await Promise.all([
      crashlytics().setUserId('101'),
      crashlytics().setAttribute('credits', String(50)),
      crashlytics().setAttributes({
        email: 'suraj.beyoung@gmail.com',
        username: 'surajBeyoung',
      }),
    ]);
  };

  const logCrash = async user => {
    crashlytics().crash();
    console.log('first');
  };

  const logError = async userda => {
    crashlytics().log('Updating user count.');
    try {
      if (userda) {
        // An empty array is truthy, but not actually true.
        // Therefore the array was never initialised.
        setUserCounts(userCounts.push(userda.length));
      }
    } catch (error) {
      crashlytics().recordError(error);
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>
        How to Add Firebase Crashlytics in React Native App
      </Text>
      <View style={styles.innerContainer}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={() => logCrashlytics()}>
          <Text style={styles.buttonTextStyle}>Log User Details</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={logCrash}>
          <Text style={styles.buttonTextStyle}>Log Crash</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={logError}>
          <Text style={styles.buttonTextStyle}>Log Error</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.footerHeading}>
        React Native Firebase Crashlytics
      </Text>
      <Text style={styles.footerText}>www.aboutreact.com</Text>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 35,
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  buttonTextStyle: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: 'orange',
    padding: 10,
    width: '100%',
    marginTop: 16,
  },
  footerHeading: {
    fontSize: 18,
    textAlign: 'center',
    color: 'grey',
  },
  footerText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'grey',
  },
});
// RUN THIS CODE IN BEYOUNG APP

// import React, {useEffect, useState} from 'react';

// import {
//   SafeAreaView,
//   StyleSheet,
//   View,
//   Button,
//   Text,
//   TouchableOpacity,
// } from 'react-native';

// import crashlytics from '@react-native-firebase/crashlytics';

// const CrashAnalytic = () => {
//   const [userCounts, setUserCounts] = useState(null);

//   useEffect(() => {
//     // crashlytics().setCrashlyticsCollectionEnabled(true);
//     crashlytics().log('crash app without setCrashlyticsCollectionEnabled22');
//     crashlytics().log(
//       'App mounted without setCrashlyticsCollectionEnabled and analytics_auto_collection_enabled',
//     );
//   }, []);

//   const logCrashlytics = async () => {
//     crashlytics().log('Dummy Details Added');
//     await Promise.all([
//       crashlytics().setUserId('101'),
//       crashlytics().setAttribute('credits', String(50)),
//       crashlytics().setAttributes({
//         email: 'aboutreact11@gmail.com',
//         username: 'aboutreact11',
//       }),
//     ]);
//   };

//   const logCrash = async user => {
//     firebase.crashlytics().crash();
//     crashlytics().crash();
//     crashlytics().log('crash app without setCrashlyticsCollectionEnabled1');
//     console.log(' crash app without setCrashlyticsCollectionEnabled');
//   };

//   const logError = async user => {
//     crashlytics().log('Updating user count.');
//     try {
//       if (users) {
//         setUserCounts(userCounts.push(users.length));
//       }
//     } catch (error) {
//       crashlytics().recordError(error);
//       console.log(error);
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.titleText}>
//         How to Add Firebase Crashlytics in React Native App
//       </Text>
//       <View style={styles.innerContainer}>
//         <TouchableOpacity
//           activeOpacity={0.5}
//           style={styles.buttonStyle}
//           onPress={() => logCrashlytics()}>
//           <Text style={styles.buttonTextStyle}>Log User Details</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           activeOpacity={0.5}
//           style={styles.buttonStyle}
//           onPress={logCrash}>
//           <Text style={styles.buttonTextStyle}>Log Crash</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           activeOpacity={0.5}
//           style={styles.buttonStyle}
//           onPress={logError}>
//           <Text style={styles.buttonTextStyle}>Log Error</Text>
//         </TouchableOpacity>
//       </View>
//       <Text style={styles.footerHeading}>
//         React Native Firebase Crashlytics
//       </Text>
//       <Text style={styles.footerText}>www.aboutreact.com</Text>
//       <Button title="Test Crash" onPress={() => crashlytics().crash()} />
//     </SafeAreaView>
//   );
// };

// export default CrashAnalytic;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   innerContainer: {
//     flex: 1,
//     alignItems: 'center',
//     padding: 35,
//     justifyContent: 'center',
//   },
//   titleText: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     paddingVertical: 20,
//   },
//   buttonTextStyle: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   buttonStyle: {
//     alignItems: 'center',
//     backgroundColor: 'orange',
//     padding: 10,
//     width: '100%',
//     marginTop: 16,
//   },
//   footerHeading: {
//     fontSize: 18,
//     textAlign: 'center',
//     color: 'grey',
//   },
//   footerText: {
//     fontSize: 16,
//     textAlign: 'center',
//     color: 'grey',
//   },
// });
