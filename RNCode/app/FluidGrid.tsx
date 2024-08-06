import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';

const FluidGridExample = () => {
    const [justifyContent, setJustifyContent] = useState('flex-start');
    const [alignItems, setAlignItems] = useState('stretch');

    const justifyContentOptions = [
        'flex-start',
        'center',
        'flex-end',
        'space-between',
        'space-around',
        'space-evenly',
    ];

    const alignItemsOptions = [
        'flex-start',
        'center',
        'flex-end',
    ];

    return (
        <View>
            <View style={[styles.row, { justifyContent, alignItems }]}>
                <View style={[styles.box, styles.red]} />
                <View style={[styles.box, styles.blue]} />
                <View style={[styles.box, styles.green]} />
            </View>

            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text style={styles.label}>Justify Content:</Text>
                    {justifyContentOptions.map(option => (
                        <TouchableOpacity
                            key={option}
                            style={styles.button}
                            onPress={() => setJustifyContent(option)}
                        >
                            <Text style={styles.buttonText}>{option}</Text>
                        </TouchableOpacity>
                    ))}
                    <Text style={styles.label}>Align Items:</Text>
                    {alignItemsOptions.map(option => (
                        <TouchableOpacity
                            key={option}
                            style={styles.button}
                            onPress={() => setAlignItems(option)}
                        >
                            <Text style={styles.buttonText}>{option}</Text>
                        </TouchableOpacity>
                    ))}
                    <View style={styles.explanation}>
                        <Text style={styles.explanationText}>
                            The `justifyContent` property aligns children within the main axis of the container.
                        </Text>
                        <Text style={styles.explanationText}>
                            The `alignItems` property aligns children within the cross axis of the container.
                        </Text>
                        <Text style={styles.explanationText}>
                            Use the buttons above to see how different values affect the layout.
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingBottom:500
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        width: '100%',
        height: 300,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    box: {
        width: 50,
        height: 50,
        margin: 5,
        borderRadius: 6,
    },
    red: {
        backgroundColor: 'red',
    },
    blue: {
        backgroundColor: 'blue',
    },
    green: {
        backgroundColor: 'green',
    },
    buttonContainer: {
        marginVertical: 10,
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
        marginVertical: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    explanation: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 6,
    },
    explanationText: {
        fontSize: 16,
        marginBottom: 10,
    },
});

export default FluidGridExample;