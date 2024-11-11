import React, { useState, useEffect } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const Settings = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load the theme preference from local storage (or AsyncStorage)
  useEffect(() => {
    const loadThemePreference = async () => {
      try {
        const value = await AsyncStorage.getItem('theme');
        if (value !== null) {
          setIsDarkMode(value === 'dark');
        }
      } catch (e) {
        console.error('Failed to load theme preference.');
      }
    };

    loadThemePreference();
  }, []);

  // Toggle the theme mode and save the preference
  const toggleTheme = async () => {
    try {
      const newTheme = !isDarkMode;
      setIsDarkMode(newTheme);
      await AsyncStorage.setItem('theme', newTheme ? 'dark' : 'light');
    } catch (e) {
      console.error('Failed to save theme preference.');
    }
  };

  return (
    <View style={[styles.container, isDarkMode ? styles.darkContainer : styles.lightContainer]}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.switchContainer}>
        <Text style={styles.label}>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleTheme}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start'
  },
  lightContainer: {
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#333',
    color: '#fff',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#000',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    color: '#000',
  },
});

export default Settings;
