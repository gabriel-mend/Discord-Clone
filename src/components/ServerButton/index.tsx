import React from 'react';

import Logo from '../../assets/logo.svg'
import { Button } from './styles';

export interface Props {
    isHome?: boolean;
    selected?: boolean;
    hasNotifications?: boolean;
    mentions?: number;
}

const ServerButton: React.FC<Props> = ({
    isHome,
    selected,
    hasNotifications,
    mentions,
}) => {
  return (
    <Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? 'active' : ''}
    >
      {isHome && <img src={ Logo } alt="rocketseat"/>}
    </Button>
  );
}

export default ServerButton;