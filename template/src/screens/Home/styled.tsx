import styled from 'styled-components/native'

type TextSizes = {
  weight?: number
  size?: 'xs' | 'md' | 'sm' | 'lg'
  color?: string
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.padding.md}px;
  gap: ${({ theme }) => theme.padding.md}px;
`

export const Paragraph = styled.Text<TextSizes>`
  font-weight: ${({ weight = 600 }) => weight};
  font-size: ${({ theme, size = 'md' }) => theme.fontsize[size]}px;
  color: ${({ theme, color = theme.colors.text }) => color};
`

export const Title = styled.Text<TextSizes>`
  font-weight: ${({ weight = 700 }) => weight};
  font-size: ${({ theme, size = 'lg' }) => theme.fontsize[size]}px;
  color: ${({ theme }) => theme.colors.text};
`

export const Bold = styled.Text`
  font-weight: 900;
`

export const Button = styled.TouchableOpacity`
  width: 100%;
  padding: ${({ theme }) => theme.padding.sm}px 0px;
  margin-top: ${({ theme }) => theme.padding.md}px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.padding.sm}px;
`
