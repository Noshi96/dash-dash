import { StyleSheet } from 'react-native';
import { Box, Stack } from 'native-base';
import EventCard from '../../components/shared/EventCard';


const TabOneScreen = () => {
  return (
    <Stack style={styles.container} p={6} space={8}>
      <EventCard></EventCard>
      <EventCard></EventCard>
      <EventCard></EventCard>
    </Stack>
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
