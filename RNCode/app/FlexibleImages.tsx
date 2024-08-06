import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

const { width: screenWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  image: {
    width: screenWidth * 0.8, // 80% of screen width
    aspectRatio: 4 / 3, // Maintain aspect ratio of 4:3
    height: undefined,
    marginBottom: 20,
  },
  text: {
    fontSize: screenWidth * 0.05, // 5% of screen width
    textAlign: "center",
  },
});

const ResponsiveExample = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/photos/image-4.jpg")}
        style={styles.image}
      />
      <Text style={styles.text}>
        This is a responsive text that scales with the screen size.
      </Text>
    </View>
  );
};

export default ResponsiveExample;