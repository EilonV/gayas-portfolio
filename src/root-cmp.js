import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home';
import '../src/assets/scss/styles.scss'
import { Header } from './components/header';
import { About } from './pages/about';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}

export default App;
