import './App.css';
import Search from './Search';
import Logo from './Logo';
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
                <SavePoemArea />
            </section>
                <Link to="/pastpoems">
                    <PoemsButton />
                </Link>
                <JunoButton />
        </main>

    )
}


export default HomePage;