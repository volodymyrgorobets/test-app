
import { BrowserRouter, Routes, Route, useParams, Link } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import HowItWorks from './pages/HowItWorks';
import Catalog from './pages/Catalog';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/catalog" element={<Catalog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
