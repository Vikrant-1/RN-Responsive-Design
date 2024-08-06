import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 1.5,
  },
});

const FlexibleImages = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require("../assets/photos/image-4.jpg")}
        style={styles.image}
      />
    </ScrollView>
  );
};

export default FlexibleImages;
