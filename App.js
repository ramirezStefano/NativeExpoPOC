import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, ScrollView } from 'react-native';
import React from 'react';

export default function App() {
  return (

    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>React Native Components Demo</Text>

      <Text style={styles.label}>Text Input:</Text>
      <TextInput style={styles.input} placeholder="Enter text" />

      <Text style={styles.label}>Button:</Text>
      <Button title="Press me" onPress={() => alert('Button pressed!')} />

      <Text style={styles.label}>Image:</Text>
      <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 200, height: 200}}
        />

      <Text style={styles.label}>ScrollView:</Text>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.scrollViewText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut sem at mi euismod pretium at nec mauris.
          In consectetur auctor aliquet. Integer nec eros dolor. Aliquam erat volutpat. Nullam pellentesque lacinia
          velit ut luctus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Etiam consectetur felis in sapien finibus, nec interdum lacus interdum. Sed ullamcorper libero at ultricies
          rhoncus. Vestibulum mattis luctus enim quis volutpat. Ut eleifend est nec orci ultricies, sed elementum
          lacus condimentum.
        </Text>
      </ScrollView>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

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