import { Route, Routes } from 'react-router';
import { useState } from 'react';
import HomePage from './pages/home/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutPage from './pages/about/AboutPage';
import BlogPage from './pages/blog/BlogPage';
import ResumePage from './pages/resume/ResumePage';
import { FirstVisitContext } from './contexts/FirstVisitContext';
import './App.css';

function App() {
  const [isFirstVisitHome, setIsFirstVisitHome] = useState(true);

  return (
    <>
      <div className="app-container">
        <FirstVisitContext value={isFirstVisitHome}>
          <Header />

          <Routes>
            <Route
              index
              element={<HomePage setIsFirstVisit={setIsFirstVisitHome} />}
            />
            <Route path="about" element={<AboutPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="resume" element={<ResumePage />} />
          </Routes>

          <Footer />
        </FirstVisitContext>
      </div>
    </>
  );
}

export default App;
