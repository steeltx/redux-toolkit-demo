import { useDispatch, useSelector } from 'react-redux';
import reactLogo from './assets/react.svg';
import { increment } from './store/slices/counter/';
import viteLogo from '/vite.svg';
import './App.css';

function App() {

	// obtener del estado el contador
	const { counter } = useSelector( (state) => state.counter);
	const dispatch = useDispatch();

	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>count is {counter}</h1>
			<div className="card">
				<button onClick={() => dispatch(increment() )}>
					Increment
				</button>
			</div>
		</>
	)
}

export default App
