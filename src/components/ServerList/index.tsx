import React from 'react';

import { Container, Separator } from './styles';

import ServerButton from '../ServerButton';

const ServerList: React.FC = () => {
    return(
        <Container>
            <ServerButton isHome />

            <Separator/>

            <ServerButton />
            <ServerButton hasNotification />
            <ServerButton mentions={3} />
            <ServerButton />
            <ServerButton hasNotification />
        </Container>
    )
};

export default ServerList;