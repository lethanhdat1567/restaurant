import config from '../config';
import Home from '../pages/Home/Home';

const publicPages = [{ element: Home, path: config.routes.home }];

const privatePages = [];

export { publicPages, privatePages };
