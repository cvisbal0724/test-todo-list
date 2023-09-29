import React from "react";
import { StatusBar } from "expo-status-bar"
import { Button, StyleSheet, Text, View } from "react-native"
import { TaskContext } from './../../domain/context/TaskContext';
import { createStackNavigator } from '@react-navigation/stack';

export const MainScreen = (props: any) => {
    const { getById } = React.useContext(TaskContext);
    
    React.useEffect(() => {
        const bootstrapAsync = async () => {
          
        };    
        bootstrapAsync();
      }, []);

    return (
        <View style={styles.container}>
            {/* <Text>Open up App.tsx to start working on your app!</Text>
            <StatusBar style="auto" />
            <Button title="Press" onPress={() => getById('test-test2')}></Button> */}
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});