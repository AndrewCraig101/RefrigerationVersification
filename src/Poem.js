import React from 'react';
import { useEffect, useState } from 'react';
import firebase from './firebase';

const Poem = () => {

	const [allPoems, setAllPoems] = useState([]);

	const [finalPoem, setFinalPoem] = useState('')

	useEffect(() => {
		const dbRef = firebase.database().ref();

		dbRef.on('value', (data) => {

			const poemData = data.val();
			const poemsEmptyArray = [];


			for (let poemKey in poemData) {
				poemsEmptyArray.push({
					key: poemKey,
					userPoem: poemData[poemKey]
				})
			}

			setAllPoems(poemsEmptyArray);

		})

	}, []);

	const handleChange = (event) => {
		setFinalPoem(event.target.value)
	}
	//form onsubmit handler 
	const handleSubmit = (event) => {
		event.preventDefault();
		// const databaseRef = firebase.database().ref();
		// databaseRef.push(finalPoem);
		// setFinalPoem("")
		console.log(event);
	}

	// const handleClick = (commentKey) => {
	// 	const databaseRef = firebase.database().ref();
	// 	databaseRef.child(commentKey).remove();
	// }

	const allowDrop = (e) => {
        e.preventDefault();
    }
    const drag = (e) => {
        e.dataTransfer.setData("text/plain", e.target.id);
    }
    const drop = (e) => {
        e.preventDefault();
        // Get the data, which is the id of the drop target
        let data = e.dataTransfer.getData("text");
        e.target.append(document.getElementById(data));
    }

	const handleClick = (event) => {
		const testBox = document.getElementsByClassName('testBox')
		console.log(event)
		console.log(event.target.textContent)
	}


	return (


		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="leavePoem">Displaying All Comments</label>
				<div id="leavePoem" className="dropBox resultsArea" draggable="true" onDrop={drop} onDragOver={allowDrop} onDragStart={drag} onClick={handleClick}>
				</div>
				<button className="addButton" >Add Comment</button>
			</form>
			<ul>
				{
					allPoems.map((poem) => {
						return (
							<li key={poem.key}>
								{poem.userPoem}
							</li>
						)
					})
				}

			</ul>
			<div className="testBox">

			</div>
		</div>

	)
}

export default Poem;