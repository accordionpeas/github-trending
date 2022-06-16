import styled from 'styled-components'

export const StyledWrapper = styled.div`
  display: flex;
  animation: 1s linear infinite rotate;
  @keyframes rotate {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
