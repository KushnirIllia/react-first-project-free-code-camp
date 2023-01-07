import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
const App = (
	<div className="main-section">
		<div className="main-section__container">
			<div className="main-section__image">
				<img src="./react-logo.png" alt="react logo" />
			</div>
      <div className="main-section__wrapper">
        <h1 className="main-section__title">Fun facts about React</h1>
				<ul className="list main-section__list">
					<li className="list__item">Was first released in 2023</li>
					<li className="list__item">Was originally created by Jordan Walke</li>
					<li className="list__item">Has well over 100K stars on Github</li>
					<li className="list__item">Is maintained by Facebook</li>
					<li className="list__item">lorem...</li>
				</ul>
			</div>
		</div>
	</div>
)
root.render(App)
