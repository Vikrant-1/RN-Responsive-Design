import { StyleSheet, Text, View, Dimensions, useWindowDimensions } from "react-native";
import React from "react";

const MediaQueries = () => {
  const { width } = useWindowDimensions();
  const isLargeScreen = width > 600;

  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.box1, isLargeScreen ? styles.largeBox : styles.smallBox]}>
        <Text style={styles.text}>Box 1</Text>
      </View>
      <View style={[styles.box, styles.box2, isLargeScreen ? styles.largeBox : styles.smallBox]}>
        <Text style={styles.text}>Box 2</Text>
      </View>
      <View style={[styles.box, styles.box3, isLargeScreen ? styles.largeBox : styles.smallBox]}>
        <Text style={styles.text}>Box 3</Text>
      </View>
      <View style={[styles.box, styles.box4, isLargeScreen ? styles.largeBox : styles.smallBox]}>
        <Text style={styles.text}>Box 4</Text>
      </View>
    </View>
  );
};

export default MediaQueries;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    height: 100,
    flexGrow: 1,
  },
  box1: {
    backgroundColor: 'red',
  },
  box2: {
    backgroundColor: 'blue',
  },
  box3: {
    backgroundColor: 'green',
  },
  box4: {
    backgroundColor: 'yellow',
  },
  largeBox: {
    flexBasis: '22%', // Adjust width for large screens
  },
  smallBox: {
    flexBasis: '45%', // Adjust width for small screens
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});