import reactLogo from '../images/react-logo.png'
function Header() {
	return (
		<header className="header">
			<div className="header__menu menu">
				<a href="" className="header__logo">
					<img src={reactLogo} alt="" width={"40px"} />
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
export default Header