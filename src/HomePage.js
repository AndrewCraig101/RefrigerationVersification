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
            </section>
            <section>
                    <SavePoemArea/>
                    <div className="imageContainerMain">
                    <img src="./assets/fridgemain.png" className="fridgeImageMain" alt="" />
                    </div>
                    <JunoButton />
            </section>
        </main>

    )
}


export default HomePage;