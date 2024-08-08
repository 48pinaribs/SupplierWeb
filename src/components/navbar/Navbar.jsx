import React from 'react';
import './Navbar.css';
import logo from "../../assets/ozyer_logo.png";
import { useLocation } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import useWindowSize from '../mobile/useWindowSize';
import { IconMenu2 } from '@tabler/icons-react';
import { useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  const loc = location.pathname.split("/")[1];
  const size = useWindowSize();
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => {
    setMenuOpen(!menuOpen);
  }
  return (
    <header className='header'>
      <div> <a href='/Home' > <img src={logo} alt='logo' /> </a> </div>
      <>
        {size.width < 761 ? (
          <IconMenu2 onClick={handleClick} style={{ color: 'white' }} />
        ) : (
          ''
        )}
        {menuOpen && (
          <div className="menu">
            <ul>
              <li><a href='/Home'>Pınar ibiş</a></li>
              <li><a href='/Offer'>Teklifler</a></li>
              <li><a href='/Order'>Siparişler</a></li>
              <li><a href='/'>Logout</a></li>
              <li><a href='/Home'>Home</a></li>
            </ul>
          </div>
        )}
      </>
      <nav>
        <ul>
          <li className={loc === 'Offer' ? 'active' : ''}> <a href='/Offer'>Teklifler </a> </li>
          <li className={loc === 'Order' ? 'active' : ''} > <a href="/Order"> Siparişler </a> </li>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" size={56} className='menuuser' >
              Pınar ibiş
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/">Logout</Dropdown.Item>
              <Dropdown.Item href="/Home">Home</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
