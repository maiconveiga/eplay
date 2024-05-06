import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonContainer } from '../Button/styles'
import close from '../../assets/images/fechar.png'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;
  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const Sidebar = styled.aside`
  background-color: ${cores.cinza};
  z-index: 1;
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }
`

export const Prices = styled.p`
  margin-bottom: 24px;
  font-weight: bold;
  font-size: 14px;
  color: ${cores.branca};

  span {
    display: block;
    font-size: 12px;
    color: ${cores.conzaClaro};
  }
`

export const Quantity = styled.p`
  margin-top: 32px;
  margin-bottom: 16px;
  font-weight: bold;
  font-size: 16px;
  color: ${cores.branca};
`
export const CartItem = styled.li`
  display: flex;
  border-bottom: 1px solid ${cores.conzaClaro};
  padding: 8px 0;
  position: relative;
  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 24px;
  }
  h3 {
    color: ${cores.branca};
    font-weight: bold;
    font-size: 16px;
  }
  span {
    display: block;
    color: ${cores.branca};
    font-weight: bold;
    font-size: 14px;
  }
  ${TagContainer} {
    margin-right: 8px;
    margin-top: 8px;
    margin-bottom: 16px;
  }
  button {
    background-image: url(${close});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 8;
    right: 0;
  }
`
