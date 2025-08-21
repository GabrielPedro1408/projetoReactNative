import { StyleSheet, Text, View } from 'react-native';
import { Index } from './src/routes/Index';

export default function App() {
  return (
    <View style={styles.container}>
      <Index/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
