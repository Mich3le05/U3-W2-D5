import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import NotFound from './components/NotFound'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router'
import Previsione from './components/Previsione'

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <MyNav />
        </header>
        <main className="bg-img">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/previsione" element={<Previsione />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <footer>
          <MyFooter />
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
