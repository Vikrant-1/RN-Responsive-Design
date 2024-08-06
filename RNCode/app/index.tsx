import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import {
  SectionList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

type Item = {
  id: string;
  title: string;
  navigateTo: string;
};

const sections = [
  {
    title: "Layout",
    data: [
      {
        id: "1",
        title: "Basic Flex",
        navigateTo: "BasicFlex",
      },
    ],
  },
  {
    title: "Key Principles of Responsive Design",
    data: [
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
        title: "Media Queries",
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
    ],
  },
  {
    title: "Packages for Responsive Design",
    data: [
      {
        id: '1',
        title: 'React Native Size Matters',
        navigateTo: 'ResponsiveScreen'
      },
      {
        id: '2',
        title: 'React Native Responsive Font Size',
        navigateTo: 'ResponsiveText'
      }
    ],
  },
  {
    title: "Examples",
    data: [
      {
        id: '1',
        title: 'Images List using Grid',
        navigateTo: 'ImagesList'
      },
      {
        id: '2',
        title: 'Orientation',
        navigateTo: 'Orientation'
      }
    ],
  },
];

const App = () => {
  const navigation = useNavigation();
  const onPressNavigate = (screen: string) => {
    navigation.navigate(screen);
  };

  return (
    <SectionList
      sections={sections}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => onPressNavigate(item.navigateTo)}
          style={styles.item}
        >
          <Text style={styles.title}>{item.title}</Text>
          <Ionicons name="arrow-forward-outline" color={"#000"} size={18} />
        </Pressable>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.heading}>{title}</Text>
      )}
      contentContainerStyle={styles.container}
    />
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 100,
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
    marginTop: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical:10,
  },
  title: {
    fontSize: 16,
  },

});