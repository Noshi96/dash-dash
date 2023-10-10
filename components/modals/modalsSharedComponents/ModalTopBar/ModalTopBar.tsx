import { Box, ChevronLeftIcon, Heading, IconButton, Menu, Pressable, Text, ThreeDotsIcon } from 'native-base';
import { useNavigation } from 'expo-router';
import { IModalTopBarProps } from './ModalTopBar.models';

const ModalTopBar = (props?: IModalTopBarProps ) => {
  const { hasBackButton = true, title, menuActions } = props || {};
  const navigation = useNavigation();

  return (
    <Box
      px={1} rounded="lg" bgColor={'#3F3F46'}
      display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
      <Box minW={'40px'}>
        { hasBackButton ?
          <IconButton borderRadius="full" size={'md'} _pressed={{ bg: 'coolGray.800:alpha.20' }}
                      icon={<ChevronLeftIcon/>} _icon={{ color: 'white', size: 'md' }}
                      onPress={() => {
                        navigation.goBack()
                      }}
          /> : null
        }
      </Box>

      { title ? <Heading size={'sm'} color={'white'}>{title}</Heading> : null }

      <Box minW={'40px'}>
        { menuActions?.length ?
        (<Menu defaultIsOpen={false} placement={'bottom'} trigger={triggerProps => {
            return <Pressable accessibilityLabel="More options menu" {...triggerProps} p={3}>
              <ThreeDotsIcon size={'md'} color={'white'}/>
            </Pressable>;
          }}>

            {menuActions.map(({name, action, icon}) => (
              <Menu.Item px={0} key={name} onPress={() => { action() }}>
                <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                  {( icon ? icon : null )}
                  <Text mx={2}>{name}</Text>
                </Box>
              </Menu.Item>
            ))}

          </Menu>)


           : null
        }
      </Box>
    </Box>
  )
}

export default ModalTopBar;


// <Menu.Item px={0}>
//   <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
//     <Icon marginLeft={1} as={MaterialCommunityIcons} name="pencil" color="white"></Icon>
//     <Text mx={2}> Edit event </Text>
//   </Box>
// </Menu.Item>
//
// <Menu.Item px={0}>
//   <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
//     <Icon marginLeft={1} as={MaterialCommunityIcons} name="police-badge-outline" color="white"/>
//     <Text mx={2}> Report player </Text>
//   </Box>
// </Menu.Item>
