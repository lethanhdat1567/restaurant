const routes = {
    // Public
    home: '/',
    aboutus: '/aboutus',
    menu: '/menu',
    productDetail: '/productdetail/:slug',
    blog: '/blog',
    cart: '/cart',
    blogDetail: '/blogdetail/:slug',
    contact: '/contact',
    profile: '/profile',
    // Private
    booking: '/booking',
    checkout: '/checkout',
    // Admin
    homeAdmin: '/',
    userAdmin: '/admin/users',
    productAdmin: 'admin/products',
    bookingAdmin: 'admin/bookings',
    error: '*',
};

export default routes;
