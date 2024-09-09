import React from 'react'
import './Login.css'


const Login = () => {
	return (
		<div className="App-body">
			<p>Login to access the full dashboard</p>
			{/* modify app */}
			<div className="modified">
				<div>
					<label htmlFor="email" className="input-label">
						Email:{" "}
					</label>
					<input type="email" id="email" name="email"></input>
				</div>
				<div>
					<label htmlFor="password" className="input-label">
						Password:{" "}
					</label>
					<input type="password" id="password" name="password"></input>
				</div>
				<button>OK</button>
			</div>
		</div>
	)
}

export default Login