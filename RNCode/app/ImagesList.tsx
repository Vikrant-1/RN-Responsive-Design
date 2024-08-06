import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { photos } from "@/assets/data";

const screenWidth = Dimensions.get("window").width;

const ImagesList = () => {
    
  return (
    <View style={styles.container}>
      <FlatList
        data={photos}
        style={{ width: screenWidth }}
        contentContainerStyle={{ gap: 2 }}
        columnWrapperStyle={{ gap: 2 }}
        renderItem={({ item }) => {
          return (
            <Image
              source={item.image}
              style={{ width: `${100 / 4}%`, aspectRatio: 1 }}
            />
          );
        }}
        keyExtractor={(item) => item.id.toString()}
        numColumns={4}
      />
    </View>
  );
};

export default ImagesList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
      flex: 1,
  },
  image: {
    width: (screenWidth) / 4, // Adjust width for 4 columns with padding
    aspectRatio: 1, // Maintain square aspect ratio
  },
});
