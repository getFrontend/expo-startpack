import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-blue-200">
      <Text className="mb-3 text-3xl text-center">Start your project with</Text>
      <Text className="text-blue-500 text-8xl text-center font-bold">EXPO</Text>
    </SafeAreaView>
  );
}
