import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
    nickname: string;
    isBot ?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
    return (
        <User>
            <Avatar className={isBot ? 'bot' : '' }/>

            <strong>{nickname}</strong>

            { isBot && <span>Bot</span> }
        </User>
    );
};

const UserList: React.FC = () => {
    return (
        <Container>
            <Role>Online - 01</Role>
            <UserRow nickname="Luis Fernando Cezar dos Santos"/>

            <Role>Offline - 02</Role>
            <UserRow nickname="Bot master" isBot/>
            <UserRow nickname="Example name #01"/>
            <UserRow nickname="Example name #02"/>
            <UserRow nickname="Example name #03"/>
            <UserRow nickname="Example name #04"/>
            <UserRow nickname="Example name #05"/>
            <UserRow nickname="Example name #06"/>
            <UserRow nickname="Example name #07"/>
            <UserRow nickname="Example name #08"/>
            <UserRow nickname="Example name #09"/>
            <UserRow nickname="Example name #10"/>
            <UserRow nickname="Example name #11"/>
            <UserRow nickname="Example name #12"/>
            <UserRow nickname="Example name #13"/>

        </Container>
    )
} 

export default UserList;