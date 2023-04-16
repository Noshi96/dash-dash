import { StatusBar } from 'expo-status-bar';
import { Platform, ScrollView, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import EventModal from '../components/EventModal';

export default function ModalScreen() {
  const message = 'kurwa noszek to działa';

  return (
    <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
            <EventModal></EventModal>
            <EventModal></EventModal>
            <EventModal></EventModal>
            <EventModal></EventModal>
            <EventModal></EventModal>
            <EventModal></EventModal>
            <View style={styles.nestedView}>
                <Text> {message} </Text>
            </View>
            <Text style={styles.title}>Modal</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <EditScreenInfo path="app/modal.tsx" />

            {/* Use a light status bar on iOS to account for the black space above the modal */}
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  nestedView: {
    height: 100,
    width: 100,
    backgroundColor: 'orange',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
