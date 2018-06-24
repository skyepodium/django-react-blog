import React, { Component } from 'react';

import 'css/Header/Menu/Menu.css';

class Menu extends Component {
    render () {
        return (
            <div id="menu">
                <img id="menu_image" src = {require('image/Header/Menu/Menu.png')} />
            </div>
        );
    }
}

export default Menu;