import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className='cyan darken-3'>
      <div className='nav-wrapper'>
        <li className='brand-logo'>
          <Link to='/'>Home</Link>
        </li>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contacts'>Contacts</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
