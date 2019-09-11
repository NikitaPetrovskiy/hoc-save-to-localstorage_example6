import React from 'react';
import PropTypes from 'prop-types';

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
TextInput.propTypes = {
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    children: PropTypes.node
}
