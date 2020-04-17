import React from 'react';
import Child from './Child';

export default function Parent(props) {
    return (
        <div>
            <Child doWhatever={props.changeTheWorldEvent} newTrade={props.trade} />
            <Child doWhatever={props.keepTheWorldSameEvent} newTrade={props.trade} />
        </div>
    )
}
