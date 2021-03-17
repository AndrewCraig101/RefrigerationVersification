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
                max: 55,
            },
        }).then((res) => {
            console.log(res)
            const wordResults = res.data
            console.log(wordResults)

            const filteredWordResults = wordResults.filter((results) => {
                if
                    (results.word === 'who' || results.word === "what" || results.word === "when" || results.word === "where" || results.word === "why" || results.word === "how" || results.word === "the" || results.word === "a" || results.word === "is" || results.word === "he" || results.word === "his" || results.word === "she" || results.word === "her" || results.word === "hers" || results.word === "they" || results.word === "them" || results.word === "their" || results.word === "there" || results.word === "are" || results.word === "it" || results.word === "I" || results.word === "you" || results.word === "my" || results.word === "for" || results.word === "and" || results.word === "or" || results.word === "me" || results.word === "your" || results.word === "but" || results.word === "so" || results.word === "that" || results.word === "in" || results.word === "on" || results.word === "as" || results.word === "of" || results.word === "by" || results.word === "was" || results.word === "had" || results.word === "from" || results.word === "will" || results.word === "can" || results.word === "would" || results.word === "this" || results.word === "all" || results.word === "only" || results.word === "out" || results.word === "with" || results.word === "which" || results.word === "went" || results.word === "did" || results.word === "then" || results.word === "like" || results.word === ".") 
                    {
                        results = null
                    } else {
                    return results.word
                } 
            })

            const newState = []

            //creates our own array so you don't have to filter through all the json results
            filteredWordResults.map((results) => {
                return newState.push({
                    word: results.word,
                    id: results,
                })

            })
            this.setState({
                chosenWord: newState,
            })
        })


    }



    render() {

        
        const constantWords = [
            { word: "who", id: "who" }, { word: "what", id: "what" }, { word: "when", id: "when" }, { word: "where", id: "where" }, { word: "why", id: "why" }, { word: "how", id: "how" }, { word: "the", id: "the" }, { word: "a", id: "a" }, { word: "is", id: "is" }, { word: "he", id: "he" }, { word: "his", id: "his" }, { word: "she", id: "she" },
            { word: "her", id: "her" }, { word: "hers", id: "hers" }, { word: "they", id: "they" }, { word: "them", id: "them" }, { word: "their", id: "their" }, { word: "there", id: "there" }, { word: "are", id: "are" }, { word: "it", id: "it" }, { word: "I", id: "I" }, { word: "you", id: "you" }, { word: "my", id: "my" }, { word: "for", id: "for" }, { word: "and", id: "and" }, { word: "or", id: "or" }, { word: "me", id: "me" }, { word: "your", id: "your" }, { word: "but", id: "but" }, { word: "or", id: "or" }, { word: "that", id: "that" }, { word: "in", id: "in" }, { word: "on", id: "on" }, { word: "as", id: "as" }, { word: "of", id: "of" }, { word: "by", id: "by" }, { word: "was", id: "was" }, { word: "had", id: "had" }, { word: "from", id: "from" }, { word: "will", id: "will" }, { word: "can", id: "can" }, { word: "would", id: "would" }, { word: "this", id: "this" }, { word: "all", id: "all" }, { word: "only", id: "only" }, { word: "out", id: "out" }, { word: "with", id: "with" }, { word: "which", id: "which" }, { word: "went", id: "went" }, { word: "did", id: "did" }, { word: "then", id: "then" }, { word: "like", id: "like" }, { word: "said", id: "said" }, { word: "to", id: "to" }, { word: "lol", id: "lol" }
        ]
        const constantPunctuation = [
            { word: ".", id: "period" }, { word: ":", id: "colon" }, { word: "!", id: "exclamation" }, { word: "?", id: "question" }, { word: `"`, id: "quoteOne" }, { word: `"`, id: "quoteTwo" }
        ]


        const emojis = [
            { emoji: "🙂", id: "smile" }, { emoji: "😉", id: "wink" }, { emoji: "😍", id: "heartEyes" }, { emoji: "😃", id: "grin" }, { emoji: "😩", id: "weary" }, { emoji: "😠", id: "angry" }, { emoji: "😂", id: "laugh" }, { emoji: "😮", id: "surprise" }, { emoji: "😭", id: "cry" }, { emoji: "😘", id: "winkKiss" }, { emoji: "😗", id: "kiss" }, { emoji: "🤩", id: "starEyes" }, { emoji: "😜", id: "tongueWink" }, { emoji: "😆", id: "grinSquint" }, { emoji: "😬", id: "grimace" }, { emoji: "😦", id: "frownOpen" }, { emoji: "😐", id: "meh" }, { emoji: "😔", id: "sad" }, { emoji: "💕", id: "hearts" }, { emoji: "💔", id: "brokenHeart" }, { emoji: "💩", id: "poop" }, { emoji: "🔥", id: "fire" }, { emoji: "✨", id: "sparkle" }, { emoji: "🌸", id: "flower" }
        ]

        return (
           <section>

                 <form onSubmit={this.handleSubmit} className="search-bar">
                    <label className="sr-only" htmlFor="search">Search</label>
                    <input required type="text" placeholder="enter word here" id="search" value={this.state.userSearch} onChange={this.handleChange}></input>
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
                                    <li  id={index} onDragStart={this.drag}  draggable="true" key={index}>{results.word}&nbsp;</li>
                                        
                                )
                                })
                            }
                        </ul>
                    
                            </div>
            
               
                
                        <br />
                        <h2>Function and Suffixes</h2>
                        <div class="dropBox suffixArea" onDrop={this.drop} onDragStart={this.drag}>
                            <ul>
                                {
                                    constantWords.map((word, index) => {
                                        return (
                                            <li id={word.id} onDragStart={this.drag} draggable="true" key={index}>{word.word}&nbsp; </li>
                                        )
                                    })
                                }
                                {
                                    constantPunctuation.map((word, index) => {
                                        return (
                                            <li id={word.id} onDragStart={this.drag} draggable="true" key={index}>{word.word}&nbsp;</li>
                                        )
                                    })
                                }
                                {
                                    emojis.map((word, index) => {
                                        return (
                                            <li id={word.id} onDragStart={this.drag} draggable="true" key={index}>{word.emoji}</li>
                                             
                                        )
                                    })
                                }
                            </ul>


                        </div>
                    </div>

                    <br />
                    <div className="right-side">
                        <h2>Poem Area</h2>
                        <div class="dropBox poemArea" onDrop={this.drop} onDragOver={this.allowDrop} onDragStart={this.drag}></div>
                        <button onClick={this.savePoemToFireBase}>Save Poem</button>
                    </div>
                </div>

                </section>

        )

    }

}

export default Search;