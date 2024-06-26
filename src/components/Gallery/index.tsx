import { useState } from 'react'
import spiderman from '../../assets/images/banner-homem-aranha.png'
import hogwarts from '../../assets/images/fundo_hogwarts.png'
import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'
import Section from '../../components/Section'
import { Items, Item, Action, Modal, ModalContent } from './styles'
import fechar from '../../assets/images/fechar.png'
import { GalleryItem } from '../../pages/Home'

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
  items: GalleryItem[]
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}

const Gallery = ({ defaultCover, nameGame, items }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })
  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }
  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }
  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }
  return (
    <>
      <Section title={'Galeria'} background={'black'}>
        <Items>
          {items.map((mediaGame, index, nameGame) => (
            <Item
              key={mediaGame.url}
              onClick={() => {
                setModal({
                  isVisible: true,
                  type: mediaGame.type,
                  url: mediaGame.url
                })
              }}
            >
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
      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{nameGame}</h4>
            <img
              src={fechar}
              alt=""
              onClick={() => {
                closeModal()
              }}
            />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} alt="" />
          ) : (
            <iframe src={modal.url} frameBorder="0"></iframe>
          )}
        </ModalContent>
        <div
          className="overlay"
          onClick={() => {
            closeModal()
          }}
        ></div>
      </Modal>
    </>
  )
}

export default Gallery
