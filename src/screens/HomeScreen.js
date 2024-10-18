import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import Recipe from '../components/Recipe'; // Assuming Recipe is a card component
import recipes from '../data'; // Import the recipe array
import BottomMenu from '../components/BottomMenu'; // Import BottomMenu
import tw from 'twrnc'; // Assuming you're using the twrnc library for Tailwind CSS in React Native

const HomeScreen = ({ navigation }) => {
  const handleRecipePress = (recipe) => {
    navigation.navigate('RecipeDetail', { recipe });
  };

  // Recipe card rendering
  const renderRecipeItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleRecipePress(item)} style={tw`flex-1`}>
      <Recipe recipe={item} />
    </TouchableOpacity>
  );

  return (
    <View style={tw`flex-1 bg-gray-100`}>
      {/* FlatList for recipe cards with 2 columns */}
      <FlatList
        data={recipes}
        renderItem={renderRecipeItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        numColumns={2} // Fixed at 2 columns
        contentContainerStyle={tw`p-1`} // Padding around the FlatList
      />
      
      {/* BottomMenu */}
      <BottomMenu navigation={navigation} />
    </View>
  );
};

export default HomeScreen;
