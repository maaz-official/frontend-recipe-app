import React from 'react';
import { View, Text, Image } from 'react-native';
import tw from 'twrnc'; // Assuming you're using Tailwind CSS in your React Native project

const Recipe = ({ recipe }) => {
  return (
    <View style={tw`flex-1 p-2 m-2 bg-white rounded-lg shadow-md`}>
      <Image source={{ uri: recipe.image }} style={tw`w-full h-40 rounded-lg`} resizeMode="cover" />
      <Text style={tw`font-bold text-lg mt-2 text-center`}>{recipe.title}</Text>
      {/* <Text style={tw`text-gray-600 text-sm`}>{recipe.description}</Text> */}
    </View>
  );
};

export default Recipe;
