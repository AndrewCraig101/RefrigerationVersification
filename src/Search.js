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

            userSuggestion: [],

            chosenWord: [],

            autoWords: [],
           
        }
        
    }

    //this function allows us to grab the value from the input without hitting the submit value

    handleChange = (e) => {
        this.setState({
            userSearch: e.target.value,
            userSuggestion: e.target.value
        })
        this.setState({
            suggestion: " ",
        })
         axios({
                 url: `https://api.datamuse.com/sug?s=${this.state.userSuggestion}`, 
                 params: {
                   max: 5,
                 }
               }).then((res) => {
                 // console.log(res)
                    const autoresults = (res.data)
                  
                const suggestion = []

                autoresults.map((autoword) => {
                    return suggestion.push({
                        word: autoword.word,
                        id: autoword.score,
                    })
                })
                this.setState({
                    autoWords: suggestion,
                })


               }).catch((error) => {
                // Error
                if (error.response) {
                   
                    console.log(error.response.data);
                  
                } else if (error.request) {
                   
                    console.log(error.request);
                } else {
                    
                    console.log('Error', error.message);
                }
                console.log(error.config);
            });  
           
    }


    //this function submits the input value into the query variable to then perform an api call

    handleSubmit = (e) => {
        e.preventDefault()
        this.userSearch()

        this.setState({
            userSearch: ""
        })
    }

    handleClick = (e) => {
        const poemArea = document.querySelector(".poemArea");
        poemArea.innerHTML = "";
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
                max: 55,
            },
        }).then((res) => {
            console.log(res)
            const wordResults = res.data
            console.log(wordResults)

            const filteredWordResults = wordResults.filter((results) => {
                if
                (results.word === 'who' || results.word === "what" || results.word === "when" || results.word === "where" || results.word === "why" || results.word === "how" || results.word === "I" || results.word === "he" || results.word === "his" || results.word === "she" || results.word === "her" || results.word === "hers" || results.word === "they" || results.word === "them" || results.word === "their" || results.word === "there" || results.word === "this" || results.word === "you" || results.word === "your" || results.word === "me" || results.word === "we" || results.word === "it" || results.word === "they" || results.word === "a" || results.word === "an" || results.word === "and" || results.word === "or" || results.word === "that" || results.word === "are" || results.word === "is" || results.word === "was" || results.word === "had" || results.word === "will" || results.word === "can" || results.word === "would" || results.word === "went" || results.word === "did" || results.word === "said" || results.word === "for" || results.word === "but" || results.word === "in" || results.word === "on" || results.word === "as" || results.word === "of" || results.word === "by" || results.word === "from" || results.word === "out" || results.word === "with" || results.word === "like" || results.word === "to" || results.word === ".") 
                    {
                        results = null
                } 
                return results.word
            })
        
            const newState = []

            //creates our own array so you don't have to filter through all the json results
            filteredWordResults.map((results) => {
                return newState.push({
                    word: results.word,
                    id: results.score,
                })

            })
            this.setState({
                chosenWord: newState,
            })
        }).catch((error) => {
            // Error
            if (error.response) {
               
                console.log(error.response.data);
              
            } else if (error.request) {
               
                console.log(error.request);
            } else {
                
                console.log('Error', error.message);
            }
            console.log(error.config);
        });  

    }



    render() {

        const questionWords = [
            { word: "who", id: "who" }, { word: "what", id: "what" }, { word: "when", id: "when" }, { word: "where", id: "where" }, { word: "why", id: "why" }, { word: "how", id: "how" }
        ]

        const pronouns = [
            { word: "I", id: "I" }, { word: "he", id: "he" }, { word: "his", id: "his" }, { word: "she", id: "she" },
            { word: "her", id: "her" }, { word: "hers", id: "hers" }, { word: "they", id: "they" }, { word: "them", id: "them" }, { word: "their", id: "their" }, { word: "there", id: "there" }, { word: "this", id: "this" }, { word: "you", id: "you" }, { word: "your", id: "your" }, { word: "me", id: "me" }, { word: "we", id: "we" }, { word: "it", id: "it" },
        ]

        const articleWords = [
            { word: "the", id: "the" }, { word: "a", id: "a" }, { word: "an", id: "an" },
        ]

        const conjunction = [
            { word: "and", id: "and" }, { word: "or", id: "or" }, { word: "that", id: "that" },
        ]

        const verbs = [
            { word: "are", id: "are" }, { word: "is", id: "is" }, { word: "was", id: "was" }, { word: "had", id: "had" }, { word: "will", id: "will" }, { word: "can", id: "can" }, { word: "would", id: "would" }, { word: "went", id: "went" }, { word: "did", id: "did" }, { word: "said", id: "said" },
        ]

        const preposition = [
            { word: "for", id: "for" }, { word: "but", id: "but" }, { word: "in", id: "in" }, { word: "on", id: "on" }, { word: "as", id: "as" }, { word: "of", id: "of" }, { word: "by", id: "by" }, { word: "from", id: "from" }, { word: "out", id: "out" }, { word: "with", id: "with" }, { word: "like", id: "like" }, { word: "to", id: "to" },
        ]



        const constantPunctuation = [
            { word: ".", id: "period" }, { word: ":", id: "colon" }, { word: "!", id: "exclamation" }, { word: "?", id: "question" }, { word: `"`, id: "quoteOne" }, { word: `"`, id: "quoteTwo" }
        ]


        const emojis = [
            { emoji: "🙂", id: "smile" }, { emoji: "😉", id: "wink" }, { emoji: "😍", id: "heartEyes" }, { emoji: "😃", id: "grin" }, { emoji: "😩", id: "weary" }, { emoji: "😠", id: "angry" }, { emoji: "😂", id: "laugh" }, { emoji: "😮", id: "surprise" }, { emoji: "😭", id: "cry" }, { emoji: "😘", id: "winkKiss" }, { emoji: "😗", id: "kiss" }, { emoji: "🤩", id: "starEyes" }, { emoji: "😜", id: "tongueWink" }, { emoji: "😆", id: "grinSquint" }, { emoji: "😬", id: "grimace" }, { emoji: "😦", id: "frownOpen" }, { emoji: "😐", id: "meh" }, { emoji: "😔", id: "sad" }, { emoji: "💕", id: "hearts" }, { emoji: "💔", id: "brokenHeart" }, { emoji: "💩", id: "poop" }, { emoji: "🔥", id: "fire" }, { emoji: "✨", id: "sparkle" }, { emoji: "🌸", id: "flower" }
        ]

        return (
           <section>
               
                 <form onSubmit={this.handleSubmit} className="searchBar">
                    <label className="sr-only" htmlFor="search">Search</label>
                    <input required type="text" placeholder="enter word here" id="search" value={this.state.userSearchthis.state.userSuggestion} onChange={this.handleChange} ></input>
                    <button type="submit" onClick={this.handleClick}>Search</button>
                    <div className="autoResults">
                        <ul>
                            {
                                this.state.autoWords.map(
                                    (results, index) => {
                                        return (
                                            <li key={index}>{results.word}</li>
                                        )
                                    }
                                )
                            }
                        </ul>
                    </div>
                </form>

               
                
                 <div className="wordsContainer">
                    <div className="leftSide">

                        <h2>Results</h2>
                        <div class="dropBox resultsArea" draggable="true" onDrop={this.drop} onDragStart={this.drag} onDragOver={this.allowDrop}>
                            

                            <ul >
                                {
                                    this.state.chosenWord.map((results, index ) => {
                                    return (
                                        <li  id={results.id} onDragStart={this.drag} draggable="true" key={index}>{results.word}&nbsp;</li>
                                        
                                            
                                    )
                                    })
                                }
                            </ul>
                    
                        </div>
            
               
                
                        <br />
                        <h2>Helpful Words</h2>
                        <div class="dropBox suffixArea" onDrop={this.drop} onDragStart={this.drag} onDragOver={this.allowDrop}>
                            <ul>
                                <h3>Questions</h3>
                                    {
                                        questionWords.map((word, index) => {
                                            return (
                                                <li id={word.id} onDragStart={this.drag} draggable="true" key={index}>{word.word}&nbsp; </li>
                                            )
                                        })
                                    }
                                <h3>Pronouns</h3>
                                    {
                                        pronouns.map((word, index) => {
                                            return (
                                                <li id={word.id} onDragStart={this.drag} draggable="true" key={index}>{word.word}&nbsp; </li>
                                            )
                                        })
                                    }
                                <h3>Articles</h3>
                                    {
                                        articleWords.map((word, index) => {
                                            return (
                                                <li id={word.id} onDragStart={this.drag} draggable="true" key={index}>{word.word}&nbsp; </li>
                                            )
                                        })
                                    }
                                <h3>Conjunctions</h3>
                                    {
                                        conjunction.map((word, index) => {
                                            return (
                                                <li id={word.id} onDragStart={this.drag} draggable="true" key={index}>{word.word}&nbsp; </li>
                                            )
                                        })
                                    }
                                <h3>Verbs</h3>
                                    {
                                        verbs.map((word, index) => {
                                            return (
                                                <li id={word.id} onDragStart={this.drag} draggable="true" key={index}>{word.word}&nbsp; </li>
                                            )
                                        })
                                    }
                                <h3>Prepositions</h3>
                                    {
                                        preposition.map((word, index) => {
                                            return (
                                                <li id={word.id} onDragStart={this.drag} draggable="true" key={index}>{word.word}&nbsp; </li>
                                            )
                                        })
                                    }
                                <h3>Punctuation</h3>
                                    {
                                        constantPunctuation.map((word, index) => {
                                            return (
                                                <li id={word.id} onDragStart={this.drag} draggable="true" key={index}>{word.word}&nbsp;</li>
                                            )
                                        })
                                    }
                                <h3>Emoji</h3>
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
                </div>
                
                </section>

        )

    }

}

export default Search;