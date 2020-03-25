import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { Platform } from "react-native";

const navOptions = {
  headerTintColor: Platform.OS === "android" ? "whitesmoke" : "teal",
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? "teal" : ""
  },
  headerTitleStyle: {
    textTransform: "uppercase",
    fontFamily: "default-font-bold",
    textAlign: "center"
  },
  // headerBackTitleStyle: {
  //   fontFamily: "default-font-bold"
  // },
  headerBackTitleVisible: false
};

const MealNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeal: {
      screen: CategoryMealScreen
    },
    MealDetails: MealDetailScreen
  },

  {
    defaultNavigationOptions: navOptions
  }
);

export default createAppContainer(MealNavigator);
