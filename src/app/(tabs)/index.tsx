import { useState } from 'react';
import { View, Text, ScrollView, Button, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native';
import { StyleSheet } from 'react-native';

export default function HomeScreen() 
{
  const [input, setInput] = useState('')

  function onPress() 
  {
    alert('Se connecter')
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white', paddingTop: 50}}>
      <ScrollView>
        <View>

          <Text style={styles.title} >
            Bienvenue sur mon app
          </Text>

          <TextInput placeholder="Email" onChangeText={(value)=>{setInput(value)}} />

          <View style={styles.button}>
            <Button title="Se connecter" onPress={() => {onPress()}} />
          </View>

          <Text style={styles.label}>
            my input : {input}
          </Text>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create(
{
  container: 
  {
    flex: 1,
    backgroundColor: '#fff',
  },

  title: 
  {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    
  },

  button: 
  {
    marginTop: 20,
    padding: 50,
  },

  label:
  {
    marginTop: 20,
    padding: 50,
  }
  
});
