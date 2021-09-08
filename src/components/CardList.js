import React from 'react'
import '../styles/CardList.css'
import Card from "./Card";

const CardList = ({robots}) => {
    return(
        <div className={'robotsPage'}>
            {
                robots.map((user, i)=>{
                    return <Card
                        key={robots[i].id}
                        id={robots[i].id}
                        name={robots[i].name}
                        company={robots[i].company.name}
                        suite={robots[i].address.suite}
                    />
                })
            }

        </div>
    )
}
export default CardList