import { Link } from 'expo-router';
import { StyleSheet, View } from 'react-native';

export const Profile = () => {
  return (
    <View style={styles.container}>
      <Link style={styles.link} href="/">
        Home
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  link: {
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: '#7b2d26',
  },
});
