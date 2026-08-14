import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/utils/ScrollToTop';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Industries from './pages/Industries';
import Solutions from './pages/Solutions';
import Jobs from './pages/Jobs';
import JobDetails from './pages/JobDetails';
import ApplyJob from './pages/ApplyJob';
import Resources from './pages/Resources';
import BlogDetails from './pages/BlogDetails';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';
import FAQs from './pages/FAQs';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="industries" element={<Industries />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="jobs/:id" element={<JobDetails />} />
          <Route path="jobs/:id/apply" element={<ApplyJob />} />
          <Route path="resources" element={<Resources />} />
          <Route path="resources/:id" element={<BlogDetails />} />
          <Route path="contact" element={<Contact />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="faqs" element={<FAQs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
