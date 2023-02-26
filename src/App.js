import React, {useState} from "react";
import './App.css';
import Router from "./Components/Router/Router";
import Loader from "./Components/Loader/Loader";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
    const [loading] = useState(false);
    if (loading) {
        return <Loader/>
    }
    return (
        <div className="App">
            <Router/>
        </div>
    );
}

export default App;
