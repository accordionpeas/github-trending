import styled from 'styled-components'
import { spacers } from '../../styles/theme'

type Alignment = 'flex-start' | 'center' | 'flex-end' | 'space-between'
type Spacer = keyof typeof spacers

interface FlexI {
  spacer?: Spacer
  gap?: Spacer
  justify?: Alignment
  align?: Alignment
  wrap?: boolean
  height?: string
  width?: string
  flex?: any
}

const Flex = styled.div<FlexI>`
  display: flex;
  gap: ${(props) => (props.gap ? props.theme.spacers[props.gap] : '0px')};
  margin-bottom: ${(props) => (props.spacer ? props.theme.spacers[props.spacer] : '0px')};
  justify-content: ${(props) => props.justify || 'normal'};
  align-items: ${(props) => props.align || 'normal'};
  flex-wrap: ${(props) => (props.wrap ? 'wrap' : 'nowrap')};
  height: ${(props) => props.height || 'auto'};
  width: ${(props) => props.width || 'auto'};
  flex: ${(props) => props.flex || 'none'};
`

export default Flex
