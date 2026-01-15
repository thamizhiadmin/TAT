import { Link } from 'react-router-dom'
import SEO from '../lib/seo'

export default function Home() {
	return (
		<div>
			<SEO title="Thamizhi Automate Technology – SharePoint, Power Platform, React" description="Innovative automation across SharePoint, Power Platform, and React. Building toward IoT." />
			<section className="position-relative text-center text-light">
				<div className="bg-dark">
					<div className="container section">
						<div className="row align-items-center g-4">
							<div className="col-12 col-lg-7 text-start">
								<h1 className="display-5 fw-bold" style={{ fontFamily: 'Poppins' }}>Thamizhi Automate Technology</h1>
								<p className="lead mt-3">Innovate Integrate Accelerate</p>
								<p className="mt-3 text-secondary">SharePoint solutions, Power Platform automation, and production-grade React web apps. Building toward IoT and embedded automation.</p>
								<div className="d-flex flex-wrap gap-3 mt-4">
									<Link to="/services" className="btn btn-emerald">Our Services</Link>
									<Link to="/portfolio" className="btn btn-outline-light">See Portfolio</Link>
								</div>
							</div>
							<div className="col-12 col-lg-5">
								<div className="glass rounded-4 p-4">
									<div className="row text-start g-3">
										<div className="col-12">
											<div className="d-flex align-items-start gap-3">
												<i className="bi bi-share text-emerald fs-3"></i>
												<div>
													<h6 className="mb-1">SharePoint</h6>
													<p className="mb-0 small text-secondary">Information architecture, lists, permissions, governance, and automation.</p>
												</div>
											</div>
										</div>
										<div className="col-12">
											<div className="d-flex align-items-start gap-3">
												<i className="bi bi-diagram-3 text-emerald fs-3"></i>
												<div>
													<h6 className="mb-1">Power Platform</h6>
													<p className="mb-0 small text-secondary">Power Automate flows, approval workflows, PowerApps, Power pages, PowerBi and integrated reporting.</p>
												</div>
											</div>
										</div>
										<div className="col-12">
											<div className="d-flex align-items-start gap-3">
												<i className="bi bi-code-slash text-emerald fs-3"></i>
												<div>
													<h6 className="mb-1">React Web Apps</h6>
													<p className="mb-0 small text-secondary">Responsive, accessible, and fast single-page applications.</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section">
				<div className="container">
					<div className="row g-4">
						<div className="col-md-4">
							<div className="card bg-dark border-secondary h-100">
								<div className="card-body">
									<h5 className="card-title">Form Automation</h5>
									<p className="card-text text-secondary">Dynamic forms feeding SharePoint lists with validation and automated approvals.</p>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card bg-dark border-secondary h-100">
								<div className="card-body">
									<h5 className="card-title">Subsite + Lists + Permissions</h5>
									<p className="card-text text-secondary">Automated site provisioning with secure permission models via Power Automate.</p>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card bg-dark border-secondary h-100">
								<div className="card-body">
									<h5 className="card-title">Outlook Reporting</h5>
									<p className="card-text text-secondary">Automated scheduled reports to Outlook with insights from SharePoint data.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="py-5 bg-gradient-emerald">
				<div className="container text-center">
					<h5 className="mb-2 text-dark" style={{ fontFamily: 'Poppins' }}>Next: Automation with Embedded & IoT</h5>
					<p className="mb-0 text-dark">We are building toward device telemetry, edge triggers, and secure integrations.</p>
				</div>
			</section>
		</div>
	)
}

