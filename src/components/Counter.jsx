import { useState } from 'react'

// Om man vill använda "function" i stället för att göra en arrow function:
// function Counter() {
const Counter = () => {
	const [clicks, setClicks] = useState(0)

	const handleClick = () => {
		setClicks(c => c + 1)
	}
	return (
		<div className="framed">
			<p> Antal klick: {clicks} </p>
			<button onClick={handleClick}> Klicka mig </button>
		</div>
	)
}

export default Counter
// Olika syntax för set-funktionen:
// setClicks(clicks + 1)
// setClicks(c => c + 1)
