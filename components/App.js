//COVID Tracker
//Created by Aravindh Kumar

import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, View, Text, Button} from 'react-native';

import * as appConstants from '../utils/constants';
import GlobalView from './global_view';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.body}>
        <GlobalView url={appConstants.base_url} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
  },
});

export default App;
