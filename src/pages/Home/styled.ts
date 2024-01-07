import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.primary };
  flex: 1;
  
`;
export const TaskAddArea = styled.View`
  justify-content: center;
  flex-direction: row;
  margin-top: 5%;
`