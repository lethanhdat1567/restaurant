import config from '../config';
import AboutUs from '../pages/AboutUs/AboutUs';
import Home from '../pages/Home/Home';
import Menu from '../pages/Menu/Menu';

const publicPages = [
    { element: Home, path: config.routes.home },
    { element: AboutUs, path: config.routes.aboutus },
    { element: Menu, path: config.routes.menu },
];

const privatePages = [];

export { publicPages, privatePages };
