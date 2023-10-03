import styled from 'styled-components/native'

export const CardContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.card};
  width: 100%;
  min-height: ${({ theme }) => theme.screen.height * 0.155}px;
  margin-top: ${({ theme }) => theme.padding.sm}px;
  border-radius: ${({ theme }) => theme.screen.height * 0.01}px;
  elevation: 2;
  padding: ${({ theme }) => theme.padding.md}px;
  gap: ${({ theme }) => theme.padding.sm}px;
`

export const CardTitle = styled.Text`
  font-weight: 900;
  font-size: ${({ theme }) => theme.fontsize.sm}px;
  color: ${({ theme }) => theme.colors.text};
`

export const CardContent = styled.View``
