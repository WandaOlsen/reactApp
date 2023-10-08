import React from 'react';
import {HashRouter as Router,Switch,Route} from "react-router-dom"
import Home from "./../pages/Home/Home"
import Shop from "./../pages/Shop/Shop"
import Mine from "./../pages/Mine/Mine"
import Live from "./../pages/Live/Live"
import Layout from "./../pages/Layout/Layout"
import City from '../pages/City/City';
import Search from '../pages/Search/Search';

export default function AppRouter(){
    return(
        <>
            <Router>
                <Switch>
                    <Route path={'/city'} component={City}/>
                    <Route path={'/search/:val'} component={Search}/>
                    <Layout>
                        <Route exact path={"/"} component={Home}/>
                        <Route path={"/shop"} component={Shop}/>
                        <Route path={"/live"} component={Live}/>
                        <Route path={"/mine"} component={Mine}/>
                    </Layout>
                </Switch>
            </Router>
        </>
    )
};

