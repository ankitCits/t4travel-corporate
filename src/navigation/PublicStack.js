import React, {useEffect, useContext} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Public from "../screen/public"

const Stack = createStackNavigator();

function PublicStack() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
      drawerStyle: {
        backgroundColor: '#fff',
        width: '60%',
      },
    }}
    >
      <Stack.Screen name="Public" component={Public} />
    </Stack.Navigator>
  );
}

export default PublicStack