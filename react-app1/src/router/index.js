import React from 'react';
import {BrowserRouter, Route, Switch,Link,Redirect} from 'react-router-dom';
import lazyLoad from '../common/lazyLoad'
import Home from '../components/home';
//import Mine from '../components/mine';
const Mine = lazyLoad(() => import( /* webpackChunkName: "mine" */ '../components/mine'));

const BasicRoute = () => (
    <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? '/app-react' : '/'}>
        <div id="nav">
            <Link to="/">Home</Link> |
            <Link to="/mine">Mine</Link>
        </div>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/mine" component={Mine}/>
            <Redirect to="/"/>
        </Switch>
    </BrowserRouter>
);


export default BasicRoute;