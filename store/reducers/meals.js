import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE } from "../actions/meals";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingItemIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      );
      if (existingItemIndex >= 0) {
        const updatedFavMeals = [...state.favoriteMeals];
        updatedFavMeals.splice(existingItemIndex, 1);
        return { ...state, favoriteMeals: updatedFavMeals };
      } else {
        const newMeal = state.meals.find(meal => meal.id === action.mealId)
        return { ...state, favoriteMeals: state.favoriteMeals.concat(newMeal)}
      }
    default:
      return state;
  }
  return state;
};

export default mealsReducer;
