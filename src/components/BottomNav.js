import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function BottomNav({ navigate }) {
  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={() => navigate('support')}>
        <Ionicons name="headset-outline" size={28} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigate('cloud')}>
        <Ionicons name="cloud-outline" size={28} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigate('home')}>
        <Ionicons name="home" size={28} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigate('search')}>
        <Ionicons name="search-outline" size={28} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigate('configuration')}>
        <Ionicons name="person-outline" size={28} />
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    height: 70,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 20
  },
});