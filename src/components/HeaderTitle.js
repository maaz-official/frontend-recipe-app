// src/components/HeaderTitle.js
import React from 'react';
import { Text, StyleSheet } from 'react-native';

const HeaderTitle = ({ title }) => {
    return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff', // Set the text color
        flex: 1, // Use flex to occupy the available space
    },
});

export default HeaderTitle;
