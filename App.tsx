import { SafeAreaView, Text, View } from "react-native"
import { HelloWordScreen } from "./src/presentation/screens/HelloWordScreen"
import { CounterScreen } from './src/presentation/screens/CounterScreen';

export const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
     { /*<HelloWordScreen name="César Sánchez"/>*/ }
     <CounterScreen/>
      </SafeAreaView>
  )
  }