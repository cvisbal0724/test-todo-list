import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CreateTaskScreen } from '../screens/task/CreateTaskScreen';
import { Button } from 'react-native';
import { ToDoListScreen } from '../screens/to-do/ToDoListScreen';
import { useNavigation } from '@react-navigation/native';

const StackMain = createStackNavigator();

export const MainNavigation = (props: any) => {
  const navigation = useNavigation<any>()
  return (

    <StackMain.Navigator>
      <StackMain.Group>
        <StackMain.Screen name="ToDoListScreen" component={ToDoListScreen}
          options={{
            title: 'To-Do List',
            headerTitleAlign: 'center',
            headerRight: () => (
              <Button title='Crear' onPress={
                () => {
                  navigation.navigate('CreateTaskScreen');
                  
                }
              }></Button>
            )
          }} />
      </StackMain.Group>
      <StackMain.Group screenOptions={{ presentation: 'modal' }}>
        <StackMain.Screen name="CreateTaskScreen" component={CreateTaskScreen} options={{
          cardOverlayEnabled: true,
          title: 'Create Task',
          headerTitleAlign: 'center'
        }}/>
      </StackMain.Group>
    </StackMain.Navigator>

  );
}