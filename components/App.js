// //COVID Tracker
// //Created by Aravindh Kumar

// import React, {useState, useEffect} from 'react';
// import {SafeAreaView, StyleSheet, View, Text, Button} from 'react-native';

// import * as appConstants from '../utils/constants';
import GlobalView from './global_view';
import InfoView from './info';

// const App = () => {
//   return (
//     <SafeAreaView>
//       <View style={styles.body}>
//         <GlobalView url={appConstants.base_url} />
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   body: {
//     alignItems: 'center',
//   },
// });

// export default App;

import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer name="name ">
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={GlobalView} />
        <Drawer.Screen name="Info" component={InfoView} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
