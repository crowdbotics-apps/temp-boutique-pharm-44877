import React from 'react';
import { SafeAreaView, View, Text, Image, FlatList, StyleSheet } from 'react-native';
const data = [{
  id: '1',
  title: 'Prescription',
  description: 'Your prescription is ready for pickup.'
}, {
  id: '2',
  title: 'Refill',
  description: 'Your refill is ready.'
}, {
  id: '3',
  title: 'Appointment',
  description: 'You have an appointment tomorrow.'
}, {
  id: '4',
  title: 'Health Stats',
  description: 'Your health stats have been updated.'
}, {
  id: '5',
  title: 'Recommendations',
  description: 'Check out these well-being recommendations.'
}, {
  id: '6',
  title: 'Notifications',
  description: 'You have 3 new notifications.'
}];

const HomeFeed = () => {
  return <SafeAreaView style={styles.container}>
      <FlatList data={data} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={styles.card}>
            <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  card: {
    flexDirection: 'row',
    margin: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 10
  },
  textContainer: {
    justifyContent: 'center',
    flex: 1
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 14,
    color: '#888'
  }
});
export default HomeFeed;