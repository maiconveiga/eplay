import Header from './components/Header'
import { GlobalCss } from './styles'
import { BrowserRouter } from 'react-router-dom'
import Rotas from './routes'
import Footer from './components/Footer'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <GlobalCss />
          <div className="container">
            <Header />
          </div>
          <Rotas />
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
