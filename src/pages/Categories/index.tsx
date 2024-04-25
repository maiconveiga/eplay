import { useEffect, useState } from 'react'
import ProductList from '../../components/ProductList'
import { Game } from '../Home'

const Categories = () => {
  const [gamesAcao, setGamesAcao] = useState<Game[]>([])
  const [gamesEsportes, setGamesEsportes] = useState<Game[]>([])
  const [gamesSimulacao, setGamesSimulacao] = useState<Game[]>([])
  const [gamesLuta, setGamesLuta] = useState<Game[]>([])
  const [gamesRPG, setGamesRPG] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setGamesAcao(res))
  }, [])
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setGamesEsportes(res))
  }, [])
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setGamesSimulacao(res))
  }, [])
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setGamesLuta(res))
  }, [])
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setGamesRPG(res))
  }, [])

  return (
    <>
      <ProductList games={gamesAcao} title="Ação" background="black" />
      <ProductList games={gamesEsportes} title="Esportes" background="grey" />
      <ProductList
        games={gamesSimulacao}
        title="Simulação"
        background="black"
      />
      <ProductList games={gamesLuta} title="Luta" background="grey" />
      <ProductList games={gamesRPG} title="RPG" background="black" />
    </>
  )
}
export default Categories
