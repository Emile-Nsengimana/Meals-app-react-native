import { initialState } from "../initialState";
import {
  FILTERMEAL,
  TOGGLEFAVORITYMEAL,
  ALLMEALS
} from "../../constants/constants";

export const mealsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ALLMEALS:
      return { ...state.meals };

    case TOGGLEFAVORITYMEAL:
      const isFavority = state.favorityMeals.findIndex(
        meal => meal.id === payload
      );
      if (isFavority >= 0) {
        const updatedFavorities = [...state.favorityMeals];
        updatedFavorities.splice(isFavority, 1);

        return { ...state, favorityMeals: updatedFavorities };
      } else {
        const selectedMeal = state.meals.filter(meal => meal.id === payload);
        return {
          ...state,
          favorityMeals: state.favorityMeals.concat(selectedMeal)
        };
      }

    case FILTERMEAL:
      return state;

    default:
      return state;
  }
};
