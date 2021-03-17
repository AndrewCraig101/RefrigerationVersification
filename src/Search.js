import axios from 'axios';
import { Component } from 'react';
import firebase from './firebase';


//you have to call it like this when creating a constructor because thems the rules 
class Search extends Component {

    constructor() {
        //when using a constructor super is necessary because it allows us to use "this" 
        super();


        //state is initialized to create an array from the user input value
        this.state = {

            userSearch: "",

            chosenWord: [],
        }
    }
  
    //this function allows us to grab the value from the input without hitting the submit value

    handleChange = (e) => {
        this.setState({
            userSearch: e.target.value
        })
        console.log(e.target)
    }


    //this function submits the input value into the query variable to then perform an api call

    handleSubmit = (e) => {
        e.preventDefault()
        this.userSearch()

        this.setState({
            userSearch: ""
        })
    }

    allowDrop = (e) => {
        e.preventDefault();
    }
    drag = (e) => {
        e.dataTransfer.setData("text/plain", e.target.id);
    }
    drop = (e) => {
        e.preventDefault();
        // Get the data, which is the id of the drop target
        let data = e.dataTransfer.getData("text");
        e.target.append(document.getElementById(data));


    }


    savePoemToFireBase = () => {
        let poemText = [];
        const poemArea = document.querySelector(".poemArea");
        const poemAreaElements = poemArea.getElementsByTagName("li");
        Array.from(poemAreaElements).forEach(item => {
            poemText.push(item.innerText)
        });
        poemText = poemText.join("");
        poemArea.innerHTML = "";
        if (poemText !== "") {
        const dbRef = firebase.database().ref();
        dbRef.push(poemText);
        } else {
            console.log("poem is blank")
        }
    }


    // this function allows us to only call api on user search
    userSearch = () => {

        axios({
            method: "GET",
            url: "https://api.datamuse.com/words?",
            dataResponse: "JSON",
            params: {
                topics: this.state.userSearch,
                rel_bga: this.state.userSearch,
                format: "JSON",
                max: 50,
            },
        }).then((res) => {
            console.log(res)
            const wordResults = res.data
            console.log(wordResults)

            const filteredWordResults = wordResults.filter((results) => {
                if
                    (results.word === 'who' || results.word === "what" || results.word === "when" || results.word === "where" || results.word === "why" || results.word === "how" || results.word === "the" || results.word === "a" || results.word === "is" || results.word === "he" || results.word === "his" || results.word === "she" || results.word === "her" || results.word === "hers" || results.word === "they" || results.word === "them" || results.word === "their" || results.word === "there" || results.word === "are" || results.word === "it" || results.word === "I" || results.word === "you" || results.word === "my" || results.word === "for" || results.word === "and" || results.word === "or" || results.word === "me" || results.word === "your" || results.word === "but" || results.word === "so" || results.word === "that" || results.word === "in" || results.word === "on" || results.word === "as" || results.word === "of" || results.word === "by" || results.word === "was" || results.word === "had" || results.word === "from" || results.word === "will" || results.word === "can" || results.word === "would" || results.word === "this" || results.word === "all" || results.word === "only" || results.word === "out" || results.word === "with" || results.word === "which" || results.word === "went" || results.word === "did" || results.word === "then" || results.word === "like") {
                    results.word = null
                } else {
                    return results.word;
                }
            })

            const newState = []

            //creates our own array so you don't have to filter through all the json results
            filteredWordResults.map((results) => {
                return newState.push({
                    word: results.word,
                })

            })
            this.setState({
                chosenWord: newState,
            })
        })





    }



    render() {
        const constantWords = [
            "who", "what", "when", "where", "why", "how", "the", "a", "is", "he", "his", "she", "her", "hers", "they", "them", "their", "there", "are", "it", "I", "you", "my", "for", "and", "or", "me", "your", "but", "so", "that", "in", "on", "as", "of", "by", "was", "had", "from", "will", "can", "would", "this", "all", "only", "out", "with", "which", "went", "did", "then", "like"
        ]
        const constantPunctuation = [
            ".", ",", ":", "!", "?"
        ]
        return (
            <>
        
                <form onSubmit= {this.handleSubmit} className="search-bar">
                    <label className="sr-only" htmlFor="search">Search</label>
                    <input type="text" placeholder="enter word here" id="search" value={this.state.userSearch} onChange={this.handleChange}></input>
                    <button type="submit" >Search</button>
                </form>

                <div className="words-container">
                    <div className="left-side">
                        <h2>Results</h2>
                        <div class="dropBox resultsArea" onDrop={this.drop} onDragOver={this.allowDrop} onDragStart={this.drag}>
                            

                        <ul >
                            {
                                this.state.chosenWord.map((results, index ) => {
                                return (
                                    <li  id={index} onDragStart={this.drag}  draggable="true" key={index}>{results.word}</li>
                                        
                                )
                                })
                            }
                        </ul>
                    

            
                <h2>Poem Area</h2>
                <div  class="dropBox poemArea" onDrop={this.drop} onDragOver={this.allowDrop} onDragStart={this.drag} >
                </div>
                <button onClick={this.savePoemToFireBase}>Save Poem</button>
                
                        </div>
                        <br/>
                        <h2>Function and Suffixes</h2>
                        <div class="dropBox suffixArea" onDrop={this.drop} onDragOver={this.allowDrop} onDragStart={this.drag}></div>
                    </div>

                    <br/>
                    <div className="right-side">
                        <h2>Poem Area</h2>
                        <div class="dropBox poemArea" onDrop={this.drop} onDragOver={this.allowDrop} onDragStart={this.drag}></div>
                    </div>
                </div>


            </>

        )

    }

}

export default Search;