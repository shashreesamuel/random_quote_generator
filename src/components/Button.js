import React from 'react'

export default function Button( { title, clickEvent } ) {
    return (
        <div>
            <button onclick={clickEvent} className='cta-button'>{title}</button>
        </div>
    )
}
