import Footer from '../components/Footer';
import HeaderPublic from '../components/HeaderPublic';

function DefaultLayout({ children }) {
    return (
        <div>
            <HeaderPublic />
            <div className="content">{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
