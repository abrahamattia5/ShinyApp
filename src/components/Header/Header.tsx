import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

const Header = () => 
{
  return (
    <View style={styles.header}>
      
      <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
      
      <View style={styles.nav}>
        <TouchableOpacity>
          <Link style={styles.navItem} href="/accueil">Accueil</Link>
        </TouchableOpacity>
        <TouchableOpacity>
          <Link style={styles.navItem} href="/profils">Profils</Link>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Link style={styles.navButtonText} href="/about">Faire le test</Link>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    backgroundColor: '#f9f9f9', // Couleur de fond clair
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
});

export default Header;
