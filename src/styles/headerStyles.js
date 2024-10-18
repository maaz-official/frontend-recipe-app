// src/styles/headerStyles.js
import { StyleSheet } from 'react-native';
import colors from './colors'; // Assuming you have a colors.js file

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 'px',
        padding: 10,
        backgroundColor: colors.accentText, // Replace with your primary color
    },
    headerTitle: {
        fontSize: 18,
        color: '#fff', // Adjust based on your design
    },
    
});

export default styles;
