import React, { useCallback, useEffect, useMemo } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/tab/home/home';
import List from '../../screens/tab/list/list';
import MyPage from '../../screens/tab/mypage/mypage';
import Chat from '../../screens/tab/chat/chat';
import TabsUI from './tabsUI';



const tabs = [{ name: 'Home' },{ name: 'List' }, {name:""},{ name: 'Chat' }, { name: 'MyPage' }];

const Tab = createBottomTabNavigator();

const TabNavigation = ({route}) => {

  console.log("Tab =========== ")
  console.log(route);

  return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle:{ display: 'none' }
        }}
        tabBar={() => <TabsUI tabs={tabs}/>}
      >
        <Tab.Screen name='Home' component={Home}/>
        <Tab.Screen name='List' component={List} />
        <Tab.Screen name='Chat' component={Chat} />
        <Tab.Screen name='MyPage' component={MyPage}/>
      </Tab.Navigator>
  );
};

export default React.memo(TabNavigation);