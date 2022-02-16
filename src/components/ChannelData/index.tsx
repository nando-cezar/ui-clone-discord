import React, {useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';


const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if(div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);


    return (
        <Container>
            <Messages ref={messagesRef}>
                {Array.from(Array(25).keys()).map((n) =>(
                    <ChannelMessage
                    key={n}
                    author="Luis Fernando"
                    date="22/07/2022"
                    content="Example message!"
                    />
                ))}

                <ChannelMessage
                    author="{{author}}"
                    date="{{date}}"
                    content={
                        <>
                            <Mention>@Veyson</Mention>, example message!
                        </>
                    }
                    hasMention
                    isBot
                />
            </Messages>
            <InputWrapper>
                <Input type="text" placeholder="Conversarem #chat-livre" />
                <InputIcon />
            </InputWrapper>
        </Container>
    )
}

export default ChannelData;