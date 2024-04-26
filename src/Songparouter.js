import React from "react";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";


// <a href>
// react :link ->router -> 해당하는 페이지 include


import App from "./App";
import Ex1 from "./Ex1";
import Ex2 from "./Ex2";
import Ex3 from "./Ex3";
import for_while_dowhile_1 from './for_while_dowhile_1';


const routeComponents = [

    { path: "/App", component: App },
    { path: "/Ex1", component: Ex1 },
    { path: "/Ex2", component: Ex2 },
    { path: "/Ex3", component: Ex3 },
    { path: "/for_while_dowhile_1", component: for_while_dowhile_1 },



];

//react 18이전에는  router 불가능
function Appstart() {

    return (

        <Router>

            <nav>

                <ul>

                    {routeComponents.map((route, index) => (

                        <li key={index}>

                            <Link to={route.path}>{route.path.replace("/", "")}</Link>

                        </li>

                    ))}

                </ul>

            </nav>

            <Routes>

                {routeComponents.map((route, index) => (

                    <Route key={index} path={route.path} element={<route.component />} />

                ))}

            </Routes>

        </Router>

    );

}


export default Appstart;