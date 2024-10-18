import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Recipe = ({ recipe }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: recipe.image }} style={styles.image} />
      {/* All text elements should be wrapped inside <Text> components */}
      <Text style={styles.title}>{recipe.title}</Text>
      <Text style={styles.description}>{recipe.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
});

export default Recipe;
