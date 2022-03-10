import React from 'react'
import Home from './pages/Home'
import Mall from './pages/Mall'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/malls/:id" element={<Mall />} />
            </Routes>
        </Router>
    )
}

export default App