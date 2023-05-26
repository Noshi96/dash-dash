import { StatusBar } from 'expo-status-bar';
import { Button, Platform, ScrollView, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { View } from '../components/Themed';
import { Image } from 'react-native';
import EventModal from '../components/modals/EventModal';
import { useNavigation } from 'expo-router';
import {
  Actionsheet,
  AddIcon,
  AspectRatio,
  Box,
  Button as NOSZEKICHUJ,
  Center,
  CheckIcon,
  HamburgerIcon,
  Heading,
  HStack,
  Icon,
  IconButton,
  Input,
  Menu,
  Pressable,
  Skeleton,
  Stack,
  Stagger,
  Text,
  useDisclose, useToast, VStack
} from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import GameSearchModal from '../components/modals/GameSearchModal/GameSearchModal';

const ModalScreen = (props: any) => {
  const message = 'kurwa noszek to działa';
  const navigation = useNavigation();
  const {
    isOpen,
    onOpen,
    onClose,
    onToggle,
  } = useDisclose();

  const {
    isOpen: qwe,
    onOpen: qwe2,
    onClose: qwe3,
    onToggle: qwe4,
  } = useDisclose();

  const toast = useToast();

  // const imageWidth = 150
  // const imageHeigh = scaleHeight({
  //     source: require(imageSource),
  //     desiredWidth: imageWidth
  // })

  return (
    <View>
      <GameSearchModal></GameSearchModal>
      <EventModal></EventModal>
    </View>
  )

  // @ts-ignore
  //   return (
  //   <View style={styles.container}>
  //     <ScrollView style={styles.scrollView}>
  //       <Box>
  //         <Center w="350">
  //           <VStack w="90%" maxW="400" borderWidth="1" space={0} overflow="hidden" rounded="md" _dark={{
  //             borderColor: 'coolGray.500'
  //           }} _light={{
  //             borderColor: 'coolGray.200'
  //           }}>
  //             <Skeleton h="40" />
  //             <Skeleton.Text px="4" />
  //             <Skeleton.Text px="4" />
  //             <Skeleton.Text px="4" />
  //             <Skeleton.Text px="4" />
  //             <Skeleton px="4" my="4" rounded="md" startColor="primary.100" />
  //           </VStack>
  //         </Center>
  //
  //
  //         <NOSZEKICHUJ onPress={() => toast.show({
  //           description: "Hello world"
  //         })}>
  //           Show Toast
  //         </NOSZEKICHUJ>
  //         <Box alignItems="center">
  //           <Stagger visible={qwe} initial={{
  //             opacity: 0,
  //             scale: 0,
  //             translateY: 34,
  //           }} animate={{
  //             translateY: 0,
  //             scale: 1,
  //             opacity: 1,
  //             transition: {
  //               type: 'timing',
  //               mass: 0.8,
  //               stagger: {
  //                 offset: 30,
  //                 reverse: false
  //               }
  //             }
  //           }} exit={{
  //             translateY: 34,
  //             scale: 0.5,
  //             opacity: 0,
  //             transition: {
  //               duration: 100,
  //               stagger: {
  //                 offset: 30,
  //                 reverse: false
  //               }
  //             }
  //           }}>
  //             <IconButton mb="4" variant="solid" bg="indigo.500" colorScheme="indigo" borderRadius="full" icon={<CheckIcon size="5" mt="0.5" color="emerald.500" />} />
  //             <IconButton mb="4" variant="solid" bg="teal.400" colorScheme="teal" borderRadius="full" icon={<CheckIcon size="5" mt="0.5" color="emerald.500" />} />
  //             <IconButton mb="4" variant="solid" bg="teal.400" colorScheme="teal" borderRadius="full" icon={<CheckIcon size="5" mt="0.5" color="emerald.500" />} />
  //             <IconButton mb="4" variant="solid" bg="red.500" colorScheme="red" borderRadius="full" icon={<CheckIcon size="5" mt="0.5" color="emerald.500" />} />
  //           </Stagger>
  //         </Box>
  //         <HStack justifyContent="center">
  //           <IconButton variant="solid" borderRadius="full" size="lg" onPress={qwe4} bg="cyan.400" icon={<CheckIcon size="5" mt="0.5" color="emerald.500" />} />
  //         </HStack>
  //       </Box>
  //
  //
  //
  //
  //       <Box w="100%" h={160} px={4} justifyContent="center" background={'red.900'}>
  //         <Text fontSize="16" color="gray.500" _dark={{
  //           color: "gray.300"
  //         }}>
  //           Albums
  //         </Text>
  //       </Box>
  //
  //       <Center>
  //         <NOSZEKICHUJ onPress={onOpen}>Actionsheet</NOSZEKICHUJ>
  //         <Actionsheet isOpen={isOpen} onClose={onClose}>
  //           <Actionsheet.Content>
  //             <Box w="100%" h={60} px={4} justifyContent="center">
  //               <Text fontSize="16" color="gray.500" _dark={{
  //                 color: "gray.300"
  //               }}>
  //                 Albums
  //               </Text>
  //             </Box>
  //             <Actionsheet.Item>Delete</Actionsheet.Item>
  //             <Actionsheet.Item isDisabled>Share</Actionsheet.Item>
  //             <Actionsheet.Item>Play</Actionsheet.Item>
  //             <Actionsheet.Item>Favourite</Actionsheet.Item>
  //             <Actionsheet.Item onPress={onClose}>Cancel</Actionsheet.Item>
  //           </Actionsheet.Content>
  //         </Actionsheet>
  //       </Center>
  //
  //
  //
  //
  //
  //         <Menu w="190" placement={'bottom'} trigger={triggerProps => {
  //             return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
  //                 <Center>
  //                   <HamburgerIcon />
  //                 </Center>
  //             </Pressable>;
  //         }}>
  //             <Menu.Item>Nunito Sans</Menu.Item>
  //             <Menu.Item>
  //                 {/*<Text style={styles.title}>Modal</Text>*/}
  //                 <Image source={require('../assets/eventCovers/volleyballcover.png')} style={styles.coverImage}/>
  //             </Menu.Item>
  //             <Menu.Item>
  //               <LinearGradient
  //                 // Button Linear Gradient
  //                 style={styles.rainbow}
  //                 colors={['#91adef', '#4fb282', '#c74888']}>
  //
  //                 <Text mx="auto" my="5"> NEWS </Text>
  //               </LinearGradient>
  //             </Menu.Item>
  //             <Menu.Item>Poppins</Menu.Item>
  //             <Menu.Item>SF Pro</Menu.Item>
  //             <Menu.Item>Helvetica</Menu.Item>
  //             <Menu.Item isDisabled>Sofia</Menu.Item>
  //             <Menu.Item>Cookie</Menu.Item>
  //         </Menu>
  //
  //       <Box>
  //         <LinearGradient
  //           // Button Linear Gradient
  //           colors={['#91adef', '#4fb282', '#c74888']}>
  //
  //           <Input mx="auto" my="5" placeholder="Input" w="50%"/>
  //         </LinearGradient>
  //       </Box>
  //
  //         <Box
  //           shadow="2"
  //           rounded="lg"
  //           w={{ base: "64", md: "80", lg: "md" }}
  //           _light={{ bg: "coolGray.50" }}
  //           _dark={{ bg: "gray.700" }}
  //         >
  //             <Image source={require('../assets/eventCovers/volleyballcover.png')} style={styles.coverImage}/>
  //             <Text bold position="absolute" color="coolGray.50" top="0" m="4">
  //                 NEWS
  //             </Text>
  //             <Stack space="2" p="4">
  //                 <Text color="gray.400">May 15, 2023</Text>
  //                 <Heading  fontWeight="medium">
  //                     The Garden City
  //                 </Heading>
  //                 <Text isTruncated noOfLines={8}>
  //                     Bengaluru (also called Bangalore) is the center of India's
  //                     high-tech industry. It is located in southern India on the Deccan
  //                     Plateau.The city is also known for its parks and nightlife.
  //                     Bangalore is the major center of India's IT industry, popularly
  //                     known as the Silicon Valley of India.
  //                 </Text>
  //             </Stack>
  //             <HStack space="3" px="4" pb="4">
  //                 <Text _light={{ color : "emerald.800" }} _dark={{ color : "emerald.300" }}>
  //                     Find out more
  //                 </Text>
  //             </HStack>
  //         </Box>
  //
  //       <Button title={'asd'} onPress={() => {
  //         navigation.goBack()
  //       }}/>
  //       <Image source={require('../assets/eventCovers/volleyballcover.png')} style={styles.coverImage}/>
  //       <EventModal></EventModal>
  //       <EventModal></EventModal>
  //       <EventModal></EventModal>
  //       <EventModal></EventModal>
  //       <EventModal></EventModal>
  //       <EventModal></EventModal>
  //       <View style={styles.nestedView}>
  //         <Text> {message} </Text>
  //       </View>
  //       <Text style={styles.title}>Modal</Text>
  //       <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
  //       <EditScreenInfo path="app/modal.tsx"/>
  //
  //       {/* Use a light status bar on iOS to account for the black space above the modal */}
  //       <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'}/>
  //
  //
  //         <Box alignItems="center">
  //             <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
  //                 borderColor: "coolGray.600",
  //                 backgroundColor: "gray.700"
  //             }} _web={{
  //                 shadow: 2,
  //                 borderWidth: 0
  //             }} _light={{
  //                 backgroundColor: "gray.50"
  //             }}>
  //                 <Box>
  //                     <AspectRatio w="100%" ratio={16 / 9}>
  //                         <Image source={{
  //                             uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
  //                         }} alt="image" />
  //                     </AspectRatio>
  //                     <Center bg="violet.500" _dark={{
  //                         bg: "violet.400"
  //                     }} _text={{
  //                         color: "warmGray.50",
  //                         fontWeight: "700",
  //                         fontSize: "xs"
  //                     }} position="absolute" bottom="0" px="3" py="1.5">
  //                         PHOTOS
  //                     </Center>
  //                 </Box>
  //                 <Stack p="4" space={3}>
  //                     <Stack space={2}>
  //                         <Heading size="md" ml="-1">
  //                             The Garden City
  //                         </Heading>
  //                         <Text fontSize="xs" _light={{
  //                             color: "violet.500"
  //                         }} _dark={{
  //                             color: "violet.400"
  //                         }} fontWeight="500" ml="-0.5" mt="-1">
  //                             The Silicon Valley of India.
  //                         </Text>
  //                     </Stack>
  //                     <Text fontWeight="400">
  //                         Bengaluru (also called Bangalore) is the center of India's high-tech
  //                         industry. The city is also known for its parks and nightlife.
  //                     </Text>
  //                     <HStack alignItems="center" space={4} justifyContent="space-between">
  //                         <HStack alignItems="center">
  //                             <Text color="coolGray.600" _dark={{
  //                                 color: "warmGray.200"
  //                             }} fontWeight="400">
  //                                 6 mins ago
  //                             </Text>
  //                         </HStack>
  //                     </HStack>
  //                 </Stack>
  //             </Box>
  //         </Box>;
  //
  //
  //
  //
  //
  //     </ScrollView>
  //   </View>
  // );
}


const styles = StyleSheet.create({
  rainbow: {
    width: '100%',
  },
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
    height: 150,
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

export default ModalScreen;
