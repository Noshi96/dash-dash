import { StyleSheet } from 'react-native';
import { View } from '../components/Themed';
import EventModal from '../components/modals/EventModal';
import GameSearchModal from '../components/modals/GameSearchModal/GameSearchModal';

const ModalScreen = () => {
  return (
    <View>
      <GameSearchModal></GameSearchModal>
      <EventModal></EventModal>
    </View>
  )
}

export default ModalScreen;
