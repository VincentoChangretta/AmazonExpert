import './App.css'
import { Header } from './Components/Global/Header'
import { Footer } from './Components/Global/Footer'
import { Navigation } from './Components/Global/Navigation'

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="main-inner">
            <Header />
            <main className='grow '>
              <Navigation />
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
