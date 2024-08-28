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
    admin: '/admin',
    homeAdmin: '/admin/home',
    userAdmin: '/admin/users',
    productAdmin: 'admin/products',
    error: '*',
};

export default routes;
