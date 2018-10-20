import React, { Component } from 'react';
import { InputForm } from './InputForm';
import { ItemsList } from './ItemsList';

class ToDoComponent extends Component {
  
    state = {
        items: ['one', 'two', 'three' ],
        newItem: '' 
    };

    onInputChange = (event) => {
        this.setState({
            newItem: event.target.value
        });        
    }

    onButtonClick = () => {
        if(this.state.newItem === ''){
            return;
        }

        const newItemObject = {
            title: this.state.newItem,
            isComplete: false
        };

        this.setState({
            items:  [...this.state.items, newItemObject],
            newItem: ''
        });
    }

    render(){
        const { items, newItem } = this.state;

        return (
            <div>
                <InputForm newItem={newItem}
                    onInputChange={this.onInputChange}
                    onButtonClick={this.onButtonClick}/> 
                <ItemsList items={items} />
                
            </div>
        );
    }
}
  
export default ToDoComponent;