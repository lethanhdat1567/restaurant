import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { privatePages, publicPages, adminPages } from './routes/routes';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import { Fragment } from 'react';
import MainLayout from './layouts/MainLayout/MainLayout';
import { useStateContext } from './contexts/ContextProvider';
import AdminLayout from './layouts/AdminLayout/AdminLayout';
import AdminHeaderOnly from './layouts/AdminHeaderOnly/AdminHeaderOnly';
import ScrollToTop from './utils/ScrollToTop';

function App() {
    const { user, token } = useStateContext();

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
