import React from "react";
import { FlatList } from "react-native";
import MealItem from "../components/MealItem";

const MealList = props => {
  const { meals } = props;
  const renderMeals = items => {
    return (
      <MealItem
        title={items.item.title}
        duration={items.item.duration}
        complexity={items.item.complexity}
        affordability={items.item.affordability}
        image={items.item.imageUrl}
        onSelect={() => {
          props.navigation.push("MealDetails", {
            mealId: items.item.id,
            mealTitle: items.item.title
          });
        }}
      />
    );
  };
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={meals}
      renderItem={renderMeals}
    />
  );
};
export default MealList;
