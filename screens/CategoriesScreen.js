import React from 'react';
import { View, Text, StyleSheet, Platform, FlatList, TouchableOpacity } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import Colors from '../constants/colors';
import { CATEGORIES } from '../data/dummy-data';



const CategoriesScreen = props => {


  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
              categoryId: itemData.item.id
            }
          })
        }}
        color={itemData.item.color}
      />
    )
  }


  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
      keyExtractor={(item, index) => item.id}
    />
  );
};
//provided by javascript feature
// CategoriesScreen.navigationOptions = {
//   headerTitle: 'Meal Categories',
//   headerStyle: {
//     backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
//   },
//   headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
// }

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

});

export default CategoriesScreen;