import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { Box, Heading, ScrollView, Stack } from 'native-base';
import EventCard from '../../components/shared/EventCard';
import { useContext } from 'react';
import { Theme } from '../_layout';


const TabOneScreen = () => {
  const theme =  useContext(Theme);

  return (
    <ScrollView>
      <SafeAreaView style={{ paddingTop: StatusBar.currentHeight }}>
        <Stack p={6} space={4}>
          <Box rounded="lg" bgColor={`${theme.color}.500`} w={'100%'} minH={'44px'} alignItems={'center'} justifyContent={'center'}>
            <Heading size={'sm'} color={'white'}> Nadchodzące wydarzenia </Heading>
          </Box>
          <EventCard></EventCard>
          <EventCard></EventCard>
          <EventCard></EventCard>

          <Box rounded="lg" bgColor={`${theme.color}.900`} w={'100%'} minH={'44px'} mt={6}
               alignItems={'center'} justifyContent={'center'}>
            <Heading size={'sm'} color={'white'}> Zakończone wydarzenia </Heading>
          </Box>
          <EventCard></EventCard>
          <EventCard></EventCard>
          <EventCard></EventCard>
        </Stack>
      </SafeAreaView>
    </ScrollView>
  );
}

export default TabOneScreen;
