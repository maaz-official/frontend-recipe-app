import React, { useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";
import tw from "twrnc"; 
import Icon from "react-native-vector-icons/FontAwesome"; 
import BottomMenu from "../components/BottomMenu"; 

const RecipeDetail = ({ route, navigation }) => {
  const { recipe } = route.params;
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavorite = () => {
    setIsFavorited(!isFavorited);
    console.log("Recipe favorited:", recipe.title);
  };

  const handleShare = (platform) => {
    console.log("Sharing to:", platform);
  };

  return (
    <View style={tw`flex-1 bg-white`}>
      <ScrollView style={tw`p-4`}>
        <Swiper
          style={tw`h-64`}
          showsButtons={true}
          autoplay={true}
          dotStyle={tw`bg-gray-300`}
          activeDotStyle={tw`bg-blue-500`}
          paginationStyle={tw`bottom-5`}
        >
          {recipe.recipesImages && recipe.recipesImages.length > 0 ? (
            recipe.recipesImages.map((img, index) => (
              <Image
                key={index}
                source={{ uri: img }}
                style={tw`w-full h-full rounded-lg`}
                resizeMode="cover"
              />
            ))
          ) : (
            <Image
              source={{ uri: "default_image_url_here" }}
              style={tw`w-full h-full rounded-lg`}
              resizeMode="cover"
            />
          )}
        </Swiper>

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

        <Text style={tw`mt-6 text-lg font-semibold text-gray-800`}>
          Share Our Recipes:
        </Text>
        <View style={tw`flex-row mt-2 gap-4`}>
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
          {/* Other social media buttons with text wrapped */}
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

      <BottomMenu navigation={navigation} />
    </View>
  );
};

export default RecipeDetail;
