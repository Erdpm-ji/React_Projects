import React from 'react';
import UserName from './UserName';
import Users from '../userprofile/Users';

const NavBar1 = ({ links }) => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        {links.map((link, index) => (
          <li key={index} style={styles.navItem}>
            <a href={link.href} style={styles.navLink}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// Basic inline styles for the navbar
const styles = {
  navbar: {
    backgroundColor: "red",
    padding: '1rem',
  },
  navList: {
    listStyleType: 'none',
    display: 'flex',
    gap: '50px',
    margin: 0,
    padding: 0,
  },
  navItem: {
    display: 'inline',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
  },
};

export default NavBar1;
