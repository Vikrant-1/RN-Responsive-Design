import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";

const BasicFlex = () => {
  const [flex1, setFlex1] = useState(1);
  const [flex3, setFlex3] = useState(3);
  const [flex5, setFlex5] = useState(5);

  return (
    <View style={styles.container}>
        <View style={[styles.basic, { flex: flex1, backgroundColor: "red" }]}>
          <Text style={styles.text}>Flex {flex1}</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={String(flex1)}
            onChangeText={(text) => setFlex1(Number(text))}
          />
        </View>
        <View style={[styles.basic, { flex: flex3, backgroundColor: "green" }]}>
          <Text style={styles.text}>Flex {flex3}</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={String(flex3)}
            onChangeText={(text) => setFlex3(Number(text))}
          />
        </View>
        <View style={[styles.basic, { flex: flex5, backgroundColor: "blue" }]}>
          <Text style={styles.text}>Flex {flex5}</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={String(flex5)}
            onChangeText={(text) => setFlex5(Number(text))}
          />
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    width: 50,
    textAlign: 'center',
    color: '#fff',
  },
});