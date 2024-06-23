import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Header from '@/components/Header/Header';

const HomeScreen: React.FC = () => 
{
  const router = useRouter();

  const handlePress = () => {
    router.push('/survey');
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.mainContent}>
        <Text style={styles.mainText}>
          Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents
        </Text>
        <TouchableOpacity style={styles.mainButton} onPress={handlePress}>
          <Text style={styles.mainButtonText}>Faire le test</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Couleur de fond claire
    alignItems: 'center',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  mainText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333', // Couleur de texte sombre pour le contraste
  },
  mainButton: {
    backgroundColor: '#6200ea',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  mainButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default HomeScreen;
