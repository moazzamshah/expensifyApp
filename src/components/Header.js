import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1> Expensify </h1>
      <div>
        <NavLink
          style={{ padding: '10px' }}
          to='/'
          exact
          activeClassName='is-active'
        >
          Dashboard
        </NavLink>
        <NavLink
          style={{ padding: '10px' }}
          to='/create'
          activeClassName='is-active'
        >
          Add Expense
        </NavLink>
        <NavLink
          style={{ padding: '10px' }}
          to='/edit'
          activeClassName='is-active'
        >
          Edit Expense
        </NavLink>
        <NavLink
          style={{ padding: '10px' }}
          to='/help'
          activeClassName='is-active'
        >
          Help Page
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
