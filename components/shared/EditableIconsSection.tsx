import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Box, Heading, HStack, Icon, IconButton, Image } from 'native-base';

const EditableIconsSection = ({headerText}: {headerText: string}) => {

  const size = '72px';
  const elementInLine = 3;
  const elementInLineCalulated = 100 / elementInLine + '%';
  const mt = 3;
  const borderRadius = 'full';

  return (
    <>
      <Heading size={'md'} color={'white'} mb={2}>{headerText}</Heading>

      <HStack display={'flex'} flexWrap={'wrap'} alignItems={'flex-start'} justifyContent={'flex-start'}>
        <Box width={elementInLineCalulated} alignItems={'center'} justifyContent={'center'} mt={mt}>
          <Image source={{
            uri: "https://wallpaperaccess.com/full/317501.jpg"
          }} alt="Alternate Text" size={size} borderRadius={borderRadius}/>
        </Box>

        <Box width={elementInLineCalulated} alignItems={'center'} justifyContent={'center'} mt={mt}>
          <Image source={{
            uri: "https://wallpaperaccess.com/full/317501.jpg"
          }} alt="Alternate Text" size={size} borderRadius={borderRadius}/>
        </Box>

        <Box width={elementInLineCalulated} alignItems={'center'} justifyContent={'center'} mt={mt}>
          <Image source={{
            uri: "https://wallpaperaccess.com/full/317501.jpg"
          }} alt="Alternate Text" size={size} borderRadius={borderRadius}/>
        </Box>

        <Box width={elementInLineCalulated} alignItems={'center'} justifyContent={'center'} mt={mt}>
          <Image source={{
            uri: "https://wallpaperaccess.com/full/317501.jpg"
          }} alt="Alternate Text" size={size} borderRadius={borderRadius}/>
        </Box>

        <Box width={elementInLineCalulated} alignItems={'center'} justifyContent={'center'} mt={mt} p={4}>
          <IconButton size={12} variant="solid" bg="#00000066" colorScheme="danger" borderRadius="full"
                      icon={<Icon as={MaterialCommunityIcons} name="plus" color="white" size={'xl'}/>}>
          </IconButton>
        </Box>
      </HStack>
    </>
  )

}

export default EditableIconsSection;
