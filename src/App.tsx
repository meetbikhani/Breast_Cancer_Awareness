
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ConversionComponent from './page/Convertion'
import Home from './page/Home'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/convert' element={<ConversionComponent />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
