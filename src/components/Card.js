import React from 'react';

const Card = ({id, name,username, email}) =>
{
    let card = (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5' key={id}>
            <img className='br-100 ba h5 w5 dib' alt='Robot' src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{username}</p>
                <p>{email}</p>
            </div>
        </div>
    );
    return card;
}

export default Card;