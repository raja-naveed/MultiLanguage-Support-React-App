import { BrowserRouter, Route, Routes } from "react-router-dom"
import SpotifyClone from "./Spotify"
import Home from "./Home"
import About from "./About"

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/search" element={<SpotifyClone />} />

    </Routes>

    </BrowserRouter>
      )
}

export default App
