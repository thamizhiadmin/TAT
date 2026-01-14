export default function Footer() {
	return (
		<footer className="mt-auto py-4 bg-dark border-top border-secondary">
			<div className="container d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
				<div className="text-secondary small">© {new Date().getFullYear()} Thamizhi Automate Technology</div>
				<ul className="nav">
					<li className="nav-item"><a className="nav-link px-2 text-secondary" href="/">Home</a></li>
					<li className="nav-item"><a className="nav-link px-2 text-secondary" href="/services">Services</a></li>
					<li className="nav-item"><a className="nav-link px-2 text-secondary" href="/portfolio">Portfolio</a></li>
					<li className="nav-item"><a className="nav-link px-2 text-secondary" href="/contact">Contact</a></li>
				</ul>
			</div>
		</footer>
	)
}

