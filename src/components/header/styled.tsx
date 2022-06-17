import styled from 'styled-components'

export const StyledWrapper = styled.header`
  padding-top: ${(props) => props.theme.spacers.xl};
  background-color: ${(props) => props.theme.colors.black};
  position: sticky;
  top: 0;
  z-index: 1;

  h1 {
    color: ${(props) => props.theme.colors.white};
  }
`
