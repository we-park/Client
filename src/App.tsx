import React, {Component} from 'react';
import './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                {/* Header bar */}
                <div className="navigation-bar">
                    <ul>
                        <li>
                            <div className="brand">
                                <img src="logo.svg"/>
                            </div>
                        </li>
                        <li>
                            <div className="search">
                                <input type="text"/>
                                <span className="search-icon"></span>
                            </div>
                        </li>
                        <li>
                            <div className="dropdown-icon">
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Sidebar */}
                <div className="side-bar">
                    <ul>
                        <li>
                            <div className="sidebar-item">

                            </div>
                        </li>
                        <li>
                        </li>
                    </ul>
                </div>

                {/* Body, we can call this wepark shell */}
            </div>
        );
    }
}

export default App;
