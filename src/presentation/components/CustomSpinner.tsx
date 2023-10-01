import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { $primary } from '../../domain/constants/Colors';

export const CustomSpinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator animating={true} size="large" color={$primary}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
    opacity: 0.5,
    position: 'absolute',
    height: '100%',
    width: '100%'
  },
});
