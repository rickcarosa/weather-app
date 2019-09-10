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
  border: 2px solid;
  color: ${props => props.color || 'red'};
  width: 90%;
  text-align: center;
`;

export const Title = styled.p`
  font-size: 3rem;
  color: black;
  padding: 20px 0;
`;

export const Button = styled.button`
  padding: ${props => props.padding || '10px 5px'};
  background: lightblue;
  color: ${props => props.color || '#000'};
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid grey;
  font-size: 1rem;
  margin-left: ${props => props.marginLeft || 0};
`;

export const Data = styled.p`
  color: black;
  font-size: 2rem;
  padding-bottom: 2rem;
`;

export const Input = styled.input`
  width: 15rem;
  padding: 5px;
`;
