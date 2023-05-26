import { useEffect, useState } from 'react';
import { Box, Button, Heading, HStack, Icon, Input, Text, VStack } from 'native-base';
import { Dimensions } from 'react-native';
import { getCategoryBtnStyles, getGameBtnStyles } from './GameSearchModal.styling';
import { GAMES_MOCK } from './GameSearchModal.mock';
import { GameCategory, IGame } from './GameSearchModal.models';
import GameSettingSelectBox from './components/GameSettingSelectBox';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

const GameSearchModal = () => {
  const screenHeight = Dimensions.get('window').height;
  const themeColor = 'green';

  const elementInLine = 3;
  const elementInLineCalulated = 100 / elementInLine + '%';

  const categoryBtnStyles = getCategoryBtnStyles(themeColor);
  const gameBtnStyles = getGameBtnStyles(themeColor);

  const gamesMock = GAMES_MOCK;

  // first box
  const [selectableGames, setSelectableGames] = useState<IGame[]>([]);
  const [eSportsSelected, setESportsSelected] = useState<boolean>(false);
  const [sportsSelected, setSportsSelected] = useState<boolean>(false);

  // second box
  const [gamesSelectedIds, setGamesSelectedIds] = useState<string[]>([]);
  const [selectedGames, setSelectedGames] = useState<IGame[]>([]);

  // seatchInput
  const [searchString, setSearchString] = useState<string>('');
  const filtedGamesByString = (): IGame[] => {
    return selectableGames.filter(({name, shortName}) => [name, shortName].includes(searchString))
  }


  // handle third box callback
  const handleSelectedField = (data: any): void => {

    console.log(data)
  }

  useEffect(() => {
    // showing only games based on selected category
    const eSportGames = eSportsSelected ? gamesMock.filter(game => game.category === GameCategory.ESport) : [];
    const sportGames = sportsSelected ? gamesMock.filter(game => game.category === GameCategory.Sport) : [];

    setSelectableGames([...eSportGames, ...sportGames]);
  }, [eSportsSelected, sportsSelected])

  const clearSelectedIdsOfCategory = (category: GameCategory): void => {
    const categoryGameIds = gamesMock.filter(game => game.category === category).map(game => game.id);
    const filteredGameIds = gamesSelectedIds.filter((number) => !categoryGameIds.includes(number));
    setGamesSelectedIds(filteredGameIds);
  }

  const toggleGameSelected = (game: IGame): void => {
    const newGamesSelectedIndexes = gamesSelectedIds.includes(game.id) ?
      gamesSelectedIds.filter(id => id !== game.id) :
      [game.id, ...gamesSelectedIds];

    setGamesSelectedIds(newGamesSelectedIndexes);
  }

  useEffect(() => {
    // sets game objects based on ids array
    const gamesFiltered = selectableGames.filter(game => gamesSelectedIds.includes(game.id));
    setSelectedGames(gamesFiltered)
  }, [gamesSelectedIds]);


  return (
    <Box bgColor={'#010101'} minHeight={screenHeight} p={6}>
      <Box
        p={6}
        bgColor={`${themeColor}.600`} rounded="lg"
        display={'flex'} alignItems={'center'} justifyContent={'center'}
      >
        <Heading size={'md'} color={'white'} width={'100%'}>Wybierz kategorię</Heading>

        <HStack justifyContent="space-between" mt={6} mb={3} space={12}>
          <Button {...categoryBtnStyles} borderWidth={eSportsSelected ? 2 : 0}
                  onPress={() => {
                    setESportsSelected(!eSportsSelected);
                    clearSelectedIdsOfCategory(GameCategory.ESport);
                  }}>E SPORT</Button>

          <Button {...categoryBtnStyles} borderWidth={sportsSelected ? 2 : 0}
                  onPress={() => {
                    setSportsSelected(!sportsSelected);
                    clearSelectedIdsOfCategory(GameCategory.Sport);
                  }}>SPORT</Button>
        </HStack>
      </Box>

      {selectableGames.length ?
        <>
          <Box
            p={6}
            bgColor={`${themeColor}.700`} rounded="lg" minHeight={20} mt={6}
            display={'flex'} alignItems={'center'} justifyContent={'center'} w={'100%'}
          >

            <Heading size={'md'} color={'white'} mb={2}>Wybierz gry</Heading>

            <Input w={'90%'}
                   variant={'filled'}
                   style={{color: '#ffffffcc', fontWeight: '600', borderColor: '#ffffffcc' }}
                   placeholderTextColor={`${themeColor}.100`}
                   borderColor={`${themeColor}.200`}

                   _focus={{borderColor: '#ffffffcc', outlineColor: 'transparent'}}
                   InputLeftElement={<Icon as={<MaterialCommunityIcons name="magnify" />} size={4} ml="2" color={`${themeColor}.200`} />}
                   InputRightElement={<Icon as={<MaterialCommunityIcons name="close" />} size={4} mr="2" color={`${themeColor}.200`}
                    onPress={() => {setSearchString('')}}
                   />}
                   placeholder="lub wyszukaj 😄"
                   value={searchString}
                   onChange={(event) => {
                     console.log(event.nativeEvent.text)
                     setSearchString(event.nativeEvent.text)
                     // searchString(event.target.value);
                   }}
            />

            <HStack display={'flex'} flexWrap={'wrap'} alignItems={'flex-start'} justifyContent={'flex-start'} w={'100%'}>
              {(searchString !== '' ? [...filtedGamesByString(), ...selectedGames] : selectableGames).map((game) => {

                return (
                  <Box width={elementInLineCalulated} alignItems={'center'} justifyContent={'center'} mt={3}
                     key={game.id}>
                  <Button {...gameBtnStyles} borderColor={`${themeColor}.200`}
                          borderWidth={gamesSelectedIds.includes(game.id) ? 2 : 0}
                          onPress={() => toggleGameSelected(game)}>
                    <Text fontSize={12}>{game.shortName || game.name}</Text>
                  </Button>
                </Box>
                )
              }
              )}
            </HStack>
          </Box>
        </> : null
      }
      {
        selectedGames.length ?
          <VStack
            p={6}
            space={5}
            bgColor={`${themeColor}.800`} rounded="lg" minHeight={20} mt={6}
            display={'flex'} alignItems={'center'} justifyContent={'center'}
          >
            <Heading size={'md'} color={'white'} mb={0}>Wybierz tryby i poziomy</Heading>

            {selectedGames.map((game) => (
              <Box display={'flex'} alignItems={'center'} justifyContent={'center'} mt={3}
                   key={game.id}>
                <GameSettingSelectBox
                  game={game}
                  themeColor={themeColor}
                  onSelectedField={handleSelectedField}
                ></GameSettingSelectBox>
              </Box>
            ))}
          </VStack> : null
      }
    </Box>
  )
}

export default GameSearchModal;
