// src/screens/CategoryScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from '../styles/categoryScreenStyles'; // Create a separate styles file
import Icon from 'react-native-vector-icons/FontAwesome';

const categories = [
  { id: '1', name: 'Breakfast', icon: 'coffee' },
  { id: '2', name: 'Lunch', icon: 'cutlery' },
  { id: '3', name: 'Dinner', icon: 'spoon' },
  { id: '4', name: 'Desserts', icon: 'birthday-cake' },
  { id: '5', name: 'Drinks', icon: 'glass' },
];

const CategoryScreen = ({ navigation }) => {
  // Navigate to filtered recipes by category
  const navigateToCategory = (categoryName) => {
    console.log('Navigating to category:', categoryName);
    navigation.navigate('Home', { category: categoryName });
  };

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity style={styles.categoryItem} onPress={() => navigateToCategory(item.name)}>
      <Icon name={item.icon} size={24} color="#FFA500" style={styles.categoryIcon} />
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      
      {/* Categories List */}
      <FlatList
        data={categories}
        keyExtractor={item => item.id}
        renderItem={renderCategoryItem}
        contentContainerStyle={styles.categoryList}
      />

    </View>
  );
};

export default CategoryScreen;
