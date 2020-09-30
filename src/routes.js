import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Cart from './pages/Cart';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Cart} />
            </Switch>
        </BrowserRouter>

    );
}