// src/components/RecipeDetail.js
import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper'; // Import Swiper
import styles from '../styles/recipeDetailStyles'; // Import the external styles
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons
import BottomMenu from '../components/BottomMenu'; // Import BottomMenu

const RecipeDetail = ({ route, navigation }) => {
    const { recipe } = route.params;
    const [isFavorited, setIsFavorited] = useState(false);
    const [dropdownVisible, setDropdownVisible] = useState(false); // Dropdown visibility state

    // Toggle favorite status
    const handleFavorite = () => {
        setIsFavorited(!isFavorited);
        console.log('Recipe favorited:', recipe.title);
    };

    // Handle social sharing
    const handleShare = (platform) => {
        console.log('Sharing to:', platform);
        // Implement your share functionality here
    };

    // Toggle dropdown visibility
    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={styles.container}>
                {/* Swiper for Images Section */}
                <Swiper
                    style={styles.imageSwiper}
                    showsButtons={true}
                    autoplay={true} // Enable autoplay
                    dotStyle={styles.dotStyle} // Style for inactive dots
                    activeDotStyle={styles.activeDotStyle} // Style for active dot
                    paginationStyle={styles.paginationStyle} // Position for pagination dots
                >
                    {recipe.recipesImages && recipe.recipesImages.length > 0 ? (
                        recipe.recipesImages.map((img, index) => (
                            <Image 
                                key={index} 
                                source={{ uri: img }} 
                                style={styles.image} 
                            />
                        ))
                    ) : (
                        <Image 
                            source={{ uri: 'default_image_url_here' }} // Use a default image if no images are available
                            style={styles.image} 
                        />
                    )}
                </Swiper>

                <Text style={styles.description}>{recipe.description || 'No description available.'}</Text>
                <Text style={styles.category}>Category: {recipe.category || 'N/A'}</Text>
                <Text style={styles.tags}>Tags: {recipe.tags ? recipe.tags.join(', ') : 'No tags'}</Text>
                <Text style={styles.date}>Date: {recipe.date || 'Unknown'}</Text>

                {/* Heading for Social Sharing */}
                <Text style={styles.shareHeading}>Share Our Recipes:</Text>
                <View style={styles.socialContainer}>
                    {/* Favorite Button */}
                    <TouchableOpacity onPress={handleFavorite}>
                        <Icon name={isFavorited ? "heart" : "heart-o"} size={24} color="red" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleShare('facebook')}>
                        <Icon name="facebook" size={24} color="#3b5998" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleShare('twitter')}>
                        <Icon name="twitter" size={24} color="#1DA1F2" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleShare('instagram')}>
                        <Icon name="instagram" size={24} color="#C13584" />
                    </TouchableOpacity>
                </View>

                <Text style={styles.ingredients}>Ingredients:</Text>
                <View style={styles.ingredientList}>
                    {recipe.ingredients && recipe.ingredients.length > 0
                        ? recipe.ingredients.map((ingredient, index) => (
                            <View key={index} style={styles.ingredientItemContainer}>
                                <Icon name="check" size={16} color="green" />
                                <Text style={styles.ingredientItem}> {ingredient}</Text>
                            </View>
                        ))
                        : <Text>No ingredients listed.</Text>}
                </View>

                <Text style={styles.instructions}>Instructions:</Text>
                <View style={styles.card}>
                    {recipe.instructions && recipe.instructions.length > 0
                        ? recipe.instructions.map((instruction, index) => (
                            <View key={index} style={styles.instructionItem}>
                                <Text style={styles.instructionNumber}>{index + 1}.</Text>
                                <Text style={styles.instructionText}>{instruction}</Text>
                            </View>
                        ))
                        : <Text>No instructions provided.</Text>}
                </View>
            </ScrollView>

            {/* BottomMenu added here */}
            <BottomMenu navigation={navigation} />
        </View>
    );
};

export default RecipeDetail;
