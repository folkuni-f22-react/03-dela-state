import { useState } from 'react'

// function SharedCounter({ clicks, setClicks }) {
const SharedCounter = ({ clicks, setClicks }) => {

	const handleClick = () => {
		setClicks(c => c + 1)
	}
	return (
		<div className="framed">
			<p> Antal totala klick: {clicks} </p>
			<button onClick={handleClick}> Klicka mig </button>
		</div>
	)
}

export default SharedCounter
