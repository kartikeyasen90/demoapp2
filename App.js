import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import 'react-native-gesture-handler';
import { Provider } from 'react-redux'
import store from './redux/store';
import AuthCheck from "./Authentication"

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <AuthCheck />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
