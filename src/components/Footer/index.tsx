import { Container, SectionTitle, FooterSection, Link, Links } from './styles'

const Footer = () => {
  const anoAtual = new Date().getFullYear()

  return (
    <Container>
      <div className="container">
        <FooterSection>
          <SectionTitle>Categorias</SectionTitle>
          <Links>
            <li>
              <Link to="categorias/#simulation">Simulação</Link>
            </li>
            <li>
              <Link to="categorias/#sports">Esports</Link>
            </li>
            <li>
              <Link to="categorias/#action">Ação</Link>
            </li>
            <li>
              <Link to="categorias/#rpg">RPG</Link>
            </li>
            <li>
              <Link to="categorias/#fight">Luta</Link>
            </li>
          </Links>
        </FooterSection>
        <FooterSection>
          <SectionTitle>Acesso rápido</SectionTitle>
          <Links>
            <li>
              <Link to="/#on-sale">Promoções</Link>
            </li>
            <li>
              <Link to="/#coming-soon">Em breve</Link>
            </li>
          </Links>
        </FooterSection>
        <FooterSection>
          <p>{anoAtual} - &copy; E-Play Todos os direitos reservados</p>
        </FooterSection>
      </div>
    </Container>
  )
}

export default Footer
