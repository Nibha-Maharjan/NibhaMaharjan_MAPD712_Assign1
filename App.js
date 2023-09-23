import { StyleSheet, Text, View } from 'react-native';
import BMIcalculator from './components/calculator';

export default function App() {
  return (
    <View style={styles.container}> 
      <BMIcalculator/>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop:-200,
    flex: 1,
    backgroundColor: '#d9f7eb',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 60,
    paddingRight:60,
    
  },
});
