import React, { useCallback, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/tab/home/home';
import List from '../screens/tab/list/list';
import MyPage from '../screens/tab/mypage/mypage';
import Chat from '../screens/tab/chat/chat';

const Tab = createBottomTabNavigator();

const TabNavigation = ({route}) => {
  return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Tab.Screen name='Home' component={Home}/>
        <Tab.Screen name='List' component={List} />
        <Tab.Screen name='Chat' component={Chat} />
        <Tab.Screen name='MyPage' component={MyPage}/>
      </Tab.Navigator>
  );
};

export default TabNavigation;