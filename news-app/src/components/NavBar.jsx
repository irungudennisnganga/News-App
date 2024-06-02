import  { useState, useEffect } from "react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [section, setSection] = useState([]);

  useEffect(() => {
    fetch('https://ok.surf/api/v1/cors/news-section-names')
      .then(response => response.json())
      .then(data => setSection(data));
  }, []);

  return (
    <nav className="flex justify-between items-center bg-gray-900 text-white sticky top-0 p-4">
      <a href="/" className="text-2xl font-bold">
        Home
      </a>
      <div
        className="menu md:hidden flex flex-col justify-between w-9 h-8 cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="block h-1 bg-white rounded"></span>
        <span className="block h-1 bg-white rounded"></span>
        <span className="block h-1 bg-white rounded"></span>
      </div>
      <ul
        className={`${
          menuOpen ? "flex" : "hidden"
        } flex-col md:flex md:flex-row items-center w-full md:w-auto`}
      >
        {section.map((data) => (
          <li key={data} className="list-none">
            <a
              href={`/${data}`}
              className="block text-white px-2 py-1 rounded-md mx-2"
            >
              {data}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
