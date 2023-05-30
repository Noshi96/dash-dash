import { View } from '../components/Themed';
import EventModal from '../components/modals/EventModal/EventModal';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';

const ModalScreen = () => {
  return (
    <SafeAreaView style={{paddingTop: StatusBar.currentHeight}}>
      <ScrollView>
        <EventModal></EventModal>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ModalScreen;
