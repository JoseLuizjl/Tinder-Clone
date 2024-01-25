import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/Principal/Login';
import phoneNumber from './pages/Principal/phoneNumber';
import confirmNumber from './pages/Principal/confirmNumber';
import SignIn from './pages/Principal/SignIn';
import recovery from './pages/Problem/recovery';
import ConfirmEmail from './pages/Problem/ConfirmEmail';
import sendEmail from './pages/Problem/sendEmail';
import Tinder from './pages/Meet/Tinder';
import myEmail from './pages/userInfo/myEmail';
import myName from './pages/userInfo/myName';
import myBirthday from './pages/userInfo/myBirthday';
import choice from './pages/userInfo/choice';
import interests from './pages/userInfo/interests';
import mySchool from './pages/userInfo/mySchool';
import userPhoto from './pages/userInfo/userPhoto';
import welcome from './pages/Meet/welcome';

const Stack = createStackNavigator();

function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">

        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="phoneNumber"
          component={phoneNumber}
          options={{
              title: '',
              headerTransparent: true,
          }}
        />

          <Stack.Screen
          name="confirmNumber"
          component={confirmNumber}
          options={{
            title: '',
            headerTransparent: true,
          }}
          />

          <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            title: '',
            headerTransparent: true,
          }}
        />

        <Stack.Screen
          name="recovery"
          component={recovery}
          options={{
            title: '',
            headerTransparent: true,
          }}
        />

        <Stack.Screen
          name="ConfirmEmail"
          component={ConfirmEmail}
          options={{
            title: '',
            headerTransparent: true,
          }}
        />

        <Stack.Screen
          name="sendEmail"
          component={sendEmail}
          options={{
            title: '',
            headerTransparent: true,
          }}
        />

        
        <Stack.Screen
          name="Tinder"
          component={Tinder}
          options={{
            headerShown: false,
          }}
        />

          <Stack.Screen
          name="myEmail"
          component={myEmail}
          options={{
            headerShown: false,
          }}
        />

             <Stack.Screen
          name="myName"
          component={myName}
          options={{
            title: '',
            headerTransparent: true,
          }}
        />
  
                <Stack.Screen
          name="myBirthday"
          component={myBirthday}
          options={{
            headerShown: false,
          }}
        />

                <Stack.Screen
          name="choice"
          component={choice}
          options={{
            headerShown: false,
          }}
        />

               <Stack.Screen
          name="interests"
          component={interests}
          options={{
            headerShown: false,
          }}
        />

              <Stack.Screen
          name="mySchool"
          component={mySchool}
          options={{
            headerShown: false,
          }}
        />

             <Stack.Screen
          name="userPhoto"
          component={userPhoto}
          options={{
            headerShown: false,
          }}
        />

              <Stack.Screen
          name="welcome"
          component={welcome}
          options={{
            headerShown: false,
          }}
        />

     

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
