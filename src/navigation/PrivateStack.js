import React, {useEffect, useContext} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Employee from '../screen/private/employee';
import Transtions from '../screen/private/transaction';
import Accountdetail from '../screen/private/account';
import Profile from '../screen/private/profile';
import Drawer from './drawer'
import Flight from '../screen/private/flight';
import Hotel from '../screen/private/hotel';

const Stack = createStackNavigator();

function PrivateStack() {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#fff',
          width: '60%',
        },
      }}
      initialRouteName="Drawer"
    >
      <Stack.Screen name="Drawer" component={Drawer} />
      <Stack.Screen name="Employee" component={Employee} />
      <Stack.Screen name="Transtions" component={Transtions} />
      <Stack.Screen name="Accountdetail" component={Accountdetail} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Flight" component={Flight} />
      <Stack.Screen name="Hotel" component={Hotel} />
    </Stack.Navigator>
  );
}

export default PrivateStack