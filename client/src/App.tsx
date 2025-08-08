import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import SingleBlog from "./pages/SingleBlog";
import Navbar from "./components/common/Navbar";
import About from "./pages/About";
import News from "./pages/News";
import Work from "./pages/Work";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/common/Scrolltotop";
import Footer from "./components/common/Footer";
import Thinking from "./pages/Thinking";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home navTheme="white" />} />
        <Route path="/thinking" element={<Thinking navTheme="black" />} />
        <Route path="/blog/:slug" element={<SingleBlog />} />
        <Route path="/about" element={<About navTheme="black" />} />
        <Route path="/news" element={<News />} />
        <Route path="/work" element={<Work />} />
        <Route path="/careers" element={<Careers navTheme="black" />} />
        <Route path="/contact" element={<Contact navTheme="white" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
