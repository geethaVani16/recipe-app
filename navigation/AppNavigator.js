import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from '../screens/CategoriesScreen'
import CatergoriesMealScreen from '../screens/CategoriesMealScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import { Platform } from 'react-native';
import Colors from '../constants/colors';



const AppNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
    },
    CategoryMeals: {
        screen: CatergoriesMealScreen
    },
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ""
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor

    }
})

export default createAppContainer(AppNavigator)