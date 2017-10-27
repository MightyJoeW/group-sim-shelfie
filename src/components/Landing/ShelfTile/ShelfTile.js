import React, {Component} from "react";
import {Link} from 'react-router-dom';
import "./ShelfTile.css";

class ShelfTile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="shelf-box">
                    <span>Shelf {this.props.name}</span>
                </div>
               
            </div>
        )
    }
}

export default ShelfTile;