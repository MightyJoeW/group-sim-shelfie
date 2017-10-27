import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './src/components/Landing/Landing.js';
import Nav from './src/components/Nav/Nav.js';
import Shelf from './src/components/Shelf/Shelf.js';
import Bin from './src/components/Bin/Bin.js';
import AddInventory from './src/components/Bin/AddInventory.js';

export default (
    <Switch>
        <Route exact path ="/" component={Landing} />
        <Route path="/bins/:name" component={Shelf} />
        <Route path="/bins/:name:id" component={Bin} />
        <Route path="/create-bin/:id" component={AddInventory} />
    </Switch>
)