import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, ScrollView } from 'react-native';

const PrescriptionDetails = () => {
  const prescriptionData = {
    patient: {
      name: 'John Doe',
      age: 45,
      medicalHistory: 'Diabetes, High Blood Pressure'
    },
    medication: {
      name: 'Metformin',
      dosage: '500mg',
      form: 'Tablet',
      warnings: 'May cause upset stomach',
      instructions: 'Take with food',
      specialConsiderations: 'Monitor blood sugar regularly'
    }
  };
  return <SafeAreaView style={_styles.WCabEbfQ}>
      <ScrollView style={_styles.YPdjusuR}>
        <View style={_styles.zYTbLEov}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={_styles.GRMqQleI} />
          <Text style={_styles.zzHDdsji}>
            {prescriptionData.patient.name}
          </Text>
        </View>
        <View style={_styles.tEEiAoSC}>
          <Text style={_styles.HVLUQbvd}>Medication:</Text>
          <Text style={_styles.KJclpJNS}>{prescriptionData.medication.name}</Text>
          <Text style={_styles.ZzhaGKSJ}>{prescriptionData.medication.dosage}</Text>
          <Text style={_styles.uSOjlUnX}>{prescriptionData.medication.form}</Text>
        </View>
        <View style={_styles.nQlpvqpk}>
          <Text style={_styles.dNoCfATI}>Warnings:</Text>
          <Text style={_styles.OolFxztQ}>{prescriptionData.medication.warnings}</Text>
        </View>
        <View style={_styles.FPSNJOUH}>
          <Text style={_styles.XZAwvGYS}>Instructions:</Text>
          <Text style={_styles.chQKQwoT}>{prescriptionData.medication.instructions}</Text>
        </View>
        <View style={_styles.yvSTYOCK}>
          <Text style={_styles.XqXItpNP}>Special Considerations:</Text>
          <Text style={_styles.KLRnGQfF}>{prescriptionData.medication.specialConsiderations}</Text>
        </View>
        <View>
          <Text style={_styles.jlxMusxP}>Medical History:</Text>
          <Text style={_styles.aXbWhDwQ}>{prescriptionData.patient.medicalHistory}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>;
};

export default PrescriptionDetails;

const _styles = StyleSheet.create({
  WCabEbfQ: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  YPdjusuR: {
    margin: 20
  },
  zYTbLEov: {
    alignItems: "center",
    marginBottom: 20
  },
  GRMqQleI: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  zzHDdsji: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10
  },
  tEEiAoSC: {
    marginBottom: 20
  },
  HVLUQbvd: {
    fontSize: 18,
    fontWeight: "bold"
  },
  KJclpJNS: {
    fontSize: 16
  },
  ZzhaGKSJ: {
    fontSize: 16
  },
  uSOjlUnX: {
    fontSize: 16
  },
  nQlpvqpk: {
    marginBottom: 20
  },
  dNoCfATI: {
    fontSize: 18,
    fontWeight: "bold"
  },
  OolFxztQ: {
    fontSize: 16
  },
  FPSNJOUH: {
    marginBottom: 20
  },
  XZAwvGYS: {
    fontSize: 18,
    fontWeight: "bold"
  },
  chQKQwoT: {
    fontSize: 16
  },
  yvSTYOCK: {
    marginBottom: 20
  },
  XqXItpNP: {
    fontSize: 18,
    fontWeight: "bold"
  },
  KLRnGQfF: {
    fontSize: 16
  },
  jlxMusxP: {
    fontSize: 18,
    fontWeight: "bold"
  },
  aXbWhDwQ: {
    fontSize: 16
  }
});