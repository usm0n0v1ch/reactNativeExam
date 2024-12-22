import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView, StyleSheet, View } from 'react-native';


import Navigation from './navigation/Navigation';




function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        
        <View style={styles.container}>
          <Navigation/>
          
        </View>
        
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: 'white', 
  },
});

export default Index;
