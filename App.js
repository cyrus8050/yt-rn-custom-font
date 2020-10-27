import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  useFonts,
  Akronim_400Regular
} from '@expo-google-fonts/akronim';
import { AppLoading } from 'expo';
export default function App() {
  let [fontsLoaded] = useFonts({
    Akronim_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={{ fontFamily: 'Akronim_400Regular', fontSize: 40 }}>Open up App.js </Text>
        <Text style={{ fontSize: 40 }}>Open up App.js </Text>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
