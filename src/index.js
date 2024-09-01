import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import GlobalStyle from './components/GlobalStyles/GlobalStyle';
import ContextProvider from './contexts/ContextProvider';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobalStyle>
            <ContextProvider>
                <Provider store={store}>
                    <App />
                </Provider>
            </ContextProvider>
        </GlobalStyle>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
