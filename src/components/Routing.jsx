import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Product from '../pages/Product'
import ProductList from '../pages/ProductList'

const Routing = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/home'><Home /></Route>
                <Route exact path='/login'><Login /></Route>
                <Route exact path='/register'><Register /></Route>
                <Route exact path='/Product'><Product /></Route>
                <Route exact path='/ProductsList'><ProductList /></Route>
                <Redirect from='/' to='/home' />

            </Switch>
        </div>
    )
}

export default Routing
