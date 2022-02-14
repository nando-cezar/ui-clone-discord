import React from 'react';

import { Container, Category, AddCategoryIcon } from './styles';

import ChannelButton from '../ChannelButton';

const ChannelList: React.FC = () => {
    return (
        <Container>
           <Category>
               <span> Canais de texto</span>
               <AddCategoryIcon />
           </Category>

           <ChannelButton channelName="Server pro #1" />
           <ChannelButton channelName="Server pro #2" />
           <ChannelButton channelName="Server pro #3" />
           <ChannelButton channelName="Server pro #4" />
           <ChannelButton channelName="Server pro #5" />
           <ChannelButton channelName="Server pro #6" />
           <ChannelButton channelName="Server pro #7" />
           <ChannelButton channelName="Server pro #8" /> 
        </Container>

    )
} 

export default ChannelList;