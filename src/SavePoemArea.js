import firebase from './firebase'
import { Component } from 'react';

class SavePoemArea extends Component {

	constructor() {
        super();


        this.state = {

            userSearch: "",

            chosenWord: [],
        }
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

	allowDrop = (e) => {
        e.preventDefault();
    }

    drag = (e) => {
        e.dataTransfer.setData("text/plain", e.target.id);
    }

    drop = (e) => {
        e.preventDefault();
        let data = e.dataTransfer.getData("text");
        e.target.append(document.getElementById(data));
    }




	render() {
		return (

			<div className="rightSide">
			<h2>Poem Area</h2>
			<div class="dropBox poemArea" onDrop={this.drop} onDragOver={this.allowDrop} onDragStart={this.drag}></div>
			<button className="saveButton" onClick={this.savePoemToFireBase}>Save Poem</button>
		</div>
			)

		}
}

export default SavePoemArea;