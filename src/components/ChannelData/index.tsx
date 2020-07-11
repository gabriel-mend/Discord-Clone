import React, { useRef, useEffect } from 'react';

import { Container, Messages, InputWrapper, Input,  InputIcon} from './styles';
import ChannelMessage, { Mention } from '../ChannelMessage'

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if(div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef])
  return (
      <Container>
          <Messages ref={messagesRef}>
            {Array.from(Array(15).keys()).map((n) => (
              <ChannelMessage 
              author="Gabriel Pereira"
              date="05/07/2020"
              content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, facere."
            />
            ))}

            <ChannelMessage 
              author="Gabriel Pereira"
              date="05/07/2020"
              content={
                <>
                  <Mention>@Guilherme Rodz</Mention> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, facere.
                </>
              }
              hasMention
            />
            
          </Messages>
          <InputWrapper>
            <Input type="text" placeholder="Conversar em #chat-livre"/>
            <InputIcon />
          </InputWrapper>
      </Container>
  );
}

export default ChannelData;