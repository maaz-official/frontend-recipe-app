// src/styles/recipeDetailStyles.js
import { StyleSheet } from 'react-native';
import colors from './colors'; // Import colors

const recipeDetailStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.primaryBackground,
  },
  image: {
    width: '100%', // Maintain full width in the carousel
    height: 250,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: colors.shadowColor,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5, // For Android shadow effect
  },
  imageSwiper: {
    height: 250, // Height of the Swiper
    marginBottom: 20,
    borderRadius: 12,
    overflow: 'hidden', // Ensures the image respects the border radius

    elevation: 5, // For Android shadow effect
  },
  dotStyle: {
    backgroundColor: 'rgba(255,255,255,0.5)', // Style for inactive dots
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDotStyle: {
    backgroundColor: '#FFF', // Style for active dot
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  paginationStyle: {
    bottom: 10, // Position for pagination dots
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 12,
    color: colors.headerText,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    color: colors.secondaryText,
    textAlign: 'justify',
  },
  category: {
    fontSize: 15,
    marginBottom: 8,
    fontStyle: 'italic',
    color: colors.mutedText,
  },
  tags: {
    fontSize: 14,
    marginBottom: 10,
    color: colors.accentText,
    fontWeight: '500',
  },
  date: {
    fontSize: 14,
    marginBottom: 8,
    color: colors.dateText,
  },
  ingredients: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    color: colors.primaryText,
    borderBottomWidth: 2,
    borderBottomColor: colors.borderColor,
    paddingBottom: 8,
  },
  ingredientList: {
    marginTop: 10,
    marginBottom: 15,
  },
  ingredientItemContainer: {
    flexDirection: 'row', // Aligns icon and text in a row
    alignItems: 'center', // Center them vertically
    marginBottom: 5, // Spacing between ingredients
  },
  ingredientItem: {
    fontSize: 16,
    color: colors.ingredientsText,
    marginLeft: 5, // Space between icon and text
    lineHeight: 22,
    paddingVertical: 5,
  },
  instructions: {
    fontSize: 24, // Increase font size for better visibility
    fontWeight: 'bold',
    marginTop: 15,
    color: colors.primaryText,
    borderBottomWidth: 2,
    borderBottomColor: colors.borderColor,
    paddingBottom: 8,
  },
  instructionList: {
    fontSize: 16,
    color: colors.ingredientsText,
    marginBottom: 20,
    lineHeight: 24,
    paddingHorizontal: 10, // Add some horizontal padding
  },
  instructionItem: {
    flexDirection: 'row', // Aligns icon and text in a row
    alignItems: 'flex-start', // Aligns text to the top
    marginBottom: 10, // Spacing between instructions
  },
  instructionNumber: {
    fontWeight: 'bold',
    fontSize: 18, // Size for step number
    color: colors.accentText,
    marginRight: 10, // Space between number and instruction text
  },
  instructionText: {
    flex: 1,
    color: colors.secondaryText, // Text color for instruction
    lineHeight: 22, // Better line height for readability
  },
  shareHeading: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.primaryText,
    textAlign: 'left',
    marginTop: 20,
    marginBottom: 10,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  shareIcon: {
    fontSize: 24,
    color: colors.shareIconColor, // Use your defined color for share icons
  },
  card: {
    backgroundColor: colors.cardBackground,
    borderRadius: 12,
    padding: 15,
    marginVertical: 10,
    shadowColor: colors.shadowColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 3,
  },
  dropdownMenu: {
    position: 'absolute',
    right: 20,
    top: 60, // Adjust based on your header height
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 10,
},
dropdownItem: {
    padding: 10,
    fontSize: 16,
},
});

export default recipeDetailStyles;
