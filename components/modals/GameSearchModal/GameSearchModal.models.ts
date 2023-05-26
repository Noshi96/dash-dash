export const enum GameCategory {
  ESport = 'ESPORT',
  Sport = 'SPORT'
}

export const GameCategories = [ GameCategory.ESport, GameCategory.Sport ];

export interface IGame {
  id: string;
  selected?: boolean;
  name: string;
  shortName?: string;
  category: GameCategory;
  iconName?: string;
  levels: string[];
  gameTypes: IGameType[];
}

export interface IGameType {
  id: string;
  name: string;
  maxPlayers?: number;
  selected?: boolean;
}
