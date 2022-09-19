import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.background};
`;
export const Inline = styled.View`
  flex-direction: row;
  width: 100%;
`;

export const Title = styled.Text`
  font-size: ${({theme}) => theme.fontSize.title}px;
  color: ${({theme}) => theme.colors.primary};
  margin-bottom: ${({theme}) => theme.space.sm}px;
  font-family: ${({theme}) => theme.fonts.inter.bold};
`;

export const Description = styled.Text`
  font-size: ${({theme}) => theme.fontSize.text}px;
  color: ${({theme}) => theme.colors.text};
  text-align: center;
  max-width: 90%;
  font-family: ${({theme}) => theme.fonts.poppins.regular};
`;
