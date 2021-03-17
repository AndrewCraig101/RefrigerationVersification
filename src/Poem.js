import React from 'react';
import { useEffect, useState } from 'react';
import firebase from './firebase';

const Poem = () => {

	const [allPoems, setAllPoems] = useState([]);



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

	


	return (


		<div>
			
			<ul className="pastPoemContainer">
				{
					allPoems.map((poem) => {
						return (
							<li key={poem.key} className="pastPoemElement">
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