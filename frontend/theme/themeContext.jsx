import React, { createContext, useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

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
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
