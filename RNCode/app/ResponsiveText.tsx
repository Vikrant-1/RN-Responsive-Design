import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const ResponsiveText = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Responsive Text</Text>
      <Text style={styles.subtitle}>This text adjusts based on screen size.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: RFPercentage(3.5), // 3.5% of the screen height
      fontWeight: 'bold',
    color: 'black',
  },
  subtitle: {
    fontSize: RFPercentage(2.5), // 2.5% of the screen height
    color: 'gray',
  },
});

export default ResponsiveText;
