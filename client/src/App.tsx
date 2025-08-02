import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import SingleBlog from "./pages/SingleBlog";
import Navbar from "./components/common/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<SingleBlog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
