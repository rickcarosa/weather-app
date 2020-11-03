import React from 'react';
import styled from 'styled-components';
import { Icon } from '@blueprintjs/core';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Container>
      <NavbarLink link='/' text='Home' icon='home' />
      <NavbarLink link='/five-day' text='Five Day' icon='cloud' />
      <NavbarLink link='/character' text='Character' icon='person' />
      <NavbarLink link='/bar' text='Bar' icon='chart' />
      <NavbarLink link='/export' text='Export' icon='download' />
    </Container>
  );
};

const NavbarLink = (props) => (
  <LinkWrapper to={props.link}>
    <NavIcon icon={props.icon} />
    <LinkText>{props.text}</LinkText>
  </LinkWrapper>
);

const Container = styled.div`
  height: 100vh;
  min-width: 5rem;
  background: red;
  z-index: 10;
  display: flex;
  flex-direction: column;
  position: fixed;
  padding: 10rem 2rem 0;
  border-radius: 0 60px 60px 0;
`;

const LinkWrapper = styled(NavLink)`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  background: white;
  padding: 8px 10px;
`;

const NavIcon = styled(Icon)`
  margin-right: 10px;
`;

const LinkText = styled.p`
  color: blue;
  font-size: 1rem;
`;

export default Sidebar;
