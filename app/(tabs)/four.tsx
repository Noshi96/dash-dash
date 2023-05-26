import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from 'react-native';

import { Text } from '../../components/Themed';
import UserView from '../../components/features/UserView';

export default function FourthScreen() {
  return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <UserView></UserView>
        </ScrollView>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
  },
});
