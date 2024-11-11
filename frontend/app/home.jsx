import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import darkmodeStyle from '../theme/style';
import { ThemeContext } from '../theme/themeContext';
import Revolver from '../assets/animation/revolver';

const Home = () => {
  const { isDarkMode } = useContext(ThemeContext);


  return (
    <View style={[darkmodeStyle.container, isDarkMode ? darkmodeStyle.darkContainer : darkmodeStyle.lightContainer]}>
      <Text style={[darkmodeStyle.title, isDarkMode ? darkmodeStyle.darkTitle : darkmodeStyle.lightTitle]}>May Lady Luck be on your side...</Text>
      <Revolver />
    </View>
  );
};


export default Home;