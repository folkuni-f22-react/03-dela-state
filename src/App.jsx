import { useState } from 'react'
import Counter from './components/Counter.jsx'
import SharedCounter from './components/SharedCounter.jsx'
import './App.css'

function App() {
	const [clicks, setClicks] = useState(0)
	return (
		<div className="App">
			<h1> Dela state mellan komponenter </h1>
			<div className="framed flex-row">
				<Counter />
				<Counter />
				<Counter />
			</div>
			<div className="framed flex-row">
				<SharedCounter clicks={clicks} setClicks={setClicks} />
				<SharedCounter clicks={clicks} setClicks={setClicks} />
				<SharedCounter clicks={clicks} setClicks={setClicks} />
			</div>
		</div>
	)
}

export default App
