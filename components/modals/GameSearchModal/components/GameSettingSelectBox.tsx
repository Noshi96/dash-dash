import { Box, Button, Heading, Text } from 'native-base';
import { IGame, IGameType } from '../GameSearchModal.models';
import { useEffect, useState } from 'react';

const GameSettingSelectBox = (
    { game, themeColor, onSelectedField }:
    { game: IGame, themeColor: string, onSelectedField: (data: any) => void}
) => {
  const { name } = game;

  const [ selectedGameTypeIndexes, setSelectedGameTypeIndexes ] = useState<string[]>([]);
  const [ selectedDifficultyLevels, setSelectedDifficultyLevelsIndexes ] = useState<string[]>([]);

  const toggleGameTypeSelected = (game: IGameType) => {
    const newGamesSelectedIndexes = selectedGameTypeIndexes.includes(game.id) ?
      selectedGameTypeIndexes.filter(id => id !== game.id) :
      [game.id, ...selectedGameTypeIndexes];

    setSelectedGameTypeIndexes(newGamesSelectedIndexes);
  }

  const toggleGameDifficultyLevelsSelected = (pressedlevel: string) => {
    const difficultyLevelsSelected = selectedDifficultyLevels.includes(pressedlevel) ?
      selectedDifficultyLevels.filter(level => level !== pressedlevel) :
      [pressedlevel, ...selectedDifficultyLevels];

    setSelectedDifficultyLevelsIndexes(difficultyLevelsSelected);
  }

  useEffect(() => {
    onSelectedField({
      gameId: game.id,
      gameName: game.name,
      selectedDifficultyLevels,
      selectedGameTypeIndexes,
    })
  }, [selectedDifficultyLevels, selectedGameTypeIndexes]);


  return (
    <Box textAlign={'left'}>
      <Heading size={'sm'}>{name}</Heading>
      <Text width={'100%'} mt={3} mb={1}>Tryby gry</Text>

      <Box textAlign={'center'} display={'flex'} flexDirection={'row'} flexWrap={'wrap'}>
        { game.gameTypes.map( type => (
          <Button colorScheme={themeColor} alignSelf="center" key={type.name} mr={1} mb={1} shadow={3}
                  borderColor={selectedGameTypeIndexes.includes(type.id) ? `${themeColor}.200` : 'transparent'}
                  borderWidth={2}
                  onPress={() => toggleGameTypeSelected(type)}
          >
            {type.name}
          </Button>
        ))}
      </Box>

      <Text width={'100%'} mt={3} mb={1}>Poziomy trudności</Text>

      <Box textAlign={'center'} display={'flex'} flexDirection={'row'} flexWrap={'wrap'}>
        { game.levels.map( level => (
          <Button colorScheme={themeColor} alignSelf="center" key={level} mr={1} mb={1} shadow={3}
                  borderColor={selectedDifficultyLevels.includes(level) ? `${themeColor}.200` : 'transparent'}
                  borderWidth={2}
                  onPress={() => toggleGameDifficultyLevelsSelected(level)}
          >
            {level}
          </Button>
        ))}
      </Box>

    </Box>
  )

}

export default GameSettingSelectBox;
