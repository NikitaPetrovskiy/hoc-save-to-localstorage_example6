import React from 'react';

const getDisplayName = (Component) => {
    return Component.displayName || Component.name ||
        'Component';
}

export const withLocalStorage = (Component, storageKey) => {
    class WithLocalStorage extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                value: ''
            }
            this.handleChange = this.handleChange.bind(this);
            this.saveToLocalStorage = this.saveToLocalStorage.bind(this);
        }
        saveToLocalStorage(e) {
            localStorage.setItem(storageKey, e.target.value || this.state.value);
        }
        handleChange(e) {
            const target = e.target.value;
            this.setState({value: target})
            this.saveToLocalStorage(e);
        }
        render() {
            return (
                <Component {...this.props} value={this.state.value}
                           onChange={this.handleChange} />
            );
        }
    }
    WithLocalStorage.displayName = `_WithLocalStorage(${getDisplayName(Component)})`;
    return WithLocalStorage;
}
