import React from 'react'

import { View, StyleSheet, Text, Button, Platform } from "react-native"
import Colors from '../constants/colors';
import { CATEGORIES } from '../data/dummy-data'

const CategoriesMealScreen = props => {
    const categoryId = props.navigation.getParam('categoryId')
    const selectedcategory = CATEGORIES.find(cat => cat.id === categoryId)
    return (
        <View style={styles.screen}>
            <Text>{selectedcategory.title}</Text>
            <Button title='Go to Meal Details!' onPress={() => {
                props.navigation.push("MealDetail")
            }} />
        </View>
    )
}
CategoriesMealScreen.navigationOptions = (navigationData) => {
    const categoryId = navigationData.navigation.getParam('categoryId')
    const selectedcategory = CATEGORIES.find(cat => cat.id === categoryId)
    return {
        headerTitle: selectedcategory.title,
        // headerStyle: {
        //     backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        // },
        // headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    }
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoriesMealScreen

