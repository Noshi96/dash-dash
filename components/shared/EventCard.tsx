import { AspectRatio, Badge, Box, Button, Center, Heading, HStack, Image, Stack, Text, VStack } from 'native-base';
import { StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const EventCard = () => {


  return (
    <Box w="100%" rounded="lg" overflow="hidden" borderColor="coolGray.800" borderWidth="5" backgroundColor="gray.700">
      <Box>
        <Link href="/modal">
          <Image source={require('../../assets/eventCovers/volleyballcover.png')} style={styles.image} alt={'img'}/>
        </Link>

        <Button
          h={8}
          variant="subtle"
          borderRadius={'12px'}
          position={'absolute'}
          top={3}
          right={3}
        >
          Dołącz
        </Button>

        <HStack position="absolute" bottom="0" px='2' py='2' space={3}>
          <Badge colorScheme="info" variant={'subtle'} rounded="6" bgColor={'blue.400'} _text={{ color: '#fdfd96' }}>
            Siatkówka
          </Badge>
          <Badge colorScheme="warning" variant={'subtle'} rounded="6" bgColor={'#fdfd96'} _text={{ color: 'red.900' }}>
            Na dworze
          </Badge>
        </HStack>
      </Box>
      <Stack p="4">
        <Stack space={2}>
          <Heading size="md" >
            Siatkówka pod palemką
          </Heading>
          <Text fontSize="xs" color={"#fdfd96"} fontWeight="500" mt="-1">
            Organizator: Paweł Arows
          </Text>
        </Stack>
        <Text mt={3}>24.01 poniedziałek 19:00 </Text>
        <Text>Szkoła podstawowa nr 46. ul. Bogusława 7</Text>

        <HStack alignItems="center" justifyContent="space-between" mt={3}>
          <HStack alignItems="center">
            <Text color="warmGray.300" fontWeight="400" mr={2}>Poziom</Text>
            <Badge colorScheme="success" variant={'outline'} rounded="6" mr={4}> Open </Badge>
          </HStack>

          <Text color="warmGray.300" fontWeight="400">Zawodnicy: 8/12</Text>
        </HStack>
      </Stack>
    </Box>
  )
}


const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: 170,
  },
});

export default EventCard;
