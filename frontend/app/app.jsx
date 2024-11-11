import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Settings from './settings';
import Home from './home';
import History from './history';
import { ThemeProvider } from '../theme/themeContext';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <ThemeProvider>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
              return <Ionicons name={"home-outline"} size={size} color={color} />;
            } else if (route.name === 'History') {
              iconName = focused ? 'history' : 'book-outline';
              return <Ionicons name={"book-outline"} size={size} color={color} />;
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
              return <Ionicons name={"settings-outline"} size={size} color={color} />;
            }
          },
          tabBarStyle: {
            backgroundColor: 'darkgray',
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'lightblue',
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="History" component={History} />
        <Tab.Screen name="Settings" component={Settings}/>
      </Tab.Navigator>
    </ThemeProvider>
    
  );
}
export default App;