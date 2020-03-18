//COVID Tracker
//Created by Aravindh Kumar

import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Button} from 'react-native';
import * as appConstants from '../utils/constants';
import HeaderView from './header';

export default function InfoView({navigation}) {
  return (
    <View style={styles.body}>
      <HeaderView navigation={navigation}></HeaderView>
      <Text style={{padding: 20, textAlign: 'justify'}}>
        Informations -- thanks @WesBos for providing the public api, This app is
        build to learn the hooks concept not for the commercial purpose
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
});

// export default GlobalView;
