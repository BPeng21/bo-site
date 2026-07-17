import { Route, Routes } from 'react-router';
import { useState } from 'react';
import HomePage from './pages/home/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutPage from './pages/about/AboutPage';
import BlogPage from './pages/blog/BlogPage';
import ResumePage from './pages/resume/ResumePage';
import { FirstVisitContext } from './contexts/FirstVisitContext';
import type { BlogPost } from './types/blog-post-types';
import './App.css';

function App() {
  const [isFirstVisitHome, setIsFirstVisitHome] = useState(true);
  const [hobbyIndex, setHobbyIndex] = useState(0);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

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
            <Route
              path="about"
              element={
                <AboutPage
                  hobbyIndex={hobbyIndex}
                  setHobbyIndex={setHobbyIndex}
                />
              }
            />
            <Route
              path="blog"
              element={
                <BlogPage
                  selectedPost={selectedPost}
                  setSelectedPost={setSelectedPost}
                />
              }
            />
            <Route path="resume" element={<ResumePage />} />
          </Routes>

          <Footer />
        </FirstVisitContext>
      </div>
    </>
  );
}

export default App;
