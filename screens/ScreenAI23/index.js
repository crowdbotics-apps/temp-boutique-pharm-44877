import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const ReviewScreen = () => {
  const [reviews, setReviews] = useState([{
    id: '1',
    name: 'John Doe',
    review: 'Great service!',
    response: ''
  }, {
    id: '2',
    name: 'Jane Doe',
    review: 'Could be better.',
    response: ''
  }]);

  const handleResponse = (id, response) => {
    setReviews(reviews.map(review => review.id === id ? { ...review,
      response
    } : review));
  };

  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Reviews</Text>
      <FlatList data={reviews} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={styles.reviewCard}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.review}>{item.review}</Text>
            <TextInput style={styles.input} placeholder="Write a response..." onChangeText={text => handleResponse(item.id, text)} value={item.response} />
            <Button title="Submit Response" onPress={() => handleResponse(item.id, item.response)} />
          </View>} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  reviewCard: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 20,
    borderRadius: 10
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  review: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10
  }
});
export default ReviewScreen;