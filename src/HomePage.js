import './App.css';
import Search from './Search';
import Logo from './Logo';
import App from './App';
import PoemsButton from './PoemsButton';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



function HomePage() {
    return (
        <main className="refrigeration-versification">
            <section className="poems-container">
                <Link to="/">
                    <Logo />
                </Link>
                <Link to="/pastpoems">
                    <PoemsButton/>
                </Link>
                <div className="poems-content">
                    <Search />
                </div>
                    <div className="imageContainerMain">
                    <img src="./assets/fridgemain.png" className="fridgeImageMain" alt="" />
                    </div>
            </section>
        </main>

    )
}


export default HomePage;