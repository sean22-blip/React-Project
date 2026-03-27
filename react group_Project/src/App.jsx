import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Top from './components/Top'
import News from './components/News'
import Episode from './components/Episode'
import Introduction from './components/Introduction'
import Movie from './components/Movie'
import Rootlayout from './Layouts/Rootlayout'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Rootlayout />}>
          <Route index element={<Top />} />
          <Route path="news" element={<News />} />
          <Route path="episode" element={<Episode />} />
          <Route path="introduction" element={<Introduction />} />
          <Route path="movie" element={<Movie />} />
        </Route>
      </Routes>
    </BrowserRouter>

    </>
    
  );
}

export default App;
