import axios from 'axios';
import { Component } from 'react';

 //you have to call it like this when creating a constructor because thems the rules 
class Search extends Component {

    constructor () {
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
        console.log(e.target.value)
    }


    //this function submits the input value into the query variable to then perform an api call

    handleSubmit = (e) => {
        e.preventDefault()
        this.userSearch()

        this.setState ({
            userSearch: ""
        })
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
                max: 40,
            },
            }).then((res) => {
                console.log(res)
                const wordResults = res.data
                console.log(wordResults)
                
                const newState = []
                
                //creates our own array so you don't have to filter through all the json results
                wordResults.map( (results) => {
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
        return (
            <>
        
                <form onSubmit= {this.handleSubmit}>
                    <label className="sr-only" htmlFor="search">Search</label>
                    <input type="text" placeholder="enter word here" id="search" value={this.state.userSearch} onChange={this.handleChange}></input>
                    <button type="submit" >Search</button>
                </form>


                <ul>
                    {
                        this.state.chosenWord.map((results, index ) => {
                        return (
                            <li key={index}>{results.word}</li>
                                   
                        )
                        })
                    }
                </ul>
            </>
            
        )

    }
    
}

export default Search;