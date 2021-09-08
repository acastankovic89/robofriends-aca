import React from 'react'
import '../styles/Card.css'

const Card = ({id,name,suite,company}) => {
    return (
        <div className={'cardWrapper'}>
            <img src={`https://robohash.org/${id}?200x200`} alt={'robots'}/>
            <h3>{name}</h3>
            <p>{suite}</p>
            <p>{company}</p>

        </div>
    )
}

export default Card