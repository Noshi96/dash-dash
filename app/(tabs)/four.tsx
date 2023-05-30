import { SafeAreaView, ScrollView, StatusBar } from 'react-native';

import UserView from '../../components/features/UserView';

const FourthScreen = () => {
  return (
    <ScrollView>
      <SafeAreaView style={{paddingTop: StatusBar.currentHeight}}>
          <UserView></UserView>
      </SafeAreaView>
    </ScrollView>
  );
};

export default FourthScreen;

