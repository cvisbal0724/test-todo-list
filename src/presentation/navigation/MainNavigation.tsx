import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CreateTaskScreen } from '../screens/task/CreateTaskScreen';
import { ToDoListScreen } from '../screens/to-do/ToDoListScreen';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';
import { $primary } from '../../domain/constants/Colors';

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
              <TouchableOpacity onPress={() => navigation.navigate('CreateTaskScreen')}
              style={{
                marginEnd: 10}}>
                <Ionicons name="add-circle" size={props.iconSize ?? 32} color={$primary} />
              </TouchableOpacity>
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