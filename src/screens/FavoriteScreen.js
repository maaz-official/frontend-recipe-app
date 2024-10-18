// screens/FavoriteScreen.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Recipe from '../components/Recipe'; // Assuming you have a Recipe component
import { useState } from 'react';

const FavoriteScreen = ({ navigation }) => {
  // Sample favorite recipes array, you can replace this with real data
  const [favoriteRecipes, setFavoriteRecipes] = useState([
    { id: '1', title: 'Spaghetti Bolognese', description: 'Classic Italian pasta dish.', image: 'https://example.com/image1.jpg' },
    { id: '2', title: 'Chicken Curry', description: 'Delicious spicy curry.', image: 'https://example.com/image2.jpg' },
    // Add more favorites here
  ]);

  const handleRecipePress = (recipe) => {
    navigation.navigate('RecipeDetail', { recipe });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Favorite Recipes</Text>

      {favoriteRecipes.length > 0 ? (
        <FlatList
          data={favoriteRecipes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleRecipePress(item)}>
              <Recipe recipe={item} />
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text style={styles.noFavorites}>You have no favorite recipes yet.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  noFavorites: {
    fontSize: 18,
    color: '#888',
    textAlign: 'center',
    marginTop: 50,
  },
});

export default FavoriteScreen;
