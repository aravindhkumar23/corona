//COVID Tracker
//Created by Aravindh Kumar

import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  Picker,
  ActivityIndicator,
} from 'react-native';

import * as appConstants from '../utils/constants';
import getDataFrom from '../utils/getDataFromApi';
import CardView from 'react-native-cardview';
import StatisticsView from './statistics_view';

export default function ChooseByCountry() {
  const {stats: countries, loading, error} = getDataFrom(
    appConstants.get_country_url,
  );
  // used for chosen country
  const [selectedCountry, setSelectedCountry] = useState('USA');

  if (loading)
    return (
      <ActivityIndicator size="small" color={appConstants.app_theme_color} />
    );
  if (error) return <Text style={{textAlign: 'center'}}>{error}</Text>;

  return (
    <View style={styles.body}>
      <View
        style={{alignItems: 'center', backgroundColor: 'white', padding: 20}}>
        <Text style={styles.sectionTitle}>
          Currently showing details for {selectedCountry}
        </Text>
        <Picker
          selectedValue={selectedCountry}
          style={{height: 50, width: Dimensions.get('window').width * 0.7}}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedCountry(itemValue)
          }>
          {Object.entries(countries.countries).map(([country, code]) => (
            <Picker.Item
              label={country}
              value={countries.iso3[code]}
              key={code}
            />
          ))}
        </Picker>
      </View>
      <StatisticsView
        url={
          appConstants.get_country_url + '/' + selectedCountry
        }></StatisticsView>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {},
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
