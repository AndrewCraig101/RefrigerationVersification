import './App.css';
import Logo from './Logo';
import App from './App';
import Poem from './Poem';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



function FirebasePoems () {
    return (
        <body className="firebase">
            <main className="firebase-container">  <Link to="/">
                <Logo />
            </Link>
                <section className="past-poems-container">
                    <div className="past-poems-content">
                        <Poem />
                    </div>
                </section>
                <Footer/>
            </main>
        </body>
    )
}

export default FirebasePoems;