import './App.css';
import Search from './Search';
import Logo from './Logo';
import App from './App';
import Footer from './Footer'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



function HomePage() {
    return (
        <main className="refrigeration-versification">
            <section className="poems-container">
                <Link to="/">
                    <Logo />
                </Link>
                <div className="poems-content">
                    <Search />
                </div>
            </section>
        </main>

    )
}


export default HomePage;