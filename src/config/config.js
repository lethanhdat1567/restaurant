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
    bookingHistory: '/booking/:slug',
    checkout: '/checkout',
    history: '/history',
    historyDetail: '/history/detail/:slug',
    userMainUpdate: '/profile/user/:slug',
    confirm: '/confirm',
    // Admin
    homeAdmin: '/',
    userAdmin: '/admin/users',
    productAdmin: 'admin/products',
    bookingAdmin: 'admin/bookings',
    blogAdmin: 'admin/blogs',
    blogCreate: 'admin/blogs/create',
    blogUpdate: 'admin/blogs/update/:slug',
    userCreate: 'admin/users/create',
    userUpdate: 'admin/users/update/:slug',
    productCreate: 'admin/products/create',
    productUpdate: 'admin/products/update/:slug',
    error: '*',
};

export default routes;
