import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CreateTaskScreen } from '../screens/Task/CreateTaskScreen';
import { Button } from 'react-native';
import { MainScreen } from '../screens/MainScreen';

const StackMain = createStackNavigator();

export const MainNavigation = (props: any) => {

    return (
  
      <StackMain.Navigator>
        {/* <StackMain.Group> */}
          <StackMain.Screen name="MainScreen" component={MainScreen}
            options={{
              title: 'To-Do List',
              headerTitleAlign: 'center',
              headerLeft: () => (
                <Button title='Crear'></Button>
                // <TouchableOpacity onPress={() => { props.navigation.openDrawer() }} style={{ padding: 4 }}>
                //   <Icon size={8} color="primary.500"
                //     as={MaterialCommunityIcons}
                //     name={'microsoft-xbox-controller-menu'} />
                // </TouchableOpacity>
              ),
            //   headerRight: () => (
  
            //     <HStack>
            //       <TouchableOpacity onPress={() => { EventRegister.emit('showModalCreateWork', true) }} style={{ padding: 4 }}>
            //         <Icon size={8} color="primary.500"
            //           as={MaterialCommunityIcons}
            //           name={'plus-circle'} />
            //       </TouchableOpacity>
  
            //       <TouchableOpacity onPress={() => { EventRegister.emit('showModalFilterWork', true) }} style={{ padding: 4 }}>
            //         <Icon size={8} color="primary.500"
            //           as={MaterialCommunityIcons}
            //           name={'filter'} />
            //       </TouchableOpacity>
            //       {/* <IconButton onPress={() => { EventRegister.emit('showModalCreateWork', true) }}
            //         variant={'unstyled'}
            //         _icon={{
            //           as: MaterialCommunityIcons,
            //           name: 'plus-circle',
            //           color: 'primary.500'
            //         }}
            //       ></IconButton>
            //       <IconButton onPress={() => { EventRegister.emit('showModalFilterWork', true) }}
            //         variant={'unstyled'}
            //         _icon={{
            //           as: MaterialCommunityIcons,
            //           name: 'filter',
            //           color: 'primary.500'
            //         }}
            //       ></IconButton> */}
            //     </HStack>
            //   ),
            }} />
        {/* </StackMain.Group> */}
      </StackMain.Navigator>
  
    );
  }