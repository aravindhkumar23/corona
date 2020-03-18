//COVID Tracker
//Created by Aravindh Kumar

import React from 'react';
import {ActivityIndicator, StyleSheet, View, Text} from 'react-native';
import getDataFrom from '../utils/getDataFromApi';
import CardView from 'react-native-cardview';
import * as appConstants from '../utils/constants';

export default function StatisticsView({url}) {
  const {stats, loading, error} = getDataFrom(url);

  if (loading)
    return (
      <ActivityIndicator size="small" color={appConstants.app_theme_color} />
    );
  if (error) return <Text style={{textAlign: 'center'}}>{error}</Text>;

  const cardElevation = 20;
  const cardMaxElevation = 20;
  return (
    <View style={styles.body}>
      <CardView
        cardElevation={cardElevation}
        cardMaxElevation={cardMaxElevation}
        cornerRadius={5}
        style={[styles.cardStyle, {}]}>
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
