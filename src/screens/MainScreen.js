import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {AppData, Colors, Icons, Metrix} from '../config';
import {
  AnimatedText,
  DropdownComponent,
  Header,
  Saperator,
  Selectable,
  Stepper,
} from '../components';
import {fonts} from '../config/Constants';

const {data} = AppData;

const MainScreen = () => {
  const [selectedTab, setSelectedTab] = useState('');
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const updateTab = value => {
    setSelectedTab(value?.title);
    setCategories(value?.categories);
    setSelectedCategory('');
  };

  return (
    <View style={styles.container}>
      <View style={{paddingHorizontal: Metrix.HorizontalSize(20)}}>
        <Header />

        <ScrollView
          keyboardShouldPersistTaps={'handled'}
          showsVerticalScrollIndicator={false}>
          <Stepper />

          <View style={{marginTop: Metrix.VerticalSize(30)}}>
            <AnimatedText
              title={'Content type'}
              subTitle={'Choose a content type that best fits your needs.'}
            />
          </View>

          <Saperator
            customStyle={{marginVertical: Metrix.VerticalSize(30), height: 2}}
          />

          <Text style={styles.typeText}>
            What type of content are you creating?
          </Text>

          <View style={styles.tabsContainer}>
            {data.map(item => (
              <Selectable
                value={item?.title}
                selected={item?.title == selectedTab}
                onPress={() => updateTab(item)}
              />
            ))}
          </View>

          {selectedTab && (
            <View>
              <View style={{marginVertical: Metrix.VerticalSize(20)}}>
                <Text style={styles.typeText}>
                  What type of "{selectedTab}" content are you creating?
                </Text>
              </View>

              <DropdownComponent
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                data={categories}
              />

              <TouchableOpacity activeOpacity={0.7} style={styles.bottomBtn}>
                <Text style={styles.nextText}>Next</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icons.AntDesign
                    name={'right'}
                    color={Colors.secondary}
                    size={Metrix.customFontSize(14)}
                  />
                  <Icons.AntDesign
                    name={'right'}
                    color={Colors.secondary}
                    size={Metrix.customFontSize(18)}
                  />
                </View>
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.black},
  typeText: {
    color: Colors.white,
    fontFamily: fonts.Medium,
    fontSize: Metrix.customFontSize(17),
  },
  tabsContainer: {
    marginTop: Metrix.VerticalSize(10),
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  bottomBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Metrix.VerticalSize(20),
    paddingHorizontal: Metrix.HorizontalSize(20),
    paddingVertical: Metrix.VerticalSize(12),
    borderRadius: 25,
    backgroundColor: Colors.white,
  },
  nextText: {
    color: Colors.secondary,
    fontFamily: fonts.Medium,
    fontSize: Metrix.customFontSize(16),
  },
});
