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
		const databaseRef = firebase.database().ref();
		databaseRef.push(finalPoem);
		setFinalPoem("")
	}

	// const handleClick = (commentKey) => {
	// 	const databaseRef = firebase.database().ref();
	// 	databaseRef.child(commentKey).remove();
	// }


	return (


		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="leavePoem">Displaying All Comments</label>
				<div>
					<textarea placeholder="Leave me a comment!" type="text" name="leavePoem" id="leavePoem" cols="30" rows="10" maxLength="200" required value={finalPoem} onChange={handleChange}></textarea>
					<button className="addButton">Add Comment</button>
				</div>
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
		</div>

	)
}

export default Poem;