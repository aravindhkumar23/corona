//COVID Tracker
//Created by Aravindh Kumar

import React from 'react';
import {StyleSheet, View, Text, Linking} from 'react-native';
import HeaderView from './header';

export default function InfoView({navigation}) {
  return (
    <View>
      <HeaderView navigation={navigation}></HeaderView>

      <View style={styles.body}>
        <Text style={styles.sectionContent}>
          Thanks @WesBos for providing the public api.
        </Text>
        <Text style={styles.sectionContent}>
          This app is build to learn the hooks concept not for the commercial
          purpose.
        </Text>
        <Text style={styles.sectionContent}>
          The source code for the react native app is available in
          <Text
            style={{color: 'blue'}}
            onPress={() =>
              Linking.openURL('https://github.com/aravindhkumar23/corona')
            }>
            {' '}
            github
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
    padding: 20,
  },
  sectionContent: {
    textAlign: 'justify',
    fontSize: 18,
    fontWeight: '600',
  },
});

// export default GlobalView;
