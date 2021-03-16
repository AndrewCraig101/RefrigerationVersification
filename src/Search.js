import axios from 'axios';
import { Component } from 'react';


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
    // function allowDrop(ev) {
    //     ev.preventDefault();
    // }
    // function drag(ev) {
    //     ev.dataTransfer.setData(“text”, ev.target.id);
    // }
    // function drop(ev) {
    //     ev.preventDefault();
    //     var data = ev.dataTransfer.getData(“text”);
    //     ev.target.appendChild(document.getElementById(data));
    // }

    //this function allows us to grab the value from the input without hitting the submit value

    handleChange = (e) => {
        this.setState({
            userSearch: e.target.value
        })
        console.log(e.target.value)
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
                max: 10,
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
        {word: "who", id: "who"} , {word: "what", id: "what"} , {word: "when", id: "when"} , {word: "where", id: "where"} , {word: "why", id: "why"} , {word: "how", id: "how"} , {word: "the", id: "the"} , {word: "a", id: "a"} , {word: "is", id: "is"} , {word: "he", id: "he"} , {word: "his", id: "his"} , {word: "she", id: "she"} ,
        {word: "her", id: "her"} , {word: "hers", id: "hers"} , {word: "they", id: "they"} , {word: "them", id: "them"} , {word: "their", id: "their"} , {word: "there", id: "there"} , {word: "are", id: "are"} , {word: "it", id: "it"} , {word: "I", id: "I"} , {word: "you", id: "you"} , {word: "my", id: "my"} , {word: "for", id: "for"} , {word: "and", id: "and"} , {word: "or", id: "or"} , {word: "me", id: "me"} , {word: "your", id: "your"} , {word: "but", id: "but"} , {word: "or", id: "or"} , {word: "that", id: "that"} ,
        {word: "in", id: "in"} , {word: "on", id: "on"} , {word: "as", id: "as"} , {word: "of", id: "of"} , {word: "by", id: "by"} , {word: "was", id: "was"} , {word: "had", id: "had"} , {word: "from", id: "from"} , {word: "will", id: "will"} , {word: "can", id: "can"} , {word: "would", id: "would"}, {word: "this", id: "this"} , {word: "all", id: "all"} , {word: "only", id: "only"} , {word: "out", id: "out"} , {word: "with", id: "with"} , {word: "which", id: "which"} , {word: "went", id: "went"} , {word: "did" , id: "did"} , {word: "then", id: "then"} , {word: "like", id: "like"}
        ]
        const constantPunctuation = [
            {word: ".", id: "period"} , {word: ",", id: "comma"} , {word: ":", id: "colon"} , {word: "!", id: "exclamation"} , {word: "?", id: "question"}
        ]
        return (
            <>

                <form onSubmit={this.handleSubmit}>
                    <label className="sr-only" htmlFor="search">Search</label>
                    <input type="text" placeholder="enter word here" id="search" value={this.state.userSearch} onChange={this.handleChange}></input>
                    <button type="submit" >Search</button>
                </form>

                <h2>Results</h2>
                <div className="dropBox resultsArea" onDrop={this.drop} onDragOver={this.allowDrop} onDragStart={this.drag}>


                    <ul >
                        {
                            this.state.chosenWord.map((results, index) => {
                                return (
                                    <li id={index} onDragStart={this.drag} draggable="true" key={index}>{results.word}</li>

                                )
                            })
                        }
                    </ul>

                </div>
                <br />
                <h2>Function and Suffixes</h2>
                <div className="dropBox suffixArea" onDrop={this.drop} onDragStart={this.drag}>
                    <ul>
                        {
                            constantWords.map((word, index) => {
                                return (
                                    <li id={word.id} onDragStart={this.drag} draggable="true" key={index}>{word.word}</li>
                                )
                            })
                        }
                    </ul>
                    <ul>
                        {
                            constantPunctuation.map((word, index) => {
                                return (
                                    <li id={word.id} onDragStart={this.drag} draggable="true" key={index}>{word.word}</li>
                                )
                            })
                        }
                    </ul>
                </div>

                <br />
                <h2>Poem Area</h2>
                <form action="">
                <div className="dropBox poemArea" onDrop={this.drop} onDragOver={this.allowDrop} onDragStart={this.drag}></div>
                <button>CLICK</button>

                </form>
            </>

        )

    }

}

export default Search;