import React, { Component } from 'react';
import ToDoComponent from './Components/ToDoComponent';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <ToDoComponent />
            </div>
        );
    }
}

export default App;
