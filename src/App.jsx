import { useState, useEffect } from 'react';
import Options from './components/Options';
import Notification from './components/Notification';
import Freedback from './components/Freedback';


const App = () => {
	const handleClick = () => {
		alert("I'm a button!");
	};

	return <button onClick={handleClick}>Click me!</button>;
};

export default App
