// Name: Nibha Maharjan
// Student ID: 301282952
// Date completed: September 24th 2023
// App description: BMI Calculator

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
    marginTop:-100,
    flex: 1,
    backgroundColor: '#264653',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 60,
    paddingRight:60,
    
  },
});
