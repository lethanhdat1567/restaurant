import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        const topElement = document.getElementById('top');
        if (topElement) {
            topElement.scrollIntoView({ behavior: 'auto' });
        }
    }, [pathname]);

    return <div id="top" />;
};

export default ScrollToTop;
