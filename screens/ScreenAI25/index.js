import React from 'react';
import { SafeAreaView, View, Text, Image, FlatList, StyleSheet } from 'react-native';
const prescriptions = [{
  id: '1',
  type: 'New',
  patient: 'John Doe',
  medication: 'Medication 1'
}, {
  id: '2',
  type: 'Refill',
  patient: 'Jane Doe',
  medication: 'Medication 2'
}, {
  id: '3',
  type: 'Verified',
  patient: 'John Smith',
  medication: 'Medication 3'
} // Add more dummy data as needed
];

const PrescriptionQueueScreen = () => {
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Prescription Queue</Text>
      <FlatList data={prescriptions} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={styles.card}>
            <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
            <View style={styles.cardContent}>
              <Text style={styles.type}>{item.type}</Text>
              <Text style={styles.patient}>{item.patient}</Text>
              <Text style={styles.medication}>{item.medication}</Text>
            </View>
          </View>} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10
  },
  card: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 5,
    elevation: 3
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 10
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center'
  },
  type: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333'
  },
  patient: {
    fontSize: 16,
    color: '#666'
  },
  medication: {
    fontSize: 14,
    color: '#999'
  }
});
export default PrescriptionQueueScreen;