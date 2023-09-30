import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { UseTaskMemo } from './src/infrastructure/hooks/UseTaskMemo';
import { TaskContext } from "./src/domain/context/TaskContext";
import { MainNavigation } from "./src/presentation/navigation/MainNavigation";

export default function App() {

  return (
    <NavigationContainer>
      <TaskContext.Provider value={UseTaskMemo()}>
        <MainNavigation/>
      </TaskContext.Provider>
    </NavigationContainer>
  );
}
