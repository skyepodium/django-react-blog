import React, { Component } from 'react';
import 'css/Header/Header.css';

import Menu from 'Header/Menu/Menu';
import Logo from 'Header/Logo/Logo';
import Search from 'Header/Search/Search';

class Header extends Component {
    render () {
        return (
            <div id="header">
                <Menu />
                <Logo />
                <Search />
            </div>
        );
    }
}

export default Header;