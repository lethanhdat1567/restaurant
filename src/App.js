import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicPages } from './routes/routes';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import { Fragment } from 'react';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicPages.map((route, index) => {
                        const Page = route.element;
                        const Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.Layout;
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
            </div>
        </Router>
    );
}

export default App;
