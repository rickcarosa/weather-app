import React from 'react';
import styled from 'styled-components';
import { Icon } from '@blueprintjs/core';
import {NavLink} from 'react-router-dom'


const Sidebar = () => {
    return(
        <Container>
            <NavbarLink link='/' text='home' icon="home" />
            <NavbarLink link='/five-day' text='Five Day' icon='cloud'/>
            <NavbarLink link='/character' text='Character' icon='person' />
        </Container>
    )
}

const NavbarLink = (props) => (
    <LinkWrapper to={props.link}>
        <NavIcon icon={props.icon}/>
        <LinkText>{props.text}</LinkText>
    </LinkWrapper>
)

const Container = styled.div`
    min-width: 15rem;
    height: 100vh;
    background: red;
    border: 1px solid red;
`;

const LinkWrapper = styled(NavLink)`
    display: flex;
    align-items: center;
`;

const NavIcon = styled(Icon)`
    margin-right: 5px;
`;

const LinkText = styled.p`
    color: blue;
    font-size: 1rem;
`;



export default Sidebar;