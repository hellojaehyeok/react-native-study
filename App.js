import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigation from './src/navigation/tabNavigation';
import Intro from './src/screens/intro';

const Stack = createStackNavigator();



const App = () => {
  return (
      <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Intro"
            screenOptions={{
              animationEnabled:false,
              headerShown: false
            }}
          >
            <Stack.Screen name="Intro" component={Intro} />
            <Stack.Screen name="Tab" component={TabNavigation} />
          </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;