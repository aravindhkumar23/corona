//COVID Tracker
//Created by Aravindh Kumar

import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, View, Text, Button} from 'react-native';
import * as appConstants from '../utils/constants';
import HeaderView from './header';

import getDataFrom from '../utils/getDataFromApi';
import CardView from 'react-native-cardview';

export default function GlobalView({navigation}) {
  const {stats, loading, error} = getDataFrom(appConstants.base_url);
  console.log('logging GlobalView.js ----------->>>>>>>');
  console.log(stats, loading, error);
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error... {JSON.stringify(stats)}</Text>;

  const cardElevation = 20;
  const cardMaxElevation = 20;
  return (
    <View style={styles.body}>
      <HeaderView navigation={navigation}></HeaderView>
      <CardView
        cardElevation={cardElevation}
        cardMaxElevation={cardMaxElevation}
        cornerRadius={5}
        style={[styles.cardStyle, {marginTop: 30}]}>
        <Text style={styles.sectionTitle}>Coronavirus Cases:</Text>
        <Text style={styles.casesRate}>{stats.confirmed.value}</Text>
      </CardView>
      <CardView
        cardElevation={cardElevation}
        cardMaxElevation={cardMaxElevation}
        cornerRadius={5}
        style={styles.cardStyle}>
        <Text style={styles.sectionTitle}>Deaths:</Text>
        <Text style={styles.deathRate}>{stats.deaths.value}</Text>
      </CardView>
      <CardView
        cardElevation={cardElevation}
        cardMaxElevation={cardMaxElevation}
        cornerRadius={5}
        style={styles.cardStyle}>
        <Text style={styles.sectionTitle}>Recovered:</Text>
        <Text style={styles.recoveryRate}>{stats.recovered.value}</Text>
      </CardView>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
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
