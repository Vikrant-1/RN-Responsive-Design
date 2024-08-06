import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";

const RNcss = () => {
  const [flexDirection, setFlexDirection] = useState("column");
  const [flexWrap, setFlexWrap] = useState("nowrap");

  const toggleFlexDirection = () => {
    setFlexDirection((prev) => (prev === "column" ? "row" : "column"));
  };

  const toggleFlexWrap = () => {
    setFlexWrap((prev) => (prev === "nowrap" ? "wrap" : "nowrap"));
  };

  return (
    <View style={styles.container}>
      <Button title={flexDirection === 'row' ? 'Direction to Col':'Direction to Row'} onPress={toggleFlexDirection} />
      <Button title={flexWrap === 'wrap'? 'Un Wrap content' :'Wrap Content'} onPress={toggleFlexWrap} />
      <View style={[styles.boxContainer, { flexDirection, flexWrap }]}>
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
    </View>
  );
};

export default RNcss;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  boxContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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