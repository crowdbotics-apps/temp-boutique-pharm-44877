import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const TargetAudienceSelection = () => {
  const [selectedId, setSelectedId] = useState(null);
  const DATA = [{
    id: '1',
    title: 'Demographics'
  }, {
    id: '2',
    title: 'Medical Conditions'
  }, {
    id: '3',
    title: 'Prescription History'
  }, {
    id: '4',
    title: 'Other Factors'
  }];

  const Item = ({
    item,
    onPress,
    style
  }) => <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>;

  const renderItem = ({
    item
  }) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    return <Item item={item} onPress={() => setSelectedId(item.id)} style={{
      backgroundColor
    }} />;
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.headerText}>Target Audience Selection</Text>
      </View>
      <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} extraData={selectedId} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10
  },
  title: {
    fontSize: 16
  }
});
export default TargetAudienceSelection;