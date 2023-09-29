import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import  { UseTaskMemo } from './src/infrastructure/hooks/UseTaskMemo';
import { MainScreen } from "./src/presentation/screens/MainScreen";
import { TaskContext } from "./src/domain/context/TaskContext";

export default function App() {

  return (
    <NavigationContainer>
      <TaskContext.Provider value={UseTaskMemo()}>
      <MainScreen />
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
