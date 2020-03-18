//COVID Tracker
//Created by Aravindh Kumar

import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Button} from 'react-native';
import * as appConstants from '../utils/constants';
import HeaderView from './header';

import ChooseByCountry from './choose_by_country';
import StatisticsView from './statistics_view';
import {ScrollView} from 'react-native-gesture-handler';

export default function HomePage({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.body}>
          <HeaderView navigation={navigation}></HeaderView>
          <StatisticsView url={appConstants.base_url} showDate={true} />
          <ChooseByCountry />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    // alignItems: 'center',
  },
  cardStyle: {
    margin: 10,
    width: '70%',
    padding: 20.0,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
  },
  casesRate: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  deathRate: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
  },
  recoveryRate: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
  },
});
