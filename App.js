// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import RecipeDetail from "./src/screens/RecipeDetail";
import FavoriteScreen from "./src/screens/FavoriteScreen.js";
import CategoryScreen from "./src/screens/CategoryScreen.js";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Import FontAwesome icons
import HeaderTitle from "./src/components/HeaderTitle.js"; // Import custom HeaderTitle component
import store from "./src/store.js";
import { Provider } from "react-redux";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerStyle: { backgroundColor: "#f4511e" },
              headerTintColor: "#fff",
              headerTitle: () => <HeaderTitle title="Home" />,
            }}
          />
          <Stack.Screen
            name="RecipeDetail"
            component={RecipeDetail}
            options={({ navigation }) => ({
              headerStyle: { backgroundColor: "#4a90e2" },
              headerTintColor: "#fff",
              headerTitle: () => <HeaderTitle title="Recipe Detail" />,
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => console.log("Settings pressed")}
                  style={{ marginRight: 10 }}
                >
                  <Icon name="cog" size={24} color="#fff" />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="Favorite"
            component={FavoriteScreen}
            options={{
              headerStyle: { backgroundColor: "#f4511e" },
              headerTintColor: "#fff",
              headerTitle: () => <HeaderTitle title="Favorite Recipes" />,
            }}
          />
          <Stack.Screen
            name="Category"
            component={CategoryScreen}
            options={{
              headerStyle: { backgroundColor: "#f4511e" },
              headerTintColor: "#fff",
              headerTitle: () => <HeaderTitle title="Recipes Category" />,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
  );
};

export default App;
