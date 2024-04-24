import ProductList from '../../components/ProductList'
import Game from '../../models/Game'
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starwars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 2,
    category: 'Ação',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    title: 'Diablo',
    system: 'XBOX',
    infos: ['10%', 'R$ 250,00'],
    image: diablo
  },
  {
    id: 3,
    category: 'RPG',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™',
    title: 'Zelda',
    system: 'Nintendo',
    infos: ['10%', 'R$ 250,00'],
    image: zelda
  },
  {
    id: 4,
    category: 'Ação',
    description: 'blablablablablablablablablablablabla',
    title: 'Star Wars',
    system: 'PS5',
    infos: ['10%', 'R$ 250,00'],
    image: starwars
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'Ação',
    description: 'blablablablablablablablablablablabla',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 6,
    category: 'Ação',
    description: 'blablablablablablablablablablablabla',
    title: 'Diablo',
    system: 'XBOX',
    infos: ['10%', 'R$ 250,00'],
    image: diablo
  },
  {
    id: 7,
    category: 'Ação',
    description: 'blablablablablablablablablablablabla',
    title: 'Zelda',
    system: 'Nintendo',
    infos: ['10%', 'R$ 250,00'],
    image: zelda
  },
  {
    id: 8,
    category: 'Ação',
    description: 'blablablablablablablablablablablabla',
    title: 'Star Wars',
    system: 'PS5',
    infos: ['10%', 'R$ 250,00'],
    image: starwars
  }
]

const Categories = () => (
  <>
    <ProductList games={promocoes} title="RPG" background="grey" />
    <ProductList games={emBreve} title="Ação" background="black" />
    <ProductList games={promocoes} title="Aventura" background="grey" />
    <ProductList games={emBreve} title="FPS" background="black" />
  </>
)

export default Categories
