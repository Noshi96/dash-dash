import React from 'react';

export interface IModalTopBarProps {
  hasBackButton?: boolean;
  title?: string;
  menuActions?: ITopBarMenuAction[]
}

export interface ITopBarMenuAction {
  name: string;
  action: () => void;
  icon?: React.ReactNode;
}
