import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Link style={styles.link} href="/profile">
        Profile
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  link: {
    textAlign: "center",
    padding: 10,
    fontWeight: "bold",
    color: "#ffffff",
    backgroundColor: "#0b7a75",
  },
});
