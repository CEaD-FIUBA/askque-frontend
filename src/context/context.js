import React from 'react';

export const AppContext = React.createContext({});



const tokenIsNull = localStorage.getItem('token') === null
const tokenIsNullString = localStorage.getItem('token') === "null"


console.log('Is logged', !tokenIsNull && !tokenIsNullString)

export class AppContextProvider extends React.Component {

    state = {
        token: localStorage.getItem('token'),
        isLogged: !tokenIsNull && !tokenIsNullString,
        isTeacher: localStorage.getItem('isTeacher') === "true",
        isAdmin: localStorage.getItem('isAdmin') === "true"
    }

    setToken = (token) => {
        this.setState({ token, isLogged: token !== null }, () => { localStorage.setItem('token', token) })
    }

    isTeacher = () => {
        this.setState({ ...this.state, isTeacher: true }, () => { localStorage.setItem('isTeacher', true) })
    }

    isAdmin = (value) => {
        this.setState({ ...this.state, isAdmin: value }, () => { localStorage.setItem('isAdmin', value) })
    }

    logout = () => {
        this.setState({ token: null, isLogged: false, isTeacher: false }, () => { localStorage.clear() })
    }

    render() {
        return (
            <AppContext.Provider
                value={{
                    state: this.state,
                    setToken: this.setToken,
                    isTeacher: this.isTeacher,
                    logout: this.logout,
                    isAdmin: this.isAdmin

                }}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}


export const AppContextConsumer = AppContext.Consumer;