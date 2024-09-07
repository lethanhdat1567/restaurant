import config from '../config';
import AdminHeaderOnly from '../layouts/AdminHeaderOnly/AdminHeaderOnly';
import MainHeaderOnly from '../layouts/MainHeaderOnly/MainHeaderOnly';
import AboutUs from '../pages/AboutUs/AboutUs';
import Blog from '../pages/Blog/Blog';
import BlogAdmin from '../pages/BlogAdmin/BlogAdmin';
import BlogCreate from '../pages/BlogCreate/BlogCreate';
import BlogDetail from '../pages/BlogDetail/BlogDetail';
import BlogUpdate from '../pages/BlogUpdate/BlogUpdate';
import Booking from '../pages/Booking/Booking';
import BookingAdmin from '../pages/BookingAdmin/BookingAdmin';
import BookingHistory from '../pages/BookingHistory/BookingHistory';
import Cart from '../pages/Cart/Cart';
import CheckOut from '../pages/CheckOut/CheckOut';
import Confirm from '../pages/Confirm/Confirm';
import Contact from '../pages/Contact/Contact';
import FormUserUpdate from '../pages/FormUserUpdate/FormUserUpdate';
import History from '../pages/History/History';
import HistoryDetail from '../pages/HistoryDetail/HistoryDetail';
import Home from '../pages/Home/Home';
import HomeAdmin from '../pages/HomeAdmin/HomeAdmin';
import Menu from '../pages/Menu/Menu';
import NotFound from '../pages/NotFound/NotFound';
import ProductAdmin from '../pages/ProductAdmin/ProductAdmin';
import ProductCreate from '../pages/ProductCreate/ProductCreate';
import ProductDetail from '../pages/ProductDetail/ProductDetail';
import ProductUpdate from '../pages/ProductUpdate/ProductUpdate';
import Profile from '../pages/Profile/Profile';
import UserAdmin from '../pages/UserAdmin/UserAdmin';
import UserCreate from '../pages/UserCreate/UserCreate';
import UserUpdate from '../pages/UserUpdate/UserUpdate';

const publicPages = [
    { element: Home, path: config.routes.home },
    { element: AboutUs, path: config.routes.aboutus },
    { element: Menu, path: config.routes.menu },
    { element: ProductDetail, path: config.routes.productDetail },
    { element: Blog, path: config.routes.blog },
    { element: CheckOut, path: config.routes.checkout },
    { element: Cart, path: config.routes.cart },
    { element: BlogDetail, path: config.routes.blogDetail },
    { element: Contact, path: config.routes.contact },
    { element: NotFound, path: config.routes.error },
];

const privatePages = [
    { element: Home, path: config.routes.home },
    { element: AboutUs, path: config.routes.aboutus },
    { element: Menu, path: config.routes.menu },
    { element: ProductDetail, path: config.routes.productDetail },
    { element: Blog, path: config.routes.blog },
    { element: CheckOut, path: config.routes.checkout },
    { element: Cart, path: config.routes.cart },
    { element: BlogDetail, path: config.routes.blogDetail },
    { element: Contact, path: config.routes.contact },
    { element: Booking, path: config.routes.booking },
    { element: Profile, path: config.routes.profile },
    { element: History, path: config.routes.history },
    { element: HistoryDetail, path: config.routes.historyDetail },
    { element: Confirm, path: config.routes.confirm },
    { element: BookingHistory, path: config.routes.bookingHistory },
    { element: NotFound, path: config.routes.error },
    { element: FormUserUpdate, path: config.routes.userMainUpdate, layout: MainHeaderOnly },
];
const adminPages = [
    { element: HomeAdmin, path: config.routes.homeAdmin },
    { element: UserAdmin, path: config.routes.userAdmin },
    { element: UserCreate, path: config.routes.userCreate, layout: AdminHeaderOnly },
    { element: UserUpdate, path: config.routes.userUpdate, layout: AdminHeaderOnly },
    { element: ProductAdmin, path: config.routes.productAdmin },
    { element: ProductCreate, path: config.routes.productCreate, layout: AdminHeaderOnly },
    { element: ProductUpdate, path: config.routes.productUpdate, layout: AdminHeaderOnly },
    { element: BookingAdmin, path: config.routes.bookingAdmin },
    { element: BlogAdmin, path: config.routes.blogAdmin },
    { element: BlogCreate, path: config.routes.blogCreate, layout: AdminHeaderOnly },
    { element: BlogUpdate, path: config.routes.blogUpdate, layout: AdminHeaderOnly },
    { element: NotFound, path: config.routes.error },
];

export { publicPages, privatePages, adminPages };
