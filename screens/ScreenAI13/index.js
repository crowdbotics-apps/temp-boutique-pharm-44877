import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, Button, StyleSheet, Image, ScrollView } from 'react-native';

const FeedbackScreen = () => {
  const [feedback, setFeedback] = useState('');

  const submitFeedback = () => {
    alert('Thank you for your feedback!');
    setFeedback('');
  };

  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.title}>We value your feedback</Text>
        <Text style={styles.description}>Please share your thoughts about our pharmacy services, medication, or any other aspect of the app.</Text>
        <TextInput style={styles.input} multiline numberOfLines={4} placeholder="Write your feedback here..." value={feedback} onChangeText={setFeedback} />
        <Button title="Submit Feedback" onPress={submitFeedback} />
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  scrollContainer: {
    padding: 20,
    alignItems: 'center'
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20
  },
  input: {
    width: '100%',
    height: 100,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 20
  }
});
export default FeedbackScreen;