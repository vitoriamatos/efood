import styled from 'styled-components'
import { Colors } from '../../styles'

export const CardContainer = styled.div`
  background-color: ${Colors.withe};
  border-radius: 4px;
  border: 1px solid ${Colors.red};
  padding: 8px;
  position: relative;
`
export const Title = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
  color: ${Colors.red};
`
export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  color: ${Colors.red};
  height: 110px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Stars = styled.div`
  margin: auto 0;
  padding-right: 10px;
  display: flex;
`
export const StarsLabel = styled.h4`
  width: 21px;
  height: 14px;
  margin: auto;
  margin-right: 10px;
  color: ${Colors.red};
`
export const StarsImage = styled.img`
  width: 21px;
  margin: auto;
`
export const Image = styled.img`
  width: 480px;
  height: 300px;
  margin: auto;
`