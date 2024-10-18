// src/components/RecipeDetail.js
import React, { useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper"; // Import Swiper
import tw from "twrnc"; // Import Tailwind CSS utility
import Icon from "react-native-vector-icons/FontAwesome"; // Import FontAwesome icons
import BottomMenu from "../components/BottomMenu"; // Import BottomMenu

const RecipeDetail = ({ route, navigation }) => {
  const { recipe } = route.params;
  const [isFavorited, setIsFavorited] = useState(false);

  // Toggle favorite status
  const handleFavorite = () => {
    setIsFavorited(!isFavorited);
    console.log("Recipe favorited:", recipe.title);
  };

  // Handle social sharing
  const handleShare = (platform) => {
    console.log("Sharing to:", platform);
    // Implement your share functionality here
  };

  return (
    <View style={tw`flex-1 bg-white`}>
      <ScrollView style={tw`p-4`}>
        {/* Swiper for Images Section */}
        <Swiper
          style={tw`h-64`} // Height for the swiper
          showsButtons={true}
          autoplay={true} // Enable autoplay
          dotStyle={tw`bg-gray-300`} // Style for inactive dots
          activeDotStyle={tw`bg-blue-500`} // Style for active dot
          paginationStyle={tw`bottom-5`} // Position for pagination dots
        >
          {recipe.recipesImages && recipe.recipesImages.length > 0 ? (
            recipe.recipesImages.map((img, index) => (
              <Image
                key={index}
                source={{ uri: img }}
                style={tw`w-full h-full rounded-lg`}
                resizeMode="cover" // Ensure images cover the area nicely
              />
            ))
          ) : (
            <Image
              source={{ uri: "default_image_url_here" }} // Use a default image if no images are available
              style={tw`w-full h-full rounded-lg`}
              resizeMode="cover"
            />
          )}
        </Swiper>

        {/* Recipe Description and Details */}
        <Text style={tw`mt-4 text-2xl font-bold text-gray-800`}>
          {recipe.title || "Untitled Recipe"}
        </Text>
        <Text style={tw`mt-2 text-lg text-gray-600`}>
          {recipe.description || "No description available."}
        </Text>
        <Text style={tw`text-gray-600`}>
          Category:{" "}
          <Text style={tw`font-medium text-gray-800`}>
            {recipe.category || "N/A"}
          </Text>
        </Text>
        <Text style={tw`text-gray-600`}>
          Tags:{" "}
          <Text style={tw`font-medium text-gray-800`}>
            {recipe.tags ? recipe.tags.join(", ") : "No tags"}
          </Text>
        </Text>
        <Text style={tw`text-gray-600`}>
          Date:{" "}
          <Text style={tw`font-medium text-gray-800`}>
            {recipe.date || "Unknown"}
          </Text>
        </Text>

        {/* Heading for Social Sharing */}
        <Text style={tw`mt-6 text-lg font-semibold text-gray-800`}>
          Share Our Recipes:
        </Text>
        <View style={tw`flex-row mt-2 gap-13`}>
          {/* Favorite Button */}
          <TouchableOpacity
            onPress={handleFavorite}
            style={tw`p-2 rounded-lg hover:bg-gray-200`}
          >
            <Icon
              name={isFavorited ? "heart" : "heart-o"}
              size={28}
              color={isFavorited ? "red" : "gray"}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleShare("facebook")}
            style={tw`p-2 rounded-lg hover:bg-gray-200`}
          >
            <Icon name="facebook" size={28} color="#3b5998" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleShare("twitter")}
            style={tw`p-2 rounded-lg hover:bg-gray-200`}
          >
            <Icon name="twitter" size={28} color="#1DA1F2" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleShare("instagram")}
            style={tw`p-2 rounded-lg hover:bg-gray-200`}
          >
            <Icon name="instagram" size={28} color="#C13584" />
          </TouchableOpacity>
        </View>

        {/* Ingredients Section */}
        <Text style={tw`mt-6 text-lg font-semibold text-gray-800`}>
          Ingredients:
        </Text>
        <View style={tw`mt-2 border-l-4 border-blue-500 pl-4`}>
          {recipe.ingredients && recipe.ingredients.length > 0 ? (
            recipe.ingredients.map((ingredient, index) => (
              <View key={index} style={tw`flex-row items-center mb-1`}>
                <Icon name="check" size={20} color="green" />
                <Text style={tw`ml-2 text-gray-700`}>{ingredient}</Text>
              </View>
            ))
          ) : (
            <Text style={tw`text-gray-600`}>No ingredients listed.</Text>
          )}
        </View>

        {/* Instructions Section */}
        <Text style={tw`mt-6 text-lg font-semibold text-gray-800`}>
          Instructions:
        </Text>
        <View style={tw`mt-2 border-l-4 border-blue-500 pl-4 mb-6`}>
          {recipe.instructions && recipe.instructions.length > 0 ? (
            recipe.instructions.map((instruction, index) => (
              <View key={index} style={tw`flex-row items-center mb-2`}>
                <Text style={tw`font-semibold text-gray-800`}>
                  {index + 1}.
                </Text>
                <Text style={tw`ml-2 text-gray-700`}>{instruction}</Text>
              </View>
            ))
          ) : (
            <Text style={tw`text-gray-600`}>No instructions provided.</Text>
          )}
        </View>
      </ScrollView>

      {/* BottomMenu added here */}
      <BottomMenu navigation={navigation} />
    </View>
  );
};

export default RecipeDetail;
