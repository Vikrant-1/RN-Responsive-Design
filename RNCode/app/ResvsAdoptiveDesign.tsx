import React from "react";
import {
  Text,
  View,
  StyleSheet,
  useWindowDimensions,
} from "react-native";

const ResponsiveDesign = () => {
  return (
    <View style={resStyles.container}>
      <View style={resStyles.box}>
        <Text style={resStyles.text}>Responsive Box</Text>
      </View>
    </View>
  );
};

const AdaptiveDesign = () => {
  const { width } = useWindowDimensions();
  const isLargeScreen = width > 600;

  return (
    <View style={styles.container}>
      {isLargeScreen ? (
        <View style={styles.largeBox}>
          <Text style={styles.text}>Large Screen Box</Text>
        </View>
      ) : (
        <View style={styles.smallBox}>
          <Text style={styles.text}>Small Screen Box</Text>
        </View>
      )}
    </View>
  );
};

const ResvsAdoptiveDesign = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>Responsive Design</Text>
      <ResponsiveDesign />
      <Text>Adaptive Design</Text>
      <AdaptiveDesign />
    </View>
  );
};

export default ResvsAdoptiveDesign;

const resStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: "80%", // Use percentage-based width for responsiveness
    maxWidth: 600, // Optional: Set a maximum width
    height: 100,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 18,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  largeBox: {
    width: "50%",
    height: 100,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
  smallBox: {
    width: "80%",
    height: 100,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 18,
  },
});
