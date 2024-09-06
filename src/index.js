import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'tippy.js/dist/tippy.css';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyle from './components/GlobalStyles/GlobalStyle';
import ContextProvider from './contexts/ContextProvider';
import { Provider } from 'react-redux';
import store from './redux/store';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <GlobalStyle>
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <ContextProvider>
                <Provider store={store}>
                    <App />
                </Provider>
            </ContextProvider>
        </SkeletonTheme>
    </GlobalStyle>,
    // </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
