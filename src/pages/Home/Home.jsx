import { useEffect } from 'react';
import Subscribe from '../../components/Subscribe/Subscribe';
import Blog from './components/Blog/Blog';
import Book from './components/Book/Book';
import Chefs from './components/Chefs/Chefs';
import Dowload from './components/Dowload/Dowload';
import Gallery from './components/Gallery/Gallery';
import Hero from './components/Hero/Hero';
import Info from './components/Info/Info';
import Menu from './components/Menu/Menu';
import Restaurants from './components/Restaurants/Restaurants';

function Home() {
    return (
        <div>
            <Hero />
            <Info />
            <Gallery />
            <Menu />
            <Restaurants />
            <Book />
            <Chefs />
            <Blog />
            <Dowload />
            <Subscribe />
        </div>
    );
}

export default Home;
