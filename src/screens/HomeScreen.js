import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Gradient background
import Recipe from '../components/Recipe'; // Assuming Recipe is a card component
import recipes from '../data'; // Import the recipe array
import BottomMenu from '../components/BottomMenu'; // Import BottomMenu
// import Icon from 'react-native-vector-icons/FontAwesome'; // For icons
import * as Animatable from 'react-native-animatable'; // Animations

const HomeScreen = ({ navigation }) => {
  const handleRecipePress = (recipe) => {
    navigation.navigate('RecipeDetail', { recipe });
  };

  // Recipe card rendering with animations
  const renderRecipeItem = ({ item, index }) => (
    <Animatable.View
      animation="fadeInUp"
      delay={index * 100} // Adding delay for a smooth staggered animation effect
      style={styles.card}
    >
      <TouchableOpacity onPress={() => handleRecipePress(item)}>
        <Recipe recipe={item} />
      </TouchableOpacity>
    </Animatable.View>
  );

  return (
    <LinearGradient colors={['#FFDEE9', '#B5FFFC']} style={styles.container}>
      {/* Header */}
      {/* <Animatable.View animation="fadeInDown" style={styles.headerContainer}>
        <Text style={styles.header}>Explore Delicious Recipes</Text>
        <TouchableOpacity style={styles.searchButton}>
          <Icon name="search" size={20} color="#fff" />
        </TouchableOpacity>
      </Animatable.View> */}

      {/* FlatList for recipe cards */}
      <FlatList
        data={recipes}
        renderItem={renderRecipeItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.recipeList}
        showsVerticalScrollIndicator={false}
      />

      {/* BottomMenu */}
      <BottomMenu navigation={navigation} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background for header
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10, // Shadow for Android
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  searchButton: {
    backgroundColor: '#FFA500',
    borderRadius: 30,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
  },
  recipeList: {
    paddingHorizontal: 20,
    paddingBottom: 100, // Leave space for BottomMenu
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 20,
    padding: 15,
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8, // Shadow for Android
    transform: [{ scale: 1 }], // This can be animated for hover effects later
  },
});

export default HomeScreen;
