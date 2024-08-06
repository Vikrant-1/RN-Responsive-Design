import React from 'react';
import { View, StyleSheet } from 'react-native';

const FluidGridExample = () => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={[styles.box, styles.red]} />
                <View style={[styles.box, styles.blue]} />
                <View style={[styles.box, styles.green]} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 10,
    },
    box: {
        flex: 1,
        height: 200,
        marginHorizontal: 5,
        borderRadius:6
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
});

export default FluidGridExample;