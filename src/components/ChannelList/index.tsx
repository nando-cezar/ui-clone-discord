import React from 'react';

import { Container, Category, AddCategoryIcon } from './styles';

import ChannelButton from './ChannelButton';

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
           <ChannelButton channelName="Server pro #9" /> 
           <ChannelButton channelName="Server pro #10" /> 
           <ChannelButton channelName="Server pro #11" /> 
           <ChannelButton channelName="Server pro #12" /> 
           <ChannelButton channelName="Server pro #13" /> 
           <ChannelButton channelName="Server pro #14" /> 
           <ChannelButton channelName="Server pro #15" /> 
           <ChannelButton channelName="Server pro #16" /> 
           <ChannelButton channelName="Server pro #17" />
           <ChannelButton channelName="Server pro #18" />   
        </Container>

    )
} 

export default ChannelList;