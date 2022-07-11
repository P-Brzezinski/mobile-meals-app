import { Text, View, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";

const MealsOverwiecScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Meal screen</Text>
    </View>
  );
};

export default MealsOverwiecScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
