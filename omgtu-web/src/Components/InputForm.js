import React from 'react';

export const InputForm = (props) => (
    <div>
        <input value={props.newItem} 
            onChange={props.onInputChange}/>
        <button onClick={props.onButtonClick}>Save</button>
    </div>
);