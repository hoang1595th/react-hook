import React, { useState, useEffect } from 'react';

function SubChild() {
	const [text, setText] = useState('I am sub-child component');

	useEffect(() => {
		const showWelcome = setTimeout(
			() => setText('Welcome to sub-child')
			, 5000
		)

		return () => {
			clearTimeout(showWelcome)
		}
	}, []);

	return (
		<div >
			{text}
		</div>
	);
}

function Child({ index }) {
	const [isDisplaySubChild, setIsDisplaySubChild] = useState(false);

	// update stateString when index change value
	useEffect(() => {
		if (index % 2 === 0) {
			setIsDisplaySubChild(true)
		} else {
			setIsDisplaySubChild(false)
		}
	}, [index]);

	return (
		<div>
			<div>child component:</div>
			{isDisplaySubChild && <SubChild />}
		</div>
	);
}

export default Child;