import './App.css';
import Logo from './Logo';
import App from './App';
import Poem from './Poem';
import Footer from './Footer';
import Facts from './Facts';
import PastLogo from './PastLogo';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



function FirebasePoems () {
    return (
        <body className="firebase">
            <main className="firebase-container">  
            <Link to="/">
                <PastLogo />
             </Link>
                <Facts/>
                <section className="past-poems-container">
                    <div className="imageContainer">
                        <img src="./assets/fridge.png" className="fridgeImage" alt=""/>
                    </div>
                <h1 className="firebaseTitle">Past Poems</h1>
                    <Poem />
                </section>
            </main>
        </body>
    )
}

export default FirebasePoems;