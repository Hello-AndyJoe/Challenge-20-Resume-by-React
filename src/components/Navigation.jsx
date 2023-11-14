import { Link, useLocation } from 'react-router-dom';

function PageNavigation() {
  const currentPage = useLocation().pathname;

  return (
    <ul>
      <li>
        <Link
          to="/"
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/Bio"
          className={currentPage === '/Bio' ? 'nav-link active' : 'nav-link'}
        >
          Bio
        </Link>
      </li>
      <li>
        <Link
          to="/Resume"
          className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </Link>
      </li>
      <li>
        <Link
          to="/Portfolio"
          className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </Link>
      </li>
      <li>
        <Link
          to="/Contact"
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default PageNavigation;
