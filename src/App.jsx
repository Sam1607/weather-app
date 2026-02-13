import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Homepage from './Pages/Homepage'
import WeatherPage from './Pages/WeatherPage'


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/weather" element={<WeatherPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;







