import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import darkmodeStyle from '../theme/style';
import { ThemeContext } from '../theme/themeContext';

const History = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <View style={[darkmodeStyle.container, isDarkMode ? darkmodeStyle.darkContainer : darkmodeStyle.lightContainer]}>
      <Text style={[darkmodeStyle.title, isDarkMode ? darkmodeStyle.darkTitle : darkmodeStyle.lightTitle]}>History</Text>
    </View>
  );
};

export default History;