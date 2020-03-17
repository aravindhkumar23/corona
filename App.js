import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, View, Text, Button} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [pizzaCount, setpizzaCount] = useState(0);

  useEffect(() => {
    if (pizzaCount >= 42) {
      setpizzaCount(42);
    }
  });

  return (
    <SafeAreaView>
      <View style={styles.body}>
        <Text>Ordered {pizzaCount} pizzas.</Text>
        <Button
          onPress={() => setpizzaCount(pizzaCount + 1)}
          title="Add Pizza!"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
});

export default App;
