// yada yada yda making a component

//get all shelves

//receive an array from database containing all shelves -- get_shelves.sql
//map over that array -- for each item in array, display shelf component.

import React from 'react';
import {Component } from 'react';
import {Link} from 'react-router-dom';
// import Shelf from './Shelf.js';
// import Nav from './Nav.js';
import ShelfTile from './ShelfTile/ShelfTile.js';
import axios from 'axios';



export default class Landing extends Component {
    constructor() {
        super ();
        this.state = {
            shelves: [],

        }
        
    }

//methods


componentDidMount() {
    return axios.get('http://localhost:3000/api/bins').then(response => {
        const shelfCopy = response.data;
        this.setState({shelves: shelfCopy})
    }, console.log(this.state.shelves) )
}




render () {
  
    // variable that will store a mapped array that renders shelftile for each item in the array
    var shelfList = this.state.shelves.map((shelf) => 
    (
       <ShelfTile
       key={ shelf.id }
       name={ shelf.name }
     />
    )
)

    return (
        
        <div>
            
            {shelfList}     

        </div>
    )
}

}