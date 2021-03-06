import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useSelector } from 'react-redux';

import MealItem from './MealItem'

const MealList = (props) => {
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals)
  
  const renderMealItem = (itemData) => {
    const isFavorite = favoriteMeals.find(meal => meal.is === itemData.item.id)
    
    return (
      <MealItem
        image={itemData.item.imageUrl}
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
            params: {
              mealId: itemData.item.id,
              mealTitle: itemData.item.title,
              isFav: isFavorite
            },
          });
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        style={{ width: "100%" }}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});

export default MealList;
