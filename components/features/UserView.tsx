import { Avatar, Box, Center, Heading, HStack, Image, Text } from 'native-base';
import { Dimensions } from 'react-native';
import EditableIconsSection from '../shared/EditableIconsSection';

const UserView = () => {
  const screenHeight = Dimensions.get('window').height;
  const themeColor = 'blue';

  return (
    <Box bgColor={'#010101'} minHeight={screenHeight} p={6}>

      <Box bgColor={'#3F3F46'} rounded="lg">
        <Avatar bg="purple.600" alignSelf="center" mt={12} size="2xl" source={{
          uri: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
        }}>
          RB
        </Avatar>
        <Center my={6} p={6}>
          <Heading size={'lg'}> Golden Retriever </Heading>
          <Text fontSize="md" color={`${themeColor}.100`} fontWeight="500">
            Niszczyciel światów
          </Text>
          <Box bgColor={`${themeColor}.600`} rounded="lg" p={6} mt={6}>
            <Text fontSize="md" color={"white"} fontWeight="500" textAlign={'left'}>
              Pies domowy (Canis familiaris) to udomowiony ssak z rzędu ssaków drapieżnych z rodziny psowatych.
              Jest częstym towarzyszem życia człowieka.
            </Text>
          </Box>
        </Center>

      </Box>

      <Box
        p={6}
        bgColor={`${themeColor}.600`} rounded="lg" minHeight={20} mt={5}
        display={'flex'} alignItems={'center'} justifyContent={'center'}
      >
        <Heading size={'md'} color={'white'} width={'100%'}>Rozegrane Gry </Heading>

        <HStack justifyContent="space-between" mt={6} mb={3} space={12}>
          <Box h="24" w={24} bg={`${themeColor}.500`} rounded="md" shadow={3} alignItems={'center'} justifyContent={'center'}>
            <Text fontSize="lg" color={"white"} fontWeight="700" textAlign={'center'}>
              127
            </Text>
            <Text fontSize="md" color={"warmGray.200"} fontWeight="500" textAlign={'center'}>
              E-sport
            </Text>
          </Box>

          <Box h="24" w={24} bg={`${themeColor}.500`} rounded="md" shadow={3} alignItems={'center'} justifyContent={'center'}>
            <Text fontSize="lg" color={"white"} fontWeight="700" textAlign={'center'}>
              24
            </Text>
            <Text fontSize="md" color={"warmGray.200"} fontWeight="500" textAlign={'center'}>
              Sport
            </Text>
          </Box>
        </HStack>
      </Box>

      <Box
        p={6}
        bg={`${themeColor}.700`} rounded="lg" mt={5}
      >
        <EditableIconsSection headerText={'Kontakt'}></EditableIconsSection>
      </Box>

      <Box
        p={6}
        bg={`${themeColor}.800`} rounded="lg" mt={5}
      >
        <EditableIconsSection headerText={'Giereczki'}></EditableIconsSection>
      </Box>

      <Box
        p={6}
        bg={`${themeColor}.900`} rounded="lg" mt={5}
      >
        <EditableIconsSection headerText={'Uprawiane sporty'}></EditableIconsSection>
      </Box>
    </Box>
  )
}

export default UserView;
