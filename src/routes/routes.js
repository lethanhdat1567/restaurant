import config from '../config';
import AboutUs from '../pages/AboutUs/AboutUs';
import Blog from '../pages/Blog/Blog';
import BlogDetail from '../pages/BlogDetail/BlogDetail';
import Cart from '../pages/Cart/Cart';
import CheckOut from '../pages/CheckOut/CheckOut';
import Home from '../pages/Home/Home';
import Menu from '../pages/Menu/Menu';
import ProductDetail from '../pages/ProductDetail/ProductDetail';

const publicPages = [
    { element: Home, path: config.routes.home },
    { element: AboutUs, path: config.routes.aboutus },
    { element: Menu, path: config.routes.menu },
    { element: ProductDetail, path: config.routes.productDetail },
    { element: Blog, path: config.routes.blog },
    { element: CheckOut, path: config.routes.checkout },
    { element: Cart, path: config.routes.cart },
    { element: BlogDetail, path: config.routes.blogDetail },
];

const privatePages = [];

export { publicPages, privatePages };
