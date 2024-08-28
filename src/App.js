import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { privatePages, publicPages, adminPages } from './routes/routes';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import { Fragment } from 'react';
import MainLayout from './layouts/MainLayout/MainLayout';
import { useStateContext } from './contexts/ContextProvider';
import AdminLayout from './layouts/AdminLayout/AdminLayout';

function App() {
    const { token } = useStateContext();
    return (
        <Router>
            <div className="App">
                <Routes>
                    {token
                        ? privatePages.map((route, index) => {
                              const Page = route.element;
                              const Layout = MainLayout;

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
                          })
                        : publicPages.map((route, index) => {
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
                    {/* {adminPages.map((route, index) => {
                        const Page = route.element;
                        const Layout = AdminLayout;

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
                    })} */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
