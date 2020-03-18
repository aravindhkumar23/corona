//COVID Tracker
//Created by Aravindh Kumar

import React from 'react';
import {StyleSheet, View, Text, TouchableHighlight, Image} from 'react-native';
import * as appConstants from '../utils/constants';

export default function HeaderView({navigation}) {
  return (
    <View style={styles.body}>
      <View style={{flex: 1, alignItems: 'flex-end'}}>
        <TouchableHighlight
          onPress={() => navigation.openDrawer()}
          underlayColor="transparent">
          <Image
            source={require('../assets/menu.png')}
            style={{height: 20, width: 25, resizeMode: 'contain'}}
          />
        </TouchableHighlight>
      </View>
      <View style={{flex: 11, alignItems: 'center'}}>
        <Text style={styles.sectionTitle}>COVID Tracker</Text>
      </View>
      <View style={{flex: 1, alignItems: 'flex-end'}}>
        <TouchableHighlight
          onPress={() => navigation.navigate('Info')}
          underlayColor="transparent">
          <Image
            source={require('../assets/info.png')}
            style={{height: 20, width: 25, resizeMode: 'contain'}}
          />
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15.0,
    backgroundColor: '#2f62f2',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
});

// export default GlobalView;
