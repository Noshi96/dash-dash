import { IGame, GameCategory } from './GameSearchModal.models';

export const GAMES_MOCK: IGame[] = [
  {
    id: '1',
    name: 'League Of Legends',
    shortName: 'LOL',
    category: GameCategory.ESport,
    iconName: 'lol.png',
    levels: ['open', 'iron', 'silver', 'gold', 'platinium', 'diamond', 'master', 'grandmaster', 'challanger'],
    gameTypes: [
      { id: '1', name: 'aram', maxPlayers: 5 },
      { id: '2', name: 'solo / duo', maxPlayers: 5 },
      { id: '3', name: 'flex', maxPlayers: 5 },
      { id: '4', name: 'normal', maxPlayers: 5 },
      { id: '5', name: 'draft', maxPlayers: 5 },
      { id: '6', name: 'custom', maxPlayers: 5 },
    ],
  },
  {
    id: '2',
    name: 'Apex',
    category: GameCategory.ESport,
    iconName: 'apex.png',
    levels: ['open', 'iron', 'silver', 'gold', 'platinium', 'diamond', 'master', 'apex predator'],
    gameTypes: [
      { id: '1', name: 'normal duos', maxPlayers: 2 },
      { id: '2', name: 'normal trios', maxPlayers: 3 },
      { id: '3', name: 'ranked', maxPlayers: 3 },
      { id: '4', name: 'arenas', maxPlayers: 3 },
      { id: '5', name: 'ranked arenas', maxPlayers: 3 },
    ],
  },
  {
    id: '3',
    name: 'Counter Strike Global Offensive',
    shortName: 'CS GO',
    category: GameCategory.ESport,
    iconName: 'cs.png',
    levels: ['open', 'silver', 'gold', 'master', 'eagle', 'supreme', 'global elite' ],
    gameTypes: [
      { id: '1', name: 'deathmatch', maxPlayers: 20 },
      { id: '2', name: 'competitive', maxPlayers: 5 },
      { id: '3', name: 'casual', maxPlayers: 5 },
      { id: '4', name: 'other' },
    ],
  },
  {
    id: '4',
    name: 'Siatkówka',
    category: GameCategory.Sport,
    iconName: 'siata.png',
    levels: ['open', 'początkujący', 'lepszy', 'dobry', 'tylko kurwy siatkówkowskie' ],
    gameTypes: [
      { id: '1', name: 'inside', maxPlayers: 12 },
      { id: '2', name: 'outside', maxPlayers: 12 },
      { id: '3', name: 'other' },
    ],
  },
  {
    id: '5',
    name: 'Koszykówka',
    category: GameCategory.Sport,
    iconName: 'kosz.png',
    levels: ['open', 'początkujący', 'lepszy', 'dobry', 'tylko kurwy koszykowskie' ],
    gameTypes: [
      { id: '1', name: 'inside', maxPlayers: 12 },
      { id: '2', name: 'outside', maxPlayers: 12 },
      { id: '3', name: 'other' },
    ],
  }
];
