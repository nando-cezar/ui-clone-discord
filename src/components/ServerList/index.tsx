import React from 'react';

import { Container, Separator } from './styles';

import ServerButton from './ServerButton';

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
            <ServerButton mentions={9} />
            <ServerButton />
            <ServerButton hasNotification />
            <ServerButton />
            <ServerButton hasNotification />
            <ServerButton />
            <ServerButton hasNotification />
            <ServerButton mentions={2} />
            <ServerButton mentions={56} />
            <ServerButton mentions={12} />
        </Container>
    )
};

export default ServerList;