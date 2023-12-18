import styled from 'styled-components'
import { Colors } from '../../styles'

import { Props } from '.'
export const TagContainer = styled.div<Props>`
  background-color: ${Colors.red};
  color: ${Colors.withe};
  font-size: ${(props) => (props.size === 'big' ? '16px' : '12px')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'big' ? '8px 16px' : '4px 6px')};
  border-radius: 2px;
  display: inline-block;
  margin-left: 10px;
`
