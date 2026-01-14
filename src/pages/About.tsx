import SEO from '../lib/seo'

export default function About() {
	return (
		<div className="container section">
			<SEO title="About – Thamizhi Automate Technology" description="Innovating with automation across Microsoft 365 and modern web." />
			<h2 className="fw-bold mb-4" style={{ fontFamily: 'Poppins' }}>About</h2>
			<div className="row g-4">
				<div className="col-lg-8">
					<div className="card bg-dark border-secondary">
						<div className="card-body">
							<p className="mb-0 text-secondary">We deliver innovative automation solutions across SharePoint, Power Platform, and modern web applications in React. Our roadmap expands into embedded systems and IoT to connect business processes with the physical world.</p>
						</div>
					</div>
				</div>
				<div className="col-lg-4">
					<ul className="list-group list-group-flush">
						<li className="list-group-item bg-dark text-light border-secondary">Founded: 2025</li>
						<li className="list-group-item bg-dark text-light border-secondary">Focus: SharePoint, Power Platform, React</li>
						<li className="list-group-item bg-dark text-light border-secondary">Roadmap: Automation & IoT</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

