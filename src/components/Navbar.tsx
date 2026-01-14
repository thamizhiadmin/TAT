import { NavLink } from 'react-router-dom'

export default function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top border-bottom border-secondary">
			<div className="container">
				<NavLink to="/" className="navbar-brand d-flex align-items-center gap-2">
					<span className="rounded-circle d-inline-flex align-items-center justify-content-center bg-gradient-emerald" style={{ width: 36, height: 36 }}>
						<i className="bi bi-cpu text-dark"></i>
					</span>
					<span className="fw-bold" style={{ fontFamily: 'Poppins' }}>Thamizhi Automate Technology</span>
				</NavLink>

				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="nav">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item"><NavLink to="/" end className="nav-link">Home</NavLink></li>
						<li className="nav-item"><NavLink to="/services" className="nav-link">Services</NavLink></li>
						<li className="nav-item"><NavLink to="/portfolio" className="nav-link">Portfolio</NavLink></li>
						<li className="nav-item"><NavLink to="/about" className="nav-link">About</NavLink></li>
						<li className="nav-item"><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
					</ul>
					<div className="d-none d-lg-block ms-3">
						<a href="#contact" className="btn btn-emerald btn-sm">Get a Quote</a>
					</div>
				</div>
			</div>
		</nav>
	)
}

