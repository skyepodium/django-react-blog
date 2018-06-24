import React, { Component } from 'react';

import 'css/Header/Search/Search.css';


class Search extends Component {
    render () {
        return (
            <div id="search">
                <img id="search_image" src = {require('image/Header/Search/Search.png')} />
            </div>
        );
    }
}

export default Search;