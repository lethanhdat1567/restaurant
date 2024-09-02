import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { privatePages, publicPages, adminPages } from './routes/routes';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import { Fragment, useEffect } from 'react';
import MainLayout from './layouts/MainLayout/MainLayout';
import { useStateContext } from './contexts/ContextProvider';
import AdminLayout from './layouts/AdminLayout/AdminLayout';
import AdminHeaderOnly from './layouts/AdminHeaderOnly/AdminHeaderOnly';
import ScrollToTop from './utils/ScrollToTop';
import { request } from './utils/request';
import { useDispatch, useSelector } from 'react-redux';
import { usersSlice } from './redux/reducer/UserSlice';

function App() {
    const dispatch = useDispatch();

    const { user, token } = useStateContext();
    const userRedux = useSelector((state) => state.user.user);

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
        if (user?.id && !userRedux?.id) {
            request
                .get(`users/${user?.id}`)
                .then((res) => {
                    dispatch(usersSlice.actions.getUser(res.data.data));
                    dispatch(usersSlice.actions.updateAvatar(res.data.data.avatar));
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [user?.id]);
    return (
        <Router>
            <ScrollToTop />
            <div className="App" style={{ overflowX: 'hidden' }}>
                {!token && handleRoute(publicPages, DefaultLayout)}
                {token && user?.role_id === 1 && handleRoute(privatePages, MainLayout)}
                {token && user?.role_id === 2 && handleRoute(adminPages, AdminLayout)}
            </div>
        </Router>
    );
}

export default App;
