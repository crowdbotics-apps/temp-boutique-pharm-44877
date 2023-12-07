import React from 'react';
import { SafeAreaView, View, Text, Image, FlatList, StyleSheet } from 'react-native';
const DATA = [{
  id: '1',
  title: 'Prescription',
  description: 'Amoxicillin 500mg'
}, {
  id: '2',
  title: 'Diagnosis',
  description: 'Strep Throat'
}, {
  id: '3',
  title: 'Treatment History',
  description: 'Antibiotics for 10 days'
}];

const Item = ({
  title,
  description
}) => <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{description}</Text>
  </View>;

const MedicalRecordsScreen = () => {
  const renderItem = ({
    item
  }) => <Item title={item.title} description={item.description} />;

  return <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Medical Records</Text>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8'
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginVertical: 20
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333'
  },
  description: {
    fontSize: 18,
    color: '#666'
  }
});
export default MedicalRecordsScreen;