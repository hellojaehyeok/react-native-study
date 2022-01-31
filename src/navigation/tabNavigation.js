import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/tab/home/home';
import Search from '../screens/tab/search/search';
import MyPage from '../screens/tab/mypage/mypage';
import { SafeAreaView } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Tab.Screen name='Home' component={Home}/>
        <Tab.Screen name='Search' component={Search}/>
        <Tab.Screen name='MyPage' component={MyPage}/>
      </Tab.Navigator>
  );
};

export default TabNavigation;