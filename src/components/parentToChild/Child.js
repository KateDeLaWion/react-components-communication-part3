import React from 'react'

export default function Child (props) {
    return (
        <div>
            <button onClick={props.doWhatever}> {props.newTrade} </button>
        </div>
    )
}




