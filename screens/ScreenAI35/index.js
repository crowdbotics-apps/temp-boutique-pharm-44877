import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, Button, Image, StyleSheet } from 'react-native';

const PrescriptionDetailsScreen = () => {
  const [patientInfo, setPatientInfo] = useState('');
  const [medication, setMedication] = useState('');
  const [dosage, setDosage] = useState('');
  const [notes, setNotes] = useState('');
  const [verification, setVerification] = useState('');
  const [signature, setSignature] = useState('');
  const [attachments, setAttachments] = useState('');

  const handleSubmit = () => {// Handle prescription submission
  };

  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Enter Prescription Details</Text>
      <TextInput style={styles.input} placeholder="Patient's Information" onChangeText={setPatientInfo} value={patientInfo} />
      <TextInput style={styles.input} placeholder="Medication" onChangeText={setMedication} value={medication} />
      <TextInput style={styles.input} placeholder="Dosage Instructions" onChangeText={setDosage} value={dosage} />
      <TextInput style={styles.input} placeholder="Notes" onChangeText={setNotes} value={notes} />
      <TextInput style={styles.input} placeholder="Prescription Verification" onChangeText={setVerification} value={verification} />
      <TextInput style={styles.input} placeholder="E-signature" onChangeText={setSignature} value={signature} />
      <TextInput style={styles.input} placeholder="Attachments" onChangeText={setAttachments} value={attachments} />
      <Button title="Submit Prescription" onPress={handleSubmit} />
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10
  },
  image: {
    width: '100%',
    height: 200,
    marginTop: 20
  }
});
export default PrescriptionDetailsScreen;