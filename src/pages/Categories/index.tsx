import ProductList from '../../components/ProductList'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRPGGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportsGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRPGGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: sportsGames } = useGetSportsGamesQuery()

  if (actionGames && fightGames && rpgGames && simulationGames && sportsGames) {
    return (
      <>
        <ProductList games={actionGames} title="Ação" background="black" />
        <ProductList games={sportsGames} title="Esportes" background="grey" />
        <ProductList
          games={simulationGames}
          title="Simulação"
          background="black"
        />
        <ProductList games={fightGames} title="Luta" background="grey" />
        <ProductList games={rpgGames} title="RPG" background="black" />
      </>
    )
  }
  return <h4>Loading...</h4>
}
export default Categories
