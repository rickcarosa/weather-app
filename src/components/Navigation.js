import React from 'react';
import styled from 'styled-components';

const Navigation = () => {
    return(
        <Container>
            <Button>Name here</Button>
            <Box></Box>
        </Container>
    )
}

const Container = styled.div`
    width: 100%
    height: 100px;
    position: fixed;
    top: 0;
    z-index: 100;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const Button = styled.button`
    font-size: 1rem;
    padding: 8px 8px;
    background: red;
    color: #fff;
`;

const Box = styled.div`
    width: 30px;
    height: 30px;
    border: 1px solid red;
`;

export default Navigation;