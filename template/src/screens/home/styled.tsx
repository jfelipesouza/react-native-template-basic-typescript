import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.title}px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.space.sm}px;
  font-weight: bold;
`

export const Description = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.text}px;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  max-width: 90%;
`
