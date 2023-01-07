import React, { Component } from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
/* 
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
*/
function Header() {
	return (
		<header className="header">
			<div className="header__menu menu">
				<a href="" className="header__logo">
					<img src="./react-logo.png" alt="" width={"40px"} />
				</a>
				<nav className="menu__body">
					<ul className="menu__list">
						<li className="menu__item">
							<a href="" className="menu__link">
								Pricing
							</a>
						</li>
						<li className="menu__item">
							<a href="" className="menu__link">
								About
							</a>
						</li>
						<li className="menu__item">
							<a href="" className="menu__link">
								Contact
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}
function Footer() {
	return (
		<>
			<footer className={"footer"}>Footer</footer>
		</>
	)
}
function Title() {
	return (
		<>
			<h1>Title</h1>
		</>
	)
}
function List() {
	return (
		<>
			<ul className="list">
				<li className="list__item">Was first released in 2023</li>
				<li className="list__item">Was originally created by Jordan Walke</li>
				<li className="list__item">Has well over 100K stars on Github</li>
				<li className="list__item">Is maintained by Facebook</li>
				<li className="list__item">lorem...</li>
			</ul>
		</>
	)
}
function App() {
	return (
		<div className="wrapper">
			<Header />
			<main className="main">
				<Title />
				<List />
			</main>
			<Footer />
		</div>
	)
}
root.render(<App />)
