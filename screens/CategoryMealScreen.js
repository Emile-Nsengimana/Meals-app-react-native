import React from "react";
import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

const CategoryMealScreen = props => {
  const mealsList = MEALS.filter(
    meal =>
      meal.categoryIds.indexOf(props.navigation.getParam("categoryId")) >= 0
  );
  return <MealList meals={mealsList} navigation={props.navigation} />;
};

CategoryMealScreen.navigationOptions = props => {
  return {
    headerTitle: props.navigation.getParam("categoryTitle")
  };
};

export default CategoryMealScreen;
