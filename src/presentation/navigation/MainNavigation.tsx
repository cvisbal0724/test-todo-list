import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CreateTaskScreen } from '../screens/Task/CreateTaskScreen';
import { Button } from 'react-native';
import { MainScreen } from '../screens/MainScreen';

const StackMain = createStackNavigator();

export const MainNavigation = (props: any) => {

    return (
  
      <StackMain.Navigator>
        <StackMain.Group>
          <StackMain.Screen name="MainScreen" component={MainScreen}
            options={{
              title: 'To-Do List',
              headerTitleAlign: 'center',
              headerRight: () => (
                <Button title='Crear'></Button>
                
              )
            }} />
        </StackMain.Group>
      </StackMain.Navigator>
  
    );
  }