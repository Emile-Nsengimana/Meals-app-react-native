import { TOGGLEFAVORITYMEAL } from "../../constants/constants";

export const toggleFavority = mealId => {
  return { type: TOGGLEFAVORITYMEAL, payload: mealId };
};
