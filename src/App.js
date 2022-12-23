import './App.css';
// dev information
console.log(navigator.userAgent);

function App() {
	return (
		<div className="content">
			<h1 className="header"><a href="https://coub.com/" className="link-to-coub">Coub Enhancer</a></h1>
			<div className="visual">
				<ul>
					<li>Coub Layout: <select name="" id="">
							<option value="">Default</option>
							<option value="">YouTube</option>
							<option value="">Twitch</option>
						</select>
					</li>
					<li>Coub style: <select name="" id="">
							<option value="">Default</option>
							<option value="">Compact</option>
							<option value="">"Zen"</option>
						</select>
					</li>
				</ul>
			</div>
		</div>
	);
}
export default App;