import React from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const PatientProfile = () => {
  const patientData = {
    name: 'John Doe',
    contact: '123-456-7890',
    email: 'johndoe@example.com',
    medicalHistory: 'Diabetes, High Blood Pressure',
    notes: 'Patient is allergic to penicillin.'
  };
  return <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.profileContainer}>
          <Image style={styles.profileImage} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
          <Text style={styles.nameText}>{patientData.name}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Contact: {patientData.contact}</Text>
          <Text style={styles.infoText}>Email: {patientData.email}</Text>
          <Text style={styles.infoText}>Medical History: {patientData.medicalHistory}</Text>
          <Text style={styles.infoText}>Notes: {patientData.notes}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 20
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10
  },
  infoContainer: {
    margin: 20
  },
  infoText: {
    fontSize: 18,
    marginBottom: 10
  }
});
export default PatientProfile;