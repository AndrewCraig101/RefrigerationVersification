import './App.css';
import Search from './Search';
import Logo from './Logo';
import App from './App';
import PoemsButton from './PoemsButton';
import JunoButton from './JunoButton';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
<<<<<<< HEAD
// import AutoComplete from './AutoComplete';
=======
import SavePoemArea from './SavePoemArea';
>>>>>>> 26618d1f35906794e6d9ae39cd32a5e8878a70a3



function HomePage() {
    return (
        <main className="refrigeration-versification">
<<<<<<< HEAD
            {/* <AutoComplete/> */}
            <section className="poems-container">
=======
            <section className="resultsContainer">
>>>>>>> 26618d1f35906794e6d9ae39cd32a5e8878a70a3
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