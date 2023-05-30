import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, ScrollView } from 'react-native';
import React from 'react';

export default function App() {
  return (

    // Everything is wrapped in a scrollView Component, similar to view but with scrolling 
    <ScrollView contentContainerStyle={styles.container}>
      {/* text component with a heading style */}
      <Text style={styles.heading}>React Native Components Demo</Text>

      <Text style={styles.label}>Text Input:</Text>
      {/* TextInput component with a initial value set with the placeholder prop. */}
      <TextInput style={styles.input} placeholder="Enter text" />

      <Text style={styles.label}>Button:</Text>
      {/* Button component with a pop-up window implemented when pressed */}
      <Button title="Press me" onPress={() => alert('Button pressed!')} />

      <Text style={styles.label}>Image:</Text>
      {/* image component with respective dimentions defined and also the source of the image. */}
      <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 200, height: 200}}
        />

      <Text style={styles.label}>ScrollView:</Text>
             {/* text component with scrolling view */}
      <ScrollView style={styles.scrollView}>
        <Text style={styles.scrollViewText}>
          Text and some more text!Text and some more text!Text and some more text!Text and some more text!
          Text and some more text!Text and some more text!Text and some more text!Text and some more text!
          Text and some more text!Text and some more text!Text and some more text!Text and some more text!
          Text and some more text!Text and some more text!Text and some more text!Text and some more text!
          Text and some more text!Text and some more text!Text and some more text!Text and some more text!
          Text and some more text!Text and some more text!Text and some more text!Text and some more text!
          Text and some more text!Text and some more text!Text and some more text!Text and some more text!
        </Text>
      </ScrollView>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

//css that should not be here once Native Wind? is in use.
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  scrollView: {
    borderWidth: 1,
    borderColor: 'gray',
    maxHeight: 200,
    marginBottom: 20,
  },
  scrollViewText: {
    padding: 10,
  },
});