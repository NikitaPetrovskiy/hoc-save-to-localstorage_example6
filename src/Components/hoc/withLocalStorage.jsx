import React from 'react';

export const withLocalStorage = (Component, storageKey) => {
    return class extends React.Component {
        static displayName = '_withLocalStorage';
        constructor(props) {
            super(props);
            this.state = {
                value: ''
            }
            this.handleChange = this.handleChange.bind(this);
            this.saveToLocalStorage = this.saveToLocalStorage.bind(this);
            // this.returnValuesStorage = this.returnValuesStorage.bind(this);
        }
        componentDidMount() {
            // this.returnValuesStorage();
        }
        saveToLocalStorage(e) {
            localStorage.setItem(storageKey, e.target.value || this.state.value);
        }

        // это я решил поэксперементировать
        // возвращает значение из localStorage в input
        // returnValuesStorage() {
        //     this.setState({value: localStorage.getItem(storageKey) || ''});
        // }

        handleChange(e) {
            const target = e.target.value;
            this.setState({value: target})
            this.saveToLocalStorage(e);
        }
        render() {
            return (
                <Component {...this.state} {...this.props}
                           value={this.state.value} onChange={this.handleChange} />
            );
        }
    }
}
