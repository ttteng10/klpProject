import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';
import Login from './pages/Login/Login';
import AddUser from './pages/AddUser/AddUser';
import Write from './pages/Write/Write';

const Stack = createNativeStackNavigator();
const Router = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <Stack.Screen
          name="Splash"
          component={Splash}
          options={{animation: 'fade_from_bottom'}}
        /> */}
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="AddUser" component={AddUser} />
      <Stack.Screen name="Write" component={Write} />
    </Stack.Navigator>
  );
};

export default Router;
