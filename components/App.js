// //COVID Tracker
// //Created by Aravindh Kumar

import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomePage from './home_view';
import InfoView from './info';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer name="name ">
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomePage} />
        <Drawer.Screen name="Info" component={InfoView} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
