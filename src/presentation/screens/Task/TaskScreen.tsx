import React from "react";
import { Platform, StyleSheet, View, Text } from "react-native";

export const TaskScreen = (props: any) => {

    return (
        <View style={styles.container}>
            <Text>Hola Mundo</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === 'android' ? 40 : 60,
      backgroundColor: '#fff',
    },
    img: {
      width: 10,
      height: 20,
      resizeMode: 'contain',
    },
    content: {
      flex: 1,
      alignItems: 'center',
    },
    head: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    buttonBack: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  })