import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigation from './src/navigation/tabNavigation';
import Intro from './src/screens/intro';
import ChatDetail from './src/screens/chat/chatDetail';

const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Intro"
            screenOptions={{
              animationEnabled:true,
              headerShown: false
            }}
          >
            <Stack.Screen name="Intro" component={Intro} />
            <Stack.Screen name="Tab" component={TabNavigation} />
            <Stack.Screen name="ChatDetail" component={ChatDetail} />
          </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;