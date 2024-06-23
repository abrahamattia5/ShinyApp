// src/app/(tabs)/survey.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import Header from '@/components/Header/Header';

const survey: { [key: string]: string } = {
  '1': 'Votre site doit-il sauvegarder des données entrées par vos utilisateurs ?',
  '2': 'Votre application doit-elle impérativement apparaître en premier dans les résultats de recherche ?',
  '3': 'Avez-vous déjà des maquettes pour l\'application que vous voulez créer ?',
  '4': 'Le site comporte-t-il une fonction d\'authentification ?',
  '5': 'Souhaitez-vous avoir plusieurs types de comptes pour votre application (administrateur, visiteur, utilisateur, etc) ?',
  '6': 'Avez-vous prévu une version mobile à part entière ?'
};

const SurveyScreen: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const router = useRouter();

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleNext = () => {
    if (selectedAnswer !== null) {
      const updatedAnswers = { ...answers, [currentQuestion]: selectedAnswer };
      setAnswers(updatedAnswers);
      setSelectedAnswer(null);

      if (currentQuestion < Object.keys(survey).length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        router.push({
          pathname: '/result',
          params: { answers: JSON.stringify(updatedAnswers) }
        });
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 1) {
      setSelectedAnswer(answers[currentQuestion - 1]);
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.questionTitle}>Question {currentQuestion}</Text>
        <Text style={styles.questionText}>{survey[currentQuestion.toString()]}</Text>
        <View style={styles.answerContainer}>
          <TouchableOpacity
            style={[styles.answerButton, selectedAnswer === 'Oui' && styles.selectedAnswer]}
            onPress={() => handleAnswer('Oui')}
          >
            <Text style={styles.answerText}>Oui</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.answerButton, selectedAnswer === 'Non' && styles.selectedAnswer]}
            onPress={() => handleAnswer('Non')}
          >
            <Text style={styles.answerText}>Non</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.navigationContainer}>
          {currentQuestion > 1 ? (
            <TouchableOpacity onPress={handlePrevious}>
              <Text style={styles.navigationText}>Précédent</Text>
            </TouchableOpacity>
          ) : (
            <View style={{ flex: 1 }} />
          )}
          <TouchableOpacity onPress={handleNext}>
            <Text style={styles.navigationText}>
              {currentQuestion < Object.keys(survey).length ? 'Suivant' : 'Résultat'}
            </Text>
          </TouchableOpacity>
        </View>
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  questionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  questionText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  answerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  answerButton: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 20,
    width: '40%',
    alignItems: 'center',
  },
  selectedAnswer: {
    backgroundColor: '#e0e0e0',
  },
  answerText: {
    fontSize: 16,
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  navigationText: {
    fontSize: 16,
    color: '#6200ea',
  },
});

export default SurveyScreen;
