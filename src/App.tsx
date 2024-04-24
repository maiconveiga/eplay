import Header from './components/Header'
import { GlobalCss } from './styles'
import { BrowserRouter } from 'react-router-dom'
import Rotas from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalCss />
        <div className="container">
          <Header />
        </div>
        <Rotas />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
