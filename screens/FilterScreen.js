/** @format */

import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import DefaultHeaderButton from "../components/HeaderButton";
import { Colors } from "../constants/constants";
import SwitchBox from "../components/SwitchBox";

const FilterScreen = props => {
  const { isGlutenFree, setIsGlutenFree } = useState(false);
  const { isVegan, setIsVegan } = useState(true);
  const { isVegeterian, setIsVegeterian } = useState(false);
  const { isLactoseFree, setIsLactoseFree } = useState(false);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available filter & restrictions</Text>
      <View>
        <SwitchBox status={true} title="Gluten free" active={isGlutenFree} />
        <SwitchBox status={true} title="Vegan" active={isVegan} />
        <SwitchBox status={false} title="Vegeterian" active={isVegeterian} />
        <SwitchBox status={false} title="Lactose free" active={isLactoseFree} />
      </View>
    </View>
  );
};

FilterScreen.navigationOptions = navData => {
  return {
    headerTitle: "Filters ",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={DefaultHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  };
};
export default FilterScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    margin: 20
  },
  title: {
    margin: 10,
    fontFamily: "default-font-bold",
    fontSize: 18,
    color: Colors.secondary,
    textTransform: "uppercase"
  }
});
