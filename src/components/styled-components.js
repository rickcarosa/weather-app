import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  margin: 2rem;
  color: red;
  border: 2px solid blue;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
`;

export const InnerContainer = styled.div`
  margin: 2rem;
  border: 2px solid red;
  width: 90%;
`;

export const Button = styled.button`
  padding: 10px 5px;
  background: lightblue;
  color: ${props => props.color || '#000'};
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid grey;
  font-size: 1rem;
`;
