import React, { useContext } from 'react';
import { View, Text, Switch } from 'react-native';
import darkmodeStyle from '../theme/style';
import { ThemeContext } from '../theme/themeContext';

const Settings = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {return null;}
  const { isDarkMode, toggleTheme } = themeContext;

  return (
    <View style={[darkmodeStyle.container, isDarkMode ? darkmodeStyle.darkContainer : darkmodeStyle.lightContainer]}>
      <Text style={[darkmodeStyle.title, isDarkMode ? darkmodeStyle.darkTitle : darkmodeStyle.lightTitle]} >Settings</Text>
      <View style={darkmodeStyle.switchContainer}>
        <Text style={[darkmodeStyle.label, isDarkMode ? darkmodeStyle.darkLabel : darkmodeStyle.lightLabel]}>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</Text>
        <Switch value={isDarkMode} onValueChange={toggleTheme} />
      </View>
    </View>
  );
};



export default Settings;
