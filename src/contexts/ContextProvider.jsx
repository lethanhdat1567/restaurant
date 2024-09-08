import { useContext } from 'react';
import { request } from '../utils/request';
import { Bounce, toast } from 'react-toastify';

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
    const [user, setUser] = useState({});

    const setToken = (token) => {
        _setToken(token);
        if (token) {
            localStorage.setItem('ACCESS_TOKEN', token);
        } else {
            localStorage.removeItem('ACCESS_TOKEN');
        }
    };

    const toastify = (message, type) => {
        toast[type](`${message}`, {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: 'light',
            transition: Bounce,
        });
    };

    return (
        <StateContext.Provider
            value={{
                user: user,
                token: token,
                setUser: setUser,
                setToken: setToken,
                toastify: toastify,
            }}
        >
            {children}
        </StateContext.Provider>
    );
}

export const useStateContext = () => useContext(StateContext);
