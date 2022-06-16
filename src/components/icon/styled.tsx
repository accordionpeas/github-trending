import styled from 'styled-components'

interface StyledWrapperI {
  fill?: string
}

export const StyledWrapper = styled.div<StyledWrapperI>`
  width: 15px;
  height: 15px;

  svg {
    width: 100%;
    height: 100%;
  }

  ${(props) =>
    props.fill &&
    `
    path {
      fill: ${props.fill};
    }
  `}
`
