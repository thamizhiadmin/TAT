import SEO from '../lib/seo'

export default function Portfolio() {
	const projects = [
		{ title: 'Form Automation', desc: 'Dynamic forms to SharePoint with validations and approvals.', icon: 'bi-ui-checks-grid' },
		{ title: 'Subsite + Lists + Permissions', desc: 'Automated provisioning with secure permission models.', icon: 'bi-diagram-3' },
		{ title: 'Outlook Reporting', desc: 'Scheduled email reports from SharePoint/Power Automate.', icon: 'bi-envelope-paper' },
	]

	return (
		<div className="container section">
			<SEO title="Portfolio – Thamizhi Automate Technology" description="Ongoing projects: Form Automation, Site Provisioning, Outlook Reporting." />
			<h2 className="fw-bold mb-4" style={{ fontFamily: 'Poppins' }}>Portfolio</h2>
			<div className="row g-4">
				{projects.map(p => (
					<div key={p.title} className="col-md-6 col-lg-4">
						<div className="card bg-dark border-secondary h-100">
							<div className="card-body">
								<i className={`bi ${p.icon} fs-2 text-emerald`}></i>
								<h5 className="mt-2">{p.title}</h5>
								<p className="text-secondary">{p.desc}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

