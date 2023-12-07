import React from 'react';
import { SafeAreaView, View, Text, Image, FlatList, StyleSheet } from 'react-native';
const prescriptions = [{
  id: '1',
  name: 'Medication 1',
  status: 'Active',
  refill: 'In 2 days',
  reminder: '8:00 AM'
}, {
  id: '2',
  name: 'Medication 2',
  status: 'Active',
  refill: 'In 5 days',
  reminder: '9:00 AM'
}, {
  id: '3',
  name: 'Medication 3',
  status: 'Inactive',
  refill: 'N/A',
  reminder: 'N/A'
}];

const PrescriptionScreen = () => {
  return <SafeAreaView style={styles.container}>
      <FlatList data={prescriptions} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={styles.card}>
            <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
            <View style={styles.details}>
              <Text style={styles.title}>{item.name}</Text>
              <Text>Status: {item.status}</Text>
              <Text>Refill: {item.refill}</Text>
              <Text>Reminder: {item.reminder}</Text>
            </View>
          </View>} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  card: {
    flexDirection: 'row',
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden'
  },
  image: {
    width: 100,
    height: 100
  },
  details: {
    padding: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default PrescriptionScreen;