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
              <Link>FPS</Link>
            </li>
            <li>
              <Link>Estratégia</Link>
            </li>
            <li>
              <Link>Simulação</Link>
            </li>
            <li>
              <Link>Esports</Link>
            </li>
            <li>
              <Link>Aventura</Link>
            </li>
            <li>
              <Link>Ação</Link>
            </li>
            <li>
              <Link>RPG</Link>
            </li>
          </Links>
        </FooterSection>
        <FooterSection>
          <SectionTitle>Acesso rápido</SectionTitle>
          <Links>
            <li>
              <Link>Novidades</Link>
            </li>
            <li>
              <Link>Promoções</Link>
            </li>
            <li>
              <Link>Em breve</Link>
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
