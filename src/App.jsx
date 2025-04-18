import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Artisans from './pages/Artisans';
import ArtisanProfile from './pages/ArtisanProfile';
import Events from './pages/Events';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Map from './pages/Map';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="artisans" element={<Artisans />} />
        <Route path="artisans/:id" element={<ArtisanProfile />} />
        <Route path="events" element={<Events />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<BlogPost />} />
        <Route path="map" element={<Map />} />
      </Route>
    </Routes>
  );
}

export default App;