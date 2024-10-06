import React from 'react';
import NavBar from './NavBar1';

const Nav = () => {
  const links = [
    { text: 'Home', href: '#home' },
    { text: 'About', href: '#about' },
    { text: 'Contact', href: '#contact' },
    { text: 'Profile', href: '#profile'}
  ];

  return (
    <div>
      <NavBar links={links} />
      <h1>Welcome to My Website</h1>
    </div>
  );
};

export default Nav;
