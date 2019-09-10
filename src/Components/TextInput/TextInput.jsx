import React from 'react';

export const TextInput = (props) => {
        return (
            <div className={props.className}>
                <input id={props.id} type={props.type}
                       value={props.value} onChange={props.onChange}
                       placeholder={props.placeholder} />
                {props.children}
            </div>
        )
}
