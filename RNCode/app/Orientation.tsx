import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import { photos } from "@/assets/data";

const App = () => {
  const [orientation, setOrientation] = useState("unknown");

  useEffect(() => {
    // Function to update orientation state
    const updateOrientation = async () => {
      const orientationInfo = await ScreenOrientation.getOrientationAsync();
      setOrientation(orientationInfo);
    };

    // Update orientation state when component mounts
    updateOrientation();

    // Add event listener for orientation changes
    const subscription = ScreenOrientation.addOrientationChangeListener(
      ({ orientationInfo }) => {
        setOrientation(orientationInfo.orientation);
      }
    );

    // Clean up event listener on component unmount
    return () => {
      subscription.remove();
    };
  }, []);

  // Function to lock orientation
  const lockOrientation = async (orientation) => {
    await ScreenOrientation.lockAsync(orientation);
  };

  return (
    <View style={styles.container}>
      <Text>Current orientation: {orientation}</Text>
      <Button
        title="Lock to Portrait"
        onPress={() =>
          lockOrientation(ScreenOrientation.OrientationLock.PORTRAIT_UP)
        }
      />
      <Button
        title="Lock to Landscape"
        onPress={() =>
          lockOrientation(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT)
        }
      />
      <ScrollView
        contentContainerStyle={{
          flexDirection: "row",
          marginTop: 10,
          flexWrap: "wrap",
          paddingBottom: 50,
        }}
      >
        {photos.slice(0, 15).map((item) => (
          <Image
            key={item.id}
            source={item.image}
            style={{ width: `${100 / 4}%`, aspectRatio: 1 }}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
