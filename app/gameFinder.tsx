import { View } from '../components/Themed';
import GameSearchModal from '../components/modals/GameSearchModal/GameSearchModal';
import { ScrollView } from 'native-base';
import { SafeAreaView, StatusBar } from 'react-native';

const GameFinderScreen = () => {
  return (
    <SafeAreaView style={{paddingTop: StatusBar.currentHeight}}>
      <ScrollView>
        <GameSearchModal></GameSearchModal>
      </ScrollView>
    </SafeAreaView>
  )
}

export default GameFinderScreen;
