import './App.css';
// dev information
console.log(navigator.userAgent);

function App() {
	return (
		<div className="content">
			<h1 className="header">Coub Enhancer</h1>
			<div className="visual">
				<ul>
					<li>Coub Layout: <select id="layoutChoice">
							<option value="defLayout">Default</option>
							<option value="ytLayout">YouTube</option>
							<option value="twLayout">Twitch</option>
						</select>
					</li>
					<li>Coub style: <select id="styleChoice">
							<option value="defStyle">Default</option>
							<option value="compStyle">Compact</option>
							<option value="zenStyle">"Zen"</option>
						</select>
					</li>
				</ul>
			</div>
		</div>
	);
}
export default App;