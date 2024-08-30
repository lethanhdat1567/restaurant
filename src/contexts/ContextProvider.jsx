import { useContext, useEffect } from 'react';
import { request } from '../utils/request';

const { useState } = require('react');
const { createContext } = require('react');

const StateContext = createContext({
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {},
});

export default function ContextProvider({ children }) {
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));
    const [user, setUser] = useState((prev) => {
        if (token) {
            request.get('user').then((data) => {
                setUser(data.data);
            });
        } else {
            return {};
        }
    });

    const setToken = (token) => {
        _setToken(token);
        if (token) {
            localStorage.setItem('ACCESS_TOKEN', token);
        } else {
            localStorage.removeItem('ACCESS_TOKEN');
        }
    };

    return (
        <StateContext.Provider
            value={{
                user: user,
                token: token,
                setUser: setUser,
                setToken: setToken,
            }}
        >
            {children}
        </StateContext.Provider>
    );
}

export const useStateContext = () => useContext(StateContext);
