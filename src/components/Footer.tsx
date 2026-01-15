import { Link } from 'react-router-dom'

export default function Footer() {
	return (
		<footer className="mt-auto py-4 bg-dark border-top border-secondary">
			<div className="container d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
				<div className="text-secondary small">© {new Date().getFullYear()} Thamizhi Automate Technology</div>
				<ul className="nav">
					<li className="nav-item"><Link className="nav-link px-2 text-secondary" to="/">Home</Link></li>
					<li className="nav-item"><Link className="nav-link px-2 text-secondary" to="/services">Services</Link></li>
					<li className="nav-item"><Link className="nav-link px-2 text-secondary" to="/portfolio">Portfolio</Link></li>
					<li className="nav-item"><Link className="nav-link px-2 text-secondary" to="/contact">Contact</Link></li>
				</ul>
			</div>
		</footer>
	)
}

