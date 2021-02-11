import React, { useState } from "react";
// import { Text, View } from "react-native";

// import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { useFonts } from "@expo-google-fonts/inter";
import { enableScreens } from "react-native-screens";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import MealsNavigator from "./navigation/MealsNavigator";
import mealsReducer from "./store/reducers/meals";

// performance enhancement:
enableScreens();

// this would combing multiple reducers if we had them:
const rootReducer = combineReducers({
  meals: mealsReducer,
});

const store = createStore(rootReducer);

// const fetchFonts = () => {

// };

export default function App() {
  let [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  // const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontsLoaded) {
    return (
      <AppLoading
      // startAsync={fetchFonts}
      // onFinish={() => setFontLoaded(true)}
      // onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
}

console.disableYellowBox = true;
