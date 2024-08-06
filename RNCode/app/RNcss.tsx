import { StyleSheet, Text, View } from "react-native";
import React from "react";

const RNcss = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Box 1</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>Box 2</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>Box 3</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>Box 4</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>Box 5</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>Box 6</Text>
      </View>
    </View>
  );
};

export default RNcss;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "row", 
    // flexWrap: 'wrap', 
    // alignContent: 'flex-start',
    justifyContent: "center", 
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    textAlign: "center",
  },
});
