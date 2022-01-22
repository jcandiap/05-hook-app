import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import { NavBar } from './NavBar';
import { LoginScreen } from './LoginScreen';
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <Routes>
                    <Route exact path="/" element={ <HomeScreen/> }/>
                    <Route exact path="/about" element={ <AboutScreen/> }/>
                    <Route exact path="/login" element={ <LoginScreen/> }/>
                    <Route path="*" element={ <HomeScreen/> }/>
                </Routes>
            </div>
        </Router>
    )
}
