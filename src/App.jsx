import { Routes, Route } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import About from './components/About'
import Home from './components/Home'
import ShopNow from './components/ShopNow'
import Featured from './components/Featured'
import ProductPage from './components/ProductPage'
import './App.css'


function App() {

  return (
    <>
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/shopnow" element={<ShopNow />} />
                <Route path="/featured" element={<Featured />} />
                <Route path="/product-details/:id" element={<ProductPage />} />
            </Route>
        </Routes>
    </>
  )
}

export default App
