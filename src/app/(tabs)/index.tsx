import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
        <View style={styles.nav}>
          <Link style={styles.navItem} href="/accueil">Accueil</Link>
          <Link style={styles.navItem} href="/profils">Profils</Link>
          <TouchableOpacity style={styles.navButton}>
            <Link style={styles.navButtonText} href="/about">Faire le test</Link>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.mainContent}>
        <Text style={styles.mainText}>Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents</Text>
        <TouchableOpacity style={styles.mainButton}>
          <Text style={styles.mainButtonText}>Faire le test</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  logo: {
    marginRight: 30,
    width: 90,
    height: 30,
  },
  nav: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navItem: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#333',
  },
  navButton: {
    backgroundColor: '#6200ea',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  navButtonText: {
    color: '#fff',
    fontSize: 16,
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
