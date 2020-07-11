import React from 'react';

import { 
  Container,
  Profile,
  Avatar,
  UserData,
  Icons,
  MicIcon,
  HeadphoneIcon,
  SettingsIcon
} from './styles';

const UserInfo: React.FC = () => {
  return (
      <Container>
        <Profile>
          <Avatar />
          <UserData>
            <strong>Gabriel Pereira</strong>
            <span>#0103</span>
          </UserData>
        </Profile>
        <Icons>
          <MicIcon />
          <HeadphoneIcon />
          <SettingsIcon />
        </Icons>

      </Container>
  )
}

export default UserInfo;