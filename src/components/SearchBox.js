import React from 'react'
import '../styles/SeaarchBox.css'

const SearchBox = ({searchChange}) => {
    return(
        <div className={'searchWrapper'}>
            <input
                className={'searchBox'}
                type={'search'}
                placeholder={'Search robots'}
                onChange={searchChange}
            />
        </div>
    )
}
export default SearchBox