import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 28px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
`;
export const SubTitle = styled.Text`
  margin: 10px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;
