import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../pages';
import {HomeIcon} from '~/shared/icons';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <HomeIcon stroke={focused ? 'blue' : 'gray'} />
          ),
        }}
      />
      <Tab.Screen
        name="HomeScreen2"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <HomeIcon stroke={focused ? 'blue' : 'gray'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
