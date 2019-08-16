import React from 'react';
import './Header.scss';
import {Link} from 'react-router-dom';

const Header = (props) => {
	return (
		<header className="header">
			<h1>TodoList</h1>
			<Link className="header__links" to="/">
				Home
			</Link>{' '}
			|{' '}
			<Link className="header__links" to="/about">
				About
			</Link>
		</header>
	);
};

export default Header;
