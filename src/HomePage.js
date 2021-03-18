import './App.css';
import Search from './Search';
import Logo from './Logo';
import App from './App';
import PoemsButton from './PoemsButton';
import JunoButton from './JunoButton';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SavePoemArea from './SavePoemArea';



function HomePage() {
    return (
        <main className="refrigeration-versification">
            <section className="resultsContainer">
                <Link to="/">
                    <Logo />
                </Link>
                <div className="poems-content">
                    <Search />
                </div>
            </section>
            <section className="fridgeContainer">
                <div className="imageContainerMain">
                    <img src="./assets/fridgemain.png" className="fridgeImageMain" alt="" />
                </div>
                <SavePoemArea />
                <Link to="/pastpoems">
                    <PoemsButton />
                </Link>
                <JunoButton />
            </section>
        </main>

    )
}


export default HomePage;