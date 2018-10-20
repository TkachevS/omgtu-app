import React from 'react';

export const ItemsList = ({ items }) => (
    <ul>
        {items.map(item => (
            <li>
                {item.title}
                <input type="checkbox" checked={item.isComplete}/>
            </li>
        ))}
    </ul>
);