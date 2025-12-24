import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { AuthorityStrip } from './components/AuthorityStrip';
import { Services } from './components/Services';
import { CaseStudies } from './components/CaseStudies';
import { Process } from './components/Process';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { SplashScreen } from './components/SplashScreen';

// Lazy load heavy pages
const Awards = lazy(() => import('./Awards'));
const About = lazy(() => import('./About'));
const GetStarted = lazy(() => import('./GetStarted'));
const Careers = lazy(() => import('./Careers'));
const JobPost = lazy(() => import('./JobPost'));
const Portfolio = lazy(() => import('./Portfolio'));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen bg-[#FFF8F0] flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#8B4789]" />
  </div>
);

// Home Page Component
function HomePage() {
  return (
    <>
      <Navigation />
      <Hero />
      <AuthorityStrip />
      <Services />
      <CaseStudies />
      <Process />
      <CTA />
      <Footer />
    </>
  );
}

// Main App Component - Internetever Homepage
export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Hide splash screen after 3 seconds - OPTIMIZED
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-[#FFF8F0]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/awards" element={<Suspense fallback={<PageLoader />}><Awards /></Suspense>} />
          <Route path="/about" element={<Suspense fallback={<PageLoader />}><About /></Suspense>} />
          <Route path="/get-started" element={<Suspense fallback={<PageLoader />}><GetStarted /></Suspense>} />
          <Route path="/careers" element={<Suspense fallback={<PageLoader />}><Careers /></Suspense>} />
          <Route path="/careers/:jobId" element={<Suspense fallback={<PageLoader />}><JobPost /></Suspense>} />
          <Route path="/portfolio" element={<Suspense fallback={<PageLoader />}><Portfolio /></Suspense>} />
        </Routes>
      </div>
    </Router>
  );
}