//COVID Tracker
//Created by Aravindh Kumar

import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, View, Text, Button} from 'react-native';
import * as appConstants from '../utils/constants';

import getDataFrom from '../utils/getDataFromApi';

export default function GlobalView({url}) {
  const {stats, loading, error} = getDataFrom(url);
  console.log('logging GlobalView.js ----------->>>>>>>' + url);
  console.log(stats, loading, error);
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error... {JSON.stringify(stats)}</Text>;

  return (
    <View style={styles.body}>
      <Text>Confirmed Cases = {stats.confirmed.value}</Text>
      <Text>Deaths Cases = {stats.deaths.value}</Text>
      <Text>Recovered Cases = {stats.recovered.value}</Text>
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
