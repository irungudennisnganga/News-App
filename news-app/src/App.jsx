import { useEffect, useState } from 'react';
import './App.css';
import { Navbar } from './components/NavBar';
import News from './News';
import LandingPage from './LandingPage';
import { Route, Routes, useLocation } from 'react-router-dom';

function App() {
  const [news, setNews] = useState([]);
  const location = useLocation();
  
  useEffect(() => {
    const category = location.pathname.slice(1); // Get the category from the pathname
    if (category) {
      fetch(`https://ok.surf/api/v1/cors/news-feed`)
        .then(response => response.json())
        .then(data => setNews(data[category]))
        .catch(error => console.error('Error fetching news:', error));
    }
  }, [location.pathname]);
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/US" element={<News news={news} />} />
        <Route path="/world" element={<News news={news} />} />
        <Route path="/business" element={<News news={news} />} />
        <Route path="/technology" element={<News news={news} />} />
        <Route path="/entertainment" element={<News news={news} />} />
        <Route path="/sports" element={<News news={news} />} />
        <Route path="/science" element={<News news={news} />} />
        <Route path="/health" element={<News news={news} />} />
      </Routes>
    </>
  );
}

export default App;
