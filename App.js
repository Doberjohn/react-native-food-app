import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import {createAppContainer} from "react-navigation";
import RestaurantScreen from "./src/screens/RestaurantScreen";

const navigator = createStackNavigator({
  Search: SearchScreen,
  Restaurant: RestaurantScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business search'
  }
});

export default createAppContainer(navigator)
