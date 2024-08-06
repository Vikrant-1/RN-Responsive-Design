import { Ionicons } from "@expo/vector-icons";
import { Link, useNavigation } from "expo-router";
import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

type Item = {
  id: string;
  title: string;
  navigateTo: string;
};

const data: Item[] = [
  {
    id: "1",
    title: "Fluid Grid",
    navigateTo: "FluidGrid",
  },
  {
    id: "2",
    title: "Flexible Images",
    navigateTo: "FlexibleImages",
  },
  {
    id: "3",
    title: "Mdeia Queries",
    navigateTo: "MediaQueries",
  },
  {
    id: "4",
    title: "Responsive vs Adaptive Design",
    navigateTo: "ResvsAdoptiveDesign",
  },
  {
    id: "5",
    title: "React native css",
    navigateTo: "RNcss",
  },
];

const basicData: Item[] = [
  {
    id: "1",
    title: "Basic Flex",
    navigateTo: "BasicFlex",
  },
];

const libraryData: Item[] = [
  {
    id: '1',
    title: 'React Native Responsive Screen',
    navigateTo: 'ResponsiveScreen'
  }
];

const App = () => {
  const navigation = useNavigation();
  const onPressNavigate = (screen: string) => {
    navigation.navigate(screen);
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Layout</Text>
      {basicData.map((item) => {
        const { navigateTo = "", id = "", title = "" } = item;
        return (
          <Pressable
            onPress={() => onPressNavigate(navigateTo)}
            key={id}
            style={styles.item}
          >
            <Text style={styles.title}>{title}</Text>
            <Ionicons name="arrow-forward-outline" color={"#000"} size={18} />
          </Pressable>
        );
      })}

      <View style={styles.sperator} />

      <Text style={styles.heading}>Key Principles of Responsive Design</Text>
      {data.map((item) => {
        const { navigateTo = "", id = "", title = "" } = item;
        return (
          <Pressable
            onPress={() => onPressNavigate(navigateTo)}
            key={id}
            style={styles.item}
          >
            <Text style={styles.title}>{title}</Text>
            <Ionicons name="arrow-forward-outline" color={"#000"} size={18} />
          </Pressable>
        );
      })}

      <View style={styles.sperator} />

      <Text style={styles.heading}>Packages for Responsive Design</Text>
      {libraryData.map((item) => {
        const { navigateTo = "", id = "", title = "" } = item;
        return (
          <Pressable
            onPress={() => onPressNavigate(navigateTo)}
            key={id}
            style={styles.item}
          >
            <Text style={styles.title}>{title}</Text>
            <Ionicons name="arrow-forward-outline" color={"#000"} size={18} />
          </Pressable>
        );
      })}
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f9f9f9",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 5,
    width: "100%",
    marginTop: 10
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
  },
  sperator: {
    marginTop: 50,
  },
});
