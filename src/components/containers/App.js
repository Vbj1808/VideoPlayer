import React from 'react';
import Player from './Player';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path = "/" component={Player} />
            //using the same component in below route becoz its not necessary to change the view
            <Route exact path = "/:curVideo" component={Player} /> 
        </Switch>
    </BrowserRouter>
)

export default App;