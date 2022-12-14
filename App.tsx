/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { NativeBaseProvider, Text } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import routes from './src/screens';
// import { Colors } from 'react-native/Libraries/NewAppScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        {/* TODO: Add loading component on fallback */}
        <React.Suspense fallback={<Text>Loading...</Text>}>
          <Tab.Navigator>
            {routes.map((route) => (
              <Tab.Screen {...route} />
            ))}
          </Tab.Navigator>
        </React.Suspense>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
