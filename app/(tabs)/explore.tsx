import { StyleSheet, Image, Platform, View, Text, SafeAreaView } from 'react-native';

export default function TabTwoScreen() {
  return (
    <View style={{flex: 1, backgroundColor: 'white', paddingTop: 100}}>
      <Text>Explore</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
