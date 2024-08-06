import React from "react";
import { Text, View, StyleSheet, useWindowDimensions } from "react-native";

// Responsive Design Component
const ResponsiveDesign = () => {
  return (
    <View style={resStyles.container}>
      <View style={resStyles.box}>
        <Text style={resStyles.text}>Responsive Box</Text>
      </View>
    </View>
  );
};

// Adaptive Design Component
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

// Main Component to showcase both Responsive and Adaptive Design
const ResvsAdoptiveDesign = () => {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={styles.definitionTitle}>Responsive Design</Text>
      <Text style={styles.definitionText}>
        Responsive design adjusts the layout based on the available space using
        percentage-based widths or other relative units.
      </Text>
      <ResponsiveDesign />
      <Text style={styles.definitionTitle}>Adaptive Design</Text>
      <Text style={styles.definitionText}>
        Adaptive design adjusts the layout based on specific breakpoints, such
        as screen width, to provide an optimal user experience on different
        devices.
      </Text>
      <AdaptiveDesign />
    </View>
  );
};

export default ResvsAdoptiveDesign;

// Styles for Responsive Design
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

// Styles for Adaptive Design and Main Component
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
  definitionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  definitionText: {
    fontSize: 16,
    marginBottom: 20,
  },
});
