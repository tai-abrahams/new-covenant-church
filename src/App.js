import React from 'react'
import './css/App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import Main from './components/Main'
import About from './components/About'
import Departments from './components/Departments'
import Women from './components/Women'
import Youth from './components/Youth'
import Satellite from './components/Satellite'

//change routes


const routes  = [
    {
        id:1,
        Component: Main,
        path: "/new-covenant-church",
        name: "HOME",
        exact: true
    }, {
        id:2,
        Component: About,
        path: '/new-covenant-church/about',
        name: "ABOUT US",
        exact: true
    }, {
        id:3,
        Component: Departments,
        path: '/new-covenant-church/departments',
        name: 'DEPARTMENTS',
        exact: true
    }, {
        Component: Women,
        path: '/new-covenant-church/women',
        name: 'WOMEN',
        exact: true
    }, {
        Component: Youth,
        path: '/new-covenant-church/youth',
        name: 'YOUTH',
        exact: true
    }, {
        Component: Satellite,
        path: '/new-covenant-church/satellite',
        name: 'SATELLITE',
        exact: true
    }
]


const App = () => {

    return(
        <div className="container-fluid d-flex flex-wrap flex-row justify-content-center m-0 p-0">
            <Router>
                <>
                <NavBar routes={routes}/>
                
                <div className="d-flex w-75 flex-column flex-wrap">
                <Switch>
                    {
                    routes.map( ({Component, path}) => (
                        
                            <Route key={path} exact path={path}>
                                <Component />
                            </Route>
                        
                    ))
                    }
                    </Switch>
                    </div>
                    </>
            </Router>
        </div>
    )

}

export default App;