import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-black">
      <Text className="text-xl font-bold text-black dark:text-white">Welcome to DishCovery</Text>
      <Text className="mt-4 text-gray-600 dark:text-gray-400">Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}