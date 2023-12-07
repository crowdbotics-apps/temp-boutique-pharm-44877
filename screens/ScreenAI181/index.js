import React from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, FlatList } from 'react-native';

const Dashboard = () => {
  const data = [{
    title: 'Prescriptions',
    status: '5 Pending'
  }, {
    title: 'Customer Communications',
    status: '2 Unread'
  }, {
    title: 'Notifications',
    status: '3 New'
  }];

  const renderItem = ({
    item
  }) => <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.status}>{item.status}</Text>
    </View>;

  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Dashboard</Text>
        <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
      </View>
      <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.title} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff'
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  card: {
    margin: 20,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  status: {
    marginTop: 10,
    fontSize: 16
  }
});
export default Dashboard;