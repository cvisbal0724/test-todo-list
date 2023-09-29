import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { UseTaskMemo } from './src/infrastructure/hooks/UseTaskMemo';
import { MainScreen } from "./src/presentation/screens/MainScreen";
import { TaskContext } from "./src/domain/context/TaskContext";
import { createStackNavigator } from "@react-navigation/stack";
import { MainNavigation } from "./src/presentation/navigation/MainNavigation";

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <TaskContext.Provider value={UseTaskMemo()}>
        <MainNavigation/>
      </TaskContext.Provider>
    </NavigationContainer>


    // <View style={styles.container}>
    //   <Text>Open up App.tsx to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
