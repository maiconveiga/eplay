import spiderman from '../../assets/images/banner-homem-aranha.png'
import hogwarts from '../../assets/images/fundo_hogwarts.png'
import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'
import Section from '../../components/Section'
import { Items, Item, Action, Modal, ModalContent } from './styles'
import fechar from '../../assets/images/fechar.png'

type GalleryItem = {
  type: string
  url: string
}

const mock = [
  {
    type: 'image',
    url: spiderman
  },
  {
    type: 'image',
    url: hogwarts
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/uHGShqcAHlQ?si=kJGG9s-oXbFtNaMA'
  }
]
type Props = {
  defaultCover: string
  nameGame: string
}
const Gallery = ({ defaultCover }: Props) => {
  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }
  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  return (
    <>
      <Section title={'Galeria'} background={'black'}>
        <Items>
          {mock.map((mediaGame, index, nameGame) => (
            <Item key={mediaGame.url}>
              <img
                src={getMediaCover(mediaGame)}
                alt={`Midia ${index + 1} de ${nameGame}`}
              />
              <Action>
                <img
                  src={getMediaIcon(mediaGame)}
                  alt="Clique para maximizar a midia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal>
        <ModalContent className="container">
          <header>
            <h4>Nome do jogo</h4>
            <img src={fechar} alt="" />
          </header>
          <img src={spiderman} alt="" />
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default Gallery
