import { Link } from 'expo-router';
import { FlatList, StyleSheet, Text, View } from 'react-native';


type Item = {
    id: string;
    title: string;
    navigateTo: string;
};

const data: Item[] = [
    {
        id: '1',
        title: 'Fluid Grid',
        navigateTo: '/FluidGrid',
    },
    {
        id: '2',
        title: 'Responsive Design',
        navigateTo: '/FluidGrid',
    },
    {
        id: '3',
        title: 'Flexbox',
        navigateTo: '/FluidGrid',
    },
];

const App = () => {
    return (
        <View style={styles.container} >
            <Text style={styles.heading} >
                Topics
            </Text>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return (
                        <Link style={styles.link} href={item.navigateTo} >
                            <View style={styles.itemView} >
                                <Text style={styles.title} >
                                    {item.title}
                                </Text>
                            </View>
                        </Link>
                    )
                }}
            />
        </View>
    )
}

export default App;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    link: {
        marginTop: 15,
        paddingVertical: 15,
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20
    },
    itemView: {
        padding: 20,
        width: '100%',
        backgroundColor: '#f9f9f9',
        marginBottom: 10
    },
    title: {
        fontSize: 16
    }

});