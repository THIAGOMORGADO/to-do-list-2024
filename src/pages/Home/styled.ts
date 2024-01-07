import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.primary };
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.Text`
  color: #fff;
  font-family: ${({theme}) => theme.fonts.bold};
`;