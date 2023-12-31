import React, { useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import './OfficerNavbar.css';
import { Button } from './Button';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='officer-navbar'>
        <div className='navbar-container'>
          <Link to='/data-editing' className='navbar-logo' onClick={closeMobileMenu}>
            HOME
            <i class='fas fa-home fa-sm' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/office' className='nav-links' onClick={closeMobileMenu}>
                Reminders
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/certificate-distribution' className='nav-links' onClick={closeMobileMenu}>
                Certificates
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/office' className='nav-links' onClick={closeMobileMenu}>
              Payments
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/notice-updates' className='nav-links' onClick={closeMobileMenu}>
                Noticeboard
              </Link>
            </li>
            <li>
              <Link to='/' className='nav-links-mobile' onClick={closeMobileMenu}>
                Log Out
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>LOG OUT</Button>}
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;