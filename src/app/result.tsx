// src/app/(tabs)/result.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import Header from '@/components/Header/Header';

const ResultScreen: React.FC = () => {
  const { answers } = useLocalSearchParams();
  const parsedAnswers = JSON.parse(answers as string) as { [key: number]: string };
  const router = useRouter();

  const handleShowProfiles = () => {
    router.push('/profils');
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Résultats du questionnaire</Text>
        {Object.keys(parsedAnswers).map((key) => (
          <View key={key} style={styles.resultItem}>
            <Text style={styles.questionText}>Question {key}:</Text>
            <Text style={styles.answerText}>{parsedAnswers[parseInt(key)]}</Text>
          </View>
        ))}
        <TouchableOpacity style={styles.profilesButton} onPress={handleShowProfiles}>
          <Text style={styles.profilesButtonText}>Afficher les prestataires</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Couleur de fond claire
  },
  content: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  resultItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  questionText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  answerText: {
    fontSize: 16,
  },
  profilesButton: {
    backgroundColor: '#6200ea',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
  },
  profilesButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default ResultScreen;
