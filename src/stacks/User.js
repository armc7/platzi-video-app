import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import User from '../screens/User';

const Stack = createStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fafafa',
        },
      }}>
      <Stack.Screen name="User" component={User} />
    </Stack.Navigator>
  );
};

export default UserStack;
