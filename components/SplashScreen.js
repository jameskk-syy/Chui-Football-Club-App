import React from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.coverImage} source={require('../assets/Chui.jpg')} />
      <ActivityIndicator size="large" color="#fff" style={styles.spinner} />
      <View style={styles.textContainer}>
        <Text style={styles.welcomeText}>Welcome To Our Club</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#180c30',
    justifyContent: 'center',
    alignItems: 'center',
  },
  coverImage: {
    width: 150,
    height: 150,
  },
  spinner: {
    marginVertical: 20,
  },
  textContainer: {
    marginTop: 20,
  },
  welcomeText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});
