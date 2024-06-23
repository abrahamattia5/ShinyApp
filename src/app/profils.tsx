// profils.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Card from '../components/Card/Card';


interface Profile 
{
  name: string;
  role: string;
  image: any;
}

const profiles: Profile[] = 
[
    { name: 'Julien Brun', role: 'Développeur mobile', image: require('../assets/images/1.jpeg') },
    { name: 'Arielle Gautier', role: 'Développeuse fullstack', image: require('../assets/images/2.jpeg') },
    { name: 'Marine Carpentier', role: 'Développeuse frontend', image: require('../assets/images/3.jpeg') },
    { name: 'Lucille Barre', role: 'Product Designer', image: require('../assets/images/4.jpeg') },
    { name: 'Clément Rolland', role: 'Développeur mobile', image: require('../assets/images/5.jpeg') },
    { name: 'Grégoire Chevalier', role: 'Développeur backend', image: require('../assets/images/6.jpeg') },
    { name: 'Raphaël Rodriguez', role: 'Designer', image: require('../assets/images/7.jpeg') },
    { name: 'Hugo Vysa', role: 'Développeur frontend', image: require('../assets/images/8.jpeg') },
    { name: 'Mina Toman', role: 'Développeuse Mobile', image: require('../assets/images/11.jpeg') },
    { name: 'Amélie Leroy', role: 'Développeuse backend', image: require('../assets/images/12.jpeg') },
    { name: 'Maxime Lebrun', role: 'Intégrateur SEO', image: require('../assets/images/9.jpeg') },
  ];

const ProfilsScreen: React.FC = () => (
  <ScrollView contentContainerStyle={styles.container}>
    <Text style={styles.title}>Trouvez votre prestataire</Text>
    <Text style={styles.subtitle}>Chez Shiny nous réunissons les meilleurs profils pour vous.</Text>
    <View style={styles.profilesContainer}>
      {profiles.map((profile, index) => 
      (
        <Card
          key={index}
          name={profile.name}
          role={profile.role}
          image={profile.image}
        />
      ))}
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  profilesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default ProfilsScreen;
