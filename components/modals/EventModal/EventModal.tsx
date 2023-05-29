import { Dimensions, Image, StyleSheet } from 'react-native';
import {
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Icon,
  Text,
  VStack
} from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ITopBarMenuAction } from '../modalsSharedComponents/ModalTopBar/ModalTopBar.models';
import ModalTopBar from '../modalsSharedComponents/ModalTopBar/ModalTopBar';

const imageMinHeight = 250;

const menuActions: ITopBarMenuAction[] = [
  {
    name: 'edytuj wydarzenie',
    action: () => {
      console.log('edytuj wydarzenie')
    },
    icon: <Icon marginLeft={1} as={MaterialCommunityIcons} name="pencil" color="white"></Icon>,
  },
  {
    name: 'zgłoś gracza',
    action: () => {
      console.log('zgłoś gracza')
    },
    icon: <Icon marginLeft={1} as={MaterialCommunityIcons} name="police-badge-outline" color="white"/>,
  },
  {
    name: 'zgłoś gracza2',
    action: () => {
      console.log('zgłoś gracza')
    },
  }
];

const EventModal = () => {
  const themeTextColor = '#ffffff';
  const screenHeight = Dimensions.get('window').height;
  const modalContentHeight = screenHeight - imageMinHeight + 30;
  // const theme =  useContext(Theme);
  const theme = { color: 'red'};

  return (
    <Box bgColor={'#010101'} minHeight={screenHeight} p={6}>
      <ModalTopBar title={'Ekran wydarzenia'} menuActions={menuActions}/>

      <Box width={'100%'} position={'relative'} mt={6} p={3} bgColor={`${theme.color}.600`} roundedTop={'lg'}>
        <Box rounded={'lg'} shadow={'6'} style={newStyles.coverImageWrapper}>
          {/*<Image source={require('../../../assets/eventCovers/volleyballcover.png')} style={newStyles.coverImage}/>*/}
        </Box>
        <HStack space={3} justifyContent="flex-start" px={2} pb={5} position={'absolute'} bottom={0}>
          <Badge colorScheme="info" variant={'subtle'} rounded="6" bgColor={'blue.400'}
                 _text={{ color: '#fdfd96' }}>Siatkówka</Badge>
          <Badge colorScheme="warning" variant={'subtle'} rounded="6" bgColor={'#fdfd96'}
                 _text={{ color: 'red.900' }}> Na dworze </Badge>
        </HStack>
      </Box>

      <Box p={6} pb={4} pt={1} bgColor={`${theme.color}.600`} roundedBottom={'lg'}>
        <Heading size="md" color={'white'}>Siatkówka pod palemką</Heading>
        <HStack justifyContent="flex-start" mt={2}>
          <VStack alignItems="center" justifyContent={'center'} mr={2}>
            <Icon as={MaterialCommunityIcons} name="account-cowboy-hat-outline" color="white" size={'md'}></Icon>
          </VStack>

          <VStack alignItems="flex-start" justifyContent={'center'}>
            <Text fontSize="md" color={themeTextColor}>Paweł Arows </Text>
          </VStack>
        </HStack>
      </Box>

      <Box p={6} mt={6} bgColor={`${theme.color}.700`} rounded={'lg'}>
        <HStack justifyContent="flex-start" mt={3}>
          <VStack alignItems="center" justifyContent={'center'} mr={4}>
            <Icon as={MaterialCommunityIcons} name="calendar-clock" color="black" size={'md'}></Icon>
          </VStack>

          <VStack alignItems="flex-start" justifyContent={'center'}>
            <Text fontSize="md" color={themeTextColor}>24.01 poniedziałek 19:00 </Text>
          </VStack>
        </HStack>

        <HStack justifyContent="flex-start" mt={3}>
          <VStack alignItems="center" justifyContent={'center'} mr={4}>
            <Icon as={MaterialCommunityIcons} name="map-marker-radius-outline" color="black" size={'md'}></Icon>
          </VStack>

          <VStack alignItems="flex-start" justifyContent={'center'}>
            <Text fontSize="md" color={themeTextColor}>Szkoła podstawowa nr 46. </Text>
            <Text fontSize="md" color={themeTextColor}>ul. Bogusława 7 </Text>
          </VStack>
        </HStack>
      </Box>

      <Box p={6} mt={6} bgColor={`${theme.color}.800`} rounded={'lg'}>
        <HStack justifyContent="space-between" mt={0} alignItems={'center'}>
          <VStack alignItems="flex-start" justifyContent={'center'} mr={4}>
            <Text fontSize="lg" color={themeTextColor}>Zawodnicy: 8/12</Text>
            <HStack justifyContent="flex-start" alignItems={'flex-start'}>
              <Icon as={MaterialCommunityIcons} name="account-question-outline" color="black" size={'lg'}></Icon>
              <Text fontSize="md" color={themeTextColor} mr={3}> 14 </Text>
              <Icon as={MaterialCommunityIcons} name="account-remove-outline" color="black" size={'lg'}></Icon>
              <Text fontSize="md" color={themeTextColor}> 3 </Text>
            </HStack>
          </VStack>

          <VStack>
            <Avatar.Group _avatar={{ size: "12" }} max={3}>
              <Avatar bg="green.500" source={{
                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              }}>
                AJ
              </Avatar>
              <Avatar bg="cyan.500" source={{
                uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              }}>
                TE
              </Avatar>
              <Avatar bg="indigo.500" source={{
                uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              }}>
                JB
              </Avatar>
              <Avatar bg="amber.500" source={{
                uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              }}>
                TS
              </Avatar>
              <Avatar bg="green.500" source={{
                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              }}>
                AJ
              </Avatar>
              <Avatar bg="cyan.500" source={{
                uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              }}>
                TE
              </Avatar>
              <Avatar bg="indigo.500" source={{
                uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              }}>
                JB
              </Avatar>
              <Avatar bg="amber.500" source={{
                uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              }}>
                TS
              </Avatar>
            </Avatar.Group>
          </VStack>
        </HStack>
      </Box>

      <Box p={6} mt={6} mb={20} bgColor={`${theme.color}.900`} rounded={'lg'}>
        <Heading size="md" color={'white'}>Co się dzieje</Heading>
        <Text fontSize="md" mt={3} color={themeTextColor}>
          Spotykamy się tutaj jak co piątek w celu grania w siatkóweczkę for fun, zapraszamy wszystkie prawilne mordy
          i wariatów
        </Text>
      </Box>

      <Box
        bgColor={'rgb(45, 45, 44)'}
        w={'90%'}
        h={20}
        borderTopRadius={'32'}
        px={6}
        py={3}
        position={'fixed'}
        zIndex={3}
        bottom={-1}
        left={5}
      >
        <HStack justifyContent="space-between" mt={0} alignItems={'center'}>
          <VStack>
            <Heading size={'md'} color={'white'}>Poziom</Heading>
            <Badge colorScheme="success" variant={'outline'} rounded="6" mt={1}> Open </Badge>
          </VStack>
          <Button
            w={'60%'}
            variant="subtle"
            borderRadius={'20px'}
          >
            Join
          </Button>
        </HStack>

      </Box>
    </Box>
  )
}

const styles = StyleSheet.create({
  text: {
    color: '#1d3b5d',
  }
});

const newStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    marginHorizontal: 20,
  },
  coverImageWrapper: {
    minHeight: imageMinHeight,
    // height: '10%',
  },
  coverImage: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    borderRadius: 6,
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

export default EventModal;
