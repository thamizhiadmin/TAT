import SEO from '../lib/seo'

export default function Services() {
	return (
		<div className="container section">
			<SEO title="Services – Thamizhi Automate Technology" description="SharePoint, Power Platform automation, React web apps, and IoT roadmap." />
			<h2 className="fw-bold mb-4" style={{ fontFamily: 'Poppins' }}>Services</h2>
			<div className="row g-4">
				<div className="col-md-6 col-lg-3">
					<div className="card bg-dark border-secondary h-100">
						<div className="card-body">
							<i className="bi bi-share fs-2 text-emerald"></i>
							<h5 className="mt-2">SharePoint</h5>
							<p className="text-secondary">Information architecture, list design, permissions, governance, and site provisioning.</p>
						</div>
					</div>
				</div>
				<div className="col-md-6 col-lg-3">
					<div className="card bg-dark border-secondary h-100">
						<div className="card-body">
							<i className="bi bi-diagram-3 fs-2 text-emerald"></i>
							<h5 className="mt-2">Power Platform</h5>
							<p className="text-secondary">Power Automate workflows, approvals, governance, Power Apps, and reporting.</p>
						</div>
					</div>
				</div>
				<div className="col-md-6 col-lg-3">
					<div className="card bg-dark border-secondary h-100">
						<div className="card-body">
							<i className="bi bi-code-slash fs-2 text-emerald"></i>
							<h5 className="mt-2">React Web Apps</h5>
							<p className="text-secondary">Frontend engineering, SPA development, integrations, dashboards, and portals.</p>
						</div>
					</div>
				</div>
				<div className="col-md-6 col-lg-3">
					<div className="card bg-dark border-secondary h-100">
						<div className="card-body">
							<i className="bi bi-cpu fs-2 text-emerald"></i>
							<h5 className="mt-2">Automation & IoT (Roadmap)</h5>
							<p className="text-secondary">Embedded integrations, device telemetry, and automation at the edge.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

