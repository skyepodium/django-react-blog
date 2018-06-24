import React, { Component } from 'react';
import '../css/Header/Header.css';

import Menu from './Menu/Menu';

class Header extends Component {
    render () {
        return (
            <div id="header">
                <Menu/>
                안녕하세요 리액트
            </div>
        );
    }
}

export default Header;