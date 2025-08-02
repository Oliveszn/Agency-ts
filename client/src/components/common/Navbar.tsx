import { Link } from "react-router-dom";

const Navbar = () => {
  //   let links = [
  //   { name: "WORK", link: "/work" },
  //   { name: "ABOUT", link: "/about" },
  //   { name: "NEWS", link: "/news" },
  //   { name: "THINKING", link: "/thinking" },
  //   { name: "CAREERS", link: "/careers" },
  //   { name: "CONTACT", link: "/contact" },
  // ];
  return (
    <nav className="bg-white shadow p-4">
      <ul className="flex space-x-6 text-lg font-medium">
        <li>
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
        </li>
        <li>
          <Link to="/blog" className="hover:text-blue-600">
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
