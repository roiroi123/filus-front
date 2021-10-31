import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import Product from './Product'
import ProductList from './ProductList'
import Cart from './Cart'

const Routing = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/home'><Home /></Route>
                <Route exact path='/login'><Login /></Route>
                <Route exact path='/register'><Register /></Route>
                <Route exact path='/Product'><Product /></Route>
                <Route exact path='/ProductsList'><ProductList /></Route>
                <Route exact path='/cart'><Cart /></Route>
                <Redirect from='/' to='/home' />

            </Switch>
        </div>
    )
}

export default Routing
