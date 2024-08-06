import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";

type Item = {
  id: string;
  title: string;
  navigateTo: string;
};

const data: Item[] = [
  {
    id: "1",
    title: "Fluid Grid",
    navigateTo: "/FluidGrid",
  },
  {
    id: "2",
    title: "Flexible Images",
    navigateTo: "/FlexibleImages",
  },
  {
    id: "3",
    title: "Flexbox",
    navigateTo: "/FluidGrid",
  },
];

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Topics</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <Link style={styles.link} href={item.navigateTo}>
              <View style={styles.item}>
                <Text style={styles.title}>{item.title}</Text>
                <Ionicons
                  name="arrow-forward-outline"
                  color={"#000"}
                  size={18}
                />
              </View>
            </Link>
          );
        }}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  link: {
    marginTop: 10,
  },
  item: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f9f9f9",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
  },
});
