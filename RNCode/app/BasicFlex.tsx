import { StyleSheet, Text, View } from "react-native";
import React from "react";



const BasicFlex = () => {
  
  return (
    <View style={styles.container}>
      <View style={[styles.basic, { flex: 1, backgroundColor: "red" }]}>
        <Text style={styles.text}>Flex 1</Text>
      </View>
      <View style={[styles.basic, { flex: 3, backgroundColor: "green" }]}>
        <Text style={styles.text}>Flex 3</Text>
      </View>
      <View style={[styles.basic, { flex: 5, backgroundColor: "blue" }]}>
        <Text style={styles.text}>Flex 5</Text>
      </View>
    </View>
  );
};

export default BasicFlex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    color: "#fff",
  },
  basic: {
    justifyContent: "center",
    alignItems: "center",
  },
});
