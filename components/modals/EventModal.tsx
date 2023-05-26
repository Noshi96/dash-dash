import { Dimensions, Image, StyleSheet } from 'react-native';
import { useNavigation } from 'expo-router';
import {
  Avatar,
  Badge,
  Box,
  Button,
  ChevronLeftIcon,
  Divider,
  Heading,
  HStack,
  Icon,
  IconButton,
  Menu,
  Pressable,
  Text,
  ThreeDotsIcon,
  VStack
} from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const imageMinHeight = 300;

const EventModal = () => {
  const navigation = useNavigation();
  const themeTextColor = '#000000';
  const screenHeight = Dimensions.get('window').height;
  const modalContentHeight = screenHeight - imageMinHeight + 30;

  return (
    <Box bgColor={'white'}>
      <Box width={'100%'} position={'relative'}>
        <Box alignItems={'stretch'} flexDirection={'row'} justifyContent={'space-between'} position={'absolute'}
             zIndex={1} width={'100%'} p={3}>
          <IconButton borderRadius="full" size={'md'} _pressed={{ bg: 'coolGray.800:alpha.20' }}
                      icon={<ChevronLeftIcon/>} _icon={{ color: 'white', size: 'md' }}
                      onPress={() => {
                        navigation.goBack()
                      }}
          />

          <Menu defaultIsOpen={false} placement={'left top'} trigger={triggerProps => {
            return <Pressable accessibilityLabel="More options menu" {...triggerProps} p={3}>
              <ThreeDotsIcon size={'md'} color={'white'}/>
            </Pressable>;
          }}>
            <Menu.Item px={0}>
              <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Icon marginLeft={1} as={MaterialCommunityIcons} name="pencil" color="white"></Icon>
                <Text mx={2}> Edit event </Text>
              </Box>
            </Menu.Item>

            <Menu.Item px={0}>
              <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Icon marginLeft={1} as={MaterialCommunityIcons} name="police-badge-outline" color="white"/>
                <Text mx={2}> Report player </Text>
              </Box>
            </Menu.Item>
          </Menu>
        </Box>

        <Image source={require('../../assets/eventCovers/volleyballcover.png')} style={newStyles.coverImage}/>
        <HStack space={3} justifyContent="flex-start" px={5} pb={4} position={'absolute'} bottom={0}>
          <Badge colorScheme="info" variant={'subtle'} rounded="6" bgColor={'blue.400'}
                 _text={{ color: '#fdfd96' }}>Siatkówka</Badge>
          <Badge colorScheme="warning" variant={'subtle'} rounded="6" bgColor={'#fdfd96'}
                 _text={{ color: 'red.900' }}> Na dworze </Badge>
        </HStack>
      </Box>

      <LinearGradient colors={['#fdfd96', 'rgb(96, 165, 250)']}>
      {/*<LinearGradient colors={['#fdfd96', '#B34240']}>*/}
        <Box p={6} pb={30} _text={{ color: 'red.900' }} minHeight={modalContentHeight}>
          <Heading size="lg" color={'red.900'}>Siatkówka pod palemką</Heading>
          <HStack justifyContent="flex-start" mt={1}>
            <VStack alignItems="center" justifyContent={'center'} mr={4}>
              <Icon as={MaterialCommunityIcons} name="account-cowboy-hat-outline" color="black" size={'md'}></Icon>
            </VStack>

            <VStack alignItems="flex-start" justifyContent={'center'}>
              <Text fontSize="md" color={themeTextColor}>Paweł Arows </Text>
            </VStack>
          </HStack>


          {/*<Text fontSize="md" color={themeTextColor}>By: Paweł Arows </Text>*/}
          <Divider my="3" bgColor={"muted.800"}/>


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

          <Divider my="6" bgColor={"muted.800"}/>

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

          <Divider my="6" bgColor={"muted.800"}/>

          <Heading size="md" color={'red.900'}>Co się dzieje</Heading>
          <Text fontSize="md" mt={3} color={themeTextColor}>
            Spotykamy się tutaj jak co piątek w celu grania w siatkóweczkę for fun, zapraszamy wszystkie prawilne mordy
            i wariatów
          </Text>
        </Box>

        <Box
          bgColor={'rgb(45, 45, 44)'}
          w={'100%'}
          h={20}
          borderTopRadius={'32'}
          px={6}
          py={3}
          position={'fixed'}
          zIndex={3}
          bottom={-1}
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
      </LinearGradient>
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
  coverImage: {
    resizeMode: 'cover',
    width: '100%',
    minHeight: imageMinHeight,
    height: '25%',
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
