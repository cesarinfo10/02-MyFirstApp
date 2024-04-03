import { SafeAreaView, Text, View } from "react-native"
import { HelloWordScreen } from "./src/presentation/screens/HelloWordScreen"

export const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HelloWordScreen name="César Sánchez"/> 
      </SafeAreaView>
  )
  }