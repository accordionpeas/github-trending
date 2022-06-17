import styled from 'styled-components'

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${(props) => props.theme.spacers.xl};
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  min-height: 250px;
  background-color: ${(props) => props.theme.colors.white};

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`

export const StyledDescription = styled.p`
  font-size: 14px;
  flex: 1;
  margin: 0 0 ${(props) => props.theme.spacers.large};
`

export const StyledLink = styled.a`
  color: ${(props) => props.theme.colors.black};

  &:hover {
    color: ${(props) => props.theme.colors.blue};
  }
`

export const StyledStarCount = styled.span`
  font-size: 14px;
`
