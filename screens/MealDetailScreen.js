import React from 'react'

import { View, StyleSheet, Button } from "react-native"

const MealDetailScreen = props => {
    return (
        <View style={styles.screen}>
            <Button title='Go to Meal Details!' onPress={() => {
                 props.navigation.navigate({routeName:"MealDetail"})
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default MealDetailScreen

