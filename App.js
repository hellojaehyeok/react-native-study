import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigation from './src/navigation/tab/tabNavigation';
import Intro from './src/screens/intro';
import ChatDetail from './src/screens/chat/chatDetail';
import Measure from './src/screens/study/measure';

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
            <Stack.Screen name="Tab"component={TabNavigation}/>
            <Stack.Screen name="ChatDetail" component={ChatDetail} />
            <Stack.Screen name="Measure" component={Measure} />
          </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;