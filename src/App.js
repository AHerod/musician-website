import React, {Component} from 'react';
import './sass/style.scss';
import Album from "./components/Album";
import Discography from "./components/Discography";
import News from "./components/News";
import Header from "./components/Header";
import Home from "./components/Home";
import Tour from "./components/Tour";


class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Home/>
                <Album/>
                <News/>
                <Tour/>
            </div>

        );
    }
}

export default App;
