import { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaHeart, FaBars, FaTimes } from 'react-icons/fa';

const LinkList = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Resume',
    path: '/resume',
  },
  {
    name: 'Portfolios',
    path: '/portfolios',
  },
  {
    name: "Blogs",
    path: "/blogs",
  },
  {
    name: 'Contact',
    path: '/contact',
  },
];

const Navbar = () => {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <nav className={sidebarOpen ? 'mi-header is-visible' : 'mi-header'}>
      <button
        className="mi-header-toggler"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <FaTimes /> : <FaBars />}
      </button>
      <div className="mi-header-inner">
        <div className="mi-header-image">
          <Link href="/">
            <a className="">
              <img
                alt="brandimage"
                className="img-fluid"
                src="/images/mahmudul.jpeg"
              />
            </a>
          </Link>
        </div>
        <ul className="mi-header-menu">
          {LinkList.map((item, i) => (
            <li key={i}>
              <Link href={item.path}>
                <a className={router.pathname == item.path ? 'active' : ''}>
                  <span>{item.name}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mi-header-copyright">
          Made with <FaHeart color="red" /> by Mahmudul
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
