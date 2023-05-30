import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { Box, ScrollView, Stack } from 'native-base';
import EventCard from '../../components/shared/EventCard';


const TabOneScreen = () => {
  return (
    <ScrollView>
      <SafeAreaView style={{ paddingTop: StatusBar.currentHeight }}>
        <Stack style={styles.container} p={6} space={8}>
          <EventCard></EventCard>
          <EventCard></EventCard>
          <EventCard></EventCard>
        </Stack>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    overflow: 'scroll',
  },
});

export default TabOneScreen;
