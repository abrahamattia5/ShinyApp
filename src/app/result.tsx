// src/app/(tabs)/result.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import Header from '@/components/Header/Header';

const ResultScreen: React.FC = () => {
  const { answers } = useLocalSearchParams();
  const parsedAnswers = JSON.parse(answers as string) as { [key: number]: string };

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
});

export default ResultScreen;
