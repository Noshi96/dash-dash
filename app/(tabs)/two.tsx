import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import { Box, Heading, Icon, Input, ScrollView, Stack } from 'native-base';
import EventCard from '../../components/shared/EventCard';
import { useContext } from 'react';
import { Theme } from '../_layout';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import GameSearchModal from '../../components/modals/GameSearchModal/GameSearchModal';

const TabTwoScreen = () => {
  const theme =  useContext(Theme);

  return (
    <ScrollView>
      <SafeAreaView style={{ paddingTop: StatusBar.currentHeight }}>
        <GameSearchModal></GameSearchModal>
        <Stack p={6} space={4}>
          <Box rounded="lg" bgColor={`${theme.color}.900`} w={'100%'} minH={'44px'} mt={32}
               alignItems={'center'} justifyContent={'center'}>
            <Heading size={'sm'} color={'white'}> Chyba że to Cię zainteresuję </Heading>
          </Box>
          <EventCard></EventCard>
          <EventCard></EventCard>
          <EventCard></EventCard>
        </Stack>
      </SafeAreaView>
    </ScrollView>
  );
}

export default TabTwoScreen;
