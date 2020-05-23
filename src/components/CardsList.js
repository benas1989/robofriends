import React from 'react';
import Card from './Card';
import './CardsList.css'

const CardsList = ({items}) =>
{
    let cards = items.map(item => Card({id:item.id, name:item.name,username:item.username, email:item.email}))
    if(cards.length === 0)
        return <h1>No results!</h1>
    return (<div className='cardsList'> {cards} </div>);
}

export default CardsList;