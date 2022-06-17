import styled from 'styled-components'
import Clickable from '../clickable'

export const StyledWrapper = styled.div`
  position: relative;
`

export const StyledButton = styled(Clickable)`
  font-size: 14px;
  background-color: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.spacers.small} ${(props) => props.theme.spacers.medium};
  border-radius: 3px;
`

export const StyledFlyout = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 3px;
  position: absolute;
  top: calc(100% + ${(props) => props.theme.spacers.medium});
  right: 0;
  min-width: 200px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-height: 300px;
  overflow: auto;
`

export const StyledCheckbox = styled.input`
  width: 12px;
  height: 12px;
  cursor: pointer;
`

export const StyledLabel = styled.label`
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacers.medium};
  padding: ${(props) => props.theme.spacers.small} ${(props) => props.theme.spacers.medium};
  cursor: pointer;

  &:nth-child(even) {
    background-color: ${(props) => props.theme.colors.lightGrey};
  }
`
