import { HashLink } from 'react-router-hash-link'
import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.cinza};
  padding: 32px 0;
  font-size: 14px;
  margin-top: 40px;
`
export const SectionTitle = styled.h4`
  color: #${cores.branca};
  font-size: 16px;
  font-weight: bold;
  @media (max-width: ${breakpoints.tablet}) {
    text-align: center;
  }
`
export const Links = styled.ul`
  display: flex;
  margin-top: 16px;
  @media (max-width: ${breakpoints.tablet}) {
    justify-content: center;
  }
`

export const Link = styled(HashLink)`
  color: ${cores.conzaClaro};
  text-decoration: none;
  margin-right: 8px;
  @media (max-width: ${breakpoints.tablet}) {
    border: solid white 1px;
    padding: 5px;
  }
`

export const FooterSection = styled.div`
  margin-bottom: 64px;
  @media (max-width: ${breakpoints.tablet}) {
    text-align: center;
  }
`
