import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { UseTaskMemo } from './src/infrastructure/hooks/UseTaskMemo';
import { TaskContext } from "./src/domain/context/TaskContext";
import { MainNavigation } from "./src/presentation/navigation/MainNavigation";
import axios from 'axios';
import { CustomSpinner } from "./src/presentation/components/CustomSpinner";

export default function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const requestInterceptor = axios.interceptors.request.use(
      (config) => {
        setLoading(true);
        return config;
      },
      (error) => {
        setLoading(false);
        return Promise.reject(error);
      });
    const responseInterceptor = axios.interceptors.response.use(
      (response) => {
        setLoading(false);
        return response;
      },
      (error) => {
        setLoading(false);
        return Promise.reject(error);
      }
    );

    // Limpia los interceptores cuando se desmonta el componente
    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  return (
    <NavigationContainer>
      <TaskContext.Provider value={UseTaskMemo()}>   
      <MainNavigation />     
        {loading ? (
          <CustomSpinner />
        ) : (
          <></>
        )}
      </TaskContext.Provider>
    </NavigationContainer>
  );
}
