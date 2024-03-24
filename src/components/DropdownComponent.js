import {StyleSheet, View} from 'react-native';
import React, { memo } from 'react';
import SearchableDropdown from 'react-native-searchable-dropdown';
import {Colors, Metrix} from '../config';
import { fonts } from '../config/Constants';


const DropdownComponent = ({data, selectedCategory,setSelectedCategory}) => {
  return (
    <View>
      <SearchableDropdown
        onItemSelect={item => {
          setSelectedCategory(item?.name)
        }}
        containerStyle={styles.container}
        itemStyle={styles.item}
        itemTextStyle={styles.itemText}
        itemsContainerStyle={styles.itemsContainer}
        items={data}
        resetValue={false}
        textInputProps={{
          placeholder: 'Search',
          placeholderTextColor: Colors.white,
          style: styles.textInput,
          value: selectedCategory,
          onChangeText: text=>setSelectedCategory(text)
        }}
       
      />
    </View>
  );
};

export default memo(DropdownComponent);

const styles = StyleSheet.create({
  container: {
    padding: Metrix.VerticalSize(5),
  },
  item: {
    padding: Metrix.VerticalSize(10),
    marginTop: Metrix.VerticalSize(2),
    backgroundColor: 'transparent',
    borderRadius: Metrix.VerticalSize(5),
  },
  itemText: {
    color: Colors.white,
    fontFamily: fonts.Medium,
    fontSize: Metrix.customFontSize(16)
  },
  itemsContainer: {
    maxHeight: Metrix.VerticalSize(140),
    backgroundColor: Colors.lightBlack,
    marginTop: Metrix.VerticalSize(10),
    borderRadius: Metrix.VerticalSize(12),
  },
  textInput: {
    backgroundColor: Colors.lightBlack,
    paddingLeft: Metrix.HorizontalSize(20),
    padding: Metrix.VerticalSize(10),
    borderWidth: 1,
    color: Colors.white,
    borderColor: Colors.primary,
    borderRadius: Metrix.VerticalSize(14),
  },
});
