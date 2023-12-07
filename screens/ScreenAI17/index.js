import React from 'react';
import { SafeAreaView, View, Text, Image, FlatList, StyleSheet } from 'react-native';
const data = [{
  id: '1',
  title: 'Medication Recommendation',
  description: 'Based on your medical history, we recommend this medication.',
  image: 'https://tinyurl.com/42evm3m3'
}, {
  id: '2',
  title: 'Health Tip',
  description: 'Regular exercise can help boost your immune system.',
  image: 'https://tinyurl.com/42evm3m3'
}, {
  id: '3',
  title: 'Wellness Product',
  description: 'This wellness product can help improve your overall health.',
  image: 'https://tinyurl.com/42evm3m3'
}];

const Item = ({
  title,
  description,
  image
}) => <View style={styles.item}>
    <Image style={styles.image} source={{
    uri: image
  }} />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  </View>;

const PharmacyRecommendationsScreen = () => {
  const renderItem = ({
    item
  }) => <Item title={item.title} description={item.description} image={item.image} />;

  return <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Personalized Pharmacy Recommendations</Text>
      <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginVertical: 20
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
    alignItems: 'center'
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 20
  },
  textContainer: {
    flex: 1
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333'
  },
  description: {
    fontSize: 14,
    color: '#666'
  }
});
export default PharmacyRecommendationsScreen;