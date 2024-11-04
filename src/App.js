import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { privatePages, publicPages, adminPages } from './routes/routes';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import { Fragment, useEffect, useState } from 'react';
import MainLayout from './layouts/MainLayout/MainLayout';
import { useStateContext } from './contexts/ContextProvider';
import AdminLayout from './layouts/AdminLayout/AdminLayout';
import AdminHeaderOnly from './layouts/AdminHeaderOnly/AdminHeaderOnly';
import ScrollToTop from './utils/ScrollToTop';
import { request } from './utils/request';
import { useDispatch, useSelector } from 'react-redux';
import { usersSlice } from './redux/reducer/UserSlice';
import Loading from './components/Loading/Loading';

function App() {
    const dispatch = useDispatch();

    const { user, token, setUser, setToken } = useStateContext();
    const [loading, setLoading] = useState(false);

    const handleRoute = (route, layout) => {
        return (
            <Routes>
                {route.map((route, index) => {
                    const Page = route.element;
                    let Layout = layout;
                    if (route.layout) {
                        Layout = route.layout;
                    } else if (route.layout === null) {
                        Layout = Fragment;
                    }
                    return (
                        <Route
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                            path={route.path}
                            key={index}
                        />
                    );
                })}
            </Routes>
        );
    };

    useEffect(() => {
        if (token && !user?.id) {
            setLoading(true);
            request
                .get('user')
                .then((res) => {
                    setUser(res.data);
                    dispatch(usersSlice.actions.getUser(res.data));
                    dispatch(usersSlice.actions.updateAvatar(res.data.avatar));
                    setLoading(false);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [token]);

    return (
        <Router basename="/restaurant">
            <ScrollToTop />
            <div className="App" style={{ overflowX: 'hidden' }}>
                {loading && (
                    <div style={{ position: 'fixed', inset: '0', background: '#000', opacity: '0.7', zIndex: '1' }}>
                        <Loading />
                    </div>
                )}
                {!token && handleRoute(publicPages, DefaultLayout)}
                {token && user?.role_id == 1 && handleRoute(privatePages, MainLayout)}
                {token && user?.role_id == 2 && handleRoute(adminPages, AdminLayout)}
            </div>
        </Router>
    );
}

export default App;
