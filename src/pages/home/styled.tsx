import styled from 'styled-components'
import mq from '../../styles/breakpoints'

export const StyledWrapper = styled.div`
  padding: ${(props) => props.theme.spacers.xl};
`

export const StyledGrid = styled.div`
  display: grid;
  gap: ${(props) => props.theme.spacers.xl};

  ${mq({
    'grid-template-columns': ['1fr', '1fr 1fr', '1fr 1fr 1fr', '1fr 1fr 1fr 1fr'],
  })}
`
