import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface CardProps 
{
  name: string;
  role: string;
  image: any; // Utilisez `any` pour permettre l'utilisation de `require`
}

const Card: React.FC<CardProps> = ({ name, role, image }) => 
(
  <View style={styles.card}>
    <Image source={image} style={styles.image} />
    <Text style={styles.role}>{role}</Text>
    <Text style={styles.name}>{name}</Text>
  </View>
);

const styles = StyleSheet.create(
{
  card: {
    width: '45%',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  role: {
    fontSize: 14,
    color: '#888',
    height: 40,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Card;
