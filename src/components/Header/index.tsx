import { HeaderBar, Links, LinkItem, LinkCart } from './styles'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <HeaderBar>
      <div>
        <Link to="/">
          <img src={logo} alt="Logo Eplay" />
        </Link>
        <nav>
          <Links>
            <LinkItem>
              <Link to="/categorias">Categoria</Link>
            </LinkItem>
            <LinkItem>
              <a href="#">Novidades</a>
            </LinkItem>
            <LinkItem>
              <a href="#">Promoções</a>
            </LinkItem>
          </Links>
        </nav>
      </div>
      <LinkCart href="#">
        0 - Produto(s) <img src={carrinho} alt="Carrinho de compras" />
      </LinkCart>
    </HeaderBar>
  )
}

export default Header
