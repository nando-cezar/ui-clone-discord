import React from 'react';

import { Container, Avatar, Message, Header, Content } from './styles';

export interface Props {
    author: string;
    date: string;
    content: string | React.ReactElement | React.ReactNode;
    hasMention?: boolean;
    isBot?: boolean;
}
 
const ChannelName: React.FC<Props> = ({ author, date, content, hasMention, isBot }) => {
    return (
        <Container>
            <Avatar />

            <Message>
                <Header>
                    <strong>Luis Fernando</strong>

                    {isBot && <span>Bot</span>}

                    <time>25/05/2021</time>
                </Header>
                <Content>Message Example!!!</Content>
            </Message>
            
        </Container>
    )
} 

export default ChannelName;