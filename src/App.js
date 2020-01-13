import React from 'react'
import {DomTree, Styles, Shield, Iframe} from "./components"
import { ShieldState } from './context/shield/ShieldState'
import './App.css'

function App() {
	return (
		<div className="App">
			<ShieldState>
				<Shield/>
				<DomTree/>
				<Styles/>
				<Iframe/>
			</ShieldState>
		</div>
		);
}

export default App;
